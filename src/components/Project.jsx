import { Link } from 'react-router-dom';
import project2 from '../images/project2.png';
import bootcampSims from '../images/bootcampSims.png';

export default function Project() {
    return (
        <div>
           <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={project2} alt="project 2 screenshot" className="d-block w-100" />
      <div className="carousel-caption d-none d-md-block">
        <h5>P🐾st: Pet Social Media</h5>
        <p>Jump into the animal kingdom, and create a space for your pet to post! As co-developer, my parter and I created this social media website for pets.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={bootcampSims} alt="project 1 screenshot" className="d-block w-100" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Bootcamp Sims</h5>
        <p>Bootcamp SIMS is a fun, simulation game designed to help potential web development students learn exactly what to expect before deciding to attend coding bootcamp.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 
        </div>
    )
}