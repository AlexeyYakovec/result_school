import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
  const [steps] = useState(data);
  const [activeIndex, setActiveIndex] = useState(0);

  const isFirstStep = activeIndex === 0;
  const isLastStep = activeIndex === steps.length - 1;

  const handlePrev = () => {
    if (!isFirstStep) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (isLastStep) {
      setActiveIndex(0); // Возвращаемся к первому шагу
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleStepClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles['steps-content']}>
            <h2>{steps[activeIndex].title}</h2>
            <p>{steps[activeIndex].content}</p>
          </div>

          <ul className={styles['steps-list']}>
            {steps.map((step, index) => {
              const isActive = index === activeIndex;
              const isDone = index < activeIndex;

              let stepClass = styles['steps-item'];
              if (isActive) stepClass += ` ${styles.active}`;
              if (isDone) stepClass += ` ${styles.done}`;

              return (
                <li key={step.id} className={stepClass}>
                  <button
                    className={styles['steps-item-button']}
                    onClick={() => handleStepClick(index)}
                  >
                    {index + 1}
                  </button>
                  Шаг {index + 1}
                </li>
              );
            })}
          </ul>

          <div className={styles['buttons-container']}>
            <button className={styles.button} onClick={handlePrev} disabled={isFirstStep}>
              Назад
            </button>
            <button className={styles.button} onClick={handleNext}>
              {isLastStep ? 'Начать сначала' : 'Далее'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
