import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        userName: '',
        name: '',
        email: '',
        age: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log("Submitted Data:", formData);
        const res = await axios.post("http://localhost:8080/", user);
        const token = res.data.jwt;
        console.log(res.data)
        localStorage.setItem("token", `Bearer ${token}`);
        navigate("/login")
    };

//     return (
//         <div className="d-flex align-items-center justify-content-center vh-100">
//             <form
//                 onSubmit={handleSubmit}
//                 className="p-4 shadow rounded"
//                 style={{ maxWidth: '500px', width: '100%' }}
//             >
//                 <h2 className="mb-4 text-center">Sign Up</h2>

//                 {/* <div className="mb-3">
//                     <label htmlFor="userName" className="form-label">Username</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="userName"
//                         name="userName"
//                         value={user.userName}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div> */}

//                 <div className="mb-4">
//                     <input
//                         type="text"
//                         className="form-control blank-line-input"
//                         style = {styles.blankLineInput}
//                         placeholder="username"
//                         id="userName"
//                         name="userName"
//                         value={user.userName}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <input
//                         type="text"
//                         className="form-control blank-line-input"
//                         style = {styles.blankLineInput}
//                         placeholder="name"
//                         id="name"
//                         name="name"
//                         value={user.name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
                    
//                     <input
//                         type="email"
//                         className="form-control blank-line-input"
//                         style = {styles.blankLineInput}
//                         placeholder="email"
//                         id="email"
//                         name="email"
//                         value={user.email}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <input
//                         type="password"
//                         className="form-control blank-line-input"
//                         style = {styles.blankLineInput}
//                         placeholder="password"
//                         id="password"
//                         name="password"
//                         value={user.password}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <input
//                         type="number"
//                         className="form-control blank-line-input"
//                         style = {styles.blankLineInput}
//                         placeholder="age"
//                         id="age"
//                         name="age"
//                         value={user.age}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="mb-4 form-check">
//                     <input type="checkbox" className="form-check-input" id="termsCheck" required /> 
//                     <label className="form-check-label" htmlFor="termsCheck">I agree to the terms and conditions</label> <br/><br/>
//                 <a id="myLink" href = "/#/login">Already have an account? Sign in</a> <br/> <br/>
//                 <button type="submit" className="btn btn-primary w-100">Create Account</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// const styles = {
//     blankLineInput:{
//     border: 'none',
//     borderBottom: '1px solid #000',
//     borderRadius: '0',
//     outline: 'none',
//     backgroundColor: 'transparent',
//     paddingLeft: '0',
//     }
// }

return (
    <div className="signup-background">
        <div className="signup-overlay">
            <form
                onSubmit={handleSubmit}
                className="p-4 shadow rounded signup-form"
            >
                <h2 className="mb-4 text-center text-white">Sign Up</h2>

                {["userName", "name", "email", "password", "age"].map((field, index) => (
                    <div className="mb-4" key={index}>
                        <input
                            type={field === "password" ? "password" : field === "email" ? "email" : field === "age" ? "number" : "text"}
                            className="form-control blank-line-input"
                            style={styles.blankLineInput}
                            placeholder={field}
                            id={field}
                            name={field}
                            value={user[field]}
                            onChange={handleChange}
                            required
                        />
                    </div>
                ))}

                <div className="mb-4 form-check text-white">
                    <input type="checkbox" className="form-check-input" id="termsCheck" required />
                    <label className="form-check-label" htmlFor="termsCheck">
                        I agree to the terms and conditions
                    </label> <br /><br />
                    <a id="myLink" href="/#/login" className="text-white">Already have an account? Sign in</a> <br /><br />
                    <button type="submit" className="btn btn-light w-100">Create Account</button>
                </div>
            </form>
        </div>
    </div>
);
}

const styles = {
blankLineInput: {
    border: 'none',
    borderBottom: '1px solid #fff',
    borderRadius: '0',
    outline: 'none',
    backgroundColor: 'transparent',
    paddingLeft: '0',
    color: 'white'
}
}