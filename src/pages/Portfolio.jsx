import Project from '../components/Project';


export default function Portfolio() {
    return (
    
        <div id='portfolio'>
            <p className='my-4'>Below you will find a detailed listing of my projects, each one showcasing my ability as a developer.</p>
            <p><small>Click to the right or left of the image to go to the next slide.</small></p>
            <Project />
        </div>
    )
}