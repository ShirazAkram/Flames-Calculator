import React, { useState } from 'react';

function HomePage() {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [result, setResult] = useState('');

  const calculateRelationship = () => {
    // Remove spaces and convert both names to lowercase
    const name1 = firstName.replace(/ /g, '').toLowerCase();
    const name2 = secondName.replace(/ /g, '').toLowerCase();
    
    if (name1 === '' || name2 === '') {
      setResult('Please Enter valid input');
      return;
    }
  
    const charCount = {};
  
    for (const char of name1) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    for (const char of name2) {
      if (charCount[char] > 0) {
        charCount[char]--;
      }
    }
  
    let totalCount = 0;
    for (const char in charCount) {
      totalCount += charCount[char];
    }
  
    const flamesResult = totalCount % 6;
    switch (flamesResult) {
      case 1:
        setResult('Friends');
        break;
      case 2:
        setResult('Love');
        break;
      case 3:
        setResult('Affection');
        break;
      case 4:
        setResult('Marriage');
        break;
      case 5:
        setResult('Enemy');
        break;
      case 0:
        setResult('Siblings');
        break;
      default:
        setResult('Unknown Relationship');
    }
  };
  

  const clearInputs = () => {
    setFirstName('');
    setSecondName('');
    setResult('');
  };

  return (
    <div className='homepage-div'> 
        <div className='first-input-div'>
            <input
                type="text"
                data-testid="input1"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
        </div>

        <div className='sec-input-div'>
            <input
                type="text"
                data-testid="input2"
                placeholder="Second Name"
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)}
            />
        </div>

        <div className='cal-btn'>
            <button data-testid="calculate_relationship" onClick={calculateRelationship}>
                Calculate Relationship Future
            </button>
        </div>

        <div className='clr-btn'>
            <button data-testid="clear" onClick={clearInputs}>
                Clear & Go Back
            </button>
        </div>

        <div className='ans-render'>
            <h1 data-testid="answer">{result}</h1>
        </div>
    </div>
  );
}

export default HomePage;

