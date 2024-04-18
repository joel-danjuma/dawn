"use client";

import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

/**
 * Do not use if you haven't read my content
 */
function SubmitButton({ label = "Update" }: { label?: string }) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending}>{pending ? "Please wait..." : label}</Button>
  );
}

export { SubmitButton };
