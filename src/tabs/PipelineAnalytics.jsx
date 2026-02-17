import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from 'recharts';
import { BarChart3, DollarSign, TrendingUp, Clock, Target, Users } from 'lucide-react';
import { METRICS, EXISTING_VS_NEW, PIPELINE_STAGES, TOTAL_ACTIVE_PIPELINE, WEIGHTED_PIPELINE, PIPELINE_COVERAGE_RATIO, CLIENT_CONCENTRATION, MONTHLY_REVENUE, PROGRAM_MIX, DEAL_SIZE_DIST, DEAL_VELOCITIES } from '../data';

const fmt = (n) => n >= 1000000 ? `$${(n / 1000000).toFixed(1)}M` : n >= 1000 ? `$${(n / 1000).toFixed(0)}K` : `$${n}`;

function Scorecard({ label, value, sub, color = "text-sb-gold" }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200">
      <div className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">{label}</div>
      <div className={`text-xl font-bold ${color}`}>{value}</div>
      {sub && <div className="text-slate-400 text-xs mt-0.5">{sub}</div>}
    </div>
  );
}

const COLORS_PIE = ['#9f8347', '#f59e0b', '#3b82f6', '#22c55e', '#6366f1', '#ec4899', '#ef4444', '#64748b', '#8b5cf6', '#14b8a6'];

const forecastData = [
  { name: "Won (2026)", committed: 1603050, probable: 0, pipeline: 0 },
  { name: "Contracting", committed: 0, probable: 737978, pipeline: 0 },
  { name: "Decision", committed: 0, probable: 625030, pipeline: 0 },
  { name: "Proposal", committed: 0, probable: 0, pipeline: 246500 },
  { name: "Needs Assess.", committed: 0, probable: 0, pipeline: 90750 },
  { name: "Discovery+", committed: 0, probable: 0, pipeline: 23750 },
];

const winRateByType = [
  { type: "Existing Client", won: 14, lost: 5, rate: 73.7 },
  { type: "New Client", won: 5, lost: 3, rate: 62.5 },
];

const newVsExistingPie = [
  { name: "Existing Client", value: EXISTING_VS_NEW.wonExisting.value },
  { name: "New Client", value: EXISTING_VS_NEW.wonNew.value },
];

export default function PipelineAnalytics() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-3xl font-bold text-slate-900">Pipeline Analytics</h2>
        <p className="text-slate-500 mt-2">HubSpot data transformed into actionable intelligence. All metrics computed from real deal data.</p>
      </div>

      {/* Scorecards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Scorecard label="Total Pipeline" value={fmt(TOTAL_ACTIVE_PIPELINE)} sub="43 active deals" />
        <Scorecard label="Weighted Pipeline" value={fmt(WEIGHTED_PIPELINE)} sub="Probability-adjusted" />
        <Scorecard label="2026 Run Rate" value={fmt(METRICS.won2026Revenue)} sub={`${((METRICS.won2026Revenue/METRICS.target)*100).toFixed(0)}% of $5M target`} color="text-green-400" />
        <Scorecard label="Avg Deal Size" value={fmt(METRICS.avgDealSize)} sub="18 deals with amounts" />
        <Scorecard label="Avg Sales Cycle" value={`${METRICS.avgVelocityDays} days`} sub={`${METRICS.weightedAvgVelocityDays} days $ weighted`} />
        <Scorecard label="Win Rate" value={`${(METRICS.winRateCount*100).toFixed(1)}%`} sub="19 won / 30 closed" color="text-green-400" />
        <Scorecard label="Deals to Hit $5M" value={Math.ceil(METRICS.remainingTo5M / METRICS.targetACV).toString()} sub={`At $300K ACV`} />
        <Scorecard label="Coverage Ratio" value={`${PIPELINE_COVERAGE_RATIO}x`} sub="Need 3-4x" color="text-red-400" />
      </div>

      {/* Row 1: Pipeline Waterfall + Revenue Forecast */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-slate-900 font-semibold mb-1">Pipeline by Stage (Dollar Value)</h3>
          <p className="text-slate-500 text-xs mb-4">Active pipeline = ${(TOTAL_ACTIVE_PIPELINE/1000000).toFixed(1)}M across all stages</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={PIPELINE_STAGES.filter(s => s.stage !== 'Closed Won')} layout="vertical" margin={{ left: 10, right: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
              <XAxis type="number" tickFormatter={v => fmt(v)} stroke="#94a3b8" fontSize={10} />
              <YAxis type="category" dataKey="stage" stroke="#94a3b8" fontSize={10} width={120} />
              <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 12 }} formatter={v => [fmt(v), "Value"]} />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {PIPELINE_STAGES.filter(s => s.stage !== 'Closed Won').map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-slate-900 font-semibold mb-1">Revenue Forecast (Weighted)</h3>
          <p className="text-slate-500 text-xs mb-4">Committed (won) + Probable (90-70%) + Pipeline (50% and below)</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={forecastData} margin={{ left: 0, right: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={10} />
              <YAxis tickFormatter={v => fmt(v)} stroke="#94a3b8" fontSize={10} />
              <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 12 }} formatter={v => [fmt(v)]} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="committed" name="Committed" fill="#22c55e" stackId="a" radius={[0, 0, 0, 0]} />
              <Bar dataKey="probable" name="Probable" fill="#3b82f6" stackId="a" radius={[0, 0, 0, 0]} />
              <Bar dataKey="pipeline" name="Pipeline" fill="#8b5cf6" stackId="a" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Row 2: Monthly Trend + Client Concentration */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-slate-900 font-semibold mb-1">Monthly Revenue Trend</h3>
          <p className="text-slate-500 text-xs mb-4">Won deal revenue by close month (Sep 2025 — Feb 2026)</p>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={MONTHLY_REVENUE} margin={{ left: 0, right: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} />
              <YAxis tickFormatter={v => fmt(v)} stroke="#94a3b8" fontSize={10} />
              <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 12 }} formatter={v => [fmt(v), "Revenue"]} />
              <Bar dataKey="value" fill="#9f8347" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-slate-900 font-semibold mb-1">Client Revenue Concentration</h3>
          <p className="text-slate-500 text-xs mb-4">Top 3 = 58.4% of revenue — EXTREME concentration risk</p>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={CLIENT_CONCENTRATION} dataKey="value" cx="50%" cy="50%" outerRadius={100} labelLine={false}
                label={({ client, pct }) => pct > 5 ? `${client} ${pct}%` : ''}>
                {CLIENT_CONCENTRATION.map((entry, i) => <Cell key={i} fill={COLORS_PIE[i % COLORS_PIE.length]} />)}
              </Pie>
              <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 12 }} formatter={v => [fmt(v)]} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Row 3: New vs Existing + Program Mix */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-slate-900 font-semibold mb-1">New vs. Existing Client Revenue</h3>
          <p className="text-slate-500 text-xs mb-4">Won deals only — existing clients dominate</p>
          <div className="flex items-center gap-8">
            <ResponsiveContainer width="50%" height={220}>
              <PieChart>
                <Pie data={newVsExistingPie} dataKey="value" cx="50%" cy="50%" outerRadius={80} labelLine={false}>
                  <Cell fill="#22c55e" />
                  <Cell fill="#3b82f6" />
                </Pie>
                <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 12 }} formatter={v => [fmt(v)]} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-500" /><span className="text-slate-900 text-sm font-medium">Existing: {fmt(EXISTING_VS_NEW.wonExisting.value)}</span></div>
                <div className="text-slate-500 text-xs ml-5">{EXISTING_VS_NEW.wonExisting.count} deals · 73.7% win rate</div>
              </div>
              <div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-500" /><span className="text-slate-900 text-sm font-medium">New: {fmt(EXISTING_VS_NEW.wonNew.value)}</span></div>
                <div className="text-slate-500 text-xs ml-5">{EXISTING_VS_NEW.wonNew.count} deals · 62.5% win rate</div>
              </div>
              <div>
                <div className="flex items-center gap-2"><span className="text-sb-gold text-sm font-bold">Win Rate by Type</span></div>
                {winRateByType.map((r, i) => (
                  <div key={i} className="ml-5 mt-1">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-slate-200 rounded-full h-2">
                        <div className="h-2 rounded-full" style={{ width: `${r.rate}%`, background: i === 0 ? '#22c55e' : '#3b82f6' }} />
                      </div>
                      <span className="text-xs text-slate-600 w-12">{r.rate}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-slate-900 font-semibold mb-1">Revenue by Program Type</h3>
          <p className="text-slate-500 text-xs mb-4">SBLA is the core revenue driver — workshops and keynotes are entry points</p>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={PROGRAM_MIX} layout="vertical" margin={{ left: 10, right: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
              <XAxis type="number" tickFormatter={v => fmt(v)} stroke="#94a3b8" fontSize={10} />
              <YAxis type="category" dataKey="program" stroke="#94a3b8" fontSize={10} width={100} />
              <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 12 }} formatter={v => [fmt(v), "Revenue"]} />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {PROGRAM_MIX.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Row 4: Deal Velocity */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h3 className="text-slate-900 font-semibold mb-1">Deal Velocity — Days from Create to Close (Won Deals)</h3>
        <p className="text-slate-500 text-xs mb-4">Average: {METRICS.avgVelocityDays} days · Weighted by $: {METRICS.weightedAvgVelocityDays} days · Larger deals take longer but not dramatically</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={DEAL_VELOCITIES} layout="vertical" margin={{ left: 10, right: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
            <XAxis type="number" stroke="#94a3b8" fontSize={10} label={{ value: "Days", position: "bottom", style: { fill: '#64748b', fontSize: 11 } }} />
            <YAxis type="category" dataKey="name" stroke="#94a3b8" fontSize={9} width={150} />
            <Tooltip contentStyle={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 12 }}
              formatter={(v, name, props) => [v + ' days', `${fmt(props.payload.amount)} · ${props.payload.type}`]} />
            <Bar dataKey="days" radius={[0, 4, 4, 0]}>
              {DEAL_VELOCITIES.map((entry, i) => <Cell key={i} fill={entry.type === 'Existing' ? '#22c55e' : '#3b82f6'} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-center gap-6 mt-2 text-xs text-slate-500">
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-green-500 inline-block" /> Existing Client</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-blue-500 inline-block" /> New Client</span>
        </div>
      </div>
    </div>
  );
}
