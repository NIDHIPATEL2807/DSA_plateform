import { Bookmark, BookOpen, ChevronsUpDown, Database, Settings, Star, Video } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import ChatBot from '../components/ui/ChatBot';

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-gray-900 text-gray-300 p-4">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
          <span className="text-xl font-bold">&lt;करो/&gt; DSA</span>
        </div>
      </div>

      <nav className="space-y-2">
        <Link to="/profile" className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
          <Database className="w-5 h-5" />
          <span>Profile</span>
        </Link>

        <Link to="/blogs" className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
          <BookOpen className="w-5 h-5" />
          <span>Blogs</span>
        </Link>

        <Link to="/system-design" className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
          <Settings className="w-5 h-5" />
          <span>System Design</span>
        </Link>

        <div className="py-2">
          <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
            <Video className="w-5 h-5" />
            <span>Karodsa's DSA Playlist</span>
            <ChevronsUpDown className="w-4 h-4 ml-auto" />
          </div>
        </div>

        <div className="py-2">
          <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
            <BookOpen className="w-5 h-5" />
            <span>SDE Core Sheets</span>
            <ChevronsUpDown className="w-4 h-4 ml-auto" />
          </div>
        </div>

        <Link to="/cp-sheet" className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
          <BookOpen className="w-5 h-5" />
          <span>Karodsa's CP Sheet</span>
        </Link>

        <Link to="/saved-notes" className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
          <Bookmark className="w-5 h-5" />
          <span>Saved Notes</span>
        </Link>

        <Link to="/fullstack-final" className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
          <Database className="w-5 h-5" />
          <span>CW Fullstack Final</span>
        </Link>

        <div className="mt-8 p-4 bg-gray-800 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="font-semibold">Upgrade to Plus</span>
          </div>
          <p className="text-sm mb-4">Unleash Your Full Potential with Exclusive Features</p>
          <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors">
            Get Started Now
          </button>
        </div>
      </nav>
    </div>
  );
};

const Dashboard = () => {
  const progress = {
    current: 12,
    total: 455,
    percentage: 2
  };

  const sections = [
    { title: "Step 1: Learn the basics", progress: "0/31" },
    { title: "Step 2: Learn Important Sorting Techniques", progress: "0/7" },
    { title: "Step 3: Solve Problems on Arrays [Easy -> Medium -> Hard]", progress: "9/40" },
    { title: "Step 4: Binary Search [1D, 2D Arrays, Search Space]", progress: "1/32" }
  ];

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-300 mb-8">
            lecture quality is better than what you get in paid courses, the only thing we don't provide is doubt support, but trust me our YouTube video comments resolve that as well, we have a wonderful community of 250K+ people who engage in all of the videos.
          </p>

          <div className="mb-8">
            <div className="bg-gray-800 p-4 rounded-lg mb-4">
              <h2 className="text-gray-200 text-lg font-semibold">Key Highlights</h2>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg mb-4">
              <h2 className="text-gray-200 text-lg font-semibold">Note</h2>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300">Your Progress: {progress.current}/{progress.total}</span>
                <span className="text-red-500">{progress.percentage}% complete</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full">
                <div 
                  className="bg-red-500 h-2 rounded-full" 
                  style={{ width: `${progress.percentage}%` }}
                ></div>
              </div>
            </div>

            {sections.map((section, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg mb-4 flex justify-between items-center">
                <h2 className="text-gray-200">{section.title}</h2>
                <span className="text-gray-400">{section.progress}</span>
              </div>
            ))}
          </div>
        </div>
        <ChatBot />
      </main>
    </div>
  );
};

export default Dashboard;

//try 2
// import { Code, Database, MessageSquare, PlayCircle, Star } from 'lucide-react';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// // Custom hook for managing progress
// const useProgress = () => {
//   const [completedQuestions, setCompletedQuestions] = useState(new Set());
  
//   const toggleQuestion = (questionId) => {
//     setCompletedQuestions(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(questionId)) {
//         newSet.delete(questionId);
//       } else {
//         newSet.add(questionId);
//       }
//       return newSet;
//     });
//   };

//   return { completedQuestions, toggleQuestion };
// };

// const DSAQuestion = ({ id, title, difficulty, isCompleted, onToggle }) => (
//   <div className="flex items-center justify-between p-3 hover:bg-violet-800/20 rounded-lg">
//     <div className="flex items-center gap-3">
//       <input
//         type="checkbox"
//         checked={isCompleted}
//         onChange={() => onToggle(id)}
//         className="w-4 h-4 accent-violet-500"
//       />
//       <span className="text-gray-200">{title}</span>
//     </div>
//     <span className={`px-2 py-1 rounded text-xs ${
//       difficulty === 'Easy' ? 'bg-green-500/20 text-green-300' :
//       difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
//       'bg-red-500/20 text-red-300'
//     }`}>
//       {difficulty}
//     </span>
//   </div>
// );

// const Sidebar = ({ activeSection, setActiveSection }) => {
//   const sections = [
//     { id: 'arrays', title: 'Arrays & Strings' },
//     { id: 'linkedlist', title: 'Linked Lists' },
//     { id: 'trees', title: 'Trees & Graphs' },
//     { id: 'dp', title: 'Dynamic Programming' },
//   ];

//   return (
//     <div className="w-64 min-h-screen bg-gray-900 text-gray-300 p-4 border-r border-violet-900/30">
//       <div className="mb-8">
//         <div className="flex items-center gap-2 mb-6">
//           <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center">
//             <span className="text-white font-bold">SJ</span>
//           </div>
//           <span className="text-xl font-bold text-violet-300">&lt;करो/&gt; DSA</span>
//         </div>
//       </div>

//       <nav className="space-y-2">
//         {/* Main Navigation Links */}
//         <Link to="/profile" className="flex items-center gap-3 p-2 rounded hover:bg-violet-800/20">
//           <Database className="w-5 h-5 text-violet-400" />
//           <span>Profile</span>
//         </Link>

//         {/* Code Playground Link */}
//         <Link to="/playground" className="flex items-center gap-3 p-2 rounded hover:bg-violet-800/20">
//           <PlayCircle className="w-5 h-5 text-violet-400" />
//           <span>Code Playground</span>
//         </Link>

//         {/* DSA Sections Dropdown */}
//         <div className="mt-4">
//           <div className="font-semibold mb-2 text-violet-300">DSA Sections</div>
//           {sections.map((section) => (
//             <button
//               key={section.id}
//               onClick={() => setActiveSection(section.id)}
//               className={`w-full text-left p-2 rounded flex items-center gap-2 ${
//                 activeSection === section.id ? 'bg-violet-800/30' : 'hover:bg-violet-800/20'
//               }`}
//             >
//               <Code className="w-4 h-4" />
//               {section.title}
//             </button>
//           ))}
//         </div>

//         {/* Upgrade Section */}
//         <div className="mt-8 p-4 bg-violet-900/20 rounded-lg border border-violet-700/30">
//           <div className="flex items-center gap-2 mb-2">
//             <Star className="w-5 h-5 text-violet-400" />
//             <span className="font-semibold">Upgrade to Plus</span>
//           </div>
//           <p className="text-sm mb-4 text-gray-400">Unlock premium features and support</p>
//           <button className="w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700 transition-colors">
//             Get Started Now
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// };

// const Dashboard = () => {
//   const [activeSection, setActiveSection] = useState('arrays');
//   const { completedQuestions, toggleQuestion } = useProgress();
//   const [isChatOpen, setIsChatOpen] = useState(false);

//   const questions = {
//     arrays: [
//       { id: 'a1', title: 'Two Sum', difficulty: 'Easy' },
//       { id: 'a2', title: 'Container With Most Water', difficulty: 'Medium' },
//       { id: 'a3', title: 'Trapping Rain Water', difficulty: 'Hard' },
//     ],
//     linkedlist: [
//       { id: 'l1', title: 'Reverse Linked List', difficulty: 'Easy' },
//       { id: 'l2', title: 'Detect Cycle', difficulty: 'Medium' },
//     ],
//     // Add more sections as needed
//   };

//   const totalQuestions = Object.values(questions).flat().length;
//   const completedCount = completedQuestions.size;
//   const progressPercentage = (completedCount / totalQuestions) * 100;

//   return (
//     <div className="flex min-h-screen bg-gray-950">
//       <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      
//       <main className="flex-1 p-8">
//         <div className="max-w-4xl mx-auto">
//           {/* Progress Bar */}
//           <div className="bg-gray-800 p-6 rounded-lg mb-8">
//             <div className="flex items-center justify-between mb-4">
//               <span className="text-gray-300">Your Progress: {completedCount}/{totalQuestions}</span>
//               <span className="text-violet-400">{progressPercentage.toFixed(1)}% complete</span>
//             </div>
//             <div className="w-full bg-gray-700 h-2 rounded-full">
//               <div 
//                 className="bg-violet-500 h-2 rounded-full transition-all duration-300" 
//                 style={{ width: `${progressPercentage}%` }}
//               ></div>
//             </div>
//           </div>

//           {/* Questions Section */}
//           <div className="space-y-6">
//             {questions[activeSection]?.map(question => (
//               <DSAQuestion
//                 key={question.id}
//                 {...question}
//                 isCompleted={completedQuestions.has(question.id)}
//                 onToggle={toggleQuestion}
//               />
//             ))}
//           </div>
//         </div>
//       </main>

//       {/* AI Chatbot Button */}
//       <button
//         onClick={() => setIsChatOpen(!isChatOpen)}
//         className="fixed bottom-6 right-6 bg-violet-600 p-3 rounded-full shadow-lg hover:bg-violet-700 transition-colors"
//       >
//         <MessageSquare className="w-6 h-6 text-white" />
//       </button>

//       {/* Chat Window */}
//       {isChatOpen && (
//         <div className="fixed bottom-20 right-6 w-96 h-96 bg-gray-900 rounded-lg shadow-xl border border-violet-700/30 p-4">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-violet-300 font-semibold">DSA Assistant</h3>
//             <button onClick={() => setIsChatOpen(false)} className="text-gray-400 hover:text-gray-300">
//               ✕
//             </button>
//           </div>
//           <div className="h-[calc(100%-4rem)] overflow-y-auto">
//             {/* Chat messages would go here */}
//             <div className="bg-violet-900/20 p-3 rounded-lg mb-2">
//               Hi! How can I help you with DSA today?
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;
