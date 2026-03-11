"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center px-6 py-12">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-72 -top-72 h-[820px] w-[820px] rounded-full bg-gradient-radial from-purple-500/15 to-transparent blur-[70px] opacity-60" />
        <div className="absolute -right-80 top-32 h-[820px] w-[820px] rounded-full bg-gradient-radial from-gold-500/15 to-transparent blur-[70px] opacity-60" />
      </div>

      <Link href="/" className="flex items-center gap-3 mb-10 self-start">
        <Image src="/logo.png" alt="AfterAI" width={28} height={28} className="h-7 w-auto" />
        <span className="text-xl font-bold">AfterAI</span>
      </Link>

      <div className="w-full max-w-md">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-400/30 bg-gold-50 text-gold-600 text-xs font-bold mb-6">
          Enterprise
        </div>
        <h1 className="text-3xl font-bold mb-2">Talk to us</h1>
        <p className="text-muted mb-8">
          Send us a message and we&apos;ll get back to you.
        </p>

        {status === "success" ? (
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <p className="text-slate-900 font-medium mb-2">Message sent.</p>
            <p className="text-muted text-sm mb-6">We&apos;ll be in touch soon.</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="text-sm font-medium text-gold-600 hover:text-gold-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-muted mb-1.5">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder:text-muted2 focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-muted mb-1.5">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder:text-muted2 focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-transparent"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-muted mb-1.5">
                Message
              </label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder:text-muted2 focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-transparent resize-y min-h-[100px]"
                placeholder="Tell us about your team and what you're looking for…"
              />
            </div>
            {status === "error" && errorMessage && (
              <p className="text-sm text-red-500" role="alert">
                {errorMessage}
              </p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-gold-500 text-white font-bold hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending…" : "Send"}
            </button>
          </form>
        )}

        <p className="mt-6 text-sm text-muted2 text-center">
          <Link href="/#pricing" className="text-gold-600 hover:text-gold-700 font-medium rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
            ← Back to pricing
          </Link>
        </p>
      </div>
    </div>
  );
}
