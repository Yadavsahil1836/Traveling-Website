import styled from 'styled-components'
import './formatedDe.css'
function FormateDesign(props) {
  return (
    <>
      <div className={props.cName}>
        <Section_12>
          <img alt="formatedde-hero" src={props.heroImg}></img>
        </Section_12>
        <div className="formatedde-hero-text">
          <h1>
            <span className="typing">{props.title}</span>
          </h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  )
}

export default FormateDesign

const Section_12 = styled.div`
  position: relative;
  width: 100%;
  height: 90vh; /* Matches the height of the hero section */
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image covers the container */
    filter: brightness(60%); /* Adds a darker overlay */
    display: block; /* Removes extra space around the image */
  }
`
