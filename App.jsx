import React, { useState, useEffect } from 'react'
import {
  ArrowLeft, ArrowRight, Activity, BrainCircuit, Boxes, Check,
  ClipboardList, Clock3, Route, ShieldCheck, Target, Truck,
  Waves, Zap, Network, BookOpen, Wallet, PackageCheck,
  Maximize2, Grid, Users, UserCheck, AlertTriangle, GitMerge
} from 'lucide-react'
import './App.css'

const slideMeta = [
  { id: '01', title: 'Introduction' },
  { id: '02', title: 'Project Overview' },
  { id: '03', title: 'Problem Statement' },
  { id: '04', title: 'Aim & Project Objectives' },
  { id: '05', title: 'Literature Review' },
  { id: '06', title: 'Research Gap & Our Response' },
  { id: '07', title: 'Methodology & Plan' },
  { id: '08', title: 'Expected Deliverables' },
  { id: '09', title: 'Timeline & Budget' },
  { id: '10', title: 'Conclusion' },
]

const teamMembers = [
  { num: '01', name: 'Nahid Nur' },
  { num: '02', name: 'Mahmodul Islam' },
  { num: '03', name: 'Md. Abdullah Al Sajid' },
  { num: '04', name: 'Tanvir Ahmed' },
  { num: '05', name: 'Ashif Hasan' },
]

export default function App() {
  const [current, setCurrent] = useState(0)
  const [overviewOpen, setOverviewOpen] = useState(false)

  const nextSlide = () => setCurrent((prev) => Math.min(prev + 1, slideMeta.length - 1))
  const prevSlide = () => setCurrent((prev) => Math.max(prev - 1, 0))

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {})
    } else {
      document.exitFullscreen().catch(() => {})
    }
  }
  useEffect
  (() =>
     {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key.toLowerCase() === 'o') setOverviewOpen((prev) => !prev)
      if (e.key.toLowerCase() === 'f') toggleFullscreen()
      if (e.key === 'Escape') setOverviewOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <div className="deck-shell">
      {/* 3D Perspective Animated Background */}
      <div className="cyber-bg">
        <div className="cyber-grid" />
        <div className="cyber-glow" />
      </div>

      {/* Top Navigation Bar (Exact biil.rahid.tech style) */}
      <header className="top-bar">
        <a href="#slide-1" className="brand-box" onClick={(e) => { e.preventDefault(); setCurrent(0) }}>
          <span className="brand-badge">M<span>.</span></span>
          <div className="brand-text">
            <strong>MADRS</strong>
            <small>FLOOD RELIEF INTELLIGENCE</small>
          </div>
        </a>

        <div className="center-meta">
          <span className="live-dot" />
          <span>PROJECT DEFENSE</span>
          <i className="sep" />
          <span>SOUTHEAST UNIVERSITY</span>
        </div>

        <div className="right-meta">
          <span className="course-pill">FYDP-I <i className="sep" /> CSE 460</span>
          <button className="icon-btn" onClick={() => setOverviewOpen(true)} title="Slide Overview (O)">
            <Grid size={15} /> <span>INDEX</span>
          </button>
        </div>
      </header>

      {/* Main Presentation Stage */}
      <main className="stage-area">
        {/* SLIDE 1: INTRODUCTION */}
        {current === 0 && (
          <div className="slide-frame front-page-grid">
            <div className="front-left">
              <div className="uni-eyebrow">
                <span className="pulse-dot" /> SOUTHEAST UNIVERSITY <span>·</span> CSE 460
              </div>
              <div className="main-logo-title">
                <span className="big-initial">M<span>.</span></span>
                <h1>Multi-Agent AI</h1>
              </div>
              <h2 className="front-subtitle">
                Disaster Relief Resource Allocation System for Flood Response
              </h2>
              <p className="front-desc">
                An intelligent multi-agent decision-support platform designed to prioritize affected areas, allocate limited relief supplies, and compute optimal delivery routes during flood emergencies.
              </p>
              <div className="front-tags">
                <span>FINAL YEAR DESIGN PROJECT I</span>
                <span>DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING</span>
              </div>
            </div>
            <div className="front-right">
              {/* Supervisor Card */}
              <div className="supervisor-card">
                <div className="sup-avatar"><UserCheck size={22} /></div>
                <div>
                  <small>SUPERVISED BY</small>
                  <strong>Dr. Md. Ruhul Amin</strong>
                  <span>Department of Computer Science & Engineering</span>
                </div>
              </div>

              {/* Team Members Grid */}
              <div className="team-box">
                <div className="team-head">
                  <strong><Users size={14} /> PRESENTED BY</strong>
                  <span>5 MEMBERS</span>
                </div>
                <div className="team-grid">
                  {teamMembers.map((m) => (
                    <div className="member-card" key={m.num}>
                      <span className="m-num">{m.num}</span>
                      <strong>{m.name}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3 Pillar Cards (Exact biil.rahid.tech bottom cards) */}
              <div className="pillars-row">
                <div className="pillar-card">
                  <span>01</span>
                  <strong>UNIFIED</strong>
                  <small>3 specialized AI agents</small>
                </div>
                <div className="pillar-card">
                  <span>02</span>
                  <strong>ADAPTIVE</strong>
                  <small>dynamic flood replanning</small>
                </div>
                <div className="pillar-card">
                  <span>03</span>
                  <strong>PROPOSED</strong>
                  <small>FYDP-I system design</small>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 2: PROJECT OVERVIEW */}
        {current === 1 && (
          <div className="slide-frame">
            <div className="slide-header">
              <span className="eyebrow">02 · SYSTEM SUMMARY</span>
              <h2>Project Overview</h2>
            </div>
            <div className="two-col">
              <div className="glass-card">
                <h3>Core Architecture</h3>
                <ul className="bullet-list">
                  <li>A Multi-Agent AI-based decision-support system for flood disaster relief.</li>
                  <li>Focuses on efficient distribution of limited relief resources.</li>
                  <li>A central <strong>Coordinator</strong> manages communication between agents.</li>
                  <li>Generates relief plans based on affected areas, resource availability, and road conditions.</li>
                  <li>Supports <strong>dynamic replanning</strong> when disaster conditions change.</li>
                </ul>
              </div>
              <div className="agents-stack">
                <div className="mini-agent">
                  <Activity size={20} className="cyan" />
                  <div>
                    <strong>Situation Assessment Agent</strong>
                    <p>Evaluates severity and sets area response priorities.</p>
                  </div>
                </div>
                <div className="mini-agent">
                  <Boxes size={20} className="cyan" />
                  <div>
                    <strong>Resource Allocation Agent</strong>
                    <p>Distributes limited relief stock efficiently.</p>
                  </div>
                </div>
                <div className="mini-agent">
                  <Route size={20} className="cyan" />
                  <div>
                    <strong>Route Planning Agent</strong>
                    <p>Computes safe delivery paths avoiding blocked roads.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}{/* SLIDE 3: PROBLEM STATEMENT */}
        {current === 2 && (
          <div className="slide-frame">
            <div className="slide-header">
              <span className="eyebrow">03 · THE CHALLENGE</span>
              <h2>Problem Statement</h2>
            </div>
            <div className="two-col">
              <div className="glass-card">
                <h3>Ground Realities</h3>
                <ul className="bullet-list">
                  <li>Floods disrupt transportation and damage critical infrastructure.</li>
                  <li>Affected communities face acute shortages of food, drinking water, and medicine.</li>
                  <li>Relief organizations have limited resources to serve multiple affected areas.</li>
                  <li>Manual resource allocation becomes difficult when conditions change rapidly.</li>
                  <li>Blocked roads create additional challenges for timely relief delivery.</li>
                </ul>
              </div>
              <div className="glass-card accent-border">
                <h3><AlertTriangle size={18} className="cyan" /> Key Challenges</h3>
                <div className="challenge-list">
                  <div className="c-item"><span>01</span><p>Which affected area should receive relief first?</p></div>
                  <div className="c-item"><span>02</span><p>How much resource should each area receive?</p></div>
                  <div className="c-item"><span>03</span><p>Which delivery route should be selected?</p></div>
                  <div className="c-item"><span>04</span><p>How should the system respond to sudden changes?</p></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 4: AIM & PROJECT OBJECTIVES */}
        {current === 3 && (
          <div className="slide-frame">
            <div className="slide-header">
              <span className="eyebrow">04 · PROJECT DIRECTION</span>
              <h2>Aim & Project Objectives</h2>
            </div>
            <div className="aim-banner">
              <Target size={26} className="cyan" />
              <div>
                <small>PRIMARY AIM</small>
                <p>To develop and evaluate a multi-agent AI-based decision-support system that efficiently allocates limited disaster-relief resources and adapts to changing flood conditions.</p>
              </div>
            </div>
            <div className="grid-3">
              {[
                'Develop a Situation Assessment Agent to prioritize affected areas.',
                'Develop a Resource Allocation Agent to distribute available resources.',
                'Develop a Route Planning Agent to find suitable delivery routes.',
                'Implement a central Coordinator to manage agent communication.',
                'Introduce dynamic replanning for changing disaster conditions.',
                'Evaluate system performance using simulated flood scenarios.'
              ].map((obj, idx) => (
                <div className="glass-card compact" key={idx}>
                  <span className="step-tag">OBJ 0{idx + 1}</span>
                  <p>{obj}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SLIDE 5: LITERATURE REVIEW */}
        {current === 4 && (
          <div className="slide-frame">
            <div className="slide-header">
              <span className="eyebrow">05 · RELATED RESEARCH</span>
              <h2>Literature Review</h2>
            </div>
            <div className="lit-grid">
              {[
                ['Shareef et al. (2019)', 'Identified coordination and emergency supply chain problems in Bangladesh.'],
                ['Harika et al. (2024)', 'Explored the use of AI in disaster response and resource allocation.'],
                ['Mosavi et al. (2018)', 'Reviewed machine learning approaches for flood prediction.'],
                ['Capezzuto et al. (2021)', 'Studied multi-agent coordination and task allocation in disaster response.'],
                ['Hashemipour et al. (2018)', 'Proposed simulation-based multi-agent disaster response systems.'],
                ['Duan et al. (2026)', 'Studied resource allocation under uncertain demand.'],
                ['Toathom & Champrasert (2024)', 'Focused on relief route planning under flood uncertainty.'],
              ].map(([author, desc], i) => (
                <div className="glass-card compact" key={author}>
                  <div className="lit-head"><BookOpen size={14} className="cyan" /> <span>REF 0{i + 1}</span></div>
                  <strong>{author}</strong>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
            <div className="obs-bar">
              <strong>Key Observation:</strong> Previous studies address different aspects of disaster management, including prediction, coordination, resource allocation, and route planning.
            </div>
          </div>
        )}{/* SLIDE 6: RESEARCH GAP & OUR RESPONSE */}
        {current === 5 && (
          <div className="slide-frame">
            <div className="slide-header">
              <span className="eyebrow">06 · CONTRIBUTION</span>
              <h2>Research Gap & Our Response</h2>
            </div>
            <div className="two-col">
              <div className="glass-card">
                <h3>Identified Research Gaps</h3>
                <ul className="bullet-list">
                  <li>Existing studies often focus on individual disaster management tasks.</li>
                  <li>Resource allocation and route planning are frequently handled separately.</li>
                  <li>Limited integration of prioritization, allocation, routing, and dynamic replanning.</li>
                  <li>Changing road conditions and resource demands create additional challenges.</li>
                </ul>
              </div>
              <div className="glass-card accent-border">
                <h3>Our Proposed Response</h3>
                <ul className="bullet-list check-list">
                  <li>Integrate three specialized AI agents into one unified system.</li>
                  <li>Prioritize affected areas based on population, flood severity, urgency, and shortages.</li>
                  <li>Distribute limited resources according to priority-weighted demand.</li>
                  <li>Use <strong>Dijkstra's algorithm</strong> for shortest-path route planning.</li>
                  <li>Implement dynamic replanning when disaster conditions change.</li>
                  <li>Compare performance with different baseline allocation methods.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 7: METHODOLOGY & PLAN */}
        {current === 6 && (
          <div className="slide-frame">
            <div className="slide-header">
              <span className="eyebrow">07 · SYSTEM WORKFLOW</span>
              <h2>Methodology & Plan</h2>
            </div>
            <div className="workflow-flow">
              <div className="wf-node"><Waves size={18} className="cyan" /><strong>Simulated Scenario</strong><small>Areas, stock & roads</small></div>
              <ArrowRight className="wf-arrow" />
              <div className="wf-node"><Activity size={18} className="cyan" /><strong>Assessment Agent</strong><small>Assigns priority levels</small></div>
              <ArrowRight className="wf-arrow" />
              <div className="wf-node"><Boxes size={18} className="cyan" /><strong>Allocation Agent</strong><small>Priority-based stock</small></div>
              <ArrowRight className="wf-arrow" />
              <div className="wf-node"><Route size={18} className="cyan" /><strong>Route Agent</strong><small>Dijkstra shortest path</small></div>
              <ArrowRight className="wf-arrow" />
              <div className="wf-node highlight"><Network size={18} className="cyan" /><strong>Central Coordinator</strong><small>Dynamic replanning</small></div>
            </div>

            <div className="two-col mt-1">
              <div className="glass-card compact">
                <strong>Final Relief Plan Output</strong>
                <p>Generates priority rankings, allocated resources, optimal delivery routes, and unmet demand analysis.</p>
              </div>
              <div className="glass-card compact">
                <strong>5-Step Implementation Plan</strong>
                <p>1. Simulated flood scenarios → 2. Develop 3 agents → 3. Coordinator integration → 4. Dynamic replanning → 5. Baseline evaluation.</p>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 8: EXPECTED DELIVERABLES */}
        {current === 7 && (
          <div className="slide-frame">
            <div className="slide-header">
              <span className="eyebrow">08 · OUTCOMES & SCOPE</span>
              <h2>Expected Deliverables</h2>
            </div>
            <div className="two-col">
              <div className="glass-card">
                <h3><PackageCheck size={18} className="cyan" /> Core Prototype Deliverables</h3>
                <ul className="bullet-list">
                  <li>Functional multi-agent flood relief decision-support prototype.</li>
                  <li>Three specialized agents + Central Coordinator integration.</li>
                  <li>Automated priority-based resource distribution & shortest-path routes.</li>
                  <li>Dynamic replanning for blocked roads and changing demands.</li>
                  <li>Detailed relief plan showing priority, allocations, routes & unmet demand reasons.</li>
                </ul>
              </div>
              <div className="glass-card accent-border">
                <h3><GitMerge size={18} className="cyan" /> Future Extensions</h3>
                <ul className="bullet-list">
                  <li><strong>LLM-based</strong> agent coordination and human-readable explanation.</li>
                  <li><strong>Retrieval-Augmented Generation (RAG)</strong> for historical disaster logs.</li>
                  <li>Advanced route optimization using multiple delivery vehicles.</li>
                  <li><strong>Mixed-Integer Linear Programming (MILP)</strong> for resource allocation.</li>
                </ul>
              </div>
            </div>
          </div>
        )}{/* SLIDE 9: TIMELINE & BUDGET */}
        {current === 8 && (
          <div className="slide-frame">
            <div className="slide-header">
              <span className="eyebrow">09 · EXECUTION PLAN</span>
              <h2>Timeline & Budget</h2>
            </div>
            <div className="two-col">
              <div className="glass-card">
                <h3><Clock3 size={18} className="cyan" /> Project Timeline</h3>
                <div className="timeline-steps">
                  {[
                    'Topic Selection & Project Proposal',
                    'Literature Review',
                    'System Architecture Design',
                    'Algorithm Design & Planning',
                    'Report Preparation & Project Defense',
                    'Next Phase: Implementation, Simulation & Evaluation'
                  ].map((step, i) => (
                    <div className="t-step" key={step}>
                      <span>0{i + 1}</span>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card">
                <h3><Wallet size={18} className="cyan" /> Project Budget (Software-Based)</h3>
                <p className="muted-sm">No physical hardware required. Expected cost categories:</p>
                <div className="budget-list">
                  <div className="b-row"><span>Internet Expenses</span><small>Connectivity</small></div>
                  <div className="b-row"><span>Cloud / API Services</span><small>Compute & Simulation</small></div>
                  <div className="b-row"><span>Transportation</span><small>Field / Academic visits</small></div>
                  <div className="b-row"><span>Report Printing & Binding</span><small>Documentation</small></div>
                </div>
                <div className="note-box">
                  Note: Identifies cost categories without fixed amounts or month-wise dates.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 10: CONCLUSION */}
        {current === 9 && (
          <div className="slide-frame center-slide">
            <span className="eyebrow">10 · SUMMARY</span>
            <h2 className="conc-title">Conclusion</h2>
            <div className="glass-card max-800">
              <ul className="bullet-list">
                <li>Proposes a multi-agent AI-based decision-support system for flood relief management.</li>
                <li>Integrates situation assessment, resource allocation, and route planning into one workflow.</li>
                <li>The Coordinator ensures seamless communication and dynamic replanning.</li>
                <li>Evaluated using simulated flood scenarios across key metrics: <strong>demand satisfaction, resource utilization, delivery distance, area coverage, response time, and replanning performance.</strong></li>
                <li>Aims to support faster, more efficient, and better-coordinated relief distribution.</li>
              </ul>
            </div>
            <button className="restart-btn" onClick={() => setCurrent(0)}>
              Back to Slide 01 <ArrowRight size={16} />
            </button>
          </div>
        )}
      </main>

      {/* Bottom Deck Footer (Exact biil.rahid.tech style) */}
      <footer className="bottom-bar">
        <div className="b-left">
          <span className="slide-num">{slideMeta[current].id}</span>
          <i className="sep" />
          <span className="slide-name">{slideMeta[current].title}</span>
        </div>

        <div className="progress-track">
          <div
            className="progress-bar"
            style={{ width: `${((current + 1) / slideMeta.length) * 100}%` }}
          />
        </div>

        <div className="b-right">
          <span className="counter-text">
            {slideMeta[current].id}<i>/</i>10
          </span>
          <div className="nav-arrows">
            <button onClick={prevSlide} disabled={current === 0} title="Previous (Left Arrow)">
              <ArrowLeft size={16} />
            </button>
            <button onClick={nextSlide} disabled={current === slideMeta.length - 1} title="Next (Right Arrow)">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </footer>
      {/* Floating Keyboard Hint */}
      <div className="kbd-hints">
        <span>←</span><span>→</span> SLIDES <i className="sep" />
        <span>O</span> OVERVIEW <i className="sep" />
        <span>F</span> FULLSCREEN
      </div>

      {/* Slide Overview Modal (Press 'O' or click INDEX) */}
      {overviewOpen && (
        <div className="overview-modal" onClick={() => setOverviewOpen(false)}>
          <div className="overview-content" onClick={(e) => e.stopPropagation()}>
            <div className="ov-head">
              <h3>PRESENTATION SLIDE INDEX (10 SLIDES)</h3>
              <button onClick={() => setOverviewOpen(false)}>ESC</button>
            </div>
            <div className="ov-grid">
              {slideMeta.map((s, idx) => (
                <button
                  key={s.id}
                  className={`ov-card ${current === idx ? 'active' : ''}`}
                  onClick={() => { setCurrent(idx); setOverviewOpen(false) }}
                >
                  <span>{s.id}</span>
                  <strong>{s.title}</strong>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}