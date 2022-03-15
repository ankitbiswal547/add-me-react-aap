import { Link } from "react-router-dom";
import Button from "../Button/Button";
import UserCard from "../UserCard/UserCard";
import './Userpage.css';

const Userpage = () => {

    // fetching data from the local storage
    const allUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // helper function to loop through all the user and call the Usercard component.
    const helper = () => {
        return allUsers.map(function (user, index) {
            return <UserCard key={index} firstname={user.firstname} lastname={user.lastName} email={user.email} dob={user.dob} bio={user.bio} />;
        })
    }


    // if no users, then show a message that there are no users currently.
    let isUser = true;
    if (allUsers.length === 0) {
        isUser = false;
    }

    // jsx code for userpage
    return (
        <div className="users-wrapper">
            <h1 className="all-users-heading">All Users</h1>
            {isUser && <div className='all-users'>
                {helper()}
            </div>}
            {!isUser && <div className='no-users-msg'>There are no users currently.</div>}
            <div className="userpage-btn-sec">
                <Link to="/">
                    <Button val="Back to home" />
                </Link>
            </div>
        </div>
    );
}

export default Userpage;