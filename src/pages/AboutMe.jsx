import aboutMePic from '../images/aboutMePic.jpeg';

export default function AboutMe() {
    return (
        <div id='about'>
            <img src={aboutMePic} alt="picture of me next to flowers" className='img-fluid'></img>
            <h3>Welcome!</h3>
            <h4>I am Erica Covington-Abbott, </h4>
        </div>
    )
}