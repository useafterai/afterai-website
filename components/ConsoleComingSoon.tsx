"use client";

import Link from "next/link";
import Image from "next/image";
import { FiLogIn } from "react-icons/fi";

const APP_LOGIN_URL = "https://app.useafter.ai/login";

export default function ConsoleComingSoon() {
  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center px-6">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'180\' height=\'180\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'180\' height=\'180\' filter=\'url(%23n)\' opacity=\'.22\'/%3E%3C/svg%3E')] opacity-20 mix-blend-overlay rotate-12" />
        <div className="absolute -left-72 -top-72 h-[820px] w-[820px] rounded-full bg-gradient-radial from-purple-500/30 to-transparent blur-[70px] opacity-28" />
        <div className="absolute -right-80 top-32 h-[820px] w-[820px] rounded-full bg-gradient-radial from-gold-500/30 to-transparent blur-[70px] opacity-28" />
      </div>

      <Link href="/" className="flex items-center gap-3 mb-12">
        <Image src="/logo.png" alt="AfterAI" width={28} height={28} className="h-7 w-auto" />
        <span className="text-xl font-bold">AfterAI</span>
      </Link>

      <div className="max-w-md text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-500/22 bg-gold-500/10 text-gold-500 text-xs font-bold mb-6">
          Coming soon
        </div>
        <h1 className="text-3xl font-bold mb-4">Console preview</h1>
        <p className="text-muted mb-8">
          Full console access is coming soon. Sign in to the app to use the dashboard.
        </p>
        <Link
          href={APP_LOGIN_URL}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/14 bg-white/5 text-white font-semibold hover:bg-white/8 transition-all"
        >
          <FiLogIn className="w-4 h-4" />
          Sign in to the app
        </Link>
      </div>
    </div>
  );
}
