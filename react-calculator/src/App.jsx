import React from 'react';
import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');

  //handleClick
  const handleClick = value => {
    setInput(prev => prev + value);
  };

  //handleClear
  const handleClear = () => {
    setInput('');
  };

  //handleDelete
  const handleDelete = () => {
    setInput(prev => prev.slice(0, -1));
  };

  //handleCalculate
  const handleCalculate = () => {
    try {
      setInput(value => eval(value).toString());
    } catch (err) {
      setInput(err);
    }
  };
  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">{input || '0'}</div>
        <div className="button">
          <button className="btn control" onClick={handleClear}>
            C
          </button>
          <button className="btn control" onClick={handleDelete}>
            DEL
          </button>
          <button className="btn operator" onClick={() => handleClick('%')}>
            %
          </button>
          <button className="btn operator" onClick={() => handleClick('/')}>
            /
          </button>

          <button className="btn" onClick={() => handleClick('7')}>
            7
          </button>
          <button className="btn" onClick={() => handleClick('8')}>
            8
          </button>
          <button className="btn" onClick={() => handleClick('9')}>
            9
          </button>
          <button className="btn operator" onClick={() => handleClick('*')}>
            x
          </button>

          <button className="btn" onClick={() => handleClick('4')}>
            4
          </button>
          <button className="btn" onClick={() => handleClick('5')}>
            5
          </button>
          <button className="btn" onClick={() => handleClick('6')}>
            6
          </button>
          <button className="btn operator" onClick={() => handleClick('-')}>
            -
          </button>

          <button className="btn" onClick={() => handleClick('1')}>
            1
          </button>
          <button className="btn" onClick={() => handleClick('2')}>
            2
          </button>
          <button className="btn" onClick={() => handleClick('3')}>
            3
          </button>
          <button className="btn operator" onClick={() => handleClick('+')}>
            +
          </button>

          <button className="btn zero" onClick={() => handleClick('0')}>
            0
          </button>
          <button className="btn" onClick={() => handleClick('.')}>
            .
          </button>
          <button className="btn equal" onClick={handleCalculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
