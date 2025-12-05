import React from "react";

interface Props {
  onClick: () => void;
}

export const ResendLink: React.FC<Props> = ({ onClick }) => {
  return (
    <p
      className="mt-2 text-sm text-[#19587f80] underline cursor-pointer text-center"
      onClick={onClick}
    >
      Resend code
    </p>
  );
};
