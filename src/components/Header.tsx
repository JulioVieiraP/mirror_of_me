import Link from 'next/link';
import { HeaderProps } from '@/types';
import { dancing } from './Footer';

export default function Header({ links = [] }: HeaderProps) {
  const defaultLinks = links.length > 0 ? links : [
    { label: 'Sobre Nós', href: '#about' },
    { label: 'Recursos', href: '#recursos' },
    { label: 'Loja', href: '#loja' },
    { label: 'Artigos', href: '#artigos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="w-full" style={{ backgroundColor: '#f8a69b' }}>
      <div className="container mx-auto py-5 px-4 sm:px-6 lg:px-8 xl:px-0 border-b-2 border-[#ee978a] flex items-center">
          {/* Navigation Links - Center */}
          <nav className="flex gap-6 lg:gap-8 flex-1 justify-between items-center">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-sm text-[#6b1210] tracking-wide -mb-3">
                Espelho
              </span>
              <span className={`${dancing.className} text-2xl sm:text-4xl text-[#6b1210] font-bold relative`}>
                espelho meu<span className="text-[#f0c98b] ml-1 text-xl absolute top-0 -right-3">✦</span>
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest">
              {defaultLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#3e2a1f] hover:text-[#f0c98b] font-semibold text-sm lg:text-base transition-colors duration-200 uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Newsletter CTA - Right */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="#newsletter"
                className="text-[10px] uppercase font-bold text-[#3e2a1f] hover:text-[#f0c98b] border-b border-[#3e2a1f] hover:border-[#f0c98b] transition-all duration-200"
              >
                Fale Conosco
              </Link>
              <Link
                href="#newsletter"
                className="bg-secondary hover:bg-opacity-80 text-white p-2 rounded-md transition-all duration-200"
                title="Newsletter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#3e2a1f]"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button (visible on small screens) */}
          <div className="lg:hidden flex items-center justify-end pr-4">
            <button className="text-secondary p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
    </header>
  );
}
