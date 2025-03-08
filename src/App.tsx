import { useState } from 'react';

import './App.css';
function App() {
  const [toDo, addToDo] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6 px-2 sm:py-10 sm:px-4">
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-3 sm:p-6">
            <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
              To-Do App
            </h1>

            {/* Input and Add button in a row - responsive on mobile */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:space-x-2 mb-6 sm:mb-8">
              <input
                type="text"
                placeholder="Add a new task..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && input.trim()) {
                    addToDo([...toDo, input.trim()]);
                    setInput('');
                  }
                }}
                className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={() => {
                  if (input.trim()) {
                    addToDo([...toDo, input.trim()]);
                    setInput('');
                  }
                }}
                className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Add
              </button>
            </div>

            {/* Tasks list */}
            <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
              <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-3">
                Tasks
              </h2>
              {toDo.length > 0 ? (
                <ul className="space-y-2">
                  {toDo.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between bg-white p-2 sm:p-3 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 break-words"
                    >
                      <span className="text-gray-800 mr-2 flex-1">{item}</span>
                      <button
                        onClick={() => {
                          const newToDo = [...toDo];
                          newToDo.splice(index, 1);
                          addToDo(newToDo);
                        }}
                        className="text-red-500 hover:text-red-700 focus:outline-none flex-shrink-0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center text-gray-500 py-4">
                  No tasks yet. Add some!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
