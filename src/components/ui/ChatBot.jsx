// import { MessageSquare } from "lucide-react"

// export default function ChatBot() {
//     const [isChatOpen, setIsChatOpen] = React.useState(false)
//     return (
//         <>
//         {/* AI Chatbot Button */}
//         <button
//             onClick={() => setIsChatOpen(!isChatOpen)}
//             className="fixed bottom-6 right-6 bg-violet-600 p-3 rounded-full shadow-lg hover:bg-violet-700 transition-colors"
//         >
//             <MessageSquare className="w-6 h-6 text-white" />
//         </button>
//         {/* Chat Window */}
//         {isChatOpen && (
//         <div className="fixed bottom-20 right-6 w-96 h-96 bg-gray-900 rounded-lg shadow-xl border border-violet-700/30 p-4">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-violet-300 font-semibold">DSA Assistant</h3>
//             <button onClick={() => setIsChatOpen(false)} className="text-gray-400 hover:text-gray-300">
//               ✕
//             </button>
//           </div>
//           <div className="h-[calc(100%-4rem)] overflow-y-auto">
//             <div className="bg-violet-900/20 p-3 rounded-lg mb-2">
//               Hi! How can I help you with DSA today?
//             </div>
//           </div>
//         </div>)}
//         </>
//     )
// }

import { MessageSquare } from "lucide-react";
import React, { useState } from "react";

export default function ChatBot() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([{ text: "Hi! How can I help you with DSA today?", isUser: false }]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { text: input, isUser: true }];
        setMessages(newMessages);
        setInput("");

        try {
            const response = await fetch("https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ inputs: input })
            });
            
            const data = await response.json();
            const botReply = data.conversation.generated_responses[0] || "I'm not sure how to respond to that.";

            setMessages([...newMessages, { text: botReply, isUser: false }]);
        } catch (error) {
            setMessages([...newMessages, { text: "Error fetching response. Try again.", isUser: false }]);
        }
    };

    return (
        <>
            {/* AI Chatbot Button */}
            <button
                onClick={() => setIsChatOpen(!isChatOpen)}
                className="fixed bottom-6 right-6 bg-violet-600 p-3 rounded-full shadow-lg hover:bg-violet-700 transition-colors"
            >
                <MessageSquare className="w-6 h-6 text-white" />
            </button>
            
            {/* Chat Window */}
            {isChatOpen && (
                <div className="fixed bottom-20 right-6 w-96 h-96 bg-gray-900 rounded-lg shadow-xl border border-violet-700/30 p-4 flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-violet-300 font-semibold">DSA Assistant</h3>
                        <button onClick={() => setIsChatOpen(false)} className="text-gray-400 hover:text-gray-300">✕</button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-2 space-y-2">
                        {messages.map((msg, index) => (
                            <div key={index} className={`p-3 rounded-lg ${msg.isUser ? 'bg-violet-600 text-white self-end' : 'bg-violet-900/20 text-gray-300'}`}>{msg.text}</div>
                        ))}
                    </div>
                    <div className="mt-2 flex items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 p-2 bg-gray-800 text-white rounded-lg border border-gray-700"
                            placeholder="Type a message..."
                        />
                        <button onClick={sendMessage} className="ml-2 bg-violet-600 px-4 py-2 rounded-lg text-white">Send</button>
                    </div>
                </div>
            )}
        </>
    );
}
