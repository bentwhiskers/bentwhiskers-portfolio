import { Link } from 'react-router-dom';
import Nav from './Nav';

export default function Header() {
    return (
        <div>
            <h1 id ='handle' className='text-start'>bentwhiskers</h1>
            <Nav />
        </div>
    )
}
