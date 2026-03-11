"use client";

import Link from "next/link";
import Image from "next/image";
import { FiLogIn } from "react-icons/fi";

const APP_LOGIN_URL = "https://app.useafter.ai/login";

export default function ConsoleComingSoon() {
  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center px-6">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-72 -top-72 h-[820px] w-[820px] rounded-full bg-gradient-radial from-purple-500/15 to-transparent blur-[70px] opacity-60" />
        <div className="absolute -right-80 top-32 h-[820px] w-[820px] rounded-full bg-gradient-radial from-gold-500/15 to-transparent blur-[70px] opacity-60" />
      </div>

      <Link href="/" className="flex items-center gap-3 mb-12">
        <Image src="/logo.png" alt="AfterAI" width={28} height={28} className="h-7 w-auto" />
        <span className="text-xl font-bold">AfterAI</span>
      </Link>

      <div className="max-w-md text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-400/30 bg-gold-50 text-gold-600 text-xs font-bold mb-6">
          Coming soon
        </div>
        <h1 className="text-3xl font-bold mb-4">Console preview</h1>
        <p className="text-muted mb-8">
          Full console access is coming soon. Sign in to the app to use the dashboard.
        </p>
        <Link
          href={APP_LOGIN_URL}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 font-semibold hover:bg-slate-50 transition-all"
        >
          <FiLogIn className="w-4 h-4" />
          Sign in to the app
        </Link>
      </div>
    </div>
  );
}
