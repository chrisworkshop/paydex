import { Link } from "react-router-dom";
import { Receipt, BarChart3, Users, ArrowRight, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Layout from "@/components/Layout";

const features = [
  {
    icon: Receipt,
    title: "Gestione Scontrini",
    description: "Inserisci, modifica e consulta gli scontrini in modo rapido tramite conversazione Telegram.",
  },
  {
    icon: BarChart3,
    title: "Statistiche Dettagliate",
    description: "Visualizza report con totali, medie e grafici suddivisi per periodo e dipendente.",
  },
  {
    icon: Users,
    title: "Gestione Dipendenti",
    description: "L'admin può aggiungere e rimuovere dipendenti, controllando chi ha accesso al sistema.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            🤖 <span className="text-primary">PayDex</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Bot Telegram per la Gestione degli Scontrini — registra, cerca e analizza gli scontrini direttamente da Telegram.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/funzionalita">
              <Button size="lg">
                Scopri le funzionalità <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/progetto">
              <Button variant="secondary" size="lg">
                Il progetto
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="container mx-auto px-4 mb-12">
        <Alert className="max-w-3xl mx-auto border-primary/30 bg-primary/5">
          <AlertTriangle className="h-4 w-4 text-primary" />
          <AlertDescription className="text-muted-foreground">
            <strong className="text-foreground">Avviso:</strong> Questo progetto è realizzato a scopo didattico e di roleplay. Non gestisce dati finanziari reali né sostituisce strumenti professionali di contabilità.
          </AlertDescription>
        </Alert>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 pb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Funzionalità Principali
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f) => (
            <Card key={f.title} className="bg-card hover:border-primary/40 transition-colors">
              <CardContent className="pt-6 text-center">
                <f.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
