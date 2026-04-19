import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BiographicalTimeline from "@/components/BiographicalTimeline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const quotes = [
  "A Igreja é uma bela adormecida. Só o beijo do Príncipe Jesus pode despertá-la.",
  "O Diário de Anne Frank, de algum modo, sussurra à igreja: um Hitler pior virá.",
  "A consciência instruída na Bíblia, será teu guarda vigilante, principalmente quando a ameaça for você mesmo.",
  "Prefiro as exortações constantes da casa de Deus Pai, do que os doces dos orfanatos evangélicos.",
  "Se o Messias, mesmo vindo de uma manjedoura, teve que ir à cruz para salvar, assim também os filhos de berço evangélico precisam ir à sua cruz para serem salvos.",
  "O cristão que peca escondido passeia à beira do inferno — o momento em que os demônios mais torcem em silêncio pela sua queda.",
  "O papado ainda é a velha Fábrica do Diabo, e o papa, seu empresário. Nosso problema atual é que muitos dos seus mercadores se disfarçaram de evangélicos.",
  "Muitas ovelhas são tão ingênuas quanto a Chapeuzinho Vermelho: Só acreditam que alguém é um lobo depois que ele ataca.",
  "Dois homens e suas lâmpadas. Por que aquele chega ao céu e esse não? Porque aquele é o Peregrino de Bunyan, e esse é o Aladim dos evangélicos.",
  "Para o cristão, sua morte será lucro, afinal seu viver já é Cristo. Para o ímpio, sua morte será um prejuízo, afinal viver para si mesmo já é um desperdício.",
  "Deus fez o inferno um lugar tardio para se arrepender, porque não se pode deixar o arrependimento para mais tarde.",
  "É lamentável que, na era da informação, a desinformação do verdadeiro Evangelho seja o perfil dessa era.",
  "Não se engane! Nossos jovens brigam para extravasar em uma versão evangélica, porque perdem diariamente a luta de serem felizes em Deus.",
  "Bendito seja o pastor que não viveria sem cuidar de um rebanho. E bendita seja a ovelha que não viveria sem os cuidados de um pastor.",
  "Depois de tudo o que já vi, se o diabo adornasse o inferno e colocasse na entrada uma placa, dizendo: Céu Gospel, muitos desses que se acham evangélicos brigariam por uma vaga lá.",
  "Vi a igreja ler A Cinderela, e esta lhe disse: Não se perturbe! Ainda que muitas se passem por ti, em meio a toda essa confusão, só em teu pé caberá o sapato do Evangelho, e o teu Príncipe, Jesus, saberá que tu és a noiva.",
  "Nos dias atuais, é mais fácil encontrar um jovem que se acha no direito de ser visto como evangélico, do que um jovem procurando ser um evangélico direito, pouco se importando em ser visto.",
  "Um suposto profeta ordena que fechemos os olhos para o mover de Deus. Engraçado, a igreja e os profetas da Bíblia foram movidos, mas de olhos abertos.",
  "Senhores, se somos os homens da Palavra, temos o dever, no mínimo, de sermos os melhores com as palavras.",
  "Um pregador hipócrita também é útil na mão de Deus, como uma caneta que serve para o juiz escrever a própria sentença dela ao inferno.",
  "Sinta vergonha por ter perdido sermões que poderias ter ouvido. Mas, estremeça quando, no julgamento, Deus lhe mostrar o cristão que poderias ter sido, caso os tivesse ouvido.",
  "Ao levantar da cama pela manhã, lembra-te do dia em que foste levantado das águas do teu batismo.",
  "Um cristão que peca escondido, revela ser uma espécie de ateu ao Deus que o vê em secreto.",
  "Todo cristão, ao seu modo, chora pelo choro do arrependimento.",
  "Esqueceste o pé da cama, onde Deus te fez viver. Retorne e ore, até respirar novamente por ele!",
  "Em meio à burrice do dialeto não-binário, temos o dever de sermos puros com uma Bíblia na mão, e puristas com um Dicionário na outra.",
  "Conheço evangélicas que orariam: Maranata, mas só depois que eu casar e construir uma vida!, e um Esposo que responderia: Faz sentido orarem assim, não é com vocês que tenho um casamento marcado!",
  "O marxista é um preguiçoso obstinado, que ao saber do juízo de Deus no Éden: '…no suor do teu rosto comerás…', arquiteta sua política e diz: Não, do suor dos outros eu comerei.",
  "Proferir indiretas do púlpito é como martelar uma madeira com pregos tortos. Será inútil. Seja homem e pregue diretamente!",
  "No fim de tudo, só o martelo de Deus importará. Por isso, diante de qualquer autoridade, eleve a Sua Bíblia como a autoridade maior.",
  "Os que amam dizer 'não estude tanto a Bíblia, pois a letra mata', são exatamente aqueles que estão mortos de burrice.",
  "Virou moda pregar: 'Não é errado ser próspero, sou filho do dono do ouro e da prata'. Mas nunca vi esses infelizes dizerem: 'Não é errado que eu sofra, sou filho do dono da cruz e dos pregos'.",
  "Por que sou a favor do porte de armas? Simples: Porque o Estado sempre odiará o homem de bom porte.",
  "Um ser humano em paz com o seu próprio pecado, é um sonâmbulo indo para o inferno – o lugar dos que acordam tarde demais.",
  "Os ridículos que correm, pulam, rodopiam e caem na igreja, odeiam a teologia, não porque eles são do fogo, mas porque ela lhes dirá que isso é caso de hospício.",
  "Se minhas palavras são pesadas? Claro que são! Ninguém fica forte sem lidar com peso, inclusive o do vernáculo.",
  "Fui pescar os perdidos com os irmãos evangélicos. Tive que voltar com a rede cheia de evangélicos.",
  "O pastor que censura a pregação, proibindo o pregoeiro de pregar algum assunto da Bíblia, faz isso inspirado, não por Deus, mas pelo diabo.",
  "Você pode ver a pobreza intelectual de uma cidade, quando na porta da Secretaria de Educação, os professores são feitos de mendigos.",
  "As lágrimas que caem no inferno, são aquelas que não caíram arrependidas no quarto de oração.",
];

const SobreFranklinRafael = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" />

      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2 text-center">
              O Autor
            </h1>
            <p className="font-body text-muted-foreground text-center mb-10">
              Conheça Franklin Rafael
            </p>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {/* Biografia */}
              <AccordionItem
                value="biografia"
                className="border border-border rounded-sm bg-card px-6"
              >
                <AccordionTrigger className="font-heading text-xl md:text-2xl text-foreground hover:no-underline">
                  Biografia
                </AccordionTrigger>
                <AccordionContent>
                  <Accordion type="single" collapsible className="w-full space-y-3 mt-2">
                    <AccordionItem
                      value="franklin-rafael"
                      className="border border-border rounded-sm bg-secondary px-4"
                    >
                      <AccordionTrigger className="font-heading text-base md:text-lg text-foreground hover:no-underline">
                        Franklin Rafael
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="font-body text-muted-foreground leading-relaxed">
                          🏹 Franklin Rafael é um teólogo reformado e um exímio escritor de obras
                          cristãs e alta fantasia, um gênero definido pela criação de mundos
                          imaginários e histórias épicas, permeadas de personagens, filosofias
                          próprias e heróis notáveis. Também é conhecido como um pregoeiro batista
                          descendente da Reforma Protestante, de estilo veemente e ancestral, além
                          de um professor relevante em sua época.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="religiao"
                      className="border border-border rounded-sm bg-secondary px-4"
                    >
                      <AccordionTrigger className="font-heading text-base md:text-lg text-foreground hover:no-underline">
                        ⛪ Religião e Influências
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                          <p>
                            ◾ Franklin Rafael é um cristão batista de tradição protestante,
                            influenciado pelos grandes reformadores, os piedosos puritanos e os
                            grandes avivalistas, tanto em seu estilo bélico quanto em seu jeito
                            pregacional.
                          </p>
                          <p>
                            ◾ Como Teólogo, se identifica como um arminiano-wesleyano, lapidado
                            pela cosmovisão de Jacob Armínio e a teologia de John Wesley. De um
                            modo peculiar, ele elaborou o seu próprio acróstico{" "}
                            <strong className="text-gold">SWORD</strong>, que significa espada,
                            para descrever sua própria posição teológica.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="cidadania"
                      className="border border-border rounded-sm bg-secondary px-4"
                    >
                      <AccordionTrigger className="font-heading text-base md:text-lg text-foreground hover:no-underline">
                        🗽 Cidadania e Política
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                          <p>
                            ◾ Em termos de cidadania e política, ele adota o conservadorismo
                            histórico, cuja mentalidade se remete ao legado de homens como Edmund
                            Burke, Russell Kirk, Roger Scruton e tantos outros intelectuais,
                            filósofos e literatos no percurso da história.
                          </p>
                          <p>
                            ◾ No ano de 2020, fundou no YouTube o canal{" "}
                            <strong className="text-gold">Reformado Franklin Rafael</strong>, uma
                            plataforma feita para todos aqueles que desejam conhecer sua
                            personalidade, seu pensamento e as suas obras.
                          </p>
                          <p>
                            ◾ Também é o fundador da{" "}
                            <strong className="text-gold">Livraria FrankBooks</strong>, uma
                            plataforma online que consiste na divulgação de toda a sua obra
                            literária e na venda de todos os seus livros.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AccordionContent>
              </AccordionItem>

              {/* Citações */}
              <AccordionItem
                value="citacoes"
                className="border border-border rounded-sm bg-card px-6"
              >
                <AccordionTrigger className="font-heading text-xl md:text-2xl text-foreground hover:no-underline">
                  Citações
                </AccordionTrigger>
                <AccordionContent>
                  <Accordion type="single" collapsible className="w-full mt-2">
                    <AccordionItem
                      value="citacoes-fr"
                      className="border border-border rounded-sm bg-secondary px-4"
                    >
                      <AccordionTrigger className="font-heading text-base md:text-lg text-foreground hover:no-underline">
                        Citações de Franklin Rafael
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-6 mt-2">
                          {quotes.map((quote, idx) => (
                            <blockquote
                              key={idx}
                              className="border-l-4 border-gold pl-4 py-2 bg-card/50 rounded-sm"
                            >
                              <p className="font-body text-foreground italic leading-relaxed mb-2">
                                "{quote}"
                              </p>
                              <footer className="font-body text-sm text-muted-foreground">
                                — Franklin Rafael
                              </footer>
                            </blockquote>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AccordionContent>
              </AccordionItem>

              {/* Linha do Tempo */}
              <AccordionItem
                value="linha-tempo"
                className="border border-border rounded-sm bg-card px-6"
              >
                <AccordionTrigger className="font-heading text-xl md:text-2xl text-foreground hover:no-underline">
                  Linha do Tempo Biográfica
                </AccordionTrigger>
                <AccordionContent>
                  <Accordion type="single" collapsible className="w-full mt-2">
                    <AccordionItem
                      value="linha-tempo-conteudo"
                      className="border border-border rounded-sm bg-secondary px-4"
                    >
                      <AccordionTrigger className="font-heading text-base md:text-lg text-foreground hover:no-underline">
                        Linha do Tempo Biográfica — Franklin Rafael
                      </AccordionTrigger>
                      <AccordionContent>
                        <BiographicalTimeline />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SobreFranklinRafael;
