import styled from 'styled-components'
import homeImage from '../assets/hero.jpg'
export default function Hero() {
  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="Background" />
      </div>
      <div className="content">
        <div className="title">
          <h1>
            <span className="typing">TRAVEL TO EXPLORE</span>
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

        .typing {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid white;
          animation: typing 4s steps(20, end), pause 30s,
            deleting 4s steps(20, end);
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
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

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 20ch; /* Matches the full length of "TRAVEL TO EXPLORE" */
    }
  }

  @keyframes pause {
    from {
      width: 20ch; /* Keeps the full text during the pause */
    }
    to {
      width: 20ch;
    }
  }

  @keyframes deleting {
    from {
      width: 20ch; /* Starts deleting from full text */
    }
    to {
      width: 0;
    }
  }

  @keyframes blink {
    0%,
    100% {
      border-color: transparent;
    }
    50% {
      border-color: white;
    }
  }

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
