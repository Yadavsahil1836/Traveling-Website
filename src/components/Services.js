import styled from 'styled-components'
import service1 from '../assets/service1.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'
import service4 from '../assets/service4.png'

export default function Services() {
  const data = [
    {
      icon: service1,
      title: 'Get Best Prices',
      subTitle:
        'Pay through our application and save thousands and get amazing rewards.'
    },
    {
      icon: service2,
      title: 'Covid Safe',
      subTitle:
        'We have all the curated hotels that have all the precautions for a Covid-safe environment.'
    },
    {
      icon: service3,
      title: 'Flexible Payment',
      subTitle:
        'Enjoy the flexible payment through our app and get rewards on every payment.'
    },
    {
      icon: service4,
      title: 'Find The Best Near You',
      subTitle:
        'Find the best hotels and places to visit near you in a single click.'
    }
  ]
  return (
    <Section id="services">
      {data.map((service, index) => {
        return (
          <div key={index} className="service">
            <div className="icon">
              <img src={service.icon} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        )
      })}
    </Section>
  )
}

const Section = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;

  .service {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    padding: 1.5rem;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 5px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 20px,
        rgba(0, 0, 0, 0.1) 0px 6px 6px;
    }

    .icon {
      img {
        height: 3rem;
        width: auto;
      }
    }

    h3 {
      font-size: 1.2rem;
      color: #333;
    }

    p {
      font-size: 0.9rem;
      color: #666;
    }
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`
