 import React, { useEffect, useState } from 'react';
import axios from 'axios';

const courseList = [
  "BasicComputer", "GraphicDesigning", "WebDesigning", "CAAD",
  "CCA", "ACA", "ADCA", "DigitalMarketing", "Python",
  "AdvExcel", "Busy", "TallyPrime", "CCC"
];

const AdminCreateQuiz = () => {
  const [course, setCourse] = useState('');
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([]);
  const [existingQuizId, setExistingQuizId] = useState(null);
  const [isLive, setIsLive] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedCourse = localStorage.getItem('selectedCourse');
    if (savedCourse) setCourse(savedCourse);
  }, []);

  useEffect(() => {
    if (!course) return;
    localStorage.setItem('selectedCourse', course);

    setLoading(true);
    axios
      .get(`https://arc-portal-backend.onrender.com/admin/quiz/course/${course}`)
      .then((res) => {
        if (res.data.quiz) {
          const quiz = res.data.quiz;
          setTitle(quiz.title);
          setExistingQuizId(quiz._id);
          setIsLive(res.data.isLive || false);

          const reconstructed = quiz.questions.map((q) => {
            const options = [...q.incorrect_answers];
            const correctIndex = Math.floor(Math.random() * 5);
            options.splice(correctIndex, 0, q.correct_answer);
            return {
              question: q.question,
              options,
              correctOption: options.indexOf(q.correct_answer)
            };
          });
          setQuestions(reconstructed);
        } else {
          resetForm();
        }
      })
      .catch(() => {
        resetForm();
      })
      .finally(() => setLoading(false));
  }, [course]);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 4000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const resetForm = () => {
    setTitle('');
    setQuestions([]);
    setExistingQuizId(null);
    setIsLive(false);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { question: '', options: ['', '', '', ''], correctOption: 0 }
    ]);
  };

  const handleRemoveQuestion = (index) => {
    const updated = [...questions];
    updated.splice(index, 1);
    setQuestions(updated);
  };

  const handleSubmit = async () => {
    if (!title || !course) {
      setMessage('Please select a course and enter a title');
      return;
    }
    if (questions.length < 1) {
      setMessage('Please add at least one question');
      return;
    }

    for (const q of questions) {
      if (!q.question.trim() || q.options.some(opt => !opt.trim())) {
        setMessage('All questions and options must be filled');
        return;
      }
    }

    const formattedQuestions = questions.map(q => ({
      question: q.question,
      options: q.options,
      correctOption: q.correctOption
    }));

    setLoading(true);
    try {
      let res;
      if (existingQuizId) {
        res = await axios.put(
          `https://arc-portal-backend.onrender.com/admin/quiz/${existingQuizId}`,
          { title, course, questions: formattedQuestions }
        );
      } else {
        res = await axios.post(`https://arc-portal-backend.onrender.com/admin/quiz/create`, {
          title,
          course,
          questions: formattedQuestions
        });
      }

      setMessage(res.data.msg);
      setExistingQuizId(res.data.quiz._id);
    } catch (err) {
      setMessage(err?.response?.data?.error || 'Failed to save quiz');
    } finally {
      setLoading(false);
    }
  };

  const handleToggleLive = async () => {
    if (!existingQuizId) {
      setMessage('Please save the quiz before toggling live status');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.put(`https://arc-portal-backend.onrender.com/admin/quiz/toggle`, {
        quizId: existingQuizId,
        isLive: !isLive
      });

      setIsLive(res.data.quiz.isLive);
      setMessage(`Quiz is now ${res.data.quiz.isLive ? 'Live' : 'Offline'}`);
    } catch (err) {
      setMessage(err?.response?.data?.error || 'Failed to toggle quiz status');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteQuiz = async () => {
    if (!existingQuizId) {
      setMessage('No quiz to delete');
      return;
    }

    if (!window.confirm('Are you sure you want to delete this quiz?')) return;

    setLoading(true);
    try {
      await axios.delete(`https://arc-portal-backend.onrender.com/admin/quiz/${existingQuizId}`);
      resetForm();
      setMessage('Quiz deleted successfully');
    } catch (err) {
      setMessage('Failed to delete quiz');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-700 p-6 text-white">
          <h2 className="text-2xl font-bold">Quiz Management</h2>
          <p className="text-blue-100 mt-1">
            {existingQuizId ? 'Update existing quiz' : 'Create new quiz'}
          </p>
        </div>

        <div className="p-6">
          {/* Course & Title */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Course
            </label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              disabled={loading}
            >
              <option value="">-- Select Course --</option>
              {courseList.map((c, idx) => (
                <option key={idx} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quiz Title
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={loading}
            />
          </div>

          {/* Status and Actions */}
          <div className="flex flex-wrap gap-3 justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Questions</h3>
              <p className="text-sm text-gray-500">{questions.length} added</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={handleToggleLive}
                disabled={loading || !existingQuizId}
                className={`px-4 py-2 rounded-lg text-white font-semibold
                  ${isLive ? 'bg-green-600 hover:bg-green-700' : 'bg-yellow-600 hover:bg-yellow-700'}
                  ${(loading || !existingQuizId) && 'opacity-50 cursor-not-allowed'}`}
              >
                {isLive ? 'Live' : 'Offline'}
              </button>
              <button
                onClick={handleAddQuestion}
                disabled={loading}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                Add Question
              </button>
              <button
                onClick={handleDeleteQuiz}
                disabled={!existingQuizId || loading}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
              >
                Delete Quiz
              </button>
            </div>
          </div>

          {/* Questions List */}
          <div className="space-y-4 mb-6">
            {questions.map((q, idx) => (
              <div key={idx} className="border p-4 rounded-lg bg-gray-50">
                <div className="flex justify-between mb-3">
                  <input
                    type="text"
                    className="flex-1 border-b p-2"
                    placeholder={`Question ${idx + 1}`}
                    value={q.question}
                    onChange={(e) => {
                      const updated = [...questions];
                      updated[idx].question = e.target.value;
                      setQuestions(updated);
                    }}
                    disabled={loading}
                  />
                  <button
                    onClick={() => handleRemoveQuestion(idx)}
                    className="text-red-600 ml-3"
                    disabled={loading}
                  >
                    Remove
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  {q.options.map((opt, i) => (
                    <input
                      key={i}
                      type="text"
                      className="p-2 border rounded"
                      placeholder={`Option ${i + 1}`}
                      value={opt}
                      onChange={(e) => {
                        const updated = [...questions];
                        updated[idx].options[i] = e.target.value;
                        setQuestions(updated);
                      }}
                      disabled={loading}
                    />
                  ))}
                </div>

                <select
                  value={q.correctOption}
                  onChange={(e) => {
                    const updated = [...questions];
                    updated[idx].correctOption = parseInt(e.target.value);
                    setQuestions(updated);
                  }}
                  className="w-full p-2 border rounded"
                  disabled={loading}
                >
                  {q.options.map((_, i) => (
                    <option key={i} value={i}>
                      Correct Answer: {String.fromCharCode(65 + i)}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          {/* Submit */}
          <div className="text-right">
            <button
              onClick={handleSubmit}
              disabled={loading || !title || !course || questions.length === 0}
              className={`px-6 py-3 rounded-lg text-white font-semibold 
                ${loading || !title || !course || questions.length === 0 ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`}
            >
              {loading ? (existingQuizId ? 'Updating...' : 'Creating...') : (existingQuizId ? 'Update Quiz' : 'Create Quiz')}
            </button>
          </div>

          {/* Message */}
          {message && (
            <div className={`mt-4 p-3 rounded ${message.includes('Failed') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCreateQuiz;
