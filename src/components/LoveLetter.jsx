import React, { useState, useEffect } from 'react';
import './LoveLetter.css';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowContent(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div className="container">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <div className={`love-letter ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        {!isOpen && (
          <div className="closed-content">
            <svg
              className="heart-icon"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            <p className="click-text">Click to open</p>
          </div>
        )}
        {isOpen && showContent && (
          <div className="love-letter-content">
            <h2 className="heading">My Dearest Love,</h2>
            <p className="paragraph">Today, we celebrate someone truly extraordinary—you. On this special day, I just want to take a moment to tell you how grateful I am for every single second we spend together and to let you know how deeply I adore you.</p>
            <p className="paragraph">From the very first time our eyes met, my life has been brighter, my heart fuller. You've brought a warmth into my world that I never thought possible, filling every day with joy, laughter, and countless precious memories. You are my best friend, my love, and my inspiration. Being by your side and sharing in your happiness has shown me the truest form of love.</p>
            <p className="paragraph">Your smile, so radiant and genuine, lifts me up in ways words can't describe. The kindness in your heart and the strength in your soul make you not just beautiful on the outside but also incredibly beautiful within. Every day with you feels like a new chapter of a story I never want to end, and I look forward to every moment, adventure, and dream that lies ahead for us.</p>
            <p className="paragraph">I love how you see beauty in the simplest things and how you bring out the best in me, even when I didn’t know it was there. You make me want to be a better person, just by being who you are. With you, life feels effortless, like we’re walking together in our own little universe, where love is constant and unconditional.</p>
            <p className="paragraph">So on this birthday, I want you to know that I cherish you, every part of you, more deeply than I could ever say. I’m grateful for every moment we’ve shared and for every future moment we’re going to create together. I promise to love you, protect you, and cherish you for all the days of my life.</p>
            <p className="paragraph">Happy Birthday, my love. Here’s to you, to us, and to a future filled with endless love, laughter, and shared dreams. May this year bring you as much happiness and love as you bring to my life every day.</p>
            <p className="signature">Forever Yours, Your future Husband</p>
          </div>
        )}
      </div>

      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="floating-heart"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default LoveLetter;
