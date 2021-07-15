import React, { useState, useEffect } from 'react';
import Students from './components/Students/Students.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';


import './App.css';

 function App() {

  const [students, setStudents] = useState([]);
  const [searchName, setSearchName] = useState('');
 


  
   //Fetch students from API...
   const getStudents =  () => {
    try {
       fetch('https://hw.io/api/assessment/students')
        .then((response) => {
         return response.json();
        })
        .then(data => {
          const changes = data?.students.map(item => ({
            ...item,
         
       }))
          setStudents(changes)
         // console.log(setStudents)  

        })
      
    }
    catch(error){
      console.log(`Fetch API Error: ${error}`)
   }
  }

  useEffect(() => {
    getStudents();
  }, [students]);
        
      
    const handleChange = e => {
      setSearchName(e.target.value);
    };

  
    // Filter students by query...
    const filteredStudents = students?.filter(student =>
      student.firstName.toLowerCase().includes(searchName.toLowerCase()) || student.lastName.toLowerCase().includes(searchName.toLowerCase()));
  
  
    return (
      <div className='App'>
        <SearchBar className='search-bar' placeholder='Search by name' handleChange={handleChange} searchName={searchName} />
        {
          filteredStudents?.map(student => (
            <Students key={student.id} student={student} />
          ))
        }
      </div>
    );
};

export default App;


 
 

  


 


