import React, { useState, useEffect } from "react";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import questionsData from "./data/questions.json";

const App = () => {
  const [appState, setAppState] = useState("welcome");
  const [questions, setQuestions] = useState([]);
  const [quizState, setQuizState] = useState({
    currentQuestionIndex: 0,
    answers: [],
    isComplete: false,
    score: 0,
  });

  useEffect(() => {
    // Load questions from the JSON file
    setQuestions(questionsData);
    // Initialize answers array
    setQuizState((prev) => ({
      ...prev,
      answers: new Array(questionsData.length).fill(null),
    }));
  }, []);

  const handleStartQuiz = () => {
    setAppState("quiz");
    setQuizState({
      currentQuestionIndex: 0,
      answers: new Array(questions.length).fill(null),
      isComplete: false,
      score: 0,
    });
  };

  const handleAnswerSelect = (answerIndex) => {
    setQuizState((prev) => {
      const newAnswers = [...prev.answers];
      newAnswers[prev.currentQuestionIndex] = answerIndex;

      // Calculate score
      const newScore = newAnswers.reduce((score, answer, index) => {
        if (answer !== null && answer === questions[index].correctAnswer) {
          return score + 1;
        }
        return score;
      }, 0);

      return {
        ...prev,
        answers: newAnswers,
        score: newScore,
      };
    });
  };

  const handleNext = () => {
    setQuizState((prev) => ({
      ...prev,
      currentQuestionIndex: Math.min(
        prev.currentQuestionIndex + 1,
        questions.length - 1
      ),
    }));
  };

  const handlePrevious = () => {
    setQuizState((prev) => ({
      ...prev,
      currentQuestionIndex: Math.max(prev.currentQuestionIndex - 1, 0),
    }));
  };

  const handleFinish = () => {
    setQuizState((prev) => ({
      ...prev,
      isComplete: true,
    }));
    setAppState("results");
  };

  const handleRestart = () => {
    setAppState("welcome");
    setQuizState({
      currentQuestionIndex: 0,
      answers: new Array(questions.length).fill(null),
      isComplete: false,
      score: 0,
    });
  };

  const generateAnswerSummaries = () => {
    return questions.map((question, index) => {
      const userAnswer = quizState.answers[index];
      const isCorrect = userAnswer === question.correctAnswer;

      return {
        questionId: question.id,
        question: question.question,
        userAnswer,
        correctAnswer: question.correctAnswer,
        isCorrect,
        userOption:
          userAnswer !== null
            ? question.options[userAnswer]
            : "No answer selected",
        correctOption: question.options[question.correctAnswer],
      };
    });
  };

  const renderCurrentComponent = () => {
    switch (appState) {
      case "welcome":
        return <Welcome onStartQuiz={handleStartQuiz} />;
      case "quiz":
        return (
          <Quiz
            questions={questions}
            quizState={quizState}
            onAnswerSelect={handleAnswerSelect}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onFinish={handleFinish}
          />
        );
      case "results":
        return (
          <Results
            answerSummaries={generateAnswerSummaries()}
            totalScore={quizState.score}
            totalQuestions={questions.length}
            onRestart={handleRestart}
          />
        );
      default:
        return <Welcome onStartQuiz={handleStartQuiz} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">{renderCurrentComponent()}</div>
  );
};

export default App;
