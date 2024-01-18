import React from 'react';

function ResultPage({ result }) {
  return (
    <div className='result-page-div'>
      <h1 data-testid="answer">{result}</h1>
      <button data-testid="clear" onClick={clearInputs}>
        Clear & Go Back
      </button>
    </div>
  );
}

export default ResultPage;

