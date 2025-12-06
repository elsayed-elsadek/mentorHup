// pages/Login.tsx
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { BasicLayout } from "../../components/layout/BasicLayout";
/* --- Types --- */
interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  general?: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<FormErrors>>({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const emailRegex = /^\S+@\S+\.\S+$/;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    if (formRef.current && !formRef.current.reportValidity()) return false;

    const newErrors: Partial<FormErrors> = {};
    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(null);
    if (!validate()) return;

    setLoading(true);
    const safePayload = { email: formData.email };
    console.log("Submitting login (safe):", safePayload);

    setTimeout(() => {
      setLoading(false);
      setSuccessMessage("Login successful. Redirecting...");
    }, 900);
  };

  return (
    <BasicLayout>
    
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full max-w-[500px] mx-auto"
          aria-label="Login form"
        >
          {/* Heading */}
          <h1 className="text-2xl font-semibold text-gray-800 mb-6 mt-20 text-center">
            Welcome back to EduNest!
          </h1>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-700 mb-2">
              E-mail / Username
            </label>
            <div className="relative">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="example@gmail.com"
                className="w-full h-[55px] border border-gray-300 rounded-[12px] px-3 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              {emailRegex.test(formData.email) && (
                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            {errors.email && (
              <p className="text-red-600 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                placeholder="Enter your password"
                className="w-full h-[55px] border border-gray-300 rounded-[12px] px-3 focus:outline-none focus:ring-2 focus:ring-primary"
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.965 9.965 0 012.556-3.653M6.12 6.12a9.965 9.965 0 014.755-1.624c4.477 0 8.268 2.943 9.542 7a10.05 10.05 0 01-1.378 2.583M3 3l18 18"
                    />
                  </svg>
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-600 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Forgot password */}
          <Link
            to="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot password?
          </Link>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center w-full h-[55px] rounded-xl gap-2 px-12 bg-[linear-gradient(90deg,rgba(21,77,113,1)_18%,rgba(51,161,224,1)_100%)] text-white font-semibold transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            ) : (
              "Login"
            )}
          </button>

          {/* Remember me */}
          <label className="flex items-center gap-2 text-sm mt-3">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4"
            />
            Remember me
          </label>

          {/* messages */}
          {errors.general && (
            <p className="text-red-600 text-sm">{errors.general}</p>
          )}
          {successMessage && (
            <p
              role="status"
              aria-live="polite"
              className="text-green-600 text-center"
            >
              {successMessage}
            </p>
          )}

          {/* Sign up */}
          <p className="text-center text-gray-600 mt-8">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 font-medium">
              Create one
            </Link>
          </p>
        </form>
     
    </BasicLayout>
  );
};

export default Login;
