// src/HookFormRegistration.jsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../../App.css";

const schema = yup.object().shape({
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup
        .string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
});

function HookFormRegistration() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch,
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onSubmit = (data) => {
        console.log(data);
        alert("Registration successful! Check console for form data.");
    };

    // Watch form values to track changes
    const watchFields = watch();

    return (
        <div className="registration-container">
            <h1>React Hook Form + Yup Registration</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="registration-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className={errors.email ? "error" : ""}
                    />
                    {errors.email && (
                        <span className="error-message">
                            {errors.email.message}
                        </span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        {...register("password")}
                        className={errors.password ? "error" : ""}
                    />
                    {errors.password && (
                        <span className="error-message">
                            {errors.password.message}
                        </span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        {...register("confirmPassword")}
                        className={errors.confirmPassword ? "error" : ""}
                    />
                    {errors.confirmPassword && (
                        <span className="error-message">
                            {errors.confirmPassword.message}
                        </span>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={!isValid}
                    className={`submit-btn ${!isValid ? "disabled" : ""}`}
                    autoFocus={
                        Object.keys(errors).length === 0 &&
                        watchFields.email &&
                        watchFields.password &&
                        watchFields.confirmPassword
                    }>
                    Register
                </button>
            </form>
        </div>
    );
}

export default HookFormRegistration;
