"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Plus,
  Calendar,
  Users,
  ChevronRight,
  Filter
} from "lucide-react"
import { cn } from "@/lib/utils"

interface CultosScreenProps {
  onNavigate: (screen: string, data?: Record<string, unknown>) => void
}

const cultosMock = [
  {
    id: "1",
    tema: "A Fe que Move Montanhas",
    dataHora: "20/04/2026 19:00",
    status: "AGENDADO",
    totalPessoas: null,
  },
  {
    id: "2",
    tema: "O Poder da Oracao",
    dataHora: "13/04/2026 19:00",
    status: "EM_ANDAMENTO",
    totalPessoas: 89,
  },
  {
    id: "3",
    tema: "Graca Abundante",
    dataHora: "06/04/2026 19:00",
    status: "FINALIZADO",
    totalPessoas: 124,
  },
  {
    id: "4",
    tema: "Amor Incondicional",
    dataHora: "30/03/2026 19:00",
    status: "FINALIZADO",
    totalPessoas: 98,
  },
]

const statusConfig = {
  AGENDADO: { label: "Agendado", className: "bg-muted text-muted-foreground" },
  EM_ANDAMENTO: { label: "Em Andamento", className: "bg-accent text-accent-foreground" },
  FINALIZADO: { label: "Finalizado", className: "bg-chart-2/20 text-chart-2" },
}

export function CultosScreen({ onNavigate }: CultosScreenProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState<string | null>(null)

  const filteredCultos = cultosMock.filter(culto => {
    const matchesSearch = culto.tema.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = !filterStatus || culto.status === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-full bg-background pb-24">
      {/* Header */}
      <div className="bg-card px-6 pt-4 pb-4 border-b border-border sticky top-0 z-10">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-foreground">Cultos</h1>
          <Button 
            size="sm" 
            className="rounded-xl gap-2"
            onClick={() => onNavigate("novo-culto")}
          >
            <Plus className="w-4 h-4" />
            Novo
          </Button>
        </div>
        
        {/* Busca */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Buscar por tema..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 rounded-xl text-base"
          />
        </div>

        {/* Filtros */}
        <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-1">
          <Button
            variant={filterStatus === null ? "default" : "outline"}
            size="sm"
            className="rounded-full text-sm whitespace-nowrap"
            onClick={() => setFilterStatus(null)}
          >
            Todos
          </Button>
          <Button
            variant={filterStatus === "EM_ANDAMENTO" ? "default" : "outline"}
            size="sm"
            className="rounded-full text-sm whitespace-nowrap"
            onClick={() => setFilterStatus("EM_ANDAMENTO")}
          >
            Em Andamento
          </Button>
          <Button
            variant={filterStatus === "AGENDADO" ? "default" : "outline"}
            size="sm"
            className="rounded-full text-sm whitespace-nowrap"
            onClick={() => setFilterStatus("AGENDADO")}
          >
            Agendados
          </Button>
          <Button
            variant={filterStatus === "FINALIZADO" ? "default" : "outline"}
            size="sm"
            className="rounded-full text-sm whitespace-nowrap"
            onClick={() => setFilterStatus("FINALIZADO")}
          >
            Finalizados
          </Button>
        </div>
      </div>

      {/* Lista de Cultos */}
      <div className="px-6 py-4 space-y-3">
        {filteredCultos.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">Nenhum culto encontrado</p>
          </div>
        ) : (
          filteredCultos.map((culto) => {
            const status = statusConfig[culto.status as keyof typeof statusConfig]
            
            return (
              <Card 
                key={culto.id}
                className={cn(
                  "shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-[0.98]",
                  culto.status === "EM_ANDAMENTO" && "border-l-4 border-l-accent"
                )}
                onClick={() => onNavigate("culto-detalhe", { cultoId: culto.id })}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className={cn("font-medium text-xs", status.className)}>
                          {status.label}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-foreground text-base mb-1 truncate">
                        {culto.tema}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{culto.dataHora}</span>
                        </div>
                        {culto.totalPessoas && (
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{culto.totalPessoas} pessoas</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-2" />
                  </div>
                </CardContent>
              </Card>
            )
          })
        )}
      </div>
    </div>
  )
}
