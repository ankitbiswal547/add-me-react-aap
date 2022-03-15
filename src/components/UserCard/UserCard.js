import './UserCard.css'

function UserCard(props) {

    // jsx code usercard
    // it contains Fullname, date-of-birth, email and bio
    return (
        <div className="user-card">
            <h5 className="user-name">{props.firstname} {props.lastname}</h5>
            <div className="dob-email-section">
                <div>DOB: {props.dob}</div>
                <div>{props.email}</div>
            </div>
            <div className="description">
                {props.bio}
            </div>
        </div>
    );
}

export default UserCard;