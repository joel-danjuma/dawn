"use client";

import Image from "next/image";
import ai_teacher_loading from "@/public/ai-teacher-loading.png";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function LoadingImage() {
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => router.replace("/dashboard/explore"), 1000);

    return () => {
      clearTimeout(timeout);
    };
  });
  return (
    <div className="grid place-content-center">
      <Image src={ai_teacher_loading} alt="loading" width={970} height={912} />
    </div>
  );
}

export { LoadingImage };
