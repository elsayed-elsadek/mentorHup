// import React from "react";

interface Props {
  value: string;
  onChange: (v: string) => void;
  error?: string;
}

const LastNameInput: React.FC<Props> = ({ value, onChange, error }) => (
  <div className="flex flex-col w-full md:w-[200px] mt-4">
    <label className="text-xs font-medium text-gray-700 mb-2">Last Name</label>

    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        w-full h-[55px] border border-gray-300 rounded-[12px] px-2
        focus:outline-none focus:ring-2 focus:ring-primary
      "
      required
      minLength={2}
    />

    {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
  </div>
);

export default LastNameInput;
