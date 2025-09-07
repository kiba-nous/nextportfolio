"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ResumePage() {
  const router = useRouter();
  
  useEffect(() => {
    const resumeLink = process.env.NEXT_PUBLIC_RESUME_LINK || "/CV.pdf";
    window.open(resumeLink, "_blank");
    router.push("/");
  }, [router]);
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Opening Resume...</h1>
        <p className="text-muted-foreground">If the resume doesn't open automatically, <a href="/CV.pdf" target="_blank" className="text-primary underline">click here</a>.</p>
      </div>
    </div>
  );
}
