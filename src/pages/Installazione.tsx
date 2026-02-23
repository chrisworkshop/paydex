import { Terminal, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const steps = [
  {
    title: "1. Requisiti",
    items: [
      "Python 3.8 o superiore",
      "Libreria python-telegram-bot (pip install python-telegram-bot)",
      "Account Google Cloud con Firestore abilitato",
      "Token del bot Telegram (ottenuto da @BotFather)",
    ],
  },
  {
    title: "2. Configurazione",
    items: [
      "Clona il repository del progetto",
      "Crea un file .env con il token del bot: BOT_TOKEN=il_tuo_token",
      "Configura le credenziali Firebase/Firestore (file JSON di servizio)",
      "Imposta l'ID Telegram del primo admin nel file di configurazione (config.py o admins.json)",
    ],
  },
  {
    title: "3. Avvio del Bot",
    items: [
      "Installa le dipendenze: pip install -r requirements.txt",
      "Avvia il bot: python main.py",
      "Il bot sarà attivo e in ascolto su Telegram",
    ],
  },
  {
    title: "4. Primo Accesso",
    items: [
      "L'admin predefinito può usare /start per verificare il funzionamento",
      "Aggiungere dipendenti con /dipendenti_add",
      "I dipendenti possono iniziare a registrare scontrini con /scontrino",
    ],
  },
];

const Installazione = () => (
  <Layout>
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Installazione</h1>
        <p className="text-muted-foreground text-center mb-12">
          Segui questi passi per configurare e avviare il bot PayDex sul tuo server.
        </p>

        <div className="space-y-6">
          {steps.map((step) => (
            <Card key={step.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Terminal className="h-5 w-5 text-primary" />
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Code example */}
        <Card className="mt-8 bg-secondary/50">
          <CardContent className="pt-6">
            <p className="text-sm font-semibold mb-2">Esempio rapido:</p>
            <pre className="text-xs text-muted-foreground overflow-x-auto bg-background rounded-md p-4">
{`# Clona il progetto
git clone https://github.com/tuo-utente/paydex-bot.git
cd paydex-bot

# Installa le dipendenze
pip install -r requirements.txt

# Configura il token
echo "BOT_TOKEN=123456:ABC-DEF..." > .env

# Avvia
python main.py`}
            </pre>
          </CardContent>
        </Card>
      </div>
    </section>
  </Layout>
);

export default Installazione;
