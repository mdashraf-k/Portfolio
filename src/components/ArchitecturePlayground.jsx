import React, { useState } from 'react';
import { RefreshCw, Layers, Database, Shield, Server, CheckCircle2, Send } from 'lucide-react';

export default function ArchitecturePlayground() {
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [payloadType, setPayloadType] = useState('KV_WRITE');
  const [packetLogs, setPacketLogs] = useState([
    '[INIT] ARCHITECTURE SANDBOX READY',
    '[INFO] SELECT PAYLOAD AND CLICK "DISPATCH PACKET"',
  ]);

  const nodes = [
    { id: 1, name: 'CLIENT INGRESS', type: 'Gateway', icon: Server, desc: 'TLS Terminated Proxy' },
    { id: 2, name: 'RAFT CONSENSUS LEADER', type: 'Node 01', icon: Shield, desc: 'Term 4 Leader // Log Append' },
    { id: 3, name: 'MEMCACHED / REDIS', type: 'In-Memory Cache', icon: Layers, desc: 'P99 Latency: 0.1ms' },
    { id: 4, name: 'STORAGE ENGINE (LSM-TREE)', type: 'Disk WAL', icon: Database, desc: 'Sync Commit to SSD' },
  ];

  const handleDispatch = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStep(1);
    const traceId = Math.random().toString(36).substring(2, 9).toUpperCase();

    setPacketLogs((prev) => [
      `[TRACE ${traceId}] DISPATCHING ${payloadType} PAYLOAD...`,
      `[STEP 1/4] CLIENT INGRESS -> VALIDATING PAYLOAD & AUTH TOKENS`,
    ]);

    setTimeout(() => {
      setActiveStep(2);
      setPacketLogs((prev) => [
        ...prev,
        `[STEP 2/4] RAFT LEADER -> PROPOSING ENTRIES TO CLUSTER QUORUM`,
      ]);
    }, 800);

    setTimeout(() => {
      setActiveStep(3);
      setPacketLogs((prev) => [
        ...prev,
        `[STEP 3/4] IN-MEMORY CACHE -> UPDATING WRITE-THROUGH SNAPSHOT`,
      ]);
    }, 1600);

    setTimeout(() => {
      setActiveStep(4);
      setPacketLogs((prev) => [
        ...prev,
        `[STEP 4/4] STORAGE ENGINE -> LSM WAL FLUSH COMPLETED`,
        `[TRACE ${traceId}] SUCCESS // ACK 200 OK // TOTAL_TIME: 1.14ms`,
      ]);
      setIsSimulating(false);
    }, 2400);
  };

  const handleReset = () => {
    setActiveStep(0);
    setIsSimulating(false);
    setPacketLogs(['[INIT] SANDBOX RESET. READY FOR NEXT DISPATCH.']);
  };

  return (
    <section className="mb-section-gap" id="architecture">
      {/* Header */}
      <div className="flex justify-between items-end mb-6 border-b-2 border-primary pb-3">
        <div>
          <span className="font-mono text-xs text-secondary uppercase tracking-widest block font-bold mb-1">
            INTERACTIVE SYSTEM DEMO
          </span>
          <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-tight">
            03 // DISTRIBUTED ARCHITECTURE SANDBOX
          </h2>
        </div>
        <button
          onClick={handleReset}
          className="font-mono text-xs border border-primary px-3 py-1 bg-surface hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-1 font-bold"
        >
          <RefreshCw className="w-3 h-3" /> RESET
        </button>
      </div>

      <div className="border border-primary bg-surface p-6 md:p-gutter transition-colors duration-300">
        {/* Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-primary pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-primary">SELECT PAYLOAD:</span>
            <div className="flex gap-2">
              {['KV_WRITE', 'VECTOR_SEARCH', 'EVENT_STREAM'].map((type) => (
                <button
                  key={type}
                  onClick={() => setPayloadType(type)}
                  disabled={isSimulating}
                  className={`font-mono text-xs px-3 py-1 border transition-all ${
                    payloadType === type
                      ? 'bg-primary text-on-primary border-primary font-bold'
                      : 'border-primary/40 text-secondary hover:border-primary'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleDispatch}
            disabled={isSimulating}
            className="border border-primary bg-primary text-on-primary hover:bg-surface hover:text-primary px-6 py-2 font-mono text-xs font-bold arch-hover flex items-center gap-2 transition-colors disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            {isSimulating ? 'TRANSMITTING PACKET...' : 'DISPATCH PACKET'}
          </button>
        </div>

        {/* Visual Node Flow Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 relative">
          {nodes.map((node, index) => {
            const stepNum = index + 1;
            const isActive = activeStep === stepNum;
            const isCompleted = activeStep > stepNum;
            const IconComp = node.icon;

            return (
              <div
                key={node.id}
                className={`border-2 p-4 transition-all duration-300 flex flex-col justify-between relative ${
                  isActive
                    ? 'border-primary bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]'
                    : isCompleted
                    ? 'border-emerald-600 bg-emerald-50'
                    : 'border-primary/40 bg-surface'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-[10px] font-bold border border-primary/30 px-1.5 py-0.5">
                      STEP 0{stepNum}
                    </span>
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : isActive ? (
                      <span className="w-2.5 h-2.5 bg-primary rounded-full animate-ping"></span>
                    ) : (
                      <span className="w-2 h-2 bg-primary/20 rounded-full"></span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <IconComp className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-secondary'}`} />
                    <h4 className="font-mono text-xs font-bold text-primary">{node.name}</h4>
                  </div>

                  <span className="font-mono text-[10px] text-secondary block mb-1 font-bold">{node.type}</span>
                  <p className="font-body text-[11px] text-secondary leading-tight">{node.desc}</p>
                </div>

                {/* Packet animation pulse line */}
                {isActive && (
                  <div className="w-full bg-primary h-1 mt-4 animate-pulse"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Stdout Console Logs */}
        <div className="border border-primary bg-zinc-950 text-emerald-400 p-4 font-mono text-xs space-y-1">
          <div className="flex justify-between items-center text-zinc-500 border-b border-zinc-800 pb-1 mb-2">
            <span>// TRANSMISSION TRACE LOG</span>
            <span>PROTOCOL: TCP/IP // GPRC</span>
          </div>
          {packetLogs.map((log, i) => (
            <div key={i} className="hover:bg-zinc-900 px-1 py-0.5 transition-colors">
              {log}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
