import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { searchSite, type SearchEntry } from "@/lib/search";

type SearchDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) {
      setQuery("");
      return;
    }
    window.requestAnimationFrame(() => inputRef.current?.focus());
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

  if (!open) return null;

  return (
    <div className="absolute left-0 right-0 top-full border-b border-border bg-background shadow-lg animate-slide-in-right">
      <div className="container mx-auto px-4 py-3">
        <div className="mx-auto max-w-3xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (results[0]) go(results[0]);
          }}
          className="relative flex items-center gap-2"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Pesquisar"
              className="h-11 pl-10 pr-3 font-body"
              aria-label="Termo de busca"
            />
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            aria-label="Fechar pesquisa"
            className="h-11 w-11 flex-shrink-0"
          >
            <X className="!h-6 !w-6" />
          </Button>
        </form>

        <div className="max-h-[min(22rem,55vh)] overflow-y-auto">
          {query && results.length === 0 && (
            <p className="font-body text-sm text-muted-foreground py-6 text-center">
              Nenhum resultado encontrado para “{query}”.
            </p>
          )}

          {results.map((entry) => (
            <Button
              key={`${entry.group}-${entry.path}-${entry.title}`}
              type="button"
              variant="ghost"
              onClick={() => go(entry)}
              className="h-auto w-full justify-start whitespace-normal rounded-none border-b border-border px-2 py-3 text-left last:border-b-0"
            >
              <span className="block min-w-0">
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
              </span>
            </Button>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDialog;
