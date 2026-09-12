import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { searchSite, type SearchEntry } from "@/lib/search";

type SearchDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const results = useMemo(() => searchSite(query), [query]);

  const go = (entry: SearchEntry) => {
    onOpenChange(false);
    if (entry.path.startsWith("http")) {
      window.open(entry.path, "_blank", "noopener,noreferrer");
      return;
    }
    if (entry.path.startsWith("/#")) {
      navigate("/");
      setTimeout(() => {
        document
          .querySelector(entry.path.slice(1))
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return;
    }
    navigate(entry.path);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-heading text-lg normal-case">
            Buscar no site
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (results[0]) go(results[0]);
          }}
          className="relative"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Livro, autor, biografia, citações, notícias..."
            className="pl-9 font-body"
            aria-label="Termo de busca"
          />
        </form>

        <div className="max-h-80 overflow-y-auto -mx-2 px-2">
          {query && results.length === 0 && (
            <p className="font-body text-sm text-muted-foreground py-6 text-center">
              Nenhum resultado encontrado para “{query}”.
            </p>
          )}

          {results.map((entry) => (
            <button
              key={`${entry.group}-${entry.path}-${entry.title}`}
              type="button"
              onClick={() => go(entry)}
              className="w-full text-left py-3 px-2 rounded-md hover:bg-accent/60 transition-colors border-b border-border last:border-b-0"
            >
              <span className="block font-heading text-base text-foreground normal-case">
                {entry.title}
              </span>
              {entry.subtitle && (
                <span className="block font-body text-xs text-muted-foreground line-clamp-1">
                  {entry.subtitle}
                </span>
              )}
              <span className="block font-body text-[10px] uppercase tracking-widest text-gold mt-1">
                {entry.group}
              </span>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
