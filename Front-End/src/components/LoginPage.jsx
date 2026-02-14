import { useState } from "react";

const LoginPage = () => {
    const [isSignup, setIsSignup] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Basic Validation
    const validate = () => {
        if (isSignup && !formData.name.trim()) {
            return "Name is required";
        }

        if (!formData.email.trim()) {
            return "Email is required";
        }

        if (!formData.password.trim()) {
            return "Password is required";
        }

        return "";
    };

    // Submit Handler (Step 1 Only)
    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");

        const validationError = validate();

        if (validationError) {
            setError(validationError);
            return;
        }

        console.log("Form Data:", formData);
        alert("Valid form. Backend will be added in Step 2.");
    };

    return (
        <div className="app-bg">

            <div className="auth-card">

                {/* Logo */}
                <div className="flex justify-center mb-4">
                    <img
                        src="/assets/Logo.png"
                        alt="Hiring Portal Logo"
                        className="auth-logo"
                    />
                </div>

                {/* Title */}
                <h2 className="auth-title">
                    {isSignup ? "Create Account" : "Welcome Back"}
                </h2>

                {/* Error */}
                {error && <p className="auth-error">{error}</p>}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">

                    {isSignup && (
                        <div>
                            <label className="auth-label">Name</label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                className="auth-input"
                            />
                        </div>
                    )}

                    <div>
                        <label className="auth-label">Email</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="auth-input"
                        />
                    </div>

                    <div>
                        <label className="auth-label">Password</label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className="auth-input"
                        />
                    </div>

                    <button type="submit" className="auth-btn">
                        {isSignup ? "Sign Up" : "Login"}
                    </button>

                </form>

                {/* Switch */}
                <p
                    className="auth-switch"
                    onClick={() => setIsSignup(!isSignup)}
                >
                    {isSignup
                        ? "Already have an account? Login"
                        : "Don't have an account? Sign Up"}
                </p>

            </div>

        </div>
    );
};

export default LoginPage;
