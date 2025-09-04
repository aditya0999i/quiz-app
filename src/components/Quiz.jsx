import React from "react";

const Quiz = ({
  questions,
  quizState,
  onAnswerSelect,
  onNext,
  onPrevious,
  onFinish,
}) => {
  const currentQuestion = questions[quizState.currentQuestionIndex];
  const currentAnswer = quizState.answers[quizState.currentQuestionIndex];
  const isLastQuestion =
    quizState.currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = quizState.currentQuestionIndex === 0;

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            Question {quizState.currentQuestionIndex + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-gray-600">
            Score: {quizState.score}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${
                ((quizState.currentQuestionIndex + 1) / questions.length) * 100
              }%`,
            }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {currentQuestion.question}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswerSelect(index)}
              disabled={currentAnswer !== null}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                currentAnswer === index
                  ? index === currentQuestion.correctAnswer
                    ? "border-green-500 bg-green-50 text-green-800"
                    : "border-red-500 bg-red-50 text-red-800"
                  : currentAnswer !== null &&
                    index === currentQuestion.correctAnswer
                  ? "border-green-500 bg-green-50 text-green-800"
                  : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
              } ${
                currentAnswer !== null
                  ? "cursor-not-allowed"
                  : "cursor-pointer hover:shadow-md"
              }`}
            >
              <span className="font-medium">
                {String.fromCharCode(65 + index)}. {option}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={onPrevious}
          disabled={isFirstQuestion}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            isFirstQuestion
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-600 text-white hover:bg-gray-700 hover:shadow-md"
          }`}
        >
          Previous
        </button>

        <div className="flex space-x-3">
          {!isLastQuestion ? (
            <button
              onClick={onNext}
              disabled={currentAnswer === null}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                currentAnswer === null
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md"
              }`}
            >
              Next
            </button>
          ) : (
            <button
              onClick={onFinish}
              disabled={currentAnswer === null}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                currentAnswer === null
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-green-600 text-white hover:bg-green-700 hover:shadow-lg"
              }`}
            >
              Finish Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
