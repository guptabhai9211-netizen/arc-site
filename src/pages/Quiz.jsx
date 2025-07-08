 import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiXCircle, FiAward, FiClock } from 'react-icons/fi';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [quizTitle, setQuizTitle] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTimer((prev) => prev + 1), 1000);

    fetch('https://arc-portal-backend.onrender.com/admin/quiz/')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch quiz data');
        return res.json();
      })
      .then((data) => {
        const quizzes = data.quizzes;
        const liveQuiz = quizzes.find((q) => q.isLive);

        if (!liveQuiz || !liveQuiz.questions) {
          setError('No live quiz available at this time.');
          return;
        }

        const formatted = liveQuiz.questions.map((q) => ({
          question: q.question,
          options: q.options.map(String), // Ensure options are strings
          correctAnswer: String(q.options[q.correctOption]),
        }));

        setQuestions(formatted);
        setQuizTitle(liveQuiz.title);
      })
      .catch((err) => {
        console.error(err);
        setError('Error fetching quiz. Please try again later.');
      })
      .finally(() => setLoading(false));

    return () => clearInterval(interval);
  }, []);

  const handleSelect = (qIndex, option) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: option }));
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) correct++;
    });
    setScore(correct);
    setSubmitted(true);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
          <div className="flex justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              className="h-16 w-16 border-4 border-indigo-500 border-t-transparent rounded-full"
            ></motion.div>
          </div>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-2xl font-bold text-gray-800">
            Loading ARC Quiz
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-gray-600">
            Preparing your assessment...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full mx-4">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full">
              <FiXCircle className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Error Loading Quiz</h2>
            <p className="text-gray-600">{error}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium"
              onClick={() => window.location.reload()}
            >
              Try Again
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-gray-900 mb-2"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">ARC Computer Institute</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600"
          >
            Professional Certification Quiz
          </motion.p>
        </div>

        {/* Quiz Box */}
        <motion.div layout className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Top Bar */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-6 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">{quizTitle || 'Assessment'}</h2>
                <p className="opacity-90">{!submitted ? 'Complete all questions' : 'Your results'}</p>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 px-3 py-2 rounded-lg">
                <FiClock className="w-5 h-5" />
                <span className="font-medium">{formatTime(timer)}</span>
              </div>
            </div>
          </div>

          {/* Quiz Content */}
          <div className="p-6 sm:p-8">
            {!submitted ? (
              <AnimatePresence>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  {questions.map((q, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-all"
                    >
                      <p className="text-lg font-semibold text-gray-800 mb-4">
                        <span className="text-indigo-600 font-bold">{i + 1}.</span> {q.question}
                      </p>
                      <div className="space-y-3">
                        {q.options.map((opt, j) => (
                          <motion.label
                            key={j}
                            whileHover={{ x: 5 }}
                            className={`flex items-center space-x-3 cursor-pointer p-3 rounded-lg transition-colors ${
                              answers[i] === opt ? 'bg-indigo-50 border border-indigo-200' : 'hover:bg-gray-50'
                            }`}
                            onClick={() => handleSelect(i, opt)}
                          >
                            <div
                              className={`flex items-center justify-center w-5 h-5 rounded-full border ${
                                answers[i] === opt ? 'border-indigo-500 bg-indigo-500' : 'border-gray-300'
                              }`}
                            >
                              {answers[i] === opt && <div className="w-2 h-2 rounded-full bg-white"></div>}
                            </div>
                            <span className="text-gray-700">{opt}</span>
                          </motion.label>
                        ))}
                      </div>
                    </motion.div>
                  ))}

                  <div className="flex justify-center pt-6">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSubmit}
                      disabled={Object.keys(answers).length !== questions.length}
                      className={`px-8 py-3 rounded-xl font-semibold text-white shadow-lg transition-all ${
                        Object.keys(answers).length === questions.length
                          ? 'bg-gradient-to-r from-indigo-600 to-blue-500 hover:shadow-indigo-200'
                          : 'bg-gray-400 cursor-not-allowed'
                      }`}
                    >
                      Submit Assessment
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              // Results
              <AnimatePresence>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                  <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 rounded-xl p-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full mb-4">
                      <FiAward className="w-10 h-10 text-indigo-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Assessment Complete!</h2>
                    <div className="flex justify-center items-baseline space-x-2 mb-4">
                      <span className="text-4xl font-extrabold text-indigo-600">{score}</span>
                      <span className="text-gray-500">/ {questions.length}</span>
                    </div>
                    <p className="text-lg text-gray-600 mb-4">
                      {score === questions.length ? (
                        <span className="inline-flex items-center text-green-600">
                          <FiCheckCircle className="mr-2" /> Perfect Score! You've mastered this topic.
                        </span>
                      ) : score > questions.length / 2 ? (
                        'Good performance! You\'re on the right track.'
                      ) : (
                        'Keep practicing to improve your skills.'
                      )}
                    </p>
                    <div className="flex justify-center">
                      <div className="bg-white px-4 py-2 rounded-full shadow-sm inline-flex items-center">
                        <FiClock className="mr-2 text-gray-500" />
                        <span className="font-medium text-gray-700">Time: {formatTime(timer)}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Detailed Review */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b">Detailed Review</h3>
                    <div className="space-y-4">
                      {questions.map((q, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className={`border rounded-xl p-6 transition-all ${
                            answers[i] === q.correctAnswer ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                          }`}
                        >
                          <div className="flex items-start">
                            <div className={`flex-shrink-0 mt-1 mr-3 ${answers[i] === q.correctAnswer ? 'text-green-500' : 'text-red-500'}`}>
                              {answers[i] === q.correctAnswer ? (
                                <FiCheckCircle className="w-5 h-5" />
                              ) : (
                                <FiXCircle className="w-5 h-5" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-gray-800 mb-2">
                                <span className="text-indigo-600 font-bold">{i + 1}.</span> {q.question}
                              </p>
                              <div className="space-y-2">
                                <p className="text-sm">
                                  <span className="font-medium">Your answer:</span>{' '}
                                  <span className={`ml-2 ${answers[i] === q.correctAnswer ? 'text-green-600 font-semibold' : 'text-red-600'}`}>
                                    {answers[i] || 'Not answered'}
                                  </span>
                                </p>
                                {answers[i] !== q.correctAnswer && (
                                  <p className="text-sm">
                                    <span className="font-medium">Correct answer:</span>{' '}
                                    <span className="ml-2 text-green-600 font-semibold">{q.correctAnswer}</span>
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-2 bg-white border border-gray-200 rounded-lg font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                      onClick={() => window.location.reload()}
                    >
                      Take Another Quiz
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ARC Computer Institute. All rights reserved.
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Quiz;
