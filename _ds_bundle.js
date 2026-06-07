/* @ds-bundle: {"format":3,"namespace":"IgrejaIpirangaDesignSystem_cdefa5","components":[{"name":"BottomNavigation","sourcePath":"reference/bottom-navigation.tsx"},{"name":"PhoneFrame","sourcePath":"reference/phone-frame.tsx"},{"name":"ConferenciaScreen","sourcePath":"reference/screens/conferencia-screen.tsx"},{"name":"CultoDetalheScreen","sourcePath":"reference/screens/culto-detalhe-screen.tsx"},{"name":"CultosScreen","sourcePath":"reference/screens/cultos-screen.tsx"},{"name":"DashboardScreen","sourcePath":"reference/screens/dashboard-screen.tsx"},{"name":"FinanceiroScreen","sourcePath":"reference/screens/financeiro-screen.tsx"},{"name":"LoginScreen","sourcePath":"reference/screens/login-screen.tsx"},{"name":"MembroDetalheScreen","sourcePath":"reference/screens/membro-detalhe-screen.tsx"},{"name":"MembrosScreen","sourcePath":"reference/screens/membros-screen.tsx"}],"sourceHashes":{"reference/bottom-navigation.tsx":"45ada6d0e018","reference/phone-frame.tsx":"11baa287502f","reference/screens/conferencia-screen.tsx":"c7aa1a097437","reference/screens/culto-detalhe-screen.tsx":"61cd93f8db55","reference/screens/cultos-screen.tsx":"35dcd1da8e4b","reference/screens/dashboard-screen.tsx":"80c4c63252c1","reference/screens/financeiro-screen.tsx":"ee252914f253","reference/screens/login-screen.tsx":"1409f87ea3c3","reference/screens/membro-detalhe-screen.tsx":"af1bfc7395fd","reference/screens/membros-screen.tsx":"775f85aae62a","ui_kits/mobile-app/kit-data.jsx":"700ec995d4f3","ui_kits/mobile-app/kit-forms-culto.jsx":"ae64d1a3283a","ui_kits/mobile-app/kit-forms-membro.jsx":"c774f1366196","ui_kits/mobile-app/kit-forms.jsx":"2a80a1623a2a","ui_kits/mobile-app/kit-modals.jsx":"25419cb3ff06","ui_kits/mobile-app/kit-screens-a.jsx":"9e8f22f6acb5","ui_kits/mobile-app/kit-screens-b.jsx":"ec1fd25da94f","ui_kits/mobile-app/kit-ui.jsx":"a46b5bf9a2c8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.IgrejaIpirangaDesignSystem_cdefa5 = window.IgrejaIpirangaDesignSystem_cdefa5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// reference/bottom-navigation.tsx
try { (() => {
"use client";

const tabs = [{
  id: "home",
  label: "Inicio",
  icon: Home
}, {
  id: "cultos",
  label: "Cultos",
  icon: Church
}, {
  id: "membros",
  label: "Membros",
  icon: Users
}, {
  id: "financeiro",
  label: "Financeiro",
  icon: Wallet
}, {
  id: "menu",
  label: "Menu",
  icon: Menu
}];
function BottomNavigation({
  activeTab,
  onTabChange
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "fixed bottom-0 left-0 right-0 bg-card border-t border-border pb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-around py-2"
  }, tabs.map(tab => {
    const Icon = tab.icon;
    const isActive = activeTab === tab.id;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      onClick: () => onTabChange(tab.id),
      className: cn("flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all min-w-[64px]", "active:scale-95", isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground")
    }, /*#__PURE__*/React.createElement(Icon, {
      className: cn("w-6 h-6 transition-all", isActive && "scale-110")
    }), /*#__PURE__*/React.createElement("span", {
      className: cn("text-xs font-medium", isActive && "font-semibold")
    }, tab.label));
  })));
}
Object.assign(__ds_scope, { BottomNavigation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "reference/bottom-navigation.tsx", error: String((e && e.message) || e) }); }

// reference/phone-frame.tsx
try { (() => {
"use client";

function PhoneFrame({
  children,
  className,
  showStatusBar = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: cn("relative mx-auto w-[375px] h-[812px] bg-background rounded-[3rem] shadow-2xl border-8 border-foreground/10 overflow-hidden", className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-foreground/10 rounded-b-2xl z-50"
  }), showStatusBar && /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 right-0 h-12 bg-background z-40 flex items-end justify-between px-6 pb-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-medium text-foreground"
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4 text-foreground",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z"
  })), /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4 text-foreground",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"
  })), /*#__PURE__*/React.createElement("svg", {
    className: "w-6 h-4 text-foreground",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "7",
    width: "18",
    height: "10",
    rx: "2",
    stroke: "currentColor",
    strokeWidth: "1.5",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "10",
    width: "2",
    height: "4",
    rx: "0.5",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "9",
    width: "12",
    height: "6",
    rx: "1",
    fill: "currentColor"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-12 left-0 right-0 bottom-0 overflow-y-auto overflow-x-hidden"
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/30 rounded-full"
  }));
}
Object.assign(__ds_scope, { PhoneFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "reference/phone-frame.tsx", error: String((e && e.message) || e) }); }

// reference/screens/conferencia-screen.tsx
try { (() => {
'use client';

const {
  useState
} = React;
function ConferenciaScreen({
  onBack
}) {
  const [valorConferido, setValorConferido] = useState('15650.50');
  const dados = {
    dizimosCalculado: 12450.50,
    ofertasCalculado: 3200.00,
    totalCalculado: 15650.50
  };
  const valor = parseFloat(valorConferido.replace(',', '.')) || 0;
  const diferenca = valor - dados.totalCalculado;
  const status = Math.abs(diferenca) < 0.01 ? 'CONFERIDO' : 'DIVERGENTE';
  const formatCurrency = value => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col h-screen bg-background text-foreground"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sticky top-0 z-10 bg-primary text-primary-foreground p-4 flex items-center gap-3 shadow-md"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    className: "p-2 hover:bg-primary-foreground/20 rounded-lg transition"
  }, /*#__PURE__*/React.createElement(ArrowLeft, {
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("h1", {
    className: "text-xl font-bold"
  }, "Confer\xEAncia Financeira")), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-y-auto p-4 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: `rounded-xl p-4 border flex items-start gap-3 ${status === 'CONFERIDO' ? 'bg-success/10 border-success' : 'bg-warning/10 border-warning'}`
  }, status === 'CONFERIDO' ? /*#__PURE__*/React.createElement(CheckCircle2, {
    className: "w-5 h-5 text-success flex-shrink-0 mt-0.5"
  }) : /*#__PURE__*/React.createElement(AlertCircle, {
    className: "w-5 h-5 text-warning flex-shrink-0 mt-0.5"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: `font-semibold ${status === 'CONFERIDO' ? 'text-success' : 'text-warning'}`
  }, status === 'CONFERIDO' ? 'Conferência OK' : 'Divergência Detectada'), /*#__PURE__*/React.createElement("p", {
    className: "text-muted-foreground text-sm mt-1"
  }, status === 'CONFERIDO' ? 'Os valores conferem perfeitamente.' : `Diferença de ${formatCurrency(Math.abs(diferenca))}`))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-sm font-bold uppercase tracking-wide text-muted-foreground"
  }, "Valores Calculados"), /*#__PURE__*/React.createElement("div", {
    className: "bg-card border border-border rounded-xl p-4 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-3 border-b border-border"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(DollarSign, {
    className: "w-5 h-5 text-success"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-foreground font-medium"
  }, "D\xEDzimos")), /*#__PURE__*/React.createElement("span", {
    className: "text-foreground font-bold"
  }, formatCurrency(dados.dizimosCalculado))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-3 border-b border-border"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Gift, {
    className: "w-5 h-5 text-accent"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-foreground font-medium"
  }, "Ofertas")), /*#__PURE__*/React.createElement("span", {
    className: "text-foreground font-bold"
  }, formatCurrency(dados.ofertasCalculado))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pt-2 bg-primary/10 -mx-4 -mb-4 px-4 py-3 rounded-b-xl"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-foreground font-bold"
  }, "Total Calculado"), /*#__PURE__*/React.createElement("span", {
    className: "text-lg font-bold text-primary"
  }, formatCurrency(dados.totalCalculado))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-bold uppercase tracking-wide text-muted-foreground"
  }, "Valor Conferido (Digite o total do dinheiro contado)"), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(DollarSign, {
    className: "absolute left-3 top-3.5 w-5 h-5 text-muted-foreground"
  }), /*#__PURE__*/React.createElement(Input, {
    type: "text",
    value: valorConferido,
    onChange: e => setValorConferido(e.target.value),
    placeholder: "0,00",
    className: "pl-10 text-xl font-bold bg-card border-2 border-primary/30 focus:border-primary rounded-lg py-3 text-foreground"
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-muted-foreground mt-2"
  }, "Use ponto ou v\xEDrgula como separador decimal")), /*#__PURE__*/React.createElement("div", {
    className: "bg-card border-2 border-border rounded-xl p-4 space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-muted-foreground uppercase tracking-wide font-medium"
  }, "Detalhes da Confer\xEAncia"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 pt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-foreground"
  }, "Total Calculado"), /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-foreground"
  }, formatCurrency(dados.totalCalculado))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-foreground"
  }, "Total Conferido"), /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-foreground"
  }, formatCurrency(valor))), /*#__PURE__*/React.createElement("div", {
    className: "border-t border-border pt-2 flex justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: `font-bold ${diferenca >= 0 ? 'text-success' : 'text-destructive'}`
  }, diferenca >= 0 ? 'Excesso' : 'Falta'), /*#__PURE__*/React.createElement("span", {
    className: `font-bold text-lg ${diferenca >= 0 ? 'text-success' : 'text-destructive'}`
  }, diferenca >= 0 ? '+' : '', formatCurrency(diferenca))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-sm font-bold uppercase tracking-wide text-muted-foreground"
  }, "Observa\xE7\xF5es (Opcional)"), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Ex: Faltaram alguns trocados, valor j\xE1 descontado...",
    className: "w-full bg-card border border-border rounded-lg p-3 text-foreground placeholder:text-muted-foreground/50 text-base focus:border-primary focus:outline-none",
    rows: 3
  })), /*#__PURE__*/React.createElement("div", {
    className: "h-6"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-20 left-4 right-4 flex gap-2"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    className: "flex-1 border-border text-foreground hover:bg-secondary rounded-lg py-3 h-auto text-base font-semibold",
    onClick: onBack
  }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
    className: `flex-1 rounded-lg py-3 h-auto text-base font-semibold text-white ${status === 'CONFERIDO' ? 'bg-success hover:bg-success/90' : 'bg-warning hover:bg-warning/90'}`
  }, status === 'CONFERIDO' ? 'Confirmar' : 'Conferir Mesmo Assim')), /*#__PURE__*/React.createElement("div", {
    className: "h-24"
  }));
}
Object.assign(__ds_scope, { ConferenciaScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "reference/screens/conferencia-screen.tsx", error: String((e && e.message) || e) }); }

// reference/screens/culto-detalhe-screen.tsx
try { (() => {
"use client";

const {
  useState
} = React;
function CultoDetalheScreen({
  onBack,
  onNavigate
}) {
  const [activeTab, setActiveTab] = useState("resumo");
  const cultoData = {
    id: "2",
    tema: "O Poder da Oracao",
    dataHora: "13/04/2026 19:00",
    status: "EM_ANDAMENTO",
    totalPessoas: 89,
    palavraInicial: "Pr. Joao Silva",
    palavraFinal: "Ev. Maria Santos",
    louvores: [{
      id: "1",
      nome: "Ana Paula",
      hino: "Grande e o Senhor"
    }, {
      id: "2",
      nome: "Carlos Eduardo",
      hino: "Quao Grande es Tu"
    }],
    cooperadores: [{
      id: "1",
      nome: "Jose Carlos",
      cargo: "Porteiro"
    }, {
      id: "2",
      nome: "Maria Lucia",
      cargo: "Recepcao"
    }],
    musicos: [{
      id: "1",
      nome: "Pedro Santos"
    }, {
      id: "2",
      nome: "Julia Oliveira"
    }],
    visitantes: [{
      id: "1",
      nome: "Roberto Lima",
      telefone: "(11) 99999-0001"
    }],
    financeiro: {
      totalDizimos: 3450.00,
      totalOfertas: 1280.00,
      conferido: false
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-full bg-background pb-24"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-primary px-6 pt-4 pb-6 rounded-b-3xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    className: "p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
  }, /*#__PURE__*/React.createElement(ArrowLeft, {
    className: "w-5 h-5 text-primary-foreground"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement(Badge, {
    className: "bg-accent text-accent-foreground font-medium mb-1"
  }, "Em Andamento"), /*#__PURE__*/React.createElement("h1", {
    className: "text-lg font-bold text-primary-foreground"
  }, cultoData.tema), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-primary-foreground/70"
  }, cultoData.dataHora))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-3"
  }, /*#__PURE__*/React.createElement(Card, {
    className: "bg-primary-foreground/10 border-0"
  }, /*#__PURE__*/React.createElement(CardContent, {
    className: "p-3 text-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-2xl font-bold text-primary-foreground"
  }, cultoData.totalPessoas), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-primary-foreground/70"
  }, "Pessoas"))), /*#__PURE__*/React.createElement(Card, {
    className: "bg-primary-foreground/10 border-0"
  }, /*#__PURE__*/React.createElement(CardContent, {
    className: "p-3 text-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-2xl font-bold text-primary-foreground"
  }, "R$ ", cultoData.financeiro.totalDizimos.toLocaleString()), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-primary-foreground/70"
  }, "Dizimos"))), /*#__PURE__*/React.createElement(Card, {
    className: "bg-primary-foreground/10 border-0"
  }, /*#__PURE__*/React.createElement(CardContent, {
    className: "p-3 text-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-2xl font-bold text-primary-foreground"
  }, "R$ ", cultoData.financeiro.totalOfertas.toLocaleString()), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-primary-foreground/70"
  }, "Ofertas"))))), /*#__PURE__*/React.createElement("div", {
    className: "px-6 -mt-2"
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: activeTab,
    onValueChange: setActiveTab,
    className: "w-full"
  }, /*#__PURE__*/React.createElement(TabsList, {
    className: "w-full grid grid-cols-4 h-12 rounded-xl bg-muted p-1"
  }, /*#__PURE__*/React.createElement(TabsTrigger, {
    value: "resumo",
    className: "rounded-lg text-sm"
  }, "Resumo"), /*#__PURE__*/React.createElement(TabsTrigger, {
    value: "louvores",
    className: "rounded-lg text-sm"
  }, "Louvores"), /*#__PURE__*/React.createElement(TabsTrigger, {
    value: "pessoas",
    className: "rounded-lg text-sm"
  }, "Pessoas"), /*#__PURE__*/React.createElement(TabsTrigger, {
    value: "financeiro",
    className: "rounded-lg text-sm"
  }, "Financeiro")), /*#__PURE__*/React.createElement(TabsContent, {
    value: "resumo",
    className: "mt-4 space-y-4"
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardContent, {
    className: "p-4 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-muted-foreground"
  }, "Palavra Inicial"), /*#__PURE__*/React.createElement("span", {
    className: "font-medium"
  }, cultoData.palavraInicial)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-muted-foreground"
  }, "Palavra Final"), /*#__PURE__*/React.createElement("span", {
    className: "font-medium"
  }, cultoData.palavraFinal)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-muted-foreground"
  }, "Louvores"), /*#__PURE__*/React.createElement("span", {
    className: "font-medium"
  }, cultoData.louvores.length)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-muted-foreground"
  }, "Visitantes"), /*#__PURE__*/React.createElement("span", {
    className: "font-medium"
  }, cultoData.visitantes.length)))), /*#__PURE__*/React.createElement(Card, {
    className: cn("border-l-4", cultoData.financeiro.conferido ? "border-l-chart-2" : "border-l-accent")
  }, /*#__PURE__*/React.createElement(CardContent, {
    className: "p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, cultoData.financeiro.conferido ? /*#__PURE__*/React.createElement(Check, {
    className: "w-5 h-5 text-chart-2"
  }) : /*#__PURE__*/React.createElement(AlertCircle, {
    className: "w-5 h-5 text-accent"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-medium"
  }, "Conferencia"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-muted-foreground"
  }, cultoData.financeiro.conferido ? "Conferido" : "Pendente"))), !cultoData.financeiro.conferido && /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    className: "rounded-xl"
  }, "Conferir"))))), /*#__PURE__*/React.createElement(TabsContent, {
    value: "louvores",
    className: "mt-4 space-y-3"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    className: "w-full h-12 rounded-xl gap-2",
    onClick: () => onNavigate("adicionar-louvor")
  }, /*#__PURE__*/React.createElement(Plus, {
    className: "w-5 h-5"
  }), "Adicionar Louvor"), cultoData.louvores.map(louvor => /*#__PURE__*/React.createElement(Card, {
    key: louvor.id,
    className: "shadow-sm"
  }, /*#__PURE__*/React.createElement(CardContent, {
    className: "p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Music, {
    className: "w-5 h-5 text-primary"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-medium"
  }, louvor.nome), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-muted-foreground"
  }, louvor.hino))))))), /*#__PURE__*/React.createElement(TabsContent, {
    value: "pessoas",
    className: "mt-4 space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-2"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-semibold"
  }, "Cooperadores"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    className: "text-primary"
  }, /*#__PURE__*/React.createElement(Plus, {
    className: "w-4 h-4 mr-1"
  }), " Adicionar")), cultoData.cooperadores.map(coop => /*#__PURE__*/React.createElement(Card, {
    key: coop.id,
    className: "shadow-sm mb-2"
  }, /*#__PURE__*/React.createElement(CardContent, {
    className: "p-3 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-full bg-secondary flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Users, {
    className: "w-4 h-4 text-secondary-foreground"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-medium text-sm"
  }, coop.nome), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-muted-foreground"
  }, coop.cargo)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-2"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-semibold"
  }, "Visitantes"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    className: "text-primary"
  }, /*#__PURE__*/React.createElement(Plus, {
    className: "w-4 h-4 mr-1"
  }), " Adicionar")), cultoData.visitantes.map(visit => /*#__PURE__*/React.createElement(Card, {
    key: visit.id,
    className: "shadow-sm mb-2"
  }, /*#__PURE__*/React.createElement(CardContent, {
    className: "p-3 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Users, {
    className: "w-4 h-4 text-accent-foreground"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-medium text-sm"
  }, visit.nome), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-muted-foreground"
  }, visit.telefone))))))), /*#__PURE__*/React.createElement(TabsContent, {
    value: "financeiro",
    className: "mt-4 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement(Card, {
    className: "bg-chart-2/10 border-0"
  }, /*#__PURE__*/React.createElement(CardContent, {
    className: "p-4 text-center"
  }, /*#__PURE__*/React.createElement(Wallet, {
    className: "w-6 h-6 text-chart-2 mx-auto mb-2"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-xl font-bold text-chart-2"
  }, "R$ ", cultoData.financeiro.totalDizimos.toLocaleString()), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-muted-foreground"
  }, "Total Dizimos"))), /*#__PURE__*/React.createElement(Card, {
    className: "bg-accent/10 border-0"
  }, /*#__PURE__*/React.createElement(CardContent, {
    className: "p-4 text-center"
  }, /*#__PURE__*/React.createElement(Wallet, {
    className: "w-6 h-6 text-accent-foreground mx-auto mb-2"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-xl font-bold text-accent-foreground"
  }, "R$ ", cultoData.financeiro.totalOfertas.toLocaleString()), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-muted-foreground"
  }, "Total Ofertas")))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    className: "w-full h-12 rounded-xl gap-2",
    onClick: () => onNavigate("registrar-dizimo")
  }, /*#__PURE__*/React.createElement(Plus, {
    className: "w-5 h-5"
  }), "Registrar Dizimo"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    className: "w-full h-12 rounded-xl gap-2",
    onClick: () => onNavigate("registrar-oferta")
  }, /*#__PURE__*/React.createElement(Plus, {
    className: "w-5 h-5"
  }), "Registrar Oferta")), /*#__PURE__*/React.createElement(Card, {
    className: "bg-primary text-primary-foreground"
  }, /*#__PURE__*/React.createElement(CardContent, {
    className: "p-4 text-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm opacity-80 mb-1"
  }, "Total Geral"), /*#__PURE__*/React.createElement("p", {
    className: "text-3xl font-bold"
  }, "R$ ", (cultoData.financeiro.totalDizimos + cultoData.financeiro.totalOfertas).toLocaleString())))))));
}
Object.assign(__ds_scope, { CultoDetalheScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "reference/screens/culto-detalhe-screen.tsx", error: String((e && e.message) || e) }); }

// reference/screens/cultos-screen.tsx
try { (() => {
"use client";

const {
  useState
} = React;
const cultosMock = [{
  id: "1",
  tema: "A Fe que Move Montanhas",
  dataHora: "20/04/2026 19:00",
  status: "AGENDADO",
  totalPessoas: null
}, {
  id: "2",
  tema: "O Poder da Oracao",
  dataHora: "13/04/2026 19:00",
  status: "EM_ANDAMENTO",
  totalPessoas: 89
}, {
  id: "3",
  tema: "Graca Abundante",
  dataHora: "06/04/2026 19:00",
  status: "FINALIZADO",
  totalPessoas: 124
}, {
  id: "4",
  tema: "Amor Incondicional",
  dataHora: "30/03/2026 19:00",
  status: "FINALIZADO",
  totalPessoas: 98
}];
const statusConfig = {
  AGENDADO: {
    label: "Agendado",
    className: "bg-muted text-muted-foreground"
  },
  EM_ANDAMENTO: {
    label: "Em Andamento",
    className: "bg-accent text-accent-foreground"
  },
  FINALIZADO: {
    label: "Finalizado",
    className: "bg-chart-2/20 text-chart-2"
  }
};
function CultosScreen({
  onNavigate
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState(null);
  const filteredCultos = cultosMock.filter(culto => {
    const matchesSearch = culto.tema.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = !filterStatus || culto.status === filterStatus;
    return matchesSearch && matchesFilter;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-full bg-background pb-24"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-card px-6 pt-4 pb-4 border-b border-border sticky top-0 z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-4"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-xl font-bold text-foreground"
  }, "Cultos"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    className: "rounded-xl gap-2",
    onClick: () => onNavigate("novo-culto")
  }, /*#__PURE__*/React.createElement(Plus, {
    className: "w-4 h-4"
  }), "Novo")), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(Search, {
    className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Buscar por tema...",
    value: searchTerm,
    onChange: e => setSearchTerm(e.target.value),
    className: "pl-10 h-12 rounded-xl text-base"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mt-3 overflow-x-auto pb-1"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: filterStatus === null ? "default" : "outline",
    size: "sm",
    className: "rounded-full text-sm whitespace-nowrap",
    onClick: () => setFilterStatus(null)
  }, "Todos"), /*#__PURE__*/React.createElement(Button, {
    variant: filterStatus === "EM_ANDAMENTO" ? "default" : "outline",
    size: "sm",
    className: "rounded-full text-sm whitespace-nowrap",
    onClick: () => setFilterStatus("EM_ANDAMENTO")
  }, "Em Andamento"), /*#__PURE__*/React.createElement(Button, {
    variant: filterStatus === "AGENDADO" ? "default" : "outline",
    size: "sm",
    className: "rounded-full text-sm whitespace-nowrap",
    onClick: () => setFilterStatus("AGENDADO")
  }, "Agendados"), /*#__PURE__*/React.createElement(Button, {
    variant: filterStatus === "FINALIZADO" ? "default" : "outline",
    size: "sm",
    className: "rounded-full text-sm whitespace-nowrap",
    onClick: () => setFilterStatus("FINALIZADO")
  }, "Finalizados"))), /*#__PURE__*/React.createElement("div", {
    className: "px-6 py-4 space-y-3"
  }, filteredCultos.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "text-center py-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4"
  }, /*#__PURE__*/React.createElement(Calendar, {
    className: "w-8 h-8 text-muted-foreground"
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-muted-foreground"
  }, "Nenhum culto encontrado")) : filteredCultos.map(culto => {
    const status = statusConfig[culto.status];
    return /*#__PURE__*/React.createElement(Card, {
      key: culto.id,
      className: cn("shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-[0.98]", culto.status === "EM_ANDAMENTO" && "border-l-4 border-l-accent"),
      onClick: () => onNavigate("culto-detalhe", {
        cultoId: culto.id
      })
    }, /*#__PURE__*/React.createElement(CardContent, {
      className: "p-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-w-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-1"
    }, /*#__PURE__*/React.createElement(Badge, {
      className: cn("font-medium text-xs", status.className)
    }, status.label)), /*#__PURE__*/React.createElement("h3", {
      className: "font-semibold text-foreground text-base mb-1 truncate"
    }, culto.tema), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4 text-sm text-muted-foreground"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-1"
    }, /*#__PURE__*/React.createElement(Calendar, {
      className: "w-4 h-4"
    }), /*#__PURE__*/React.createElement("span", null, culto.dataHora)), culto.totalPessoas && /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-1"
    }, /*#__PURE__*/React.createElement(Users, {
      className: "w-4 h-4"
    }), /*#__PURE__*/React.createElement("span", null, culto.totalPessoas, " pessoas")))), /*#__PURE__*/React.createElement(ChevronRight, {
      className: "w-5 h-5 text-muted-foreground flex-shrink-0 ml-2"
    }))));
  })));
}
Object.assign(__ds_scope, { CultosScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "reference/screens/cultos-screen.tsx", error: String((e && e.message) || e) }); }

// reference/screens/dashboard-screen.tsx
try { (() => {
"use client";

function DashboardScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-full bg-background pb-24"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-primary px-6 pt-4 pb-8 rounded-b-3xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-primary-foreground/80 text-sm"
  }, "Bem-vindo,"), /*#__PURE__*/React.createElement("h1", {
    className: "text-xl font-bold text-primary-foreground"
  }, "Pastor Joao")), /*#__PURE__*/React.createElement("button", {
    className: "relative p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
  }, /*#__PURE__*/React.createElement(Bell, {
    className: "w-6 h-6 text-primary-foreground"
  }), /*#__PURE__*/React.createElement("span", {
    className: "absolute top-1 right-1 w-2.5 h-2.5 bg-accent rounded-full"
  }))), /*#__PURE__*/React.createElement(Card, {
    className: "bg-primary-foreground/10 border-0"
  }, /*#__PURE__*/React.createElement(CardContent, {
    className: "p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(Church, {
    className: "w-5 h-5 text-primary-foreground"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-primary-foreground"
  }, "Igreja Ipiranga - Matriz"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-primary-foreground/70"
  }, "Sede Principal"))), /*#__PURE__*/React.createElement(ChevronRight, {
    className: "w-5 h-5 text-primary-foreground/50"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "px-6 -mt-4 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement(Card, {
    className: "shadow-sm hover:shadow-md transition-shadow cursor-pointer",
    onClick: () => onNavigate("membros")
  }, /*#__PURE__*/React.createElement(CardContent, {
    className: "p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3"
  }, /*#__PURE__*/React.createElement(Users, {
    className: "w-5 h-5 text-primary"
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-2xl font-bold text-foreground"
  }, "156"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-muted-foreground"
  }, "Membros Ativos"))), /*#__PURE__*/React.createElement(Card, {
    className: "shadow-sm hover:shadow-md transition-shadow cursor-pointer",
    onClick: () => onNavigate("financeiro")
  }, /*#__PURE__*/React.createElement(CardContent, {
    className: "p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-xl bg-chart-2/20 flex items-center justify-center mb-3"
  }, /*#__PURE__*/React.createElement(Wallet, {
    className: "w-5 h-5 text-chart-2"
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-2xl font-bold text-foreground"
  }, "R$ 12.450"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-muted-foreground"
  }, "Este Mes")))), /*#__PURE__*/React.createElement(Card, {
    className: "shadow-sm"
  }, /*#__PURE__*/React.createElement(CardContent, {
    className: "p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(TrendingUp, {
    className: "w-5 h-5 text-accent-foreground"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-semibold text-foreground"
  }, "Crescimento"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-muted-foreground"
  }, "vs. mes anterior"))), /*#__PURE__*/React.createElement(Badge, {
    variant: "secondary",
    className: "bg-chart-2/20 text-chart-2 font-semibold"
  }, "+12%")))), /*#__PURE__*/React.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-semibold text-foreground"
  }, "Proximo Culto"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate("cultos"),
    className: "text-primary font-medium text-sm"
  }, "Ver todos")), /*#__PURE__*/React.createElement(Card, {
    className: "shadow-sm border-l-4 border-l-primary"
  }, /*#__PURE__*/React.createElement(CardContent, {
    className: "p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-semibold text-foreground text-base mb-1"
  }, "Culto de Domingo"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-muted-foreground mb-2"
  }, "Tema: A Fe que Move Montanhas"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-sm text-muted-foreground"
  }, /*#__PURE__*/React.createElement(Calendar, {
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, "Domingo, 20/04 as 19h"))), /*#__PURE__*/React.createElement(Badge, {
    className: "bg-accent text-accent-foreground font-medium"
  }, "Em 2 dias"))))), /*#__PURE__*/React.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-semibold text-foreground mb-3"
  }, "Acoes Rapidas"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    className: "h-auto py-4 flex flex-col items-center gap-2 rounded-xl",
    onClick: () => onNavigate("novo-culto")
  }, /*#__PURE__*/React.createElement(Church, {
    className: "w-6 h-6 text-primary"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-medium"
  }, "Novo Culto")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    className: "h-auto py-4 flex flex-col items-center gap-2 rounded-xl",
    onClick: () => onNavigate("novo-membro")
  }, /*#__PURE__*/React.createElement(Users, {
    className: "w-6 h-6 text-primary"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-medium"
  }, "Novo Membro")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    className: "h-auto py-4 flex flex-col items-center gap-2 rounded-xl",
    onClick: () => onNavigate("registrar-dizimo")
  }, /*#__PURE__*/React.createElement(Wallet, {
    className: "w-6 h-6 text-primary"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-medium"
  }, "Registrar Dizimo")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    className: "h-auto py-4 flex flex-col items-center gap-2 rounded-xl",
    onClick: () => onNavigate("relatorios")
  }, /*#__PURE__*/React.createElement(TrendingUp, {
    className: "w-6 h-6 text-primary"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-medium"
  }, "Relatorios"))))));
}
Object.assign(__ds_scope, { DashboardScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "reference/screens/dashboard-screen.tsx", error: String((e && e.message) || e) }); }

// reference/screens/financeiro-screen.tsx
try { (() => {
'use client';

const {
  useState
} = React;
function FinanceiroScreen() {
  const [showValues, setShowValues] = useState(true);
  const financeiro = {
    dizimosTotal: 12450.50,
    ofertasTotal: 3200.00,
    conferenciaPendente: false,
    ultimaConferencia: '11/05/2026'
  };
  const recentTransactions = [{
    id: 1,
    tipo: 'DIZIMO',
    membro: 'João Silva',
    valor: 250.00,
    data: '11/05/2026',
    formaPagamento: 'PIX'
  }, {
    id: 2,
    tipo: 'OFERTA',
    descricao: 'Oferta - Ação Social',
    valor: 150.00,
    data: '10/05/2026',
    formaPagamento: 'DINHEIRO'
  }, {
    id: 3,
    tipo: 'DIZIMO',
    membro: 'Maria Santos',
    valor: 300.00,
    data: '09/05/2026',
    formaPagamento: 'TRANSFERENCIA'
  }, {
    id: 4,
    tipo: 'OFERTA',
    descricao: 'Oferta - Missões',
    valor: 500.00,
    data: '08/05/2026',
    formaPagamento: 'CARTAO_DEBITO'
  }];
  const formatCurrency = value => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col h-screen bg-background text-foreground"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sticky top-0 z-10 bg-primary text-primary-foreground p-4 shadow-md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold"
  }, "Financeiro"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowValues(!showValues),
    className: "p-2 hover:bg-primary-foreground/20 rounded-lg transition"
  }, showValues ? /*#__PURE__*/React.createElement(Eye, {
    className: "w-5 h-5"
  }) : /*#__PURE__*/React.createElement(EyeOff, {
    className: "w-5 h-5"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "text-primary-foreground/80 text-sm"
  }, "\xDAltima confer\xEAncia: ", financeiro.ultimaConferencia)), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-y-auto p-4 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-br from-success to-success/80 text-white rounded-2xl p-5 shadow-md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between mb-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-success-foreground/90 text-sm font-medium uppercase tracking-wide"
  }, "D\xEDzimos"), /*#__PURE__*/React.createElement("p", {
    className: "text-3xl font-bold mt-1"
  }, showValues ? formatCurrency(financeiro.dizimosTotal) : '••••••••')), /*#__PURE__*/React.createElement("div", {
    className: "bg-white/20 rounded-lg p-2.5"
  }, /*#__PURE__*/React.createElement(DollarSign, {
    className: "w-6 h-6"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 text-success-foreground/80 text-sm"
  }, /*#__PURE__*/React.createElement(TrendingUp, {
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, "+12.5% este m\xEAs"))), /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-br from-accent to-accent/80 text-accent-foreground rounded-2xl p-5 shadow-md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between mb-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-accent-foreground/90 text-sm font-medium uppercase tracking-wide"
  }, "Ofertas"), /*#__PURE__*/React.createElement("p", {
    className: "text-3xl font-bold mt-1"
  }, showValues ? formatCurrency(financeiro.ofertasTotal) : '••••••••')), /*#__PURE__*/React.createElement("div", {
    className: "bg-white/20 rounded-lg p-2.5"
  }, /*#__PURE__*/React.createElement(Gift, {
    className: "w-6 h-6"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 text-accent-foreground/80 text-sm"
  }, /*#__PURE__*/React.createElement(TrendingUp, {
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, "+5.2% este m\xEAs"))), /*#__PURE__*/React.createElement("div", {
    className: "bg-card border-2 border-primary rounded-2xl p-5"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-muted-foreground text-sm font-medium uppercase tracking-wide mb-2"
  }, "Total Recebido"), /*#__PURE__*/React.createElement("p", {
    className: "text-3xl font-bold text-primary mb-3"
  }, showValues ? formatCurrency(financeiro.dizimosTotal + financeiro.ofertasTotal) : '••••••••'), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2 text-xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-success/10 rounded-lg p-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-muted-foreground"
  }, "D\xEDzimos"), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-success"
  }, showValues ? formatCurrency(financeiro.dizimosTotal) : '••••')), /*#__PURE__*/React.createElement("div", {
    className: "bg-accent/10 rounded-lg p-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-muted-foreground"
  }, "Ofertas"), /*#__PURE__*/React.createElement("p", {
    className: "font-bold text-accent"
  }, showValues ? formatCurrency(financeiro.ofertasTotal) : '••••'))))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-2.5 h-auto font-semibold"
  }, "Adicionar Dizimo"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    className: "border-primary text-primary hover:bg-primary/10 rounded-lg py-2.5 h-auto font-semibold"
  }, "Adicionar Oferta")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-bold text-foreground mb-3"
  }, "Transa\xE7\xF5es Recentes"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, recentTransactions.map(tx => /*#__PURE__*/React.createElement("div", {
    key: tx.id,
    className: "bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:bg-secondary/50 transition"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: `w-12 h-12 rounded-lg flex items-center justify-center ${tx.tipo === 'DIZIMO' ? 'bg-success/20' : 'bg-accent/20'}`
  }, tx.tipo === 'DIZIMO' ? /*#__PURE__*/React.createElement(DollarSign, {
    className: `w-6 h-6 ${tx.tipo === 'DIZIMO' ? 'text-success' : 'text-accent'}`
  }) : /*#__PURE__*/React.createElement(Gift, {
    className: `w-6 h-6 ${tx.tipo === 'DIZIMO' ? 'text-success' : 'text-accent'}`
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-foreground font-semibold text-sm"
  }, tx.tipo === 'DIZIMO' ? tx.membro : tx.descricao), /*#__PURE__*/React.createElement("p", {
    className: "text-muted-foreground text-xs"
  }, tx.data, " \u2022 ", tx.formaPagamento.replace(/_/g, ' ')))), /*#__PURE__*/React.createElement("p", {
    className: "text-foreground font-bold text-sm"
  }, showValues ? formatCurrency(tx.valor) : '••••••'))))), /*#__PURE__*/React.createElement("div", {
    className: "h-6"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-20 left-4 right-4"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-3 h-auto text-base font-semibold"
  }, "Conferir Financeiro")), /*#__PURE__*/React.createElement("div", {
    className: "h-24"
  }));
}
Object.assign(__ds_scope, { FinanceiroScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "reference/screens/financeiro-screen.tsx", error: String((e && e.message) || e) }); }

// reference/screens/login-screen.tsx
try { (() => {
"use client";

const {
  useState
} = React;
function LoginScreen({
  onLogin
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Digite seu e-mail";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "E-mail invalido";
    }
    if (!password) {
      newErrors.password = "Digite sua senha";
    } else if (password.length < 6) {
      newErrors.password = "Senha deve ter pelo menos 6 caracteres";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsLoading(true);
    // Simula chamada de API
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    onLogin();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-full bg-gradient-to-b from-primary/5 to-background flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col items-center justify-center px-6 pt-8 pb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6"
  }, /*#__PURE__*/React.createElement(Church, {
    className: "w-12 h-12 text-primary"
  })), /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold text-foreground text-center"
  }, "Igreja Ipiranga"), /*#__PURE__*/React.createElement("p", {
    className: "text-base text-muted-foreground mt-2 text-center"
  }, "Sistema de Gestao")), /*#__PURE__*/React.createElement("div", {
    className: "px-6 pb-8 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "email",
    className: "text-base font-medium"
  }, "E-mail"), /*#__PURE__*/React.createElement(Input, {
    id: "email",
    type: "email",
    placeholder: "seu@email.com",
    value: email,
    onChange: e => {
      setEmail(e.target.value);
      if (errors.email) setErrors({
        ...errors,
        email: undefined
      });
    },
    className: cn("h-14 text-lg px-4 rounded-xl", errors.email && "border-destructive focus-visible:ring-destructive"),
    autoComplete: "email"
  }), errors.email && /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-destructive font-medium"
  }, errors.email)), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "password",
    className: "text-base font-medium"
  }, "Senha"), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "password",
    type: showPassword ? "text" : "password",
    placeholder: "Digite sua senha",
    value: password,
    onChange: e => {
      setPassword(e.target.value);
      if (errors.password) setErrors({
        ...errors,
        password: undefined
      });
    },
    className: cn("h-14 text-lg px-4 pr-12 rounded-xl", errors.password && "border-destructive focus-visible:ring-destructive"),
    autoComplete: "current-password"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setShowPassword(!showPassword),
    className: "absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1",
    "aria-label": showPassword ? "Ocultar senha" : "Mostrar senha"
  }, showPassword ? /*#__PURE__*/React.createElement(EyeOff, {
    className: "w-5 h-5"
  }) : /*#__PURE__*/React.createElement(Eye, {
    className: "w-5 h-5"
  }))), errors.password && /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-destructive font-medium"
  }, errors.password)), /*#__PURE__*/React.createElement("button", {
    className: "text-primary font-medium text-base hover:underline"
  }, "Esqueci minha senha"), /*#__PURE__*/React.createElement(Button, {
    onClick: handleSubmit,
    disabled: isLoading,
    className: "w-full h-14 text-lg font-semibold rounded-xl mt-4",
    size: "lg"
  }, isLoading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Loader2, {
    className: "w-5 h-5 mr-2 animate-spin"
  }), "Entrando...") : "Entrar"), /*#__PURE__*/React.createElement("div", {
    className: "relative py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 flex items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full border-t border-border"
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative flex justify-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-background px-4 text-sm text-muted-foreground"
  }, "ou"))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    className: "w-full h-14 text-lg font-semibold rounded-xl",
    size: "lg"
  }, "Criar nova conta")), /*#__PURE__*/React.createElement("div", {
    className: "px-6 pb-20 pt-4 text-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-muted-foreground"
  }, "Versao 1.0.0")));
}
Object.assign(__ds_scope, { LoginScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "reference/screens/login-screen.tsx", error: String((e && e.message) || e) }); }

// reference/screens/membro-detalhe-screen.tsx
try { (() => {
'use client';

const {
  useState
} = React;
function MembroDetalheScreen({
  onBack
}) {
  const [isFavorited, setIsFavorited] = useState(false);
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
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col h-screen bg-background text-foreground"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sticky top-0 z-10 bg-primary text-primary-foreground p-4 flex items-center justify-between shadow-md"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    className: "p-2 hover:bg-primary-foreground/20 rounded-lg transition"
  }, /*#__PURE__*/React.createElement(ArrowLeft, {
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("h1", {
    className: "text-xl font-bold flex-1 text-center"
  }, "Perfil do Membro"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsFavorited(!isFavorited),
    className: "p-2 hover:bg-primary-foreground/20 rounded-lg transition"
  }, /*#__PURE__*/React.createElement(Heart, {
    className: `w-6 h-6 ${isFavorited ? 'fill-accent' : ''}`,
    color: isFavorited ? 'currentColor' : 'currentColor'
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-y-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-b from-primary to-primary/80 text-primary-foreground p-6 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-20 h-20 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-4xl font-bold"
  }, membro.nome.charAt(0))), /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-bold mb-1"
  }, membro.nome), /*#__PURE__*/React.createElement("p", {
    className: "text-primary-foreground/80"
  }, "Membro desde ", membro.dataMembresia), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 justify-center mt-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs bg-primary-foreground/20 px-3 py-1 rounded-full font-medium"
  }, membro.status === 'ATIVO' ? 'Ativo' : membro.status), membro.dizimista && /*#__PURE__*/React.createElement("span", {
    className: "text-xs bg-accent/80 px-3 py-1 rounded-full font-medium"
  }, "Dizimista"))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-card border border-border rounded-xl p-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-foreground font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground"
  }, "Contato"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement(Phone, {
    className: "w-5 h-5 text-primary flex-shrink-0"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "text-muted-foreground text-xs uppercase tracking-wide"
  }, "Telefone"), /*#__PURE__*/React.createElement("p", {
    className: "text-foreground font-medium"
  }, membro.telefone))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3"
  }, /*#__PURE__*/React.createElement(Mail, {
    className: "w-5 h-5 text-primary flex-shrink-0 mt-1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-muted-foreground text-xs uppercase tracking-wide"
  }, "Email"), /*#__PURE__*/React.createElement("p", {
    className: "text-foreground font-medium break-all"
  }, membro.email))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-3"
  }, /*#__PURE__*/React.createElement(MapPin, {
    className: "w-5 h-5 text-primary flex-shrink-0 mt-1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-muted-foreground text-xs uppercase tracking-wide"
  }, "Endere\xE7o"), /*#__PURE__*/React.createElement("p", {
    className: "text-foreground font-medium"
  }, membro.endereco))))), /*#__PURE__*/React.createElement("div", {
    className: "bg-card border border-border rounded-xl p-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-foreground font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground"
  }, "Informa\xE7\xF5es Pessoais"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement(Calendar, {
    className: "w-5 h-5 text-primary flex-shrink-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-muted-foreground text-xs uppercase tracking-wide"
  }, "Data de Nascimento"), /*#__PURE__*/React.createElement("p", {
    className: "text-foreground font-medium"
  }, membro.dataNascimento))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement(Calendar, {
    className: "w-5 h-5 text-primary flex-shrink-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-muted-foreground text-xs uppercase tracking-wide"
  }, "Data de Membresia"), /*#__PURE__*/React.createElement("p", {
    className: "text-foreground font-medium"
  }, membro.dataMembresia))))), /*#__PURE__*/React.createElement("div", {
    className: "bg-card border border-border rounded-xl p-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-foreground font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground"
  }, "Contribui\xE7\xF5es"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-success/10 rounded-lg p-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-muted-foreground text-xs uppercase tracking-wide"
  }, "Dizimos em ", new Date().getFullYear()), /*#__PURE__*/React.createElement("p", {
    className: "text-lg font-bold text-success mt-1"
  }, membro.dizimosAno)), /*#__PURE__*/React.createElement("div", {
    className: "bg-primary/10 rounded-lg p-3"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-muted-foreground text-xs uppercase tracking-wide"
  }, "Total D\xEDzimos"), /*#__PURE__*/React.createElement("p", {
    className: "text-lg font-bold text-primary mt-1"
  }, membro.totalDizimos)))), membro.observacoes && /*#__PURE__*/React.createElement("div", {
    className: "bg-card border border-border rounded-xl p-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-foreground font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground"
  }, "Observa\xE7\xF5es"), /*#__PURE__*/React.createElement("p", {
    className: "text-foreground text-sm leading-relaxed"
  }, membro.observacoes))), /*#__PURE__*/React.createElement("div", {
    className: "h-6"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-20 left-4 right-4 flex gap-2"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-3 h-auto text-base font-semibold"
  }, /*#__PURE__*/React.createElement(Edit, {
    className: "w-5 h-5 mr-2"
  }), "Editar")), /*#__PURE__*/React.createElement("div", {
    className: "h-24"
  }));
}
Object.assign(__ds_scope, { MembroDetalheScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "reference/screens/membro-detalhe-screen.tsx", error: String((e && e.message) || e) }); }

// reference/screens/membros-screen.tsx
try { (() => {
'use client';

const {
  useState
} = React;
function MembrosScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('TODOS');
  const membros = [{
    id: 1,
    nome: 'João Silva',
    status: 'ATIVO',
    dizimista: true,
    telefone: '(11) 98765-4321'
  }, {
    id: 2,
    nome: 'Maria Santos',
    status: 'ATIVO',
    dizimista: true,
    telefone: '(11) 98765-4322'
  }, {
    id: 3,
    nome: 'Pedro Oliveira',
    status: 'INATIVO',
    dizimista: false,
    telefone: '(11) 98765-4323'
  }, {
    id: 4,
    nome: 'Ana Costa',
    status: 'ATIVO',
    dizimista: true,
    telefone: '(11) 98765-4324'
  }, {
    id: 5,
    nome: 'Carlos Gomes',
    status: 'ATIVO',
    dizimista: false,
    telefone: '(11) 98765-4325'
  }];
  const filteredMembros = membros.filter(m => {
    const matchSearch = m.nome.toLowerCase().includes(searchTerm.toLowerCase());
    const matchFilter = filterStatus === 'TODOS' || m.status === filterStatus;
    return matchSearch && matchFilter;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col h-screen bg-background text-foreground"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sticky top-0 z-10 bg-primary text-primary-foreground p-4 shadow-md"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl font-bold mb-3"
  }, "Membros"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 relative"
  }, /*#__PURE__*/React.createElement(Search, {
    className: "absolute left-3 top-3 w-5 h-5 text-primary-foreground/60"
  }), /*#__PURE__*/React.createElement(Input, {
    type: "text",
    placeholder: "Buscar membro...",
    value: searchTerm,
    onChange: e => setSearchTerm(e.target.value),
    className: "pl-10 bg-primary-foreground text-foreground placeholder:text-foreground/50 text-base py-2"
  })), /*#__PURE__*/React.createElement(Button, {
    size: "icon",
    variant: "outline",
    className: "bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0"
  }, /*#__PURE__*/React.createElement(Filter, {
    className: "w-5 h-5"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 overflow-x-auto p-3 bg-secondary"
  }, ['TODOS', 'ATIVO', 'INATIVO'].map(status => /*#__PURE__*/React.createElement("button", {
    key: status,
    onClick: () => setFilterStatus(status),
    className: `px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition ${filterStatus === status ? 'bg-primary text-primary-foreground' : 'bg-background text-foreground border border-border'}`
  }, status === 'TODOS' ? 'Todos' : status === 'ATIVO' ? 'Ativos' : 'Inativos'))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-y-auto p-3 space-y-2"
  }, filteredMembros.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center justify-center py-12 text-center"
  }, /*#__PURE__*/React.createElement(User, {
    className: "w-12 h-12 text-muted-foreground mb-3"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-foreground font-medium"
  }, "Nenhum membro encontrado"), /*#__PURE__*/React.createElement("p", {
    className: "text-muted-foreground text-sm"
  }, "Tente outro termo de busca")) : filteredMembros.map(membro => /*#__PURE__*/React.createElement("div", {
    key: membro.id,
    className: "bg-card border border-border rounded-xl p-4 flex items-start justify-between hover:bg-secondary/50 transition cursor-pointer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-1"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-foreground font-semibold text-base"
  }, membro.nome), membro.dizimista && /*#__PURE__*/React.createElement(Heart, {
    className: "w-4 h-4 fill-success text-success"
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-muted-foreground text-sm"
  }, membro.telefone), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 mt-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: `text-xs px-2.5 py-1 rounded-full font-medium ${membro.status === 'ATIVO' ? 'bg-success/20 text-success' : 'bg-muted text-muted-foreground'}`
  }, membro.status === 'ATIVO' ? 'Ativo' : 'Inativo'))), /*#__PURE__*/React.createElement("div", {
    className: "text-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(User, {
    className: "w-6 h-6 text-primary"
  })))))), /*#__PURE__*/React.createElement(Button, {
    className: "fixed bottom-24 right-4 rounded-full w-14 h-14 shadow-lg flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground",
    size: "lg"
  }, /*#__PURE__*/React.createElement(Plus, {
    className: "w-6 h-6"
  })), /*#__PURE__*/React.createElement("div", {
    className: "h-20"
  }));
}
Object.assign(__ds_scope, { MembrosScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "reference/screens/membros-screen.tsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/kit-data.jsx
try { (() => {
/* global React */
// =============================================================================
// Igreja Ipiranga — Dados mock canônicos (Brief V2) + roles/permissões
// =============================================================================

// ---- Roles & permissões ----------------------------------------------------
const ROLE_RANK = {
  MEMBRO: 0,
  COOPERADOR: 1,
  TESOUREIRO: 2,
  ADMIN: 3,
  SUPER_ADMIN: 4
};
const ROLE_LABEL = {
  MEMBRO: "Membro",
  COOPERADOR: "Cooperador",
  TESOUREIRO: "Tesoureiro",
  ADMIN: "Admin",
  SUPER_ADMIN: "Super Admin"
};
// Rank mínimo por ação — alinhado com contratos v1.0
const ACTION_MIN = {
  criar_culto: 3,
  // ADMIN+
  editar_culto: 3,
  // ADMIN+
  excluir_culto: 3,
  // ADMIN+
  add_participante: 1,
  // COOPERADOR+
  registrar_dizimo: 2,
  // TESOUREIRO+
  registrar_oferta: 1,
  // COOPERADOR+ (oferta ≠ dízimo)
  ver_financeiro: 1,
  // COOPERADOR+
  conferir: 2,
  // TESOUREIRO+
  reabrir: 3,
  // ADMIN+
  ver_auditoria: 3,
  // ADMIN+
  cadastrar_membro: 1,
  // COOPERADOR+
  editar_membro: 1,
  // COOPERADOR+
  excluir_membro: 3,
  // ADMIN+
  alterar_status_membro: 3,
  // ADMIN+
  alterar_dizimista: 2,
  // TESOUREIRO+
  relatorios: 2 // TESOUREIRO+
};
function can(role, action) {
  return (ROLE_RANK[role] ?? 0) >= (ACTION_MIN[action] ?? 99);
}
const USER = {
  nome: "Pastor João",
  email: "admin@igreja.com",
  igreja: "Igreja Matriz Ipiranga"
};

// ---- Cultos (estado inicial; a App clona e muta conferência em runtime) ----
function makeCultos() {
  return [{
    id: "1",
    tema: "A Graça que Transforma",
    dataHora: "31/05/2026 19:00",
    data: "31/05/2026",
    status: "EM_ANDAMENTO",
    pessoas: 120,
    palavraInicial: "Pr. João Silva",
    palavraFinal: "Pr. Pedro Santos",
    louvores: [{
      nome: "Ana Costa",
      hino: "Grande é o Senhor"
    }, {
      nome: "Roberto Lima",
      hino: "Quão Grande és Tu"
    }],
    musicos: [{
      nome: "Carlos Teclado"
    }, {
      nome: "Paulo Violão"
    }],
    cooperadores: [{
      nome: "Marcos Silva",
      cargo: "Portaria"
    }, {
      nome: "Lúcia Alves",
      cargo: "Recepção"
    }],
    presbiteros: [{
      nome: "Pr. José Alves"
    }, {
      nome: "Pr. Manuel Costa"
    }],
    visitantes: [{
      nome: "Fernando Souza",
      tel: "(11) 98765-4321"
    }],
    dizimos: [{
      membro: "João Silva",
      valor: 200,
      forma: "PIX",
      data: "31/05/2026"
    }, {
      membro: "Maria Santos",
      valor: 150,
      forma: "DINHEIRO",
      data: "31/05/2026"
    }, {
      membro: "Pedro Alves",
      valor: 100,
      forma: "TRANSFERENCIA",
      data: "31/05/2026"
    }],
    ofertas: [{
      tipo: "Regular",
      valor: 150,
      forma: "DINHEIRO",
      data: "31/05/2026"
    }, {
      tipo: "Missões",
      valor: 80,
      forma: "PIX",
      data: "31/05/2026"
    }],
    conferencia: null
  }, {
    id: "2",
    tema: "Culto da Família",
    dataHora: "24/05/2026 19:00",
    data: "24/05/2026",
    status: "FINALIZADO",
    pessoas: 95,
    palavraInicial: "Pr. João Silva",
    palavraFinal: "Pr. Pedro Santos",
    louvores: [{
      nome: "Ana Costa",
      hino: "Tua Graça me Basta"
    }],
    musicos: [{
      nome: "Carlos Teclado"
    }],
    cooperadores: [{
      nome: "Marcos Silva",
      cargo: "Portaria"
    }],
    presbiteros: [{
      nome: "Pr. José Alves"
    }],
    visitantes: [],
    dizimos: [{
      membro: "Ana Costa",
      valor: 1200,
      forma: "PIX",
      data: "24/05/2026"
    }, {
      membro: "Carlos Gomes",
      valor: 900,
      forma: "DINHEIRO",
      data: "24/05/2026"
    }],
    ofertas: [{
      tipo: "Regular",
      valor: 600,
      forma: "DINHEIRO",
      data: "24/05/2026"
    }, {
      tipo: "Construção",
      valor: 300,
      forma: "PIX",
      data: "24/05/2026"
    }],
    conferencia: {
      status: "CONFERIDO",
      totalSistema: 3000,
      totalContado: 3000,
      diferenca: 0,
      tesoureiro: "Maria Silva",
      data: "24/05/2026"
    }
  }, {
    id: "3",
    tema: "Pregação Especial",
    dataHora: "17/05/2026 19:00",
    data: "17/05/2026",
    status: "FINALIZADO",
    pessoas: 88,
    palavraInicial: "Ev. Maria Santos",
    palavraFinal: "Pr. João Silva",
    louvores: [{
      nome: "Roberto Lima",
      hino: "Eu Navegarei"
    }],
    musicos: [{
      nome: "Paulo Violão"
    }],
    cooperadores: [{
      nome: "Lúcia Alves",
      cargo: "Recepção"
    }],
    presbiteros: [{
      nome: "Pr. Manuel Costa"
    }],
    visitantes: [],
    dizimos: [{
      membro: "João Silva",
      valor: 1000,
      forma: "PIX",
      data: "17/05/2026"
    }, {
      membro: "Maria Santos",
      valor: 800,
      forma: "DINHEIRO",
      data: "17/05/2026"
    }],
    ofertas: [{
      tipo: "Regular",
      valor: 700,
      forma: "DINHEIRO",
      data: "17/05/2026"
    }],
    conferencia: {
      status: "DIVERGENTE",
      totalSistema: 2500,
      totalContado: 2455,
      diferenca: -45,
      tesoureiro: "Maria Silva",
      data: "17/05/2026"
    }
  }, {
    id: "4",
    tema: "Culto de Oração",
    dataHora: "10/05/2026 19:00",
    data: "10/05/2026",
    status: "FINALIZADO",
    pessoas: 64,
    palavraInicial: "Pr. Pedro Santos",
    palavraFinal: "Pr. José Alves",
    louvores: [],
    musicos: [],
    cooperadores: [{
      nome: "Marcos Silva",
      cargo: "Portaria"
    }],
    presbiteros: [],
    visitantes: [],
    dizimos: [{
      membro: "Ana Costa",
      valor: 800,
      forma: "PIX",
      data: "10/05/2026"
    }],
    ofertas: [{
      tipo: "Regular",
      valor: 200,
      forma: "DINHEIRO",
      data: "10/05/2026"
    }],
    conferencia: null // pendente (data passada, não conferido)
  }];
}
const MEMBROS = [{
  id: 1,
  nome: "João Silva Santos",
  status: "ATIVO",
  dizimista: true,
  tel: "(11) 98765-4321",
  email: "joao.silva@email.com",
  endereco: "Rua Principal, 123 - São Paulo, SP",
  nascimento: "15/06/1980",
  membresia: "10/01/2015",
  obs: "Membro ativo e comprometido. Participa do louvor.",
  dizimosAno: 12,
  totalDizimos: "R$ 6.240,00"
}, {
  id: 2,
  nome: "Maria Santos",
  status: "ATIVO",
  dizimista: true,
  tel: "(11) 98765-4322",
  email: "maria.santos@email.com",
  endereco: "Av. das Flores, 45 - São Paulo, SP",
  nascimento: "02/03/1975",
  membresia: "22/07/2012",
  obs: "Coordena o ministério de mulheres.",
  dizimosAno: 11,
  totalDizimos: "R$ 8.100,00"
}, {
  id: 3,
  nome: "Pedro Oliveira",
  status: "INATIVO",
  dizimista: false,
  tel: "(11) 98765-4323",
  email: "pedro.o@email.com",
  endereco: "Rua do Sol, 9 - São Paulo, SP",
  nascimento: "30/11/1990",
  membresia: "05/02/2019",
  obs: "",
  dizimosAno: 0,
  totalDizimos: "R$ 0,00"
}, {
  id: 4,
  nome: "Ana Costa",
  status: "ATIVO",
  dizimista: true,
  tel: "(11) 98765-4324",
  email: "ana.costa@email.com",
  endereco: "Rua Verde, 200 - São Paulo, SP",
  nascimento: "18/09/1985",
  membresia: "14/04/2016",
  obs: "Ministério de louvor.",
  dizimosAno: 12,
  totalDizimos: "R$ 7.320,00"
}, {
  id: 5,
  nome: "Carlos Gomes",
  status: "ATIVO",
  dizimista: false,
  tel: "(11) 98765-4325",
  email: "carlos.g@email.com",
  endereco: "Rua Azul, 77 - São Paulo, SP",
  nascimento: "25/12/1988",
  membresia: "09/09/2020",
  obs: "",
  dizimosAno: 3,
  totalDizimos: "R$ 1.450,00"
}];
const FORMAS = ["DINHEIRO", "PIX", "CARTAO_DEBITO", "CARTAO_CREDITO", "TRANSFERENCIA", "CHEQUE", "DEPOSITO"];
const TIPOS_OFERTA = ["REGULAR", "MISSOES", "CONSTRUCAO", "ACAO_SOCIAL", "ESPECIAL", "GRATIDAO", "DEPARTAMENTO", "OUTRO"];
// StatusMembro (5 valores conforme entidade backend)
const STATUS_MEMBRO_OPTS = [{
  value: "ATIVO",
  label: "Ativo"
}, {
  value: "INATIVO",
  label: "Inativo"
}, {
  value: "TRANSFERIDO",
  label: "Transferido"
}, {
  value: "FALECIDO",
  label: "Falecido"
}, {
  value: "CONGREGADO",
  label: "Congregado"
}];
// StatusCulto — apenas EM_ANDAMENTO e FINALIZADO (AGENDADO não existe no backend)
const STATUS_CULTO_OPTS = [{
  value: "EM_ANDAMENTO",
  label: "Em Andamento"
}, {
  value: "FINALIZADO",
  label: "Finalizado"
}];

// Mock audit logs — §16
const AUDIT_LOGS = [{
  id: "a1",
  entidadeTipo: "Dizimo",
  acao: "INSERT",
  usuario: "Pastor João",
  timestamp: "01/06/2026 19:47",
  descricao: "Dízimo de João Silva registrado — R$ 200,00 (PIX)",
  culto: "A Graça que Transforma"
}, {
  id: "a2",
  entidadeTipo: "Oferta",
  acao: "INSERT",
  usuario: "Pastor João",
  timestamp: "01/06/2026 19:44",
  descricao: "Oferta Regular registrada — R$ 150,00 (Dinheiro)",
  culto: "A Graça que Transforma"
}, {
  id: "a3",
  entidadeTipo: "Conferencia",
  acao: "INSERT",
  usuario: "Maria Silva",
  timestamp: "25/05/2026 21:10",
  descricao: "Caixa conferido — Total R$ 3.000,00. Conferente: João Diácono",
  culto: "Culto da Família"
}, {
  id: "a4",
  entidadeTipo: "Culto",
  acao: "UPDATE",
  usuario: "Pastor João",
  timestamp: "25/05/2026 19:00",
  descricao: "Culto atualizado — Total Pessoas: 95",
  culto: "Culto da Família"
}, {
  id: "a5",
  entidadeTipo: "Membro",
  acao: "INSERT",
  usuario: "Pastor João",
  timestamp: "20/05/2026 10:22",
  descricao: "Membro cadastrado — Carlos Gomes",
  culto: null
}, {
  id: "a6",
  entidadeTipo: "Conferencia",
  acao: "DELETE",
  usuario: "Pastor João",
  timestamp: "18/05/2026 09:15",
  descricao: "Conferência reaberta — Motivo: Erro no lançamento do dízimo de João",
  culto: "Pregação Especial"
}, {
  id: "a7",
  entidadeTipo: "Dizimo",
  acao: "UPDATE",
  usuario: "Maria Silva",
  timestamp: "17/05/2026 20:05",
  descricao: "Dízimo atualizado — Maria Santos: R$ 800,00 (corrigido de R$ 600,00)",
  culto: "Pregação Especial"
}, {
  id: "a8",
  entidadeTipo: "Membro",
  acao: "UPDATE",
  usuario: "Pastor João",
  timestamp: "15/05/2026 14:30",
  descricao: "Status alterado — Pedro Oliveira: ATIVO → INATIVO",
  culto: null
}, {
  id: "a9",
  entidadeTipo: "Oferta",
  acao: "DELETE",
  usuario: "Maria Silva",
  timestamp: "14/05/2026 20:30",
  descricao: "Oferta removida — Oferta Especial R$ 200,00 (lançamento duplicado)",
  culto: "Culto de Oração"
}, {
  id: "a10",
  entidadeTipo: "Culto",
  acao: "INSERT",
  usuario: "Pastor João",
  timestamp: "10/05/2026 09:00",
  descricao: "Culto criado — A Graça que Transforma (31/05/2026)",
  culto: null
}];
const sum = arr => arr.reduce((a, b) => a + b.valor, 0);
function cultoTotais(c) {
  const d = sum(c.dizimos),
    o = sum(c.ofertas);
  return {
    dizimos: d,
    ofertas: o,
    total: d + o
  };
}
Object.assign(window, {
  ROLE_RANK,
  ROLE_LABEL,
  ACTION_MIN,
  can,
  USER,
  makeCultos,
  MEMBROS,
  FORMAS,
  TIPOS_OFERTA,
  STATUS_MEMBRO_OPTS,
  STATUS_CULTO_OPTS,
  AUDIT_LOGS,
  sum,
  cultoTotais
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/kit-data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/kit-forms-culto.jsx
try { (() => {
/* global React, Icon, Button, Input, Sheet, STATUS_CULTO_OPTS */
// =============================================================================
// Igreja Ipiranga — Formulários de Culto (Novo / Editar) + sub-entidades
// Campos extraídos dos contratos v1.0 (PROTOTYPE_FIELD_CONTRACTS.md §5-10)
// =============================================================================

const HOJE = "01/06/2026";

// ---- Reutilizável: linha de erro de campo ----------------------------------
function FieldErr({
  msg
}) {
  return msg ? /*#__PURE__*/React.createElement("p", {
    className: "field-err"
  }, msg) : null;
}

// ---- validar data não-futura (simples) -------------------------------------
function isFuture(d) {
  if (!d) return false;
  const [day, mon, yr] = d.split("/");
  return new Date(yr, mon - 1, day) > new Date();
}

// ============================================================ CULTO FORM ===
function CultoFormModal({
  culto,
  onClose,
  onSave
}) {
  const editing = !!culto;
  const [form, setForm] = React.useState({
    dataHora: culto ? culto.dataHora : "07/06/2026 19:00",
    status: culto ? culto.status : "EM_ANDAMENTO",
    tema: culto ? culto.tema : "",
    palavraInicial: culto ? culto.palavraInicial : "",
    palavraFinal: culto ? culto.palavraFinal : "",
    totalPessoas: culto ? String(culto.pessoas) : "0",
    descricao: culto ? culto.descricao || "" : ""
  });
  const [touched, setTouched] = React.useState(false);
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const errs = {
    dataHora: !form.dataHora.trim() ? "A data e hora do culto são obrigatórias" : null,
    status: !form.status ? "O status do culto é obrigatório" : null,
    tema: form.tema.length > 200 ? "O tema deve ter no máximo 200 caracteres" : null,
    palavraInicial: form.palavraInicial.length > 100 ? "O nome deve ter no máximo 100 caracteres" : null,
    palavraFinal: form.palavraFinal.length > 100 ? "O nome deve ter no máximo 100 caracteres" : null,
    totalPessoas: parseInt(form.totalPessoas) < 0 ? "O total de pessoas deve ser zero ou positivo" : null,
    descricao: form.descricao.length > 500 ? "A descrição deve ter no máximo 500 caracteres" : null
  };
  const valid = !Object.values(errs).some(Boolean);
  const e = k => touched ? errs[k] : null;
  const save = () => {
    if (!valid) {
      setTouched(true);
      return;
    }
    onSave({
      tema: form.tema || "Culto sem tema",
      dataHora: form.dataHora,
      data: form.dataHora.split(" ")[0],
      status: form.status,
      pessoas: parseInt(form.totalPessoas) || 0,
      palavraInicial: form.palavraInicial || "—",
      palavraFinal: form.palavraFinal || "—",
      descricao: form.descricao
    });
  };
  return /*#__PURE__*/React.createElement(Sheet, {
    variant: "full",
    onClose: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet-screen"
  }, /*#__PURE__*/React.createElement("header", {
    className: "hdr-primary flat row-l",
    style: {
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "hdr-back",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    className: "row-l",
    style: {
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "church",
    size: 20,
    style: {
      color: "var(--primary-foreground)"
    }
  }), /*#__PURE__*/React.createElement("h1", {
    className: "hdr-name",
    style: {
      fontSize: 18
    }
  }, editing ? "Editar Culto" : "Novo Culto"))), /*#__PURE__*/React.createElement("div", {
    className: "sheet-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Data e Hora *"), /*#__PURE__*/React.createElement(Input, {
    value: form.dataHora,
    error: !!e("dataHora"),
    onChange: set("dataHora"),
    placeholder: "dd/MM/aaaa HH:mm"
  }), /*#__PURE__*/React.createElement(FieldErr, {
    msg: e("dataHora")
  })), /*#__PURE__*/React.createElement("div", {
    className: "field mt12"
  }, /*#__PURE__*/React.createElement("label", null, "Status *"), /*#__PURE__*/React.createElement("select", {
    className: "inp select",
    value: form.status,
    onChange: set("status")
  }, STATUS_CULTO_OPTS.map(s => /*#__PURE__*/React.createElement("option", {
    key: s.value,
    value: s.value
  }, s.label))), /*#__PURE__*/React.createElement(FieldErr, {
    msg: e("status")
  })), /*#__PURE__*/React.createElement("div", {
    className: "field mt12"
  }, /*#__PURE__*/React.createElement("label", null, "Tema ", /*#__PURE__*/React.createElement("span", {
    className: "opt"
  }, "(m\xE1x. 200 chars)")), /*#__PURE__*/React.createElement(Input, {
    value: form.tema,
    error: !!e("tema"),
    onChange: set("tema"),
    placeholder: "Ex: A Gra\xE7a que Transforma"
  }), /*#__PURE__*/React.createElement(FieldErr, {
    msg: e("tema")
  })), /*#__PURE__*/React.createElement("div", {
    className: "field mt12"
  }, /*#__PURE__*/React.createElement("label", null, "Palavra Inicial por ", /*#__PURE__*/React.createElement("span", {
    className: "opt"
  }, "(m\xE1x. 100 chars)")), /*#__PURE__*/React.createElement(Input, {
    value: form.palavraInicial,
    error: !!e("palavraInicial"),
    onChange: set("palavraInicial"),
    placeholder: "Ex: Pr. Jo\xE3o Silva"
  }), /*#__PURE__*/React.createElement(FieldErr, {
    msg: e("palavraInicial")
  })), /*#__PURE__*/React.createElement("div", {
    className: "field mt12"
  }, /*#__PURE__*/React.createElement("label", null, "Palavra Final por ", /*#__PURE__*/React.createElement("span", {
    className: "opt"
  }, "(m\xE1x. 100 chars)")), /*#__PURE__*/React.createElement(Input, {
    value: form.palavraFinal,
    error: !!e("palavraFinal"),
    onChange: set("palavraFinal"),
    placeholder: "Ex: Pr. Pedro Santos"
  }), /*#__PURE__*/React.createElement(FieldErr, {
    msg: e("palavraFinal")
  })), /*#__PURE__*/React.createElement("div", {
    className: "field mt12"
  }, /*#__PURE__*/React.createElement("label", null, "Total de Pessoas"), /*#__PURE__*/React.createElement(Input, {
    type: "number",
    value: form.totalPessoas,
    error: !!e("totalPessoas"),
    onChange: set("totalPessoas"),
    placeholder: "0",
    min: "0"
  }), /*#__PURE__*/React.createElement(FieldErr, {
    msg: e("totalPessoas")
  })), /*#__PURE__*/React.createElement("div", {
    className: "field mt12"
  }, /*#__PURE__*/React.createElement("label", null, "Descri\xE7\xE3o / Observa\xE7\xF5es ", /*#__PURE__*/React.createElement("span", {
    className: "opt"
  }, "(m\xE1x. 500 chars)")), /*#__PURE__*/React.createElement("textarea", {
    className: "textarea",
    rows: 3,
    value: form.descricao,
    onChange: ev => setForm(f => ({
      ...f,
      descricao: ev.target.value
    })),
    placeholder: "Detalhes adicionais..."
  }), /*#__PURE__*/React.createElement("span", {
    className: "char-count"
  }, form.descricao.length, "/500"), /*#__PURE__*/React.createElement(FieldErr, {
    msg: e("descricao")
  })), editing && /*#__PURE__*/React.createElement("div", {
    className: "audit-note mt12"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 16,
    style: {
      color: "var(--primary)"
    }
  }), /*#__PURE__*/React.createElement("span", null, "Controle de vers\xE3o (", /*#__PURE__*/React.createElement("code", null, "version"), ") \xE9 enviado automaticamente para evitar conflitos de edi\xE7\xE3o simult\xE2nea."))), /*#__PURE__*/React.createElement("div", {
    className: "sheet-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    style: {
      flex: 1
    },
    onClick: onClose
  }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
    style: {
      flex: 1,
      opacity: valid || !touched ? 1 : .6
    },
    onClick: save
  }, editing ? "Salvar Alterações" : "Criar Culto"))));
}

// ============================================= CONFIRMAR EXCLUIR (genérico)
function ConfirmarExcluirModal({
  titulo,
  descricao,
  label = "Excluir",
  onClose,
  onConfirm
}) {
  return /*#__PURE__*/React.createElement(Sheet, {
    variant: "bottom",
    onClose: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet-bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet-grab"
  }), /*#__PURE__*/React.createElement("div", {
    className: "reabrir-ic",
    style: {
      background: "color-mix(in oklch,var(--destructive) 10%,transparent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash-2",
    size: 26,
    style: {
      color: "var(--destructive)"
    }
  })), /*#__PURE__*/React.createElement("h2", {
    className: "reabrir-title"
  }, titulo), /*#__PURE__*/React.createElement("p", {
    className: "reabrir-info"
  }, descricao), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 8,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    style: {
      flex: 1
    },
    onClick: onClose
  }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
    style: {
      flex: 1,
      background: "var(--destructive)",
      color: "#fff"
    },
    onClick: onConfirm
  }, label))));
}

// ============================================ SUB-ENTIDADE MINI-MODAIS =====
// Reutilizável genérico
function SubEntityModal({
  titulo,
  icon,
  fields,
  locked,
  onClose,
  onSave
}) {
  const [vals, setVals] = React.useState(() => Object.fromEntries(fields.map(f => [f.key, f.default || ""])));
  const [touched, setTouched] = React.useState(false);
  const set = k => e => setVals(v => ({
    ...v,
    [k]: e.target.value
  }));
  const validate = f => {
    const v = vals[f.key];
    if (f.required && !v.trim()) return f.errRequired || "Campo obrigatório";
    if (f.min && v.trim().length > 0 && v.trim().length < f.min) return `Mínimo ${f.min} caracteres`;
    if (f.max && v.length > f.max) return `Máximo ${f.max} caracteres`;
    if (f.pattern && v && !f.pattern.test(v)) return f.errPattern || "Formato inválido";
    return null;
  };
  const errs = Object.fromEntries(fields.map(f => [f.key, validate(f)]));
  const valid = !Object.values(errs).some(Boolean);
  const save = () => {
    if (!valid) {
      setTouched(true);
      return;
    }
    onSave(vals);
  };
  if (locked) return /*#__PURE__*/React.createElement(Sheet, {
    variant: "bottom",
    onClose: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet-bottom",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet-grab"
  }), /*#__PURE__*/React.createElement("div", {
    className: "reabrir-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 26,
    style: {
      color: "var(--warning)"
    }
  })), /*#__PURE__*/React.createElement("h2", {
    className: "reabrir-title"
  }, "Culto Conferido"), /*#__PURE__*/React.createElement("p", {
    className: "reabrir-info"
  }, "Este culto j\xE1 foi conferido. Altera\xE7\xF5es bloqueadas."), /*#__PURE__*/React.createElement(Button, {
    className: "full",
    variant: "outline",
    onClick: onClose
  }, "Fechar")));
  return /*#__PURE__*/React.createElement(Sheet, {
    variant: "bottom",
    onClose: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet-bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet-grab"
  }), /*#__PURE__*/React.createElement("div", {
    className: "row-l",
    style: {
      gap: 10,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22,
    style: {
      color: "var(--primary)"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 700
    }
  }, titulo)), /*#__PURE__*/React.createElement("div", {
    className: "stack-sm"
  }, fields.map(f => /*#__PURE__*/React.createElement("div", {
    className: "field",
    key: f.key
  }, /*#__PURE__*/React.createElement("label", null, f.label, f.required ? " *" : " ", f.max ? /*#__PURE__*/React.createElement("span", {
    className: "opt"
  }, "(m\xE1x. ", f.max, ")") : null), /*#__PURE__*/React.createElement(Input, {
    value: vals[f.key],
    error: touched && !!errs[f.key],
    onChange: set(f.key),
    placeholder: f.placeholder || ""
  }), touched && errs[f.key] && /*#__PURE__*/React.createElement("p", {
    className: "field-err"
  }, errs[f.key])))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 8,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    style: {
      flex: 1
    },
    onClick: onClose
  }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
    style: {
      flex: 1
    },
    onClick: save
  }, "Salvar"))));
}

// Wrappers com campos por sub-entidade (§6-10 dos contratos)
const SUBMODALS = {
  louvor: p => /*#__PURE__*/React.createElement(SubEntityModal, {
    titulo: "Adicionar Louvor",
    icon: "music",
    locked: p.locked,
    onClose: p.onClose,
    onSave: p.onSave,
    fields: [{
      key: "pessoaNome",
      label: "Nome da pessoa",
      required: true,
      min: 2,
      max: 100,
      errRequired: "O nome da pessoa é obrigatório",
      placeholder: "Ex: Ana Costa"
    }, {
      key: "hinoOpcional",
      label: "Hino / Música",
      required: false,
      max: 150,
      placeholder: "Ex: Grande é o Senhor"
    }]
  }),
  musico: p => /*#__PURE__*/React.createElement(SubEntityModal, {
    titulo: "Adicionar M\xFAsico",
    icon: "mic-2",
    locked: p.locked,
    onClose: p.onClose,
    onSave: p.onSave,
    fields: [{
      key: "nome",
      label: "Nome do músico",
      required: true,
      min: 2,
      max: 100,
      errRequired: "O nome do músico é obrigatório",
      placeholder: "Ex: Carlos Teclado"
    }]
  }),
  cooperador: p => /*#__PURE__*/React.createElement(SubEntityModal, {
    titulo: "Adicionar Cooperador",
    icon: "user-check",
    locked: p.locked,
    onClose: p.onClose,
    onSave: p.onSave,
    fields: [{
      key: "nome",
      label: "Nome do cooperador",
      required: true,
      min: 2,
      max: 100,
      errRequired: "O nome do cooperador é obrigatório",
      placeholder: "Ex: Marcos Silva"
    }, {
      key: "cargo",
      label: "Cargo / Função",
      required: false,
      max: 50,
      placeholder: "Ex: Portaria"
    }]
  }),
  presbitero: p => /*#__PURE__*/React.createElement(SubEntityModal, {
    titulo: "Adicionar Presb\xEDtero",
    icon: "user-check",
    locked: p.locked,
    onClose: p.onClose,
    onSave: p.onSave,
    fields: [{
      key: "nome",
      label: "Nome do presbítero",
      required: true,
      min: 2,
      max: 100,
      errRequired: "O nome do presbítero é obrigatório",
      placeholder: "Ex: Pr. José Alves"
    }]
  }),
  visitante: p => /*#__PURE__*/React.createElement(SubEntityModal, {
    titulo: "Registrar Visitante",
    icon: "users",
    locked: p.locked,
    onClose: p.onClose,
    onSave: p.onSave,
    fields: [{
      key: "nome",
      label: "Nome do visitante",
      required: true,
      min: 2,
      max: 100,
      errRequired: "O nome do visitante é obrigatório",
      placeholder: "Ex: Fernando Souza"
    }, {
      key: "telefone",
      label: "Telefone",
      required: false,
      max: 20,
      pattern: /^[\d\s()+\-]*$/,
      errPattern: "Telefone inválido",
      placeholder: "Ex: (11) 98765-4321"
    }]
  })
};
function SubEntityModalWrapper({
  type,
  locked,
  onClose,
  onSave
}) {
  const C = SUBMODALS[type];
  return C ? C({
    locked,
    onClose,
    onSave
  }) : null;
}
Object.assign(window, {
  CultoFormModal,
  ConfirmarExcluirModal,
  SubEntityModalWrapper
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/kit-forms-culto.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/kit-forms-membro.jsx
try { (() => {
/* global React, Icon, Button, Input, Sheet, STATUS_MEMBRO_OPTS */
// =============================================================================
// Igreja Ipiranga — Formulários de Membro (Novo / Editar / Status / Excluir)
// Campos extraídos dos contratos v1.0 (§13)
// =============================================================================

// ---- toggle switch --------------------------------------------------------
function Toggle({
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: "toggle" + (value ? " on" : ""),
    onClick: () => onChange(!value),
    type: "button"
  }, /*#__PURE__*/React.createElement("span", {
    className: "toggle-thumb"
  }));
}

// ============================================================ MEMBRO FORM ==
function MembroFormModal({
  membro,
  onClose,
  onSave
}) {
  const editing = !!membro;
  const [form, setForm] = React.useState({
    nome: membro?.nome || "",
    status: membro?.status || "ATIVO",
    email: membro?.email || "",
    telefone: membro?.tel || "",
    cpf: membro?.cpf || "",
    dataNascimento: membro?.nascimento || "",
    dataMembresia: membro?.membresia || "",
    endereco: membro?.endereco || "",
    dizimista: membro?.dizimista || false,
    observacoes: membro?.obs || ""
  });
  const [touched, setTouched] = React.useState(false);
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  function validateCPF(v) {
    if (!v) return null;
    return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(v) ? null : "CPF com formato inválido";
  }
  function validateTel(v) {
    if (!v) return null;
    return /^[\d\s()+\-]*$/.test(v) ? null : "Telefone com formato inválido";
  }
  function validateEmail(v) {
    if (!v) return null;
    return /\S+@\S+\.\S+/.test(v) ? null : "E-mail inválido";
  }
  const errs = {
    nome: !form.nome.trim() ? "O nome é obrigatório" : form.nome.trim().length < 2 ? "O nome deve ter entre 2 e 150 caracteres" : form.nome.length > 150 ? "O nome deve ter entre 2 e 150 caracteres" : null,
    status: !form.status ? "O status é obrigatório" : null,
    email: validateEmail(form.email),
    telefone: validateTel(form.telefone),
    cpf: validateCPF(form.cpf),
    dataNascimento: isFuturePT(form.dataNascimento) ? "A data de nascimento deve ser no passado" : null,
    dataMembresia: isFuturePT(form.dataMembresia) ? "A data de membresia não pode ser futura" : null,
    endereco: form.endereco.length > 255 ? "Máximo 255 caracteres" : null,
    observacoes: form.observacoes.length > 500 ? "A observação deve ter no máximo 500 caracteres" : null
  };
  const valid = !Object.values(errs).some(Boolean);
  const e = k => touched ? errs[k] : null;
  const save = () => {
    if (!valid) {
      setTouched(true);
      return;
    }
    onSave({
      id: membro?.id || Date.now(),
      nome: form.nome.trim(),
      status: form.status,
      email: form.email.trim(),
      tel: form.telefone.trim(),
      cpf: form.cpf.trim(),
      nascimento: form.dataNascimento,
      membresia: form.dataMembresia,
      endereco: form.endereco.trim(),
      dizimista: form.dizimista,
      obs: form.observacoes.trim(),
      dizimosAno: membro?.dizimosAno || 0,
      totalDizimos: membro?.totalDizimos || "R$ 0,00"
    });
  };
  return /*#__PURE__*/React.createElement(Sheet, {
    variant: "full",
    onClose: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet-screen"
  }, /*#__PURE__*/React.createElement("header", {
    className: "hdr-primary flat row-l",
    style: {
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "hdr-back",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    className: "row-l",
    style: {
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 20,
    style: {
      color: "var(--primary-foreground)"
    }
  }), /*#__PURE__*/React.createElement("h1", {
    className: "hdr-name",
    style: {
      fontSize: 18
    }
  }, editing ? "Editar Membro" : "Novo Membro"))), /*#__PURE__*/React.createElement("div", {
    className: "sheet-body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Dados Pessoais"), /*#__PURE__*/React.createElement("div", {
    className: "field mt6"
  }, /*#__PURE__*/React.createElement("label", null, "Nome completo *"), /*#__PURE__*/React.createElement(Input, {
    value: form.nome,
    error: !!e("nome"),
    onChange: set("nome"),
    placeholder: "Ex: Jo\xE3o Silva Santos"
  }), e("nome") && /*#__PURE__*/React.createElement("p", {
    className: "field-err"
  }, e("nome"))), /*#__PURE__*/React.createElement("div", {
    className: "grid-2 mt12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Status *"), /*#__PURE__*/React.createElement("select", {
    className: "inp select",
    value: form.status,
    onChange: set("status")
  }, STATUS_MEMBRO_OPTS.map(s => /*#__PURE__*/React.createElement("option", {
    key: s.value,
    value: s.value
  }, s.label))), e("status") && /*#__PURE__*/React.createElement("p", {
    className: "field-err"
  }, e("status"))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "CPF ", /*#__PURE__*/React.createElement("span", {
    className: "opt"
  }, "000.000.000-00")), /*#__PURE__*/React.createElement(Input, {
    value: form.cpf,
    error: !!e("cpf"),
    onChange: set("cpf"),
    placeholder: "000.000.000-00"
  }), e("cpf") && /*#__PURE__*/React.createElement("p", {
    className: "field-err"
  }, e("cpf")))), /*#__PURE__*/React.createElement("div", {
    className: "grid-2 mt12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Data de Nascimento"), /*#__PURE__*/React.createElement(Input, {
    value: form.dataNascimento,
    error: !!e("dataNascimento"),
    onChange: set("dataNascimento"),
    placeholder: "dd/MM/aaaa"
  }), e("dataNascimento") && /*#__PURE__*/React.createElement("p", {
    className: "field-err"
  }, e("dataNascimento"))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Membro desde"), /*#__PURE__*/React.createElement(Input, {
    value: form.dataMembresia,
    error: !!e("dataMembresia"),
    onChange: set("dataMembresia"),
    placeholder: "dd/MM/aaaa"
  }), e("dataMembresia") && /*#__PURE__*/React.createElement("p", {
    className: "field-err"
  }, e("dataMembresia")))), /*#__PURE__*/React.createElement("p", {
    className: "eyebrow mt18"
  }, "Contato"), /*#__PURE__*/React.createElement("div", {
    className: "field mt6"
  }, /*#__PURE__*/React.createElement("label", null, "E-mail"), /*#__PURE__*/React.createElement(Input, {
    value: form.email,
    error: !!e("email"),
    onChange: set("email"),
    placeholder: "email@exemplo.com",
    autoComplete: "email"
  }), e("email") && /*#__PURE__*/React.createElement("p", {
    className: "field-err"
  }, e("email"))), /*#__PURE__*/React.createElement("div", {
    className: "field mt12"
  }, /*#__PURE__*/React.createElement("label", null, "Telefone ", /*#__PURE__*/React.createElement("span", {
    className: "opt"
  }, "m\xE1x. 20 chars")), /*#__PURE__*/React.createElement(Input, {
    value: form.telefone,
    error: !!e("telefone"),
    onChange: set("telefone"),
    placeholder: "(11) 98765-4321"
  }), e("telefone") && /*#__PURE__*/React.createElement("p", {
    className: "field-err"
  }, e("telefone"))), /*#__PURE__*/React.createElement("div", {
    className: "field mt12"
  }, /*#__PURE__*/React.createElement("label", null, "Endere\xE7o ", /*#__PURE__*/React.createElement("span", {
    className: "opt"
  }, "m\xE1x. 255 chars")), /*#__PURE__*/React.createElement(Input, {
    value: form.endereco,
    error: !!e("endereco"),
    onChange: set("endereco"),
    placeholder: "Rua, n\xFAmero, bairro \u2014 S\xE3o Paulo, SP"
  }), e("endereco") && /*#__PURE__*/React.createElement("p", {
    className: "field-err"
  }, e("endereco"))), /*#__PURE__*/React.createElement("p", {
    className: "eyebrow mt18"
  }, "Financeiro"), /*#__PURE__*/React.createElement("div", {
    className: "dizimista-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "b600",
    style: {
      margin: 0
    }
  }, "\xC9 dizimista?"), /*#__PURE__*/React.createElement("p", {
    className: "metric-sub",
    style: {
      margin: "2px 0 0"
    }
  }, "Altera o marcador na lista de membros")), /*#__PURE__*/React.createElement(Toggle, {
    value: form.dizimista,
    onChange: v => setForm(f => ({
      ...f,
      dizimista: v
    }))
  })), /*#__PURE__*/React.createElement("p", {
    className: "eyebrow mt18"
  }, "Observa\xE7\xF5es"), /*#__PURE__*/React.createElement("div", {
    className: "field mt6"
  }, /*#__PURE__*/React.createElement("textarea", {
    className: "textarea",
    rows: 3,
    value: form.observacoes,
    onChange: ev => setForm(f => ({
      ...f,
      observacoes: ev.target.value
    })),
    placeholder: "Informa\xE7\xF5es adicionais sobre o membro..."
  }), /*#__PURE__*/React.createElement("span", {
    className: "char-count"
  }, form.observacoes.length, "/500"), e("observacoes") && /*#__PURE__*/React.createElement("p", {
    className: "field-err"
  }, e("observacoes")))), /*#__PURE__*/React.createElement("div", {
    className: "sheet-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    style: {
      flex: 1
    },
    onClick: onClose
  }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
    style: {
      flex: 1,
      opacity: valid || !touched ? 1 : .6
    },
    onClick: save
  }, editing ? "Salvar Alterações" : "Cadastrar Membro"))));
}

// ============================================ ALTERAR STATUS DO MEMBRO =====
function AlterarStatusModal({
  membro,
  onClose,
  onSave
}) {
  const [status, setStatus] = React.useState(membro.status);
  const STATUS_COLOR = {
    ATIVO: "var(--success)",
    INATIVO: "var(--muted-foreground)",
    TRANSFERIDO: "var(--primary)",
    FALECIDO: "var(--destructive)",
    CONGREGADO: "var(--accent-foreground)"
  };
  return /*#__PURE__*/React.createElement(Sheet, {
    variant: "bottom",
    onClose: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet-bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet-grab"
  }), /*#__PURE__*/React.createElement("div", {
    className: "row-l",
    style: {
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-check",
    size: 22,
    style: {
      color: "var(--primary)"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 700
    }
  }, "Alterar Status")), /*#__PURE__*/React.createElement("p", {
    className: "metric-sub",
    style: {
      marginBottom: 14
    }
  }, membro.nome), /*#__PURE__*/React.createElement("div", {
    className: "stack-sm"
  }, STATUS_MEMBRO_OPTS.map(opt => /*#__PURE__*/React.createElement("button", {
    key: opt.value,
    className: "status-opt" + (status === opt.value ? " on" : ""),
    onClick: () => setStatus(opt.value)
  }, /*#__PURE__*/React.createElement("span", {
    className: "status-dot",
    style: {
      background: STATUS_COLOR[opt.value] || "var(--muted-foreground)"
    }
  }), /*#__PURE__*/React.createElement("span", null, opt.label), status === opt.value && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    style: {
      color: "var(--primary)",
      marginLeft: "auto"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 8,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    style: {
      flex: 1
    },
    onClick: onClose
  }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
    style: {
      flex: 1
    },
    onClick: () => onSave(status)
  }, "Confirmar"))));
}
function isFuturePT(d) {
  if (!d || !d.includes("/")) return false;
  const parts = d.split("/");
  if (parts.length !== 3) return false;
  return new Date(parts[2], parts[1] - 1, parts[0]) > new Date();
}
Object.assign(window, {
  MembroFormModal,
  AlterarStatusModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/kit-forms-membro.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/kit-forms.jsx
try { (() => {
/* global React, Icon, Input, Button, Sheet, MEMBROS, FORMAS, TIPOS_OFERTA, USER */
// =============================================================================
// Igreja Ipiranga — Modais de registro (entrada): Dízimo & Oferta
// Inclui busca de membro (cadastrado ou não) + trilha de auditoria
// (tesoureiro que registra + conferente: obreiro ou 2º tesoureiro).
// =============================================================================

function formaLabel(f) {
  return {
    DINHEIRO: "Dinheiro",
    PIX: "PIX",
    CARTAO_DEBITO: "Cartão Débito",
    CARTAO_CREDITO: "Cartão Crédito",
    TRANSFERENCIA: "Transferência",
    CHEQUE: "Cheque",
    DEPOSITO: "Depósito"
  }[f] || f;
}
function tipoLabel(t) {
  return {
    REGULAR: "Regular",
    MISSOES: "Missões",
    CONSTRUCAO: "Construção",
    ACAO_SOCIAL: "Ação Social",
    ESPECIAL: "Especial",
    GRATIDAO: "Gratidão",
    DEPARTAMENTO: "Departamento",
    OUTRO: "Outro"
  }[t] || t;
}
const HOJE = "01/06/2026";

// ---- Combobox: buscar membro OU registrar nome avulso --------------------
function MemberCombobox({
  value,
  isMember,
  onPick,
  placeholder
}) {
  const [q, setQ] = React.useState(value || "");
  const [open, setOpen] = React.useState(false);
  const results = MEMBROS.filter(m => m.nome.toLowerCase().includes(q.toLowerCase()));
  const exact = MEMBROS.some(m => m.nome.trim().toLowerCase() === q.trim().toLowerCase());
  return /*#__PURE__*/React.createElement("div", {
    className: "combo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field-icon-l"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20
  }), /*#__PURE__*/React.createElement(Input, {
    value: q,
    placeholder: placeholder || "Buscar membro ou digitar nome...",
    onChange: e => {
      setQ(e.target.value);
      setOpen(true);
      onPick(e.target.value, false);
    },
    onFocus: () => setOpen(true)
  })), open && (q.trim() || results.length > 0) && /*#__PURE__*/React.createElement("div", {
    className: "combo-list"
  }, results.map(m => /*#__PURE__*/React.createElement("button", {
    key: m.id,
    className: "combo-opt",
    onClick: () => {
      setQ(m.nome);
      onPick(m.nome, true);
      setOpen(false);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "avatar sm"
  }, m.nome.charAt(0)), /*#__PURE__*/React.createElement("span", {
    className: "combo-name"
  }, m.nome), /*#__PURE__*/React.createElement("span", {
    className: "badge badge-success"
  }, "Membro"))), q.trim() && !exact && /*#__PURE__*/React.createElement("button", {
    className: "combo-opt",
    onClick: () => {
      onPick(q.trim(), false);
      setOpen(false);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "circ-ic sm",
    style: {
      background: "var(--secondary)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-plus",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    className: "combo-name"
  }, "Usar \u201C", q.trim(), "\u201D"), /*#__PURE__*/React.createElement("span", {
    className: "badge badge-muted"
  }, "N\xE3o cadastrado"))), value && !open && /*#__PURE__*/React.createElement("div", {
    className: "combo-selected"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: isMember ? "user-check" : "user",
    size: 14,
    style: {
      color: isMember ? "var(--success)" : "var(--muted-foreground)"
    }
  }), isMember ? "Membro cadastrado" : "Pessoa não cadastrada"));
}

// ---- Bloco de auditoria reutilizável -------------------------------------
function AuditoriaBlock({
  tesoureiro,
  setTesoureiro,
  conferente,
  setConferente,
  errTes,
  errConf
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      marginTop: 18
    }
  }, "Respons\xE1veis (auditoria)"), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("label", null, "Tesoureiro que registra *"), /*#__PURE__*/React.createElement(Input, {
    value: tesoureiro,
    error: errTes,
    placeholder: "Ex: Maria Silva",
    onChange: e => setTesoureiro(e.target.value)
  }), errTes && /*#__PURE__*/React.createElement("p", {
    className: "field-err"
  }, "Informe quem est\xE1 registrando")), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("label", null, "Conferente \u2014 obreiro ou 2\xBA tesoureiro *"), /*#__PURE__*/React.createElement(Input, {
    value: conferente,
    error: errConf,
    placeholder: "Ex: Jo\xE3o Costa",
    onChange: e => setConferente(e.target.value)
  }), errConf && /*#__PURE__*/React.createElement("p", {
    className: "field-err"
  }, "Informe o conferente")), /*#__PURE__*/React.createElement("div", {
    className: "audit-note"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 16,
    style: {
      color: "var(--primary)"
    }
  }), /*#__PURE__*/React.createElement("span", null, "Ambos os nomes ficam guardados na auditoria deste lan\xE7amento.")));
}

// ---- MODAL: Registrar Dízimo (também usado para Editar) -------------------
function RegistrarDizimoModal({
  item,
  onClose,
  onSave
}) {
  const editing = !!item;
  const [nome, setNome] = React.useState(item?.membro || "");
  const [isMember, setIsMember] = React.useState(item ? item.membroCadastrado !== false : false);
  const [valor, setValor] = React.useState(item ? String(item.valor).replace(".", ",") : "");
  const [forma, setForma] = React.useState(item?.forma || "DINHEIRO");
  const [obs, setObs] = React.useState(item?.obs || "");
  const [tesoureiro, setTesoureiro] = React.useState(item?.tesoureiro || USER.nome);
  const [conferente, setConferente] = React.useState(item?.conferente || "");
  const [t, setT] = React.useState(false);
  const num = parseFloat(String(valor).replace(/\./g, "").replace(",", ".")) || 0;
  const errs = {
    nome: !nome.trim(),
    valor: num <= 0,
    tes: !tesoureiro.trim(),
    conf: !conferente.trim()
  };
  const valid = !errs.nome && !errs.valor && !errs.tes && !errs.conf;
  const save = () => {
    if (!valid) {
      setT(true);
      return;
    }
    onSave({
      membro: nome.trim(),
      membroCadastrado: isMember,
      valor: num,
      forma,
      data: HOJE,
      obs: obs.trim(),
      tesoureiro: tesoureiro.trim(),
      conferente: conferente.trim()
    });
  };
  return /*#__PURE__*/React.createElement(Sheet, {
    variant: "full",
    onClose: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet-screen"
  }, /*#__PURE__*/React.createElement("header", {
    className: "hdr-primary flat row-l",
    style: {
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "hdr-back",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    className: "row-l",
    style: {
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "dollar-sign",
    size: 20,
    style: {
      color: "var(--primary-foreground)"
    }
  }), /*#__PURE__*/React.createElement("h1", {
    className: "hdr-name",
    style: {
      fontSize: 18
    }
  }, editing ? "Editar Dízimo" : "Registrar Dízimo"))), /*#__PURE__*/React.createElement("div", {
    className: "sheet-body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Dizimista"), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("label", null, "Membro ou pessoa"), /*#__PURE__*/React.createElement(MemberCombobox, {
    value: nome,
    isMember: isMember,
    onPick: (n, m) => {
      setNome(n);
      setIsMember(m);
    }
  }), t && errs.nome && /*#__PURE__*/React.createElement("p", {
    className: "field-err"
  }, "Selecione um membro ou digite um nome")), /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      marginTop: 18
    }
  }, "Lan\xE7amento"), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("label", null, "Valor *"), /*#__PURE__*/React.createElement(Input, {
    className: "conf-num",
    value: valor,
    inputMode: "decimal",
    placeholder: "R$ 0,00",
    onChange: e => setValor(e.target.value)
  }), t && errs.valor && /*#__PURE__*/React.createElement("p", {
    className: "field-err"
  }, "Informe um valor v\xE1lido")), /*#__PURE__*/React.createElement("div", {
    className: "grid-2",
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Data *"), /*#__PURE__*/React.createElement(Input, {
    value: HOJE,
    readOnly: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Forma de Pagamento"), /*#__PURE__*/React.createElement("select", {
    className: "inp select",
    value: forma,
    onChange: e => setForma(e.target.value)
  }, FORMAS.map(f => /*#__PURE__*/React.createElement("option", {
    key: f,
    value: f
  }, formaLabel(f)))))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("label", null, "Observa\xE7\xE3o"), /*#__PURE__*/React.createElement("textarea", {
    className: "textarea",
    rows: 2,
    value: obs,
    placeholder: "Opcional...",
    onChange: e => setObs(e.target.value)
  })), /*#__PURE__*/React.createElement(AuditoriaBlock, {
    tesoureiro: tesoureiro,
    setTesoureiro: setTesoureiro,
    conferente: conferente,
    setConferente: setConferente,
    errTes: t && errs.tes,
    errConf: t && errs.conf
  })), /*#__PURE__*/React.createElement("div", {
    className: "sheet-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    style: {
      flex: 1
    },
    onClick: onClose
  }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
    style: {
      flex: 1,
      opacity: valid ? 1 : .6
    },
    onClick: save
  }, editing ? "Salvar Alterações" : "Salvar Dízimo"))));
}

// ---- MODAL: Registrar Oferta (também usado para Editar) ------------------
function RegistrarOfertaModal({
  item,
  onClose,
  onSave
}) {
  const editing = !!item;
  const [tipo, setTipo] = React.useState(item?.tipo ? item.tipo.toUpperCase().replace(/ /g, "_") : "REGULAR");
  const [valor, setValor] = React.useState(item ? String(item.valor).replace(".", ",") : "");
  const [forma, setForma] = React.useState(item?.forma || "DINHEIRO");
  const [ofertante, setOfertante] = React.useState(item?.ofertante || "");
  const [isMember, setIsMember] = React.useState(item?.ofertanteCadastrado || false);
  const [obs, setObs] = React.useState(item?.obs || "");
  const [tesoureiro, setTesoureiro] = React.useState(item?.tesoureiro || USER.nome);
  const [conferente, setConferente] = React.useState(item?.conferente || "");
  const [t, setT] = React.useState(false);
  const num = parseFloat(String(valor).replace(/\./g, "").replace(",", ".")) || 0;
  const errs = {
    valor: num <= 0,
    tes: !tesoureiro.trim(),
    conf: !conferente.trim()
  };
  const valid = !errs.valor && !errs.tes && !errs.conf;
  const save = () => {
    if (!valid) {
      setT(true);
      return;
    }
    onSave({
      tipo: tipoLabel(tipo),
      valor: num,
      forma,
      data: HOJE,
      ofertante: ofertante.trim(),
      ofertanteCadastrado: isMember,
      obs: obs.trim(),
      tesoureiro: tesoureiro.trim(),
      conferente: conferente.trim()
    });
  };
  return /*#__PURE__*/React.createElement(Sheet, {
    variant: "full",
    onClose: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet-screen"
  }, /*#__PURE__*/React.createElement("header", {
    className: "hdr-primary flat row-l",
    style: {
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "hdr-back",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    className: "row-l",
    style: {
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "gift",
    size: 20,
    style: {
      color: "var(--primary-foreground)"
    }
  }), /*#__PURE__*/React.createElement("h1", {
    className: "hdr-name",
    style: {
      fontSize: 18
    }
  }, editing ? "Editar Oferta" : "Registrar Oferta"))), /*#__PURE__*/React.createElement("div", {
    className: "sheet-body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Lan\xE7amento"), /*#__PURE__*/React.createElement("div", {
    className: "grid-2",
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Tipo de Oferta *"), /*#__PURE__*/React.createElement("select", {
    className: "inp select",
    value: tipo,
    onChange: e => setTipo(e.target.value)
  }, TIPOS_OFERTA.map(x => /*#__PURE__*/React.createElement("option", {
    key: x,
    value: x
  }, tipoLabel(x))))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Forma de Pagamento"), /*#__PURE__*/React.createElement("select", {
    className: "inp select",
    value: forma,
    onChange: e => setForma(e.target.value)
  }, FORMAS.map(f => /*#__PURE__*/React.createElement("option", {
    key: f,
    value: f
  }, formaLabel(f)))))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("label", null, "Valor *"), /*#__PURE__*/React.createElement(Input, {
    className: "conf-num",
    value: valor,
    inputMode: "decimal",
    placeholder: "R$ 0,00",
    onChange: e => setValor(e.target.value)
  }), t && errs.valor && /*#__PURE__*/React.createElement("p", {
    className: "field-err"
  }, "Informe um valor v\xE1lido")), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("label", null, "Data *"), /*#__PURE__*/React.createElement(Input, {
    value: HOJE,
    readOnly: true
  })), /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      marginTop: 18
    }
  }, "Ofertante (opcional \u2014 oferta identificada)"), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("label", null, "Nome do ofertante"), /*#__PURE__*/React.createElement(MemberCombobox, {
    value: ofertante,
    isMember: isMember,
    placeholder: "Deixe em branco p/ oferta an\xF4nima",
    onPick: (n, m) => {
      setOfertante(n);
      setIsMember(m);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("label", null, "Observa\xE7\xE3o"), /*#__PURE__*/React.createElement("textarea", {
    className: "textarea",
    rows: 2,
    value: obs,
    placeholder: "Opcional...",
    onChange: e => setObs(e.target.value)
  })), /*#__PURE__*/React.createElement(AuditoriaBlock, {
    tesoureiro: tesoureiro,
    setTesoureiro: setTesoureiro,
    conferente: conferente,
    setConferente: setConferente,
    errTes: t && errs.tes,
    errConf: t && errs.conf
  })), /*#__PURE__*/React.createElement("div", {
    className: "sheet-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    style: {
      flex: 1
    },
    onClick: onClose
  }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
    style: {
      flex: 1,
      opacity: valid ? 1 : .6
    },
    onClick: save
  }, editing ? "Salvar Alterações" : "Salvar Oferta"))));
}
Object.assign(window, {
  RegistrarDizimoModal,
  RegistrarOfertaModal,
  formaLabel,
  tipoLabel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/kit-forms.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/kit-modals.jsx
try { (() => {
/* global React, Icon, Button, Input, Sheet, brl, cultoTotais */
// =============================================================================
// Igreja Ipiranga — Modais (V2): Conferência, Reabertura, Novo Culto, Sessão
// =============================================================================

// ------------------------------------------------ MODAL: CONFERÊNCIA --------
function ConferenciaModal({
  culto,
  onClose,
  onConfirm
}) {
  const t = cultoTotais(culto);
  const [diz, setDiz] = React.useState(String(t.dizimos).replace(".", ","));
  const [ofe, setOfe] = React.useState(String(t.ofertas).replace(".", ","));
  const num = s => parseFloat(String(s).replace(/\./g, "").replace(",", ".")) || 0;
  const dizC = num(diz),
    ofeC = num(ofe);
  const [totalManual, setTotalManual] = React.useState(null);
  const totalC = totalManual != null ? num(totalManual) : dizC + ofeC;
  const dif = totalC - t.total;
  const ok = Math.abs(dif) < 0.01;
  const [conferenteNome, setConferenteNome] = React.useState("");
  const [conferenteIsUser, setConferenteIsUser] = React.useState(false);
  const [outrosParticipantes, setOutrosParticipantes] = React.useState("");
  const [obs, setObs] = React.useState("");
  const [touched, setTouched] = React.useState(false);
  const confErr = !conferenteNome.trim() ? "O nome do conferente é obrigatório" : conferenteNome.trim().length < 2 ? "O nome do conferente deve ter entre 2 e 100 caracteres" : null;
  const canSave = !confErr;
  return /*#__PURE__*/React.createElement(Sheet, {
    variant: "full",
    onClose: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet-screen"
  }, /*#__PURE__*/React.createElement("header", {
    className: "hdr-primary flat row-l",
    style: {
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "hdr-back",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "hdr-name",
    style: {
      fontSize: 18
    }
  }, "Confer\xEAncia Financeira"), /*#__PURE__*/React.createElement("p", {
    className: "hdr-greet"
  }, culto.tema, " \xB7 ", culto.data))), /*#__PURE__*/React.createElement("div", {
    className: "sheet-body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Valores Calculados pelo Sistema"), /*#__PURE__*/React.createElement(Card, {
    style: {
      background: "color-mix(in oklch,var(--muted) 50%,var(--card))"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kv"
  }, /*#__PURE__*/React.createElement("span", {
    className: "row-l",
    style: {
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "dollar-sign",
    size: 20,
    style: {
      color: "var(--success)"
    }
  }), " D\xEDzimos"), /*#__PURE__*/React.createElement("span", {
    className: "b600"
  }, brl(t.dizimos))), /*#__PURE__*/React.createElement("div", {
    className: "kv"
  }, /*#__PURE__*/React.createElement("span", {
    className: "row-l",
    style: {
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "gift",
    size: 20,
    style: {
      color: "var(--accent-foreground)"
    }
  }), " Ofertas"), /*#__PURE__*/React.createElement("span", {
    className: "b600"
  }, brl(t.ofertas))), /*#__PURE__*/React.createElement("div", {
    className: "kv-total"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b600"
  }, "Total Sistema"), /*#__PURE__*/React.createElement("span", {
    className: "b700",
    style: {
      color: "var(--primary)",
      fontSize: 18
    }
  }, brl(t.total)))), /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      marginTop: 16
    }
  }, "Valores Contados Fisicamente"), /*#__PURE__*/React.createElement("div", {
    className: "stack-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Total de D\xEDzimos contados"), /*#__PURE__*/React.createElement(Input, {
    className: "conf-num",
    value: diz,
    onChange: e => setDiz(e.target.value),
    placeholder: "R$ 0,00",
    inputMode: "decimal"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Total de Ofertas contadas"), /*#__PURE__*/React.createElement(Input, {
    className: "conf-num",
    value: ofe,
    onChange: e => setOfe(e.target.value),
    placeholder: "R$ 0,00",
    inputMode: "decimal"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Total Geral contado"), /*#__PURE__*/React.createElement(Input, {
    className: "conf-num",
    value: totalManual != null ? totalManual : String(totalC).replace(".", ","),
    onChange: e => setTotalManual(e.target.value),
    placeholder: "R$ 0,00",
    inputMode: "decimal"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      marginTop: 16
    }
  }, "Compara\xE7\xE3o"), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: "comp-head"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null, "Sistema"), /*#__PURE__*/React.createElement("span", null, "Contado")), /*#__PURE__*/React.createElement("div", {
    className: "comp-row"
  }, /*#__PURE__*/React.createElement("span", null, "D\xEDzimos"), /*#__PURE__*/React.createElement("span", {
    className: "mono-meta"
  }, brl(t.dizimos)), /*#__PURE__*/React.createElement("span", {
    className: "mono-meta"
  }, brl(dizC))), /*#__PURE__*/React.createElement("div", {
    className: "comp-row"
  }, /*#__PURE__*/React.createElement("span", null, "Ofertas"), /*#__PURE__*/React.createElement("span", {
    className: "mono-meta"
  }, brl(t.ofertas)), /*#__PURE__*/React.createElement("span", {
    className: "mono-meta"
  }, brl(ofeC))), /*#__PURE__*/React.createElement("div", {
    className: "comp-row total"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b600"
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    className: "b600 mono-meta"
  }, brl(t.total)), /*#__PURE__*/React.createElement("span", {
    className: "b600 mono-meta"
  }, brl(totalC))), /*#__PURE__*/React.createElement("div", {
    className: "comp-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b600",
    style: {
      color: ok ? "var(--success)" : "var(--warning)"
    }
  }, "Diferen\xE7a"), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", {
    className: "b700 mono-meta",
    style: {
      color: ok ? "var(--success)" : "var(--warning)"
    }
  }, dif >= 0 ? "+" : "", brl(dif)))), /*#__PURE__*/React.createElement("div", {
    className: "alert " + (ok ? "alert-ok" : "alert-warn"),
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ok ? "check-circle-2" : "alert-circle",
    size: 20,
    style: {
      color: ok ? "var(--success)" : "var(--warning)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "b600",
    style: {
      color: ok ? "var(--success)" : "var(--warning)",
      margin: 0
    }
  }, ok ? "Conferência OK" : "Divergência de " + brl(Math.abs(dif))), /*#__PURE__*/React.createElement("p", {
    className: "metric-sub",
    style: {
      margin: 0
    }
  }, ok ? "Os valores conferem perfeitamente." : "Os valores não conferem."))), /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      marginTop: 16
    }
  }, "Respons\xE1veis pela Confer\xEAncia"), /*#__PURE__*/React.createElement("p", {
    className: "metric-sub",
    style: {
      marginBottom: 10,
      fontSize: 12.5
    }
  }, "Duas pessoas devem estar presentes na contagem."), /*#__PURE__*/React.createElement("div", {
    className: "conf-responsavel-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "conf-resp-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "circ-ic sm",
    style: {
      background: "color-mix(in oklch,var(--primary) 10%,transparent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 16,
    style: {
      color: "var(--primary)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      margin: 0
    }
  }, "Tesoureiro (usu\xE1rio logado)"), /*#__PURE__*/React.createElement("p", {
    className: "b600",
    style: {
      margin: "2px 0 0"
    }
  }, USER.nome)), /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 16,
    style: {
      color: "var(--muted-foreground)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("label", null, "Nome do Conferente *"), /*#__PURE__*/React.createElement(Input, {
    value: conferenteNome,
    error: touched && !!confErr,
    onChange: e => setConferenteNome(e.target.value),
    placeholder: "Nome de quem conferiu junto"
  }), touched && confErr && /*#__PURE__*/React.createElement("p", {
    className: "field-err"
  }, confErr), /*#__PURE__*/React.createElement("p", {
    className: "metric-sub",
    style: {
      fontSize: 12,
      marginTop: 4
    }
  }, "Obreiro, di\xE1cono ou 2\xBA tesoureiro presente na contagem")), /*#__PURE__*/React.createElement("div", {
    className: "dizimista-row",
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "b600",
    style: {
      margin: 0,
      fontSize: 14
    }
  }, "Conferente \xE9 usu\xE1rio do sistema?"), /*#__PURE__*/React.createElement("p", {
    className: "metric-sub",
    style: {
      margin: "2px 0 0",
      fontSize: 12
    }
  }, "Opcional")), /*#__PURE__*/React.createElement("button", {
    className: "toggle" + (conferenteIsUser ? " on" : ""),
    onClick: () => setConferenteIsUser(!conferenteIsUser)
  }, /*#__PURE__*/React.createElement("span", {
    className: "toggle-thumb"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("label", null, "Outros participantes ", /*#__PURE__*/React.createElement("span", {
    className: "opt"
  }, "(opcional)")), /*#__PURE__*/React.createElement(Input, {
    value: outrosParticipantes,
    onChange: e => setOutrosParticipantes(e.target.value),
    placeholder: "Ex: Pr. Jos\xE9, Di\xE1cono Paulo"
  })), /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      marginTop: 16
    }
  }, "Observa\xE7\xF5es (Opcional)"), /*#__PURE__*/React.createElement("textarea", {
    className: "textarea",
    rows: 2,
    value: obs,
    onChange: e => setObs(e.target.value),
    placeholder: "Ex: Alguns trocados separados para troco..."
  }), /*#__PURE__*/React.createElement("div", {
    className: "warn-lock"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert-circle",
    size: 18,
    style: {
      color: "var(--warning)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Aten\xE7\xE3o:"), " ao confirmar, a ", /*#__PURE__*/React.createElement("b", null, "se\xE7\xE3o financeira"), " deste culto ser\xE1 bloqueada para edi\xE7\xF5es."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      fontSize: 12.5,
      color: "var(--muted-foreground)"
    }
  }, "Louvores, m\xFAsicos e demais participantes continuam edit\xE1veis. Para reabrir o caixa, ser\xE1 necess\xE1rio informar um motivo \u2014 a a\xE7\xE3o fica registrada no log de auditoria.")))), /*#__PURE__*/React.createElement("div", {
    className: "sheet-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    style: {
      flex: 1
    },
    onClick: onClose
  }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
    style: {
      flex: 1,
      background: ok ? "var(--success)" : "var(--warning)",
      color: "#fff",
      opacity: canSave ? 1 : .65
    },
    onClick: () => {
      if (!canSave) {
        setTouched(true);
        return;
      }
      onConfirm({
        status: ok ? "CONFERIDO" : "DIVERGENTE",
        totalSistema: t.total,
        totalContado: totalC,
        diferenca: dif,
        tesoureiro: USER.nome,
        conferenteNome: conferenteNome.trim(),
        observacao: obs.trim()
      });
    }
  }, ok ? "Confirmar" : "Conferir Mesmo Assim"))));
}

// ------------------------------------------------ MODAL: REABERTURA ---------
function ReaberturaModal({
  culto,
  onClose,
  onConfirm
}) {
  const [motivo, setMotivo] = React.useState("");
  const [touched, setTouched] = React.useState(false);
  const conf = culto.conferencia;
  const invalid = touched && !motivo.trim();
  return /*#__PURE__*/React.createElement(Sheet, {
    variant: "bottom",
    onClose: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet-bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet-grab"
  }), /*#__PURE__*/React.createElement("div", {
    className: "reabrir-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock-open",
    size: 28,
    style: {
      color: "var(--warning)"
    }
  })), /*#__PURE__*/React.createElement("h2", {
    className: "reabrir-title"
  }, "Reabrir Culto Conferido"), /*#__PURE__*/React.createElement("p", {
    className: "reabrir-info"
  }, "Este culto foi conferido em ", /*#__PURE__*/React.createElement("b", null, conf.data), ".", /*#__PURE__*/React.createElement("br", null), "Total conferido: ", /*#__PURE__*/React.createElement("b", null, brl(conf.totalContado)), /*#__PURE__*/React.createElement("br", null), "Tesoureiro: ", /*#__PURE__*/React.createElement("b", null, conf.tesoureiro)), /*#__PURE__*/React.createElement("p", {
    className: "reabrir-warn"
  }, "Ao reabrir, a confer\xEAncia ser\xE1 ", /*#__PURE__*/React.createElement("b", null, "REMOVIDA"), " e o caixa voltar\xE1 a aceitar novos lan\xE7amentos. ", /*#__PURE__*/React.createElement("b", null, "Esta a\xE7\xE3o fica registrada no log de auditoria"), " com o motivo informado abaixo."), /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      margin: "4px 0 6px"
    }
  }, "Motivo (obrigat\xF3rio para auditoria)"), /*#__PURE__*/React.createElement("textarea", {
    className: "textarea" + (invalid ? " textarea-err" : ""),
    rows: 3,
    value: motivo,
    onChange: e => setMotivo(e.target.value),
    placeholder: "Descreva o motivo da reabertura..."
  }), invalid && /*#__PURE__*/React.createElement("p", {
    className: "field-err"
  }, "Informe o motivo da reabertura"), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 8,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    style: {
      flex: 1
    },
    onClick: onClose
  }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
    style: {
      flex: 1,
      background: "var(--destructive)",
      color: "#fff",
      opacity: motivo.trim() ? 1 : .5
    },
    onClick: () => {
      if (!motivo.trim()) {
        setTouched(true);
        return;
      }
      onConfirm();
    }
  }, "Confirmar Reabertura"))));
}

// ------------------------------------------------ MODAL: NOVO CULTO ---------
function NovoCultoModal({
  onClose,
  onCreate
}) {
  const [tema, setTema] = React.useState("");
  return /*#__PURE__*/React.createElement(Sheet, {
    variant: "full",
    onClose: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet-screen"
  }, /*#__PURE__*/React.createElement("header", {
    className: "hdr-primary flat row-l",
    style: {
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "hdr-back",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 22
  })), /*#__PURE__*/React.createElement("h1", {
    className: "hdr-name",
    style: {
      fontSize: 18
    }
  }, "Novo Culto")), /*#__PURE__*/React.createElement("div", {
    className: "sheet-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Data e Hora *"), /*#__PURE__*/React.createElement(Input, {
    type: "text",
    defaultValue: "07/06/2026 19:00"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("label", null, "Tema"), /*#__PURE__*/React.createElement(Input, {
    value: tema,
    onChange: e => setTema(e.target.value),
    placeholder: "Ex: A Gra\xE7a que Transforma",
    maxLength: 200
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("label", null, "Palavra Inicial Por"), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Ex: Pr. Jo\xE3o Silva",
    maxLength: 100
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("label", null, "Palavra Final Por"), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Ex: Pr. Pedro Santos",
    maxLength: 100
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("label", null, "Total de Pessoas"), /*#__PURE__*/React.createElement(Input, {
    type: "number",
    placeholder: "0"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("label", null, "Descri\xE7\xE3o"), /*#__PURE__*/React.createElement("textarea", {
    className: "textarea",
    rows: 3,
    placeholder: "Detalhes do culto...",
    maxLength: 500
  })), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("label", null, "Status *"), /*#__PURE__*/React.createElement("select", {
    className: "inp select"
  }, /*#__PURE__*/React.createElement("option", null, "EM_ANDAMENTO"), /*#__PURE__*/React.createElement("option", null, "FINALIZADO")))), /*#__PURE__*/React.createElement("div", {
    className: "sheet-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    style: {
      flex: 1
    },
    onClick: onClose
  }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
    style: {
      flex: 1
    },
    onClick: () => onCreate(tema || "Novo Culto")
  }, "Salvar"))));
}

// ------------------------------------------------ SHEET: SESSÃO EXPIRADA ----
function SessaoExpiradaModal({
  onLogin
}) {
  return /*#__PURE__*/React.createElement(Sheet, {
    variant: "bottom",
    onClose: () => {}
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet-bottom",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet-grab"
  }), /*#__PURE__*/React.createElement("div", {
    className: "reabrir-ic",
    style: {
      background: "color-mix(in oklch,var(--destructive) 10%,transparent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-out",
    size: 26,
    style: {
      color: "var(--destructive)"
    }
  })), /*#__PURE__*/React.createElement("h2", {
    className: "reabrir-title"
  }, "Sess\xE3o expirada"), /*#__PURE__*/React.createElement("p", {
    className: "reabrir-info"
  }, "Sua sess\xE3o expirou. Fa\xE7a login novamente para continuar."), /*#__PURE__*/React.createElement(Button, {
    className: "full",
    style: {
      marginTop: 8
    },
    onClick: onLogin
  }, "Entrar novamente")));
}
Object.assign(window, {
  ConferenciaModal,
  ReaberturaModal,
  NovoCultoModal,
  SessaoExpiradaModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/kit-modals.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/kit-screens-a.jsx
try { (() => {
/* global React, Icon, Button, Input, Badge, Card, brl, can, cultoTotais, USER */
// =============================================================================
// Igreja Ipiranga — Screens A (V2): Login, Dashboard, Cultos, Culto Detalhe
// =============================================================================

// ---------------------------------------------------------------- LOGIN -----
function LoginScreen({
  onLogin
}) {
  const [email, setEmail] = React.useState("admin@igreja.com");
  const [password, setPassword] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const submit = () => {
    const e = {};
    if (!email) e.email = "Digite seu e-mail";else if (!/\S+@\S+\.\S+/.test(email)) e.email = "E-mail inválido";
    if (!password) e.password = "Digite sua senha";else if (password.length < 6) e.password = "Senha deve ter pelo menos 6 caracteres";
    setErrors(e);
    if (Object.keys(e).length) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 1100);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "screen login"
  }, /*#__PURE__*/React.createElement("div", {
    className: "login-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "login-badge"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "church",
    size: 48
  })), /*#__PURE__*/React.createElement("h1", {
    className: "login-title"
  }, "Igreja Ipiranga"), /*#__PURE__*/React.createElement("p", {
    className: "login-sub"
  }, "Sistema de Gest\xE3o")), /*#__PURE__*/React.createElement("div", {
    className: "login-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "E-mail"), /*#__PURE__*/React.createElement(Input, {
    value: email,
    error: !!errors.email,
    placeholder: "seu@email.com",
    autoComplete: "email",
    onChange: e => {
      setEmail(e.target.value);
      setErrors({
        ...errors,
        email: undefined
      });
    }
  }), errors.email && /*#__PURE__*/React.createElement("p", {
    className: "field-err"
  }, errors.email)), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Senha"), /*#__PURE__*/React.createElement("div", {
    className: "field-icon-r"
  }, /*#__PURE__*/React.createElement(Input, {
    type: show ? "text" : "password",
    value: password,
    error: !!errors.password,
    placeholder: "Digite sua senha",
    onChange: e => {
      setPassword(e.target.value);
      setErrors({
        ...errors,
        password: undefined
      });
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "eye",
    onClick: () => setShow(!show)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: show ? "eye-off" : "eye",
    size: 20
  }))), errors.password && /*#__PURE__*/React.createElement("p", {
    className: "field-err"
  }, errors.password)), /*#__PURE__*/React.createElement("button", {
    className: "link-primary"
  }, "Esqueci minha senha"), /*#__PURE__*/React.createElement(Button, {
    variant: "default",
    size: "lg",
    className: "full",
    onClick: submit,
    disabled: loading
  }, loading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
    name: "loader-2",
    size: 20,
    className: "spin"
  }), " Entrando...") : "Entrar"), /*#__PURE__*/React.createElement("div", {
    className: "divider"
  }, /*#__PURE__*/React.createElement("span", null, "ou")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    className: "full"
  }, "Criar nova conta"), /*#__PURE__*/React.createElement("p", {
    className: "login-version"
  }, "Vers\xE3o 1.0.0")));
}

// ------------------------------------------------------------ DASHBOARD -----
function DashboardScreen({
  role,
  cultos,
  onNavigate,
  onOpenCulto,
  onRegistrarDizimo,
  onToast
}) {
  const proximo = cultos.find(c => c.status === "EM_ANDAMENTO") || cultos[0];
  const ativos = 87;
  const mesTotal = "R$ 3.240";
  const QUICK = [{
    ic: "church",
    lbl: "Novo Culto",
    act: "criar_culto"
  }, {
    ic: "users",
    lbl: "Novo Membro",
    act: "cadastrar_membro"
  }, {
    ic: "dollar-sign",
    lbl: "Registrar Dízimo",
    act: "registrar_dizimo"
  }, {
    ic: "bar-chart-2",
    lbl: "Relatórios",
    act: "relatorios"
  }, {
    ic: "shield",
    lbl: "Auditoria",
    act: "ver_auditoria"
  }].filter(q => can(role, q.act));
  return /*#__PURE__*/React.createElement("div", {
    className: "screen has-nav"
  }, /*#__PURE__*/React.createElement("header", {
    className: "hdr-primary rounded-b"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hdr-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "hdr-greet"
  }, "Bem-vindo,"), /*#__PURE__*/React.createElement("h1", {
    className: "hdr-name"
  }, USER.nome)), /*#__PURE__*/React.createElement("button", {
    className: "hdr-bell",
    onClick: () => onToast("Nenhuma notificação nova", "success")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "church-pill"
  }, /*#__PURE__*/React.createElement("div", {
    className: "church-pill-l"
  }, /*#__PURE__*/React.createElement("div", {
    className: "church-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "church",
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "church-name"
  }, USER.igreja), /*#__PURE__*/React.createElement("p", {
    className: "church-sub"
  }, "Sede Principal"))), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 20,
    style: {
      opacity: .5
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dash-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, /*#__PURE__*/React.createElement(Card, {
    className: "tap",
    onClick: () => onNavigate("membros")
  }, /*#__PURE__*/React.createElement("div", {
    className: "metric-ic",
    style: {
      background: "color-mix(in oklch,var(--primary) 12%,transparent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 20,
    style: {
      color: "var(--primary)"
    }
  })), /*#__PURE__*/React.createElement("p", {
    className: "metric-num"
  }, ativos), /*#__PURE__*/React.createElement("p", {
    className: "metric-sub"
  }, "Membros Ativos")), /*#__PURE__*/React.createElement(Card, {
    className: "tap",
    onClick: () => onNavigate("financeiro")
  }, /*#__PURE__*/React.createElement("div", {
    className: "metric-ic",
    style: {
      background: "color-mix(in oklch,var(--chart-2) 20%,transparent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "wallet",
    size: 20,
    style: {
      color: "var(--chart-2)"
    }
  })), /*#__PURE__*/React.createElement("p", {
    className: "metric-num"
  }, mesTotal), /*#__PURE__*/React.createElement("p", {
    className: "metric-sub"
  }, "Este M\xEAs"))), /*#__PURE__*/React.createElement(Card, {
    className: "row-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-l"
  }, /*#__PURE__*/React.createElement("div", {
    className: "metric-ic",
    style: {
      background: "color-mix(in oklch,var(--accent) 20%,transparent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trending-up",
    size: 20,
    style: {
      color: "var(--accent-foreground)"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "b600"
  }, "Crescimento"), /*#__PURE__*/React.createElement("p", {
    className: "metric-sub"
  }, "vs. m\xEAs anterior"))), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "+12%")), /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("h2", null, "Pr\xF3ximo Culto"), /*#__PURE__*/React.createElement("button", {
    className: "link-sm",
    onClick: () => onNavigate("cultos")
  }, "Ver todos")), /*#__PURE__*/React.createElement(Card, {
    className: "accent-l tap",
    onClick: () => onOpenCulto(proximo.id)
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "b600"
  }, proximo.tema), /*#__PURE__*/React.createElement("p", {
    className: "metric-sub",
    style: {
      marginBottom: 8
    }
  }, proximo.dataHora), /*#__PURE__*/React.createElement("p", {
    className: "row-l metric-sub",
    style: {
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 16
  }), " ", proximo.data)), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Em andamento"))), QUICK.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    className: "sec-head-solo"
  }, "A\xE7\xF5es R\xE1pidas"), /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, QUICK.map(q => /*#__PURE__*/React.createElement("button", {
    key: q.lbl,
    className: "quick",
    onClick: () => {
      if (q.act === "registrar_dizimo") {
        onRegistrarDizimo();
      } else if (q.act === "relatorios") {
        onNavigate("relatorios");
      } else if (q.act === "ver_auditoria") {
        onNavigate("auditoria");
      } else {
        onToast(q.lbl + " — em breve", "success");
      }
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: q.ic,
    size: 24,
    style: {
      color: "var(--primary)"
    }
  }), /*#__PURE__*/React.createElement("span", null, q.lbl)))))));
}

// --------------------------------------------------------------- CULTOS -----
const STATUS = {
  AGENDADO: {
    label: "Agendado",
    tone: "muted"
  },
  EM_ANDAMENTO: {
    label: "Em Andamento",
    tone: "accent"
  },
  FINALIZADO: {
    label: "Finalizado",
    tone: "success"
  }
};
function CultosScreen({
  role,
  cultos,
  onOpenCulto,
  onNovoCulto
}) {
  const [q, setQ] = React.useState("");
  const [filter, setFilter] = React.useState(null);
  const list = cultos.filter(c => c.tema.toLowerCase().includes(q.toLowerCase()) && (!filter || c.status === filter));
  const filters = [[null, "Todos"], ["EM_ANDAMENTO", "Em Andamento"], ["AGENDADO", "Agendados"], ["FINALIZADO", "Finalizados"]];
  return /*#__PURE__*/React.createElement("div", {
    className: "screen has-nav"
  }, /*#__PURE__*/React.createElement("header", {
    className: "hdr-sticky"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-between",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "hdr-name dark"
  }, "Cultos"), can(role, "criar_culto") && /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onNovoCulto
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 16
  }), " Novo")), /*#__PURE__*/React.createElement("div", {
    className: "field-icon-l"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Buscar por tema...",
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "pills"
  }, filters.map(([val, lbl]) => /*#__PURE__*/React.createElement("button", {
    key: lbl,
    className: "pill" + (filter === val ? " on" : ""),
    onClick: () => setFilter(val)
  }, lbl)))), /*#__PURE__*/React.createElement("div", {
    className: "list"
  }, list.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement("div", {
    className: "empty-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 32
  })), /*#__PURE__*/React.createElement("p", null, "Nenhum culto encontrado")) : list.map(c => {
    const s = STATUS[c.status];
    const t = cultoTotais(c);
    return /*#__PURE__*/React.createElement(Card, {
      key: c.id,
      className: "tap" + (c.status === "EM_ANDAMENTO" ? " accent-l" : ""),
      onClick: () => onOpenCulto(c.id)
    }, /*#__PURE__*/React.createElement("div", {
      className: "row-between"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "row-l",
      style: {
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: s.tone
    }, s.label), c.conferencia && /*#__PURE__*/React.createElement(Badge, {
      tone: c.conferencia.status === "CONFERIDO" ? "success" : "warning"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: c.conferencia.status === "CONFERIDO" ? "check-circle-2" : "alert-circle",
      size: 12
    }), c.conferencia.status === "CONFERIDO" ? "Conferido" : "Divergente")), /*#__PURE__*/React.createElement("h3", {
      className: "b600",
      style: {
        margin: "6px 0 4px"
      }
    }, c.tema), /*#__PURE__*/React.createElement("div", {
      className: "row-l metric-sub",
      style: {
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "row-l",
      style: {
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 16
    }), c.dataHora), /*#__PURE__*/React.createElement("span", {
      className: "row-l",
      style: {
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 16
    }), c.pessoas))), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 20,
      style: {
        color: "var(--muted-foreground)"
      }
    })));
  })));
}

// -------------------------------------------------------- CULTO DETALHE -----
function PessoasSection({
  titulo,
  icon,
  iconBg,
  iconColor,
  items,
  render,
  addLabel,
  locked,
  onAdd
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "row-between",
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "eyebrow"
  }, titulo), /*#__PURE__*/React.createElement("button", {
    className: "link-sm",
    disabled: locked,
    onClick: onAdd
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14
  }), " Adicionar")), items.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "metric-sub",
    style: {
      padding: "4px 0 8px"
    }
  }, "Nenhum registrado") : items.map((it, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    className: "row-l compact",
    style: {
      gap: 12,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "circ-ic sm",
    style: {
      background: iconBg
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16,
    style: {
      color: iconColor
    }
  })), /*#__PURE__*/React.createElement("div", null, render(it)))));
}
function CultoDetalheScreen({
  role,
  culto,
  defaultTab,
  onBack,
  onConferir,
  onReabrir,
  onAddDizimo,
  onAddOferta,
  onEditDizimo,
  onDeleteDizimo,
  onEditOferta,
  onDeleteOferta,
  onEditCulto,
  onDeleteCulto,
  onAddSub,
  onToast
}) {
  const [tab, setTab] = React.useState(defaultTab || "resumo");
  const [priv, setPriv] = React.useState(false);
  const t = cultoTotais(culto);
  const finLocked = !!culto.conferencia; // só bloqueia financeiro
  const locked = finLocked; // alias para compat (removido dos sub-entity props)
  const conferido = locked && culto.conferencia.status === "CONFERIDO";
  const tabs = [["resumo", "Resumo"], ["louvores", "Louvores"], ["pessoas", "Pessoas"], ["financeiro", "Financeiro"]];
  const addDisabled = lbl => locked ? onToast("Culto conferido. Apenas ADMIN pode reabrir.", "warning") : onToast(lbl + " — em breve", "success");
  const money = v => priv ? "••••••" : brl(v);
  return /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, /*#__PURE__*/React.createElement("header", {
    className: "hdr-primary rounded-b"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-l",
    style: {
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "hdr-back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: culto.status === "EM_ANDAMENTO" ? "accent" : "muted"
  }, STATUS[culto.status].label), /*#__PURE__*/React.createElement("h1", {
    className: "hdr-name",
    style: {
      marginTop: 4,
      fontSize: 18
    }
  }, culto.tema), /*#__PURE__*/React.createElement("p", {
    className: "hdr-greet"
  }, culto.dataHora)), can(role, "editar_culto") && !locked && /*#__PURE__*/React.createElement("div", {
    className: "row-l",
    style: {
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "hdr-back",
    onClick: onEditCulto
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pencil",
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    className: "hdr-back",
    style: {
      background: "color-mix(in oklch,var(--destructive) 25%,transparent)"
    },
    onClick: onDeleteCulto
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash-2",
    size: 18
  })))), /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, [[culto.pessoas, "Pessoas"], ["R$ " + t.dizimos.toLocaleString("pt-BR"), "Dízimos"], ["R$ " + t.ofertas.toLocaleString("pt-BR"), "Ofertas"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    className: "mini-card"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mini-num"
  }, n), /*#__PURE__*/React.createElement("p", {
    className: "mini-lbl"
  }, l))))), finLocked && /*#__PURE__*/React.createElement(LockedBanner, {
    data: culto.conferencia.data,
    conferenteNome: culto.conferencia.conferenteNome,
    canReabrir: can(role, "reabrir"),
    onReabrir: onReabrir
  }), /*#__PURE__*/React.createElement("div", {
    className: "detail-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tabs"
  }, tabs.map(([id, lbl]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    className: "tab" + (tab === id ? " on" : ""),
    onClick: () => setTab(id)
  }, lbl))), tab === "resumo" && /*#__PURE__*/React.createElement("div", {
    className: "stack-md"
  }, /*#__PURE__*/React.createElement(Card, null, [["Palavra Inicial", culto.palavraInicial], ["Palavra Final", culto.palavraFinal], ["Louvores", culto.louvores.length], ["Visitantes", culto.visitantes.length]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "kv"
  }, /*#__PURE__*/React.createElement("span", {
    className: "metric-sub"
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "b500"
  }, v)))), /*#__PURE__*/React.createElement(Card, {
    className: conferido ? "success-l" : "accent-l"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-l",
    style: {
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: conferido ? "check-circle-2" : "alert-circle",
    size: 20,
    style: {
      color: conferido ? "var(--success)" : "var(--accent)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "b500"
  }, "Caixa Financeiro"), /*#__PURE__*/React.createElement("p", {
    className: "metric-sub"
  }, finLocked ? culto.conferencia.status === "CONFERIDO" ? "Conferido em " + culto.conferencia.data : "Divergente · " + culto.conferencia.data : "Pendente"))), !finLocked && can(role, "conferir") && /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onConferir
  }, "Conferir"))), can(role, "editar_culto") && /*#__PURE__*/React.createElement(Card, {
    style: {
      borderLeft: "4px solid var(--primary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-l",
    style: {
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "door-closed",
    size: 20,
    style: {
      color: "var(--primary)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "b500"
  }, "Fechar Culto"), /*#__PURE__*/React.createElement("p", {
    className: "metric-sub"
  }, "Muda status para Finalizado"))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onEditCulto
  }, culto.status === "FINALIZADO" ? "Reabrir" : "Fechar")))), tab === "louvores" && /*#__PURE__*/React.createElement("div", {
    className: "stack-sm"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    className: "full",
    onClick: () => onAddSub("louvor")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 20
  }), " Adicionar Louvor"), culto.louvores.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "music",
    size: 40,
    style: {
      color: "var(--muted-foreground)"
    }
  }), /*#__PURE__*/React.createElement("p", null, "Nenhum louvor adicionado")) : culto.louvores.map((l, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    className: "row-l",
    style: {
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "circ-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "music",
    size: 20,
    style: {
      color: "var(--primary)"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "b500"
  }, l.nome), /*#__PURE__*/React.createElement("p", {
    className: "metric-sub"
  }, l.hino))))), tab === "pessoas" && /*#__PURE__*/React.createElement("div", {
    className: "stack-md"
  }, /*#__PURE__*/React.createElement(PessoasSection, {
    titulo: "M\xFAsicos",
    icon: "mic-2",
    iconBg: "color-mix(in oklch,var(--primary) 10%,transparent)",
    iconColor: "var(--primary)",
    items: culto.musicos,
    locked: false,
    onAdd: () => onAddSub("musico"),
    render: m => /*#__PURE__*/React.createElement("p", {
      className: "b500 sm"
    }, m.nome)
  }), /*#__PURE__*/React.createElement(PessoasSection, {
    titulo: "Cooperadores",
    icon: "user-check",
    iconBg: "var(--secondary)",
    iconColor: "var(--secondary-foreground)",
    items: culto.cooperadores,
    locked: false,
    onAdd: () => onAddSub("cooperador"),
    render: c => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      className: "b500 sm"
    }, c.nome), /*#__PURE__*/React.createElement("p", {
      className: "metric-sub xs"
    }, c.cargo))
  }), /*#__PURE__*/React.createElement(PessoasSection, {
    titulo: "Presb\xEDteros",
    icon: "user-check",
    iconBg: "color-mix(in oklch,var(--accent) 20%,transparent)",
    iconColor: "var(--accent-foreground)",
    items: culto.presbiteros,
    locked: false,
    onAdd: () => onAddSub("presbitero"),
    render: p => /*#__PURE__*/React.createElement("p", {
      className: "b500 sm"
    }, p.nome)
  }), /*#__PURE__*/React.createElement(PessoasSection, {
    titulo: "Visitantes",
    icon: "users",
    iconBg: "color-mix(in oklch,var(--accent) 20%,transparent)",
    iconColor: "var(--accent-foreground)",
    items: culto.visitantes,
    locked: false,
    onAdd: () => onAddSub("visitante"),
    render: v => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      className: "b500 sm"
    }, v.nome), /*#__PURE__*/React.createElement("p", {
      className: "metric-sub xs"
    }, v.tel || v.telefone))
  })), tab === "financeiro" && /*#__PURE__*/React.createElement("div", {
    className: "stack-md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-between"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "eyebrow"
  }, "Lan\xE7amentos"), /*#__PURE__*/React.createElement("button", {
    className: "priv-toggle",
    onClick: () => setPriv(!priv)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: priv ? "eye-off" : "eye",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tot-card",
    style: {
      background: "color-mix(in oklch,var(--success) 10%,transparent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "dollar-sign",
    size: 24,
    style: {
      color: "var(--success)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "tot-num",
    style: {
      color: "var(--success)"
    }
  }, money(t.dizimos)), /*#__PURE__*/React.createElement("p", {
    className: "metric-sub"
  }, "D\xEDzimos")), /*#__PURE__*/React.createElement("div", {
    className: "tot-card",
    style: {
      background: "color-mix(in oklch,var(--accent) 10%,transparent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "gift",
    size: 24,
    style: {
      color: "var(--accent-foreground)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "tot-num",
    style: {
      color: "var(--accent-foreground)"
    }
  }, money(t.ofertas)), /*#__PURE__*/React.createElement("p", {
    className: "metric-sub"
  }, "Ofertas"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "row-between",
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "eyebrow"
  }, "D\xEDzimos"), can(role, "registrar_dizimo") && /*#__PURE__*/React.createElement("button", {
    className: "link-sm",
    disabled: finLocked,
    onClick: onAddDizimo
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14
  }), " Registrar")), culto.dizimos.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "metric-sub"
  }, "Nenhum d\xEDzimo registrado neste culto") : culto.dizimos.map((d, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    className: "compact",
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-between",
    style: {
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-l",
    style: {
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatar sm"
  }, d.membro.charAt(0)), /*#__PURE__*/React.createElement("p", {
    className: "b600 sm"
  }, d.membro, d.membroCadastrado === false && /*#__PURE__*/React.createElement("span", {
    className: "tag-avulso"
  }, "avulso"))), /*#__PURE__*/React.createElement("span", {
    className: "val-money",
    style: {
      color: "var(--success)"
    }
  }, money(d.valor))), /*#__PURE__*/React.createElement("div", {
    className: "fin-item-meta"
  }, /*#__PURE__*/React.createElement("p", {
    className: "metric-sub xs mono-meta"
  }, d.forma ? d.forma.replace(/_/g, " ") : "", " \xB7 ", d.data), !finLocked && can(role, "registrar_dizimo") && /*#__PURE__*/React.createElement("div", {
    className: "fin-item-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "item-action",
    onClick: () => onEditDizimo(i)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pencil",
    size: 14
  })), /*#__PURE__*/React.createElement("button", {
    className: "item-action del",
    onClick: () => onDeleteDizimo(i)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash-2",
    size: 14
  })))), d.conferente && /*#__PURE__*/React.createElement("p", {
    className: "audit-line"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 11
  }), " ", d.tesoureiro, " \xB7 conf. ", d.conferente)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "row-between",
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "eyebrow"
  }, "Ofertas"), can(role, "registrar_oferta") && /*#__PURE__*/React.createElement("button", {
    className: "link-sm",
    disabled: finLocked,
    onClick: onAddOferta
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14
  }), " Registrar")), culto.ofertas.map((o, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    className: "compact",
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-between",
    style: {
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-l",
    style: {
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "circ-ic sm",
    style: {
      background: "color-mix(in oklch,var(--accent) 12%,transparent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "gift",
    size: 16,
    style: {
      color: "var(--accent-foreground)"
    }
  })), /*#__PURE__*/React.createElement("p", {
    className: "b600 sm"
  }, "Oferta ", o.tipo)), /*#__PURE__*/React.createElement("span", {
    className: "val-money",
    style: {
      color: "var(--accent-foreground)"
    }
  }, money(o.valor))), /*#__PURE__*/React.createElement("div", {
    className: "fin-item-meta"
  }, /*#__PURE__*/React.createElement("p", {
    className: "metric-sub xs mono-meta"
  }, o.forma ? o.forma.replace(/_/g, " ") : "", " \xB7 ", o.data), !finLocked && can(role, "registrar_oferta") && /*#__PURE__*/React.createElement("div", {
    className: "fin-item-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "item-action",
    onClick: () => onEditOferta(i)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pencil",
    size: 14
  })), /*#__PURE__*/React.createElement("button", {
    className: "item-action del",
    onClick: () => onDeleteOferta(i)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash-2",
    size: 14
  }))))))), /*#__PURE__*/React.createElement("div", {
    className: "grand-total"
  }, /*#__PURE__*/React.createElement("p", {
    className: "metric-sub",
    style: {
      color: "var(--primary-foreground)",
      opacity: .8
    }
  }, "Total Geral"), /*#__PURE__*/React.createElement("p", {
    className: "grand-num"
  }, priv ? "••••••••" : "R$ " + t.total.toLocaleString("pt-BR"))), can(role, "conferir") && /*#__PURE__*/React.createElement(Button, {
    className: "full conferir-btn",
    disabled: finLocked,
    style: {
      background: "var(--accent)",
      color: "var(--accent-foreground)"
    },
    onClick: () => finLocked ? onToast("Caixa já conferido. Use Reabrir para editar.", "warning") : onConferir()
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle-2",
    size: 20
  }), " ", locked ? "Caixa já conferido" : "Conferir Caixa"))));
}
Object.assign(window, {
  LoginScreen,
  DashboardScreen,
  CultosScreen,
  CultoDetalheScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/kit-screens-a.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/kit-screens-b.jsx
try { (() => {
/* global React, Icon, Button, Input, Badge, Card, brl, can, cultoTotais, MEMBROS */
// =============================================================================
// Igreja Ipiranga — Screens B (V2): Membros, Membro Detalhe, Financeiro, Relatórios
// =============================================================================

// -------------------------------------------------------------- MEMBROS -----
function MembrosScreen({
  role,
  membros,
  onOpenMembro,
  onNovoMembro,
  onToast
}) {
  const [q, setQ] = React.useState("");
  const [filter, setFilter] = React.useState("TODOS");
  const list = membros.filter(m => {
    const okSearch = m.nome.toLowerCase().includes(q.toLowerCase());
    const okFilter = filter === "TODOS" ? true : filter === "DIZIMISTA" ? m.dizimista : m.status === filter;
    return okSearch && okFilter;
  });
  const filters = [["TODOS", "Todos"], ["ATIVO", "Ativos"], ["INATIVO", "Inativos"], ["DIZIMISTA", "Dizimistas"]];
  const stats = [["Total", membros.length], ["Ativos", membros.filter(m => m.status === "ATIVO").length], ["Dizimistas", membros.filter(m => m.dizimista).length]];
  return /*#__PURE__*/React.createElement("div", {
    className: "screen has-nav"
  }, /*#__PURE__*/React.createElement("header", {
    className: "hdr-primary flat"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "hdr-name",
    style: {
      marginBottom: 12
    }
  }, "Membros"), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field-icon-l onprimary",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Buscar membro...",
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn-light",
    onClick: () => onToast("Filtros avançados", "success")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "filter",
    size: 20
  })))), /*#__PURE__*/React.createElement("div", {
    className: "member-stats"
  }, stats.map(([l, n]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    className: "member-stat"
  }, /*#__PURE__*/React.createElement("p", {
    className: "member-stat-n"
  }, n), /*#__PURE__*/React.createElement("p", {
    className: "member-stat-l"
  }, l)))), /*#__PURE__*/React.createElement("div", {
    className: "filter-strip"
  }, filters.map(([val, lbl]) => /*#__PURE__*/React.createElement("button", {
    key: val,
    className: "pill" + (filter === val ? " on" : ""),
    onClick: () => setFilter(val)
  }, lbl))), /*#__PURE__*/React.createElement("div", {
    className: "list",
    style: {
      paddingTop: 4
    }
  }, list.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    size: 48,
    style: {
      color: "var(--muted-foreground)"
    }
  }), /*#__PURE__*/React.createElement("p", null, "Nenhum membro encontrado")) : list.map(m => /*#__PURE__*/React.createElement(Card, {
    key: m.id,
    className: "tap row-between",
    onClick: () => onOpenMembro(m.id)
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "row-l",
    style: {
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "b600"
  }, m.nome), m.dizimista && /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 16,
    style: {
      color: "var(--success)",
      fill: "var(--success)"
    }
  })), /*#__PURE__*/React.createElement("p", {
    className: "metric-sub"
  }, m.tel), /*#__PURE__*/React.createElement("span", {
    className: "badge " + (m.status === "ATIVO" ? "badge-success" : "badge-muted"),
    style: {
      marginTop: 8
    }
  }, m.status === "ATIVO" ? "Ativo" : "Inativo")), /*#__PURE__*/React.createElement("div", {
    className: "avatar"
  }, m.nome.charAt(0))))), can(role, "cadastrar_membro") && /*#__PURE__*/React.createElement("button", {
    className: "fab",
    onClick: onNovoMembro
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 24
  })));
}

// ------------------------------------------------------- MEMBRO DETALHE -----
function MembroDetalheScreen({
  role,
  membro,
  onBack,
  onEdit,
  onDelete,
  onAlterarStatus,
  onAlterarDizimista,
  onToast
}) {
  const [fav, setFav] = React.useState(membro.dizimista);
  const m = membro;
  return /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, /*#__PURE__*/React.createElement("header", {
    className: "hdr-primary flat row-between"
  }, /*#__PURE__*/React.createElement("button", {
    className: "hdr-back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 20
  })), /*#__PURE__*/React.createElement("h1", {
    className: "hdr-name",
    style: {
      fontSize: 18
    }
  }, "Perfil do Membro"), /*#__PURE__*/React.createElement("button", {
    className: "hdr-back",
    onClick: () => setFav(!fav)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 20,
    style: fav ? {
      fill: "var(--accent)",
      color: "var(--accent)"
    } : {}
  }))), /*#__PURE__*/React.createElement("div", {
    className: "detail-scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "profile-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "profile-avatar"
  }, m.nome.charAt(0)), /*#__PURE__*/React.createElement("h2", {
    className: "profile-name"
  }, m.nome), /*#__PURE__*/React.createElement("p", {
    className: "hdr-greet"
  }, "Membro desde ", m.membresia), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 8,
      justifyContent: "center",
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip-light"
  }, m.status === "ATIVO" ? "Ativo" : "Inativo"), m.dizimista && /*#__PURE__*/React.createElement("span", {
    className: "chip-gold"
  }, "Dizimista"))), /*#__PURE__*/React.createElement("div", {
    className: "stack-sm",
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Contato"), /*#__PURE__*/React.createElement("div", {
    className: "stack-sm",
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "info-row"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 20,
    style: {
      color: "var(--primary)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Telefone"), /*#__PURE__*/React.createElement("p", {
    className: "b500"
  }, m.tel))), /*#__PURE__*/React.createElement("div", {
    className: "info-row"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 20,
    style: {
      color: "var(--primary)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Email"), /*#__PURE__*/React.createElement("p", {
    className: "b500"
  }, m.email))), /*#__PURE__*/React.createElement("div", {
    className: "info-row"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 20,
    style: {
      color: "var(--primary)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Endere\xE7o"), /*#__PURE__*/React.createElement("p", {
    className: "b500"
  }, m.endereco))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Informa\xE7\xF5es Pessoais"), /*#__PURE__*/React.createElement("div", {
    className: "stack-sm",
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "info-row"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 20,
    style: {
      color: "var(--primary)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Data de Nascimento"), /*#__PURE__*/React.createElement("p", {
    className: "b500"
  }, m.nascimento))), /*#__PURE__*/React.createElement("div", {
    className: "info-row"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 20,
    style: {
      color: "var(--primary)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Data de Membresia"), /*#__PURE__*/React.createElement("p", {
    className: "b500"
  }, m.membresia))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Contribui\xE7\xF5es"), /*#__PURE__*/React.createElement("div", {
    className: "grid-2",
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-box",
    style: {
      background: "color-mix(in oklch,var(--success) 10%,transparent)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "D\xEDzimos em 2026"), /*#__PURE__*/React.createElement("p", {
    className: "stat-num",
    style: {
      color: "var(--success)"
    }
  }, m.dizimosAno)), /*#__PURE__*/React.createElement("div", {
    className: "stat-box",
    style: {
      background: "color-mix(in oklch,var(--primary) 10%,transparent)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Total D\xEDzimos"), /*#__PURE__*/React.createElement("p", {
    className: "stat-num",
    style: {
      color: "var(--primary)"
    }
  }, m.totalDizimos)))), m.obs && /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Observa\xE7\xF5es"), /*#__PURE__*/React.createElement("p", {
    className: "sm",
    style: {
      marginTop: 8,
      lineHeight: 1.5
    }
  }, m.obs))), can(role, "editar_membro") && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 8px",
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    style: {
      flex: 1
    },
    onClick: onEdit
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pencil",
    size: 18
  }), " Editar"), can(role, "alterar_status_membro") && /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    style: {
      flex: 1
    },
    onClick: onAlterarStatus
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-check",
    size: 18
  }), " Status")), can(role, "excluir_membro") && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 24px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      width: "100%",
      background: "var(--destructive)",
      color: "#fff"
    },
    onClick: onDelete
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash-2",
    size: 18
  }), " Excluir Membro"))));
}

// ----------------------------------------------------------- FINANCEIRO -----
function FinanceiroScreen({
  cultos,
  onNavigate,
  onOpenCulto,
  onToast
}) {
  const [show, setShow] = React.useState(true);
  const [periodo, setPeriodo] = React.useState("mes");
  const diz = 12450.5,
    ofe = 3200;
  const mask = v => show ? brl(v) : "••••••••";
  const periodos = [["mes", "Este Mês"], ["anterior", "Mês Anterior"], ["3meses", "Últimos 3 meses"], ["ano", "Este Ano"]];

  // transações recentes cross-cultos
  const txs = [];
  cultos.forEach(c => {
    c.dizimos.forEach(d => txs.push({
      tipo: "DIZIMO",
      quem: d.membro,
      valor: d.valor,
      data: d.data,
      forma: d.forma
    }));
    c.ofertas.forEach(o => txs.push({
      tipo: "OFERTA",
      quem: "Oferta " + o.tipo,
      valor: o.valor,
      data: o.data,
      forma: o.forma
    }));
  });
  const recentes = txs.slice(0, 5);
  const emAndamento = cultos.find(c => c.status === "EM_ANDAMENTO");
  return /*#__PURE__*/React.createElement("div", {
    className: "screen has-nav"
  }, /*#__PURE__*/React.createElement("header", {
    className: "hdr-primary flat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-between",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "hdr-name",
    style: {
      fontSize: 24
    }
  }, "Financeiro"), /*#__PURE__*/React.createElement("button", {
    className: "hdr-back",
    onClick: () => setShow(!show)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: show ? "eye" : "eye-off",
    size: 20
  }))), /*#__PURE__*/React.createElement("p", {
    className: "hdr-greet"
  }, "\xDAltima confer\xEAncia: 24/05/2026")), /*#__PURE__*/React.createElement("div", {
    className: "fin-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fin-card grad-green"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-between",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "fin-eyebrow"
  }, "D\xEDzimos"), /*#__PURE__*/React.createElement("p", {
    className: "fin-num"
  }, mask(diz))), /*#__PURE__*/React.createElement("div", {
    className: "fin-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "dollar-sign",
    size: 24
  }))), /*#__PURE__*/React.createElement("p", {
    className: "row-l fin-trend",
    style: {
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trending-up",
    size: 16
  }), " +12.5% este m\xEAs")), /*#__PURE__*/React.createElement("div", {
    className: "fin-card grad-gold"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-between",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "fin-eyebrow"
  }, "Ofertas"), /*#__PURE__*/React.createElement("p", {
    className: "fin-num"
  }, mask(ofe))), /*#__PURE__*/React.createElement("div", {
    className: "fin-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "gift",
    size: 24
  }))), /*#__PURE__*/React.createElement("p", {
    className: "row-l fin-trend",
    style: {
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trending-up",
    size: 16
  }), " +5.2% este m\xEAs")), /*#__PURE__*/React.createElement("div", {
    className: "fin-card-total"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Total Recebido"), /*#__PURE__*/React.createElement("p", {
    className: "fin-num",
    style: {
      color: "var(--primary)",
      margin: "4px 0 12px"
    }
  }, mask(diz + ofe)), /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-box",
    style: {
      background: "color-mix(in oklch,var(--success) 10%,transparent)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "metric-sub xs"
  }, "D\xEDzimos"), /*#__PURE__*/React.createElement("p", {
    className: "b600",
    style: {
      color: "var(--success)"
    }
  }, show ? brl(diz) : "••••")), /*#__PURE__*/React.createElement("div", {
    className: "stat-box",
    style: {
      background: "color-mix(in oklch,var(--accent) 10%,transparent)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "metric-sub xs"
  }, "Ofertas"), /*#__PURE__*/React.createElement("p", {
    className: "b600",
    style: {
      color: "var(--accent-foreground)"
    }
  }, show ? brl(ofe) : "••••")))), /*#__PURE__*/React.createElement("div", {
    className: "pills",
    style: {
      marginTop: 0
    }
  }, periodos.map(([val, lbl]) => /*#__PURE__*/React.createElement("button", {
    key: val,
    className: "pill" + (periodo === val ? " on" : ""),
    onClick: () => setPeriodo(val)
  }, lbl))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    className: "full",
    onClick: () => onNavigate("relatorios")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bar-chart-2",
    size: 20
  }), " Ver Relat\xF3rio Completo"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-head-solo"
  }, "Transa\xE7\xF5es Recentes"), /*#__PURE__*/React.createElement("div", {
    className: "stack-sm"
  }, recentes.map((tx, i) => {
    const isDiz = tx.tipo === "DIZIMO";
    return /*#__PURE__*/React.createElement(Card, {
      key: i,
      className: "row-between compact"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row-l",
      style: {
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "tx-ic",
      style: {
        background: isDiz ? "color-mix(in oklch,var(--success) 20%,transparent)" : "color-mix(in oklch,var(--accent) 20%,transparent)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: isDiz ? "dollar-sign" : "gift",
      size: 24,
      style: {
        color: isDiz ? "var(--success)" : "var(--accent-foreground)"
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "b600 sm"
    }, tx.quem), /*#__PURE__*/React.createElement("p", {
      className: "metric-sub xs mono-meta"
    }, tx.data, " \xB7 ", tx.forma.replace(/_/g, " ")))), /*#__PURE__*/React.createElement("p", {
      className: "b600 sm"
    }, show ? brl(tx.valor) : "••••••"));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fin-fab"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "default",
    className: "full",
    onClick: () => emAndamento ? onOpenCulto(emAndamento.id) : onToast("Nenhum culto em andamento", "warning")
  }, "Conferir Financeiro")));
}

// ----------------------------------------------------------- RELATÓRIOS -----
function RelatoriosScreen({
  role,
  cultos,
  onOpenCulto,
  onNavigate
}) {
  const [periodo, setPeriodo] = React.useState("mes");
  const periodos = [["mes", "Este Mês"], ["anterior", "Mês Anterior"], ["3meses", "Últimos 3 meses"], ["ano", "Este Ano"]];
  const totalDiz = cultos.reduce((a, c) => a + cultoTotais(c).dizimos, 0);
  const totalOfe = cultos.reduce((a, c) => a + cultoTotais(c).ofertas, 0);
  const pendentes = cultos.filter(c => c.status === "FINALIZADO" && !c.conferencia);
  return /*#__PURE__*/React.createElement("div", {
    className: "screen has-nav"
  }, /*#__PURE__*/React.createElement("header", {
    className: "hdr-primary flat"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "hdr-name",
    style: {
      fontSize: 24
    }
  }, "Relat\xF3rios"), /*#__PURE__*/React.createElement("p", {
    className: "hdr-greet"
  }, "Per\xEDodo: Maio 2026")), /*#__PURE__*/React.createElement("div", {
    className: "fin-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pills",
    style: {
      marginTop: 0
    }
  }, periodos.map(([val, lbl]) => /*#__PURE__*/React.createElement("button", {
    key: val,
    className: "pill" + (periodo === val ? " on" : ""),
    onClick: () => setPeriodo(val)
  }, lbl))), /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fin-card grad-green",
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "dollar-sign",
    size: 22
  }), /*#__PURE__*/React.createElement("p", {
    className: "fin-num",
    style: {
      fontSize: 22,
      marginTop: 6
    }
  }, brl(totalDiz)), /*#__PURE__*/React.createElement("p", {
    className: "fin-eyebrow",
    style: {
      marginTop: 2
    }
  }, "D\xEDzimos \xB7 +12%")), /*#__PURE__*/React.createElement("div", {
    className: "fin-card grad-gold",
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "gift",
    size: 22
  }), /*#__PURE__*/React.createElement("p", {
    className: "fin-num",
    style: {
      fontSize: 22,
      marginTop: 6
    }
  }, brl(totalOfe)), /*#__PURE__*/React.createElement("p", {
    className: "fin-eyebrow",
    style: {
      marginTop: 2
    }
  }, "Ofertas \xB7 +5%"))), /*#__PURE__*/React.createElement("div", {
    className: "fin-card-total"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Total Geral do Per\xEDodo"), /*#__PURE__*/React.createElement("p", {
    className: "fin-num",
    style: {
      color: "var(--primary)",
      margin: "4px 0 0"
    }
  }, brl(totalDiz + totalOfe))), pendentes.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "alert alert-warn"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert-circle",
    size: 20,
    style: {
      color: "var(--warning)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "b600",
    style: {
      color: "var(--warning)",
      margin: 0
    }
  }, pendentes.length, " culto(s) com confer\xEAncia pendente"), pendentes.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    className: "pend-link",
    onClick: () => onOpenCulto(c.id)
  }, "Culto ", c.data, " \u2014 Conferir agora")))), can(role, "ver_auditoria") && /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    className: "full",
    onClick: () => onNavigate("auditoria")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield",
    size: 20
  }), " Ver Log de Auditoria"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-head-solo"
  }, "Arrecada\xE7\xE3o por Culto"), /*#__PURE__*/React.createElement("div", {
    className: "stack-sm"
  }, cultos.map(c => {
    const t = cultoTotais(c);
    const conf = c.conferencia;
    return /*#__PURE__*/React.createElement(Card, {
      key: c.id,
      className: "tap",
      onClick: () => onOpenCulto(c.id)
    }, /*#__PURE__*/React.createElement("div", {
      className: "row-between",
      style: {
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "b600 sm"
    }, c.tema), /*#__PURE__*/React.createElement("p", {
      className: "metric-sub xs"
    }, c.data)), conf ? /*#__PURE__*/React.createElement(Badge, {
      tone: conf.status === "CONFERIDO" ? "success" : "warning"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: conf.status === "CONFERIDO" ? "check-circle-2" : "alert-circle",
      size: 12
    }), conf.status === "CONFERIDO" ? "Conferido" : "Divergente") : /*#__PURE__*/React.createElement(Badge, {
      tone: "muted"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock-open",
      size: 12
    }), "Pendente")), /*#__PURE__*/React.createElement("div", {
      className: "rep-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "metric-sub xs"
    }, "D\xEDzimos ", /*#__PURE__*/React.createElement("b", {
      className: "val-money",
      style: {
        color: "var(--success)"
      }
    }, brl(t.dizimos))), /*#__PURE__*/React.createElement("span", {
      className: "metric-sub xs"
    }, "Ofertas ", /*#__PURE__*/React.createElement("b", {
      className: "val-money",
      style: {
        color: "var(--accent-foreground)"
      }
    }, brl(t.ofertas))), /*#__PURE__*/React.createElement("span", {
      className: "metric-sub xs"
    }, "Total ", /*#__PURE__*/React.createElement("b", {
      className: "val-money",
      style: {
        color: "var(--primary)"
      }
    }, brl(t.total)))));
  }))));
}

// ----------------------------------------------------------- AUDITORIA -----
function AuditoriaScreen({
  onBack
}) {
  const [q, setQ] = React.useState("");
  const [filter, setFilter] = React.useState("TODOS");
  const tipos = ["TODOS", "Culto", "Dizimo", "Oferta", "Conferencia", "Membro"];
  const list = AUDIT_LOGS.filter(l => {
    const okQ = !q || l.descricao.toLowerCase().includes(q.toLowerCase()) || l.usuario.toLowerCase().includes(q.toLowerCase());
    const okF = filter === "TODOS" || l.entidadeTipo === filter;
    return okQ && okF;
  });
  const ACAO_COLOR = {
    INSERT: "var(--success)",
    UPDATE: "var(--warning)",
    DELETE: "var(--destructive)"
  };
  const ACAO_ICON = {
    INSERT: "plus-circle",
    UPDATE: "pencil",
    DELETE: "trash-2"
  };
  const TIPO_COLOR = {
    Culto: "var(--primary)",
    Dizimo: "var(--success)",
    Oferta: "var(--accent-foreground)",
    Conferencia: "var(--warning)",
    Membro: "var(--muted-foreground)"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, /*#__PURE__*/React.createElement("header", {
    className: "hdr-primary flat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-l",
    style: {
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "hdr-back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "hdr-name",
    style: {
      fontSize: 20
    }
  }, "Auditoria"), /*#__PURE__*/React.createElement("p", {
    className: "hdr-greet"
  }, "Log de altera\xE7\xF5es do sistema"))), /*#__PURE__*/React.createElement("div", {
    className: "field-icon-l"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 20
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Buscar por descri\xE7\xE3o ou usu\xE1rio...",
    value: q,
    onChange: e => setQ(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pills",
    style: {
      padding: "12px 16px 0",
      overflowX: "auto"
    }
  }, tipos.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    className: "pill" + (filter === t ? " on" : ""),
    onClick: () => setFilter(t)
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px 80px"
    }
  }, list.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield",
    size: 48,
    style: {
      color: "var(--muted-foreground)"
    }
  }), /*#__PURE__*/React.createElement("p", null, "Nenhum registro encontrado")) : list.map(log => /*#__PURE__*/React.createElement("div", {
    key: log.id,
    className: "audit-entry"
  }, /*#__PURE__*/React.createElement("div", {
    className: "audit-timeline-line"
  }), /*#__PURE__*/React.createElement("div", {
    className: "audit-dot",
    style: {
      background: ACAO_COLOR[log.acao]
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ACAO_ICON[log.acao],
    size: 12,
    style: {
      color: "#fff"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "audit-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-between",
    style: {
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-l",
    style: {
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge badge-muted",
    style: {
      fontSize: 11,
      padding: "3px 8px",
      color: TIPO_COLOR[log.entidadeTipo]
    }
  }, log.entidadeTipo), /*#__PURE__*/React.createElement("span", {
    className: "badge",
    style: {
      fontSize: 11,
      padding: "3px 8px",
      background: "color-mix(in oklch," + ACAO_COLOR[log.acao] + " 12%,transparent)",
      color: ACAO_COLOR[log.acao]
    }
  }, log.acao)), /*#__PURE__*/React.createElement("span", {
    className: "metric-sub xs mono-meta"
  }, log.timestamp)), /*#__PURE__*/React.createElement("p", {
    className: "b500",
    style: {
      margin: "0 0 4px",
      fontSize: 14,
      lineHeight: 1.4
    }
  }, log.descricao), /*#__PURE__*/React.createElement("div", {
    className: "row-l",
    style: {
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "row-l metric-sub xs",
    style: {
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 12
  }), log.usuario), log.culto && /*#__PURE__*/React.createElement("span", {
    className: "row-l metric-sub xs",
    style: {
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "church",
    size: 12
  }), log.culto)))))));
}
Object.assign(window, {
  MembrosScreen,
  MembroDetalheScreen,
  FinanceiroScreen,
  RelatoriosScreen,
  AuditoriaScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/kit-screens-b.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/kit-ui.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
// =============================================================================
// Igreja Ipiranga — UI Kit primitives
// Faithful, mostly-cosmetic recreations of the shadcn/ui components the app uses,
// plus the custom PhoneFrame + BottomNavigation. Source: front-igreja repo.
// =============================================================================

// ---- Icon: wraps Lucide (the app's real icon set) -------------------------
function Icon({
  name,
  size = 24,
  className = "",
  style = {},
  strokeWidth = 2
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (host && window.lucide) {
      host.innerHTML = "";
      const i = document.createElement("i");
      i.setAttribute("data-lucide", name);
      host.appendChild(i);
      window.lucide.createIcons({
        nameAttr: "data-lucide",
        attrs: {
          "stroke-width": strokeWidth
        }
      });
    }
  }, [name, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: "ii " + className,
    style: {
      width: size,
      height: size,
      display: "inline-flex",
      flexShrink: 0,
      ...style
    }
  });
}

// ---- Button ---------------------------------------------------------------
function Button({
  variant = "default",
  size = "md",
  className = "",
  style = {},
  children,
  ...rest
}) {
  const base = "btn btn-" + variant + " btn-" + size + " " + className;
  return /*#__PURE__*/React.createElement("button", _extends({
    className: base,
    style: style
  }, rest), children);
}

// ---- Input ----------------------------------------------------------------
function Input({
  className = "",
  error = false,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    className: "inp " + (error ? "inp-err " : "") + className
  }, rest));
}

// ---- Badge ----------------------------------------------------------------
function Badge({
  tone = "muted",
  className = "",
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "badge badge-" + tone + " " + className
  }, children);
}

// ---- Card -----------------------------------------------------------------
function Card({
  className = "",
  style = {},
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "card " + className,
    style: style
  }, rest), children);
}

// ---- Currency helper ------------------------------------------------------
function brl(v) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(v);
}

// ---- PhoneFrame: iOS-style bezel, 375×812 ---------------------------------
function PhoneFrame({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "phone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phone-notch"
  }), /*#__PURE__*/React.createElement("div", {
    className: "phone-status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "phone-time"
  }, "9:41"), /*#__PURE__*/React.createElement("span", {
    className: "phone-status-icons"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "signal",
    size: 15
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "wifi",
    size: 15
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "battery-full",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "phone-screen"
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "phone-home"
  }));
}

// ---- BottomNavigation -----------------------------------------------------
const NAV_TABS = [{
  id: "home",
  label: "Início",
  icon: "home"
}, {
  id: "cultos",
  label: "Cultos",
  icon: "church"
}, {
  id: "membros",
  label: "Membros",
  icon: "users"
}, {
  id: "financeiro",
  label: "Financeiro",
  icon: "wallet"
}, {
  id: "relatorios",
  label: "Relatórios",
  icon: "bar-chart-2"
}];
function BottomNavigation({
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "bottomnav"
  }, NAV_TABS.map(t => {
    const on = active === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      className: "navitem" + (on ? " on" : ""),
      onClick: () => onChange(t.id)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: t.icon,
      size: 24
    }), /*#__PURE__*/React.createElement("span", null, t.label));
  }));
}

// ---- Toast (typed, with icon) ---------------------------------------------
function Toast({
  toast
}) {
  if (!toast) return null;
  const map = {
    success: {
      icon: "check-circle-2",
      color: "var(--success)"
    },
    warning: {
      icon: "alert-circle",
      color: "var(--warning)"
    },
    error: {
      icon: "x-circle",
      color: "var(--destructive)"
    }
  };
  const m = map[toast.type] || map.success;
  return /*#__PURE__*/React.createElement("div", {
    className: "toast toast-" + (toast.type || "success")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: m.icon,
    size: 18,
    style: {
      color: m.color
    }
  }), /*#__PURE__*/React.createElement("span", null, toast.message));
}

// ---- Sheet: fullscreen or bottom-sheet overlay ----------------------------
function Sheet({
  variant = "full",
  onClose,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sheet-backdrop",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet sheet-" + variant,
    onClick: e => e.stopPropagation()
  }, children));
}

// ---- Skeleton loading block ----------------------------------------------
function Skeleton({
  h = 16,
  w = "100%",
  r = 8,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "skeleton",
    style: {
      height: h,
      width: w,
      borderRadius: r,
      ...style
    }
  });
}

// ---- Conferred-culto banner — only locks FINANCIAL section ---------------
function LockedBanner({
  data,
  conferenteNome,
  canReabrir,
  onReabrir
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "locked-banner"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 20,
    style: {
      color: "var(--warning)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "b600",
    style: {
      color: "var(--warning)",
      margin: 0
    }
  }, "Caixa conferido em ", data), /*#__PURE__*/React.createElement("p", {
    className: "metric-sub",
    style: {
      margin: 0
    }
  }, "Edi\xE7\xF5es financeiras bloqueadas", conferenteNome ? ` · conf. ${conferenteNome}` : "", ". Louvores e pessoas seguem edit\xE1veis.")), canReabrir && /*#__PURE__*/React.createElement("button", {
    className: "reabrir-link",
    onClick: onReabrir
  }, "Reabrir"));
}

// ---- RoleBar: "ver como" selector (outside the phone) ----------------------
function RoleBar({
  role,
  onChange
}) {
  const roles = ["MEMBRO", "COOPERADOR", "TESOUREIRO", "ADMIN"];
  return /*#__PURE__*/React.createElement("div", {
    className: "rolebar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rolebar-lbl"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eye",
    size: 14
  }), " Ver como"), /*#__PURE__*/React.createElement("div", {
    className: "rolebar-opts"
  }, roles.map(r => /*#__PURE__*/React.createElement("button", {
    key: r,
    className: "rolebar-opt" + (role === r ? " on" : ""),
    onClick: () => onChange(r)
  }, ROLE_LABEL[r]))));
}
Object.assign(window, {
  Icon,
  Button,
  Input,
  Badge,
  Card,
  brl,
  PhoneFrame,
  BottomNavigation,
  Toast,
  Sheet,
  Skeleton,
  LockedBanner,
  RoleBar,
  NAV_TABS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/kit-ui.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BottomNavigation = __ds_scope.BottomNavigation;

__ds_ns.PhoneFrame = __ds_scope.PhoneFrame;

__ds_ns.ConferenciaScreen = __ds_scope.ConferenciaScreen;

__ds_ns.CultoDetalheScreen = __ds_scope.CultoDetalheScreen;

__ds_ns.CultosScreen = __ds_scope.CultosScreen;

__ds_ns.DashboardScreen = __ds_scope.DashboardScreen;

__ds_ns.FinanceiroScreen = __ds_scope.FinanceiroScreen;

__ds_ns.LoginScreen = __ds_scope.LoginScreen;

__ds_ns.MembroDetalheScreen = __ds_scope.MembroDetalheScreen;

__ds_ns.MembrosScreen = __ds_scope.MembrosScreen;

})();
