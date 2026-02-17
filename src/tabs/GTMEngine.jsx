import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Zap, ArrowRight, ChevronDown, ChevronUp, XCircle, DollarSign, Clock, Users, Handshake, Mail, BookOpen, Linkedin, Building2 } from 'lucide-react';
import { REVENUE_SCENARIOS, METRICS } from '../data';

const fmt = (n) => n >= 1000000 ? `$${(n / 1000000).toFixed(1)}M` : n >= 1000 ? `$${(n / 1000).toFixed(0)}K` : `$${n}`;

const scenarioData = REVENUE_SCENARIOS.map(s => ({ ...s, label: s.scenario.split(':')[0] }));

const channels = [
  {
    rank: 1, name: "Existing Client Expansion", icon: Users, roiPerHour: "$15K-$25K", hoursWeek: "3-4",
    detail: `Your data proves this is the #1 lever. 73.7% win rate on existing clients vs 62.5% on new. 73% of revenue from existing accounts.`,
    actions: [
      "Map every won client for expansion: Crocs (already $465K — can Catalyst cascade to next 100 leaders?), TJH ($178K — bought 7 products, what's the renewal/new cohort?), Ent ($189K — XLT expansion underway), Kettle ($101K — Pulse + new SBLA cohort in pipeline), GGW ($84K — training credits pending), John Hancock ($75K — add SBLA to existing coaching?), Ovation ($35K→$121K already in Decision/Approvals + $100K director-level coaching in Lead)",
      "Execute quarterly expansion reviews: Every 90 days, review each active client for next-product opportunity using the cascade model: Workshop → SBLA → Pulse → Catalyst → New Cohort → New Division",
      "Trigger moments for expansion conversations: After 60-day results come in, after NPS collection, after executive sponsor gets promoted, when a new division/geography is added, when SBLA cohort completes",
      "Revenue potential from current base: Conservative estimate $800K-$1.2M from existing client expansion alone — nearly a third of the $3.4M remaining gap"
    ]
  },
  {
    rank: 2, name: "Systematized Referral Engine", icon: Handshake, roiPerHour: "$8K-$15K", hoursWeek: "2-3",
    detail: `All revenue is referral-based but it's ad-hoc. You already have an Advocate Referral Program draft — now execute it with discipline and tracking.`,
    actions: [
      "Activate top 10 referral sources immediately: Use the HubSpot 'Advocate Referral Source' contact list. Send Jackie's gratitude email (Email 1 from your Advocate Referral Plan) by end of Week 1. Follow up with Email 2 (value + nudge) 3 weeks later",
      "Trigger-based asks (specific moments): After 60-day SBLA results come in, after a client's executive sponsor gets promoted, after an NPS score of 9+, after a case study is approved, after a keynote where an attendee connects you to their CHRO",
      "Track in HubSpot: Mark contacts as 'Advocate Referral Source', use 'Referred Contacts' list, track referral→meeting→proposal→won conversion. Goal: 1-2 qualified intros per week within 60 days",
      "Referral network tiers: Tier 1 (highest value) — Current executive sponsors at won accounts (the CHRO at Crocs, the CEO at Congruex). Tier 2 — Conference connections and speaker bureau contacts. Tier 3 — Jackie's personal network (Harvard/Duke alumni, Denver community)",
      "Incentive: For every introduction that becomes a client, donate to charity of referrer's choice (already in your Advocate plan). This is elegant and authentic."
    ]
  },
  {
    rank: 3, name: "Strategic Partnerships", icon: Building2, roiPerHour: "$5K-$10K", hoursWeek: "1-2",
    detail: `Identify partners who already have trust with your buyers. These are not sales channels — they're credibility shortcuts.`,
    actions: [
      "PE/VC Firms (HIGHEST PRIORITY): Vista Equity Partners is already in your pipeline ($85K Contracting). PE firms need leadership acceleration post-acquisition. Approach: 'We help your portfolio companies close the leadership gap that kills post-acquisition execution.' Targets: Vista (warm), Thoma Bravo, Silver Lake, Advent International, Francisco Partners",
      "Management Consulting Firms: McKinsey, Bain, Deloitte do strategy but don't install leadership operating systems. Value exchange: They recommend SB for the 'people side' of transformation engagements. Start with individual partners, not the firm. Approach: 'We're the implementation partner for the leadership system your strategy depends on.'",
      "Executive Search Firms: Spencer Stuart, Heidrick & Struggles place C-suite executives who then need leadership alignment. Value exchange: SB helps their placed executives succeed (reducing search firm risk). Approach: 'When you place a new CEO/CHRO, recommend SBLA as the leadership system that accelerates their first 100 days.'",
      "Industry Associations: Global Gaming Women is already a partner. Expand to: National Restaurant Association (Alvarado, Tacala, Shamrock are restaurant brands), SHRM chapters (CHRO connections), YPO/EO (CEO networks — already have YPO deal)",
      "HR Tech Platforms: Workday, Lattice, BambooHR need premium services partners. Value exchange: SB is the high-touch complement to their platform. Longer-term play — pilot with one platform in 2026."
    ]
  },
  {
    rank: 4, name: "Keynote-to-Pipeline Conversion", icon: BookOpen, roiPerHour: "$3K-$8K", hoursWeek: "1",
    detail: `Keynotes are already working (Leading Authorities Inc. books them). But conversion is ad-hoc. Optimize the post-event capture.`,
    actions: [
      "Pre-keynote: Get attendee list from event organizer. Research top 5 target companies in the audience. Prepare personalized follow-up for each.",
      "During keynote: Include a specific CTA — 'If you want to see how the Leadership Operating System works for your team, my colleague Lindsay will be in the back of the room with diagnostic conversation slots for tomorrow.' OR offer a QR code to download the Crocs case study.",
      "Post-keynote sequence (within 48 hours): Day 0: Personal LinkedIn connection request from Jackie to every C-suite attendee who engaged. Day 1: Email with keynote recap + Crocs case study PDF. Day 3: Lindsay follows up with offer of 30-min diagnostic conversation. Day 7: Mail Jackie's book to top 5 prospects. Day 14: Second follow-up with specific urgency angle.",
      "Goal: Turn every keynote into 2-3 qualified discovery conversations. At 6-8 keynotes/year, that's 12-24 qualified conversations — potentially 3-4 enterprise deals."
    ]
  },
  {
    rank: 5, name: "Targeted Outbound (Pilot)", icon: Linkedin, roiPerHour: "$1K-$3K", hoursWeek: "1-2",
    detail: `NOT spray-and-pray. Executive-to-executive outreach leveraging Jackie's brand. 20 accounts, 90 days.`,
    actions: [
      "Select 20 accounts from the target list (Tab 5) with active urgency signals: new CEO/CHRO hired, post-M&A, 30%+ headcount growth, Glassdoor drops",
      "LinkedIn-first approach: Jackie sends personalized connection request + 3-line message referencing a specific trigger event. NOT a pitch. Example: 'Saw the [acquisition/CEO hire/reorg] news — going through something similar with a client right now. Would love to compare notes if you're open to a 15-min conversation.'",
      "Sequence: Week 1: LinkedIn connect. Week 2: If accepted, send value piece (case study or article). Week 3: Soft ask for diagnostic conversation. Week 6: If no response, have mutual connection make warm intro.",
      "Success criteria: 20 accounts → 8 connections → 3 conversations → 1 proposal in 90 days. If this ratio doesn't hold, kill the experiment."
    ]
  },
  {
    rank: 6, name: "Newsletter Monetization (~9K subs)", icon: Mail, roiPerHour: "$500-$1K", hoursWeek: "0.5",
    detail: `Pragmatic assessment: at $300K ACV, a 9K email list likely won't directly drive deals. BUT it has utility.`,
    actions: [
      "Segment by email domain: Identify company size/seniority using email domains. fortune500domains@company.com vs gmail.com. This is the only segmentation you have — use it.",
      "3-part 'Leadership OS' series (pilot): Email 1: 'The most expensive hidden cost in your organization' (pain). Email 2: 'What we learned measuring 80 leadership behaviors at Crocs' (proof). Email 3: 'A diagnostic question for your leadership team' (soft CTA for conversation).",
      "Track: replies, forwards, meeting requests. If <5 meeting requests from 3 emails to 9K people, deprioritize this channel entirely.",
      "Real value of the list: brand warmth, social proof deployment, and referral activation. When someone in a prospect organization Googles 'Spark Brilliance,' they should find a living, breathing thought leader — not a dormant brand."
    ]
  },
];

function ChannelSection({ channel }) {
  const [open, setOpen] = useState(false);
  const Icon = channel.icon;
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-100 transition-colors">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-sb-gold/20 flex items-center justify-center">
            <span className="text-sb-gold font-bold text-lg">#{channel.rank}</span>
          </div>
          <div>
            <div className="text-slate-900 font-semibold flex items-center gap-2">
              <Icon size={16} className="text-sb-gold" /> {channel.name}
            </div>
            <div className="text-slate-500 text-xs mt-0.5">{channel.detail.substring(0, 120)}...</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-xs text-slate-500">Est. ROI/hr</div>
            <div className="text-sm font-semibold text-green-400">{channel.roiPerHour}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-500">Hrs/week</div>
            <div className="text-sm font-semibold text-slate-600">{channel.hoursWeek}</div>
          </div>
          {open ? <ChevronUp size={18} className="text-slate-500" /> : <ChevronDown size={18} className="text-slate-500" />}
        </div>
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-slate-200 pt-4">
          <p className="text-slate-600 text-sm mb-4">{channel.detail}</p>
          <div className="space-y-3">
            {channel.actions.map((action, i) => (
              <div key={i} className="flex items-start gap-2">
                <ArrowRight size={14} className="text-sb-gold mt-1 flex-shrink-0" />
                <p className="text-slate-600 text-xs leading-relaxed">{action}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function GTMEngine() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-3xl font-bold text-slate-900">Go-To-Market Engine</h2>
        <p className="text-slate-500 mt-2">The prioritized, executable plan for hitting $5M with 14 hours/week of combined selling time.</p>
      </div>

      {/* Revenue Scenarios */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h3 className="font-display text-xl font-bold text-slate-900 mb-1">Revenue Model: Three Paths to $5M</h3>
        <p className="text-slate-500 text-xs mb-4">Recommendation: Scenario A — fewer, bigger deals through expansion. It's the only path that works with 14 hrs/week.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={scenarioData} margin={{ left: 0, right: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="label" stroke="#94a3b8" fontSize={11} />
              <YAxis stroke="#94a3b8" fontSize={11} tickFormatter={v => `${v}`} />
              <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="deals" name="Deals Needed" fill="#9f8347" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="space-y-3">
            {REVENUE_SCENARIOS.map((s, i) => (
              <div key={i} className={`p-3 rounded-lg border ${i === 0 ? 'bg-sb-gold/10 border-sb-gold/30' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex items-center justify-between">
                  <span className={`font-semibold text-sm ${i === 0 ? 'text-sb-gold' : 'text-slate-600'}`}>{s.scenario} {i === 0 && '← RECOMMENDED'}</span>
                  <span className="text-slate-500 text-xs">{fmt(s.acv)} ACV</span>
                </div>
                <p className="text-slate-500 text-xs mt-1">{s.desc}</p>
                {i === 0 && <p className="text-sb-gold text-xs mt-1 font-medium">Achievable with expansion-heavy strategy + 1 sales hire. Requires disciplined deprioritization of sub-$100K deals.</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Channel Strategy - Ranked */}
      <div>
        <h3 className="font-display text-xl font-bold text-slate-900 mb-4">Channel Strategy — Ranked by ROI per Hour</h3>
        <div className="space-y-3">
          {channels.map(ch => <ChannelSection key={ch.rank} channel={ch} />)}
        </div>
      </div>

      {/* What to IGNORE */}
      <div className="bg-red-50 border border-red-500/20 rounded-xl p-6">
        <h3 className="text-lg font-bold text-red-700 mb-3 flex items-center gap-2">
          <XCircle size={20} /> What to Explicitly IGNORE
        </h3>
        <p className="text-slate-500 text-xs mb-4">At 14 hours/week and $300K ACV, these channels are negative ROI for your stage:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { name: "Paid Advertising", reason: "At $300K ACV, you need ~17 deals. No ad platform targets CHROs buying leadership operating systems." },
            { name: "SEO/Content Engine", reason: "Your buyer doesn't Google 'leadership development programs.' They get referred by a peer or see Jackie speak." },
            { name: "Social Media (except LinkedIn)", reason: "Twitter, Instagram, TikTok have zero relevance at $300K+ B2B executive sales." },
            { name: "Building a Marketing Team", reason: "At 17 deals/year, you need a sales hire, not a marketing hire. Marketing team at $10M+, not $5M." },
            { name: "Webinar Funnels", reason: "Webinars drive $5K-$50K deals. Your deal is a $300K executive conversation, not a funnel conversion." },
            { name: "Any Channel > 2 hrs/week", reason: "If it takes more than 2 hrs/week ongoing maintenance, it's stealing from the 14 hrs that should go to deals." },
          ].map((item, i) => (
            <div key={i} className="bg-slate-100 rounded-lg p-3">
              <div className="text-red-700 text-sm font-semibold flex items-center gap-1">
                <XCircle size={12} /> {item.name}
              </div>
              <p className="text-slate-400 text-xs mt-1">{item.reason}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
