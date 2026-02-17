import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Target, DollarSign, Clock, AlertTriangle, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import { METRICS, EXISTING_VS_NEW, PIPELINE_STAGES, TOTAL_ACTIVE_PIPELINE, WEIGHTED_PIPELINE, PIPELINE_COVERAGE_RATIO, DEAL_SIZE_DIST } from '../data';

const fmt = (n) => n >= 1000000 ? `$${(n / 1000000).toFixed(1)}M` : n >= 1000 ? `$${(n / 1000).toFixed(0)}K` : `$${n}`;
const pct = (n) => `${(n * 100).toFixed(1)}%`;

function Scorecard({ label, value, sub, icon: Icon, color = "text-sb-gold", alert }) {
  return (
    <div className={`bg-white rounded-xl p-5 border ${alert ? 'border-red-500/40' : 'border-slate-200'}`}>
      <div className="flex items-start justify-between mb-3">
        <span className="text-slate-500 text-xs font-medium uppercase tracking-wider">{label}</span>
        <Icon size={18} className={alert ? 'text-red-400' : 'text-slate-400'} />
      </div>
      <div className={`text-2xl font-bold ${color}`}>{value}</div>
      {sub && <div className="text-slate-400 text-xs mt-1">{sub}</div>}
    </div>
  );
}

const revenuePathData = [
  { name: "2026 Won", value: 1603050, fill: "#22c55e" },
  { name: "Contracting", value: 819975, fill: "#3b82f6" },
  { name: "Decision", value: 892900, fill: "#6366f1" },
  { name: "Proposal", value: 493000, fill: "#8b5cf6" },
  { name: "Needs Assess.", value: 302500, fill: "#a855f7" },
  { name: "Discovery", value: 125000, fill: "#d946ef" },
  { name: "Lead/Prospect", value: 100000, fill: "#ec4899" },
];

const funnelData = [
  { stage: "Lead / Prospect", deals: 24, amountWithValue: 1, color: "#ec4899" },
  { stage: "Qualified / Discovery", deals: 8, amountWithValue: 2, color: "#d946ef" },
  { stage: "Needs Assessment", deals: 4, amountWithValue: 3, color: "#a855f7" },
  { stage: "Proposal Sent", deals: 2, amountWithValue: 2, color: "#8b5cf6" },
  { stage: "Decision", deals: 3, amountWithValue: 3, color: "#6366f1" },
  { stage: "Contracting", deals: 2, amountWithValue: 2, color: "#3b82f6" },
  { stage: "Closed Won", deals: 19, amountWithValue: 18, color: "#22c55e" },
  { stage: "Closed Lost", deals: 11, amountWithValue: 7, color: "#ef4444" },
];

export default function StrategicDiagnosis() {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div>
        <h2 className="font-display text-3xl font-bold text-slate-900">Strategic Diagnosis</h2>
        <p className="text-slate-500 mt-2">What is actually constraining you? The data tells a different story than you think.</p>
      </div>

      {/* KPI Scorecards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Scorecard label="2026 Won Revenue" value={fmt(METRICS.won2026Revenue)} sub={`${((METRICS.won2026Revenue / METRICS.target) * 100).toFixed(0)}% of $5M target`} icon={DollarSign} color="text-green-400" />
        <Scorecard label="Avg Deal Size (Won)" value={fmt(METRICS.avgDealSize)} sub="Target: $300K — Gap: $201K" icon={TrendingDown} color="text-red-400" alert />
        <Scorecard label="Win Rate" value={pct(METRICS.winRateCount)} sub={`${pct(METRICS.winRateValue)} by dollar value`} icon={Target} color="text-green-400" />
        <Scorecard label="Pipeline Coverage" value={`${PIPELINE_COVERAGE_RATIO}x`} sub="Need 3-4x — CRITICAL GAP" icon={AlertTriangle} color="text-red-400" alert />
        <Scorecard label="Active Pipeline" value={fmt(TOTAL_ACTIVE_PIPELINE)} sub={`Weighted: ${fmt(WEIGHTED_PIPELINE)}`} icon={TrendingUp} />
        <Scorecard label="Remaining to $5M" value={fmt(METRICS.remainingTo5M)} sub={`${Math.ceil(METRICS.remainingTo5M / METRICS.targetACV)} deals at $300K ACV`} icon={Target} />
        <Scorecard label="Avg Deal Velocity" value={`${METRICS.avgVelocityDays} days`} sub={`${METRICS.weightedAvgVelocityDays} days weighted by $`} icon={Clock} />
        <Scorecard label="Top 3 Concentration" value="58.4%" sub="Crocs + Congruex + TJH" icon={AlertTriangle} color="text-amber-400" alert />
      </div>

      {/* THE BIG FINDING */}
      <div className="bg-red-50 border border-red-500/30 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <AlertCircle size={24} className="text-red-400 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-red-700 mb-2">The $300K ACV Myth — Your Real Average is $99K</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              Lindsay, you believe the constraint is "conversation volume and sales discipline." The data tells a sharper story.
              Of 18 won deals with amounts, <strong className="text-slate-900">9 are under $25K</strong> (workshops, keynotes, coaching). Only <strong className="text-slate-900">2 deals</strong> are
              actually at $300K+ (Crocs: $455K, Congruex: $398K). Your real average deal size is <strong className="text-red-700">$99,025</strong> —
              not $300K. At $99K ACV, hitting $5M requires ~50 deals, not 17.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              The real question isn't "how do we get more conversations?" It's <strong className="text-slate-900">"how do we get more $300K+ conversations
              and stop diluting with $10K-$20K workshops?"</strong> You're running two businesses: a high-ACV enterprise engine
              ($200K+) and a relationship-maintenance engine (workshops, keynotes, coaching under $50K). Both have value,
              but confusing them destroys your revenue math.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div className="bg-slate-100 rounded-lg p-3">
                <div className="text-2xl font-bold text-red-400">9</div>
                <div className="text-xs text-slate-500">Deals under $25K</div>
              </div>
              <div className="bg-slate-100 rounded-lg p-3">
                <div className="text-2xl font-bold text-amber-400">4</div>
                <div className="text-xs text-slate-500">Deals $100K-$200K</div>
              </div>
              <div className="bg-slate-100 rounded-lg p-3">
                <div className="text-2xl font-bold text-green-400">2</div>
                <div className="text-xs text-slate-500">Deals $300K+</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Path to $5M */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="font-display text-xl font-bold text-slate-900 mb-1">Revenue Path: $1.6M to $5M</h3>
          <p className="text-slate-500 text-xs mb-4">Pipeline value by stage — all active deals</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenuePathData} layout="vertical" margin={{ left: 10, right: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
              <XAxis type="number" tickFormatter={(v) => fmt(v)} stroke="#94a3b8" fontSize={11} />
              <YAxis type="category" dataKey="name" stroke="#94a3b8" fontSize={11} width={100} />
              <Tooltip
                contentStyle={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 12 }}
                formatter={(v) => [fmt(v), "Value"]}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {revenuePathData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="font-display text-xl font-bold text-slate-900 mb-1">Deal Size Distribution (Won)</h3>
          <p className="text-slate-500 text-xs mb-4">Most deals are small — the $300K ACV is aspirational, not actual</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={DEAL_SIZE_DIST} margin={{ left: 0, right: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="range" stroke="#94a3b8" fontSize={11} />
              <YAxis stroke="#94a3b8" fontSize={11} />
              <Tooltip
                contentStyle={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 12 }}
              />
              <Bar dataKey="count" fill="#9f8347" radius={[4, 4, 0, 0]}>
                {DEAL_SIZE_DIST.map((entry, i) => (
                  <Cell key={i} fill={i === 0 ? '#ef4444' : i <= 2 ? '#f59e0b' : '#22c55e'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pipeline Funnel */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h3 className="font-display text-xl font-bold text-slate-900 mb-1">Deal Stage Funnel</h3>
        <p className="text-slate-500 text-xs mb-4">Number of deals at each stage — note 24 Leads with almost no dollar values attached</p>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={funnelData} margin={{ left: 10, right: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="stage" stroke="#94a3b8" fontSize={10} angle={-15} textAnchor="end" height={60} />
            <YAxis stroke="#94a3b8" fontSize={11} />
            <Tooltip
              contentStyle={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 12 }}
              formatter={(v, name) => [v, name === 'deals' ? 'Total Deals' : 'With $ Amount']}
            />
            <Bar dataKey="deals" name="Total Deals" radius={[4, 4, 0, 0]}>
              {funnelData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Constraint Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="font-display text-xl font-bold text-slate-900 mb-4">Assumption Stress Test</h3>
          <div className="space-y-4">
            {[
              { claim: '"We need more qualified executive conversations"', verdict: "PARTIALLY TRUE", color: "text-amber-400", detail: 'Yes, but the bigger issue is deal SIZE. You have conversations — 73 deals in pipeline. You need to convert more of them to $200K+ enterprise engagements instead of $15K workshops.' },
              { claim: '"We need tighter qualification"', verdict: "TRUE", color: "text-green-400", detail: '24 deals in Lead/Prospect stage with only 1 having a dollar amount. These aren\'t qualified — they\'re names on a list. Tighter qualification means fewer deals in pipeline but higher conversion.' },
              { claim: '"The constraint is conversation volume"', verdict: "FALSE", color: "text-red-400", detail: 'You\'re winning 63% of closed deals. That\'s excellent. The constraint is DEAL SIZE and PIPELINE QUALITY, not volume. You need 12-17 enterprise deals, not 50+ small ones.' },
              { claim: '"$300K is our average deal size"', verdict: "FALSE", color: "text-red-400", detail: 'Your actual average is $99K. Only 2 of 19 won deals are $300K+. The $300K target is achievable but requires a deliberate shift away from sub-$50K engagements.' },
              { claim: '"We should add a non-referral acquisition motion"', verdict: "PREMATURE", color: "text-amber-400", detail: 'Before adding new channels, maximize existing ones. Your existing client expansion (73.7% win rate, 73% of revenue) and referral networks are dramatically underutilized. A new motion without a sales hire will dilute the 14 hrs/week you already don\'t have enough of.' },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-slate-300 pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-bold ${item.color}`}>{item.verdict}</span>
                </div>
                <p className="text-slate-900 text-sm font-medium">{item.claim}</p>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="font-display text-xl font-bold text-slate-900 mb-4">New vs. Existing Client Performance</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-100 rounded-lg p-4 text-center">
                <div className="text-xs text-slate-500 mb-1">Existing Clients</div>
                <div className="text-2xl font-bold text-green-400">{EXISTING_VS_NEW.wonExisting.count} won</div>
                <div className="text-sm text-slate-600">{fmt(EXISTING_VS_NEW.wonExisting.value)}</div>
                <div className="text-xs text-green-400 mt-1">73.7% win rate</div>
              </div>
              <div className="bg-slate-100 rounded-lg p-4 text-center">
                <div className="text-xs text-slate-500 mb-1">New Clients</div>
                <div className="text-2xl font-bold text-blue-400">{EXISTING_VS_NEW.wonNew.count} won</div>
                <div className="text-sm text-slate-600">{fmt(EXISTING_VS_NEW.wonNew.value)}</div>
                <div className="text-xs text-blue-400 mt-1">62.5% win rate</div>
              </div>
            </div>
            <p className="text-slate-500 text-xs mt-4">73% of revenue comes from existing clients. Expansion is your #1 lever — higher win rate, lower effort, known buyers.</p>
          </div>

          {/* Biggest Leverage Point */}
          <div className="bg-sb-gold/10 border border-sb-gold/30 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Target size={24} className="text-sb-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-sb-gold mb-2">Biggest Leverage Point</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-3">
                  <strong>Shift from "more deals" to "bigger deals through existing client expansion."</strong>
                </p>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight size={14} className="text-sb-gold mt-1 flex-shrink-0" />
                    <span>Your Crocs deal ($455K) started as a workshop relationship. Your Congruex deal ($398K) bundled Team Dynamics + SBLA + Pulse. <strong className="text-slate-900">The expansion playbook IS the growth engine.</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight size={14} className="text-sb-gold mt-1 flex-shrink-0" />
                    <span>TJH ($178K) bought Ignite + Exec Partnership + SBLA + Pulse + Catalyst + Rising — <strong className="text-slate-900">7 products to one client.</strong> That's the model.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight size={14} className="text-sb-gold mt-1 flex-shrink-0" />
                    <span>If you expand Kettle ($101K), Ovation ($35K→$121K in pipeline), and GGW ($84K + $25K pending), that's $300K+ from 3 conversations with known buyers.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
