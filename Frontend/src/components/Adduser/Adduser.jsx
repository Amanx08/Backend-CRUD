import React, { useState } from 'react'
import '../Adduser/Adduser.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Toaster, { toast } from 'react-hot-toast'

function Adduser() {

    const users = {

        fname: "",
        lname: "",
        email: "",
        password: "",

    }

    const [user, setUser] = useState(users);
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        // console.log(name);
        // console.log(value);
        setUser({ ...user, [name]: value });
        console.log(user)
    }

    const submitform = async (e) => {

        e.preventDefault();
        await axios.post("http://localhost:4000/api/create", user)
            .then((response) => {
                console.log(response)
                // response.data.msg
                toast.success("Submitted", { position: "top-right" })
                navigate("/")
            }).catch(error => console.log(error))

    }

    return (

        <>
            <div className="card-form">

                <form className="signup" onSubmit={submitform}>
                    <div className="form-title">Sign Up for our Newsletter!</div>

                    <div className="form-body">
                        <div className="row">
                            <input onChange={inputHandler} type="text" name='fname' placeholder="First Name*" />
                            <input onChange={inputHandler} type="text" name='lname' placeholder="Last Name*" />
                        </div>
                        <div className="row">
                            <input onChange={inputHandler} type="text" name='email' placeholder="Email Address*" />
                        </div>
                        <div className="row">
                            <input onChange={inputHandler} type="password" name='password' placeholder="Password*" />
                        </div>
                    </div>

                    <div className="rule"></div>

                    <div className="form-footer">
                        <button type='submit'>Submit<span className="fa fa-thumbs-o-up"></span></button>
                        {/* <a>Not Now!<span className="fa fa-ban"></span></a> */}
                    </div>

                </form>
            </div>
        </>

    )
}

export default Adduser
