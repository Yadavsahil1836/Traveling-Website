import styled from 'styled-components'
import { BsLinkedin, BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

export default function Footer() {
  return (
    <FooterContainer>
      <div className="footer-content">
        <div className="brand">
          <h2>Travelo</h2>
          <p>
            Discover the world with Travelo. Your one-stop solution for
            exploring the best travel destinations.
          </p>
        </div>
        <div className="links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/service">Service</a>
            </li>
            <li>
              <a href="/contact">contact</a>
            </li>
          </ul>
        </div>
        <div className="newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </form>
        </div>
        <div className="social__links">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <BsFacebook />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <BsLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; All Rights Reserved.</span>
        <span>Designed by Sahil Yadav</span>
      </div>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  /* Updated background: subtle gradient */
  background: linear-gradient(135deg, #f0f8ff, #e9f3ff);
  padding: 3rem 2rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  flex-direction: column;

  .footer-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    .brand,
    .links,
    .newsletter,
    .social__links {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .brand {
      h2 {
        /* Slightly increased size and changed color */
        font-size: 2.2rem;
        color: #302ce9;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1rem;
        color: #555;
        line-height: 1.5;
        max-width: 250px;
      }
    }

    .links,
    .social__links {
      h3 {
        font-size: 1.2rem;
        color: #302ce9;
        margin-bottom: 1rem;
      }
      ul {
        list-style: none;
        padding: 0;
        li {
          margin-bottom: 0.5rem;
          a {
            text-decoration: none;
            color: #555;
            font-size: 1rem;
            transition: color 0.3s ease-in-out;
            &:hover {
              color: #302ce9;
            }
          }
        }
      }
    }

    .newsletter {
      h3 {
        font-size: 1.2rem;
        color: #302ce9;
        margin-bottom: 1rem;
      }
      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        input {
          width: 100%;
          max-width: 300px;
          padding: 0.7rem;
          border: 1px solid #ddd;
          border-radius: 0.3rem;
          font-size: 1rem;
          &:focus {
            outline: none;
            border-color: #302ce9;
            box-shadow: 0 0 4px rgba(48, 44, 233, 0.2);
          }
        }
        button {
          width: 100%;
          max-width: 300px;
          padding: 0.7rem;
          background-color: #302ce9;
          color: #fff;
          border: none;
          border-radius: 0.3rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: 0.3s ease-in-out;
          &:hover {
            background-color: #555;
          }
        }
      }
    }

    .social__links ul {
      display: flex;
      gap: 1rem;
      justify-content: center;
      li {
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #555;
          font-size: 1.5rem;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background-color: #fff;
          transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          &:hover {
            background-color: #302ce9;
            color: #fff;
          }
        }
      }
    }
  }

  .footer-bottom {
    margin-top: 2rem;
    text-align: center;
    border-top: 1px solid #ddd;
    padding-top: 1rem;
    span {
      display: block;
      font-size: 0.9rem;
      color: #555;
      margin-top: 0.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 2rem;
    }
    .newsletter form {
      input,
      button {
        max-width: 90%;
      }
    }
  }
`
