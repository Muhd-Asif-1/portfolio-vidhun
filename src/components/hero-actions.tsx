"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function CopyLinkButton() {
  const [status, setStatus] = useState<
    "idle" | "copying" | "copied" | "failed"
  >("idle");
  const [link, setLink] = useState("");
  const busy = useRef(false);

  useEffect(() => {
    if (status !== "copied") return;
    const timer = setTimeout(() => {
      busy.current = false;
      setStatus("idle");
    }, 2500);
    return () => clearTimeout(timer);
  }, [status]);

  async function copyLink() {
    if (busy.current) return;
    busy.current = true;
    setStatus("copying");
    const origin = window.location.origin;
    setLink(origin);
    try {
      await navigator.clipboard.writeText(origin);
      setStatus("copied");
    } catch {
      busy.current = false;
      setStatus("failed");
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={copyLink}
        aria-label="Copy website link"
        aria-disabled={status === "copying" || status === "copied"}
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
          ? "Copied!"
          : status === "copying"
            ? "Copying…"
            : "Copy"}
      </button>
      <output className="sr-only">
        {status === "copied"
          ? "Website link copied."
          : status === "failed"
            ? "Copy unavailable. Select and copy the link below."
            : ""}
      </output>
      {status === "failed" && (
        <label className="hero-action-message absolute left-1/2 top-full z-30 mt-2 w-72 -translate-x-1/2 rounded-xl border border-current/15 bg-[var(--surface)] p-3 text-left text-xs text-[var(--foreground)] shadow-lg">
          Copy this website link:
          <input
            aria-label="Website link"
            readOnly
            value={link}
            onFocus={(event) => event.currentTarget.select()}
            className="mt-2 w-full rounded border border-current/20 p-2"
          />
        </label>
      )}
    </>
  );
}

export function DownloadCvButton() {
  const [status, setStatus] = useState<
    "idle" | "downloading" | "started" | "failed"
  >("idle");
  const busy = useRef(false);
  const request = useRef<AbortController | null>(null);
  const download = useRef<{
    url: string;
    timer: ReturnType<typeof setTimeout>;
  } | null>(null);

  useEffect(
    () => () => {
      request.current?.abort();
      if (download.current) {
        clearTimeout(download.current.timer);
        URL.revokeObjectURL(download.current.url);
      }
    },
    [],
  );

  useEffect(() => {
    if (status !== "started" && status !== "failed") return;
    const timer = setTimeout(
      () => {
        busy.current = false;
        setStatus("idle");
      },
      status === "failed" ? 5000 : 3000,
    );
    return () => clearTimeout(timer);
  }, [status]);

  async function downloadCv() {
    if (busy.current) return;
    busy.current = true;
    setStatus("downloading");
    const controller = new AbortController();
    request.current = controller;
    const timeout = setTimeout(() => controller.abort("timeout"), 15000);
    try {
      const response = await fetch("/Vidhun_Prasad_UIUX_Resume.pdf", {
        signal: controller.signal,
      });
      if (
        !response.ok ||
        !response.headers.get("content-type")?.includes("application/pdf")
      )
        throw new Error("CV unavailable");
      const file = await response.blob();
      if (!file.size) throw new Error("CV is empty");
      controller.signal.throwIfAborted();
      if (download.current) {
        clearTimeout(download.current.timer);
        URL.revokeObjectURL(download.current.url);
      }
      const url = URL.createObjectURL(file);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "Vidhun_Prasad_UIUX_Resume.pdf";
      document.body.append(anchor);
      anchor.click();
      anchor.remove();
      download.current = {
        url,
        timer: setTimeout(() => {
          URL.revokeObjectURL(url);
          download.current = null;
        }, 60000),
      };
      setStatus("started");
    } catch {
      if (
        !controller.signal.aborted ||
        controller.signal.reason === "timeout"
      ) {
        busy.current = false;
        setStatus("failed");
      }
    } finally {
      clearTimeout(timeout);
      if (request.current === controller) request.current = null;
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={downloadCv}
        aria-label="Download CV"
        aria-disabled={status === "downloading" || status === "started"}
        aria-busy={status === "downloading"}
        className="flex min-w-[100px] items-center justify-center gap-1.5 rounded-r-full px-3 py-2.5"
      >
        <Image
          src="/images/hero/0b94e.svg"
          alt=""
          width={18}
          height={18}
          unoptimized
        />
        {status === "downloading"
          ? "Preparing…"
          : status === "started"
            ? "Started!"
            : status === "failed"
              ? "Try again"
              : "Open CV"}
      </button>
      <output className="sr-only">
        {status === "started"
          ? "CV download started. Check your browser downloads."
          : status === "failed"
            ? "Could not download the CV. Please try again."
            : ""}
      </output>
      {status === "failed" && (
        <p
          role="alert"
          className="hero-action-message absolute left-1/2 top-full z-30 mt-2 w-72 -translate-x-1/2 rounded-xl bg-[var(--surface)] p-3 text-xs text-[var(--foreground)] shadow-lg"
        >
          Couldn’t download the CV. Please try again.
        </p>
      )}
    </>
  );
}
