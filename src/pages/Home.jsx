

import headshot from '../images/headshot.jpg';

export default function Home() {
    return (
        <div id='home'>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={headshot} className="img-fluid" alt="picture of me smiling" />
                        </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Welcome!</h5>
                                        <p className="card-text">My name is Erica, and as a full-stack web developer, I am passionate about turing ideas into reality through coding. With comprehensive knowledge about both front-end and back-end technologies, I have the ability to create highly responsive, interactive, and functional web applications. I'm excited to bring my passion and skills to a dynamic team where I can contribute my knowledge, learn from experienced professionals, and create more amazing digitial solutions together!</p>
                                        <p className="card-text"><small className="text-body-secondary">"Truth can only be found in one place: the code." - Robert C. Martin</small></p>
                                </div>
                            </div>
                    </div>
                </div>
        </div>
        
    )
}