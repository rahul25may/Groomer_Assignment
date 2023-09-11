// src/components/UserForm.js

import React, { useState } from 'react';
import './Userformm.css';
function UserForm() {
    const [userData, setUserData] = useState({
        name: '',
        dob: '',
        gender: '',
        email: '',
        contact: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        const response = await fetch('http://localhost:5000/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (response.ok) {
            alert('User data has been successfully submitted!');
            setUserData({
                name: '',
                dob: '',
                gender: '',
                email: '',
                contact: '',
            });
        } else {
            alert('Error submitting user data.');

        }

    };

    return (
        <div className='user-main'>
            <h2>User Details Form</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-div'>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-div'>
                    <label>DOB:</label>
                    <input
                        type="text"
                        name="dob"
                        value={userData.dob}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div  className='form-div'>
                    <label>Gender:</label>
                    <input
                        type="text"
                        name="gender"
                        value={userData.gender}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-div'>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-div'>
                    <label>Contact:</label>
                    <input
                        type="number"
                        name="contact"
                        value={userData.contact}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UserForm;
