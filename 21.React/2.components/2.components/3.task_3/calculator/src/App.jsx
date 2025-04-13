import { useState } from 'react';
import styles from './App.module.css';

const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const OPERATIONS = ['+', '-'];

function App() {
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [operator, setOperator] = useState('');
  const [isResult, setIsResult] = useState(false);

  const handleNumberClick = (num) => {
    if (isResult) {
      setOperand1(num);
      setOperand2('');
      setOperator('');
      setIsResult(false);
    } else if (!operator) {
      setOperand1((prev) => prev + num);
    } else {
      setOperand2((prev) => prev + num);
    }
  };

  const handleOperationClick = (op) => {
    if (operand1 && !operand2) {
      setOperator(op);
      setIsResult(false);
    } else if (operand1 && operand2 && operator) {
      calculateResult();
      setOperator(op);
    }
  };

  const calculateResult = () => {
    if (operand1 && operand2 && operator) {
      const num1 = parseInt(operand1);
      const num2 = parseInt(operand2);
      let result;

      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        default:
          return;
      }

      setOperand1(result.toString());
      setOperand2('');
      setOperator('');
      setIsResult(true);
    }
  };

  const resetCalculator = () => {
    setOperand1('');
    setOperand2('');
    setOperator('');
    setIsResult(false);
  };

  const displayValue = `${operand1}${operator}${operand2}` || '0';

  return (
    <div className={styles.calculator}>
      <div className={`${styles.display} ${isResult ? styles.result : ''}`}>{displayValue}</div>

      <div className={styles.buttons}>
        <div className={styles.numbers}>
          {NUMS.map((num) => (
            <button key={num} className={styles.button} onClick={() => handleNumberClick(num)}>
              {num}
            </button>
          ))}
        </div>

        <div className={styles.operations}>
          {OPERATIONS.map((op) => (
            <button
              key={op}
              className={styles.operationButton}
              onClick={() => handleOperationClick(op)}
            >
              {op}
            </button>
          ))}

          <button className={styles.operationButton} onClick={calculateResult}>
            =
          </button>

          <button className={styles.operationButton} onClick={resetCalculator}>
            C
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
