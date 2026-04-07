import Link from "next/link";
import Image from "next/image";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-dark">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="AfterAI" width={28} height={28} className="h-7 w-auto" />
            <span className="text-xl font-bold">AfterAI</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/#pricing" className="text-muted hover:text-slate-900 transition-colors text-sm">
              Pricing cards
            </Link>
            <Link href="/signup" className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-gold-500 text-white font-semibold hover:shadow-lg transition-all text-sm">
              Get started
            </Link>
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-slate-900 text-sm mb-8 transition-colors">
          ← Back to home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Full pricing specifications</h1>
        <p className="text-muted mb-12 max-w-2xl">
          Definitions, tier limits, and feature details. For a quick overview, see the <Link href="/#pricing" className="text-gold-600 hover:underline">pricing cards</Link> on the homepage.
        </p>

        <div className="space-y-12 text-sm text-muted">
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-4">Definitions</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-medium text-slate-900">AIS (AI Indicator Signals)</dt>
                <dd className="pl-4 mt-1">Pre-decision signals: drift, regression, disagreement, staleness. High-volume, non-billable, informational only.</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-900">ACE (AI Change Event)</dt>
                <dd className="pl-4 mt-1">Decision-worthy moment. States: pending (human attention) → confirmed (billable).</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-900">AURA</dt>
                <dd className="pl-4 mt-1">Risk assessment attached to an ACE. Modes: Prospective, Diagnostic, Counterfactual. Lite depth (preview) is not exportable; full-depth assessments are exportable on Assess and above.</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-900">PACR (Production AI Change Record)</dt>
                <dd className="pl-4 mt-1">Durable decision record. Immutable on Enterprise. May represent a decision to act or not act.</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-4">Tier summary</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li><strong className="text-slate-900">Monitor (Free):</strong> $0/month. Unlimited AIS, light AI change visibility, 1 Lite AURA/month. Usage: 10 ACE events/month, 3 AI agents. Evaluation: 1 AURA/month (lite depth, not exportable). Add-on: Full AURA $99 one-time/month (not exportable). Email support.</li>
              <li><strong className="text-slate-900">Assess ($250/month):</strong> Everything in Monitor, plus up to 6 AURAs/month, exportable results + advanced analytics. 30 ACEs/month, unlimited AIS, up to 3 AI agents. 6 full-depth AURA assessments/month, exportable (PDF/JSON), historical comparisons + baselines. SSO, RBAC, audit log 7–14 days. Priority support.</li>
              <li><strong className="text-slate-900">Enterprise (Custom):</strong> Typically starts at $4,500/month. Everything in Assess, plus immutable PACRs + approvals, enterprise security & controls. 400 ACEs/month, 80 AURA runs/month, up to 20 AI agents. Immutable PACRs, approval metadata, retention policies. Single-tenant, BYOK, full audit logs. Custom integrations, SLA / dedicated support.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-4">Features by tier</h2>
            <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-6 shadow-sm">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Monitor (Free)</h3>
                <p className="text-muted text-sm mb-2">$0/month. Unlimited AI Indicator Signals (AIS), light AI change visibility, 1 Lite AURA/month. Usage & limits: 10 ACE events/month, unlimited AIS signals, 3 AI agents. Evaluation: 1 AURA/month (lite depth, not exportable). Add-ons: Full AURA $99 one-time/month (not exportable). Email support.</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Assess ($250/month)</h3>
                <p className="text-muted text-sm">Everything in Monitor, plus up to 6 AURAs/month, exportable results + advanced analytics. Evaluation & reporting: 6 full-depth AURA assessments/month, exportable (PDF/JSON), historical comparisons + baselines. Usage: 30 ACEs/month, unlimited AIS signals, up to 3 AI agents. Access & governance: SSO (single IdP), basic RBAC (Admin / Member / Viewer), limited audit log (7–14 days). Priority support.</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Enterprise (Custom)</h3>
                <p className="text-muted text-sm">Typically starts at $4,500/month. Everything in Assess, plus immutable PACRs + approvals, enterprise security & controls. Records & accountability: Immutable PACRs, approval metadata (who / when / why), retention policies. Security & isolation: Single-tenant eval compute (private/isolated), optional BYOK, full audit logs. Usage: 400 ACEs/month, 80 AURA runs/month, up to 20 AI agents. Custom integrations, SLA / dedicated support.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-slate-200 py-8 mt-16">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-center text-sm text-muted2">
          <span>© {new Date().getFullYear()} AfterAI</span>
        </div>
      </footer>
    </div>
  );
}
