import { Play, HelpCircle, XCircle, Receipt, List, BarChart3, UserPlus, UserMinus, Trash2, Search, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

interface CommandCardProps {
  icon: React.ElementType;
  command: string;
  description: string;
  role: "tutti" | "dipendente" | "admin";
}

const CommandCard = ({ icon: Icon, command, description, role }: CommandCardProps) => (
  <Card className="hover:border-primary/40 transition-colors">
    <CardHeader className="pb-2">
      <CardTitle className="flex items-center justify-between text-base">
        <span className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-primary" />
          <code className="text-primary">{command}</code>
        </span>
        <Badge variant={role === "admin" ? "destructive" : role === "dipendente" ? "secondary" : "outline"} className="text-xs">
          {role}
        </Badge>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const commands: CommandCardProps[] = [
  { icon: Play, command: "/start", description: "Avvia il bot e mostra il messaggio di benvenuto. Se l'utente non è registrato, viene informato.", role: "tutti" },
  { icon: HelpCircle, command: "/help", description: "Mostra l'elenco dei comandi disponibili in base al ruolo dell'utente.", role: "tutti" },
  { icon: XCircle, command: "/annulla", description: "Annulla l'operazione corrente e ritorna allo stato iniziale.", role: "tutti" },
  { icon: Receipt, command: "/scontrino", description: "Avvia la procedura guidata per inserire un nuovo scontrino: data, importo, descrizione e foto opzionale.", role: "dipendente" },
  { icon: List, command: "/lista", description: "Mostra la lista degli scontrini inseriti dall'utente, con possibilità di filtrare per periodo.", role: "dipendente" },
  { icon: BarChart3, command: "/statistiche", description: "Per i dipendenti: statistiche personali. Per l'admin: statistiche globali con filtri per dipendente e periodo.", role: "dipendente" },
  { icon: UserPlus, command: "/dipendenti_add", description: "Permette all'admin di aggiungere un nuovo dipendente al sistema tramite il suo ID Telegram.", role: "admin" },
  { icon: UserMinus, command: "/dipendenti_remove", description: "Permette all'admin di rimuovere un dipendente dal sistema.", role: "admin" },
  { icon: Trash2, command: "/elimina_scontrino", description: "L'admin può eliminare uno scontrino specifico di qualsiasi dipendente.", role: "admin" },
  { icon: Search, command: "/cerca", description: "Ricerca avanzata degli scontrini per data, importo o descrizione su tutti i dipendenti.", role: "admin" },
  { icon: Shield, command: "/statistiche (admin)", description: "Accesso alle statistiche globali: totali, medie, top dipendenti e grafici per periodo.", role: "admin" },
];

const Funzionalita = () => {
  const generali = commands.filter((c) => c.role === "tutti");
  const dipendenti = commands.filter((c) => c.role === "dipendente");
  const admin = commands.filter((c) => c.role === "admin");

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Funzionalità</h1>
          <p className="text-muted-foreground text-center mb-12">
            Tutti i comandi disponibili nel bot PayDex, organizzati per ruolo.
          </p>

          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Play className="h-5 w-5 text-primary" /> Comandi Generali
          </h2>
          <div className="grid gap-4 mb-10">
            {generali.map((c) => <CommandCard key={c.command} {...c} />)}
          </div>

          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Receipt className="h-5 w-5 text-primary" /> Comandi Dipendenti
          </h2>
          <div className="grid gap-4 mb-10">
            {dipendenti.map((c) => <CommandCard key={c.command} {...c} />)}
          </div>

          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" /> Comandi Admin
          </h2>
          <div className="grid gap-4">
            {admin.map((c) => <CommandCard key={c.command} {...c} />)}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Funzionalita;
