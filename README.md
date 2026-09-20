# Creator's Hub

Crie um site, baseando nessas informações: 
Estrutura e Esqueleto (Layout):

1.
Design Responsivo: O layout deve ser totalmente responsivo (Mobile-First) e otimizado para visualização em todos os dispositivos (desktop, tablet, mobile).

2.
Cabeçalho (Header):

•
Fixo/Sticky: Deve permanecer visível no topo da página ao rolar.

•
Conteúdo:

•
Logo: Um espaço reservado para um logo de texto estilizado ([NOME DO CRIADOR]).

•
Navegação Principal: Uma lista de links de navegação essenciais: [TRABALHOS], [PRÓXIMOS LANÇAMENTOS], [O AUTOR/CRIADOR], [NOTÍCIAS], [FAQ], [SÉRIE/PROJETO ESPECIAL].

•
Menu Mobile: Implementar um menu hamburger para navegação em telas menores.





3.
Seção Principal (Main Content):

•
Seção 1: Destaque/Hero (Carrossel):

•
Tipo: Carrossel de largura total (full-width) com altura significativa (aproximadamente 60-70vh).

•
Conteúdo: Banners promocionais de alto impacto visual.

•
Funcionalidade: Deve incluir setas de navegação (‹ e ›) e indicadores de posição (pontos na parte inferior). O carrossel deve ser autoplay com opção de pausa ao hover.



•
Seção 2: Lançamentos Recentes:

•
Título: [LANÇAMENTOS RECENTES].

•
Layout: Blocos de conteúdo em um layout de duas colunas (em desktop) ou empilhados (em mobile).

•
Conteúdo do Bloco: Imagem de capa/promoção à esquerda e detalhes do item à direita (Título, Data, Descrição, Botões de Ação: [ASSISTIR TRAILER], [MAIS INFORMAÇÕES], [COMPRAR AGORA]).



•
Seção 3: Próximos Lançamentos:

•
Título: [PRÓXIMOS LANÇAMENTOS].

•
Conteúdo: Um bloco simples para listar futuros trabalhos ou exibir uma mensagem de "Verifique novamente mais tarde".



•
Seção 4: Notícias e Blog:

•
Título: [ÚLTIMAS NOTÍCIAS].

•
Layout: Uma lista de blocos de notícias, exibindo Título, Data de Postagem e um link [LER MAIS].



•
Seção 5: Inscrição na Newsletter:

•
Título: [INSCREVA-SE NA NEWSLETTER].

•
Conteúdo: Um formulário de inscrição com os seguintes campos:

•
Nome (input type="text")

•
Email (input type="email")

•
País (select dropdown com opção "Selecione um..." e uma lista de países).

•
Checkbox de consentimento de marketing.

•
Botão de envio ([CADASTRAR]).







4.
Rodapé (Footer):

•
Links: Links de navegação secundária agrupados (e.g., [O AUTOR], [NOTÍCIAS], [FAQ], [CONTATO], [POLÍTICA DE PRIVACIDADE]).

•
Direitos Autorais: Informação de copyright genérica (© [ANO ATUAL] [NOME DO CRIADOR]. Todos os direitos reservados.).



Estilo e Design (CSS):

1.
Paleta de Cores:

•
Fundo Principal: Branco ou Off-White.

•
Texto Principal: Preto ou Cinza Escuro.

•
Cor de Destaque (Accent Color): Um tom de Vermelho Escuro/Borgonha (#8B0000 ou similar) para botões, links hover e títulos de seção.

•
Cor Secundária: Um tom de Verde Escuro para o logo e pequenos detalhes.



2.
Tipografia:

•
Títulos (H1, H2): Fonte Serifada elegante (e.g., Playfair Display ou similar do Google Fonts) para um toque literário.

•
Corpo do Texto: Fonte Sans-Serif limpa e legível (e.g., Roboto, Open Sans ou similar do Google Fonts).



3.
Estilo dos Componentes:

•
Botões: Estilo flat ou ghost com a Cor de Destaque.

•
Imagens: Devem ser otimizadas e ter um aspect ratio consistente dentro dos blocos de conteúdo.



Funcionalidades (JavaScript):

1.
Carrossel: Lógica para navegação, autoplay e responsividade.

2.
Menu Mobile: Lógica para abrir/fechar o menu hamburger.

3.
Formulário: Validação básica de campos (email obrigatório).

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://digital-canvas-hub-38.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/396b6d57-77ed-465a-9fcb-2b2e2b5f206d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
