import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Session from '@/components/Session';
import Footer, { NavColumn } from '@/components/Footer';
import ContactSection from '@/components/Contact';

export default function Home() {
  // Dados de exemplo para a seção RECURSOS
  const recursosItems = [
    {
      id: 'cards',
      title: 'ÁLBUNS DE \n FIGURINHAS DIGITAIS',
      description: 'Coleções interativas para \n aprender brincando!',
      image: '/foto3.png',
    },
    {
      id: 'desenhos',
      title: 'DESENHOS E \n CRIAÇÃO ARTÍSTICA',
      description: 'Colorir, imaginar e criar novas histórias.',
      image: '/foto2.png',
    },
    {
      id: 'artigos',
      title: 'TEXTOS E \n CONHECIMENTOS',
      description: 'Leituras simples para conhecer a história e o mundo.',
      image: '/foto5.png',
    },
    {
      id: 'PARA IMPRIMIR',
      title: 'Recursos pedagogicos \n disponiveis para imprimir',
      description: 'Pôsteres, mandalas \n e ilustrações.',
      image: '/foto4.png',
    },
  ];

  // Dados de exemplo para a seção LOJA
  const lojaItems = [
    {
      id: 'pentes',
      title: 'PENTES \n PARA CABELO CRESPO',
      description: 'Cuidados para a beleza afro.',
      image: '/foto6.png',
    },
    {
      id: 'toucas',
      title: 'TOUCAS \n DE CETIM',
      description: 'Proteção e estilo para seus cabelos.',
      image: '/foto7.png',
    },
    {
      id: 'roupas',
      title: 'ROUPAS \n AFRICANAS',
      description: 'Peças que representam e fortalecem.',
      image: '/foto8.png',
    },
    {
      id: 'cuidados',
      title: 'CUIDADOS \n PARA SEUS CABELOS',
      description: 'Produtos que respeitam a natureza.',
      image: '/foto9.png',
    },
  ];

  const defaultNavColumns: NavColumn[] = [
  {
    title: 'Navegação',
    links: [
      { label: 'Sobre nós', href: '/sobre' },
      { label: 'Recursos', href: '/recursos' },
      { label: 'Loja', href: '/loja' },
      { label: 'Artigos', href: '/artigos' },
      { label: 'Contato', href: '/contato' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Cards para colagem', href: '/recursos/cards' },
      { label: 'Desenhos para pintar', href: '/recursos/desenhos' },
      { label: 'Para imprimir', href: '/recursos/imprimir' },
      { label: 'Artigos e conteúdos', href: '/recursos/artigos' },
    ],
  },
  {
    title: 'Loja',
    links: [
      { label: 'Pentes', href: '/loja/pentes' },
      { label: 'Toucas de cetim', href: '/loja/toucas' },
      { label: 'Roupas africanas', href: '/loja/roupas' },
      { label: 'Cuidados para cabelos', href: '/loja/cuidados' },
    ],
  },
  {
    title: 'Ajuda',
    links: [
      { label: 'Perguntas frequentes', href: '/ajuda/faq' },
      { label: 'Trocas e devoluções', href: '/ajuda/trocas' },
      { label: 'Política de privacidade', href: '/ajuda/privacidade' },
      { label: 'Termos de uso', href: '/ajuda/termos' },
    ],
  },
];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <Hero
        title="Espelho, espelho meu..."
        subtitle="Um espaço criado para fortalecer a identidade negra,
            incentivar o autocuidado, a autoestima e práticas
            antirracistas através da arte, da educação e da cultura."
        ctaText="SAIBA MAIS SOBRE NÓS"
        ctaHref="#about"
        image="/bgImage.png"
      />

      <div className='bg-[#e5d3bb]'>
        <Session
          id="recursos"
          title="NOSSOS RECURSOS"
          description="Atividades, leituras e ferramentas para aprender,/n criar e se conhecer."
          buttonText="VER TODOS"
          buttonHref="/recursos"
          items={recursosItems}
          bgColor="#e5d3bb"
        />

        <Session
          id="loja"
          title="E-BOOKS INFANTIS"
          description="Livrinhos digitais para fortalecer/nautoestima, identidade e autocuidado."
          complements="
            Autoestima da criança negra./n
            Cuidados com cabelo e pele./n
            Histórias com protagonistas negros./n
            Amor-próprio./n
            Identidade e pertencimento./n
            Guias para famílias e educadores
          "
          buttonText="CONHEÇA NOSSOS E-BOOKS"
          buttonHref="/loja"
          items={lojaItems}
          bgColor="#f8a69b"
        />
      </div>

      <ContactSection />

      <Footer
        companyName="Espelho"
        companyNameScript="espelho meu"
        logoImage="/fotoFooter.png"
        navColumns={defaultNavColumns}
      />
    </div>
  );
}
