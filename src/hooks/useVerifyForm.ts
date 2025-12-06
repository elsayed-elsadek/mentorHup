import { useState } from "react";

export const useVerifyForm = () => {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);
  };

  const isComplete = code.every((c) => c !== "");

  const handleSubmit = () => {
    if (!isComplete) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage("Code verified successfully!");
    }, 2000);
  };

  const handleResend = () => {
    alert("Verification code resent!");
  };

  return {
    code,
    loading,
    successMessage,
    handleChange,
    handleSubmit,
    handleResend,
    isComplete,
  };
};
