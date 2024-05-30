import React from "react";

interface FormErrorProps {
  message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="bg-red-400 rounded-md flex items-center justify-center p-4 text-sm text-white">
      <p> {message}</p>
    </div>
  );
};

export default FormError;
