import Link from 'next/link';
import Image from 'next/image';
import { Dancing_Script } from 'next/font/google';

export const dancing = Dancing_Script({ subsets: ['latin'], weight: ['700'] });

interface NavLink {
  label: string;
  href: string;
}

export interface NavColumn {
  title: string;
  links: NavLink[];
}

interface FooterProps {
  companyName?: string;
  companyNameScript?: string; // parte em cursiva (ex: "espelho meu")
  tagline?: string;
  logoImage?: string;
  navColumns?: NavColumn[];
  copyrightText?: string;
}

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

export default function Footer({
  companyName = 'Espelho',
  companyNameScript = 'espelho meu',
  tagline = 'Autoestima. Identidade.\nRepresentatividade. Antirracismo.',
  logoImage,
  navColumns = defaultNavColumns,
  copyrightText,
}: FooterProps) {
  const year = new Date().getFullYear();
  const copyright =
    copyrightText ?? `© ${year} Espelho Espelho Meu. Todos os direitos reservados.`;

  return (
    <footer className="w-full bg-[#3e0706] text-[#e6d5be] py-10 px-4 sm:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">

          {/* ── Coluna esquerda: logo + tagline ── */}
          <div className="flex items-start gap-6 lg:w-80 shrink-0 border-b-2 lg:border-r-2 border-[#c9a96e]/40 pb-5 lg:pr-10">
            {/* Imagem do espelho */}
            <div className="shrink-0">
              {logoImage ? (
                <Image
                  src={logoImage}
                  alt="Logo Espelho Meu"
                  width={90}
                  height={110}
                  className="object-contain"
                />
              ) : (
                <div className="w-20 h-24 border border-[#c9a96e] rounded-lg opacity-40" />
              )}
            </div>

            {/* Nome + tagline */}
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-[#e6d5be] leading-none -mb-3">
                {companyName}
              </span>
              <span className={`${dancing.className} text-2xl sm:text-4xl text-[#e6d5be] leading-none`}>
                {companyNameScript}
              </span>
              <p className="text-xs text-[#c9b99a] mt-2 leading-relaxed whitespace-pre-line">
                {tagline}
              </p>
            </div>
          </div>

          {/* ── Colunas de navegação ── */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:pl-10">
            {navColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-black uppercase tracking-widest text-[#c9a96e] mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#e6d5be] hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── Coração decorativo ── */}
          <div className="hidden lg:flex items-center pl-8 opacity-40">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              stroke="#e6d5be"
              strokeWidth="1.5"
            >
              <path d="M24 42S4 28 4 16a10 10 0 0 1 20-2 10 10 0 0 1 20 2c0 12-20 26-20 26z" />
            </svg>
          </div>
        </div>

        {/* ── Copyright ── */}
        <div className="mt-5 border-opacity-30 pt-5 text-center text-xs text-[#c9b99a]">
          {copyright}
        </div>
      </div>
    </footer>
  );
}