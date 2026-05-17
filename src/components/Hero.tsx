import Link from 'next/link';
import Image from 'next/image';
import { HeroProps } from '@/types';
import { Dancing_Script  } from "next/font/google";

const dancingScriptDisplay = Dancing_Script({
  weight: ["700"],
  subsets: ["latin"],
});

export default function Hero({
  title,
  subtitle,
  ctaText = 'Comece Agora',
  ctaHref = '#',
  image,
}: HeroProps) {
  // split title into words so each word appears on its own line
  const words = title ? title.trim().split(' ') : [];

  return (
    <section className="w-full bg-[#f8a69b] py-5 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-[38%] lg:w-1/2 shrink-0">
          <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl text-[#3e0706] font-serif italic mb-6 leading-tight">
            {words.map((w, i) => (
              <div key={i} className="leading-tight">
                {i === words.length - 1 ? (
                  <span className="text-[#cf5143] block">{w}</span>
                ) : (
                  <span className="block">{w}</span>
                )}
              </div>
            ))}
          </h1>

          {subtitle && (
            <p className="text-[#3e0706] max-w-sm md:max-w-xs lg:max-w-md mb-8 leading-relaxed font-light text-sm lg:text-base">
              {subtitle}
            </p>
          )}

          <Link href={ctaHref} className="inline-block px-6 lg:px-8 py-3 lg:py-4 bg-[#3e0706] hover:bg-opacity-90 text-white font-semibold rounded-full transition-all duration-200 ease-in-out hover:scale-105 text-base lg:text-lg">
            {ctaText}
          </Link>
        </div>

        <div className="flex-1 w-full flex justify-center lg:justify-start relative">
          {image ? (
            <div className="w-64 sm:w-80 md:w-80 lg:w-120 relative">
              <Image
                src={image}
                alt={title}
                width={520}
                height={520}
                className="w-full h-auto object-contain rounded-md"
                priority
              />

              {/* Speech bubble overlay (center-right of image). Icon removed per request. */}
              <div className="hidden md:flex flex-col absolute top-[50%] -right-16 md:-right-29 lg:-right-36 transform -translate-y-3/3 rotate-3 items-center">
                <Image
                  src="/removebg.png"
                  alt="Speech Bubble"
                  width={90}
                  height={90}
                  className="relative z-10 -mb-5"
                />
                <div className={`${dancingScriptDisplay.className} bg-[#ebcdba] rounded-full px-5 md:px-6 pt-6 pb-5 shadow-lg text-sm md:text-xl lg:text-2xl text-[#6a1211] italic leading-tight tracking-wide text-center font-bold`}>
                  <div>&#34;Me conta</div>
                  <div>um rolê</div>
                  <div>antirracista!&#34;</div>
                </div>
              </div>

              {/* Mobile variant: centered at right of image */}
              <div className="md:hidden absolute top-1/2 right-2 transform -translate-y-1/2 rotate-3 bg-white/90 rounded-full px-3 py-2 shadow-sm">
                <div className="text-xs text-[#6b1210] italic leading-tight">
                  <div>&#34;Me conta</div>
                  <div>um role</div>
                  <div className="text-[#cf5143]">antirracista!</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-56 sm:w-72 md:w-80 lg:w-120 bg-white/10 rounded-md" />
          )}
        </div>
      </div>
    </section>
  );
}
