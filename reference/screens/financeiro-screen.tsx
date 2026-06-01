'use client'

import React, { useState } from 'react'
import { TrendingUp, DollarSign, Gift, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FinanceiroScreen() {
  const [showValues, setShowValues] = useState(true)

  const financeiro = {
    dizimosTotal: 12450.50,
    ofertasTotal: 3200.00,
    conferenciaPendente: false,
    ultimaConferencia: '11/05/2026',
  }

  const recentTransactions = [
    {
      id: 1,
      tipo: 'DIZIMO',
      membro: 'João Silva',
      valor: 250.00,
      data: '11/05/2026',
      formaPagamento: 'PIX'
    },
    {
      id: 2,
      tipo: 'OFERTA',
      descricao: 'Oferta - Ação Social',
      valor: 150.00,
      data: '10/05/2026',
      formaPagamento: 'DINHEIRO'
    },
    {
      id: 3,
      tipo: 'DIZIMO',
      membro: 'Maria Santos',
      valor: 300.00,
      data: '09/05/2026',
      formaPagamento: 'TRANSFERENCIA'
    },
    {
      id: 4,
      tipo: 'OFERTA',
      descricao: 'Oferta - Missões',
      valor: 500.00,
      data: '08/05/2026',
      formaPagamento: 'CARTAO_DEBITO'
    },
  ]

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-primary text-primary-foreground p-4 shadow-md">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-2xl font-bold">Financeiro</h1>
          <button
            onClick={() => setShowValues(!showValues)}
            className="p-2 hover:bg-primary-foreground/20 rounded-lg transition"
          >
            {showValues ? (
              <Eye className="w-5 h-5" />
            ) : (
              <EyeOff className="w-5 h-5" />
            )}
          </button>
        </div>
        <p className="text-primary-foreground/80 text-sm">Última conferência: {financeiro.ultimaConferencia}</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Summary Cards */}
        <div className="space-y-3">
          {/* Dízimos Card */}
          <div className="bg-gradient-to-br from-success to-success/80 text-white rounded-2xl p-5 shadow-md">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-success-foreground/90 text-sm font-medium uppercase tracking-wide">Dízimos</p>
                <p className="text-3xl font-bold mt-1">
                  {showValues ? formatCurrency(financeiro.dizimosTotal) : '••••••••'}
                </p>
              </div>
              <div className="bg-white/20 rounded-lg p-2.5">
                <DollarSign className="w-6 h-6" />
              </div>
            </div>
            <div className="flex items-center gap-1 text-success-foreground/80 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+12.5% este mês</span>
            </div>
          </div>

          {/* Ofertas Card */}
          <div className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground rounded-2xl p-5 shadow-md">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-accent-foreground/90 text-sm font-medium uppercase tracking-wide">Ofertas</p>
                <p className="text-3xl font-bold mt-1">
                  {showValues ? formatCurrency(financeiro.ofertasTotal) : '••••••••'}
                </p>
              </div>
              <div className="bg-white/20 rounded-lg p-2.5">
                <Gift className="w-6 h-6" />
              </div>
            </div>
            <div className="flex items-center gap-1 text-accent-foreground/80 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+5.2% este mês</span>
            </div>
          </div>

          {/* Total Card */}
          <div className="bg-card border-2 border-primary rounded-2xl p-5">
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-wide mb-2">Total Recebido</p>
            <p className="text-3xl font-bold text-primary mb-3">
              {showValues ? formatCurrency(financeiro.dizimosTotal + financeiro.ofertasTotal) : '••••••••'}
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-success/10 rounded-lg p-2">
                <p className="text-muted-foreground">Dízimos</p>
                <p className="font-bold text-success">{showValues ? formatCurrency(financeiro.dizimosTotal) : '••••'}</p>
              </div>
              <div className="bg-accent/10 rounded-lg p-2">
                <p className="text-muted-foreground">Ofertas</p>
                <p className="font-bold text-accent">{showValues ? formatCurrency(financeiro.ofertasTotal) : '••••'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-2">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-2.5 h-auto font-semibold">
            Adicionar Dizimo
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-lg py-2.5 h-auto font-semibold">
            Adicionar Oferta
          </Button>
        </div>

        {/* Transações Recentes */}
        <div>
          <h2 className="text-lg font-bold text-foreground mb-3">Transações Recentes</h2>
          <div className="space-y-2">
            {recentTransactions.map((tx) => (
              <div
                key={tx.id}
                className="bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:bg-secondary/50 transition"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      tx.tipo === 'DIZIMO'
                        ? 'bg-success/20'
                        : 'bg-accent/20'
                    }`}
                  >
                    {tx.tipo === 'DIZIMO' ? (
                      <DollarSign
                        className={`w-6 h-6 ${tx.tipo === 'DIZIMO' ? 'text-success' : 'text-accent'}`}
                      />
                    ) : (
                      <Gift
                        className={`w-6 h-6 ${tx.tipo === 'DIZIMO' ? 'text-success' : 'text-accent'}`}
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground font-semibold text-sm">
                      {tx.tipo === 'DIZIMO' ? tx.membro : tx.descricao}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {tx.data} • {tx.formaPagamento.replace(/_/g, ' ')}
                    </p>
                  </div>
                </div>
                <p className="text-foreground font-bold text-sm">
                  {showValues ? formatCurrency(tx.valor) : '••••••'}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-6" />
      </div>

      {/* Action Button */}
      <div className="fixed bottom-20 left-4 right-4">
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-3 h-auto text-base font-semibold">
          Conferir Financeiro
        </Button>
      </div>

      {/* Bottom spacing for navigation */}
      <div className="h-24" />
    </div>
  )
}
