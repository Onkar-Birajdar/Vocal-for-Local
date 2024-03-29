import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../../firebase";
import "./Login.css";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                navigate("/");
            })
            .catch((error) => alert(error.message));
    };
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    navigate("/");
                }
            })
            .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="logo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email"
                    />
                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Enter your strong password"
                    />
                    <button
                        className="login__signInButton"
                        type="submit"
                        onClick={signIn}
                    >
                        Sign-in
                    </button>
                </form>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    iure voluptate voluptates numquam perspiciatis voluptatum
                    illo odio. Vero laboriosam labore repellendus debitis
                    quaerat, eveniet cumque ut amet repudiandae voluptate
                    ducimus.
                </p>
                <button
                    className="login__registerButton"
                    type="submit"
                    onClick={register}
                >
                    Create your Amazon account
                </button>
            </div>
        </div>
    );
}

export default Login;
