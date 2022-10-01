import './App.css';
import React from 'react';
import Select from 'react-select';

const degrees = [
  {label: "Computer Science", value: 1},
];

const concentrations = [
  {label: "Software Engineering", value: 1},
  {label: "Cybersecurity", value: 2}
];

const years = [
  {label: "2021", value: 1},
  {label: "2022", value: 2}
];

const App = () => (  
    <div className="App">
        <div className="header">
            
        </div>
        
        <h1>Welcome to GEAUX DEG</h1>
        <h2>Please select your degree, concentration, and booklet year.</h2>
        <div className='selection_box'>
            <div className='dropdown' name="degree">
                <Select 
                  options={degrees} 
                  placeholder="Select a Degree"
                  autosize={true}
                />
            </div>
            <div className='dropdown' name="concentration">
                <Select 
                  options={concentrations} 
                  placeholder="Select a Concentration"
                  autosize={true}
                />
            </div>
            <div className='dropdown' name="year">
                <Select 
                  options={years} 
                  placeholder="Select a Year"
                  autosize={true}
                />
            </div>

            <button>Get Schedule</button>
        </div>
    </div>
);

export default App;
