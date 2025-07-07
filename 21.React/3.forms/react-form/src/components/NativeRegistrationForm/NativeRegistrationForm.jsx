// src/NativeRegistrationForm.jsx
import { useState, useEffect, useRef } from "react";
import "../../App.css";

function NativeRegistrationForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const submitButtonRef = useRef(null);

    useEffect(() => {
        validateForm();
    }, [email, password, confirmPassword]);

    const validateForm = () => {
        const newErrors = {};

        // Email validation
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid";
        }

        // Password validation
        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        // Confirm password validation
        if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        setIsValid(Object.keys(newErrors).length === 0);

        // Move focus to submit button if form is valid
        if (Object.keys(newErrors).length === 0 && submitButtonRef.current) {
            submitButtonRef.current.focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            console.log({ email, password });
            // Here you would typically send data to your backend
            alert("Registration successful! Check console for form data.");
        }
    };

    return (
        <div className="registration-container">
            <h1>Native Registration Form</h1>
            <form onSubmit={handleSubmit} className="registration-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={errors.email ? "error" : ""}
                    />
                    {errors.email && (
                        <span className="error-message">{errors.email}</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={errors.password ? "error" : ""}
                    />
                    {errors.password && (
                        <span className="error-message">{errors.password}</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={errors.confirmPassword ? "error" : ""}
                    />
                    {errors.confirmPassword && (
                        <span className="error-message">
                            {errors.confirmPassword}
                        </span>
                    )}
                </div>

                <button
                    type="submit"
                    ref={submitButtonRef}
                    disabled={!isValid}
                    className={`submit-btn ${!isValid ? "disabled" : ""}`}>
                    Register
                </button>
            </form>
        </div>
    );
}

export default NativeRegistrationForm;
