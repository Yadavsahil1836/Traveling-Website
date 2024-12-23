import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import homeImage from '../assets/hero.jpg'

export default function Hero() {
  // STATE to hold the currently displayed text
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    // The messages you want to cycle through
    const messages = ['TRAVEL TO EXPLORE', 'Welcome to Travelo']

    let messageIndex = 0 // Which message in the array we're on
    let charIndex = 0 // How many characters of that message have been typed
    let isDeleting = false
    // Use ReturnType<typeof setTimeout> so TypeScript is happy in a React (browser) environment:
    let timeoutId: ReturnType<typeof setTimeout>

    // Adjust typing/deleting speeds as you wish:
    const TYPING_SPEED = 100 // ms per character typed
    const DELETING_SPEED = 50 // ms per character deleted
    const PAUSE_TIME = 1500 // how long to pause after fully typing a message

    function typeLoop() {
      const currentMessage = messages[messageIndex]

      if (!isDeleting) {
        // TYPING forward
        if (charIndex < currentMessage.length) {
          // Add next character
          setDisplayedText(currentMessage.slice(0, charIndex + 1))
          charIndex++
          timeoutId = setTimeout(typeLoop, TYPING_SPEED)
        } else {
          // Finished typing one full message
          isDeleting = true
          // Wait a bit, then start deleting
          timeoutId = setTimeout(typeLoop, PAUSE_TIME)
        }
      } else {
        // DELETING backward
        if (charIndex > 0) {
          // Remove last character
          setDisplayedText(currentMessage.slice(0, charIndex - 1))
          charIndex--
          timeoutId = setTimeout(typeLoop, DELETING_SPEED)
        } else {
          // Finished deleting, move on to next message
          isDeleting = false
          messageIndex = (messageIndex + 1) % messages.length
          // Short pause before typing the next message
          timeoutId = setTimeout(typeLoop, 500)
        }
      }
    }

    // Start the typing cycle on mount
    typeLoop()

    // Cleanup if the component unmounts
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="Background" />
      </div>
      <div className="content">
        <div className="title">
          <h1>
            {/* Display the typed text, plus a blinking cursor (see styling below). */}
            <span className="typing">{displayedText}</span>
          </h1>
          <p>
            Discover the beauty of new destinations and create unforgettable
            memories with our expert travel guidance.
          </p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="location">Where you want to go</label>
            <input
              type="text"
              id="location"
              placeholder="Search Your location"
            />
          </div>
          <div className="container">
            <label htmlFor="checkin">Check-in</label>
            <input type="date" id="checkin" />
          </div>
          <div className="container">
            <label htmlFor="checkout">Check-out</label>
            <input type="date" id="checkout" />
          </div>
          <button>Explore Now</button>
        </div>
      </div>
    </Section>
  )
}

// --------------------------------------------------
// STYLES
// --------------------------------------------------
const Section = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 90vh;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(60%);
    }
  }

  .content {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;

        /* The typed text container */
        .typing {
          position: relative;
          white-space: nowrap;
        }
        /* We can add a blinking cursor as an ::after pseudo-element */
        .typing::after {
          content: '';
          display: inline-block;
          width: 3px;
          height: 1em;
          background: white;
          margin-left: 0.1rem;
          animation: blinkCursor 0.8s infinite;
          vertical-align: bottom;
        }
      }

      p {
        margin-top: 0.5rem;
        padding: 0 30vw;
        font-size: 1.2rem;
        text-align: center;
      }
    }

    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type='date'] {
            padding-left: 3rem;
          }
          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }

  /* Optional: blinking cursor animation */
  @keyframes blinkCursor {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  /* RESPONSIVE */
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
          .typing {
            font-size: 1rem;
          }
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        .container {
          padding: 0 0.8rem;
          input[type='date'] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
      }
    }
  }
`
