import { Heart, Send, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">About & Contatti</h1>
        <p className="text-muted-foreground text-center mb-12">
          Informazioni sul progetto e come contattarci.
        </p>

        {/* Ringraziamenti */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold">Ringraziamenti</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              PayDex è nato come progetto didattico per esplorare le potenzialità dei bot Telegram 
              integrati con database NoSQL cloud. Ringraziamo la community open source di 
              python-telegram-bot e Google Cloud per gli strumenti messi a disposizione. 
              Un ringraziamento speciale a tutti coloro che hanno contribuito con feedback e suggerimenti 
              durante lo sviluppo del progetto.
            </p>
          </CardContent>
        </Card>

        {/* Contatti */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <Send className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold">Contatti</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Per domande, suggerimenti o segnalazioni, contattaci tramite il bot Telegram dedicato:
            </p>
            <a href="https://t.me/chrisworkshop_bot" target="_blank" rel="noopener noreferrer">
              <Button>
                <Send className="mr-2 h-4 w-4" /> @chrisworkshop_bot
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Alert className="border-primary/30 bg-primary/5">
          <AlertTriangle className="h-4 w-4 text-primary" />
          <AlertDescription className="text-muted-foreground">
            <strong className="text-foreground">Disclaimer:</strong> PayDex è un progetto realizzato esclusivamente a scopo didattico e di roleplay. Non gestisce dati finanziari reali e non deve essere utilizzato come sostituto di strumenti professionali di contabilità o gestione fiscale.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  </Layout>
);

export default About;
