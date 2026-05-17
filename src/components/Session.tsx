import Link from 'next/link';
import { SessionProps } from '@/types';
import Image from 'next/image';

export default function Session({
  title,
  description,
  buttonText,
  buttonHref,
  items,
  bgColor = '#f8a69b',
}: SessionProps) {
  const isLoja = bgColor === '#f8a69b';

  return (
    <section
      className="w-full py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: bgColor }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">

          {/* Left: título, descrição e botão */}
          <div className="shrink-0 w-full lg:w-52 flex flex-col gap-4">
            <h3 className="text-2xl sm:text-3xl font-black tracking-widest uppercase text-[#3e0706]">
              {title}
            </h3>
            <p className="text-sm text-[#3e0706] leading-relaxed">
              {description}
            </p>
            <div className="mt-2">
              <Link
                href={buttonHref}
                className={`inline-block px-6 py-2 text-sm font-semibold rounded-full transition-all duration-200 hover:scale-105 ${
                  isLoja
                    ? 'bg-[#3e0706] text-white hover:bg-[#5a0a09]'
                    : 'border border-[#3e0706] text-[#3e0706] bg-transparent hover:bg-[#3e0706] hover:text-white'
                }`}
              >
                {buttonText}
              </Link>
            </div>
          </div>

          {/* Right: grid de itens */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {items.map((item, index) =>
                isLoja ? (
                  /* ── ESTILO LOJA: sem card, imagem circular, seta ── */
                  <div
                    key={item.id || index}
                    className="flex flex-col items-center text-center gap-2"
                  >
                    {item.image && (
                      <div className="w-32 h-32 rounded-full overflow-hidden shadow-md">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <h4 className="text-xs font-black text-[#3e0706] uppercase tracking-wider leading-tight">
                      {item.title.split('/n').map((line, i) => (
                        <span key={i}>
                          {i > 0 && <br />}
                          {line.trim()}
                        </span>
                      ))}
                    </h4>
                    <span className="text-[#3e0706] text-base font-bold">→</span>
                  </div>
                ) : (
                  <div
                    key={item.id || index}
                    className="flex flex-col items-center text-center bg-[#ede5dc] rounded-3xl px-3 pt-4 pb-5 shadow-sm gap-3"
                  >
                    {/* Oval com imagem — responsivo */}
                    <div className="relative w-full px-2">
                      <div className="relative w-full aspect-3/4 rounded-[50%] overflow-hidden bg-white">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover object-top"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[#c9b99a]">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Título */}
                    <h4 className="text-[11px] font-black text-[#3e0706] uppercase tracking-wide leading-tight">
                      {item.title}
                    </h4>

                    {/* Descrição */}
                    <p className="text-[11px] text-[#6b4c4c] leading-snug -mt-1">
                      {item.description.split('/n').map((line, i) => (
                        <span key={i}>
                          {i > 0 && <br />}
                          {line.trim()}
                        </span>
                      ))}
                    </p>

                    {/* Coração */}
                    <span className="text-rose-400 text-base leading-none">♥</span>
                  </div>
                )
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}