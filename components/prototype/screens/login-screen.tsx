"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Church, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface LoginScreenProps {
  onLogin: () => void
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {}
    
    if (!email) {
      newErrors.email = "Digite seu e-mail"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "E-mail invalido"
    }
    
    if (!password) {
      newErrors.password = "Digite sua senha"
    } else if (password.length < 6) {
      newErrors.password = "Senha deve ter pelo menos 6 caracteres"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validateForm()) return
    
    setIsLoading(true)
    // Simula chamada de API
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    onLogin()
  }

  return (
    <div className="min-h-full bg-gradient-to-b from-primary/5 to-background flex flex-col">
      {/* Header com Logo */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-8 pb-4">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <Church className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-foreground text-center">
          Igreja Ipiranga
        </h1>
        <p className="text-base text-muted-foreground mt-2 text-center">
          Sistema de Gestao
        </p>
      </div>

      {/* Formulario */}
      <div className="px-6 pb-8 space-y-6">
        {/* Campo Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-base font-medium">
            E-mail
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (errors.email) setErrors({ ...errors, email: undefined })
            }}
            className={cn(
              "h-14 text-lg px-4 rounded-xl",
              errors.email && "border-destructive focus-visible:ring-destructive"
            )}
            autoComplete="email"
          />
          {errors.email && (
            <p className="text-sm text-destructive font-medium">{errors.email}</p>
          )}
        </div>

        {/* Campo Senha */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-base font-medium">
            Senha
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                if (errors.password) setErrors({ ...errors, password: undefined })
              }}
              className={cn(
                "h-14 text-lg px-4 pr-12 rounded-xl",
                errors.password && "border-destructive focus-visible:ring-destructive"
              )}
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1"
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-destructive font-medium">{errors.password}</p>
          )}
        </div>

        {/* Link Esqueci Senha */}
        <button className="text-primary font-medium text-base hover:underline">
          Esqueci minha senha
        </button>

        {/* Botao Entrar */}
        <Button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full h-14 text-lg font-semibold rounded-xl mt-4"
          size="lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Entrando...
            </>
          ) : (
            "Entrar"
          )}
        </Button>

        {/* Divisor */}
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-4 text-sm text-muted-foreground">
              ou
            </span>
          </div>
        </div>

        {/* Criar Conta */}
        <Button
          variant="outline"
          className="w-full h-14 text-lg font-semibold rounded-xl"
          size="lg"
        >
          Criar nova conta
        </Button>
      </div>

      {/* Footer */}
      <div className="px-6 pb-20 pt-4 text-center">
        <p className="text-sm text-muted-foreground">
          Versao 1.0.0
        </p>
      </div>
    </div>
  )
}
