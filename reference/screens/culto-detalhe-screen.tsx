"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  ArrowLeft,
  Users,
  Music,
  Wallet,
  Plus,
  Check,
  AlertCircle
} from "lucide-react"
import { cn } from "@/lib/utils"

interface CultoDetalheScreenProps {
  onBack: () => void
  onNavigate: (screen: string, data?: Record<string, unknown>) => void
}

export function CultoDetalheScreen({ onBack, onNavigate }: CultoDetalheScreenProps) {
  const [activeTab, setActiveTab] = useState("resumo")

  const cultoData = {
    id: "2",
    tema: "O Poder da Oracao",
    dataHora: "13/04/2026 19:00",
    status: "EM_ANDAMENTO",
    totalPessoas: 89,
    palavraInicial: "Pr. Joao Silva",
    palavraFinal: "Ev. Maria Santos",
    louvores: [
      { id: "1", nome: "Ana Paula", hino: "Grande e o Senhor" },
      { id: "2", nome: "Carlos Eduardo", hino: "Quao Grande es Tu" },
    ],
    cooperadores: [
      { id: "1", nome: "Jose Carlos", cargo: "Porteiro" },
      { id: "2", nome: "Maria Lucia", cargo: "Recepcao" },
    ],
    musicos: [
      { id: "1", nome: "Pedro Santos" },
      { id: "2", nome: "Julia Oliveira" },
    ],
    visitantes: [
      { id: "1", nome: "Roberto Lima", telefone: "(11) 99999-0001" },
    ],
    financeiro: {
      totalDizimos: 3450.00,
      totalOfertas: 1280.00,
      conferido: false,
    }
  }

  return (
    <div className="min-h-full bg-background pb-24">
      {/* Header */}
      <div className="bg-primary px-6 pt-4 pb-6 rounded-b-3xl">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={onBack}
            className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-primary-foreground" />
          </button>
          <div className="flex-1">
            <Badge className="bg-accent text-accent-foreground font-medium mb-1">
              Em Andamento
            </Badge>
            <h1 className="text-lg font-bold text-primary-foreground">
              {cultoData.tema}
            </h1>
            <p className="text-sm text-primary-foreground/70">{cultoData.dataHora}</p>
          </div>
        </div>

        {/* Cards de Resumo Rapido */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="bg-primary-foreground/10 border-0">
            <CardContent className="p-3 text-center">
              <p className="text-2xl font-bold text-primary-foreground">{cultoData.totalPessoas}</p>
              <p className="text-xs text-primary-foreground/70">Pessoas</p>
            </CardContent>
          </Card>
          <Card className="bg-primary-foreground/10 border-0">
            <CardContent className="p-3 text-center">
              <p className="text-2xl font-bold text-primary-foreground">R$ {cultoData.financeiro.totalDizimos.toLocaleString()}</p>
              <p className="text-xs text-primary-foreground/70">Dizimos</p>
            </CardContent>
          </Card>
          <Card className="bg-primary-foreground/10 border-0">
            <CardContent className="p-3 text-center">
              <p className="text-2xl font-bold text-primary-foreground">R$ {cultoData.financeiro.totalOfertas.toLocaleString()}</p>
              <p className="text-xs text-primary-foreground/70">Ofertas</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 -mt-2">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-4 h-12 rounded-xl bg-muted p-1">
            <TabsTrigger value="resumo" className="rounded-lg text-sm">Resumo</TabsTrigger>
            <TabsTrigger value="louvores" className="rounded-lg text-sm">Louvores</TabsTrigger>
            <TabsTrigger value="pessoas" className="rounded-lg text-sm">Pessoas</TabsTrigger>
            <TabsTrigger value="financeiro" className="rounded-lg text-sm">Financeiro</TabsTrigger>
          </TabsList>

          {/* Tab Resumo */}
          <TabsContent value="resumo" className="mt-4 space-y-4">
            <Card>
              <CardContent className="p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Palavra Inicial</span>
                  <span className="font-medium">{cultoData.palavraInicial}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Palavra Final</span>
                  <span className="font-medium">{cultoData.palavraFinal}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Louvores</span>
                  <span className="font-medium">{cultoData.louvores.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Visitantes</span>
                  <span className="font-medium">{cultoData.visitantes.length}</span>
                </div>
              </CardContent>
            </Card>

            <Card className={cn(
              "border-l-4",
              cultoData.financeiro.conferido ? "border-l-chart-2" : "border-l-accent"
            )}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {cultoData.financeiro.conferido ? (
                      <Check className="w-5 h-5 text-chart-2" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-accent" />
                    )}
                    <div>
                      <p className="font-medium">Conferencia</p>
                      <p className="text-sm text-muted-foreground">
                        {cultoData.financeiro.conferido ? "Conferido" : "Pendente"}
                      </p>
                    </div>
                  </div>
                  {!cultoData.financeiro.conferido && (
                    <Button size="sm" className="rounded-xl">
                      Conferir
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab Louvores */}
          <TabsContent value="louvores" className="mt-4 space-y-3">
            <Button 
              variant="outline" 
              className="w-full h-12 rounded-xl gap-2"
              onClick={() => onNavigate("adicionar-louvor")}
            >
              <Plus className="w-5 h-5" />
              Adicionar Louvor
            </Button>
            
            {cultoData.louvores.map((louvor) => (
              <Card key={louvor.id} className="shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Music className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{louvor.nome}</p>
                      <p className="text-sm text-muted-foreground">{louvor.hino}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Tab Pessoas */}
          <TabsContent value="pessoas" className="mt-4 space-y-4">
            {/* Cooperadores */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Cooperadores</h3>
                <Button variant="ghost" size="sm" className="text-primary">
                  <Plus className="w-4 h-4 mr-1" /> Adicionar
                </Button>
              </div>
              {cultoData.cooperadores.map((coop) => (
                <Card key={coop.id} className="shadow-sm mb-2">
                  <CardContent className="p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <Users className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{coop.nome}</p>
                      <p className="text-xs text-muted-foreground">{coop.cargo}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Visitantes */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Visitantes</h3>
                <Button variant="ghost" size="sm" className="text-primary">
                  <Plus className="w-4 h-4 mr-1" /> Adicionar
                </Button>
              </div>
              {cultoData.visitantes.map((visit) => (
                <Card key={visit.id} className="shadow-sm mb-2">
                  <CardContent className="p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <Users className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{visit.nome}</p>
                      <p className="text-xs text-muted-foreground">{visit.telefone}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Tab Financeiro */}
          <TabsContent value="financeiro" className="mt-4 space-y-4">
            {/* Totais */}
            <div className="grid grid-cols-2 gap-3">
              <Card className="bg-chart-2/10 border-0">
                <CardContent className="p-4 text-center">
                  <Wallet className="w-6 h-6 text-chart-2 mx-auto mb-2" />
                  <p className="text-xl font-bold text-chart-2">
                    R$ {cultoData.financeiro.totalDizimos.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">Total Dizimos</p>
                </CardContent>
              </Card>
              <Card className="bg-accent/10 border-0">
                <CardContent className="p-4 text-center">
                  <Wallet className="w-6 h-6 text-accent-foreground mx-auto mb-2" />
                  <p className="text-xl font-bold text-accent-foreground">
                    R$ {cultoData.financeiro.totalOfertas.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">Total Ofertas</p>
                </CardContent>
              </Card>
            </div>

            {/* Botoes de Acao */}
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full h-12 rounded-xl gap-2"
                onClick={() => onNavigate("registrar-dizimo")}
              >
                <Plus className="w-5 h-5" />
                Registrar Dizimo
              </Button>
              <Button 
                variant="outline" 
                className="w-full h-12 rounded-xl gap-2"
                onClick={() => onNavigate("registrar-oferta")}
              >
                <Plus className="w-5 h-5" />
                Registrar Oferta
              </Button>
            </div>

            {/* Total Geral */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-4 text-center">
                <p className="text-sm opacity-80 mb-1">Total Geral</p>
                <p className="text-3xl font-bold">
                  R$ {(cultoData.financeiro.totalDizimos + cultoData.financeiro.totalOfertas).toLocaleString()}
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
