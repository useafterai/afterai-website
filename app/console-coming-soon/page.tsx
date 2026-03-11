import Link from "next/link";
import Image from "next/image";

export default function ConsoleComingSoonPage() {
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
        <h1 className="text-3xl font-bold mb-4">Console coming soon</h1>
        <p className="text-muted mb-8">
          Sign up to get notified when the AfterAI console is available.
        </p>
        <Link
          href="/signup"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-gold-500 text-white font-bold hover:shadow-lg transition-all"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
