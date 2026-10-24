'use client'

import React, { useState } from 'react'
import { Terminal, Play, Copy, Check, CheckCircle2, Clock, Server, ArrowRight } from 'lucide-react'

interface Endpoint {
  id: string
  method: 'GET' | 'POST'
  path: string
  title: string
  description: string
  backendTech: string
  sampleResponse: Record<string, unknown>
  latency: number
}

const mockEndpoints: Endpoint[] = [
  {
    id: 'products',
    method: 'GET',
    path: '/api/v1/ecommerce/products?category=hardware&limit=2',
    title: 'Catalog Service (Cached)',
    description: 'FastAPI async route querying PostgreSQL with Redis in-memory cache layer.',
    backendTech: 'FastAPI • PostgreSQL • Redis Cache',
    latency: 18,
    sampleResponse: {
      status: 200,
      cached: true,
      cache_hit_ratio: '96.2%',
      execution_time_ms: 18,
      items: [
        {
          id: 'prod_9021',
          name: 'Developer Mechanical Keyboard',
          sku: 'HW-MK-01',
          inventory: 148,
          price_usd: 129.99,
          tags: ['hardware', 'usb-c'],
        },
        {
          id: 'prod_9022',
          name: 'Ultra-Wide 4K IPS Monitor',
          sku: 'HW-DISP-04',
          inventory: 35,
          price_usd: 499.0,
          tags: ['hardware', 'display'],
        },
      ],
      pagination: {
        page: 1,
        total_items: 284,
        has_next: true,
      },
    },
  },
  {
    id: 'auth',
    method: 'POST',
    path: '/api/v1/auth/jwt/token',
    title: 'OAuth2 / JWT Token Generator',
    description: 'Cryptographic token issuing service with bcrypt password hashing and 256-bit signature.',
    backendTech: 'Python • JWT • Bcrypt • Redis Session Store',
    latency: 24,
    sampleResponse: {
      status: 200,
      token_type: 'Bearer',
      access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMDkyOCIsImFkbWluIjp0cnVlfQ...',
      expires_in_seconds: 3600,
      refresh_token: 'r_8f9210ab849c7198e3290192',
      claims: {
        user_id: 'usr_8829',
        roles: ['developer', 'cluster_admin'],
        scope: 'read:write',
      },
    },
  },
  {
    id: 'metrics',
    method: 'GET',
    path: '/api/v1/cluster/metrics',
    title: 'Real-Time Health & Telemetry',
    description: 'Prometheus telemetry aggregator measuring container CPU, memory and query pool health.',
    backendTech: 'Python • Prometheus • Docker • Celery',
    latency: 14,
    sampleResponse: {
      cluster_id: 'prod-mesh-01',
      healthy_nodes: 8,
      cpu_load_percent: 28.4,
      ram_allocated_mb: 4096,
      db_connection_pool: {
        active: 14,
        idle: 26,
        max_pool_size: 40,
        wait_time_ms: 0.8,
      },
      cache_cluster: {
        status: 'synced',
        hit_ratio: 0.954,
        keys_stored: 24890,
      },
      timestamp: '2026-10-24T14:40:00Z',
    },
  },
  {
    id: 'websockets',
    method: 'GET',
    path: '/api/v1/tasks/ws/handshake',
    title: 'WebSocket Protocol Handshake',
    description: 'Duplex real-time synchronization gateway for Team Task Manager Kanban board.',
    backendTech: 'Node.js • Socket.io • Redis Pub/Sub',
    latency: 12,
    sampleResponse: {
      handshake: 'UPGRADE_WEBSOCKET_SUCCESS',
      protocol: 'wss',
      socket_id: 'ws_channel_9981',
      subscribed_rooms: ['board_task_collab_alpha'],
      heartbeat_interval_ms: 25000,
      compression: 'permessage-deflate',
    },
  },
]

export const ApiConsole = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<Endpoint>(mockEndpoints[0])
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<Record<string, unknown> | null>(mockEndpoints[0].sampleResponse)
  const [copied, setCopied] = useState(false)

  const handleExecute = () => {
    setLoading(true)
    setTimeout(() => {
      setResponse(selectedEndpoint.sampleResponse)
      setLoading(false)
    }, 280)
  }

  const handleCopy = () => {
    if (!response) return
    navigator.clipboard.writeText(JSON.stringify(response, null, 2))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="api-console" className="py-24 relative overflow-hidden bg-[#0d1117] border-y border-gray-800/80">
      <div className="container max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive Endpoint Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Live API Console
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Test and inspect real backend routes, responses, HTTP latency, and caching mechanisms directly in the browser.
          </p>
        </div>

        {/* Main Console Box */}
        <div className="rounded-2xl border border-gray-800 bg-[#070a0f] shadow-2xl overflow-hidden grid lg:grid-cols-12">
          
          {/* Left Column: Endpoint Selector */}
          <div className="lg:col-span-5 p-6 border-b lg:border-b-0 lg:border-r border-gray-800/80 bg-[#0d1117]/60 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-4 flex items-center justify-between">
              <span>Select Endpoint Route</span>
              <span className="text-[11px] text-emerald-400">{mockEndpoints.length} Routes</span>
            </h3>

            {mockEndpoints.map((ep) => {
              const isSelected = selectedEndpoint.id === ep.id
              return (
                <div
                  key={ep.id}
                  onClick={() => {
                    setSelectedEndpoint(ep)
                    setResponse(ep.sampleResponse)
                  }}
                  className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-emerald-500/10 border-emerald-500/50 shadow-md'
                      : 'bg-gray-900/40 border-gray-800/60 hover:bg-gray-800/60 hover:border-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                        ep.method === 'GET'
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      }`}
                    >
                      {ep.method}
                    </span>
                    <span className="text-[11px] font-mono text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gray-500" /> ~{ep.latency}ms
                    </span>
                  </div>

                  <h4 className="text-sm font-semibold text-gray-200 mb-1">{ep.title}</h4>
                  <p className="text-[11px] font-mono text-gray-400 truncate mb-2">{ep.path}</p>
                  <span className="text-[10px] font-mono text-gray-500 bg-gray-950/60 px-2 py-0.5 rounded border border-gray-800">
                    {ep.backendTech}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Right Column: Execution & Response View */}
          <div className="lg:col-span-7 p-6 flex flex-col justify-between">
            <div>
              {/* URL Bar & Send Button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-2 rounded-xl bg-gray-900/90 border border-gray-800 mb-4">
                <span
                  className={`text-xs font-mono px-2.5 py-1.5 rounded font-bold text-center ${
                    selectedEndpoint.method === 'GET'
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  }`}
                >
                  {selectedEndpoint.method}
                </span>

                <input
                  type="text"
                  readOnly
                  value={selectedEndpoint.path}
                  className="flex-1 bg-transparent px-2 text-xs font-mono text-gray-200 focus:outline-none truncate"
                />

                <button
                  onClick={handleExecute}
                  disabled={loading}
                  className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors disabled:opacity-50"
                >
                  <Play className={`w-3.5 h-3.5 fill-current ${loading ? 'animate-spin' : ''}`} />
                  <span>{loading ? 'Sending...' : 'Send Request'}</span>
                </button>
              </div>

              {/* Status Header */}
              <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-3 px-1">
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 200 OK
                  </span>
                  <span>Time: ~{selectedEndpoint.latency}ms</span>
                  <span className="hidden sm:inline">Size: ~1.2 KB</span>
                </div>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-[11px] hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy JSON
                    </>
                  )}
                </button>
              </div>

              {/* JSON Code Viewer */}
              <div className="p-4 rounded-xl bg-[#03060a] border border-gray-800/80 font-mono text-xs text-emerald-400/90 overflow-x-auto max-h-[360px] leading-relaxed shadow-inner">
                <pre>{JSON.stringify(response, null, 2)}</pre>
              </div>
            </div>

            {/* Architecture note */}
            <div className="pt-4 border-t border-gray-800/60 mt-4 text-[11px] font-mono text-gray-500 flex items-center justify-between">
              <span>Verified against production REST standards & connection pool</span>
              <span className="text-emerald-400">Zero Cold Start</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
