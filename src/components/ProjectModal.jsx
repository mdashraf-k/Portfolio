import React, { useState } from 'react';
import { X, Play, Check } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState('overview');
  const [simulationRunning, setSimulationRunning] = useState(false);
  const [simLog, setSimLog] = useState([]);

  const runSimulation = () => {
    setSimulationRunning(true);
    setSimLog(['[SYS] INITIALIZING BENCHMARK SUITE...']);

    const steps = [
      '[RAFT] ELECTING LEADER NODE_01 (TERM 4)',
      '[MEM] ALLOCATING PINNED MEMORY BUFFER: 2048 MB',
      '[NET] INGESTING 50,000 CONCURRENT CLIENT PACKETS',
      '[CUDA] EXECUTING KERNEL FUSION ON TENSOR CORES',
      '[SYNC] WAL COMMIT COMPLETE // LATENCY 0.38ms',
      '[BENCHMARK SUCCESS] THROUGHPUT: 142,500 REQ/SEC',
    ];

    steps.forEach((step, i) => {
      setTimeout(() => {
        setSimLog((prev) => [...prev, step]);
        if (i === steps.length - 1) {
          setSimulationRunning(false);
        }
      }, (i + 1) * 400);
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-surface border-2 border-primary w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col justify-between shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="border-b-2 border-primary p-4 md:p-6 bg-white flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-primary text-on-primary font-mono text-[10px] px-2 py-0.5 uppercase font-bold">
                BLUEPRINT_ID: {project.id}
              </span>
              <span className="font-mono text-xs text-secondary border border-primary/30 px-2 py-0.5 font-bold">
                STATUS: PRODUCTION_READY
              </span>
            </div>
            <h2 className="font-display-lg text-2xl md:text-3xl font-black text-primary">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="border border-primary p-2 text-primary hover:bg-primary hover:text-on-primary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-primary bg-zinc-100 font-mono text-xs">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 border-r border-primary transition-colors ${
              activeTab === 'overview' ? 'bg-primary text-on-primary font-bold' : 'hover:bg-primary/10'
            }`}
          >
            01 // SPECIFICATION
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2.5 border-r border-primary transition-colors ${
              activeTab === 'architecture' ? 'bg-primary text-on-primary font-bold' : 'hover:bg-primary/10'
            }`}
          >
            02 // ARCHITECTURE_SCHEMATIC
          </button>
          <button
            onClick={() => setActiveTab('simulation')}
            className={`px-4 py-2.5 border-r border-primary transition-colors ${
              activeTab === 'simulation' ? 'bg-primary text-on-primary font-bold' : 'hover:bg-primary/10'
            }`}
          >
            03 // LIVE_BENCHMARK_SIMULATOR
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <p className="font-body-md text-on-surface-variant leading-relaxed text-base">
                {project.longDescription || project.description}
              </p>

              {/* Key Technical Features */}
              <div>
                <h3 className="font-mono text-xs uppercase font-bold text-primary mb-3 border-b border-primary pb-1">
                  CORE_TECHNICAL_HIGHLIGHTS
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="border border-primary p-3 bg-white flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-mono text-xs text-primary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics Table */}
              <div>
                <h3 className="font-mono text-xs uppercase font-bold text-primary mb-3 border-b border-primary pb-1">
                  BENCHMARK_TELEMETRY
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs border border-primary p-3 bg-zinc-50">
                  {Object.entries(project.metrics).map(([key, val]) => (
                    <div key={key}>
                      <span className="text-secondary text-[10px] uppercase block">{key}</span>
                      <span className="text-primary font-bold text-sm">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <div className="border border-primary bg-zinc-950 p-4 font-mono text-xs text-emerald-400 overflow-x-auto leading-tight">
                <div className="text-zinc-500 mb-2">// ARCHITECTURAL FLOW DIAGRAM</div>
                <pre className="text-[11px] font-mono leading-relaxed">
{project.asciiDiagram || `
+----------------+      +-------------------+      +-------------------+
|  Client Array  | ---> |  gRPC Ingress API | ---> |  Raft Consensus   |
+----------------+      +-------------------+      +-------------------+
                                                          |
                                                          v
                                                   +-------------------+
                                                   |  Storage Engine   |
                                                   +-------------------+
`}
                </pre>
              </div>

              <div className="border border-primary p-4 bg-white">
                <h4 className="font-mono text-xs font-bold text-primary mb-2">SYSTEM DESIGN NOTES</h4>
                <p className="font-body text-xs text-secondary leading-relaxed">
                  Implemented zero-copy buffer sharing between ring buffers and disk persistence engine. Locks are minimized via lock-free atomic pointer swaps, avoiding thread contention under high concurrency.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'simulation' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-mono text-xs text-primary font-bold">STRESS_TEST_SIMULATOR</span>
                <button
                  onClick={runSimulation}
                  disabled={simulationRunning}
                  className="border border-primary bg-primary text-on-primary hover:bg-surface hover:text-primary px-4 py-2 font-mono text-xs arch-hover flex items-center gap-2 transition-colors disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5" />
                  {simulationRunning ? 'RUNNING_TEST...' : 'EXECUTE BENCHMARK'}
                </button>
              </div>

              <div className="border border-primary bg-zinc-950 p-4 font-mono text-xs text-emerald-400 min-h-[160px] space-y-1">
                {simLog.length === 0 ? (
                  <span className="text-zinc-600">// Click EXECUTE BENCHMARK to run live telemetry suite...</span>
                ) : (
                  simLog.map((log, i) => <div key={i}>{log}</div>)
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="border-t-2 border-primary p-4 bg-white flex justify-between items-center font-mono text-xs">
          <div className="flex gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="border border-primary/40 px-2 py-0.5 text-secondary">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              href="https://github.com/mdashraf-k"
              target="_blank"
              rel="noreferrer"
              className="border border-primary px-3 py-1.5 hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-1.5 font-bold"
            >
              <GithubIcon className="w-3.5 h-3.5" /> SOURCE_CODE
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
