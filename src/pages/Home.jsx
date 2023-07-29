import Header from '../components/Header';
import Project from '../components/Project';
import headshot from '../images';

export default function Home() {
    return (
        <div>
            <Header />
            <img
                id='headshot'
                src={headshot}
                alt='a picture of myself'
            />
        </div>
        
    )
}