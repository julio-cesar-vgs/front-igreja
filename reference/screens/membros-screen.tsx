'use client'

import React, { useState } from 'react'
import { Search, Plus, Filter, User, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function MembrosScreen() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('TODOS')

  const membros = [
    { id: 1, nome: 'João Silva', status: 'ATIVO', dizimista: true, telefone: '(11) 98765-4321' },
    { id: 2, nome: 'Maria Santos', status: 'ATIVO', dizimista: true, telefone: '(11) 98765-4322' },
    { id: 3, nome: 'Pedro Oliveira', status: 'INATIVO', dizimista: false, telefone: '(11) 98765-4323' },
    { id: 4, nome: 'Ana Costa', status: 'ATIVO', dizimista: true, telefone: '(11) 98765-4324' },
    { id: 5, nome: 'Carlos Gomes', status: 'ATIVO', dizimista: false, telefone: '(11) 98765-4325' },
  ]

  const filteredMembros = membros.filter(m => {
    const matchSearch = m.nome.toLowerCase().includes(searchTerm.toLowerCase())
    const matchFilter = filterStatus === 'TODOS' || m.status === filterStatus
    return matchSearch && matchFilter
  })

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-primary text-primary-foreground p-4 shadow-md">
        <h1 className="text-2xl font-bold mb-3">Membros</h1>
        
        {/* Search Bar */}
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-primary-foreground/60" />
            <Input
              type="text"
              placeholder="Buscar membro..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-primary-foreground text-foreground placeholder:text-foreground/50 text-base py-2"
            />
          </div>
          <Button 
            size="icon" 
            variant="outline"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0"
          >
            <Filter className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto p-3 bg-secondary">
        {['TODOS', 'ATIVO', 'INATIVO'].map(status => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition ${
              filterStatus === status
                ? 'bg-primary text-primary-foreground'
                : 'bg-background text-foreground border border-border'
            }`}
          >
            {status === 'TODOS' ? 'Todos' : status === 'ATIVO' ? 'Ativos' : 'Inativos'}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {filteredMembros.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <User className="w-12 h-12 text-muted-foreground mb-3" />
            <p className="text-foreground font-medium">Nenhum membro encontrado</p>
            <p className="text-muted-foreground text-sm">Tente outro termo de busca</p>
          </div>
        ) : (
          filteredMembros.map((membro) => (
            <div
              key={membro.id}
              className="bg-card border border-border rounded-xl p-4 flex items-start justify-between hover:bg-secondary/50 transition cursor-pointer"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-foreground font-semibold text-base">{membro.nome}</h3>
                  {membro.dizimista && (
                    <Heart className="w-4 h-4 fill-success text-success" />
                  )}
                </div>
                <p className="text-muted-foreground text-sm">{membro.telefone}</p>
                <div className="flex gap-2 mt-2">
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      membro.status === 'ATIVO'
                        ? 'bg-success/20 text-success'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {membro.status === 'ATIVO' ? 'Ativo' : 'Inativo'}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* FAB - Floating Action Button */}
      <Button 
        className="fixed bottom-24 right-4 rounded-full w-14 h-14 shadow-lg flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground"
        size="lg"
      >
        <Plus className="w-6 h-6" />
      </Button>

      {/* Bottom spacing for navigation */}
      <div className="h-20" />
    </div>
  )
}
