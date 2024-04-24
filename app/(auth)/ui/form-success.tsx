import React from "react";

interface FormSuccessProps {
  message?: string;
}

const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className="bg-emerald-500/75 rounded-md flex items-center justify-center p-4 text-sm text-destructive text-emerald-600">
      <p> {message}</p>
    </div>
  );
};

export default FormSuccess;
