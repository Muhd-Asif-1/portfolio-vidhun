"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { contact } from "@/lib/contact";

export function CopyEmailButton() {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = setTimeout(() => setStatus("idle"), 2500);
    return () => clearTimeout(timer);
  }, [status]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={copyEmail}
        title={contact.email}
        aria-label={`Copy email address: ${contact.email}`}
        className="flex min-w-20 items-center justify-center gap-1.5 rounded-l-full px-3 py-2.5"
      >
        <Image
          src="/images/hero/a8270.svg"
          alt=""
          width={18}
          height={18}
          unoptimized
        />
        {status === "copied"
          ? "Copied"
          : status === "failed"
            ? "Copy failed"
            : "Copy"}
      </button>
      <output className="sr-only">
        {status === "copied"
          ? "Email address copied."
          : status === "failed"
            ? `Copy unavailable. Email ${contact.email} using the Email Me link.`
            : ""}
      </output>
    </>
  );
}
