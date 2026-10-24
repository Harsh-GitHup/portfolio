'use client'

import React, { useState } from 'react'
import { Server, Database, Layers, Cpu, ShieldCheck, Zap, ArrowRight, Network } from 'lucide-react'

interface ArchitectureNode {
  id: string
  title: string
  role: string
  stack: string
  spec: string
  throughput: string
  latency: string
  color: string
}

const nodes: ArchitectureNode[] = [
  {
    id: 'gateway',
    title: 'Edge Gateway & Reverse Proxy',
    role: 'SSL Termination, Rate Limiting & Path-based Routing',
    stack: 'Nginx • Cloudflare • Docker',
    spec: 'Token-bucket rate limiting (100 req/sec), gzip/brotli compression, HTTP/2 multiplexing',
    throughput: '10,000+ conn/sec',
    latency: '< 2ms',
    color: 'from-blue-500/20 to-cyan-500/20 border-cyan-500/40 text-cyan-400',
  },
  {
    id: 'services',
    title: 'Async Microservices Cluster',
    role: 'FastAPI & Node.js Application Handlers',
    stack: 'Python 3.12 • FastAPI • Node.js Express • WebSockets',
    spec: 'Asynchronous event loop with Uvicorn workers, Pydantic strict schemas, JWT middleware validation',
    throughput: '3,500 req/sec per node',
    latency: '15 - 25ms',
    color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-400',
  },
  {
    id: 'cache',
    title: 'Redis In-Memory Caching & Pub/Sub',
    role: 'Distributed Key-Value Cache & WebSocket Broadcasting',
    stack: 'Redis 7.2 • In-Memory Datastores',
    spec: 'LRU cache eviction policy, 95%+ cache hit ratio, sub-millisecond session persistence, real-time channels',
    throughput: '100,000+ ops/sec',
    latency: '< 1.5ms',
    color: 'from-rose-500/20 to-amber-500/20 border-rose-500/40 text-rose-400',
  },
  {
    id: 'database',
    title: 'PostgreSQL Relational Storage Layer',
    role: 'ACID Transaction Engine & Connection Pooling',
    stack: 'PostgreSQL 16 • PgBouncer • SQLAlchemy ORM',
    spec: 'Connection pooling (max 40 active), B-tree indexed foreign keys, automated migrations with Alembic',
    throughput: '1,200 write ops/sec',
    latency: '4 - 8ms',
    color: 'from-indigo-500/20 to-purple-500/20 border-indigo-500/40 text-indigo-400',
  },
  {
    id: 'queue',
    title: 'Async Task Workers (Celery + Redis)',
    role: 'Decoupled Background Jobs & Queue Scheduling',
    stack: 'Celery • Redis Broker • Python Flower Monitor',
    spec: 'Non-blocking email triggers, report generation, and asynchronous scraping pipelines with automated retry logic',
    throughput: '500 tasks/sec',
    latency: 'Background Async',
    color: 'from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-400',
  },
]

export const SystemArchitecture = () => {
  const [activeNode, setActiveNode] = useState<ArchitectureNode>(nodes[1])

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-[#070a0f]">
      <div className="container max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <Network className="w-3.5 h-3.5" />
            <span>Distributed System Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            System Architecture
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            High-availability topology engineered for high throughput, sub-30ms p99 response times, and resilient failover.
          </p>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Flow Column */}
          <div className="lg:col-span-7 space-y-3.5">
            {nodes.map((node, idx) => {
              const isSelected = activeNode.id === node.id
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between ${
                    isSelected
                      ? `bg-gradient-to-r ${node.color} shadow-lg shadow-black/60`
                      : 'bg-gray-900/40 border-gray-800/80 hover:border-gray-700 hover:bg-gray-900/70'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-gray-950/80 border border-gray-800 flex items-center justify-center font-mono text-xs font-bold text-gray-300">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-100">{node.title}</h4>
                      <p className="text-xs text-gray-400 font-mono">{node.stack}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="hidden sm:inline text-gray-500">{node.latency}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-emerald-400' : 'text-gray-600'}`} />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 p-7 rounded-2xl border border-gray-800 bg-[#0d1117] shadow-xl sticky top-24">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-800">
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                Node Inspection
              </span>
              <span className="text-xs font-mono text-gray-400">{activeNode.latency}</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{activeNode.title}</h3>
            <p className="text-xs text-emerald-400 font-mono mb-4">{activeNode.role}</p>

            <div className="space-y-4 text-xs font-mono">
              <div className="p-3 rounded-lg bg-gray-900/60 border border-gray-800">
                <span className="text-gray-500 block mb-1">Architecture Specification:</span>
                <p className="text-gray-300 leading-relaxed font-sans">{activeNode.spec}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-gray-900/60 border border-gray-800">
                  <span className="text-gray-500 block mb-0.5">Peak Throughput:</span>
                  <span className="text-white font-bold">{activeNode.throughput}</span>
                </div>
                <div className="p-3 rounded-lg bg-gray-900/60 border border-gray-800">
                  <span className="text-gray-500 block mb-0.5">Target Latency:</span>
                  <span className="text-emerald-400 font-bold">{activeNode.latency}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
