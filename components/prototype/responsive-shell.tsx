'use client'

import React, { useEffect, useState } from 'react'
import { Home, Church, Users, Wallet, WifiOff, Monitor, Smartphone } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ResponsiveShellProps {
  activeTab: string
  onTabChange: (tab: string) => void
  previewMode: 'responsive' | 'mobile-frame'
  onTogglePreviewMode: (mode: 'responsive' | 'mobile-frame') => void
  children: React.ReactNode
}

const NAV_ITEMS = [
  { id: 'home', label: 'Inicio', icon: Home },
  { id: 'cultos', label: 'Cultos', icon: Church },
  { id: 'membros', label: 'Membros', icon: Users },
  { id: 'financeiro', label: 'Financeiro', icon: Wallet },
]

/**
 * Shell responsivo mobile-first (Igreja Ipiranga):
 * - Em telas >= 768px (`md:`), exibe Sidebar fixa usando os tokens `--sidebar-*`.
 * - Exibe banner de estado offline quando `navigator.onLine` passa para `false`.
 * - Permite alternar entre modo Responsivo (Web/Tablet/Desktop) e Moldura Mobile (375px).
 */
export function ResponsiveShell({
  activeTab,
  onTabChange,
  previewMode,
  onTogglePreviewMode,
  children,
}: ResponsiveShellProps) {
  const [isOffline, setIsOffline] = useState(false)

  useEffect(() => {
    const syncStatus = () => setIsOffline(typeof navigator !== 'undefined' ? !navigator.onLine : false)
    syncStatus()
    window.addEventListener('online', syncStatus)
    window.addEventListener('offline', syncStatus)
    return () => {
      window.removeEventListener('online', syncStatus)
      window.removeEventListener('offline', syncStatus)
    }
  }, [])

  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col md:flex-row">
      {previewMode === 'responsive' && (
        <aside
          aria-label="Menu lateral desktop"
          className="hidden md:flex md:w-64 md:flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border p-4 gap-6 shrink-0"
        >
          <div className="flex items-center gap-3 px-2 pt-2">
            <div className="w-10 h-10 rounded-xl bg-sidebar-primary text-sidebar-primary-foreground flex items-center justify-center font-bold">
              II
            </div>
            <div>
              <p className="font-bold text-base leading-tight">Igreja Ipiranga</p>
              <p className="text-xs text-sidebar-foreground/70">Gestão Congregacional</p>
            </div>
          </div>

          <nav aria-label="Navegação desktop" className="flex flex-col gap-1.5 flex-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon
              const active = activeTab === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-current={active ? 'page' : undefined}
                  onClick={() => onTabChange(item.id)}
                  className={cn(
                    'flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium min-h-[48px] transition-colors text-left',
                    active
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground font-semibold'
                      : 'text-sidebar-foreground/85 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                  )}
                >
                  <Icon aria-hidden="true" className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </nav>
        </aside>
      )}

      <div className="flex-1 flex flex-col min-w-0">
        {isOffline && (
          <div
            role="status"
            aria-live="polite"
            className="bg-destructive text-destructive-foreground px-4 py-2 text-sm font-medium flex items-center justify-center gap-2"
          >
            <WifiOff aria-hidden="true" className="w-4 h-4" />
            <span>Sem conexão com a internet — alterações pendentes serão sincronizadas ao reconectar.</span>
          </div>
        )}

        <div className="flex items-center justify-end gap-2 px-4 py-2 border-b border-border bg-card">
          <span className="text-xs text-muted-foreground mr-auto">Visualização:</span>
          <button
            type="button"
            aria-pressed={previewMode === 'responsive'}
            onClick={() => onTogglePreviewMode('responsive')}
            className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium min-h-[40px] border',
              previewMode === 'responsive'
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-background text-foreground border-border hover:bg-muted',
            )}
          >
            <Monitor aria-hidden="true" className="w-4 h-4" />
            Responsivo (Web/Tablet)
          </button>
          <button
            type="button"
            aria-pressed={previewMode === 'mobile-frame'}
            onClick={() => onTogglePreviewMode('mobile-frame')}
            className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium min-h-[40px] border',
              previewMode === 'mobile-frame'
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-background text-foreground border-border hover:bg-muted',
            )}
          >
            <Smartphone aria-hidden="true" className="w-4 h-4" />
            Mobile (375px)
          </button>
        </div>

        <div className="flex-1 min-h-0">{children}</div>
      </div>
    </div>
  )
}
