import React, { useState } from 'react';
import { Handshake, ChevronDown, ChevronUp, AlertCircle, CheckCircle, ArrowRight, Clock, Users, Phone, BookOpen } from 'lucide-react';

function Section({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-100 transition-colors">
        <h3 className="text-slate-900 font-semibold">{title}</h3>
        {open ? <ChevronUp size={18} className="text-slate-500" /> : <ChevronDown size={18} className="text-slate-500" />}
      </button>
      {open && <div className="px-5 pb-5 border-t border-slate-200 pt-4">{children}</div>}
    </div>
  );
}

const urgencySignals = [
  { signal: "Executive Transition", triggers: "New CEO/CHRO/CPO hired in last 6 months", detection: "LinkedIn alerts, press releases, board announcements", priority: "highest", angle: '"New leaders need alignment fast. SBLA installs the leadership system in 7 months — your new CHRO\'s first big win."' },
  { signal: "Post-M&A Integration", triggers: "Company announced acquisition, PE portfolio restructuring", detection: "News monitoring, SEC filings, PE portfolio announcements", priority: "highest", angle: '"22 acquisitions created fragmented leadership expectations at Congruex. We unified them. Same playbook applies here."' },
  { signal: "Existing Client Expansion", triggers: "Sponsor promoted, new division forming, SBLA cohort completing", detection: "Internal tracking, LinkedIn monitoring, cohort completion dates", priority: "highest", angle: '"Your executives loved it. Now their directors need the same system. The cascade creates consistency top-to-bottom."' },
  { signal: "Hypergrowth Stress", triggers: "30%+ headcount growth YoY, multiple VP openings", detection: "LinkedIn job postings, headcount data, growth announcements", priority: "high", angle: '"Growth is outpacing your leadership capacity. That gap is the most expensive hidden cost in every scaling organization."' },
  { signal: "Culture Crisis", triggers: "Glassdoor drops below 3.5, public turnover, layoffs then rehiring", detection: "Glassdoor alerts, news monitoring, social media", priority: "high", angle: '"When leadership lacks a shared operating system, culture erodes. We can measure the gap and close it in 7 months."' },
  { signal: "Leadership Void", triggers: "Multiple VP/Director openings simultaneously", detection: "LinkedIn job postings for the same company", priority: "medium", angle: '"You\'re filling roles. We make sure the people in those roles operate from the same playbook from day one."' },
  { signal: "Strategic Pivot", triggers: "New strategy announcement, major reorg, digital transformation", detection: "Earnings calls, press releases, industry news", priority: "medium", angle: '"Strategy without leadership capacity is just a PowerPoint. We close the gap between strategic intent and leadership execution."' },
];

const stages = [
  {
    name: "Stage 1: Lead / Prospect ID'd", timing: "Week 1-2", color: "border-pink-500",
    content: (
      <div className="space-y-3 text-sm">
        <p className="text-slate-600"><strong className="text-slate-900">Research (15 min/account):</strong> Company size, recent news, executive team on LinkedIn, any urgency signals from the map above. Check if anyone in Jackie/Lindsay's network has a connection.</p>
        <p className="text-slate-600"><strong className="text-slate-900">Outreach approach (in priority order):</strong></p>
        <ol className="list-decimal ml-5 text-slate-600 space-y-1 text-xs">
          <li>Warm intro from mutual connection (highest conversion)</li>
          <li>Jackie's personal LinkedIn DM referencing a trigger event</li>
          <li>Post-keynote follow-up if they attended an event</li>
          <li>Cold executive LinkedIn message (last resort)</li>
        </ol>
        <p className="text-slate-600"><strong className="text-slate-900">Goal:</strong> Book a 30-minute diagnostic conversation.</p>
        <div className="bg-red-50 border border-red-500/20 rounded-lg p-3 mt-2">
          <p className="text-red-700 text-xs font-semibold">Qualification Gate:</p>
          <p className="text-slate-500 text-xs">Is there an executive sponsor (not just an L&D coordinator)? Is there a business trigger (not "just exploring")? Can they authorize $100K+? If NO to any of these → do not advance.</p>
        </div>
      </div>
    )
  },
  {
    name: "Stage 2: Qualified / Discovery", timing: "Week 2-4", color: "border-purple-500",
    content: (
      <div className="space-y-3 text-sm">
        <p className="text-slate-600"><strong className="text-slate-900">Discovery Call Structure (45 min):</strong></p>
        <div className="bg-slate-100 rounded-lg p-4 space-y-2">
          <p className="text-slate-700 text-xs"><strong className="text-sb-gold">Q1:</strong> "What's happening in the business right now that made this conversation a priority?" <span className="text-slate-400">(surfaces urgency)</span></p>
          <p className="text-slate-700 text-xs"><strong className="text-sb-gold">Q2:</strong> "When you think about your leadership team's ability to execute on [their stated priority], what's the gap?" <span className="text-slate-400">(surfaces pain)</span></p>
          <p className="text-slate-700 text-xs"><strong className="text-sb-gold">Q3:</strong> "What have you tried before? What worked and what didn't?" <span className="text-slate-400">(surfaces past spend + standards)</span></p>
          <p className="text-slate-700 text-xs"><strong className="text-sb-gold">Q4:</strong> "If you could wave a magic wand and your leaders were operating differently in 6 months, what would that look like?" <span className="text-slate-400">(surfaces vision)</span></p>
          <p className="text-slate-700 text-xs"><strong className="text-sb-gold">Q5:</strong> "Who else is feeling this pain? Who would need to be part of the decision?" <span className="text-slate-400">(surfaces buying committee)</span></p>
          <p className="text-slate-700 text-xs"><strong className="text-sb-gold">Q6:</strong> "What's the cost of NOT solving this in the next 12 months?" <span className="text-slate-400">(quantifies urgency)</span></p>
        </div>
        <div className="bg-amber-50 border border-amber-500/20 rounded-lg p-3">
          <p className="text-amber-700 text-xs font-semibold">Pitch Critique — Replace this question from current draft:</p>
          <p className="text-slate-500 text-xs">"What is your typical budget for leadership development?" → TOO EARLY and TOO DIRECT for a $300K sale. Never ask budget before establishing value and urgency. Instead use Q6 above to let them quantify the cost of inaction — then your price is positioned against THAT number.</p>
        </div>
        <p className="text-slate-600"><strong className="text-slate-900">Book Send:</strong> Mail Jackie's book within 24 hours of a qualified discovery call — BEFORE the proposal, not after. This positions Jackie as a thought leader, not a vendor.</p>
        <div className="bg-red-50 border border-red-500/20 rounded-lg p-3">
          <p className="text-red-700 text-xs font-semibold">Red Flags — Disqualify:</p>
          <p className="text-slate-500 text-xs">No executive sponsor • "We're just exploring" • Budget under $100K • Timeline beyond 6 months • No identifiable business trigger • Champion is L&D coordinator with no C-suite access</p>
        </div>
      </div>
    )
  },
  {
    name: "Stage 3: Needs Assessment / Proposal Draft", timing: "Week 3-6", color: "border-violet-500",
    content: (
      <div className="space-y-3 text-sm">
        <p className="text-slate-600"><strong className="text-slate-900">Diagnostic session</strong> (get Jackie on this call if possible):</p>
        <ul className="list-disc ml-5 text-slate-600 space-y-1 text-xs">
          <li>Map engagement scope: number of leaders, levels, timeline, desired outcomes</li>
          <li>Confirm decision process: "Walk me through how a decision like this typically gets made at [company]. Who signs off?"</li>
          <li>Identify the buying committee: Champion (often CHRO), Economic Buyer (CEO or CFO), Influencer (L&D/HR), Blocker (procurement, legal)</li>
        </ul>
        <p className="text-slate-600"><strong className="text-slate-900">Internal:</strong> Build custom proposal within 5 business days. Use Congruex/SimplePractice/Alvarado proposal templates as base. Always present options (2-3 tiers like Congruex: Full XLT, XLT minus EC, EC only).</p>
        <p className="text-slate-600"><strong className="text-slate-900">KEY:</strong> The proposal should always include ROI framing — "At $X cost of senior leader turnover, retaining just 2 additional leaders pays for the entire program."</p>
      </div>
    )
  },
  {
    name: "Stage 4: Proposal Sent / Negotiation", timing: "Week 5-8", color: "border-indigo-500",
    content: (
      <div className="space-y-3 text-sm">
        <p className="text-slate-600"><strong className="text-slate-900">Present proposal LIVE</strong> — never email without a walkthrough. Include ROI projection based on THEIR metrics.</p>
        <p className="text-slate-600"><strong className="text-slate-900">Objection Handling:</strong></p>
        <div className="space-y-2">
          {[
            { obj: '"Too expensive"', response: 'Break down per-leader cost vs. turnover cost of one senior leader ($250K-$500K+). "At $9,500/leader, the program pays for itself if you retain just one VP who was considering leaving."' },
            { obj: '"We have internal L&D"', response: '"SBLA is the operating system your internal team deploys, not a replacement. Think of us as the iOS to their app store."' },
            { obj: '"Can we do a pilot?"', response: '"Yes — minimum 10 leaders. We structure it so pilot results justify the enterprise rollout. The 60-day measurement data becomes your internal business case."' },
            { obj: '"What about AI/tech platforms?"', response: '"BetterUp gives you 4,000 coaches at scale. We give you the system that makes your existing leaders operate as one. Different problem, different solution."' },
            { obj: '"We need to think about it"', response: '"Completely understand. Can I ask — is there a specific concern, or has the priority shifted? I want to be respectful of your time."' },
          ].map((item, i) => (
            <div key={i} className="bg-slate-100 rounded-lg p-3">
              <div className="text-amber-700 text-xs font-semibold">{item.obj}</div>
              <p className="text-slate-600 text-xs mt-1">{item.response}</p>
            </div>
          ))}
        </div>
        <p className="text-slate-600 text-xs mt-2"><strong className="text-slate-900">Follow-up cadence:</strong> Day 1 (send summary) → Day 3 (check-in) → Day 7 (share relevant case study) → Day 14 (create urgency: "We typically need 3 months lead time for cohort preparation")</p>
      </div>
    )
  },
  {
    name: "Stage 5: Decision / Approvals", timing: "Week 6-10", color: "border-blue-500",
    content: (
      <div className="space-y-3 text-sm">
        <p className="text-slate-600"><strong className="text-slate-900">Multi-thread:</strong> Always have 2+ contacts in an account. If your champion leaves or gets deprioritized, you need a backup.</p>
        <p className="text-slate-600"><strong className="text-slate-900">Champion enablement materials:</strong></p>
        <ul className="list-disc ml-5 text-slate-600 space-y-1 text-xs">
          <li>1-page executive summary (not the full proposal — the "CEO version")</li>
          <li>ROI calculator showing cost-of-inaction vs. investment</li>
          <li>Relevant case study (Crocs for consumer brands, Resort case for hospitality, Retail Brand case for global enterprises)</li>
        </ul>
        <p className="text-slate-600"><strong className="text-slate-900">If CEO/CFO needs convincing:</strong> Offer a 15-minute "executive briefing" call. Jackie speaks to the CEO directly — peer-to-peer, not vendor-to-buyer.</p>
        <p className="text-slate-600"><strong className="text-slate-900">If stalling:</strong> "I want to be respectful of your time. Is there something specific that's giving you pause, or has the priority shifted?"</p>
      </div>
    )
  },
  {
    name: "Stage 6: Contracting", timing: "Week 8-12", color: "border-green-500",
    content: (
      <div className="space-y-3 text-sm">
        <p className="text-slate-600"><strong className="text-slate-900">Lock in start date:</strong> "We have [X] cohort slots available in [quarter]." Scarcity is real — SB has limited facilitator capacity.</p>
        <p className="text-slate-600"><strong className="text-slate-900">Upsell check at contracting:</strong></p>
        <ul className="list-disc ml-5 text-slate-600 space-y-1 text-xs">
          <li>Is there a Spark Ignite (keynote) opportunity to kick off the engagement?</li>
          <li>Should we include Exec Partnership (1:1 coaching) for the CEO/CHRO?</li>
          <li>Plan the Pulse graduation pathway — plant the seed now for continuity revenue</li>
        </ul>
        <p className="text-slate-600"><strong className="text-slate-900">Success metric agreement:</strong> Define what "success" looks like in the contract. This becomes the expansion business case 7 months later.</p>
      </div>
    )
  },
];

export default function SalesSystem() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-3xl font-bold text-slate-900">Sales System & Process</h2>
        <p className="text-slate-500 mt-2">A disciplined, repeatable sales process for a team with 14 hours/week total.</p>
      </div>

      {/* Urgency Signal Map */}
      <Section title="Urgency Signal Map — What Predicts High-Probability Deals" defaultOpen={true}>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="text-left py-2 text-slate-500 font-medium">Signal</th>
                <th className="text-left py-2 text-slate-500 font-medium">Specific Triggers</th>
                <th className="text-left py-2 text-slate-500 font-medium">Detection Method</th>
                <th className="text-left py-2 text-slate-500 font-medium">Priority</th>
                <th className="text-left py-2 text-slate-500 font-medium">Outreach Angle</th>
              </tr>
            </thead>
            <tbody>
              {urgencySignals.map((s, i) => (
                <tr key={i} className="border-b border-slate-200">
                  <td className="py-3 text-slate-900 font-medium">{s.signal}</td>
                  <td className="py-3 text-slate-600">{s.triggers}</td>
                  <td className="py-3 text-slate-500">{s.detection}</td>
                  <td className="py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      s.priority === 'highest' ? 'bg-red-500/20 text-red-700' :
                      s.priority === 'high' ? 'bg-amber-500/20 text-amber-700' :
                      'bg-blue-500/20 text-blue-700'
                    }`}>{s.priority}</span>
                  </td>
                  <td className="py-3 text-slate-600 italic max-w-xs">{s.angle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Decision-Maker Mapping */}
      <Section title="Decision-Maker Mapping — Who Actually Buys at $300K">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { role: "Economic Buyer", titles: "CEO, CHRO, CPO, COO", desc: "Signs the check. Cares about business outcomes, not leadership content. Speak in terms of execution risk, strategy drag, and ROI.", tactic: "Get on a call with them early. Offer a 15-min 'executive briefing' — Jackie peer-to-peer." },
            { role: "Champion", titles: "VP People, SVP HR, VP Talent, Chief Talent Officer", desc: "Found you, loves the vision, but can't authorize $300K alone. Needs ammunition to sell internally.", tactic: "Arm them with the 1-page exec summary, ROI calculator, and relevant case study. Coach them on how to pitch to their CEO." },
            { role: "Influencer", titles: "L&D Director, OD Manager, Learning Manager", desc: "Will evaluate your program details. Potential blocker if they feel threatened (SB replaces them).", tactic: "Position SBLA as the OS their team deploys: 'You own the rollout. We provide the system.' Never let them feel replaced." },
            { role: "Blocker", titles: "Procurement, Legal, CFO (for sign-off)", desc: "Won't say yes, but can say no. Cares about compliance, comparison, and cost justification.", tactic: "Pre-empt with ROI documentation, clear scope/timeline, and competitive comparison framed as 'why this isn't like other programs.'" },
          ].map((item, i) => (
            <div key={i} className="bg-slate-100 rounded-lg p-4">
              <div className="text-sb-gold font-semibold text-sm mb-1">{item.role}</div>
              <div className="text-slate-500 text-xs mb-2">Titles: {item.titles}</div>
              <p className="text-slate-600 text-xs mb-2">{item.desc}</p>
              <div className="flex items-start gap-1">
                <ArrowRight size={12} className="text-sb-gold mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 text-xs font-medium">{item.tactic}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-slate-500 text-xs mt-4"><strong className="text-slate-700">Multi-threading rule:</strong> Always have 2+ contacts in every account. If you only have the champion and they leave or get deprioritized, the deal dies. LinkedIn Sales Navigator filter: C-suite + "CHRO" or "Chief People Officer" at target company.</p>
      </Section>

      {/* Sales Sequence */}
      <div>
        <h3 className="font-display text-xl font-bold text-slate-900 mb-4">Full Sales Sequence — Stage by Stage</h3>
        <div className="space-y-3">
          {stages.map((stage, i) => (
            <div key={i} className={`bg-white rounded-xl border-l-4 ${stage.color} border border-slate-200 p-5`}>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-slate-900 font-semibold text-sm">{stage.name}</h4>
                <span className="text-slate-500 text-xs flex items-center gap-1"><Clock size={12} /> {stage.timing}</span>
              </div>
              {stage.content}
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Operating Rhythm */}
      <Section title="Weekly Operating Rhythm (14 hours total)">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="text-left py-2 text-slate-500 font-medium">Activity</th>
                <th className="text-center py-2 text-slate-500 font-medium">Jackie (7 hrs)</th>
                <th className="text-center py-2 text-slate-500 font-medium">Lindsay (7 hrs)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { activity: "Active deal advancement (calls, proposals, follow-up)", jackie: "2 hrs", lindsay: "3 hrs" },
                { activity: "Relationship/referral outreach", jackie: "2 hrs", lindsay: "1 hr" },
                { activity: "Discovery/diagnostic calls", jackie: "2 hrs", lindsay: "2 hrs" },
                { activity: "Pipeline review (together, weekly)", jackie: "0.5 hrs", lindsay: "0.5 hrs" },
                { activity: "LinkedIn thought leadership", jackie: "0.5 hrs", lindsay: "0.5 hrs" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-200">
                  <td className="py-3 text-slate-700">{row.activity}</td>
                  <td className="py-3 text-center text-sb-gold font-medium">{row.jackie}</td>
                  <td className="py-3 text-center text-blue-400 font-medium">{row.lindsay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-slate-500 text-xs mt-3">The 30-min joint pipeline review is non-negotiable. Every Monday, review: What deals advanced? What's stuck? What's the one thing that will move each deal forward this week?</p>
      </Section>
    </div>
  );
}
