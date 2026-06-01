'use client'

import React, { useState } from 'react'
import { ArrowLeft, Phone, Mail, MapPin, Edit, Heart, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function MembroDetalheScreen({ onBack }: { onBack: () => void }) {
  const [isFavorited, setIsFavorited] = useState(false)

  const membro = {
    id: 1,
    nome: 'João Silva Santos',
    email: 'joao.silva@email.com',
    telefone: '(11) 98765-4321',
    endereco: 'Rua Principal, 123 - São Paulo, SP',
    dataNascimento: '15/06/1980',
    dataMembresia: '10/01/2015',
    status: 'ATIVO',
    dizimista: true,
    observacoes: 'Membro ativo e comprometido. Participa do louvor.',
    dizimosAno: 12,
    totalDizimos: 'R$ 6.240,00'
  }

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-primary text-primary-foreground p-4 flex items-center justify-between shadow-md">
        <button
          onClick={onBack}
          className="p-2 hover:bg-primary-foreground/20 rounded-lg transition"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold flex-1 text-center">Perfil do Membro</h1>
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="p-2 hover:bg-primary-foreground/20 rounded-lg transition"
        >
          <Heart
            className={`w-6 h-6 ${isFavorited ? 'fill-accent' : ''}`}
            color={isFavorited ? 'currentColor' : 'currentColor'}
          />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Avatar Section */}
        <div className="bg-gradient-to-b from-primary to-primary/80 text-primary-foreground p-6 text-center">
          <div className="w-20 h-20 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-3">
            <span className="text-4xl font-bold">{membro.nome.charAt(0)}</span>
          </div>
          <h2 className="text-2xl font-bold mb-1">{membro.nome}</h2>
          <p className="text-primary-foreground/80">Membro desde {membro.dataMembresia}</p>
          <div className="flex gap-2 justify-center mt-3">
            <span className="text-xs bg-primary-foreground/20 px-3 py-1 rounded-full font-medium">
              {membro.status === 'ATIVO' ? 'Ativo' : membro.status}
            </span>
            {membro.dizimista && (
              <span className="text-xs bg-accent/80 px-3 py-1 rounded-full font-medium">
                Dizimista
              </span>
            )}
          </div>
        </div>

        {/* Info Cards */}
        <div className="p-4 space-y-3">
          {/* Contato */}
          <div className="bg-card border border-border rounded-xl p-4">
            <h3 className="text-foreground font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wide">Telefone</p>
                  <p className="text-foreground font-medium">{membro.telefone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-muted-foreground text-xs uppercase tracking-wide">Email</p>
                  <p className="text-foreground font-medium break-all">{membro.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-muted-foreground text-xs uppercase tracking-wide">Endereço</p>
                  <p className="text-foreground font-medium">{membro.endereco}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dados Pessoais */}
          <div className="bg-card border border-border rounded-xl p-4">
            <h3 className="text-foreground font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Informações Pessoais</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-muted-foreground text-xs uppercase tracking-wide">Data de Nascimento</p>
                  <p className="text-foreground font-medium">{membro.dataNascimento}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-muted-foreground text-xs uppercase tracking-wide">Data de Membresia</p>
                  <p className="text-foreground font-medium">{membro.dataMembresia}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Financeiro */}
          <div className="bg-card border border-border rounded-xl p-4">
            <h3 className="text-foreground font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Contribuições</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-success/10 rounded-lg p-3">
                <p className="text-muted-foreground text-xs uppercase tracking-wide">Dizimos em {new Date().getFullYear()}</p>
                <p className="text-lg font-bold text-success mt-1">{membro.dizimosAno}</p>
              </div>
              <div className="bg-primary/10 rounded-lg p-3">
                <p className="text-muted-foreground text-xs uppercase tracking-wide">Total Dízimos</p>
                <p className="text-lg font-bold text-primary mt-1">{membro.totalDizimos}</p>
              </div>
            </div>
          </div>

          {/* Observações */}
          {membro.observacoes && (
            <div className="bg-card border border-border rounded-xl p-4">
              <h3 className="text-foreground font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">Observações</h3>
              <p className="text-foreground text-sm leading-relaxed">{membro.observacoes}</p>
            </div>
          )}
        </div>

        {/* Bottom spacing */}
        <div className="h-6" />
      </div>

      {/* Action Button */}
      <div className="fixed bottom-20 left-4 right-4 flex gap-2">
        <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-3 h-auto text-base font-semibold">
          <Edit className="w-5 h-5 mr-2" />
          Editar
        </Button>
      </div>

      {/* Bottom spacing for navigation */}
      <div className="h-24" />
    </div>
  )
}
