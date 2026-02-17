import React, { useState } from 'react';
import { Calendar, CheckCircle, Circle, Clock, Users, DollarSign, Target, AlertTriangle, ChevronDown, ChevronUp, ArrowRight, Briefcase } from 'lucide-react';

const phases = [
  {
    id: 'foundation',
    name: 'Foundation',
    weeks: 'Weeks 1-2',
    color: 'blue',
    summary: 'Pipeline audit, CRM hygiene, expansion mapping, referral program launch',
    tasks: [
      { owner: 'Lindsay', task: 'Audit all 43 active pipeline deals — add dollar values to every Qualified+ deal', priority: 'critical' },
      { owner: 'Lindsay', task: 'Disqualify or deprioritize all Lead/Prospect deals without a clear path to $100K+', priority: 'critical' },
      { owner: 'Lindsay', task: 'Create HubSpot dashboard tracking the 7 leading indicators from the Risk tab', priority: 'high' },
      { owner: 'Jackie', task: 'Send Advocate Referral Program Email 1 (gratitude) to top 10 referral sources', priority: 'critical' },
      { owner: 'Jackie', task: 'Map expansion opportunities for all 8 active clients (Crocs, Congruex, TJH, Ent, Kettle, GGW, John Hancock, Ovation)', priority: 'critical' },
      { owner: 'Jackie', task: 'Schedule expansion conversations with top 3 accounts: Crocs (Catalyst cascade), Ent (XLT expansion), TJH (new cohort)', priority: 'high' },
      { owner: 'Lindsay', task: 'Draft Sales Hire job description using the profile in this sprint plan', priority: 'high' },
      { owner: 'Lindsay', task: 'Set up weekly pipeline review cadence (Monday 30-min, Friday 15-min)', priority: 'medium' },
      { owner: 'Both', task: 'Align on weekly operating rhythm: Jackie 7 hrs/week sales, Lindsay 7 hrs/week ops', priority: 'high' },
    ]
  },
  {
    id: 'activation',
    name: 'Activation',
    weeks: 'Weeks 3-4',
    color: 'amber',
    summary: 'Referral program execution, outbound pilot start, expansion deals advancing',
    tasks: [
      { owner: 'Jackie', task: 'Send Advocate Referral Email 2 (value + nudge) to top 10 referral sources', priority: 'high' },
      { owner: 'Jackie', task: 'Complete 3+ expansion conversations with existing clients', priority: 'critical' },
      { owner: 'Jackie', task: 'Identify and connect with 5 PE/VC firm partners (start with Vista warm intro)', priority: 'high' },
      { owner: 'Lindsay', task: 'Post Sales Hire job description — begin sourcing candidates', priority: 'critical' },
      { owner: 'Lindsay', task: 'Select 20 target accounts for outbound pilot from Account Targeting tab', priority: 'high' },
      { owner: 'Lindsay', task: 'Prepare outbound sequences: LinkedIn connection requests + follow-up cadence', priority: 'high' },
      { owner: 'Jackie', task: 'Begin LinkedIn outreach to 10 of the 20 pilot accounts (personalized, trigger-based)', priority: 'medium' },
      { owner: 'Both', task: 'First monthly pipeline review — are Contracting deals (Ent $150K, Vista $85K, Kettle $67K) advancing?', priority: 'critical' },
      { owner: 'Lindsay', task: 'Segment newsletter list by company domain — identify Fortune 500 / enterprise subscribers', priority: 'medium' },
    ]
  },
  {
    id: 'execution',
    name: 'Execution',
    weeks: 'Weeks 5-8',
    color: 'green',
    summary: 'Sales hire interviews, pipeline building, expansion deals closing, outbound generating conversations',
    tasks: [
      { owner: 'Lindsay', task: 'Interview sales hire candidates — screen for 7-12yr enterprise sales, $200K-$500K deal experience', priority: 'critical' },
      { owner: 'Jackie', task: 'Advance 2+ expansion deals to Proposal/Contracting stage', priority: 'critical' },
      { owner: 'Jackie', task: 'Close at least 1 expansion deal ($100K+) from existing client base', priority: 'critical' },
      { owner: 'Jackie', task: 'Execute post-keynote conversion sequence for any speaking events in this period', priority: 'high' },
      { owner: 'Lindsay', task: 'Evaluate outbound pilot results: 20 accounts → connections → conversations', priority: 'high' },
      { owner: 'Jackie', task: 'Send newsletter pilot: 3-part "Leadership OS" series to 9K subscribers', priority: 'medium' },
      { owner: 'Lindsay', task: 'Advance all Contracting-stage deals — resolve any stalled negotiations', priority: 'critical' },
      { owner: 'Both', task: 'Weekly check: Are leading indicators on track? ≥3 new qualified conversations/week?', priority: 'high' },
      { owner: 'Lindsay', task: 'Track and report: proposals sent, avg time discovery→proposal, referral conversion', priority: 'medium' },
    ]
  },
  {
    id: 'optimize',
    name: 'Optimize & Scale',
    weeks: 'Weeks 9-12',
    color: 'purple',
    summary: 'Sales hire onboarded, pipeline coverage improving, expansion revenue landing, system running',
    tasks: [
      { owner: 'Lindsay', task: 'Extend offer to sales hire candidate — target start by Week 12', priority: 'critical' },
      { owner: 'Lindsay', task: 'Prepare sales hire onboarding: deal history, account maps, pitch materials, CRM access', priority: 'high' },
      { owner: 'Jackie', task: 'Close 1-2 more expansion or new logo deals ($200K+ combined)', priority: 'critical' },
      { owner: 'Jackie', task: 'Evaluate PE/VC partnership traction — at least 1 qualified conversation from partners', priority: 'high' },
      { owner: 'Both', task: 'Full pipeline review: Is coverage approaching 2.5x? If not, diagnose and adjust.', priority: 'critical' },
      { owner: 'Lindsay', task: 'Kill or scale outbound pilot based on results: hit 3 conversations from 20 accounts? Continue. Didn\'t? Stop.', priority: 'high' },
      { owner: 'Lindsay', task: 'Document what\'s working: which channels drove qualified conversations, which didn\'t', priority: 'medium' },
      { owner: 'Both', task: '90-day retrospective: review all success/failure criteria below', priority: 'high' },
    ]
  },
];

const successCriteria = [
  { metric: 'Qualified pipeline conversations', target: '10+ new qualified conversations generated', status: 'On track if ≥3/week by Week 4' },
  { metric: 'Proposals sent', target: '3+ proposals sent to new or expansion opportunities', status: 'On track if ≥1/month by Week 6' },
  { metric: 'Expansion deals closed', target: '2+ expansion deals closed ($150K+ combined)', status: 'On track if 1 closed by Week 8' },
  { metric: 'Pipeline coverage', target: 'Pipeline coverage ≥ 2.5x (up from 0.8x)', status: 'Requires $8M+ in qualified pipeline' },
  { metric: 'Sales leader hired', target: 'Offer extended by Week 10, start by Week 12', status: 'On track if JD posted by Week 3' },
  { metric: 'Revenue concentration', target: 'No single client > 20% of 2026 revenue', status: 'Requires new client wins' },
  { metric: 'Referral engine active', target: '1-2 qualified intros/week from advocate program', status: 'On track if first intro by Week 3' },
];

const failureCriteria = [
  'Zero new qualified conversations for 3+ consecutive weeks',
  'No sales hire candidates in pipeline by Week 6',
  'Pipeline coverage still below 1.5x at Week 8',
  'Zero expansion deals advanced to Proposal stage by Week 6',
  'Jackie spending < 4 hrs/week on sales (delivery crowding out)',
  'Win rate drops below 30% on new proposals',
  'No revenue from new logos by Week 12',
];

const roleMatrix = [
  { activity: 'Discovery/diagnostic calls', jackie: '●', lindsay: '○', salesHire: '●' },
  { activity: 'Proposal creation & pricing', jackie: '○', lindsay: '●', salesHire: '●' },
  { activity: 'Executive relationship building', jackie: '●', lindsay: '○', salesHire: '○' },
  { activity: 'Keynotes & speaking events', jackie: '●', lindsay: '○', salesHire: '—' },
  { activity: 'Referral asks & network activation', jackie: '●', lindsay: '●', salesHire: '○' },
  { activity: 'CRM management & pipeline hygiene', jackie: '—', lindsay: '●', salesHire: '●' },
  { activity: 'Outbound prospecting (post-hire)', jackie: '—', lindsay: '○', salesHire: '●' },
  { activity: 'Contract negotiation & closing', jackie: '● ($400K+)', lindsay: '○', salesHire: '● (<$400K)' },
  { activity: 'Client expansion conversations', jackie: '●', lindsay: '●', salesHire: '● (once ramped)' },
  { activity: 'Weekly pipeline review', jackie: '●', lindsay: '●', salesHire: '●' },
  { activity: 'Strategic partnerships (PE/VC)', jackie: '●', lindsay: '○', salesHire: '—' },
  { activity: 'Marketing/newsletter coordination', jackie: '○', lindsay: '●', salesHire: '—' },
];

function PhaseSection({ phase }) {
  const [open, setOpen] = useState(false);
  const colorMap = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-500/20', badge: 'bg-blue-100 text-blue-700', dot: 'bg-blue-400' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-500/20', badge: 'bg-amber-100 text-amber-700', dot: 'bg-amber-400' },
    green: { bg: 'bg-green-50', border: 'border-green-500/20', badge: 'bg-green-100 text-green-700', dot: 'bg-green-400' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-500/20', badge: 'bg-purple-100 text-purple-700', dot: 'bg-purple-400' },
  };
  const c = colorMap[phase.color];
  const priorityColors = {
    critical: 'text-red-400',
    high: 'text-amber-400',
    medium: 'text-blue-400',
  };

  return (
    <div className={`${c.bg} border ${c.border} rounded-xl overflow-hidden`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors">
        <div className="flex items-center gap-4">
          <div className={`w-3 h-3 rounded-full ${c.dot}`} />
          <div>
            <div className="text-slate-900 font-semibold flex items-center gap-2">
              {phase.name} <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${c.badge}`}>{phase.weeks}</span>
            </div>
            <div className="text-slate-500 text-xs mt-0.5">{phase.summary}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-400 text-xs">{phase.tasks.length} tasks</span>
          {open ? <ChevronUp size={18} className="text-slate-500" /> : <ChevronDown size={18} className="text-slate-500" />}
        </div>
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-slate-200 pt-4">
          <div className="space-y-2">
            {phase.tasks.map((t, i) => (
              <div key={i} className="flex items-start gap-3">
                <Circle size={14} className="text-slate-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-slate-700 text-sm">{t.task}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-slate-400">Owner: <span className="text-slate-600">{t.owner}</span></span>
                    <span className={`text-xs font-medium ${priorityColors[t.priority]}`}>{t.priority.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SprintPlan() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-3xl font-bold text-slate-900">90-Day Sprint Plan</h2>
        <p className="text-slate-500 mt-2">Week-by-week execution plan for the first 90 days. Every task has an owner.</p>
      </div>

      {/* Timeline Visual */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h3 className="font-display text-xl font-bold text-slate-900 mb-4">Sprint Timeline</h3>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-300" />
          <div className="space-y-6">
            {phases.map((phase, i) => {
              const colorMap = {
                blue: 'bg-blue-400', amber: 'bg-amber-400', green: 'bg-green-400', purple: 'bg-purple-400'
              };
              return (
                <div key={phase.id} className="flex items-start gap-4 relative">
                  <div className={`w-8 h-8 rounded-full ${colorMap[phase.color]} flex items-center justify-center text-slate-900 text-xs font-bold z-10`}>
                    {i + 1}
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3">
                      <span className="text-slate-900 font-semibold text-sm">{phase.name}</span>
                      <span className="text-slate-400 text-xs">{phase.weeks}</span>
                    </div>
                    <p className="text-slate-500 text-xs mt-0.5">{phase.summary}</p>
                    <div className="flex items-center gap-4 mt-1 text-xs">
                      <span className="text-red-400">{phase.tasks.filter(t => t.priority === 'critical').length} critical</span>
                      <span className="text-amber-400">{phase.tasks.filter(t => t.priority === 'high').length} high</span>
                      <span className="text-blue-400">{phase.tasks.filter(t => t.priority === 'medium').length} medium</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Phase Details */}
      <div>
        <h3 className="font-display text-xl font-bold text-slate-900 mb-4">Phase Details</h3>
        <div className="space-y-3">
          {phases.map(phase => <PhaseSection key={phase.id} phase={phase} />)}
        </div>
      </div>

      {/* Success Criteria */}
      <div className="bg-green-50 border border-green-500/20 rounded-xl p-6">
        <h3 className="text-lg font-bold text-green-700 mb-4 flex items-center gap-2">
          <CheckCircle size={20} /> Success Criteria — At 90 Days
        </h3>
        <div className="space-y-3">
          {successCriteria.map((sc, i) => (
            <div key={i} className="flex items-start gap-3">
              <Target size={14} className="text-green-400 mt-1 flex-shrink-0" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-900 text-sm font-medium">{sc.metric}:</span>
                  <span className="text-green-700 text-sm">{sc.target}</span>
                </div>
                <p className="text-slate-400 text-xs mt-0.5">{sc.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Failure Criteria */}
      <div className="bg-red-50 border border-red-500/20 rounded-xl p-6">
        <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
          <AlertTriangle size={20} /> Failure Signals — Stop and Reassess If:
        </h3>
        <div className="space-y-2">
          {failureCriteria.map((fc, i) => (
            <div key={i} className="flex items-start gap-2">
              <AlertTriangle size={14} className="text-red-400 mt-0.5 flex-shrink-0" />
              <p className="text-slate-600 text-sm">{fc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sales Hire Profile */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h3 className="font-display text-xl font-bold text-slate-900 mb-1 flex items-center gap-2">
          <Briefcase size={20} className="text-sb-gold" /> Sales Hire Profile — "Rainmaker-Operator Hybrid"
        </h3>
        <p className="text-slate-500 text-xs mb-6">This is NOT a VP of Sales. This is NOT an SDR. This is a full-cycle enterprise seller who can hunt and close alone.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Requirements */}
          <div>
            <h4 className="text-slate-900 font-semibold text-sm mb-3">Must-Have Requirements</h4>
            <div className="space-y-2">
              {[
                '7-12 years enterprise B2B sales experience',
                'Personally closed $200K-$500K deals (not managed others who did)',
                'Sold to C-suite (CEO, CHRO, COO) — not mid-level buyers',
                'Comfortable being the ONLY seller for 12+ months',
                'Can build own pipeline — not dependent on SDR team or marketing',
                'Professional services / consulting / training background preferred',
                'HubSpot CRM proficiency',
                'Based in Denver metro OR willing to travel 30%+',
              ].map((req, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle size={12} className="text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-600 text-xs">{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Disqualifiers */}
          <div>
            <h4 className="text-slate-900 font-semibold text-sm mb-3">Explicit Disqualifiers</h4>
            <div className="space-y-2">
              {[
                'VP of Sales title-seekers who want to "build a team" before selling',
                'SDR/BDR background only — can\'t close $300K deals',
                'SaaS-only background — doesn\'t understand services sales cycles',
                'Needs marketing leads to hit quota — no self-sourcing ability',
                'Wants to rearchitect the sales process before executing',
                'Can\'t articulate how they personally built pipeline in past roles',
              ].map((dq, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-red-400 text-xs mt-0.5 flex-shrink-0">✕</span>
                  <span className="text-slate-500 text-xs">{dq}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comp Structure */}
        <div className="bg-slate-50 rounded-lg p-4 mb-6">
          <h4 className="text-slate-900 font-semibold text-sm mb-3">Compensation Structure</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Base Salary', value: '$120K-$150K', note: 'Denver market competitive' },
              { label: 'Commission', value: '15-20%', note: 'On closed revenue' },
              { label: 'OTE (Year 1)', value: '$200K-$250K', note: 'At $600K-$800K closed' },
              { label: 'Ramp Period', value: '6 months', note: 'Full quota at Month 7' },
            ].map((comp, i) => (
              <div key={i} className="text-center">
                <div className="text-slate-500 text-xs mb-1">{comp.label}</div>
                <div className="text-sb-gold text-lg font-bold">{comp.value}</div>
                <div className="text-slate-400 text-xs mt-0.5">{comp.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Interview Questions */}
        <div className="bg-slate-50 rounded-lg p-4 mb-6">
          <h4 className="text-slate-900 font-semibold text-sm mb-3">Screening Questions (Ask These First)</h4>
          <div className="space-y-2">
            {[
              '"Walk me through the largest deal you personally closed. What was the ACV, who was the buyer, and how long did it take?"',
              '"In your last role, what percentage of your pipeline did you self-source vs. receive from marketing/SDRs?"',
              '"You\'d be the only seller here for 12+ months. How does that make you feel?"',
              '"Describe a deal where you had to sell to both the CHRO and the CFO. How did you navigate competing priorities?"',
              '"Our average deal is $300K and takes 60 days. How would you build pipeline to close 12-15 of these per year?"',
            ].map((q, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-sb-gold text-xs font-bold mt-0.5">{i + 1}.</span>
                <span className="text-slate-600 text-xs italic">{q}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Role Split Matrix */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h3 className="font-display text-xl font-bold text-slate-900 mb-1">Role Responsibility Matrix</h3>
        <p className="text-slate-500 text-xs mb-4">● = Primary owner · ○ = Supports · — = Not involved</p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="text-left py-2 text-slate-500 font-medium">Activity</th>
                <th className="text-center py-2 text-slate-500 font-medium">Jackie (CEO)</th>
                <th className="text-center py-2 text-slate-500 font-medium">Lindsay (VP Growth)</th>
                <th className="text-center py-2 text-slate-500 font-medium">Sales Hire</th>
              </tr>
            </thead>
            <tbody>
              {roleMatrix.map((row, i) => (
                <tr key={i} className="border-b border-slate-200">
                  <td className="py-3 text-slate-900 font-medium">{row.activity}</td>
                  <td className="py-3 text-center text-slate-600">{row.jackie}</td>
                  <td className="py-3 text-center text-slate-600">{row.lindsay}</td>
                  <td className="py-3 text-center text-slate-600">{row.salesHire}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="bg-sb-gold/10 border border-sb-gold/30 rounded-xl p-6">
        <h3 className="text-lg font-bold text-sb-gold mb-2">The Bottom Line</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          This 90-day sprint is designed to create <strong className="text-slate-900">irreversible momentum</strong>. The first 30 days are about fixing the foundation — cleaning the pipeline, activating existing clients, and launching the referral engine.
          Days 30-60 are about building — hiring the seller, advancing expansion deals, piloting outbound. Days 60-90 are about proving the model works at scale.
          If you execute this sprint with discipline, you'll exit Day 90 with a sales hire ramping, 2-3 expansion deals closed, pipeline coverage above 2x, and a repeatable system for generating $300K+ conversations.
          That's the difference between a $1.5M business and a $5M one.
        </p>
      </div>
    </div>
  );
}
