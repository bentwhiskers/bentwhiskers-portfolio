import aboutMePic from '../images/aboutMePic.jpeg';

export default function AboutMe() {
    return (
        <div>
            <div id='about' className='card mb-3'>
                <div className='row g-0'>
                    <div className='col-md-4'>
                        <img src={aboutMePic} alt="picture of me next to flowers" className='img-fluid rounded-start'></img>
                    </div>
                
                        <div className='col-md-8'>
                            <div className='card-body'> 
                                <h3 className='card-title'></h3>
                                <p className='card-text'></p>
                                <p className='card-text'>I started my coding journey in February of 2023, though I give MySpace credit for my initial interest in coding, back when I was editing my page and trying to figure out who my top 8 were going to be. Since then, I have honed my skills in various technologies, including:</p>
                            </div>

                </div>            
                        </div>
                                <div>
                                    <ul className='list-group list-group-flush'>
                                        <li className='list-group-item'>HTML</li>
                                        <li className='list-group-item'>CSS</li>
                                        <li className='list-group-item'>JavaScript</li>
                                        <li className='list-group-item'>React</li>
                                        <li className='list-group-item'>Node.js</li>
                                        <li className='list-group-item'>Express.js</li>
                                        <li className='list-group-item'>Bootstrap</li>
                                        <li className='list-group-item'>SQL</li>
                                        <li className='list-group-item'>MongoDB</li>
                                    </ul>
                                </div>
                        
                
            </div>
        </div>
    )
}