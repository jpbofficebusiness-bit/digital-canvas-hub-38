import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

type QA = { q: string; a: React.ReactNode };

const escrita: QA[] = [
  {
    q: "1. Como você se tornou um escritor?",
    a: (
      <>
        <p>
          Tudo começou com a leitura de um livro. Seu nome se chama A Cabana. O modo como
          William Paul Young contou essa história me causou emoções que eu nunca imaginei
          experimentar com a leitura de um livro.
        </p>
        <p>
          O impacto e a influência que essa obra exerceu sobre mim despertaram-me o desejo
          de que as pessoas também fossem tocadas e influenciadas pela minha escrita. Foi
          assim que tudo começou.
        </p>
      </>
    ),
  },
  {
    q: "2. De onde vêm as suas ideias? Onde você encontra inspiração? Como você consegue pensar em coisas tão interessantes para escrever?",
    a: (
      <>
        <p>
          Desde a infância, eu já possuía uma imaginação bastante criativa para inventar
          histórias e criar brincadeiras. Já nesse período, a pergunta que eu sempre fazia
          a mim mesmo era: que tipo de história ainda não contaram? Que tipo de brincadeira
          ainda não inventaram? Quando se cresce com esse tipo de disposição constante, é
          natural ter uma imaginação fértil.
        </p>
        <p>
          A verdade é que, desde criança, vivi em um ambiente e num tempo em que meu
          imaginário foi profundamente formado pelas circunstâncias daquela época.
        </p>
        <p>
          Naquele período — isto é, por volta dos anos 90 — as crianças brincavam mais e
          eram bem mais criativas. Sabíamos nos divertir. O ambiente das ruas proporcionava
          isso, o que fez com que minha imaginação recebesse diversas influências, tanto
          boas quanto ruins. Esse conjunto de experiências formou o meu imaginário. Creio
          que essa é a explicação.
        </p>
        <p>
          Mas, não espero a inspiração vir para poder escrever. Estarei sempre escrevendo,
          ela vindo ou não. Como disse, certa vez, um grande pintor: "Não sei quando a
          inspiração virá, mas quando ela vier, que ela me encontre sempre trabalhando."
        </p>
      </>
    ),
  },
  {
    q: "3. Como é o seu processo de escrita? Poderia me dizer, mesmo que em poucas palavras?",
    a: (
      <>
        <p>
          Como escrevi em meu Diário, geralmente sigo os mesmos passos, embora, as vezes,
          a ordem possa variar. Serei sucinto, pois ainda pretendo escrever um livro sobre
          esse assunto.
        </p>
        <ul className="list-none space-y-2 pl-0">
          <li><strong>Primeiro:</strong> Penso em novas ideias para uma história.</li>
          <li><strong>Segundo:</strong> Construo, mentalmente, um início, meio e fim para essa história.</li>
          <li><strong>Terceiro:</strong> Faço um esboço.</li>
          <li><strong>Quarto:</strong> Elaboro nomes e características distintas para cada um dos personagens. E faço nota de tudo.</li>
          <li><strong>Quinto:</strong> Pesquiso incansavelmente sobre cada assunto e até mesmo cada detalhe relevante para a história.</li>
          <li><strong>Sexto:</strong> Refaço o esboço, adicionando cada assunto teológico que será tratado em cada capítulo.</li>
          <li><strong>Sétimo:</strong> Em seguida, escrevo meus pensamentos filosóficos sobre cada assunto teológico.</li>
          <li><strong>Oitavo:</strong> Escrevo a história. Só depois de tudo isso, começo a escrever a obra.</li>
          <li><strong>Nono:</strong> Me desambiento de toda a minha natureza literária. Isso significa que fico semanas e meses sem lê-la e sem tocá-la.</li>
          <li><strong>Décimo:</strong> Depois de um tempo, retorno. Então releio, reviso, corrijo e publico.</li>
        </ul>
        <p>Esse é o meu processo de escrita. É assim que tenho feito, e é assim que ainda o faço.</p>
      </>
    ),
  },
  {
    q: "4. Qual é a sua matéria preferida? Você tem alguma?",
    a: (
      <p>
        Sim, tenho! Desde pequeno, minha matéria preferida sempre foi <em>Ciências</em>.
        Mas, com o passar do tempo, percebi que o que me chamava a atenção na matéria era
        a forma como o professor contava ou transmitia os ensinamentos científicos. Assim,
        compreendi que a minha matéria preferida, na verdade, era <em>História</em>, bem
        como o modo como ela era contada.
      </p>
    ),
  },
  {
    q: "5. Você prefere escrever durante o dia ou à noite?",
    a: (
      <>
        <p>
          O período que mais gosto de escrever é à noite. Como o dia é muito intenso e
          trabalhoso, eu sempre prefiro os momentos mais calmos e silenciosos. Os períodos
          noturnos, principalmente as madrugadas, me proporcionam isso.
        </p>
        <p>
          Entretanto, nas férias — seja no meio ou no final do ano — o momento que mais
          gosto de escrever é durante o dia, principalmente pelas manhãs. Nesses períodos,
          aproveito bastante as férias para escrever.
        </p>
      </>
    ),
  },
  {
    q: "6. Dentre todos os livros que você já escreveu, qual é o seu preferido?",
    a: (
      <p>
        De todos os livros que já escrevi, o meu preferido, como já disse outras vezes, é
        a saga que estou escrevendo, intitulada <em>Os Espadeiros</em>, a qual
        provavelmente escreverei até a velhice, caso esteja vivo até lá. É uma obra para a
        vida inteira.
      </p>
    ),
  },
  {
    q: "7. É verdade que você tem um diário pessoal, e que vem escrevendo desde a adolescência? Caso seja verdade, você pretende lançá-lo algum dia no futuro?",
    a: (
      <>
        <p>
          Sim, é verdade! Mas, se pretendo lançá-lo algum dia no futuro, tenho receios
          quanto a isso. Nele estão as histórias da minha vida, meus pensamentos mais
          íntimos e profundos, bem como as minhas emoções mais intensas.
        </p>
        <p>
          Não gosto da ideia de ver as coisas da minha vida sendo tratadas com trivialidade
          por pessoas levianas e idiotas.
        </p>
        <p>
          Graças a Deus, os leitores que admiram as minhas obras não são assim. Então, a
          não ser que Deus me inspire a fazer isso, provavelmente não.
        </p>
      </>
    ),
  },
  {
    q: "8. Ouvi dizer que você escreve seus próprios sermões depois de pregá-los. Como consegue fazer isso sem esquecer absolutamente nada? Você utiliza alguma espécie de gravador ou algo do tipo?",
    a: (
      <>
        <p>
          Sim, utilizo gravadores. Após isso, quando retorno para casa, os transcrevo.
          Entretanto, é bom deixar claro que minha matéria-prima, por meio da qual eu
          escrevo os meus sermões, são principalmente os meus esboços.
        </p>
        <p>
          Eu ainda tenho todos eles guardados, cada um, desde os 15 anos de idade até hoje.
          Ainda estão todos bem conservados. São a minha matéria-prima para poder escrever
          cada sermão que prego.
        </p>
      </>
    ),
  },
  {
    q: "9. Mesmo tendo escrito diversos gêneros, percebi que você ainda não se aventurou em um romance pós-moderno. Por acaso existe a possibilidade de você escrever esse tipo de gênero algum dia no futuro?",
    a: (
      <>
        <p>
          Sim, está nos meus planos escrever, futuramente, uma espécie de romance
          pós-moderno. Mas, por agora, minhas prioridades literárias estão voltadas para
          outras obras, cujos romances se reportam a épocas mais antigas.
        </p>
        <p>
          Todavia, creio que, quando isso acontecer, provavelmente se tornará um dos
          livros mais queridos por aqueles que admiram minhas histórias.
        </p>
      </>
    ),
  },
];

const leitura: QA[] = [
  {
    q: "10. Quantos livros você já leu até o momento?",
    a: (
      <p>
        Com certeza, mais de 200 livros. Sendo mais específico, conforme a última vez que
        verifiquei em meu diário, constavam 217 livros lidos. Entretanto, há muitos que li
        recentemente e esqueci de anotar.
      </p>
    ),
  },
  {
    q: "11. Qual é o seu livro favorito?",
    a: (
      <p>
        Já me fizeram essa pergunta várias vezes, e a minha resposta é sempre a mesma:
        Depois da Bíblia, o meu livro favorito é <em>O Progresso do Peregrino</em> (The
        Pilgrim's Progress), de John Bunyan.
      </p>
    ),
  },
  {
    q: "12. Sobre os escritores, quem é o seu preferido?",
    a: (
      <>
        <p>
          Sem dúvida alguma, o meu escritor preferido de todos os tempos é o pregoeiro
          John Bunyan, um simples latoeiro que viveu na Inglaterra, no século XVII, e que
          foi preso por pregar a Palavra de Deus.
        </p>
        <p>
          Ao meu ver, o maior escritor de fantasia foi ele. Não foi C. S. Lewis, Rowling,
          George R. R. Martin, Stephen King, nem mesmo Tolkien.
        </p>
        <p>
          O pastor batista e puritano, John Bunyan, foi o escritor que mais mexeu com o
          meu imaginário e com as minhas emoções humanas. Nele, estão combinadas e unidas
          os dois gêneros que mais gosto e aprecio: Fantasia e Teologia Pura. Ainda hoje,
          ele permanece, para mim, insuperável.
        </p>
      </>
    ),
  },
  {
    q: "13. Entre os escritores de Fantasia Épica que estão vivos, qual é o seu preferido?",
    a: (
      <p>
        A escritora <em>Suzanne Collins</em>. Sua saga <em>Jogos Vorazes</em> foi a obra
        mais primorosa que li entre os escritores atuais de fantasia épica.
      </p>
    ),
  },
  {
    q: "14. Se você pudesse fazer um ranking — um top 10 — dos seus livros de cabeceira, aqueles que nunca poderiam faltar, quais seriam esses livros?",
    a: (
      <>
        <p>
          Essa é uma questão muito complicada, acredite, e a resposta acaba sendo até
          mesmo injusta com os meus livros.
        </p>
        <p>
          Mesmo assim, se minha biblioteca estivesse pegando fogo, e eu pudesse salvar
          apenas dez livros, seriam esses:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>A Bíblia</li>
          <li>
            O Progresso do Peregrino — Ainda assim, me queimaria tentando salvar todas as
            obras de John Bunyan, como <em>As Aventuras de Cristiana</em>, <em>A Jornada
            para o Inferno</em> e <em>A Guerra Santa</em>.
          </li>
          <li>Sondando Sua Consciência — do puritano, Jonathan Edwards.</li>
          <li>A Mortificação do Pecado — do príncipe da teologia puritana, John Owen.</li>
          <li>
            O Diário de John Wesley. — Mas, novamente, me queimaria tentando salvar todas
            as obras de Wesley.
          </li>
          <li>Lições Aos Meus Alunos (Volumes I, II e III) — de Charles Spurgeon.</li>
          <li>A Prática da Piedade — do puritano Lewis Bayly.</li>
          <li>À Luz da Eternidade — de Leonard Ravenhill.</li>
          <li>Paixão Pela Pureza — de Joel Beeke.</li>
          <li>Os Pregadores Chamados Metodistas (Volumes I e II) — de Ronald Gripp.</li>
        </ol>
        <p>
          Depois disso, alguém teria que me impedir de retornar à minha biblioteca em
          chamas, pois, com certeza, eu retornaria à medida que fosse lembrando de cada
          livro que ficou para trás.
        </p>
      </>
    ),
  },
];

const pregacao: QA[] = [
  {
    q: "15. Quantos sermões você já pregou ao todo, até o momento? Você já contou alguma vez?",
    a: (
      <>
        <p>
          Sinceramente, essa é a única contagem que não fiz. Eu deveria ter feito. Mas,
          conforme a minha memória me permite lembrar — talvez até erre em minha contagem,
          mas espero que não —, provavelmente mais de mil e vinte sermões, desde o ano de
          2010, quando comecei a pregar. Explicarei o por quê:
        </p>
        <p>
          Vivi em uma época --- e isso ocorre ainda hoje --- que as pessoas que mais
          pregavam não eram os pastores e os ditos missionários, mas os jovens professores
          de Escola Dominical.
        </p>
        <p>
          Esses, sim, são os que mais pregam, tanto em número, quanto em performance e
          conteúdo, embora isso também não se aplique à todos, é claro! Mas, no meu caso,
          foi assim!
        </p>
        <p>
          Pensando agora, fico um pouco chateado, pois gostaria que fosse um número bem
          maior. Sempre estou tentando superar os meus heróis, principalmente{" "}
          <em>John Wesley</em>, embora eu nunca consiga, por mais que eu tente. Ele pregou
          mais de 40 mil sermões. Chega a ser ridículo eu tentar competir com ele. Mas,
          gosto de pensar na ideia de competir com esse antigo pregoeiro.
        </p>
        <p>
          Se eu contar todas as minhas pregações em lugares como o Juá --- o lugar em que
          mais preguei, ensinei e evangelizei, principalmente nas quartas-feiras e nos
          domingos, já seriam centenas e centenas de sermões, pois fui o professor oficial
          nesse lugar por anos.
        </p>
        <p>
          Se contar com a Bonita, a Mangueira, o Sítio Flamengo, o Bairro São Geraldo,
          diversas Igrejas — especialmente a Igreja Batista Missionária —, ruas, lares,
          algumas vezes na cadeia, como também em lugares avulsos e locais perigosos; nos
          domingos diurnos e noturnos, além de pregações nas terças, quartas e quintas
          noturnas, bem como nas noites de sexta e sábado, seria um número ainda maior.
          Mas, não saberia dizer com precisão. Por esta razão, provavelmente foram mais de
          mil e vinte sermões.
        </p>
        <p>
          Essa é a parte boa de ser um adolescente cristão e um jovem pregoeiro. A energia
          não diminui, o fôlego é sempre o mesmo e o corpo está sempre a todo o vapor. Sou
          grato a Deus por esses feitos sob a Sua graça!
        </p>
      </>
    ),
  },
];

const Block = ({ title, items }: { title: string; items: QA[] }) => (
  <section className="mb-12">
    <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6 border-b border-border pb-3">
      {title}
    </h2>
    <div className="space-y-8">
      {items.map((item, i) => (
        <article key={i}>
          <h3 className="font-heading text-lg md:text-xl text-foreground mb-3">
            {item.q}
          </h3>
          <div className="font-body text-muted-foreground leading-relaxed space-y-3">
            <p className="font-body text-sm uppercase tracking-widest text-gold">
              Resposta:
            </p>
            {item.a}
          </div>
        </article>
      ))}
    </div>
  </section>
);

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="h-16 md:h-20" />

      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">
              PERGUNTAS FREQUENTES
            </h1>
            <p className="font-body text-muted-foreground">
              Respostas de Franklin Rafael
            </p>
          </header>

          <Block title="Escrita" items={escrita} />
          <Block title="Leitura" items={leitura} />
          <Block title="Pregação" items={pregacao} />
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default FAQ;
