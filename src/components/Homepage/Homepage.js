import { Link } from "react-router-dom";
import Button from "../Button/Button";
import './Homepage.css'

const Homepage = () => {
    return (
        <div>
            <div className="welcome-section">
                <h1 className="welcome">Welcome</h1>
                <p className="project-desc">A mini react project where users can add there details and can view all other available user's details.</p>
            </div>
            <div className='home'>
                <Link to="/users" style={{ 'width': '48%' }}>
                    <Button val="View" />
                </Link>
                <Link to="/adduser" style={{ 'width': '48%' }} >
                    <Button val="Create" />
                </Link>
            </div>
        </div >
    );
}

export default Homepage;