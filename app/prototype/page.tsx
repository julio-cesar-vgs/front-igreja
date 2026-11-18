'use client'

import React, { useState } from 'react'
import { PhoneFrame } from '@/components/prototype/phone-frame'
import { ResponsiveShell } from '@/components/prototype/responsive-shell'
import { LoginScreen } from '@/components/prototype/screens/login-screen'
import { DashboardScreen } from '@/components/prototype/screens/dashboard-screen'
import { CultosScreen } from '@/components/prototype/screens/cultos-screen'
import { CultoDetalheScreen } from '@/components/prototype/screens/culto-detalhe-screen'
import { MembrosScreen } from '@/components/prototype/screens/membros-screen'
import { MembroDetalheScreen } from '@/components/prototype/screens/membro-detalhe-screen'
import { FinanceiroScreen } from '@/components/prototype/screens/financeiro-screen'
import { ConferenciaScreen } from '@/components/prototype/screens/conferencia-screen'
import { BottomNavigation } from '@/components/prototype/bottom-navigation'

export type ScreenType =
  | 'login'
  | 'dashboard'
  | 'cultos'
  | 'culto-detalhe'
  | 'membros'
  | 'membro-detalhe'
  | 'financeiro'
  | 'conferencia'

const SCREEN_BUTTONS: { id: ScreenType; label: string }[] = [
  { id: 'login', label: 'Login' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'cultos', label: 'Cultos' },
  { id: 'culto-detalhe', label: 'Detalhe do Culto' },
  { id: 'membros', label: 'Membros' },
  { id: 'membro-detalhe', label: 'Detalhe do Membro' },
  { id: 'financeiro', label: 'Financeiro' },
  { id: 'conferencia', label: 'Conferência' },
]

export default function PrototypePage() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('login')
  const [previewMode, setPreviewMode] = useState<'responsive' | 'mobile-frame'>('mobile-frame')

  const handleNavigate = (screen: string) => {
    const map: Record<string, ScreenType> = {
      home: 'dashboard',
      dashboard: 'dashboard',
      login: 'login',
      cultos: 'cultos',
      'novo-culto': 'cultos',
      'culto-detalhe': 'culto-detalhe',
      membros: 'membros',
      'novo-membro': 'membros',
      'membro-detalhe': 'membro-detalhe',
      financeiro: 'financeiro',
      'registrar-dizimo': 'financeiro',
      'registrar-oferta': 'financeiro',
      relatorios: 'financeiro',
      conferencia: 'conferencia',
      menu: 'dashboard',
    }
    setCurrentScreen(map[screen] ?? 'dashboard')
  }

  const activeTab =
    currentScreen === 'dashboard'
      ? 'home'
      : currentScreen === 'cultos' || currentScreen === 'culto-detalhe'
      ? 'cultos'
      : currentScreen === 'membros' || currentScreen === 'membro-detalhe'
      ? 'membros'
      : currentScreen === 'financeiro' || currentScreen === 'conferencia'
      ? 'financeiro'
      : 'home'

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen onLogin={() => setCurrentScreen('dashboard')} />
      case 'dashboard':
        return <DashboardScreen onNavigate={handleNavigate} />
      case 'cultos':
        return <CultosScreen onNavigate={handleNavigate} />
      case 'culto-detalhe':
        return (
          <CultoDetalheScreen
            onBack={() => setCurrentScreen('cultos')}
            onNavigate={handleNavigate}
          />
        )
      case 'membros':
        return <MembrosScreen onNavigate={handleNavigate} />
      case 'membro-detalhe':
        return <MembroDetalheScreen onBack={() => setCurrentScreen('membros')} />
      case 'financeiro':
        return <FinanceiroScreen onNavigate={handleNavigate} />
      case 'conferencia':
        return <ConferenciaScreen onBack={() => setCurrentScreen('financeiro')} />
      default:
        return <DashboardScreen onNavigate={handleNavigate} />
    }
  }

  return (
    <ResponsiveShell
      activeTab={activeTab}
      onTabChange={handleNavigate}
      previewMode={previewMode}
      onTogglePreviewMode={setPreviewMode}
    >
      <main className="min-h-full bg-gradient-to-br from-primary/10 to-accent/10 p-4 flex flex-col items-center justify-center">
      <div className={previewMode === 'responsive' ? 'w-full max-w-5xl' : 'max-w-md w-full'}>
        {/* Screen Navigation Info */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Protótipos - Igreja Ipiranga
          </h1>
          <p className="text-muted-foreground">
            Navegação responsiva para Android
          </p>

          {/* Links diretos para o Protótipo V2 Completo + Design System */}
          <div className="mt-4 bg-primary/5 border border-primary/20 rounded-lg p-3 text-left text-xs space-y-2">
            <p className="font-semibold text-primary">
              Novo Kit V2 (Protótipo Interativo Completo + Design System):
            </p>
            <div className="grid grid-cols-1 gap-1.5">
              <a
                href="/prototipo/ui_kits/mobile-app/index.html"
                className="block p-2 rounded bg-primary text-primary-foreground font-semibold text-center hover:opacity-90 transition"
              >
                Abrir Protótipo V2 Completo (11 Telas + 18 Modais + Escala GPS + PDF)
              </a>
              <div className="grid grid-cols-2 gap-1.5">
                <a
                  href="/prototipo/ui_kits/mobile-app/role-comparison.html"
                  className="block p-2 rounded bg-card border border-border text-foreground font-medium text-center hover:bg-muted transition"
                >
                  Comparativo 4 Perfis
                </a>
                <a
                  href="/prototipo/index.html"
                  className="block p-2 rounded bg-card border border-border text-foreground font-medium text-center hover:bg-muted transition"
                >
                  Design System V2
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-card border border-border rounded-lg p-3 text-left text-sm">
            <p className="text-muted-foreground mb-2">
              Tela atual:{' '}
              <span className="font-semibold text-foreground capitalize">
                {currentScreen}
              </span>
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {SCREEN_BUTTONS.map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setCurrentScreen(btn.id)}
                  className={`p-2 rounded ${
                    currentScreen === btn.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Área de exibição: Responsivo Web/Tablet ou Moldura Mobile 375px */}
        {previewMode === 'mobile-frame' ? (
          <PhoneFrame>
            <div className="flex flex-col h-full">
              {renderScreen()}
              {currentScreen !== 'login' && currentScreen !== 'membro-detalhe' && (
                <BottomNavigation
                  activeTab={activeTab}
                  onTabChange={handleNavigate}
                />
              )}
            </div>
          </PhoneFrame>
        ) : (
          <div className="bg-card border border-border rounded-2xl shadow-lg overflow-hidden min-h-[640px] flex flex-col">
            <div className="flex-1">{renderScreen()}</div>
            {currentScreen !== 'login' && currentScreen !== 'membro-detalhe' && (
              <div className="md:hidden">
                <BottomNavigation activeTab={activeTab} onTabChange={handleNavigate} />
              </div>
            )}
          </div>
        )}

        {/* Design System Info */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="font-bold text-foreground mb-2">Paleta de Cores</h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-primary" />
                <span className="text-muted-foreground">Primária: Azul</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-accent" />
                <span className="text-muted-foreground">Destaque: Dourado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-success" />
                <span className="text-muted-foreground">Sucesso: Verde</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="font-bold text-foreground mb-2">Otimizações</h3>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li>✓ Público 30+ anos</li>
              <li>✓ Fontes grandes</li>
              <li>✓ Botões 48x48dp+</li>
              <li>✓ Alto contraste</li>
            </ul>
          </div>
        </div>
      </div>
      </main>
    </ResponsiveShell>
  )
}
