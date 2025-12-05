// import { useState, useRef } from "react";
// import type { FormData, FormErrors, JoinAs } from "../types/auth";

// export const useRegisterForm = () => {
//   const [formData, setFormData] = useState<FormData>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState<Partial<FormErrors>>({});
//   const [loading, setLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);
//   const [joinAs, setJoinAs] = useState<JoinAs>("student");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   // For checkboxes
//   const [agreeTerms, setAgreeTerms] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);

//   const formRef = useRef<HTMLFormElement | null>(null);

//   const emailRegex = /^\S+@\S+\.\S+$/;
//   const phoneRegex = /^[0-9]{10,15}$/; 

//   const handleInputChange = (field: keyof FormData, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//     setErrors((prev) => ({ ...prev, [field]: undefined }));
//   };

//   const validate = (): boolean => {
//     const newErrors: Partial<FormErrors> = {};

//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";

//     if (!formData.email.trim()) newErrors.email = "Email is required.";
//     else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email.";

//     if (formData.phone && !phoneRegex.test(formData.phone)) newErrors.phone = "Invalid phone number.";

//     if (!formData.password) newErrors.password = "Password is required.";
//     else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";

//     if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm your password.";
//     else if (formData.password !== formData.confirmPassword)
//       newErrors.confirmPassword = "Passwords do not match.";

//     // Checkboxes validation
//     if (!agreeTerms) newErrors.agreeTerms = "You must agree to the Terms and Privacy Policy.";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (callback: (safeData: Partial<FormData> & { joinAs: JoinAs; rememberMe: boolean }) => void) => {
//     return (e: React.FormEvent) => {
//       e.preventDefault();
//       setSuccessMessage(null);

//       if (!validate()) return;

//       setLoading(true);

//       const safePayload = {
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         email: formData.email,
//         phone: formData.phone,
//         joinAs,
//         rememberMe,
//       };

//       callback(safePayload);

//       setTimeout(() => {
//         setLoading(false);
//         setSuccessMessage("Registration successful. Please check your email.");
//       }, 900);
//     };
//   };

//   const isEmailValid = emailRegex.test(formData.email);

//   return {
//     formData,
//     errors,
//     loading,
//     successMessage,
//     joinAs,
//     showPassword,
//     showConfirmPassword,
//     agreeTerms,
//     rememberMe,
//     formRef,
//     setJoinAs,
//     setShowPassword,
//     setShowConfirmPassword,
//     setAgreeTerms,
//     setRememberMe,
//     setLoading,
//     handleInputChange,
//     handleSubmit,
//     isEmailValid,
//   };
// };







// import { useState, useRef } from "react";
// import type { FormData, FormErrors, JoinAs } from "../types/auth";

// export const useRegisterForm = () => {
//   const [formData, setFormData] = useState<FormData>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState<Partial<FormErrors>>({});
//   const [loading, setLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);
//   const [joinAs, setJoinAs] = useState<JoinAs>("student");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const [agreeTerms, setAgreeTerms] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);

//   const formRef = useRef<HTMLFormElement | null>(null);

//   const emailRegex = /^\S+@\S+\.\S+$/;
//   const phoneRegex = /^[0-9]{10,15}$/;

//   const handleInputChange = (field: keyof FormData, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//     setErrors((prev) => ({ ...prev, [field]: undefined }));
//   };

//   const validate = (): boolean => {
//     const newErrors: Partial<FormErrors> = {};

//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";

//     if (!formData.email.trim()) newErrors.email = "Email is required.";
//     else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email.";

//     if (formData.phone && !phoneRegex.test(formData.phone)) newErrors.phone = "Invalid phone number.";

//     if (!formData.password) newErrors.password = "Password is required.";
//     else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";

//     if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm your password.";
//     else if (formData.password !== formData.confirmPassword)
//       newErrors.confirmPassword = "Passwords do not match.";

//     if (!agreeTerms) newErrors.agreeTerms = "You must agree to the Terms and Privacy Policy.";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (callback: (safeData: Partial<FormData> & { joinAs: JoinAs; rememberMe: boolean }) => void) => {
//     return (e: React.FormEvent) => {
//       e.preventDefault();
//       setSuccessMessage(null);

//       if (!validate()) return;

//       setLoading(true);

//       const safePayload = {
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         email: formData.email,
//         phone: formData.phone,
//         joinAs,
//         rememberMe,
//       };

//       callback(safePayload);

//       setTimeout(() => {
//         setLoading(false);
//         setSuccessMessage("Registration successful. Please check your email.");
//       }, 900);
//     };
//   };

//   return {
//     formData,
//     errors,
//     loading,
//     successMessage,
//     joinAs,
//     showPassword,
//     showConfirmPassword,
//     agreeTerms,
//     rememberMe,
//     formRef,
//     setJoinAs,
//     setShowPassword,
//     setShowConfirmPassword,
//     setAgreeTerms,
//     setRememberMe,
//     setLoading,
//     handleInputChange,
//     handleSubmit,
//   };
// };
import { useState, useRef } from "react";
import type { FormData, FormErrors, JoinAs } from "../types/auth";

export const useRegisterForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Partial<FormErrors>>({});
  const [loading, setLoading] = useState(false);
  const [joinAs, setJoinAs] = useState<JoinAs>("student");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  const emailRegex = /^\S+@\S+\.\S+$/;
  const phoneRegex = /^[0-9]{10,15}$/;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormErrors> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";

    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email.";

    if (formData.phone && !phoneRegex.test(formData.phone)) newErrors.phone = "Invalid phone number.";

    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";

    if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm your password.";
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match.";

    if (!agreeTerms) newErrors.agreeTerms = "You must agree to the Terms and Privacy Policy.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    formData,
    errors,
    loading,
    joinAs,
    showPassword,
    showConfirmPassword,
    agreeTerms,
    rememberMe,
    formRef,
    setJoinAs,
    setShowPassword,
    setShowConfirmPassword,
    setAgreeTerms,
    setRememberMe,
    setLoading,
    handleInputChange,
    validate, 
  };
};
