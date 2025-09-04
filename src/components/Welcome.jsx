import React from "react";

const Welcome = ({ onStartQuiz }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-2xl p-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Welcome to the Quiz! 🧠
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Test your knowledge with our comprehensive quiz featuring 10
            multiple-choice questions. Each question has 4 options, and you'll
            get immediate feedback on your answers.
          </p>

          <button
            onClick={onStartQuiz}
            className="px-12 py-4 bg-blue-600 text-white rounded-lg font-bold text-xl hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Start Quiz! 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
