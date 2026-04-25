"use client";
import { useEffect } from "react";

export default function ChatbotPlaceholder() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/gulfonhzl1du7aho2n2rnlniku7kohy4.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
