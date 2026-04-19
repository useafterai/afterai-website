import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft, FiShield, FiActivity, FiUser, FiLock } from "react-icons/fi";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="AfterAI" width={28} height={28} className="h-7 w-auto" />
            <span className="text-xl font-bold">AfterAI</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to product
          </Link>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Security overview</h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl">
            AfterAI is built for platform teams who need auditability and a defensible posture. The same security model applies whether you use the console, the API, or the SDK.
          </p>
        </div>

        {/* 4 Feature cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <SecurityCard
            icon={<FiShield className="w-5 h-5 text-gold-500" />}
            title="Metadata-First Approach"
            body="AfterAI does not require prompt or output capture to function. By default, the system operates on metadata — model identifiers, versioning, timestamps, and change deltas. Prompt and output capture is opt-in, sampled, and fully controllable via redaction and retention policies."
            items={[
              "No prompt capture by default",
              "Optional, sampled output logging",
              "Redaction + retention policy controls",
            ]}
          />
          <SecurityCard
            icon={<FiActivity className="w-5 h-5 text-gold-500" />}
            title="Out-of-Band Telemetry"
            body="AfterAI never sits in your inference path. There is no proxy, no traffic interception, and no request routing. Telemetry is asynchronous and designed to fail open — if AfterAI is unavailable, your inference continues unaffected."
            items={[
              "Zero inference-path instrumentation",
              "No hot-path traffic logging",
              "Asynchronous, fail-open design",
            ]}
          />
          <SecurityCard
            icon={<FiUser className="w-5 h-5 text-gold-500" />}
            title="Unified Identity"
            body="The same authentication and access model applies across console, API, and SDK. The console uses session JWTs in httpOnly cookies. The API accepts API keys or Bearer JWTs. Credentials are hashed at rest; no secrets are embedded in images or source."
            items={[
              "httpOnly session cookies (console)",
              "API key + Bearer JWT (API / SDK)",
              "Credentials hashed at rest",
            ]}
          />
          <SecurityCard
            icon={<FiLock className="w-5 h-5 text-gold-500" />}
            title="Enterprise Isolation"
            body="Enterprise deployments run on single-tenant eval compute with full network isolation. Optional customer-managed keys (BYOK) and full audit logs are available. Retention policies and immutable PACR records satisfy compliance requirements."
            items={[
              "Single-tenant eval compute",
              "Optional BYOK (customer-managed keys)",
              "Full audit logs + immutable PACRs",
            ]}
            badge="Enterprise"
          />
        </div>

        {/* Operational security note */}
        <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 mb-12">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">Operational security</h2>
          <p className="text-sm text-muted2 leading-relaxed">
            Secrets and configuration are supplied via environment variables. The application fails fast on misconfiguration — incomplete or insecure deployments do not start. Required configuration is validated at startup. We are committed to further hardening as we scale, including rate limiting, DDoS protection, and WAF where appropriate.
          </p>
        </div>

        {/* Footer links */}
        <p className="text-sm text-muted2">
          <Link href="/" className="text-gold-600 hover:text-gold-700 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded">Product</Link>
          {" · "}
          <Link href="/privacy" className="text-gold-600 hover:text-gold-700 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded">Privacy</Link>
          {" · "}
          <Link href="/terms" className="text-gold-600 hover:text-gold-700 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded">Terms</Link>
        </p>
      </main>
    </div>
  );
}

function SecurityCard({
  icon,
  title,
  body,
  items,
  badge,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  items: string[];
  badge?: string;
}) {
  return (
    <div className="flex flex-col p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all">
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="font-bold text-base">{title}</h3>
        </div>
        {badge && (
          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full border border-purple-300/50 bg-purple-50 text-purple-600 flex-shrink-0">
            {badge}
          </span>
        )}
      </div>
      <p className="text-sm text-muted2 leading-relaxed mb-4">{body}</p>
      <ul className="space-y-1.5 mt-auto">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-xs text-muted2">
            <span className="w-1 h-1 rounded-full bg-gold-400 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
