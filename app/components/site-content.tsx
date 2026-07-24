'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PageShell } from './page-shell';

type PageKey = 'home' | 'privacy' | 'terms' | 'delete-account';

type SiteContentProps = {
  page: PageKey;
};

type Locale = 'pl' | 'en';

const featureList = {
  pl: [
    'Zarządzanie grupą',
    'Planowanie treningów',
    'Frekwencja',
    'Biblioteka technik',
    'Płatności',
    'Postępy zawodników',
    'Powiadomienia',
    'Statystyki',
  ],
  en: [
    'Group management',
    'Training planning',
    'Attendance',
    'Technique library',
    'Payments',
    'Athlete progress',
    'Notifications',
    'Statistics',
  ],
};

const reasons = {
  pl: [
    {
      title: 'Zbudowane dla nowoczesnych zespołów',
      body: 'Zarządzaj operacjami klubu w jednym miejscu, z premium doświadczeniem skupionym na szybkości i przejrzystości.',
    },
    {
      title: 'Jasna komunikacja',
      body: 'Udostępniaj grafiki treningów, aktualizacje i postępy bez chaosu i rozproszonych narzędzi.',
    },
    {
      title: 'Skaluje się z ambicją',
      body: 'Obsługuj małą akademię lub szybko rozwijającą się organizację bez kompromisów jakości.',
    },
  ],
  en: [
    {
      title: 'Built for modern teams',
      body: 'Centralize coaching operations with a premium experience designed around speed and clarity.',
    },
    {
      title: 'Clear communication',
      body: 'Share schedules, updates, and progress in one place so everyone stays aligned.',
    },
    {
      title: 'Scales with ambition',
      body: 'Support a small academy or a growing organization with a platform that evolves with you.',
    },
  ],
};

type HomeContent = {
  badge: string;
  title: string;
  subtitle: string;
  body: string;
  ctaPrimary: string;
  ctaSecondary: string;
  aboutTitle: string;
  aboutBody: string;
  featuresTitle: string;
  whyTitle: string;
  contactTitle: string;
  contactBody: string;
};

type LegalContent = {
  title: string;
  intro: string;
  body1: string;
  body2: string;
  body3: string;
};

type ContentMap = {
  home: HomeContent;
  privacy: LegalContent;
  terms: LegalContent;
  delete: LegalContent;
};

const content: Record<Locale, ContentMap> = {
  pl: {
    home: {
      badge: 'Premiumowe rozwiązanie OSS dla trenerów, klubów i zawodników',
      title: 'Tworzymy nowoczesne rozwiązania dla sportu i biznesu.',
      subtitle:
        'North Industrie rozwija OSS – kompleksową platformę dla trenerów, klubów i studentów brazylijskiego jiu-jitsu.',
      body: 'Projektujemy eleganckie, szybkie i skalowalne narzędzia dla zespołów, które chcą rosnąć bez chaosu.',
      ctaPrimary: 'Umów demo',
      ctaSecondary: 'Dowiedz się więcej',
      aboutTitle: 'Minimalistycznie. Mocno. Efektywnie.',
      aboutBody:
        'North Industrie buduje premiumowe doświadczenia cyfrowe dla sportu i biznesu. Łączymy spokojny design z praktycznymi workflowami, aby trenerzy mogli skupić się na ludziach, a nie na narzędziach.',
      featuresTitle: 'Wszystko, czego potrzebuje Twój zespół',
      whyTitle: 'Dlaczego OSS',
      contactTitle: 'Gotowy, by zmodernizować swoje operacje?',
      contactBody:
        'Skontaktuj się z nami, aby sprawdzić, jak OSS może wspierać Twój klub i przyspieszać rozwój.',
    },
    privacy: {
      title: 'Polityka prywatności',
      intro: 'North Industrie szanuje Twoją prywatność i dba o bezpieczeństwo danych powierzonych OSS.',
      body1:
        'Zbieramy tylko te informacje, które są niezbędne do świadczenia usług związanych z zarządzaniem klubem, treningami i komunikacją.',
      body2:
        'Dane używamy do obsługi platformy, przetwarzania płatności, wsparcia i poprawy jakości usług.',
      body3:
        'Nie sprzedajemy danych osobowych. Mogemy udostępniać je wyłącznie zaufanym dostawcom usług wspierającym operacje OSS.',
    },
    terms: {
      title: 'Regulamin',
      intro: 'Korzystając z OSS, akceptujesz odpowiedzialne i zgodne z prawem użytkowanie usługi.',
      body1:
        'OSS jest dostarczany jako platforma do zarządzania treningami, obecnością, płatnościami i postępami zawodników.',
      body2:
        'Użytkownicy odpowiadają za poprawność danych oraz zgodność z obowiązującymi przepisami, w tym ochroną danych i prawami własności intelektualnej.',
      body3:
        'North Industrie może zawiesić lub zakończyć dostęp, jeśli wykryje nadużycie lub działania niezgodne z prawem.',
    },
    delete: {
      title: 'Usunięcie konta i danych',
      intro: 'Usuwanie danych z OSS jest proste i bezpośrednie.',
      body1:
        'Aby poprosić o usunięcie konta lub danych osobowych, napisz do nas na northindustrie@gmail.com z tematem „Data Deletion Request”.',
      body2:
        'Podaj adres e-mail powiązany z kontem, abyśmy mogli zidentyfikować Twoją prośbę i ją bezpiecznie obsłużyć.',
      body3:
        'Potwierdzimy otrzymanie prośby i zrealizujemy ją zgodnie z obowiązującymi przepisami oraz naszymi zasadami retencji.',
    },
  },
  en: {
    home: {
      badge: 'Premium OSS platform for coaches, clubs and athletes',
      title: 'We create modern solutions for sport and business.',
      subtitle:
        'North Industrie develops OSS – an all-in-one platform for Brazilian Jiu-Jitsu coaches, clubs and students.',
      body: 'We design elegant, fast, and scalable tools for teams that want to grow without complexity.',
      ctaPrimary: 'Book a demo',
      ctaSecondary: 'Learn more',
      aboutTitle: 'Minimal by design. Powerful by default.',
      aboutBody:
        'North Industrie builds premium digital experiences for sport and business. We combine calm design with practical workflows so coaches can focus on people rather than tools.',
      featuresTitle: 'Everything your team needs in one place',
      whyTitle: 'Why OSS',
      contactTitle: 'Ready to modernize your operations?',
      contactBody:
        'Connect with us to see how OSS can support your club and accelerate growth.',
    },
    privacy: {
      title: 'Privacy Policy',
      intro: 'North Industrie respects your privacy and protects every piece of data entrusted to OSS.',
      body1:
        'We collect only the information necessary to provide services for club management, training, and communication.',
      body2:
        'We use your data to operate the platform, process payments, provide support, and improve the quality of our services.',
      body3:
        'We do not sell personal data. We may share it only with trusted service providers supporting OSS operations.',
    },
    terms: {
      title: 'Terms of Service',
      intro: 'By using OSS, you agree to use the service responsibly and in compliance with applicable law.',
      body1:
        'OSS is provided as a platform for managing training, attendance, payments, and athlete progress.',
      body2:
        'Users are responsible for the accuracy of their data and for complying with applicable laws, including privacy and intellectual property regulations.',
      body3:
        'North Industrie may suspend or terminate access if misuse or unlawful activity is detected.',
    },
    delete: {
      title: 'Delete account and data',
      intro: 'Removing your data from OSS is simple and direct.',
      body1:
        'To request deletion of your account or personal data, email us at northindustrie@gmail.com with the subject “Data Deletion Request”.',
      body2:
        'Please include the email associated with your account so we can identify and process your request securely.',
      body3:
        'We will confirm receipt and complete the request in accordance with applicable laws and our retention obligations.',
    },
  },
};

export function SiteContent({ page }: SiteContentProps) {
  const [language, setLanguage] = useState<Locale>('en');
  const currentPage = page;

  const homeContent = content[language].home;
  const legalContent =
    currentPage === 'privacy'
      ? content[language].privacy
      : currentPage === 'terms'
        ? content[language].terms
        : content[language].delete;

  return (
    <PageShell language={language} setLanguage={setLanguage}>
      {currentPage === 'home' ? (
        <>
          <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border border-[#ff4d4d]/30 bg-[#ff4d4d]/10 px-4 py-2 text-sm font-medium text-[#ff8f8f]">
                {homeContent.badge}
              </div>
              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                  {homeContent.title}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">{homeContent.subtitle}</p>
                <p className="max-w-2xl text-base leading-7 text-zinc-400">{homeContent.body}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="rounded-full bg-[#ff4d4d] px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff6b6b]">
                  {homeContent.ctaPrimary}
                </Link>
                <Link href="/privacy-policy" className="rounded-full border border-white/15 px-6 py-3 font-semibold text-zinc-200 transition duration-300 hover:-translate-y-0.5 hover:border-[#ff4d4d] hover:text-[#ff8f8f]">
                  {homeContent.ctaSecondary}
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-[#ff4d4d]/10 p-8 shadow-2xl shadow-black/40 transition duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-[#ff8f8f]">North Industrie</p>
                <h2 className="text-2xl font-semibold text-white">{language === 'pl' ? 'Nowoczesne operacje, spokojny rozwój' : 'Modern operations, calmer growth'}</h2>
                <p className="text-zinc-300">
                  {language === 'pl'
                    ? 'Zastąp rozproszone narzędzia jedną elegancką platformą do zarządzania treningami, płatnościami i zaangażowaniem.'
                    : 'Replace scattered tools with one elegant system that helps teams manage training, payments, and engagement in real time.'}
                </p>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {featureList[language].slice(0, 4).map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-zinc-200 transition duration-300 hover:border-[#ff4d4d]/60">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="about" className="mt-24 grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 transition duration-300 hover:border-[#ff4d4d]/30 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#ff8f8f]">{language === 'pl' ? 'O North Industrie' : 'About North Industrie'}</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{homeContent.aboutTitle}</h2>
            </div>
            <p className="text-lg leading-8 text-zinc-300">{homeContent.aboutBody}</p>
          </section>

          <section id="oss" className="mt-24">
            <div className="mb-8 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#ff8f8f]">{language === 'pl' ? 'Aplikacja OSS' : 'OSS Application'}</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{homeContent.featuresTitle}</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {featureList[language].map((feature) => (
                <div key={feature} className="rounded-2xl border border-white/10 bg-black/20 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#ff4d4d]/60 hover:bg-[#ff4d4d]/10">
                  <p className="text-lg font-medium text-white">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="why" className="mt-24 rounded-[2rem] border border-white/10 bg-gradient-to-br from-black/60 to-[#1a1a1a] p-8 lg:p-12">
            <div className="mb-8 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#ff8f8f]">{homeContent.whyTitle}</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{language === 'pl' ? 'Dobrze zaprojektowane systemy dla ambitnych klubów' : 'Thoughtful systems for ambitious clubs'}</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {reasons[language].map((reason) => (
                <div key={reason.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-300">{reason.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="mt-24 rounded-[2rem] border border-[#ff4d4d]/20 bg-[#ff4d4d]/10 p-8 lg:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.35em] text-[#ff8f8f]">{language === 'pl' ? 'Kontakt' : 'Contact'}</p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{homeContent.contactTitle}</h2>
                <p className="mt-4 text-lg leading-8 text-zinc-200">{homeContent.contactBody}</p>
              </div>
              <div className="space-y-3 text-zinc-100">
                <a href="mailto:northindustrie@gmail.com" className="block text-lg transition duration-300 hover:text-white">northindustrie@gmail.com</a>
                <a href="tel:+48500138948" className="block text-lg transition duration-300 hover:text-white">+48 500 138 948</a>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="mx-auto max-w-3xl space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-[#ff6b6b]">{page === 'privacy' ? (language === 'pl' ? 'Polityka prywatności' : 'Privacy Policy') : page === 'terms' ? (language === 'pl' ? 'Regulamin' : 'Terms of Service') : (language === 'pl' ? 'Usunięcie konta' : 'Delete account')}</p>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">{legalContent.title}</h1>
            <p className="text-lg text-zinc-300">{legalContent.intro}</p>
          </div>

          <div className="space-y-4 text-zinc-300">
            <p>{legalContent.body1}</p>
            <p>{legalContent.body2}</p>
            <p>{legalContent.body3}</p>
          </div>
        </div>
      )}
    </PageShell>
  );
}
