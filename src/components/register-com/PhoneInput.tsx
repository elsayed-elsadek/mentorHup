
import React, { useState, useEffect } from "react";

interface Props {
  value: string;
  onChange: (v: string) => void;
  error?: string;
}

export const PhoneInput: React.FC<Props> = ({ value, onChange, error }) => {
  const [localError, setLocalError] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!value) {
      setLocalError("Phone number is required.");
    } else if (!/^\+?\d{10,15}$/.test(value)) {
      setLocalError("Invalid phone number format.");
    } else {
      setLocalError(undefined);
    }
  }, [value]);

  return (
    <div className="flex flex-col w-full md:w-[528px] mt-4">
      <label className="text-xs font-medium text-gray-700 mb-2">Phone</label>

      <input
        type="tel"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="+201234567890"
        className="
          w-full h-[55px] border border-gray-300 rounded-[12px] px-3
          focus:outline-none focus:ring-2 focus:ring-primary
        "
        required
      />

      {(error || localError) && (
        <p className="text-red-600 text-xs mt-1">{error || localError}</p>
      )}
    </div>
  );
};
