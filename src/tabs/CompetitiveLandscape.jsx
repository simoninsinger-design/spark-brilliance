import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';
import { Shield, Star, AlertCircle, CheckCircle, ArrowRight, Zap } from 'lucide-react';

const competitors = [
  { name: "Spark Brilliance", x: 90, y: 30, tier: "self", color: "#9f8347", size: 200 },
  { name: "BetterUp", x: 25, y: 95, tier: "tech", color: "#ef4444", size: 180 },
  { name: "CoachHub", x: 30, y: 85, tier: "tech", color: "#f97316", size: 140 },
  { name: "Torch", x: 35, y: 75, tier: "tech", color: "#f97316", size: 100 },
  { name: "FranklinCovey", x: 55, y: 70, tier: "direct", color: "#3b82f6", size: 160 },
  { name: "CCL", x: 70, y: 55, tier: "direct", color: "#3b82f6", size: 150 },
  { name: "Korn Ferry", x: 60, y: 65, tier: "direct", color: "#3b82f6", size: 170 },
  { name: "Blanchard", x: 50, y: 60, tier: "direct", color: "#3b82f6", size: 130 },
  { name: "RHR International", x: 85, y: 20, tier: "direct", color: "#3b82f6", size: 90 },
  { name: "Navalent", x: 88, y: 15, tier: "direct", color: "#3b82f6", size: 80 },
  { name: "Hone", x: 20, y: 90, tier: "tech", color: "#f97316", size: 90 },
  { name: "Internal L&D", x: 40, y: 40, tier: "internal", color: "#64748b", size: 200 },
  { name: "Do Nothing", x: 10, y: 10, tier: "internal", color: "#64748b", size: 250 },
];

function CompetitorCard({ name, positioning, pricing, where_sb_wins, where_sb_loses, color }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200">
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-3 h-3 rounded-full`} style={{ background: color }} />
        <h4 className="text-slate-900 font-semibold text-sm">{name}</h4>
      </div>
      <div className="space-y-2 text-xs">
        <div><span className="text-slate-500">Positioning:</span> <span className="text-slate-600">{positioning}</span></div>
        <div><span className="text-slate-500">Pricing:</span> <span className="text-slate-600">{pricing}</span></div>
        <div className="flex items-start gap-1">
          <CheckCircle size={12} className="text-green-400 mt-0.5 flex-shrink-0" />
          <span className="text-green-700">{where_sb_wins}</span>
        </div>
        <div className="flex items-start gap-1">
          <AlertCircle size={12} className="text-red-400 mt-0.5 flex-shrink-0" />
          <span className="text-red-700">{where_sb_loses}</span>
        </div>
      </div>
    </div>
  );
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.[0]) {
    const d = payload[0].payload;
    return (
      <div className="bg-white border border-slate-300 rounded-lg p-3 text-xs">
        <div className="font-bold text-slate-900">{d.name}</div>
        <div className="text-slate-500">Customization: {d.x}/100</div>
        <div className="text-slate-500">Scalability: {d.y}/100</div>
      </div>
    );
  }
  return null;
};

export default function CompetitiveLandscape() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-3xl font-bold text-slate-900">Competitive Landscape</h2>
        <p className="text-slate-500 mt-2">Who you're competing against and exactly how to position in live sales conversations.</p>
      </div>

      {/* 2x2 Positioning Matrix */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h3 className="font-display text-xl font-bold text-slate-900 mb-1">Competitive Positioning Map</h3>
        <p className="text-slate-500 text-xs mb-4">X-axis: Customization/Depth — Y-axis: Scalability/Technology</p>
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis type="number" dataKey="x" domain={[0, 100]} stroke="#94a3b8" fontSize={10} label={{ value: "Customization / Depth →", position: "bottom", offset: 0, style: { fill: '#64748b', fontSize: 11 } }} />
            <YAxis type="number" dataKey="y" domain={[0, 100]} stroke="#94a3b8" fontSize={10} label={{ value: "Scalability / Technology →", angle: -90, position: "insideLeft", style: { fill: '#64748b', fontSize: 11 } }} />
            <Tooltip content={<CustomTooltip />} />
            <Scatter data={competitors}>
              {competitors.map((entry, i) => (
                <Cell key={i} fill={entry.color} fillOpacity={entry.tier === 'self' ? 1 : 0.7} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-center gap-6 mt-2 text-xs">
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-sb-gold inline-block" /> Spark Brilliance</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-blue-500 inline-block" /> Boutique (Tier 1)</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-orange-500 inline-block" /> Tech Platform (Tier 2)</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-slate-500 inline-block" /> Internal (Tier 3)</span>
        </div>
      </div>

      {/* Tier 1: Direct Competitors */}
      <div>
        <h3 className="font-display text-xl font-bold text-slate-900 mb-1 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-500" /> Tier 1 — Boutique Leadership Consultancies
        </h3>
        <p className="text-slate-500 text-xs mb-4">Compete for the same $200K-$500K executive leadership deals</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CompetitorCard name="FranklinCovey" positioning="Large-scale leadership programs. '7 Habits' franchise. Content licensing model." pricing="$1K-$5K/leader for off-the-shelf; $200K+ for enterprise custom" where_sb_wins="SB delivers measurable 360° outcomes; FC sells content, not transformation. SB's cascade model creates deeper organizational shift." where_sb_loses="FC has massive brand recognition and a sales army. Buyers often default to known names." color="#3b82f6" />
          <CompetitorCard name="Center for Creative Leadership (CCL)" positioning="Research-institution prestige. Open-enrollment and custom programs for senior leaders." pricing="$10K-$15K/leader for open enrollment; $300K-$1M+ for enterprise custom" where_sb_wins="SB is faster to deploy (7 months vs 12+), more practical, and measures everything baseline-to-completion. CCL is academic; SB is activation." where_sb_loses="CCL has 50+ years of research credibility and global campus infrastructure." color="#3b82f6" />
          <CompetitorCard name="Korn Ferry" positioning="Full-service talent advisory. Leadership development is one division of a massive firm." pricing="$500K-$5M+ for enterprise programs" where_sb_wins="SB is not a department inside a $2B consulting firm. Clients get Jackie + a dedicated team, not a rotating cast of consultants. Lower cost, higher intimacy." where_sb_loses="Korn Ferry has existing relationships with every CHRO in the Fortune 500. Procurement departments trust the brand." color="#3b82f6" />
          <CompetitorCard name="Blanchard (Ken Blanchard Cos.)" positioning="'Situational Leadership' franchise. Content licensing and certification model." pricing="$1K-$3K/leader for certification; enterprise custom varies" where_sb_wins="Blanchard sells a 40-year-old model. SB's neuroscience-backed approach is genuinely modern. Blanchard doesn't measure outcomes the way SB does." where_sb_loses="Blanchard has the 'Situational Leadership' brand moat — it's what L&D managers learned in school." color="#3b82f6" />
          <CompetitorCard name="RHR International" positioning="Boutique C-suite advisory. Executive assessment and coaching." pricing="$300K-$1M+ for enterprise; premium per-executive pricing" where_sb_wins="SB scales beyond the C-suite to director level (Catalyst). RHR stays in the boardroom. SB is a system, not 1:1 coaching at scale." where_sb_loses="RHR has deeper C-suite relationships and board-level advisory credibility." color="#3b82f6" />
          <CompetitorCard name="Navalent" positioning="Boutique executive consulting focused on org design + leadership during transformation." pricing="$250K-$750K for transformation engagements" where_sb_wins="SB has a productized system (SBLA) with measurable outcomes. Navalent is bespoke consulting — harder to compare, harder to justify ROI." where_sb_loses="Navalent positions as strategy consultants, not leadership trainers — different perceived category." color="#3b82f6" />
        </div>
      </div>

      {/* Tier 2: Tech Platforms */}
      <div>
        <h3 className="font-display text-xl font-bold text-slate-900 mb-1 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-orange-500" /> Tier 2 — Tech-Enabled Coaching Platforms
        </h3>
        <p className="text-slate-500 text-xs mb-4">Eating market share from below with scale and lower price points</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CompetitorCard name="BetterUp" positioning="$4.7B valuation. 4,000+ coaches. AI-enabled platform. 'Whole-person' coaching at scale." pricing="~$499/user/month (~$6K/year/person). Enterprise contracts $1M-$5M+." where_sb_wins="BetterUp is 4,000 disconnected coaching conversations. SB is one unified leadership operating system. BetterUp can't deliver the executive intimacy or organizational transformation SB provides." where_sb_loses="BetterUp has massive scale, a technology platform, and VC-backed sales teams. Procurement likes 'platform' purchases." color="#f97316" />
          <CompetitorCard name="CoachHub" positioning="$100M+ funded. 3,500+ coaches globally. AI-powered matching. European-strong." pricing="~$500-$700/user/month. Enterprise deals $200K-$1M+." where_sb_wins="Same as BetterUp — individual coaching at scale doesn't change organizational behavior. SB changes the system, not just individuals." where_sb_loses="CoachHub has strong European presence and platform-first positioning that appeals to global enterprises." color="#f97316" />
          <CompetitorCard name="Torch" positioning="$25M+ funded. Platform + coaches. 360 feedback integration. Mid-market focus." pricing="~$400-$600/user/month for coaching + platform." where_sb_wins="Torch competes on features (360 integration, analytics). SB competes on outcomes (73% communication improvement, 37% burnout reduction). Features don't change behavior." where_sb_loses="Torch has a technology moat and integrates with HRIS systems. Easier to 'buy' through procurement." color="#f97316" />
          <CompetitorCard name="Hone" positioning="Group-based live learning platform. Modern 'training' alternative." pricing="$300-$500/user/year for platform access." where_sb_wins="Hone is commoditized group learning. No customization, no executive depth, no cascade model. Not in the same conversation at $300K ACV." where_sb_loses="Hone is cheap and fast. For companies that want to check the 'leadership development' box without real investment." color="#f97316" />
        </div>
      </div>

      {/* Tier 3: Internal */}
      <div>
        <h3 className="font-display text-xl font-bold text-slate-900 mb-1 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-slate-500" /> Tier 3 — Internal Alternatives (The Real Competitor)
        </h3>
        <p className="text-slate-500 text-xs mb-4">The most common reason deals stall isn't a competitor — it's inertia</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CompetitorCard name="Internal L&D Teams" positioning="'We'll build it ourselves.' HR/L&D leader hires facilitators or buys off-the-shelf content." pricing="$0 incremental (sunk cost in existing headcount) — perceived as 'free'" where_sb_wins="Internal teams lack neuroscience framework, measurement infrastructure, and executive-level facilitation credibility. SBLA is the OS that internal teams DEPLOY, not a replacement for them." where_sb_loses="Perceived cost of $0. Political preference for internal control. L&D manager protecting their budget/relevance." color="#64748b" />
          <CompetitorCard name="Do Nothing / Status Quo" positioning="'Leadership is fine.' 'We have bigger priorities.' 'Let's revisit next quarter.'" pricing="$0 (but costs millions in misalignment, attrition, and execution drag)" where_sb_wins="Quantify the cost of inaction: 30-50% of transformation ROI lost when leadership lags strategy (McKinsey). One senior leader turnover = $500K+ replacement cost." where_sb_loses="Inertia always wins unless there's a triggering event. No trigger = no deal." color="#64748b" />
        </div>
      </div>

      {/* Asymmetric Advantages */}
      <div className="bg-sb-gold/10 border border-sb-gold/30 rounded-xl p-6">
        <h3 className="font-display text-xl font-bold text-sb-gold mb-4 flex items-center gap-2">
          <Star size={20} /> Spark Brilliance's Asymmetric Advantages
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Measurable 360° Tracking", detail: "Baseline-to-completion measurement with PwC-validated 360s. Crocs: all 80 metrics improved. No competitor does this consistently." },
            { title: "'Leadership Operating System' Framing", detail: "Not training, not coaching — infrastructure. This creates a different buying category. Competitors sell programs; SB sells a system." },
            { title: "Jackie's Credibility Stack", detail: "Duke BA + Harvard MA + MIT Neuro cert + #1 bestselling book + Marshall Goldsmith endorsement + Fortune 500 roster. No boutique competitor has this credential density." },
            { title: "Cascade Model = Multi-Year Revenue", detail: "Exec → Director → Mid-level creates 3-4 year engagement arcs. Crocs is in year 2+. TJH bought 7 products. This is a land-and-expand machine." },
            { title: "Keynote as Top-of-Funnel", detail: "Jackie's keynotes (via Leading Authorities Inc.) create executive visibility that no competitor can replicate. It's a relationship-building machine disguised as a speaking engagement." },
            { title: "Fortune 500 Proof Points", detail: "Crocs, MGM, Nestlé, Accenture, SF 49ers, Hilton, Intuit, P&G. This roster destroys the 'never heard of you' objection instantly." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle size={16} className="text-sb-gold mt-1 flex-shrink-0" />
              <div>
                <div className="text-slate-900 text-sm font-semibold">{item.title}</div>
                <div className="text-slate-500 text-xs mt-0.5">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Differentiation Statements */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h3 className="font-display text-xl font-bold text-slate-900 mb-4">Sharpened Differentiation Language</h3>
        <p className="text-slate-500 text-xs mb-4">Use these in live sales conversations to create clear separation from competitors</p>
        <div className="space-y-4">
          {[
            { context: "When they mention BetterUp/CoachHub/Torch:", response: '"They give you 4,000 coaches having 4,000 disconnected conversations. We give you one Leadership Operating System that makes your entire leadership team operate as one. Different problem, different solution. They scale coaching. We scale consistency."' },
            { context: "When they say they have internal L&D:", response: '"That\'s exactly who deploys our system. SBLA isn\'t a replacement for your L&D team — it\'s the operating system they implement. Think of us as the iOS to their app store. We give them the infrastructure; they drive adoption."' },
            { context: "When they compare to FranklinCovey/Blanchard:", response: '"Those are programs built 20-40 years ago. We\'re the only leadership system built on current neuroscience data, measuring everything baseline-to-completion with 360° assessments. They sell content. We install infrastructure."' },
            { context: "When they say 'it sounds like every other leadership program':", response: '"Fair. Here\'s the difference: we measure everything. When Crocs ran our program, PwC-conducted 360s showed improvement across all 80 metrics. Name one other leadership provider who will commit to measurable outcomes in writing."' },
            { context: "When they ask why not just hire executive coaches:", response: '"Individual coaching develops individual leaders. We develop a leadership system. When 40 leaders share one language, one decision framework, one accountability structure — the whole organization moves faster. That\'s the difference between coaching and a Leadership Operating System."' },
          ].map((item, i) => (
            <div key={i} className="border-l-2 border-sb-gold/50 pl-4">
              <div className="text-amber-700 text-xs font-semibold mb-1">{item.context}</div>
              <p className="text-slate-700 text-sm italic">{item.response}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
