import React from 'react';

const Results = ({ answer }: any) => {
  return (
    <div>
      {answer !== null &&
        answer.map((value: any, index: number) => (
          <div key={index}>
            <h2>{value.question}</h2>
            <p>
              <strong>Trả lời:</strong> <i>{value.answer}</i>
            </p>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default Results;
