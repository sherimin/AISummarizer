import React from 'react'
import logo3 from '../assets/logo3.png';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo3} alt="sumz_logo" className='w-28 object-contain' onClick={() => window.location.reload()} />

        <button
          type="button"
          onClick={() => window.open('https://github.com/sherimin/AISummarizer')}
          className="black_btn"
        >
          Go to Github
        </button>
      </nav>

      <h1 className='head_text'>
        TL;DR? Summarize your favourite article with <br className='max-md:hidden' />
        <span className='orange_gradient'> OpenAI GPT-4</span>
      </h1>

      <h2 className='desc'>
        Efficient reading with <span className='yellow_gradient'>TLDR PRO</span> , an open-source article summarizer designed to transform lengthy articles into concise summaries!
      </h2>
    </header>
  )
}

export default Hero