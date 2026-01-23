import { useState } from 'react';
import { Sparkles, ArrowRight, RotateCw, Star } from 'lucide-react';

const CareerQuiz = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What excites you most about business?",
      options: [
        { text: "📊 Analyzing data and solving complex problems", scores: { strategic: 2, finance: 1, marketing: 0, 'financial-mgmt': 2 } },
        { text: "💡 Creating campaigns and influencing people", scores: { strategic: 1, finance: 0, marketing: 3, 'financial-mgmt': 0 } },
        { text: "🎯 Planning strategies and leading teams", scores: { strategic: 3, finance: 1, marketing: 1, 'financial-mgmt': 1 } },
        { text: "💰 Managing money and investments", scores: { strategic: 0, finance: 2, marketing: 0, 'financial-mgmt': 3 } }
      ]
    },
    {
      id: 2,
      question: "What's your ideal work environment?",
      options: [
        { text: "🏢 Corporate boardroom making big decisions", scores: { strategic: 3, finance: 1, marketing: 1, 'financial-mgmt': 2 } },
        { text: "🎨 Creative agency with dynamic teams", scores: { strategic: 1, finance: 0, marketing: 3, 'financial-mgmt': 0 } },
        { text: "📈 Fast-paced trading floor or finance hub", scores: { strategic: 0, finance: 2, marketing: 0, 'financial-mgmt': 3 } },
        { text: "🌍 Consulting across different industries", scores: { strategic: 2, finance: 2, marketing: 2, 'financial-mgmt': 1 } }
      ]
    },
    {
      id: 3,
      question: "Which skill do you want to master?",
      options: [
        { text: "📊 Financial modeling & forecasting", scores: { strategic: 1, finance: 2, marketing: 0, 'financial-mgmt': 3 } },
        { text: "🎤 Persuasion & communication", scores: { strategic: 1, finance: 0, marketing: 3, 'financial-mgmt': 0 } },
        { text: "🧩 Strategic thinking & problem-solving", scores: { strategic: 3, finance: 1, marketing: 1, 'financial-mgmt': 1 } },
        { text: "📋 Risk management & compliance", scores: { strategic: 1, finance: 3, marketing: 0, 'financial-mgmt': 2 } }
      ]
    },
    {
      id: 4,
      question: "What's your dream project?",
      options: [
        { text: "💼 Launch a new product to market", scores: { strategic: 2, finance: 0, marketing: 3, 'financial-mgmt': 0 } },
        { text: "📈 Turn around a struggling company", scores: { strategic: 3, finance: 1, marketing: 1, 'financial-mgmt': 2 } },
        { text: "💎 Manage a R100M investment portfolio", scores: { strategic: 0, finance: 2, marketing: 0, 'financial-mgmt': 3 } },
        { text: "🎯 Build a brand from scratch", scores: { strategic: 1, finance: 0, marketing: 3, 'financial-mgmt': 0 } }
      ]
    },
    {
      id: 5,
      question: "What's your superpower?",
      options: [
        { text: "🔍 Spotting patterns others miss", scores: { strategic: 2, finance: 2, marketing: 1, 'financial-mgmt': 2 } },
        { text: "🗣️ Convincing people to take action", scores: { strategic: 2, finance: 0, marketing: 3, 'financial-mgmt': 0 } },
        { text: "🧠 Thinking 5 steps ahead", scores: { strategic: 3, finance: 1, marketing: 1, 'financial-mgmt': 2 } },
        { text: "📊 Making sense of complex numbers", scores: { strategic: 0, finance: 3, marketing: 0, 'financial-mgmt': 3 } }
      ]
    }
  ];

  const careerPathNames = {
    'strategic': 'Strategic Management',
    'finance': 'Finance and Accounting',
    'marketing': 'Marketing Management',
    'financial-mgmt': 'Financial Management'
  };

  const careerPathColors = {
    'strategic': 'from-purple-500 to-pink-600',
    'finance': 'from-amber-500 to-yellow-600',
    'marketing': 'from-rose-500 to-pink-600',
    'financial-mgmt': 'from-blue-500 to-cyan-600'
  };

  const handleAnswer = (optionIndex) => {
    const newAnswers = { ...answers, [currentQuestion]: optionIndex };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      // Calculate results
      setTimeout(() => {
        setShowResults(true);
      }, 300);
    }
  };

  const calculateResults = () => {
    const scores = {
      'strategic': 0,
      'finance': 0,
      'marketing': 0,
      'financial-mgmt': 0
    };

    Object.keys(answers).forEach((questionIndex) => {
      const question = questions[questionIndex];
      const selectedOption = question.options[answers[questionIndex]];
      
      Object.keys(selectedOption.scores).forEach((path) => {
        scores[path] += selectedOption.scores[path];
      });
    });

    // Calculate percentages
    const maxScore = questions.length * 3; // Max possible score per path
    const percentages = {};
    Object.keys(scores).forEach((path) => {
      percentages[path] = Math.round((scores[path] / maxScore) * 100);
    });

    // Get top 2 matches
    const sorted = Object.entries(percentages)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 2);

    return sorted.map(([pathId, percentage]) => ({
      id: pathId,
      name: careerPathNames[pathId],
      percentage,
      color: careerPathColors[pathId]
    }));
  };

  const retakeQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const results = showResults ? calculateResults() : [];

  if (showResults) {
    return (
      <div className="py-16 bg-gradient-to-br from-green-50 to-emerald-50 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Results Header */}
          <div className="text-center mb-12 animate-fadeIn">
            <div className="inline-block bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl px-8 py-6 border-2 border-green-300 shadow-lg mb-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                <Sparkles className="inline-block mr-2 text-green-600" size={40} />
                Your Perfect Match!
              </h2>
              <p className="text-lg text-gray-600">
                Based on your answers, here are your top career paths
              </p>
            </div>
          </div>

          {/* Top Matches */}
          <div className="space-y-6 mb-10">
            {results.map((result, index) => (
              <div
                key={result.id}
                className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-4 border-green-300 animate-fadeIn relative overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`bg-gradient-to-br ${result.color} text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-1`}>
                    {index === 0 ? '🏆 Top Match' : '⭐ Great Fit'}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    {result.name}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {index === 0
                      ? "Your skills and interests align perfectly with this path!"
                      : "This path would also be an excellent fit for you!"}
                  </p>
                </div>

                {/* Match Percentage */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700 font-semibold">Match Score</span>
                    <span className="text-2xl font-bold text-gray-800">{result.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${result.color} transition-all duration-1000 ease-out rounded-full`}
                      style={{ width: `${result.percentage}%`, animationDelay: `${index * 200 + 300}ms` }}
                    ></div>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={i < Math.round(result.percentage / 20) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                      size={24}
                    />
                  ))}
                </div>

                {/* CTA Button */}
                {index === 0 && (
                  <button
                    onClick={() => onComplete(result.id)}
                    className={`w-full bg-gradient-to-r ${result.color} text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3`}
                  >
                    See Your Journey in {result.name}
                    <ArrowRight size={20} />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={retakeQuiz}
              className="bg-white text-gray-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 border-2 border-gray-300"
            >
              <RotateCw size={20} />
              Retake Quiz
            </button>
            {results.length > 1 && (
              <button
                onClick={() => onComplete(results[1].id)}
                className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                Explore {results[1].name}
                <ArrowRight size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Quiz Questions View
  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="py-16 bg-gradient-to-br from-green-50 to-emerald-50 relative z-10">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Quiz Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl px-8 py-6 border-2 border-green-300 shadow-lg mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              <Sparkles className="inline-block mr-2 text-green-600" size={40} />
              Find Your Perfect Path
            </h2>
            <p className="text-lg text-gray-600">
              Answer 5 quick questions to discover your ideal BCom specialization
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700 font-semibold">Question {currentQuestion + 1} of {questions.length}</span>
            <span className="text-gray-600">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-500 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-gray-200 mb-8 animate-fadeIn">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            {currentQ.question}
          </h3>

          {/* Options */}
          <div className="space-y-4">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  answers[currentQuestion] === index
                    ? 'border-green-500 bg-green-50 shadow-lg'
                    : 'border-gray-300 bg-white hover:border-green-300'
                }`}
              >
                <span className="text-lg md:text-xl font-semibold text-gray-800">
                  {option.text}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Helper Text */}
        <div className="text-center text-gray-600">
          <p className="flex items-center justify-center gap-2">
            <Sparkles className="text-green-600" size={20} />
            Choose the option that resonates most with you
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerQuiz;

