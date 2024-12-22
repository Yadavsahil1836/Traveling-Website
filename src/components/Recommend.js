import React, { useState } from 'react'
import styled from 'styled-components'
import Destination1 from '../assets/Destination1.png'
import Destination2 from '../assets/Destination2.png'
import Destination3 from '../assets/Destination3.png'
import Destination4 from '../assets/Destination4.png'
import Destination5 from '../assets/Destination5.png'
import Destination6 from '../assets/Destination6.png'
import info1 from '../assets/info1.png'
import info2 from '../assets/info2.png'
import info3 from '../assets/info3.png'

export default function Recommend() {
  const packages = [
    'The Weekend Break',
    'The Package Holiday',
    'The Group Tour',
    'Long Term Slow Travel'
  ]

  const data = {
    'The Weekend Break': [
      {
        image: Destination1,
        title: 'Singapore Weekend',
        subTitle:
          'Singapore, officially the Republic of Singapore, is a vibrant global city.',
        cost: '38,800',
        duration: 'Approx 2 night trip'
      },
      {
        image: Destination2,
        title: 'Thailand Weekend',
        subTitle:
          'Thailand is a Southeast Asian country known for its tropical beaches.',
        cost: '54,200',
        duration: 'Approx 2 night trip'
      },
      {
        image: Destination3,
        title: 'Paris Weekend',
        subTitle:
          "Paris, France's capital, is a major European city known for its art and culture.",
        cost: '45,500',
        duration: 'Approx 2 night trip'
      },
      {
        image: Destination4,
        title: 'New Zealand Weekend',
        subTitle:
          'New Zealand is an island country in the southwestern Pacific Ocean.',
        cost: '24,100',
        duration: 'Approx 1 night trip'
      },
      {
        image: Destination5,
        title: 'Bora Bora Weekend',
        subTitle:
          'Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia.',
        cost: '95,400',
        duration: 'Approx 2 night 2 day trip'
      },
      {
        image: Destination6,
        title: 'London Weekend',
        subTitle:
          'London, the capital of England and the United Kingdom, is a major global city.',
        cost: '38,800',
        duration: 'Approx 3 night 2 day trip'
      }
    ],
    'The Package Holiday': [
      {
        image: Destination1,
        title: 'Singapore Package',
        subTitle:
          'Singapore, officially the Republic of Singapore, is a vibrant global city.',
        cost: '38,800',
        duration: 'Approx 2 night trip'
      },
      {
        image: Destination2,
        title: 'Thailand Package',
        subTitle:
          'Thailand is a Southeast Asian country known for its tropical beaches.',
        cost: '54,200',
        duration: 'Approx 2 night trip'
      },
      {
        image: Destination3,
        title: 'Paris Package',
        subTitle:
          "Paris, France's capital, is a major European city known for its art and culture.",
        cost: '45,500',
        duration: 'Approx 2 night trip'
      },
      {
        image: Destination4,
        title: 'New Zealand Package',
        subTitle:
          'New Zealand is an island country in the southwestern Pacific Ocean.',
        cost: '24,100',
        duration: 'Approx 1 night trip'
      },
      {
        image: Destination5,
        title: 'Bora Bora Package',
        subTitle:
          'Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia.',
        cost: '95,400',
        duration: 'Approx 2 night 2 day trip'
      },
      {
        image: Destination6,
        title: 'London Package',
        subTitle:
          'London, the capital of England and the United Kingdom, is a major global city.',
        cost: '38,800',
        duration: 'Approx 3 night 2 day trip'
      }
    ],
    'The Group Tour': [
      {
        image: Destination1,
        title: 'Singapore Group',
        subTitle:
          'Singapore, officially the Republic of Singapore, is a vibrant global city.',
        cost: '38,800',
        duration: 'Approx 2 night trip'
      },
      {
        image: Destination2,
        title: 'Thailand Group',
        subTitle:
          'Thailand is a Southeast Asian country known for its tropical beaches.',
        cost: '54,200',
        duration: 'Approx 2 night trip'
      },
      {
        image: Destination3,
        title: 'Paris Group',
        subTitle:
          "Paris, France's capital, is a major European city known for its art and culture.",
        cost: '45,500',
        duration: 'Approx 2 night trip'
      },
      {
        image: Destination4,
        title: 'New Zealand Group',
        subTitle:
          'New Zealand is an island country in the southwestern Pacific Ocean.',
        cost: '24,100',
        duration: 'Approx 1 night trip'
      },
      {
        image: Destination5,
        title: 'Bora Bora Group',
        subTitle:
          'Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia.',
        cost: '95,400',
        duration: 'Approx 2 night 2 day trip'
      },
      {
        image: Destination6,
        title: 'London Group',
        subTitle:
          'London, the capital of England and the United Kingdom, is a major global city.',
        cost: '38,800',
        duration: 'Approx 3 night 2 day trip'
      }
    ],
    'Long Term Slow Travel': [
      {
        image: Destination1,
        title: 'Singapore Slow',
        subTitle:
          'Singapore, officially the Republic of Singapore, is a vibrant global city.',
        cost: '38,800',
        duration: 'Approx 2 night trip'
      },
      {
        image: Destination2,
        title: 'Thailand Slow',
        subTitle:
          'Thailand is a Southeast Asian country known for its tropical beaches.',
        cost: '54,200',
        duration: 'Approx 2 night trip'
      },
      {
        image: Destination3,
        title: 'Paris Slow',
        subTitle:
          "Paris, France's capital, is a major European city known for its art and culture.",
        cost: '45,500',
        duration: 'Approx 2 night trip'
      },
      {
        image: Destination4,
        title: 'New Zealand Slow',
        subTitle:
          'New Zealand is an island country in the southwestern Pacific Ocean.',
        cost: '24,100',
        duration: 'Approx 1 night trip'
      },
      {
        image: Destination5,
        title: 'Bora Bora Slow',
        subTitle:
          'Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia.',
        cost: '95,400',
        duration: 'Approx 2 night 2 day trip'
      },
      {
        image: Destination6,
        title: 'London Slow',
        subTitle:
          'London, the capital of England and the United Kingdom, is a major global city.',
        cost: '38,800',
        duration: 'Approx 3 night 2 day trip'
      }
    ]
  }

  const [active, setActive] = useState(packages[0]) // Default to the first package

  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => (
            <li
              key={index}
              className={active === pkg ? 'active' : ''}
              onClick={() => setActive(pkg)} // Fixed logic for setting active package
            >
              {pkg}
            </li>
          ))}
        </ul>
      </div>
      <div className="destinations">
        {/* Render destinations for the active package */}
        {data[active]?.map((destination, index) => (
          <div key={index} className="destination">
            <img src={destination.image} alt={destination.title} />
            <h3>{destination.title}</h3>
            <p>{destination.subTitle}</p>
            <div className="info">
              <div className="services">
                <img src={info1} alt="info icon" />
                <img src={info2} alt="info icon" />
                <img src={info3} alt="info icon" />
              </div>
              <h4>₹{destination.cost}</h4>
            </div>
            <div className="distance">
              <span>1000 Kms</span>
              <span>{destination.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

const Section = styled.section`
  padding: 1rem;
  max-width: 1200px;
  margin: auto;

  .title {
    text-align: center;
    margin-bottom: 1rem;
    h2 {
      font-size: 1.8rem;
      color: #333;
    }
  }

  .packages {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    ul {
      display: flex;
      list-style: none;
      gap: 1rem;
      li {
        padding: 0.5rem 1rem;
        cursor: pointer;
        border: 1px solid #ccc;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
        font-size: 0.9rem;
        color: #555;

        &:hover {
          background-color: #f0f0f0;
        }
      }

      .active {
        background-color: #8338ec;
        color: white;
        border: none;
      }
    }
  }

  .destinations {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;

    .destination {
      padding: 1rem;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 10px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
      }

      img {
        width: 100%;
        height: auto;
        border-radius: 10px;
      }

      h3 {
        font-size: 1.2rem;
        margin: 0.5rem 0;
        color: #333;
      }

      p {
        font-size: 0.9rem;
        color: #666;
      }

      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.5rem 0;

        .services {
          display: flex;
          gap: 0.3rem;

          img {
            width: 1.2rem;
            height: 1.2rem;
          }
        }

        h4 {
          font-size: 1rem;
          color: #333;
        }
      }

      .distance {
        display: flex;
        justify-content: space-between;
        font-size: 0.8rem;
        color: #666;
      }
    }
  }
`
