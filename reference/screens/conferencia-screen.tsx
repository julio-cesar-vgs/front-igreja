'use client'

import React, { useState } from 'react'
import { ArrowLeft, AlertCircle, CheckCircle2, DollarSign, Gift } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function ConferenciaScreen({ onBack }: { onBack: () => void }) {
  const [valorConferido, setValorConferido] = useState('15650.50')

  const dados = {
    dizimosCalculado: 12450.50,
    ofertasCalculado: 3200.00,
    totalCalculado: 15650.50,
  }

  const valor = parseFloat(valorConferido.replace(',', '.')) || 0
  const diferenca = valor - dados.totalCalculado
  const status = Math.abs(diferenca) < 0.01 ? 'CONFERIDO' : 'DIVERGENTE'

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-primary text-primary-foreground p-4 flex items-center gap-3 shadow-md">
        <button
          onClick={onBack}
          className="p-2 hover:bg-primary-foreground/20 rounded-lg transition"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold">Conferência Financeira</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Status Alert */}
        <div
          className={`rounded-xl p-4 border flex items-start gap-3 ${
            status === 'CONFERIDO'
              ? 'bg-success/10 border-success'
              : 'bg-warning/10 border-warning'
          }`}
        >
          {status === 'CONFERIDO' ? (
            <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
          )}
          <div>
            <p className={`font-semibold ${status === 'CONFERIDO' ? 'text-success' : 'text-warning'}`}>
              {status === 'CONFERIDO' ? 'Conferência OK' : 'Divergência Detectada'}
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              {status === 'CONFERIDO'
                ? 'Os valores conferem perfeitamente.'
                : `Diferença de ${formatCurrency(Math.abs(diferenca))}`}
            </p>
          </div>
        </div>

        {/* Resumo dos Valores Calculados */}
        <div className="space-y-2">
          <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Valores Calculados</h2>
          <div className="bg-card border border-border rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-success" />
                <span className="text-foreground font-medium">Dízimos</span>
              </div>
              <span className="text-foreground font-bold">{formatCurrency(dados.dizimosCalculado)}</span>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <div className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-accent" />
                <span className="text-foreground font-medium">Ofertas</span>
              </div>
              <span className="text-foreground font-bold">{formatCurrency(dados.ofertasCalculado)}</span>
            </div>
            <div className="flex items-center justify-between pt-2 bg-primary/10 -mx-4 -mb-4 px-4 py-3 rounded-b-xl">
              <span className="text-foreground font-bold">Total Calculado</span>
              <span className="text-lg font-bold text-primary">{formatCurrency(dados.totalCalculado)}</span>
            </div>
          </div>
        </div>

        {/* Valor Conferido */}
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
            Valor Conferido (Digite o total do dinheiro contado)
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              value={valorConferido}
              onChange={(e) => setValorConferido(e.target.value)}
              placeholder="0,00"
              className="pl-10 text-xl font-bold bg-card border-2 border-primary/30 focus:border-primary rounded-lg py-3 text-foreground"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Use ponto ou vírgula como separador decimal
          </p>
        </div>

        {/* Comparação */}
        <div className="bg-card border-2 border-border rounded-xl p-4 space-y-2">
          <div className="text-sm text-muted-foreground uppercase tracking-wide font-medium">Detalhes da Conferência</div>
          
          <div className="space-y-2 pt-2">
            <div className="flex justify-between">
              <span className="text-foreground">Total Calculado</span>
              <span className="font-semibold text-foreground">{formatCurrency(dados.totalCalculado)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground">Total Conferido</span>
              <span className="font-semibold text-foreground">{formatCurrency(valor)}</span>
            </div>
            <div className="border-t border-border pt-2 flex justify-between">
              <span className={`font-bold ${diferenca >= 0 ? 'text-success' : 'text-destructive'}`}>
                {diferenca >= 0 ? 'Excesso' : 'Falta'}
              </span>
              <span
                className={`font-bold text-lg ${diferenca >= 0 ? 'text-success' : 'text-destructive'}`}
              >
                {diferenca >= 0 ? '+' : ''}{formatCurrency(diferenca)}
              </span>
            </div>
          </div>
        </div>

        {/* Observações */}
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
            Observações (Opcional)
          </label>
          <textarea
            placeholder="Ex: Faltaram alguns trocados, valor já descontado..."
            className="w-full bg-card border border-border rounded-lg p-3 text-foreground placeholder:text-muted-foreground/50 text-base focus:border-primary focus:outline-none"
            rows={3}
          />
        </div>

        {/* Bottom spacing */}
        <div className="h-6" />
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-20 left-4 right-4 flex gap-2">
        <Button
          variant="outline"
          className="flex-1 border-border text-foreground hover:bg-secondary rounded-lg py-3 h-auto text-base font-semibold"
          onClick={onBack}
        >
          Cancelar
        </Button>
        <Button
          className={`flex-1 rounded-lg py-3 h-auto text-base font-semibold text-white ${
            status === 'CONFERIDO'
              ? 'bg-success hover:bg-success/90'
              : 'bg-warning hover:bg-warning/90'
          }`}
        >
          {status === 'CONFERIDO' ? 'Confirmar' : 'Conferir Mesmo Assim'}
        </Button>
      </div>

      {/* Bottom spacing for navigation */}
      <div className="h-24" />
    </div>
  )
}
