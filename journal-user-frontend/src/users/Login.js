import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../authentication/AuthContext";
import "./Signup.css";

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [user, setUser] = useState({
        userName: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //const result = await axios.get(`http://localhost:8080/${user.userName}`);
            const result = await axios.post(`http://localhost:8080/signin`, { "userName": user.userName, "password": user.password },
                {
                    headers: {
                      Authorization: localStorage.getItem("token")
                    }
                  }
            );
            // if (user.password === result.data.password) {
            //     login();
            //     localStorage.setItem('user', JSON.stringify(result.data));
            //     navigate("/layout");
            // } else {
            //     alert("Wrong password or username");
            // }


            if (result) {
                login();
                localStorage.setItem('user', JSON.stringify(result.data));
                navigate("/layout");
            }
        } catch (error) {
            alert("User not found or server error");
        }
    };

    return (
        <div className="signup-background">
            <div className="signup-overlay">
            <form
                onSubmit={handleSubmit}
                className="p-4 shadow rounded"
                style={{ maxWidth: '500px', width: '100%' }}
            >
                <h2 className="mb-4 text-center text-white">Login</h2>

                <div className="mb-3">
                    <div className="input-group">
                        <span className="input-group-text">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            id="userName"
                            name="userName"
                            placeholder="User Name"
                            value={user.userName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="mb-3">
                    <div className="input-group">
                        <span className="input-group-text">
                            <FontAwesomeIcon icon={faLock} />
                        </span>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            id="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <a id="myLink2" href="/#/signup" className="text-white">Don't have an account? Sign up!</a><br />
                <button type="submit" className="btn btn-light w-100">Login</button>
            </form>
            </div>
        </div>
    );
}
