'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PageShell } from './page-shell';

export function ContactContent() {
  const [language, setLanguage] = useState<'pl' | 'en'>('pl');

  return (
    <PageShell language={language} setLanguage={setLanguage}>
      <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(10,10,10,0.92))] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.35)] sm:p-10 lg:p-14">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-[#ff8f8f]">
            {language === 'pl' ? 'Umów demo' : 'Book a demo'}
          </p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">
            {language === 'pl'
              ? 'Chcesz poznać OSS bliżej?'
              : 'Would you like to learn more about OSS?'}
          </h1>
          <p className="text-lg leading-8 text-zinc-300">
            {language === 'pl'
              ? 'Napisz do nas maila, jeśli chcesz otrzymać więcej informacji o aplikacji, jej funkcjach albo zaplanować rozmowę o wdrożeniu.'
              : 'Send us an email if you want more information about the app, its features, or to arrange a conversation about implementation.'}
          </p>

          <div className="rounded-[1.5rem] border border-[#ff4d4d]/20 bg-[#ff4d4d]/10 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#ff8f8f]">
              {language === 'pl' ? 'Adres e-mail' : 'Email address'}
            </p>
            <a
              href="mailto:northindustrie@gmail.com?subject=Informacje%20o%20OSS"
              className="mt-3 inline-flex text-xl font-semibold text-white transition hover:text-[#ff8f8f]"
            >
              northindustrie@gmail.com
            </a>
            <p className="mt-3 text-sm leading-7 text-zinc-300">
              {language === 'pl'
                ? 'W treści wiadomości możesz po prostu napisać, że chcesz dostać więcej informacji o aplikacji OSS.'
                : 'In the message, you can simply say that you would like more information about the OSS application.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/" className="rounded-full border border-white/15 px-6 py-3 font-semibold text-zinc-200 transition hover:border-[#ff4d4d] hover:text-[#ff8f8f]">
              {language === 'pl' ? 'Wróć na stronę główną' : 'Back to home'}
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
