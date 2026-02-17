import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, ScatterChart, Scatter, Legend, AreaChart, Area } from 'recharts';
import { TrendingUp, TrendingDown, Target, Users, DollarSign, Clock, AlertTriangle, CheckCircle, ChevronRight, Shield, Zap, Award, BarChart3, Crosshair, FileText, Calendar, ArrowRight, AlertCircle, Brain, Building2, Handshake, Mail, Phone, Linkedin, BookOpen, Star, XCircle } from 'lucide-react';
import { DEALS, METRICS, EXISTING_VS_NEW, PIPELINE_STAGES, TOTAL_ACTIVE_PIPELINE, WEIGHTED_PIPELINE, PIPELINE_COVERAGE_RATIO, CLIENT_CONCENTRATION, MONTHLY_REVENUE, PROGRAM_MIX, DEAL_SIZE_DIST, DEAL_VELOCITIES, REVENUE_SCENARIOS } from './data';
import StrategicDiagnosis from './tabs/StrategicDiagnosis';
import CompetitiveLandscape from './tabs/CompetitiveLandscape';
import GTMEngine from './tabs/GTMEngine';
import SalesSystem from './tabs/SalesSystem';
import AccountTargeting from './tabs/AccountTargeting';
import PipelineAnalytics from './tabs/PipelineAnalytics';
import RiskAnalysis from './tabs/RiskAnalysis';
import SprintPlan from './tabs/SprintPlan';

const TABS = [
  { id: 'diagnosis', label: 'Strategic Diagnosis', icon: Target },
  { id: 'competitive', label: 'Competitive Landscape', icon: Shield },
  { id: 'gtm', label: 'GTM Engine', icon: Zap },
  { id: 'sales', label: 'Sales System', icon: Handshake },
  { id: 'targeting', label: 'Account Targeting', icon: Crosshair },
  { id: 'pipeline', label: 'Pipeline Analytics', icon: BarChart3 },
  { id: 'risk', label: 'Risk & Failure', icon: AlertTriangle },
  { id: 'sprint', label: '90-Day Sprint', icon: Calendar },
];

export default function SparkBrillianceDashboard() {
  const [activeTab, setActiveTab] = useState('diagnosis');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-2xl font-bold tracking-tight">
                <span className="text-sb-gold">Spark Brilliance</span>
                <span className="text-slate-500 font-sans text-lg font-normal ml-3">Revenue Operations System</span>
              </h1>
              <p className="text-slate-400 text-sm mt-1">From $1.6M to $5M — Strategic Intelligence Dashboard</p>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-400">Last Updated</div>
              <div className="text-sm text-slate-500">February 17, 2026</div>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="border-b border-slate-200 bg-white/80 sticky top-[73px] z-40">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-2">
            {TABS.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-sb-gold/20 text-sb-gold border border-sb-gold/30'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Tab Content */}
      <main className="max-w-[1600px] mx-auto px-6 py-8">
        {activeTab === 'diagnosis' && <StrategicDiagnosis />}
        {activeTab === 'competitive' && <CompetitiveLandscape />}
        {activeTab === 'gtm' && <GTMEngine />}
        {activeTab === 'sales' && <SalesSystem />}
        {activeTab === 'targeting' && <AccountTargeting />}
        {activeTab === 'pipeline' && <PipelineAnalytics />}
        {activeTab === 'risk' && <RiskAnalysis />}
        {activeTab === 'sprint' && <SprintPlan />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-6 mt-12">
        <div className="max-w-[1600px] mx-auto px-6 text-center text-slate-400 text-xs">
          Prepared for Spark Brilliance by Marcus Langford — Fractional CRO & GTM Architect &bull; Confidential
        </div>
      </footer>
    </div>
  );
}
