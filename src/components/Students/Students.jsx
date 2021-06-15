import React, { useState } from 'react';
import { TiMinus, TiPlus } from 'react-icons/ti';
import SearchBar from '../SearchBar/SearchBar';
import './Students.css';



export default function Students({ student: {firstName, lastName,  pic, company, email, skill, grades}}) {
    
    const [gradesList, setGradesList] = useState(false);
    const [search, setSearch] = useState('');
    const [tagInput, setTagInput] = useState('');
    const [tagName, setTagName] = useState([]);
    

 

    const displayGrades = () => {
        setGradesList(!gradesList);
    };

  
     const handleInputChange = (e) => {
         setTagInput(e.target.value);

     };

     const handleSubmit = (e) => {
         e.preventDefault();
         tagName.push(tagInput);
         setTagName(tagName);
         setTagInput([]);
     };


     const handleSearch = (e) => {
        setSearch(e.target.value);
    };


    // Filter students' tags based on tag search input
    const filteredTags = tagName.filter(tagNam =>
        tagNam.toLowerCase().includes(search.toLowerCase()));


    return (
        <div className='student-card'>
            <img className='student-img' src={pic} alt='student-logo' />
            <div className='student-ctn'>
                <h1 className='student-title'>{firstName} {lastName}</h1>
                <p>Email: {email} </p>
                <p>Company: {company}</p>
                <p>Skill: {skill} </p>
                <p>Average: {
                    grades.map(num => parseInt(num, 10)).reduce((total, currentNum) => total + currentNum) / grades.length} % </p>
                {
                    gradesList ?

                        <div>
                            {
                                grades.map((grade, index) => (  
                                 
                                    <p>Test {`Test ${index + 1}: ${grade}%`}</p>
                                ))
                            }
                           
                            {
                                filteredTags.map(tag => (
                                    <div className='tag-ctn'>
                                        <span className='student-tag'  key={filteredTags.indexOf(tag)}>{tag}</span>
                                    </div>

                                ))
                            }
                            <form onSubmit={handleSubmit}>
                                <SearchBar placeholder='Add a tag' handleChange={handleInputChange} search={tagInput} tagBar />
                            </form>
                            <SearchBar placeholder='Search by tag' handleChange={handleSearch} search={search}  tagBar  />
                            
                        </div>
                        : null
                }
            </div>
        
            <button className='icon-btn' type='button' onClick={displayGrades}>
                {
                    gradesList ?

                        <TiMinus className='icon' size='2.5em' color='gray'  />
                        :
                        <TiPlus className='icon' size='2.5em' color='gray' />
                }
            </button>
        </div>
    );
};
 


 /* Render tags based on the results of filtered array ----------> linea 64/}

    {/* Click expand button, Toggle plus icon and show student's expandable list view -------> linea 80
    
     <p>Test {`Test ${index + 1}: ${grade}%`}</p> 
    
    */


