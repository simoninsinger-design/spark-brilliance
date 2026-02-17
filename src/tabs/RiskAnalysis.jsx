import React from 'react';
import { AlertTriangle, AlertCircle, TrendingDown, Clock, Users, DollarSign, ArrowRight } from 'lucide-react';

function RiskCard({ title, severity, description, mitigation }) {
  const colors = {
    critical: { bg: 'bg-red-50', border: 'border-red-500/30', badge: 'bg-red-100 text-red-700', icon: 'text-red-400' },
    high: { bg: 'bg-amber-50', border: 'border-amber-500/20', badge: 'bg-amber-100 text-amber-700', icon: 'text-amber-400' },
    medium: { bg: 'bg-blue-50', border: 'border-blue-500/20', badge: 'bg-blue-100 text-blue-700', icon: 'text-blue-400' },
  };
  const c = colors[severity];
  return (
    <div className={`${c.bg} border ${c.border} rounded-xl p-5`}>
      <div className="flex items-start justify-between mb-3">
        <h4 className="text-slate-900 font-semibold text-sm">{title}</h4>
        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${c.badge}`}>{severity.toUpperCase()}</span>
      </div>
      <p className="text-slate-600 text-xs leading-relaxed mb-3">{description}</p>
      <div className="flex items-start gap-2">
        <ArrowRight size={12} className="text-sb-gold mt-0.5 flex-shrink-0" />
        <p className="text-slate-700 text-xs font-medium">{mitigation}</p>
      </div>
    </div>
  );
}

const risks = [
  {
    title: "Jackie Bandwidth Bottleneck",
    severity: "critical",
    description: "If every deal requires Jackie's involvement for close, throughput is capped. At 7 hrs/week with an average 62-day weighted sales cycle, Jackie can manage 3-4 active deals simultaneously. That's 20-24 deals/year maximum — but only if 100% of her sales time goes to closing. In reality, she also does delivery, keynotes, and relationship maintenance.",
    mitigation: "Hire the sales leader ASAP. Jackie should only join for (1) diagnostic calls where her credibility matters and (2) $400K+ enterprise closes. Everything else should be Lindsay + sales hire."
  },
  {
    title: "Revenue Concentration — Top 3 = 58.4%",
    severity: "critical",
    description: "Crocs ($465K, 26.1%) + Congruex ($398K, 22.3%) + TJH ($178K, 10.0%) = 58.4% of all won revenue. If Crocs deprioritizes leadership development in 2027 or Congruex's new leadership changes direction, you lose nearly a quarter of revenue overnight. This is existential risk at your stage.",
    mitigation: "Diversify aggressively. No single client should exceed 15% of annual revenue by end of 2027. The Tier 1 expansion accounts (PENN, Ovation, MGM, Bluberi) must close to reduce concentration."
  },
  {
    title: "Pipeline Coverage at 0.8x",
    severity: "critical",
    description: "You need 3-4x pipeline coverage to hit $5M. You have 0.8x. That means you need to generate $10M+ in new pipeline over the next 6-9 months to have a realistic shot at the target. The 24 deals in Lead/Prospect with almost no dollar values are NOT real pipeline — they're names on a list.",
    mitigation: "Immediately qualify or disqualify every Lead/Prospect deal. Add dollar estimates to all pipeline deals. Focus on advancing the 11 deals already in Qualified-through-Contracting stages — those are your real pipeline."
  },
  {
    title: "No Sales Leader Hired",
    severity: "high",
    description: "Every month without a dedicated seller costs approximately 1-1.5 potential deals. At $300K ACV, that's $300K-$450K in missed pipeline per month. The current part-time sales consultant (1 day/week) can't drive net-new pipeline — they can only maintain what exists.",
    mitigation: "Post the job description by Week 3 of the sprint. Interview in Weeks 5-8. Hire by Week 10-12. The 'Rainmaker-Operator Hybrid' profile is in the Sprint Plan tab."
  },
  {
    title: "Referral Fatigue — Diminishing Returns",
    severity: "high",
    description: "100% of revenue comes from referrals and network effects. But current referral sources have finite networks. Without new logo acquisition, referral volume will plateau within 12-18 months. The Advocate Referral Program is drafted but not yet executed.",
    mitigation: "Execute the Advocate Referral Program NOW (it's already drafted). AND pilot the targeted outbound motion (20 accounts, 90 days) to create a second pipeline source independent of referrals."
  },
  {
    title: "Pricing Pressure from Tech Platforms",
    severity: "medium",
    description: "BetterUp ($499/user/month ≈ $6K/year) and CoachHub are normalizing lower per-user price points. Enterprise buyers may push back on $9,500/leader when platforms offer 'coaching' at 1/15th the price. The more tech-enabled coaching becomes table stakes, the harder it gets to justify the premium.",
    mitigation: "Never compete on price. Compete on OUTCOMES. The positioning shift from 'leadership development program' to 'Leadership Operating System' creates a different buying category. Your measurement story (360° baseline-to-completion) is the trump card — tech platforms can't match it."
  },
  {
    title: "Sales Hire Misfire",
    severity: "medium",
    description: "The wrong first sales hire (too senior VP-type who wants to build a team, too junior SDR who can't close $300K deals, or wrong industry background) wastes 6 months and $75K-$100K in comp + opportunity cost.",
    mitigation: "Profile is specific: 7-12 years enterprise sales, sold $200K-$500K deals to C-suite, comfortable being the only seller for 12+ months, can build own pipeline. NOT a VP of Sales. NOT an SDR. OTE: $200K-$250K."
  },
];

const leadingIndicators = [
  { metric: "New qualified conversations this week", target: "3-5/week", warning: "< 2/week for 2 consecutive weeks", frequency: "Weekly" },
  { metric: "Proposals sent this month", target: "2-3/month", warning: "< 1/month", frequency: "Monthly" },
  { metric: "Avg time: discovery → proposal", target: "< 21 days", warning: "> 30 days", frequency: "Monthly" },
  { metric: "Referral asks made vs meetings booked", target: "5 asks → 2 meetings/week", warning: "< 1 meeting/week from referrals", frequency: "Weekly" },
  { metric: "Jackie's hours on sales vs delivery", target: "≥ 7 hrs/week on sales", warning: "< 4 hrs/week (delivery crowding out sales)", frequency: "Weekly" },
  { metric: "Pipeline deals with dollar values", target: "100% of Qualified+ deals", warning: "< 70% have amounts (pipeline isn't real)", frequency: "Bi-weekly" },
  { metric: "Existing client expansion conversations", target: "2-3/week", warning: "< 1/week", frequency: "Weekly" },
];

const failureSignals = [
  { signal: "Zero new qualified conversations for 3 consecutive weeks", action: "Stop everything else. The pipeline is drying up. Activate emergency referral campaign." },
  { signal: "Win rate drops below 30%", action: "Qualification problem. You're advancing deals that shouldn't advance. Tighten discovery gates." },
  { signal: "Average deal size drops below $200K", action: "Pricing pressure or scope erosion. Are you discounting? Are deals getting smaller? Review proposal strategy." },
  { signal: "Sales cycle exceeds 120 days average", action: "Deals are stalling. Multi-threading isn't happening. Champions are getting stuck. Review decision-maker mapping." },
  { signal: "Pipeline coverage drops below 2.5x", action: "Not enough in the funnel. Increase outreach activity by 50%. Consider accelerating the targeted outbound pilot." },
  { signal: "Jackie spending < 3 hrs/week on sales", action: "Delivery is eating sales time. This is the #1 risk. Offload delivery to team. Jackie's time on sales is irreplaceable." },
];

export default function RiskAnalysis() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-3xl font-bold text-slate-900">Risk & Failure Analysis</h2>
        <p className="text-slate-500 mt-2">Why this could fail and what early warning signs to watch for.</p>
      </div>

      {/* Risk Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {risks.map((r, i) => <RiskCard key={i} {...r} />)}
      </div>

      {/* Jackie Bandwidth Model */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h3 className="font-display text-xl font-bold text-slate-900 mb-4">Jackie Bandwidth Model — The Math</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {[
            { label: "Available sales hours/week", value: "7 hrs" },
            { label: "Hours per active deal/week", value: "~2 hrs" },
            { label: "Max concurrent deals", value: "3-4" },
            { label: "Avg cycle (weighted)", value: "62 days" },
          ].map((item, i) => (
            <div key={i} className="bg-slate-100 rounded-lg p-3 text-center">
              <div className="text-slate-500 text-xs mb-1">{item.label}</div>
              <div className="text-slate-900 text-lg font-bold">{item.value}</div>
            </div>
          ))}
        </div>
        <div className="bg-red-50 border border-red-500/20 rounded-lg p-4">
          <p className="text-slate-600 text-sm leading-relaxed">
            <strong className="text-red-700">Throughput cap without a sales hire:</strong> At 3-4 concurrent deals with 62-day average cycles,
            Jackie can close ~20-24 deals/year if 100% of her sales time goes to closing. But she also does keynotes, delivery, and relationship maintenance.
            Realistically, she's closing ~12-15 deals/year in current mode. At $99K average (actual), that's $1.2M-$1.5M — not $5M.
            <strong className="text-slate-900"> The sales hire isn't optional. It's the difference between $1.5M and $5M.</strong>
          </p>
        </div>
      </div>

      {/* Leading Indicators */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h3 className="font-display text-xl font-bold text-slate-900 mb-4">Leading Indicators — Track Weekly</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="text-left py-2 text-slate-500 font-medium">Metric</th>
                <th className="text-left py-2 text-slate-500 font-medium">Target</th>
                <th className="text-left py-2 text-slate-500 font-medium">Warning Signal</th>
                <th className="text-left py-2 text-slate-500 font-medium">Frequency</th>
              </tr>
            </thead>
            <tbody>
              {leadingIndicators.map((ind, i) => (
                <tr key={i} className="border-b border-slate-200">
                  <td className="py-3 text-slate-900 font-medium">{ind.metric}</td>
                  <td className="py-3 text-green-400">{ind.target}</td>
                  <td className="py-3 text-red-400">{ind.warning}</td>
                  <td className="py-3 text-slate-500">{ind.frequency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Failure Signals */}
      <div className="bg-red-50 border border-red-500/20 rounded-xl p-6">
        <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
          <AlertTriangle size={20} /> Failure Signals — Stop and Reassess If:
        </h3>
        <div className="space-y-3">
          {failureSignals.map((fs, i) => (
            <div key={i} className="flex items-start gap-3">
              <AlertCircle size={14} className="text-red-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-slate-900 text-sm font-medium">{fs.signal}</p>
                <p className="text-slate-500 text-xs mt-0.5">{fs.action}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
