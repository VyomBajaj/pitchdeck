import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/NavBar/Footer";
import axios from "axios";

const Community = () => {
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState("");

    useEffect(() => {
        const initialQuestions = [
            {
                id: 1,
                username: "@student123",
                content: "How can I improve my coding skills?",
                answers: [
                    { content: "Practice consistently and participate in coding contests.", username: "@mentorJohn" },
                    { content: "Work on open source projects and build your own applications.", username: "@mentorJane" },
                ],
                timestamp: new Date(),
            },
            {
                id: 2,
                username: "@careerSeeker",
                content: "What are the best resources for learning data science?",
                answers: [
                    { content: "Start with Python, then explore libraries like Pandas and Scikit-Learn.", username: "@mentorRaj" },
                    { content: "Online platforms like Coursera and Kaggle are great for practical learning.", username: "@mentorNeha" },
                ],
                timestamp: new Date(),
            }
        ];

        setQuestions(initialQuestions);
    }, []);

    const handleQuestionSubmit = async (e) => {
        e.preventDefault();
        if (newQuestion.trim()) {
            const question = {
                id: questions.length + 1,
                username: "@currentUser",
                content: newQuestion,
                answers: [],
                timestamp: new Date(),
            };

            try {
                await axios.post("http://localhost:3000/api/v1/questions", question);
                setQuestions([question, ...questions]);
                setNewQuestion("");
            } catch (error) {
                console.error("Error submitting question:", error);
            }
        }
    };

    const handleAnswerSubmit = async (questionId, answer, username) => {
        const updatedQuestions = questions.map((q) =>
            q.id === questionId
                ? { ...q, answers: [...q.answers, { content: answer, username }] }
                : q
        );

        try {
            await axios.post(`/api/questions/${questionId}/answers`, { content: answer, username });
            setQuestions(updatedQuestions);
        } catch (error) {
            console.error("Error submitting answer:", error);
        }
    };

    return (
        <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 min-h-screen">
            <NavBar />
            <div className="text-center py-6 text-white">
                <h1 className="text-4xl font-bold">Mentor Connect Community</h1>
                <p className="text-lg">Engage with mentors and fellow students to seek guidance and share knowledge.</p>
            </div>
            <div className="max-w-4xl mx-auto p-4">
                <form onSubmit={handleQuestionSubmit} className="mb-6">
                    <input
                        type="text"
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                        placeholder="Ask a Question"
                        className="w-full p-3 border border-blue-300 rounded-lg bg-white text-gray-700 placeholder-gray-500"
                    />
                    <button type="submit" className="mt-3 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Submit</button>
                </form>
                {questions.map((question) => (
                    <div key={question.id} className="bg-white shadow-md p-4 mb-4 rounded-lg">
                        <div className="flex items-center mb-2">
                            <FaUserCircle className="text-3xl text-gray-500" />
                            <div className="ml-4">
                                <p className="font-bold">{question.username}</p>
                                <p className="text-sm text-gray-500">{question.timestamp.toLocaleDateString()}</p>
                            </div>
                        </div>
                        <p>{question.content}</p>
                        <div className="mt-4">
                            {question.answers.map((answer, index) => (
                                <div key={index} className="bg-gray-100 p-3 rounded-lg mb-2">
                                    <p><strong>{answer.username}:</strong> {answer.content}</p>
                                </div>
                            ))}
                            <input
                                type="text"
                                placeholder="Your answer"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleAnswerSubmit(question.id, e.target.value, "@currentUser");
                                        e.target.value = "";
                                    }
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Community;