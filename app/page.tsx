import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiCheck, FiShield } from "react-icons/fi";
import PricingSection from "@/components/PricingSection";
import DecisionCarousel from "@/components/DecisionCarousel";
import NavHeader from "@/components/NavHeader";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Background effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'180\' height=\'180\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'180\' height=\'180\' filter=\'url(%23n)\' opacity=\'.22\'/%3E%3C/svg%3E')] opacity-10 mix-blend-multiply rotate-12" />
        <div className="absolute -left-72 -top-72 h-[820px] w-[820px] rounded-full bg-gradient-radial from-purple-500/20 to-transparent blur-[70px] opacity-60 animate-float" />
        <div className="absolute -right-80 top-32 h-[820px] w-[820px] rounded-full bg-gradient-radial from-gold-500/20 to-transparent blur-[70px] opacity-60 animate-float" style={{ animationDelay: "2s", animationDuration: "12s" }} />
        <div className="absolute left-1/4 -bottom-[420px] h-[820px] w-[820px] rounded-full bg-gradient-radial from-purple-500/15 to-transparent blur-[70px] opacity-50 animate-float" style={{ animationDelay: "4s", animationDuration: "14s" }} />
      </div>

      <NavHeader />

      <main className="relative">
        {/* 1. Hero — split layout */}
        <section id="product" className="max-w-7xl mx-auto px-6 py-20 md:py-28 animate-fade-in-up section-with-anchor">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 xl:gap-20 items-center">
            {/* Left: copy */}
            <div className="text-center lg:text-left">
              <span className="section-heading-anchor block lg:inline-block" aria-hidden="true" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">Decision Grade AI Change Intelligence</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-600 text-xs font-bold mb-6">
                <span>Monitor available now · More plans coming soon</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Advance your AI Agents with{" "}
                <span className="bg-gradient-to-r from-purple-500 to-gold-500 bg-clip-text text-transparent">evidence.</span>
              </h1>
              <p className="text-xl text-muted max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Get upgrade risk visibility and a defensible decision trail — without touching your inference path.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Link
                  href="/signup"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-gold-500 text-white font-bold text-lg hover:shadow-2xl transition-all flex items-center gap-2"
                >
                  Get started
                  <FiArrowRight />
                </Link>
                <Link
                  href="https://app.useafter.ai/login"
                  className="px-8 py-4 rounded-xl border border-slate-300 bg-white text-slate-800 font-semibold hover:bg-slate-50 transition-all"
                >
                  See the console
                </Link>
              </div>
            </div>
            {/* Right: product mock */}
            <div className="lg:block">
              <ProductMock />
            </div>
          </div>
        </section>

        {/* 2. Problem framing */}
        <section className="border-t border-slate-200 bg-white">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 section-with-anchor">
            <span className="section-heading-anchor" aria-hidden="true" />
            <SectionPill label="The Problem" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4 motion-section-heading">AI Agent changes without evidence.</h2>
            <div className="motion-section-content space-y-4">
              <p className="text-muted leading-relaxed max-w-3xl">
                Every model swap, prompt change, or decision to hold carries risk. Without evidence, you&apos;re guessing on risk.
              </p>
              <p className="text-muted leading-relaxed max-w-3xl">
                AfterAI turns AI change — and no-change — into measurable upgrade risk and a durable decision trail, so platform teams and leadership can move or deliberately not move with confidence.
              </p>

              {/* Root causes */}
              <div className="pt-2 grid sm:grid-cols-2 gap-4 max-w-3xl">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <p className="text-sm font-semibold text-slate-900 mb-1">Continuous Change Velocity</p>
                  <p className="text-sm text-muted2">Faster model releases, provider deprecations, and agentic systems create constant pressure.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <p className="text-sm font-semibold text-slate-900 mb-1">Accountability Gap</p>
                  <p className="text-sm text-muted2">Approvals, deferrals, and governance haven&apos;t caught up to the speed of AI.</p>
                </div>
              </div>

              {/* Structural tailwinds */}
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Why this keeps getting harder</p>
                <div className="grid sm:grid-cols-3 gap-3 max-w-3xl">
                  <div className="p-3 rounded-lg border border-amber-200 bg-amber-50">
                    <p className="text-sm font-semibold text-amber-800 mb-1">Model Lifetimes Shrinking</p>
                    <p className="text-xs text-amber-700">Frontier labs ship breaking changes quarterly. Providers deprecate faster than enterprises can evaluate.</p>
                  </div>
                  <div className="p-3 rounded-lg border border-amber-200 bg-amber-50">
                    <p className="text-sm font-semibold text-amber-800 mb-1">Reputation Risk</p>
                    <p className="text-xs text-amber-700">AI mistakes are increasingly business-visible. &quot;Trust me&quot; evals are no longer acceptable.</p>
                  </div>
                  <div className="p-3 rounded-lg border border-amber-200 bg-amber-50">
                    <p className="text-sm font-semibold text-amber-800 mb-1">Governance Gap</p>
                    <p className="text-xs text-amber-700">Compliance pressure rising after deployment. MLOps tools stop at metrics, not decisions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Who it's for */}
        <section className="border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 section-with-anchor">
            <span className="section-heading-anchor" aria-hidden="true" />
            <SectionPill label="Target Market" />
            <h2 className="text-2xl md:text-3xl font-bold mb-6 motion-section-heading">Built for platform teams who own AI.</h2>
            <div className="motion-section-content">
              <ul className="space-y-3 text-muted max-w-2xl mb-4">
                <li className="flex items-start gap-2">
                  <FiCheck className="mt-1 text-gold-500 flex-shrink-0" />
                  <span>Heads of AI Platform and ML Platform shipping model and pipeline changes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheck className="mt-1 text-gold-500 flex-shrink-0" />
                  <span>Teams who need upgrade risk and change visibility — not another observability dashboard.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiCheck className="mt-1 text-gold-500 flex-shrink-0" />
                  <span>Organizations that need a clear, defensible answer when leadership asks what changed and why.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3b. Before / After — standalone transformation */}
        <section className="border-t border-slate-200 bg-white">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 section-with-anchor">
            <span className="section-heading-anchor" aria-hidden="true" />
            <SectionPill label="Before & After" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3 motion-section-heading">From gut feel to evidence.</h2>
            <p className="text-muted leading-relaxed max-w-2xl mb-8 motion-section-content">
              AfterAI replaces the informal change processes most teams are running today.
            </p>
            <div className="motion-section-content grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <div className="bg-slate-50 p-8 md:border-r border-b md:border-b-0 border-slate-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">Before AfterAI — the manual era</h3>
                <ul className="space-y-4">
                  {([
                    { label: "Slack threads & screenshots", sub: "Context is lost in chat history." },
                    { label: "Metrics without context", sub: "Data without decision intelligence." },
                    { label: "\u201cIt seemed fine\u201d approvals", sub: "Subjective gut-checks on risk." },
                    { label: "No durable record", sub: "No audit trail when questions arise." },
                  ] as const).map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <span className="mt-1 w-4 h-4 rounded border border-slate-300 bg-white flex-shrink-0" />
                      <div>
                        <span className="text-sm font-medium text-slate-500 line-through decoration-slate-300">{item.label}</span>
                        <p className="text-xs text-slate-400">{item.sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gold-500 mb-5">With AfterAI — decision-grade evidence</h3>
                <ul className="space-y-4">
                  {([
                    { label: "Explicit AI Change Events (ACE)", sub: "Clear signals for every decision moment." },
                    { label: "Confidence-weighted deltas", sub: "Statistical certainty on performance shifts." },
                    { label: "Measured upgrade risk (AURA)", sub: "Data-driven risk assessment before shipping." },
                    { label: "Defensible decision trail (PACR)", sub: "Immutable records of every approval." },
                  ] as const).map((item) => (
                    <li key={item.label} className="flex gap-3 items-start">
                      <FiCheck className="mt-0.5 text-gold-500 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-slate-900">{item.label}</p>
                        <p className="text-xs text-muted2">{item.sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Canonical flow — AIS → ACE → AURA → PACR */}
        <section id="decision-moment" className="border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 section-with-anchor">
            <span className="section-heading-anchor" aria-hidden="true" />
            <div className="motion-section-heading mb-10">
              <SectionPill label="How It Works" />
              <h2 className="text-2xl md:text-3xl font-bold mb-3">From signal to durable record.</h2>
              <p className="text-muted leading-relaxed max-w-2xl">
                A standardized lifecycle for every production AI change. From pre-decision signals to immutable records.
              </p>
            </div>
            <DecisionCarousel />
          </div>
        </section>

        {/* 5. Key features / architecture */}
        <section id="docs" className="border-t border-slate-200 bg-white">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 section-with-anchor">
            <span className="section-heading-anchor" aria-hidden="true" />
            <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
              <SectionPill label="Key Features" />
              <h2 className="text-2xl font-bold mb-4 motion-section-heading">Built for security. Zero inference impact.</h2>
              <div className="motion-section-content">
                <p className="text-muted leading-relaxed mb-8 max-w-2xl">
                  Secure, scalable, and designed to never interfere with inference latency. AfterAI uses confidence-weighted deltas, works with any provider, and never sits in front of your inference.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  <FeatureCard
                    title="No Inference Instrumentation"
                    desc="AfterAI never sits in front of your inference. Zero latency impact, no proxying, no routing of production traffic."
                  />
                  <FeatureCard
                    title="Controlled Offline Evaluations"
                    desc="Evaluations run in a controlled, offline environment. No logging of sensitive production traffic for evaluation purposes."
                  />
                  <FeatureCard
                    title="Provider Neutral"
                    desc="Works with any model on Azure, AWS, or GCP. Unified provenance model regardless of the underlying infrastructure."
                  />
                  <FeatureCard
                    title="Confidence-Weighted Deltas"
                    desc="Don't just measure change — measure the statistical confidence of that change to know when it matters."
                  />
                  <FeatureCard
                    title="Exportable Results"
                    desc="Generate audit-ready PDF and JSON artifacts of every decision. Keep a permanent record of what changed and why."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6b. Why AfterAI */}
        <section className="border-t border-slate-200 bg-white">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 section-with-anchor">
            <span className="section-heading-anchor" aria-hidden="true" />
            <SectionPill label="Why AfterAI" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3 motion-section-heading">More than just evaluation.</h2>
            <p className="text-muted leading-relaxed max-w-2xl mb-8 motion-section-content">
              Evaluation tools tell you which model is better. AfterAI tells you whether a change should be approved, what the trade-offs are, and who approved it.
            </p>
            <div className="motion-section-content grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">vs. Eval tools</p>
                <p className="text-sm font-semibold text-slate-900 mb-3">Raw metrics → approval decisions + trade-offs</p>
                <p className="text-sm text-muted2">Eval tools tell you which model performed better. AfterAI tells you whether a change should be approved, what the trade-offs are, and who approved it — preserved over time.</p>
              </div>
              <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">vs. DIY in-house</p>
                <p className="text-sm font-semibold text-slate-900 mb-3">Build + maintain → canonical flow, zero maintenance</p>
                <p className="text-sm text-muted2">Building in-house means owning eval pipelines, escalation logic, and audit trails. AfterAI gives you a standardized AIS → ACE → AURA → PACR flow without owning the full stack.</p>
              </div>
              <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">What it&apos;s not</p>
                <p className="text-sm font-semibold text-slate-900 mb-3">Not prompt tuning, routing, or observability</p>
                <p className="text-sm text-muted2">Not prompt tuning, model routing, or automatic switching. Not request-level observability or inference tracing. AfterAI operates at the change level — decisions, not requests.</p>
              </div>
              <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Governance as output</p>
                <p className="text-sm font-semibold text-slate-900 mb-3">Not a compliance checkbox — artifacts that hold up</p>
                <p className="text-sm text-muted2">AfterAI isn&apos;t built to satisfy a compliance requirement. It&apos;s built for speed. Artifacts naturally hold up in audits because they&apos;re created at decision time — not retroactively.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Pricing */}
        <PricingSection />

        {/* Cloud — Azure, AWS, GCP blurb + link to /cloud */}
        <section id="cloud" className="border-t border-slate-200 bg-white">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 section-with-anchor">
            <span className="section-heading-anchor" aria-hidden="true" />
            <SectionPill label="Multi-Cloud Support" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3 motion-section-heading">One platform for Azure, AWS, and GCP.</h2>
            <p className="text-muted leading-relaxed max-w-2xl mb-6 motion-section-content">
              Ingest telemetry with full CSP provenance. Same provenance model — no lock-in.
            </p>
            <div className="flex flex-wrap items-center gap-8 mb-6 motion-section-content">
              <div className="h-10 flex items-center">
                <Image src="/assets/azure.png" alt="Microsoft Azure" width={120} height={40} className="max-h-10 w-auto object-contain" />
              </div>
              <div className="h-10 flex items-center">
                <Image src="/assets/aws.png" alt="Amazon Web Services" width={120} height={40} className="max-h-10 w-auto object-contain" />
              </div>
              <div className="h-10 flex items-center">
                <Image src="/assets/gcp.png" alt="Google Cloud" width={140} height={40} className="max-h-10 w-auto object-contain" />
              </div>
            </div>
            <Link href="/cloud" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 font-semibold hover:bg-slate-50 transition-all motion-section-content focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
              Cloud providers
              <FiArrowRight />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-slate-200 bg-white">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 section-with-anchor">
            <span className="section-heading-anchor" aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-bold mb-8 motion-section-heading">FAQ</h2>
            <div className="faq motion-section-content space-y-3">
              <details className="faqitem">
                <summary>How is this different from model evaluation tools?</summary>
                <div className="faq-answer">
                  Evaluation tools tell you which model performed better. AfterAI tells you whether a change should be approved, what the trade-offs are, and who approved it — and preserves that decision over time.
                </div>
              </details>
              <details className="faqitem">
                <summary>Is AfterAI observability?</summary>
                <div className="faq-answer">
                  No. AfterAI is not request-level observability, tracing, or logging. It operates at the change level, not the inference level.
                </div>
              </details>
              <details className="faqitem">
                <summary>Does AfterAI sit in the inference path?</summary>
                <div className="faq-answer">
                  No. AfterAI is completely out-of-band. It does not proxy traffic, route requests, or block inference calls. Telemetry is asynchronous and designed to fail open.
                </div>
              </details>
              <details className="faqitem">
                <summary>Do you need to send prompts or model outputs?</summary>
                <div className="faq-answer">
                  No. AfterAI is metadata-first by default. Prompt and output capture is optional, sampled, and fully controllable with redaction and retention policies.
                </div>
              </details>
              <details className="faqitem">
                <summary>Why go with AfterAI instead of DIY?</summary>
                <div className="faq-answer">
                  Building change intelligence in-house means maintaining eval pipelines, escalation logic, and audit trails yourself. AfterAI gives you a canonical flow (AIS → ACE → AURA → PACR), consistent limits and billing, and a defensible decision trail without owning the full stack.
                </div>
              </details>
            </div>
            <p className="mt-6 motion-section-content">
              <Link href="/faq" className="text-sm font-medium text-gold-600 hover:text-gold-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded">
                See a full list of FAQ →
              </Link>
            </p>
          </div>
        </section>

        {/* 8. Early access CTA */}
        <section id="trust" className="border-t border-slate-200 bg-white">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 section-with-anchor">
            <span className="section-heading-anchor" aria-hidden="true" />
            <SectionPill label="Live Now" />
            <h2 className="text-2xl font-bold mb-4 motion-section-heading">Early access, real product.</h2>
            <div className="motion-section-content">
              <p className="text-muted leading-relaxed mb-8 max-w-2xl">
                Monitor is live. Start capturing decision-grade evidence for your AI systems today.
              </p>
              <ol className="space-y-5 mb-8 max-w-md">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-gold-400 bg-gold-50 text-gold-600 text-xs font-bold flex items-center justify-center">1</span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Connect your first system</p>
                    <p className="text-sm text-muted2">Provider-neutral integration in minutes.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-gold-400 bg-gold-50 text-gold-600 text-xs font-bold flex items-center justify-center">2</span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Capture AI Change Events (ACE)</p>
                    <p className="text-sm text-muted2">See exactly when and why your AI changes.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-gold-400 bg-gold-50 text-gold-600 text-xs font-bold flex items-center justify-center">3</span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Run a Lite AURA</p>
                    <p className="text-sm text-muted2">Get a risk assessment on a real upgrade.</p>
                  </div>
                </li>
              </ol>
              <p className="text-sm text-muted2 mb-6">No credit card required for Monitor. Provider-neutral — bring your own models and pipelines. Security is built in — same posture whether you use the console, API, or SDK. <Link href="/security" className="text-gold-600 hover:text-gold-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded font-medium">Security overview →</Link></p>
              <div className="flex flex-wrap gap-4">
                <Link href="/signup" className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-gold-500 text-white font-bold hover:shadow-lg transition-all">
                  Get started free
                </Link>
                <Link href="/contact" className="px-6 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 font-semibold hover:bg-slate-50 transition-all">
                  Request a demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Security */}
        <section id="security" className="border-t border-slate-200 bg-white">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 section-with-anchor">
            <span className="section-heading-anchor" aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4 motion-section-heading">Security built for teams.</h2>
            <div className="motion-section-content">
              <p className="text-muted leading-relaxed mb-4 max-w-2xl">
                The same authentication and access model applies whether you use the console, the API, or the SDK. We&apos;re built for teams who need a defensible, audit-friendly posture.
              </p>
              <p className="text-muted leading-relaxed mb-6 max-w-2xl">
                We never sit in your inference path; telemetry is out-of-band and designed to fail open.
              </p>
              <Link href="/security" className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded">
                Security overview
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-[1fr_auto_auto] gap-10 sm:gap-16 mb-10">
            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-2.5 mb-3">
                <Image src="/logo.png" alt="AfterAI" width={22} height={22} className="h-5.5 w-auto" />
                <span className="font-bold text-slate-900">AfterAI</span>
              </Link>
              <p className="text-sm text-muted2 max-w-xs leading-relaxed">
                Decision-grade AI change intelligence — without touching your inference path.
              </p>
            </div>
            {/* Product */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Product</p>
              <ul className="space-y-2.5 text-sm text-muted2">
                <li><Link href="/#product" className="hover:text-slate-900 transition-colors">Overview</Link></li>
                <li><Link href="/#pricing" className="hover:text-slate-900 transition-colors">Pricing</Link></li>
                <li><Link href="/cloud" className="hover:text-slate-900 transition-colors">Cloud providers</Link></li>
                <li><Link href="/security" className="hover:text-slate-900 transition-colors">Security</Link></li>
                <li><Link href="https://app.useafter.ai/login" className="hover:text-slate-900 transition-colors">Console</Link></li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Company</p>
              <ul className="space-y-2.5 text-sm text-muted2">
                <li><Link href="/faq" className="hover:text-slate-900 transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-slate-900 transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-slate-900 transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-6 text-xs text-muted2">
            © {new Date().getFullYear()} AfterAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionPill({ label }: { label: string }) {
  return (
    <span className="inline-block px-3 py-1 mb-4 rounded-full border border-slate-200 bg-white text-[10px] font-bold uppercase tracking-widest text-slate-400">
      {label}
    </span>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:border-slate-300 hover:shadow-sm transition-all">
      <p className="text-sm font-semibold text-slate-900 mb-2">{title}</p>
      <p className="text-xs text-muted2 leading-relaxed">{desc}</p>
    </div>
  );
}

function PillItem({ label, desc }: { label: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-white border border-slate-200 transition-all duration-200 hover:border-slate-300 hover:shadow-sm">
      <span className="text-sm font-semibold text-slate-900 flex-shrink-0">{label}</span>
      <span className="text-sm text-muted2">{desc}</span>
    </div>
  );
}

function ProductMock() {
  return (
    <div className="relative flex flex-col gap-3">
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-purple-50/80 to-gold-50/60 -z-10" />

      {/* ACE card */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm select-none">⟳</div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Model Upgrade</p>
              <p className="text-xs text-muted2">gpt-4-turbo → gpt-4o</p>
            </div>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">Confirmed</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
          <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-purple-400 to-gold-400" />
        </div>
      </div>

      {/* AURA card */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">AURA Assessment</p>
          <FiShield className="w-3.5 h-3.5 text-purple-400" />
        </div>
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted2">Regression Risk</span>
            <span className="text-xs font-semibold text-emerald-600">Low (2.4%)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted2">Cost Impact</span>
            <span className="text-xs font-semibold text-emerald-600">-15%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted2">Latency Delta</span>
            <span className="text-xs font-semibold text-amber-600">+40ms</span>
          </div>
        </div>
      </div>

      {/* PACR card */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-slate-200 bg-slate-50 flex items-center justify-center">
            <FiCheck className="w-3.5 h-3.5 text-slate-500" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">PACR Generated</p>
            <p className="text-xs text-muted2">Immutable Record #8821</p>
          </div>
        </div>
      </div>
    </div>
  );
}
