import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

const ProgressTracker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [problems, setProblems] = useState([
    { id: 1, name: 'Array Manipulation', completed: false },
    { id: 2, name: 'String Operations', completed: true },
    { id: 3, name: 'Binary Search', completed: false },
    { id: 4, name: 'Dynamic Programming', completed: false },
    { id: 5, name: 'Graph Algorithms', completed: true }
  ]);

  const totalProblems = problems.length;
  const completedProblems = problems.filter(p => p.completed).length;
  const percentage = Math.round((completedProblems / totalProblems) * 100);

  const toggleProblem = (id) => {
    setProblems(problems.map(problem => 
      problem.id === id 
        ? { ...problem, completed: !problem.completed }
        : problem
    ));
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-gray-800 p-4 rounded-lg">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Your Progress: {completedProblems}/{totalProblems}</span>
              <span className={`${
      percentage < 30 ? "text-green-500" : percentage < 75 ? "text-yellow-500" : "text-red-500"
    }`}>{percentage}% complete</span>
            </div>
            <div className="w-full bg-gray-700 h-2 rounded-full">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                    percentage < 30 ? "bg-green-500" : percentage < 75 ? "bg-yellow-500" : "bg-red-500"
                  }`}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
          {isOpen ? (
            <ChevronUp className="ml-2 text-gray-400" />
          ) : (
            <ChevronDown className="ml-2 text-gray-400" />
          )}
        </div>
        
        {isOpen && (
          <div className=" w-full mt-4 space-y-2">
            {problems.map(problem => (
              <label 
                key={problem.id}
                className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={problem.completed}
                  onChange={() => toggleProblem(problem.id)}
                  className="w-4 h-4 rounded border-gray-300 text-red-500 focus:ring-red-500"
                />
                <span>{problem.name}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressTracker;