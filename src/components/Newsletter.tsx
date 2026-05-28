import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const countries = [
  "Brasil",
  "Portugal",
  "Angola",
  "Moçambique",
  "Cabo Verde",
  "Estados Unidos",
  "Espanha",
  "França",
  "Alemanha",
  "Reino Unido",
  "Outro",
];

const Newsletter = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, insira seu email.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.consent) {
      toast({
        title: "Consentimento necessário",
        description: "Por favor, aceite os termos para continuar.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Inscrição realizada!",
      description: "Obrigado por se inscrever na nossa newsletter.",
    });

    setFormData({ name: "", email: "", country: "", consent: false });
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 md:py-24 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <Mail className="h-12 w-12 mx-auto mb-6 text-gold" />
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4 text-gold">
            Inscreva-se no Site Franklin Rafael Oficial
          </h2>
          <p className="font-body text-background/80 mb-8">
            Receba atualizações exclusivas, lançamentos e conteúdo especial
            diretamente na sua caixa de entrada.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <Label htmlFor="name" className="font-body text-sm text-background/80">
                Nome
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="bg-background/10 border-gold/40 text-background placeholder:text-background/50 focus:border-gold"
              />
            </div>

            <div>
              <Label htmlFor="email" className="font-body text-sm text-background/80">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-background/10 border-gold/40 text-background placeholder:text-background/50 focus:border-gold"
              />
            </div>

            <div>
              <Label htmlFor="country" className="font-body text-sm text-background/80">
                País
              </Label>
              <Select
                value={formData.country}
                onValueChange={(value) =>
                  setFormData({ ...formData, country: value })
                }
              >
                <SelectTrigger className="bg-background/10 border-gold/40 text-background">
                  <SelectValue placeholder="Selecione um país..." />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, consent: checked as boolean })
                }
                className="border-gold/60 data-[state=checked]:bg-gold data-[state=checked]:text-foreground"
              />
              <Label
                htmlFor="consent"
                className="font-body text-sm text-background/80 leading-relaxed cursor-pointer"
              >
                Concordo em receber emails de marketing e novidades. Posso
                cancelar a inscrição a qualquer momento.
              </Label>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold text-foreground hover:bg-gold/90 font-body tracking-wider mt-6"
            >
              {isSubmitting ? "Enviando..." : "Cadastrar"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
