import { Bot } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-card py-8">
    <div className="container mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-2 text-primary mb-2">
        <Bot className="h-5 w-5" />
        <span className="font-semibold">PayDex</span>
      </div>
      <p className="text-sm text-muted-foreground">
        Bot Telegram per la Gestione degli Scontrini — Progetto didattico / roleplay
      </p>
      <p className="text-xs text-muted-foreground mt-2">
        © {new Date().getFullYear()} PayDex. Tutti i diritti riservati.
      </p>
    </div>
  </footer>
);

export default Footer;
