import React, { useState } from 'react';

const QuestionsData = [
  {
    question: 'Which planet is known as the "Red Planet"?',
    answers: ['Mars', 'Venus', 'Jupiter', 'Mercury'],
    correctAnswer: 'Mars'
  },
  {
    question: 'Who painted the Mona Lisa?',
    answers: ['Pablo Picasso', 'Leonardo da Vinci', 'Vincent van Gogh', 'Michelangelo'],
    correctAnswer: 'Leonardo da Vinci'
  },
  {
    question: 'Which is the largest ocean in the world?',
    answers: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
    correctAnswer: 'Pacific Ocean'
  }
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswerClick = (answer) => {
    if (answer === QuestionsData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer(answer);

    setTimeout(() => {
      if (currentQuestion + 1 < QuestionsData.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer('');
      }
    }, 1000);
  };

  return (
    <div className="quiz-app">
      <h1>Quiz App</h1>
      {currentQuestion < QuestionsData.length ? (
        <>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{QuestionsData[currentQuestion].question}</p>
          <ul>
            {QuestionsData[currentQuestion].answers.map((answer, index) => (
              <li
                key={index}
                onClick={() => handleAnswerClick(answer)}
                className={
                  selectedAnswer === answer ? 'selected-answer' : ''
                }
              >
                {answer}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="final-score">
          <h2>Quiz Completed!</h2>
          <p>Your final score is: {score}</p>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
