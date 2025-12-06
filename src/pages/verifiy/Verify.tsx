import React from "react";
import { useNavigate } from "react-router-dom";

import { CodeInput } from "../../components/verify-com/CodeInput";
import { Timer } from "../../components/verify-com/Timer";
import { ConfirmButton } from "../../components/verify-com/ConfirmButton";
import { ResendLink } from "../../components/verify-com/ResendLink";
import { useVerifyForm } from "../../hooks/useVerifyForm";
import { BasicLayout } from "../../components/layout/BasicLayout";
export const Verify: React.FC = () => {
  const navigate = useNavigate();

  const {
    code,
    loading,
    successMessage,
    handleChange,
    handleSubmit,
    handleResend,
    isComplete,
  } = useVerifyForm();

  return (
   
    <BasicLayout>
      <div className="mt-20 flex flex-col items-center gap-6">
        {/* Vector / Illustration */}
        <img
          src="/src/assets/Vector.svg"
          alt="Verification illustration"
          className="w-10 h-10"
        />

        {/* Heading */}
        <h1 className="text-2xl font-semibold">Enter the code</h1>
        <p className="text-center text-gray-500">
          Enter the 6-digit code sent to <strong>shahdwalid@gmail.com</strong>
        </p>

        {/* Code Inputs */}
        <div className="flex gap-4 mt-4">
          {code.map((c, i) => (
            <CodeInput
              key={i}
              value={c}
              index={i}
              lastIndex={code.length - 1}
              onChange={handleChange}
            />
          ))}
        </div>

        {/* Timer */}
        <Timer initialSeconds={30} />

        {/* Confirm Button */}
        <ConfirmButton
          loading={loading}
          onClick={() => {
            handleSubmit();
            setTimeout(() => {
              navigate("/success");
            }, 2000);
          }}
          disabled={!isComplete}
        />

        {/* Resend Link */}
        <ResendLink onClick={handleResend} />

        {/* Success Message */}
        {successMessage && (
          <p className="text-green-600 mt-2">{successMessage}</p>
        )}
      </div>
    
    </BasicLayout>
  );
};
