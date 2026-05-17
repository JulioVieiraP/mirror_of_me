'use client';

import { useState } from 'react';
import { Dancing_Script } from 'next/font/google';
import { Mail } from 'lucide-react';

const dancing = Dancing_Script({ subsets: ['latin'], weight: ['700'] });

interface ContactSectionProps {
  headline?: string;
  description?: string;
  directEmail?: string;
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
}

export default function ContactSection({
  headline = 'Espelho, espelho meu...\neu me vejo, me reconheço,\nme amo e me respeito!',
  description = 'Quer compartilhar uma história, tirar uma dúvida ou apenas enviar um oi? Estou aqui para te ouvir.',
  directEmail = 'contato@espelhoespelhomeu.com.br',
  onSubmit,
}: ContactSectionProps) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    onSubmit?.(form);
  }

  return (
    <section className="w-full py-20 px-4 sm:px-8 lg:px-16 bg-[#e5d3bb]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">

          {/* ── Lado esquerdo: texto + email ── */}
          <div className="flex-1 flex flex-col gap-6 w-full lg:max-w-lg">
            {/* Frase em cursiva */}
            <h2
              className={`${dancing.className} text-3xl sm:text-4xl text-[#3e0706] leading-snug whitespace-pre-line`}
            >
              {headline}
            </h2>

            {/* Descrição */}
            <p className="text-sm text-[#3e0706] leading-relaxed max-w-sm">
              {description}
            </p>

            {/* E-mail direto */}
            <div className="flex items-center gap-3 mt-2 w-full lg:max-w-sm">
              <div className="border border-[#3e0706] rounded-md p-2 opacity-70">
                <Mail size={18} className="text-[#3e0706]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#3e0706] opacity-70">
                  E-mail Direto
                </span>
                <a
                  href={`mailto:${directEmail}`}
                  className="text-sm text-[#3e0706] hover:underline"
                >
                  {directEmail}
                </a>
              </div>
            </div>
          </div>

          {/* ── Lado direito: formulário ── */}
          <div className="flex-1 w-full lg:max-w-xl bg-[#f5ede4] rounded-2xl p-8 shadow-sm flex flex-col gap-5">

            {/* Nome + E-mail lado a lado */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#3e0706]">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Como te chamamos?"
                  value={form.name}
                  onChange={handleChange}
                  className="bg-white rounded-xl px-4 py-3 text-sm text-[#3e0706] placeholder-[#c9b99a] outline-none border border-transparent focus:border-[#3e0706] transition-colors"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#3e0706]">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Seu melhor e-mail"
                  value={form.email}
                  onChange={handleChange}
                  className="bg-white rounded-xl px-4 py-3 text-sm text-[#3e0706] placeholder-[#c9b99a] outline-none border border-transparent focus:border-[#3e0706] transition-colors"
                />
              </div>
            </div>

            {/* Mensagem */}
            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#3e0706]">
                Mensagem
              </label>
              <textarea
                name="message"
                placeholder="O que você gostaria de dizer?"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="bg-white rounded-xl px-4 py-3 text-sm text-[#3e0706] placeholder-[#c9b99a] outline-none border border-transparent focus:border-[#3e0706] transition-colors resize-none"
              />
            </div>

            {/* Botão */}
            <button
              onClick={handleSubmit}
              className="w-full bg-[#3e0706] text-[#e6d5be] text-xs font-black uppercase tracking-widest py-4 rounded-full hover:bg-[#5a0a09] transition-colors duration-200 hover:scale-[1.01] active:scale-[0.99]"
            >
              Enviar Mensagem
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}