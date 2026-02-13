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
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black">

            <div className="bg-gray-900 border border-gray-700 p-8 rounded-xl shadow-2xl w-95">

                <div className="flex justify-center mb-4">
                    <img
                        src="/assets/Logo.png"
                        alt="Hiring Portal Logo"
                        className="h-30 w-auto drop-shadow-md brightness-110"
                    />
                </div>

                <h2 className="text-3xl font-bold text-center mb-6 text-white">
                    {isSignup ? "Create Account" : "Hiring-Portal"}
                </h2>

                {error && (
                    <p className="bg-red-500/10 text-red-400 text-sm p-2 rounded mb-4 border border-red-500/20">
                        {error}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">

                    {isSignup && (
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-sm text-gray-400 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold transition duration-200 shadow-lg shadow-blue-600/20"
                    >
                        {isSignup ? "Sign Up" : "Login"}
                    </button>

                </form>

                <p
                    className="text-center text-sm text-gray-400 mt-6 cursor-pointer hover:text-blue-400 transition"
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
