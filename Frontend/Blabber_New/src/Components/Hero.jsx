import React from "react"
import '../index.css'

const styles = {
  '@keyframes blink': {
    '0%, 100%': { opacity: '1' },
    '50%': { opacity: '0.5' }
  }
}

function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white mt-10" style={{ fontFamily: "'Neue Machina', sans-serif" }}>
      <div className="w-full max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center">
          <h1 className="text-7xl text-center" style={{ fontFamily: "'Neue Machina', sans-serif" }}>
            <div>
              We built{' '}
              <span style={{ color: '#22C58B' }}>Blabber</span>
            </div>
            <div>
              to bring{' '}
              <span className="inline-block" style={{ animation: 'blink 1.5s infinite' }}>people</span>{' '}
              closer
            </div>
            <div>
              no matter the{' '}
              <span style={{ fontFamily: "'Juana', serif", fontStyle: 'italic', fontWeight: '100' }}>distance</span>
            </div>
          </h1>

          <p className="text-[#9CA3AF] text-lg max-w-[280px] text-right self-end mt-8">
            Get ready to{' '}
            <span style={{ color: '#22C58B' }}>accelerate your career</span>{' '}
            with customized courses and leave your mark in the tech industry
          </p>

          <button 
            className="mt-1 text-black px-10 py-4 rounded-md text-lg font-medium transition-all hover:opacity-90"
            style={{ backgroundColor: '#22C58B' }}
          >
            Get Started for Free
          </button>
        </div>
      </div>

      <style>
        {`
          @import url('https://fonts.cdnfonts.com/css/neue-machina');
          @import url('https://fonts.cdnfonts.com/css/juana');

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}
      </style>
    </div>
  )
}

export default Hero