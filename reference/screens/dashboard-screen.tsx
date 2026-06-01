"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  Wallet, 
  Church, 
  TrendingUp,
  ChevronRight,
  Calendar,
  Bell
} from "lucide-react"

interface DashboardScreenProps {
  onNavigate: (screen: string) => void
}

export function DashboardScreen({ onNavigate }: DashboardScreenProps) {
  return (
    <div className="min-h-full bg-background pb-24">
      {/* Header */}
      <div className="bg-primary px-6 pt-4 pb-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-primary-foreground/80 text-sm">Bem-vindo,</p>
            <h1 className="text-xl font-bold text-primary-foreground">Pastor Joao</h1>
          </div>
          <button className="relative p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
            <Bell className="w-6 h-6 text-primary-foreground" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-accent rounded-full" />
          </button>
        </div>
        
        {/* Igreja Selecionada */}
        <Card className="bg-primary-foreground/10 border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Church className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">Igreja Ipiranga - Matriz</p>
                  <p className="text-sm text-primary-foreground/70">Sede Principal</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-primary-foreground/50" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cards de Resumo */}
      <div className="px-6 -mt-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Card Membros */}
          <Card className="shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => onNavigate("membros")}>
            <CardContent className="p-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <p className="text-2xl font-bold text-foreground">156</p>
              <p className="text-sm text-muted-foreground">Membros Ativos</p>
            </CardContent>
          </Card>

          {/* Card Financeiro */}
          <Card className="shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => onNavigate("financeiro")}>
            <CardContent className="p-4">
              <div className="w-10 h-10 rounded-xl bg-chart-2/20 flex items-center justify-center mb-3">
                <Wallet className="w-5 h-5 text-chart-2" />
              </div>
              <p className="text-2xl font-bold text-foreground">R$ 12.450</p>
              <p className="text-sm text-muted-foreground">Este Mes</p>
            </CardContent>
          </Card>
        </div>

        {/* Card Crescimento */}
        <Card className="shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Crescimento</p>
                  <p className="text-sm text-muted-foreground">vs. mes anterior</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-chart-2/20 text-chart-2 font-semibold">
                +12%
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Proximo Culto */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-foreground">Proximo Culto</h2>
            <button 
              onClick={() => onNavigate("cultos")}
              className="text-primary font-medium text-sm"
            >
              Ver todos
            </button>
          </div>
          
          <Card className="shadow-sm border-l-4 border-l-primary">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-base mb-1">
                    Culto de Domingo
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Tema: A Fe que Move Montanhas
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Domingo, 20/04 as 19h</span>
                  </div>
                </div>
                <Badge className="bg-accent text-accent-foreground font-medium">
                  Em 2 dias
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Acoes Rapidas */}
        <div className="pt-2">
          <h2 className="text-lg font-semibold text-foreground mb-3">Acoes Rapidas</h2>
          
          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              className="h-auto py-4 flex flex-col items-center gap-2 rounded-xl"
              onClick={() => onNavigate("novo-culto")}
            >
              <Church className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Novo Culto</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-auto py-4 flex flex-col items-center gap-2 rounded-xl"
              onClick={() => onNavigate("novo-membro")}
            >
              <Users className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Novo Membro</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-auto py-4 flex flex-col items-center gap-2 rounded-xl"
              onClick={() => onNavigate("registrar-dizimo")}
            >
              <Wallet className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Registrar Dizimo</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-auto py-4 flex flex-col items-center gap-2 rounded-xl"
              onClick={() => onNavigate("relatorios")}
            >
              <TrendingUp className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Relatorios</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
