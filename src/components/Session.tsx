import Link from 'next/link';
import { SessionProps } from '@/types';
import Image from 'next/image';

export default function Session({
  id,
  title,
  description,
  complements,
  buttonText,
  buttonHref,
  items,
  bgColor = '#f8a69b',
}: SessionProps) {
  const isLoja = bgColor === '#f8a69b';

  return (
    <section
      id={id}
      className="w-full py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className={`container mx-auto ${isLoja ? 'rounded-2xl bg-[#f8a69b] px-6 py-10' : ''} `}>
        <div className="grid grid-cols-1 lg:grid-cols-[310px_1fr] xl:grid-cols-[400px_1fr] gap-8 lg:gap-12 items-start">

          {/* ── Coluna esquerda: título, descrição e botão ── */}
          <div className="w-full flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl sm:text-3xl font-black tracking-widest uppercase text-[#3e0706]">
                {title}
              </h3>
            </div>

            {/* Descrição: linhas separadas por /n viram tópicos com ♡ */}
            {isLoja ? (
              <div className="flex flex-col gap-3">
                <p className="text-sm text-[#3e0706] leading-relaxed">
                  {description.split('/n').map((line, i) => (
                    <span key={i}>
                      {i > 0 && <br />}
                      {line.trim()}
                    </span>
                  ))}
                </p>

                {complements && (
                  <div className="flex flex-col gap-1">
                    {complements.split('/n').map((line, i) => (
                      <span
                        key={i}
                        className="text-xs text-[#3e0706] flex items-start gap-1 leading-snug"
                      >
                        <span className="text-rose-400 mt-0.5">♡</span>
                        {line.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <p className="text-sm text-[#3e0706] leading-relaxed">
                {description.split('/n').map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line.trim()}
                  </span>
                ))}
              </p>
            )}

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

          {/* ── Coluna direita: itens ── */}
          <div className="w-full min-w-0">

            {isLoja ? (
              /* ── ESTILO E-BOOKS: carrossel com capas verticais ── */
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-around gap-2 sm:gap-3">
                  {/* Grid de capas */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
                    {items.map((item, index) => (
                      <div
                        key={item.id || index}
                        className="flex flex-col items-center text-center bg-[#ede5dc] rounded-3xl px-4 pt-5 pb-6 shadow-sm gap-3"
                      >
                        {/* Capa do livro — retângulo vertical 2:3 */}
                        <div className="relative w-full aspect-2/3 rounded-lg overflow-hidden shadow-lg">
                          {item.image ? (
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover object-top"
                            />
                          ) : (
                            <div className="w-full h-full bg-[#e8c8c0] flex items-center justify-center">
                              <span className="text-[#3e0706] text-2xl">📚</span>
                            </div>
                          )}
                        </div>

                        {/* Título abaixo da capa */}
                        <h4 className="text-[10px] sm:text-[11px] font-black text-[#3e0706] uppercase tracking-wide leading-tight">
                          {item.title.split('\n').map((line, i) => (
                            <span key={i}>
                              {i > 0 && <br />}
                              {line.trim()}
                            </span>
                          ))}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* ── ESTILO PADRÃO: cards com oval e coração ── */
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {items.map((item, index) => (
                  <div
                    key={item.id || index}
                    className="flex flex-col items-center text-center bg-[#ede5dc] rounded-3xl px-3 pt-4 pb-5 shadow-sm gap-3"
                  >
                    {/* Oval com imagem */}
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

                    <h4 className="text-[11px] font-black text-[#3e0706] uppercase tracking-wide leading-tight">
                      {item.title.split('\n').map((line, i) => (
                        <span key={i}>
                          {i > 0 && <br />}
                          {line.trim()}
                        </span>
                      ))}
                    </h4>

                    <p className="text-[11px] text-[#6b4c4c] leading-snug -mt-1">
                      {item.description.split('/n').map((line, i) => (
                        <span key={i}>
                          {i > 0 && <br />}
                          {line.trim()}
                        </span>
                      ))}
                    </p>

                    <span className="text-rose-400 text-base leading-none">♥</span>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}