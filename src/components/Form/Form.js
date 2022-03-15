import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../Button/Button';
import './Form.css';

function Form() {
    let history = useHistory();

    const [firstname, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDOB] = useState('');
    const [bio, setBio] = useState('');
    const [fnisvalid, setfnisvalid] = useState(true);
    const [lnisvalid, setlnisvalid] = useState(true);
    const [emailisvalid, setemailisvalid] = useState(true);
    const [dobisvalid, setdobisvalid] = useState(true);
    const [bioisvalid, setbioisvalid] = useState(true);


    // handlers called on input change

    const firstNameChangeHandler = (eve) => {
        setFirstName(eve.target.value);
    }

    const lastNameChangeHandler = eve => {
        setLastName(eve.target.value);
    }

    const emailChangeHandler = eve => {
        setEmail(eve.target.value);
    }

    const dobChangeHandler = eve => {
        setDOB(eve.target.value);
    }

    const bioChangeHandler = eve => {
        setBio(eve.target.value);
    }


    // handler called on form submit
    const formSubmitHandler = (event) => {
        event.preventDefault();
        let fnvalid = true, lnvalid = true, emailvalid = true, valid = true, dobvalid = true, biovalid = true;


        // input fields validation and responding with error message if invalid and not submitting the form.
        if (firstname.trim() == '') {
            setfnisvalid(false);
            fnvalid = false;
            valid = false;
        }
        if (fnvalid) setfnisvalid(true);


        if (lastName.trim() == '') {
            setlnisvalid(false);
            lnvalid = false;
            valid = false;
        }
        if (lnvalid) setlnisvalid(true);


        if (email.trim() == '') {
            setemailisvalid(false);
            emailvalid = false;
            valid = false;
        }
        if (emailvalid) setemailisvalid(true);

        if (dob == '') {
            setdobisvalid(false);
            dobvalid = false;
            valid = false;
        }
        if (dobvalid) setdobisvalid(true);

        if (bio.trim() == '') {
            setbioisvalid(false);
            biovalid = false;
            valid = false;
        }
        if (biovalid) setbioisvalid(true);


        // if invalid, don't submit the form and return.
        if (!valid) return;


        // building the new user object that is to be stored in the local storage
        const user = {
            firstname,
            lastName,
            email,
            dob,
            bio
        };

        // retriving data from local storage and adding another user to it.
        const allUsers = JSON.parse(localStorage.getItem("users") || "[]");
        allUsers.push(user);
        localStorage.setItem("users", JSON.stringify(allUsers));

        // resetting the input fields after submission
        setFirstName('');
        setLastName('');
        setEmail('');
        setDOB('');
        setBio('');

        // redirecting the user to all users page
        history.push('/users');
    }

    return (
        <div className='form-sec'>
            <h1 className="form-name">Add Me</h1>
            <form className="user-form" onSubmit={formSubmitHandler}>
                <div className="form-input">
                    <label htmlFor="firstname">First Name</label>
                    <input onChange={firstNameChangeHandler} value={firstname} id="firstname" type="text" placeholder="John" />
                    {!fnisvalid && <p className='error-msg'>First name can't be empty.</p>}
                </div>
                <div className="form-input">
                    <label htmlFor="lastname">Last Name</label>
                    <input onChange={lastNameChangeHandler} value={lastName} id="lastname" type="text" placeholder="Doe" />
                    {!lnisvalid && <p className='error-msg'>Last name can't be empty.</p>}
                </div>
                <div className="form-input">
                    <label htmlFor="email">Email</label>
                    <input onChange={emailChangeHandler} value={email} id="email" type="email" placeholder="abc@def.com" />
                    {!emailisvalid && <p className='error-msg'>Email can't be empty.</p>}
                </div>
                <div className="form-input">
                    <label htmlFor="dob">Date of Birth</label>
                    <input onChange={dobChangeHandler} value={dob} id="dob" type="date" placeholder="14th nov, 2001" />
                    {!dobisvalid && <p className='error-msg'>DOB can't be empty.</p>}
                </div>
                <div className="form-input">
                    <label htmlFor="bio">Bio</label>
                    <textarea onChange={bioChangeHandler} value={bio} id="bio" rows="10" cols="30" placeholder="Write about yourself"></textarea>
                    {!bioisvalid && <p className='error-msg'>Bio can't be empty.</p>}
                </div>
                <div className="btn-sec">
                    <Button val="save" />
                </div>
            </form>

            <div className="form-back-to-home">
                <Link to="/">
                    <Button val="Back to home" />
                </Link>
            </div>
        </div>
    );
}

export default Form;