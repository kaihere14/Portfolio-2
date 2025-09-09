import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800 py-6 mt-10 border-t-3 border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <p className="font-['balo'] text-lg">
          &copy; {currentYear} Arman Thakur. All rights reserved.
        </p>
        <p className="font-['balo'] text-sm mt-2">
          Made with <span className="text-red-500">❤</span> by <span className="text-orange-400">Arman Thakur</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
