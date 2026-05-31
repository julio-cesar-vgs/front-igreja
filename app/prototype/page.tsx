'use client'

import React, { useState } from 'react'
import { PhoneFrame } from '@/components/prototype/phone-frame'
import { LoginScreen } from '@/components/prototype/screens/login-screen'
import { DashboardScreen } from '@/components/prototype/screens/dashboard-screen'
import { CultosScreen } from '@/components/prototype/screens/cultos-screen'
import { CultoDetalheScreen } from '@/components/prototype/screens/culto-detalhe-screen'
import { MembrosScreen } from '@/components/prototype/screens/membros-screen'
import { MembroDetalheScreen } from '@/components/prototype/screens/membro-detalhe-screen'
import { FinanceiroScreen } from '@/components/prototype/screens/financeiro-screen'
import { ConferenciaScreen } from '@/components/prototype/screens/conferencia-screen'
import { BottomNavigation } from '@/components/prototype/bottom-navigation'

type ScreenType = 
  | 'login'
  | 'dashboard'
  | 'cultos'
  | 'culto-detalhe'
  | 'membros'
  | 'membro-detalhe'
  | 'financeiro'
  | 'conferencia'

export default function PrototypePage() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('login')

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen onNavigate={() => setCurrentScreen('dashboard')} />
      case 'dashboard':
        return <DashboardScreen onNavigate={setCurrentScreen} />
      case 'cultos':
        return <CultosScreen onNavigate={setCurrentScreen} />
      case 'culto-detalhe':
        return <CultoDetalheScreen onBack={() => setCurrentScreen('cultos')} />
      case 'membros':
        return <MembrosScreen />
      case 'membro-detalhe':
        return <MembroDetalheScreen onBack={() => setCurrentScreen('membros')} />
      case 'financeiro':
        return <FinanceiroScreen />
      case 'conferencia':
        return <ConferenciaScreen onBack={() => setCurrentScreen('financeiro')} />
      default:
        return <DashboardScreen onNavigate={setCurrentScreen} />
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/10 p-4 flex flex-col items-center justify-center">
      <div className="max-w-md w-full">
        {/* Screen Navigation Info */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Protótipos - Igreja Ipiranga
          </h1>
          <p className="text-muted-foreground">
            Navegação responsiva para Android
          </p>
          <div className="mt-4 bg-card border border-border rounded-lg p-3 text-left text-sm">
            <p className="text-muted-foreground mb-2">Tela atual: <span className="font-semibold text-foreground capitalize">{currentScreen}</span></p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => setCurrentScreen('login')}
                className={`p-2 rounded ${currentScreen === 'login' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
              >
                Login
              </button>
              <button
                onClick={() => setCurrentScreen('dashboard')}
                className={`p-2 rounded ${currentScreen === 'dashboard' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setCurrentScreen('cultos')}
                className={`p-2 rounded ${currentScreen === 'cultos' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
              >
                Cultos
              </button>
              <button
                onClick={() => setCurrentScreen('membros')}
                className={`p-2 rounded ${currentScreen === 'membros' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
              >
                Membros
              </button>
              <button
                onClick={() => setCurrentScreen('financeiro')}
                className={`p-2 rounded ${currentScreen === 'financeiro' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
              >
                Financeiro
              </button>
              <button
                onClick={() => setCurrentScreen('conferencia')}
                className={`p-2 rounded ${currentScreen === 'conferencia' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
              >
                Conferência
              </button>
            </div>
          </div>
        </div>

        {/* Phone Frame */}
        <PhoneFrame>
          <div className="flex flex-col h-full">
            {renderScreen()}
            {currentScreen !== 'login' && currentScreen !== 'membro-detalhe' && (
              <BottomNavigation
                currentScreen={currentScreen}
                onNavigate={setCurrentScreen}
              />
            )}
          </div>
        </PhoneFrame>

        {/* Design System Info */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-2">Público-Alvo</h3>
            <p className="text-muted-foreground text-xs">Pessoas 30+ anos. Interface clara, buttons grandes, tipografia legível.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-2">Tema</h3>
            <p className="text-muted-foreground text-xs">Cores azuis e douradas transmitindo confiança. Design limpo e intuitivo.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
