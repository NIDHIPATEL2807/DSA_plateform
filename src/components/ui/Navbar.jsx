

import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 bg-opacity-20 text-white">
      <h1 className="text-2xl font-bold">&lt;करो/&gt; DSA</h1>
      <ul className="flex space-x-6">
        <li><a href="#" className="hover:text-yellow-400">Home</a></li>
        <li><a href="#" className="hover:text-yellow-400">Visualize</a></li>
        <li><a href="#" className="hover:text-yellow-400">Problems</a></li>
        <li><a href="#" className="hover:text-yellow-400">Leaderboard</a></li>
      </ul>
    </nav>
  )
}

export default Navbar