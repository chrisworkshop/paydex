import { ShieldCheck, User, Code2, Database, Bot } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const Progetto = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Il Progetto PayDex</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            PayDex è un bot Telegram progettato per semplificare la gestione degli scontrini in un contesto aziendale simulato. I dipendenti possono registrare scontrini, consultare lo storico e visualizzare statistiche, mentre l'amministratore ha il controllo completo.
          </p>

          {/* Ruoli */}
          <h2 className="text-2xl font-bold mb-6">Ruoli</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" /> Admin
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="space-y-1 list-disc list-inside">
                  <li>Gestione completa dei dipendenti</li>
                  <li>Accesso a tutte le statistiche</li>
                  <li>Ricerca ed eliminazione scontrini</li>
                  <li>Primo admin configurato tramite file</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" /> Dipendente
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="space-y-1 list-disc list-inside">
                  <li>Inserimento nuovi scontrini</li>
                  <li>Consultazione dei propri scontrini</li>
                  <li>Visualizzazione statistiche personali</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Tecnologie */}
          <h2 className="text-2xl font-bold mb-6">Tecnologie</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              { icon: Code2, title: "Python", desc: "Linguaggio principale del bot" },
              { icon: Bot, title: "python-telegram-bot", desc: "Libreria per l'API Telegram" },
              { icon: Database, title: "Firestore (NoSQL)", desc: "Database cloud Google per i dati" },
            ].map((t) => (
              <Card key={t.title} className="text-center">
                <CardContent className="pt-6">
                  <t.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">{t.title}</h3>
                  <p className="text-xs text-muted-foreground">{t.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Screenshot placeholder */}
          <h2 className="text-2xl font-bold mb-6">Screenshot</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <ImagePlaceholder alt="Screenshot del messaggio di help del bot" className="h-48" />
            <ImagePlaceholder alt="Screenshot dell'inserimento scontrino" className="h-48" />
            <ImagePlaceholder alt="Screenshot della lista scontrini" className="h-48" />
            <ImagePlaceholder alt="Screenshot delle statistiche" className="h-48" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Progetto;
