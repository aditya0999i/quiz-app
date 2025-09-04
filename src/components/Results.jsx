import React from "react";

const Results = ({
  answerSummaries,
  totalScore,
  totalQuestions,
  onRestart,
}) => {
  const percentage = Math.round((totalScore / totalQuestions) * 100);

  const getScoreMessage = (percentage) => {
    if (percentage >= 90) return "Excellent! You're a quiz master! 🎉";
    if (percentage >= 80) return "Great job! You really know your stuff! 👍";
    if (percentage >= 70) return "Good work! You have solid knowledge! 😊";
    if (percentage >= 60) return "Not bad! Keep learning and improving! 📚";
    if (percentage >= 50) return "You're on the right track! Keep studying! 💪";
    return "Don't worry, every quiz is a learning opportunity! 🌟";
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Score Summary */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Quiz Complete!
        </h1>
        <div className="text-6xl font-bold text-blue-600 mb-4">
          {totalScore}/{totalQuestions}
        </div>
        <div className="text-2xl text-gray-600 mb-2">{percentage}%</div>
        <div className="text-lg text-gray-700 mb-6">
          {getScoreMessage(percentage)}
        </div>

        <button
          onClick={onRestart}
          className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium text-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
        >
          Take Quiz Again
        </button>
      </div>

      {/* Detailed Results */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Question Summary
        </h2>
        <div className="space-y-6">
          {answerSummaries.map((summary, index) => (
            <div
              key={summary.questionId}
              className={`p-6 rounded-lg border-2 ${
                summary.isCorrect
                  ? "border-green-200 bg-green-50"
                  : "border-red-200 bg-red-50"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  Question {index + 1}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    summary.isCorrect
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {summary.isCorrect ? "Correct" : "Incorrect"}
                </span>
              </div>

              <p className="text-gray-700 mb-4">{summary.question}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-medium text-gray-600">
                    Your Answer:
                  </span>
                  <p
                    className={`font-medium ${
                      summary.isCorrect ? "text-green-700" : "text-red-700"
                    }`}
                  >
                    {summary.userAnswer !== null
                      ? summary.userOption
                      : "No answer selected"}
                  </p>
                </div>

                {!summary.isCorrect && (
                  <div>
                    <span className="text-sm font-medium text-gray-600">
                      Correct Answer:
                    </span>
                    <p className="font-medium text-green-700">
                      {summary.correctOption}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
