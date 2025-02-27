import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/NavBar/Footer";
import axios from "axios"; // Import axios for API calls

const StudentCommunityPage = () => {
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState("");

    useEffect(() => {
        const initialQuestions = [{
            id: 1,
            username: "@Investor101",
            content: "What makes your product stand out from competitors?",
            answers: [
                { content: "Our unique AI-driven approach gives us a competitive edge.", username: "@FounderSachin" },
                { content: "We have a strong market-fit and a growing user base.", username: "@CoFounderAkash" },
            ],
            timestamp: new Date(),
        },
        {
            id: 2,
            username: "@VC_Insights",
            content: "What is your go-to-market strategy?",
            answers: [
                { content: "We focus on partnerships and strategic digital marketing.", username: "@GrowthLeadNeha" },
                { content: "Our plan involves influencer collaborations and organic traction.", username: "@CMO_Raj" },
            ],
            timestamp: new Date(),
        },
        {
            id: 3,
            username: "@TechGeek23",
            content: "What technology stack are you using for scalability?",
            answers: [
                { content: "We use React, Node.js, and AWS for a scalable architecture.", username: "@TechLeadAryan" },
                { content: "Our backend is built with Python and FastAPI for high performance.", username: "@CTO_Ankit" },
            ],
            timestamp: new Date(),
        },
        {
            id: 4,
            username: "@AngelInvestor",
            content: "What are the key revenue streams for your business?",
            answers: [
                { content: "Subscription model and enterprise licensing.", username: "@FounderSachin" },
                { content: "We also generate revenue from premium features and ads.", username: "@FinanceHeadNeha" },
            ],
            timestamp: new Date(),
        },
        {
            id: 5,
            username: "@StartupAdvisor",
            content: "What are the biggest risks and challenges you foresee?",
            answers: [
                { content: "Market adoption and competition remain key challenges.", username: "@CEO_Sachin" },
                { content: "Scaling efficiently while maintaining quality is a priority.", username: "@COO_Akash" },
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
                username: "@currentUser", // Replace with actual current user username
                content: newQuestion,
                answers: [],
                timestamp: new Date(),
            };

            try {
                // Make a POST request to your backend API to save the question
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
            // Make a POST request to your backend API to save the answer
            await axios.post(`/api/questions/${questionId}/answers`, { content: answer, username }); // Update the URL based on your API route
            setQuestions(updatedQuestions);
        } catch (error) {
            console.error("Error submitting answer:", error);
        }
    };


    return (
        <div className="bg-gray-100 min-h-screen">
            {/* NavBar */}
            <NavBar />

            {/* Title */}
            <div className="text-center py-6 bg-blue-600 text-white">
                <h1 className="text-4xl font-bold">PitchDeck Community</h1>
            </div>

            <div className="max-w-4xl mx-auto p-4">
                {/* Question Form */}
                <form onSubmit={handleQuestionSubmit} className="mb-6">
                    <input
                        type="text"
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                        placeholder="Ask a Question"
                        className="w-full p-3 border border-blue-300 rounded-lg bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="mt-3 bg-blue-600 text-white py-2 px-4 rounded-lg flax justify-center hover:bg-blue-700 transition duration-200"
                    >
                        Submit
                    </button>
                </form>

                {/* Question List */}
                <div>
                    {questions.map((question) => (
                        <div
                            key={question.id}
                            className="bg-white shadow-md p-4 mb-4 rounded-lg"
                        >
                            <div className="flex items-center mb-2">
                                <FaUserCircle className="text-3xl text-gray-500" />
                                <div className="ml-4">
                                    <p className="font-bold text-gray-700">
                                        {question.username}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {question.timestamp.toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-700">{question.content}</p>
                            <button
                                className="text-blue-500 mt-2 hover:underline"
                                onClick={() => {
                                    /* Show answer form */
                                }}
                            >
                            </button>

                            {/* Answer Section */}
                            <div className="mt-4">
                                {question.answers.map((answer, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-100 p-3 rounded-lg mb-2"
                                    >
                                        <p><strong>{answer.username}:</strong> {answer.content}</p>
                                    </div>
                                ))}
                                <input
                                    type="text"
                                    placeholder="Your answer"
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleAnswerSubmit(
                                                question.id,
                                                e.target.value,
                                                "@currentUser" // Replace with actual current user username
                                            );
                                            e.target.value = "";
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default StudentCommunityPage;
