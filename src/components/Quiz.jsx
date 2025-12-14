import React, { useState } from 'react';
import '../assets/css/Quiz.css';

const Quiz = ({ quizData = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  if (!quizData || quizData.length === 0) {
    return <section className="quiz-section">暂无题目数据</section>;
  }

  const currentQuestion = quizData[currentIndex];
  const isLastQuestion = currentIndex === quizData.length - 1;

  const handleAnswer = (answerIndex) => {
    if (showResult) return; // 防止重复点击

    setSelectedAnswer(answerIndex);
    setShowResult(true);

    // 检查答案是否正确
    const isCorrect = answerIndex === currentQuestion.correctAnswer;

    if (isCorrect) {
      // 正确回答后，延迟跳转到下一题
      setTimeout(() => {
        // 如果是最后一题，跳转到第一题
        const nextIndex = isLastQuestion ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
        setSelectedAnswer(null);
        setShowResult(false);
      }, 1500);
    }
  };

  const handleNext = () => {
    const nextIndex = isLastQuestion ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handleRetry = () => {
    // 回答错误后，重置状态但不跳转，停留在当前题目
    setSelectedAnswer(null);
    setShowResult(false);
  };

  return (
    <section className="quiz-section">
      <h3 className="quiz-title">非遗知识小测试</h3>
      <p className="quiz-question">{currentQuestion.question}</p>
      <div className="quiz-options">
        {currentQuestion.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === currentQuestion.correctAnswer;
          let buttonClass = 'quiz-btn';

          if (showResult) {
            if (isCorrect) {
              buttonClass += ' quiz-btn-correct';
            } else if (isSelected && !isCorrect) {
              buttonClass += ' quiz-btn-wrong';
            }
          }

          return (
            <button
              key={index}
              className={buttonClass}
              onClick={() => handleAnswer(index)}
              disabled={showResult && !isCorrect}
            >
              {option}
            </button>
          );
        })}
      </div>
      {showResult && (
        <div className="quiz-result">
          {selectedAnswer === currentQuestion.correctAnswer ? (
            <>
              <p className="quiz-result-correct">✓ 回答正确！</p>
              <button className="quiz-next-btn" onClick={handleNext}>
                {isLastQuestion ? '回到第一题' : '下一题'}
              </button>
            </>
          ) : (
            <>
              <p className="quiz-result-wrong">✗ 回答错误，正确答案是：{currentQuestion.options[currentQuestion.correctAnswer]}</p>
              <button className="quiz-retry-btn" onClick={handleRetry}>
                重试本题
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default Quiz;

