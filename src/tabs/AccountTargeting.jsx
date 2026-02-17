import React, { useState } from 'react';
import { Crosshair, ChevronDown, ChevronUp, ArrowRight, Copy, Mail, Linkedin, Users, BookOpen } from 'lucide-react';

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

const tier1 = [
  { account: "Crocs — Catalyst Cascade", trigger: "SBLA year 2+, all 80 metrics improved", entry: "Existing: VP HR (known contact)", approach: "Expansion: 'Next 100 directors through Catalyst'" },
  { account: "PENN Entertainment (corp + casinos)", trigger: "$425K in Proposal stage + 2 Lead entries for COO/14 casinos", entry: "Existing: Jenny (pilot contact) + COO", approach: "Multi-thread: advance $425K deal while scoping 14-casino rollout" },
  { account: "Ovation — Full Partnership", trigger: "$121K in Decision + $100K director coaching in Lead", entry: "Existing: Jess's org (known)", approach: "Bundle: Team Dynamics + Exec Partnership + Pulse → $221K" },
  { account: "MGM Resorts — 2026 + Marketing", trigger: "$148K in Decision + Marketing TBD in Lead", entry: "Existing: Multiple contacts across divisions", approach: "Land the $148K deal, then expand to Marketing division" },
  { account: "Kettle Expansion", trigger: "Pulse + new SBLA cohort in Lead stage", entry: "Existing: Known contact from $101K deal", approach: "Expansion: Pulse graduates + new cohort = $150K+" },
  { account: "Bluberi Gaming (Contracting)", trigger: "$735K in Contracting — largest deal in pipeline", entry: "New Client: Final contract negotiation", approach: "Close: Get ink on paper. This is 15% of the annual target." },
  { account: "Swickard Auto Group", trigger: "$624K in Decision/Approvals — SBLA & Catalyst", entry: "New: CEO & CFO (proposal sent)", approach: "Advance: Get Jackie on CEO call, use auto industry urgency" },
  { account: "Exelon — SBLA Expansion", trigger: "$100K SBLA in Qualified after $21.5K offsite won", entry: "Existing: Built relationship through offsite", approach: "Natural expansion: 'Your leaders experienced 2 days — imagine 7 months'" },
  { account: "Vista Consulting (Contracting)", trigger: "$85K SBLA in Contracting", entry: "Existing: Vista relationship", approach: "Close: Then explore Vista Equity portfolio company angle" },
  { account: "Continuum — SBLA", trigger: "$127.5K in Needs Assessment", entry: "Existing client", approach: "Advance: Move to proposal within 2 weeks" },
];

const tier2 = [
  { account: "Yum! Brands", trigger: "New deal in Lead — massive QSR enterprise", entry: "CHRO/CPO — Taco Bell connection via Tacala/Shamrock", approach: "Referral from Alvarado Restaurant Nation (Rob Alvarado)" },
  { account: "PNC Financial", trigger: "In Lead — financial services", entry: "CHRO or Chief Talent Officer", approach: "Leverage John Hancock proof point in financial services" },
  { account: "Marriott International", trigger: "In Lead — hospitality giant", entry: "SVP Leadership Development", approach: "Leverage MGM/Venetian hospitality proof points + resort case study" },
  { account: "Vista Equity Portfolio Companies", trigger: "In Lead — PE firm with 80+ portfolio companies", entry: "Vista operating team or individual PortCo CHROs", approach: "Use Vista Consulting ($85K) as proof. 'We're already working with Vista — here's what we do for portfolio companies.'" },
  { account: "Mars United Commerce", trigger: "In Lead", entry: "CHRO or VP People", approach: "Consumer goods parallel to Crocs — use Crocs case study" },
  { account: "RedPeak — SBLA++", trigger: "$75K in Needs Assessment", entry: "Known contact (in pipeline)", approach: "Advance to proposal — Denver-based, easy to build relationship" },
  { account: "LnW (Light & Wonder)", trigger: "$68K Proposal + corporate 2027 in Qualified", entry: "Existing relationship (gaming industry)", approach: "Close the $68K, then scope 2027 corporate program" },
  { account: "Alvarado Group — SBLA Pilot", trigger: "$100K in Needs Assessment", entry: "Known: Rob Alvarado (YPO connection)", approach: "Convert pilot to full program — minimum 10 leaders" },
  { account: "VideoAmp — SBLA", trigger: "In Qualified/Discovery", entry: "New client, ad tech/media", approach: "Discovery: Assess urgency and sponsor level" },
  { account: "Nemetscheck Group", trigger: "In Lead — German construction tech, $6B+ revenue", entry: "CHRO for North American operations", approach: "Global retail brand case study as proof (international cohort)" },
  { account: "Admiral Beverage — Partner Mining", trigger: "In Lead — existing client ($22K workshop won)", entry: "Existing: Built relationship through Admiral Workshop", approach: "Expansion: Workshop → SBLA cascade" },
  { account: "Tacala — David Morrison", trigger: "In Qualified/Discovery — major Taco Bell franchisee", entry: "David Morrison (named contact)", approach: "Alvarado Restaurant Nation as proof point (same industry)" },
  { account: "Shamrock — Taco Bell", trigger: "In Qualified/Discovery — Taco Bell franchisee", entry: "Heather's contact", approach: "QSR cluster strategy: Tacala + Shamrock + Alvarado = industry credibility" },
  { account: "GGW — Training Credits Expansion", trigger: "$25K in Qualified + existing SBLA relationship", entry: "Existing: GGW partnership", approach: "Combine with Venetian TBD ($0 in Lead) for gaming cluster" },
  { account: "Venetian Resort — 2026 TBD", trigger: "In Lead — extra funding + GGW credit", entry: "Existing: Ryan (from $20K masterclass)", approach: "Expansion: Masterclass → SBLA for their leadership team" },
  { account: "Code3 — TBD", trigger: "In Needs Assessment (no amount yet)", entry: "New client", approach: "Qualify: What's the trigger? Who's the sponsor? What's the scope?" },
  { account: "$3.1B Saudi client (Dave Nelson)", trigger: "In Lead — massive international opportunity", entry: "Dave Nelson referral", approach: "Qualify carefully: international logistics, cultural fit, timeline" },
  { account: "Dudley Fund — SBLA?", trigger: "In Lead", entry: "Heather's contact", approach: "Discovery call to assess fit and scope" },
  { account: "Bellwether — SBLA & Keynote", trigger: "In Qualified (no amount)", entry: "Unknown", approach: "Qualify: Who's the sponsor? What's the urgency?" },
  { account: "Solace Roofing", trigger: "In Lead — construction/trades", entry: "Heather's contact", approach: "Assess: Is this $300K ACV material or a sub-$50K workshop?" },
];

const templates = [
  {
    name: "Warm Referral Introduction",
    type: "Email from mutual connection",
    subject: "Connecting you with Jackie Insinger — leadership systems",
    body: `Hi [Prospect First Name],

I wanted to connect you with Jackie Insinger, founder of Spark Brilliance. Her team works with companies navigating [growth/transformation/integration] to install what they call a Leadership Operating System — a shared system for how leaders communicate, make decisions, and hold accountability.

I thought of you because [specific reason: "you mentioned the leadership challenge after the acquisition" / "I know you're scaling the team rapidly" / "the reorg sounded like exactly what her team helps with"].

Jackie's team has done this for Crocs, MGM, Nestlé, and others — with measurable results (all 80 leadership metrics improved at Crocs). I'll let her share more if you're open to a quick conversation.

Connecting you both here.

Best,
[Referrer Name]`
  },
  {
    name: "Post-Keynote Follow-Up",
    type: "Email from Lindsay to engaged attendee",
    subject: "Following up from Jackie's keynote at [Event]",
    body: `Hi [First Name],

I'm Lindsay Faussone, Jackie's partner at Spark Brilliance. Thank you for engaging during Jackie's session at [Event] — your question about [specific topic they raised] really resonated.

Jackie mentioned you might be interested in seeing how the Leadership Operating System works in practice. I've attached our case study from [relevant company — Crocs for consumer, resort for hospitality] — the results were remarkable.

If you're navigating [the challenge they mentioned], I'd love to offer a 30-minute diagnostic conversation to explore whether our approach could help. No pitch — just an honest assessment.

Would next [Tuesday/Thursday] work for a quick call?

Best,
Lindsay Faussone
Chief Impact Officer, Spark Brilliance`
  },
  {
    name: "Executive LinkedIn DM",
    type: "Jackie's personal outreach (cold but credible)",
    subject: "N/A — LinkedIn message",
    body: `Hi [First Name],

Saw the news about [specific trigger: new role / acquisition / reorg / growth milestone]. Navigating something similar right now with a client in [their industry or adjacent].

The pattern we keep seeing: strategy moves faster than leadership capacity, and the gap costs more than anyone budgets for.

If you're open to comparing notes, I'd love a 15-minute conversation. No agenda — just curious if what we're seeing resonates.

— Jackie`
  },
  {
    name: "Champion Enablement Email",
    type: "Email a champion sends to their CEO for budget approval",
    subject: "Leadership investment proposal — Spark Brilliance",
    body: `Hi [CEO Name],

I've been evaluating a leadership development approach that I believe addresses the [alignment / execution / retention] challenge we discussed in [context].

Spark Brilliance installs what they call a Leadership Operating System — not training, but infrastructure for how our leaders communicate, make decisions, and hold accountability. Their client list includes Crocs, MGM, Nestlé, and Accenture.

Key data points:
• At Crocs, PwC-conducted 360s showed improvement across all 80 evaluated leadership metrics
• 73% improvement in communication effectiveness across their client base
• 37% reduction in burnout — directly impacts our retention numbers
• 93% of leaders report improved alignment within 60 days

The investment for our team of [X leaders] would be approximately [range]. Given that replacing one senior leader costs $250K-$500K+, the ROI threshold is retaining just 1-2 leaders who might otherwise leave.

I'd recommend a 15-minute call between you and their CEO, Jackie Insinger (Duke BA, Harvard MA, MIT Neuroscience cert, #1 bestselling author). It would be peer-to-peer, not a sales pitch.

Can I set that up for next week?

[Champion Name]`
  },
  {
    name: "Stalled Deal Re-Engagement",
    type: "For deals that have gone quiet",
    subject: "Checking in — and something I thought you'd find valuable",
    body: `Hi [First Name],

I know things can shift quickly, and I wanted to be respectful of where this falls on your priority list.

In the meantime, I thought you'd find this relevant — we just completed a program with [anonymized but relevant company type] and the results were striking: [specific metric, e.g., "100% improvement in observed flight risk among participating leaders"].

If the timing has shifted, I completely understand. But if the [original pain point they shared] is still on your radar, I'd love to reconnect — even just 15 minutes to see if the conversation is still worth having.

Either way, I appreciate the time you've already invested with us.

Best,
Lindsay`
  },
];

export default function AccountTargeting() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-3xl font-bold text-slate-900">Account Targeting & Outreach</h2>
        <p className="text-slate-500 mt-2">The specific target list, outreach playbooks, and network mining framework.</p>
      </div>

      {/* ICP */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h3 className="font-display text-xl font-bold text-slate-900 mb-4">Ideal Customer Profile — Sharpened from Data</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Company Size", value: "$500M+ revenue or 1,000+ employees", detail: "Your won deals cluster at mid-enterprise to large enterprise. Sub-500-employee companies rarely authorize $300K." },
            { label: "Top Industries", value: "Gaming/Hospitality, Consumer Brands, Financial Services, Infrastructure", detail: "From data: MGM, Venetian, Caesars, PENN (gaming); Crocs (consumer); John Hancock, Ent (financial); Congruex (infrastructure)." },
            { label: "Decision-Maker", value: "CEO, CHRO, CPO, SVP People", detail: "NOT L&D managers or HR coordinators. If the sponsor can't authorize $100K+, the deal will stall." },
            { label: "Trigger Events", value: "New C-suite hire, M&A, 30%+ growth, culture crisis, strategic pivot", detail: "No trigger = no urgency = deal dies. Always validate the trigger in discovery." },
          ].map((item, i) => (
            <div key={i} className="bg-slate-100 rounded-lg p-4">
              <div className="text-sb-gold text-xs font-semibold uppercase tracking-wider mb-1">{item.label}</div>
              <div className="text-slate-900 text-sm font-medium mb-2">{item.value}</div>
              <p className="text-slate-500 text-xs">{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-red-50 border border-red-500/20 rounded-lg p-3">
          <p className="text-red-700 text-xs font-semibold">Disqualifying Signals:</p>
          <p className="text-slate-500 text-xs">Under 500 employees • No executive sponsor • Budget under $100K • "Just exploring" with no trigger • Timeline beyond 6 months • Champion is L&D coordinator with no C-suite access • Company in financial distress (can't fund discretionary programs)</p>
        </div>
      </div>

      {/* Target Account Lists */}
      <Section title={`Tier 1 — Highest Probability (${tier1.length} accounts: warm connections, active triggers, ICP match)`} defaultOpen={true}>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="text-left py-2 text-slate-500 font-medium">Account</th>
                <th className="text-left py-2 text-slate-500 font-medium">Trigger / Why Now</th>
                <th className="text-left py-2 text-slate-500 font-medium">Entry Point</th>
                <th className="text-left py-2 text-slate-500 font-medium">Recommended Approach</th>
              </tr>
            </thead>
            <tbody>
              {tier1.map((a, i) => (
                <tr key={i} className="border-b border-slate-200">
                  <td className="py-2 text-slate-900 font-medium">{a.account}</td>
                  <td className="py-2 text-slate-600">{a.trigger}</td>
                  <td className="py-2 text-slate-600">{a.entry}</td>
                  <td className="py-2 text-slate-600">{a.approach}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title={`Tier 2 — Strong ICP Match (${tier2.length} accounts: need referral path or strategic intro)`}>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="text-left py-2 text-slate-500 font-medium">Account</th>
                <th className="text-left py-2 text-slate-500 font-medium">Trigger / Status</th>
                <th className="text-left py-2 text-slate-500 font-medium">Entry Point</th>
                <th className="text-left py-2 text-slate-500 font-medium">Approach</th>
              </tr>
            </thead>
            <tbody>
              {tier2.map((a, i) => (
                <tr key={i} className="border-b border-slate-200">
                  <td className="py-2 text-slate-900 font-medium">{a.account}</td>
                  <td className="py-2 text-slate-600">{a.trigger}</td>
                  <td className="py-2 text-slate-600">{a.entry}</td>
                  <td className="py-2 text-slate-600">{a.approach}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Outreach Templates */}
      <div>
        <h3 className="font-display text-xl font-bold text-slate-900 mb-4">Outreach Templates — Copy-Paste Ready</h3>
        <div className="space-y-4">
          {templates.map((t, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-slate-900 font-semibold text-sm">{t.name}</h4>
                  <p className="text-slate-500 text-xs">{t.type}</p>
                </div>
                {t.subject !== "N/A — LinkedIn message" && (
                  <div className="text-xs text-slate-500">Subject: <span className="text-slate-600 italic">{t.subject}</span></div>
                )}
              </div>
              <pre className="bg-slate-100 rounded-lg p-4 text-xs text-slate-600 whitespace-pre-wrap font-sans leading-relaxed overflow-x-auto">{t.body}</pre>
            </div>
          ))}
        </div>
      </div>

      {/* Network Mining */}
      <Section title="Network Mining Framework">
        <div className="space-y-4">
          <p className="text-slate-600 text-sm">Categorize Jackie and Lindsay's networks and work each category with discipline:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { cat: "Active Clients", cadence: "Monthly check-in + quarterly expansion review", script: "Review engagement health, surface expansion opportunities, ask for referrals after positive results" },
              { cat: "Past Clients", cadence: "Quarterly value touch", script: "'Thinking of you — saw [news about their company]. Here's what we're seeing in [their industry].' Re-engagement: 3-touch over 3 weeks" },
              { cat: "Conference Connections", cadence: "Post-event within 48 hours, then monthly", script: "Connect on LinkedIn, send keynote recap, offer diagnostic conversation" },
              { cat: "Speaker Bureau Contacts", cadence: "Monthly with Leading Authorities Inc.", script: "Review upcoming bookings, identify target companies in audience, plan post-event capture" },
              { cat: "Personal Network (Harvard/Duke/Denver)", cadence: "Bi-monthly personal outreach", script: "Authentic reconnection: 'What are you working on? Here's what I'm excited about.' Ask: 'Know anyone navigating leadership challenges?'" },
              { cat: "Industry Association Contacts (GGW, YPO)", cadence: "Quarterly engagement", script: "Event participation, speaking opportunities, member introductions" },
            ].map((item, i) => (
              <div key={i} className="bg-slate-100 rounded-lg p-4">
                <div className="text-sb-gold text-xs font-semibold mb-1">{item.cat}</div>
                <div className="text-slate-500 text-xs mb-2">Cadence: {item.cadence}</div>
                <p className="text-slate-600 text-xs">{item.script}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Lead Nurture */}
      <Section title="Lead Nurture Cadence">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { type: "Warm Leads (active interest, not yet ready)", color: "border-green-500", cadence: "Week 1: Discovery call. Week 2: Send book. Week 4: Share case study. Week 6: Check in. Week 8: Re-qualify or park.", trigger: "They mention budget cycle, timing, or a specific future event" },
            { type: "Long-Cycle Opportunities (6+ months out)", color: "border-blue-500", cadence: "Monthly: LinkedIn engagement (comment on their posts). Quarterly: Value email (industry insight, not a pitch). Bi-annually: Personal note from Jackie.", trigger: "New C-suite hire, company in the news, industry event" },
            { type: "Not-Yet-Ready Referrals", color: "border-amber-500", cadence: "Immediate: Personal thank-you to referrer. Week 1: Light intro email. Week 3: Value piece (case study). Month 2: Reconnect. Month 4: Re-qualify or park.", trigger: "They express interest, ask a question, or engage with content" },
          ].map((item, i) => (
            <div key={i} className={`bg-slate-100 rounded-lg p-4 border-l-4 ${item.color}`}>
              <div className="text-slate-900 text-sm font-semibold mb-2">{item.type}</div>
              <p className="text-slate-600 text-xs mb-2">{item.cadence}</p>
              <div className="text-xs text-slate-500"><strong className="text-slate-600">Conversion trigger:</strong> {item.trigger}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
