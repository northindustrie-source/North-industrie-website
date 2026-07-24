'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PageShell } from './page-shell';

type PageKey = 'home' | 'privacy' | 'terms' | 'delete-account';

type SiteContentProps = {
  page: PageKey;
};

type Locale = 'pl' | 'en';

const featureList = {
  pl: [
    'Połączenie trener–zawodnik',
    'Zarządzanie grupą',
    'Prywatna biblioteka technik',
    'Nauka oparta na filmach',
    'Planowanie treningów',
    'Frekwencja',
    'Historia treningów',
    'Powiadomienia',
    'Postępy zawodników',
    'Biblioteka technik',
    'Planowanie treningów',
    'Zarządzanie grupami',
  ],
  en: [
    'Coach-to-athlete connection',
    'Group management',
    'Private technique library',
    'Video-based learning',
    'Training planning',
    'Attendance tracking',
    'Training history',
    'Notifications',
    'Athlete progress',
    'Technique library',
    'Training planning',
    'Group management',
  ],
};

const reasons = {
  pl: [
    {
      title: 'Lepsza komunikacja między trenerem a zawodnikiem',
      body: 'Utrzymuj kontakt z zawodnikami i grupami treningowymi w jednym miejscu, bez chaosu i rozproszonych wiadomości.',
    },
    {
      title: 'Spersonalizowane doświadczenie nauki',
      body: 'Dostarczaj zawodnikom indywidualne materiały, plany treningów i techniki dopasowane do ich potrzeb.',
    },
    {
      title: 'Kompleksowa platforma edukacji technicznej',
      body: 'Łącz edukację na macie, w domu i poza salą, tworząc pełen proces nauki dla całego klubu.',
    },
    {
      title: 'Zbudowane specjalnie dla brazylijskiego jiu-jitsu',
      body: 'OSS zostało zaprojektowane z myślą o realnych potrzebach trenerów i zawodników tej dyscypliny.',
    },
  ],
  en: [
    {
      title: 'Better communication between coaches and athletes',
      body: 'Keep every athlete and training group connected in one place without scattered messages or missed updates.',
    },
    {
      title: 'Personalized learning experience',
      body: 'Deliver tailored plans, notes, and techniques so each athlete can learn with more clarity and focus.',
    },
    {
      title: 'Complete technical education platform',
      body: 'Bring training sessions, review materials, and long-term development together in one premium experience.',
    },
    {
      title: 'Built specifically for Brazilian Jiu-Jitsu',
      body: 'OSS is designed around the real needs of coaches and athletes in this discipline.',
    },
  ],
};

const spotlightPoints = {
  pl: [
    {
      title: 'Zaproszenia e-mail',
      body: 'Trenerzy zapraszają zawodników i grupy dołączenia do OSS w kilka sekund, bez złożonych konfiguracji.',
    },
    {
      title: 'Przegląd treningów',
      body: 'Zawodnicy widzą poprzednią sesję oraz nadchodzący plan treningowy w jednym, uporządkowanym miejscu.',
    },
    {
      title: 'Zarządzanie zespołem',
      body: 'Pracuj z grupami i indywidualnymi zawodnikami, zachowując pełną kontrolę nad dostępem i komunikacją.',
    },
    {
      title: 'Przyszłość AI',
      body: 'OSS jest już przygotowane na przyszłą analizę postępów zawodników z wykorzystaniem AI.',
    },
  ],
  en: [
    {
      title: 'Email invitations',
      body: 'Coaches invite athletes and training groups in seconds, without complicated setup or brittle admin work.',
    },
    {
      title: 'Training overview',
      body: 'Athletes can review the previous session and upcoming plan from one calm, focused experience.',
    },
    {
      title: 'Team management',
      body: 'Work with groups and individual athletes while keeping access, workflow, and communication streamlined.',
    },
    {
      title: 'AI-ready future',
      body: 'OSS is already designed for future athlete progress analysis powered by AI.',
    },
  ],
};

const stats = {
  pl: [
    { value: '100%', label: 'kontrola nad komunikacją' },
    { value: '24/7', label: 'dostęp do materiałów' },
    { value: '∞', label: 'możliwości rozwoju' },
  ],
  en: [
    { value: '100%', label: 'control over communication' },
    { value: '24/7', label: 'access to training materials' },
    { value: '∞', label: 'room to grow' },
  ],
};

const faqItems = {
  pl: [
    {
      question: 'Czy OSS działa dla małych klubów i większych organizacji?',
      answer: 'Tak. OSS jest projektowane tak, aby dobrze wspierać zarówno małe grupy treningowe, jak i większe kluby z wieloma zawodnikami, trenerami i działaniami.',
    },
    {
      question: 'Czy mogę tworzyć własne bazy technik i materiały?',
      answer: 'Tak. Trenerzy mogą budować prywatne bazy technik z filmami, zdjęciami, opisami i kategoriami, które są dostępne tylko dla wybranych grup lub zawodników.',
    },
    {
      question: 'Czy zawodnicy mają dostęp do historii treningów?',
      answer: 'Tak. Zawodnicy mogą przeglądać poprzednie treningi, nadchodzące plany i ważne informacje bezpośrednio w aplikacji.',
    },
    {
      question: 'Czy OSS jest gotowe na przyszłość?',
      answer: 'Tak. Platforma jest rozwijana z myślą o przyszłych analitykach postępów zawodników, automatyzacji oraz jeszcze głębszej integracji AI.',
    },
  ],
  en: [
    {
      question: 'Does OSS work for small clubs and larger organizations?',
      answer: 'Yes. OSS is designed to support both smaller training groups and larger clubs with many athletes, coaches, and ongoing operations.',
    },
    {
      question: 'Can I build my own technique databases and materials?',
      answer: 'Yes. Coaches can create private technique libraries with videos, photos, descriptions, and categories that remain available only to selected groups or athletes.',
    },
    {
      question: 'Do athletes have access to training history?',
      answer: 'Yes. Athletes can review previous sessions, upcoming plans, and important notes directly in the app.',
    },
    {
      question: 'Is OSS future-ready?',
      answer: 'Yes. The platform is being developed with future athlete progress analytics, automation, and deeper AI integrations in mind.',
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

type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

type LegalContent = {
  title: string;
  intro: string;
  sections: LegalSection[];
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
      intro:
        'Niniejsza polityka prywatności opisuje, jak North Industrie zbiera, wykorzystuje, przechowuje i przekazuje Twoje dane osobowe w związku z aplikacją OSS dostępnej w Google Play i Apple App Store.',
      sections: [
        {
          heading: '1. Administrator danych',
          paragraphs: [
            'Administratorem danych osobowych jest North Industrie, działający pod adresem kontaktowym northindustrie@gmail.com.',
            'W sprawach związanych z ochroną danych możesz kontaktować się z nami bezpośrednio pod adresem e-mail lub telefonicznie pod numerem +48 500 138 948.',
          ],
        },
        {
          heading: '2. Jakie dane zbieramy',
          paragraphs: [
            'W zależności od funkcji aplikacji możemy zbierać dane identyfikacyjne, dane logowania, dane o profilu użytkownika, dane o treningach i frekwencji, dane płatności, dane o kontaktach oraz informacje techniczne, takie jak adres IP, identyfikatory urządzenia i dane diagnostyczne.',
          ],
        },
        {
          heading: '3. Cele i podstawy prawne',
          paragraphs: [
            'Dane przetwarzamy w celu świadczenia usługi, obsługi konta, zarządzania treningami, płatnościami, powiadomieniami, statystykami oraz poprawy jakości aplikacji.',
            'Podstawą przetwarzania może być umowa z użytkownikiem, zgoda, realizacja obowiązków prawnych lub uzasadniony interes prawny.',
          ],
        },
        {
          heading: '4. Przekazywanie danych',
          paragraphs: [
            'Dane mogą być przekazywane dostawcom usług hostingowych, analitycznych, płatniczych oraz podmiotom wspierającym obsługę aplikacji, zawsze w zakresie niezbędnym do realizacji celu.',
          ],
        },
        {
          heading: '5. Prawa użytkownika',
          list: [
            'prawo dostępu do danych',
            'prawo do sprostowania i usunięcia danych',
            'prawo do ograniczenia przetwarzania',
            'prawo do sprzeciwu',
            'prawo do przenoszenia danych',
            'prawo do cofnięcia zgody',
          ],
          paragraphs: [
            'Możesz skorzystać z tych praw, kontaktując się z nami pod adresem northindustrie@gmail.com. W przypadku naruszenia przepisów o ochronie danych masz prawo złożyć skargę do właściwego organu nadzorczego.',
          ],
        },
        {
          heading: '6. Okres przechowywania',
          paragraphs: [
            'Dane przechowujemy przez okres niezbędny do realizacji celów usługi, zgodnie z obowiązkami prawnymi oraz zasadami bezpieczeństwa. Po zakończeniu okresu przechowywania dane są usuwane lub anonimizowane.',
          ],
        },
      ],
    },
    terms: {
      title: 'Regulamin usługi',
      intro:
        'Niniejszy regulamin określa zasady korzystania z aplikacji OSS oraz prawa i obowiązki użytkownika i North Industrie.',
      sections: [
        {
          heading: '1. Definicje i zakres usługi',
          paragraphs: [
            'OSS jest aplikacją webową i mobilną przeznaczoną dla trenerów, klubów i zawodników. Umożliwia zarządzanie grupami, treningami, frekwencją, płatnościami, postępami zawodników, powiadomieniami i statystykami.',
          ],
        },
        {
          heading: '2. Rejestracja i konto',
          paragraphs: [
            'Aby korzystać z pełnej funkcjonalności aplikacji, użytkownik musi zarejestrować konto i podać prawidłowe dane. Użytkownik odpowiada za bezpieczeństwo loginu, hasła oraz za wszelkie działania wykonywane z jego konta.',
          ],
        },
        {
          heading: '3. Zasady użytkowania',
          paragraphs: [
            'Użytkownik zobowiązuje się do korzystania z aplikacji zgodnie z prawem, dobrymi obyczajami oraz niniejszym regulaminem. Zabronione jest wykorzystywanie aplikacji do nielegalnych działań, spamowania, naruszania prywatności innych osób lub prób obejścia zabezpieczeń.',
          ],
        },
        {
          heading: '4. Własność intelektualna',
          paragraphs: [
            'Wszystkie prawa do aplikacji, jej logo, treści, znaku towarowego, interfejsu i kodu źródłowego należą do North Industrie lub jej licencjobiorców. Użytkownik nie uzyskuje żadnych praw własności do tych elementów.',
          ],
        },
        {
          heading: '5. Płatności i opłaty',
          paragraphs: [
            'Jeżeli aplikacja oferuje usługi płatne, użytkownik zobowiązuje się do uiszczenia opłat zgodnie z aktualną cennikiem. Opłaty mogą być naliczane w zależności od wybranych funkcji, liczby użytkowników lub okresu subskrypcji.',
          ],
        },
        {
          heading: '6. Odpowiedzialność i rozwiązanie umowy',
          paragraphs: [
            'North Industrie nie ponosi odpowiedzialności za straty pośrednie, incidentalne, wynikowe ani za szkody związane z przerwaniem usługi, utratą danych lub niewłaściwym wykorzystaniem aplikacji. North Industrie może zawiesić lub zakończyć dostęp do aplikacji w przypadku naruszenia regulaminu.',
          ],
        },
        {
          heading: '7. Prawo właściwe',
          paragraphs: [
            'Spory wynikające z korzystania z aplikacji rozstrzygane są zgodnie z prawem polskim, chyba że przepisy prawa powszechnie obowiązującego wymagają innego rozwiązania.',
          ],
        },
      ],
    },
    delete: {
      title: 'Usunięcie konta i danych',
      intro:
        'Możesz w każdej chwili zażądać usunięcia swojego konta i danych osobowych z aplikacji OSS.',
      sections: [
        {
          heading: '1. Jak złożyć żądanie',
          paragraphs: [
            'Aby usunąć konto, wyślij wiadomość na adres northindustrie@gmail.com z tematem „Data Deletion Request”. Podaj adres e-mail powiązany z kontem oraz krótki opis żądania.',
          ],
        },
        {
          heading: '2. Co zostanie usunięte',
          paragraphs: [
            'Po otrzymaniu żądania usuniemy dane identyfikacyjne, dane profilu, historię treningów, dane frekwencji, informacje o płatnościach oraz inne dane osobowe powiązane z kontem, o ile nie obowiązuje dłuższe przechowywanie na podstawie przepisów prawa.',
          ],
        },
        {
          heading: '3. Termin realizacji',
          paragraphs: [
            'Zazwyczaj realizujemy żądanie w rozsądnym czasie, nie później niż w terminach przewidzianych przez obowiązujące przepisy prawa i nasze procedury bezpieczeństwa.',
          ],
        },
        {
          heading: '4. Wyjątki',
          paragraphs: [
            'Niektóre dane mogą być zachowane, jeżeli ich przechowywanie jest wymagane do wypełnienia obowiązków prawnych, rozpatrzenia sporów, obrony praw lub zapewnienia bezpieczeństwa systemu.',
          ],
        },
      ],
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
      intro:
        'This privacy policy explains how North Industrie collects, uses, stores, and transfers your personal data in connection with the OSS application available on Google Play and the Apple App Store.',
      sections: [
        {
          heading: '1. Data controller',
          paragraphs: [
            'The controller of your personal data is North Industrie, reachable at northindustrie@gmail.com.',
            'For privacy-related requests, you may contact us by email or by phone at +48 500 138 948.',
          ],
        },
        {
          heading: '2. Data we collect',
          paragraphs: [
            'Depending on the features used, we may collect account information, profile data, training and attendance records, payment details, contact information, and technical data such as IP addresses, device identifiers, and diagnostic information.',
          ],
        },
        {
          heading: '3. Purposes and legal bases',
          paragraphs: [
            'We process your data to provide the service, manage accounts, handle training and attendance workflows, process payments, deliver notifications, generate statistics, and improve the app.',
            'The legal basis may include performance of a contract, your consent, legal obligations, or a legitimate interest.',
          ],
        },
        {
          heading: '4. Data sharing',
          paragraphs: [
            'We may share data with hosting, analytics, payment, and support providers where necessary to operate the service, always subject to appropriate confidentiality and security requirements.',
          ],
        },
        {
          heading: '5. Your rights',
          list: [
            'the right to access your data',
            'the right to rectification and erasure',
            'the right to restrict processing',
            'the right to object',
            'the right to data portability',
            'the right to withdraw consent',
          ],
          paragraphs: [
            'You may exercise these rights by contacting us at northindustrie@gmail.com. If you believe your rights have been infringed, you may lodge a complaint with the competent data protection authority.',
          ],
        },
        {
          heading: '6. Retention',
          paragraphs: [
            'We keep personal data only for as long as necessary for the purposes described in this policy and as required by applicable law. After that, data is deleted or anonymized.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms of Service',
      intro:
        'These terms govern your use of the OSS application and the rights and obligations of both you and North Industrie.',
      sections: [
        {
          heading: '1. Service description',
          paragraphs: [
            'OSS is a web and mobile application designed for coaches, clubs, and athletes. It supports group management, training planning, attendance tracking, payments, athlete progress, notifications, and statistics.',
          ],
        },
        {
          heading: '2. Account registration',
          paragraphs: [
            'To access the full functionality of the service, you must create an account and provide accurate information. You are responsible for protecting your login credentials and for any activity conducted through your account.',
          ],
        },
        {
          heading: '3. Acceptable use',
          paragraphs: [
            'You agree to use the application lawfully and in accordance with these terms. You may not use the service for illegal activity, spam, harassment, privacy violations, or attempts to bypass security controls.',
          ],
        },
        {
          heading: '4. Intellectual property',
          paragraphs: [
            'All rights in the application, its branding, content, interface, and source code belong to North Industrie or its licensors. You do not receive ownership rights to any of these materials.',
          ],
        },
        {
          heading: '5. Payments and fees',
          paragraphs: [
            'If the service includes paid features, you agree to pay all applicable fees according to the current pricing and billing terms. Charges may vary by selected features, number of users, or subscription duration.',
          ],
        },
        {
          heading: '6. Liability and termination',
          paragraphs: [
            'North Industrie shall not be liable for indirect, incidental, or consequential damages arising from service interruption, data loss, or misuse of the application. North Industrie may suspend or terminate access where these terms are breached.',
          ],
        },
        {
          heading: '7. Governing law',
          paragraphs: [
            'Any disputes arising from the use of the service are governed by the laws of Poland, unless mandatory provisions of applicable law require otherwise.',
          ],
        },
      ],
    },
    delete: {
      title: 'Delete account and data',
      intro:
        'You may request deletion of your account and personal data from the OSS application at any time.',
      sections: [
        {
          heading: '1. How to submit a request',
          paragraphs: [
            'To delete your account, send an email to northindustrie@gmail.com with the subject “Data Deletion Request”. Include the email address associated with the account and a brief description of your request.',
          ],
        },
        {
          heading: '2. What will be deleted',
          paragraphs: [
            'Upon receiving your request, we will delete account credentials, profile information, training history, attendance data, payment information, and other personal data linked to the account, unless legal retention obligations require us to keep some information.',
          ],
        },
        {
          heading: '3. Processing time',
          paragraphs: [
            'We aim to process deletion requests within a reasonable time frame and in line with applicable law and internal security procedures.',
          ],
        },
        {
          heading: '4. Exceptions',
          paragraphs: [
            'Some information may be retained where retention is required by law, necessary to resolve disputes, defend legal rights, or protect the security of the service.',
          ],
        },
      ],
    },
  },
};

export function SiteContent({ page }: SiteContentProps) {
  const [language, setLanguage] = useState<Locale>('en');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const currentPage = page;

  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    if (!revealElements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

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
        <div className="space-y-24">
          <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,77,77,0.2),_transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.10),rgba(15,15,15,0.68))] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.35)] sm:p-10 lg:p-16">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#ff4d4d]/25 blur-3xl" />
              <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <Image
                src="/oss-logo.svg"
                alt="OSS logo"
                width={640}
                height={640}
                priority
                className="absolute right-[-4rem] top-[-2rem] h-[24rem] w-[24rem] max-w-none opacity-20 sm:h-[28rem] sm:w-[28rem]"
              />
            </div>

            <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="space-y-8" data-reveal>
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
                  <a href="#oss" className="rounded-full border border-white/15 px-6 py-3 font-semibold text-zinc-200 transition duration-300 hover:-translate-y-0.5 hover:border-[#ff4d4d] hover:text-[#ff8f8f]">
                    {homeContent.ctaSecondary}
                  </a>
                </div>
              </div>

              <div className="glass-card rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl" data-reveal>
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#ff8f8f]">North Industrie</p>
                  <h2 className="text-2xl font-semibold text-white">
                    {language === 'pl' ? 'Nowoczesne operacje, spokojny rozwój' : 'Modern operations, calmer growth'}
                  </h2>
                  <p className="text-zinc-300">
                    {language === 'pl'
                      ? 'Zastąp rozproszone narzędzia jedną elegancką platformą do zarządzania treningami, komunikacją i zaangażowaniem.'
                      : 'Replace scattered tools with one elegant system for training, communication, and engagement in real time.'}
                  </p>
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {featureList[language].slice(0, 4).map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-zinc-200 transition duration-300 hover:border-[#ff4d4d]/60">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-3" data-reveal>
            {stats[language].map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.28em] text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </section>

          <section id="about" className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 transition duration-300 hover:border-[#ff4d4d]/30 lg:grid-cols-[0.9fr_1.1fr] lg:p-12" data-reveal>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#ff8f8f]">{language === 'pl' ? 'O North Industrie' : 'About North Industrie'}</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{homeContent.aboutTitle}</h2>
            </div>
            <p className="text-lg leading-8 text-zinc-300">{homeContent.aboutBody}</p>
          </section>

          <section id="oss" className="rounded-[2rem] border border-white/10 bg-black/20 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.28)] lg:p-12" data-reveal>
            <div className="mb-8 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#ff8f8f]">{language === 'pl' ? 'Aplikacja OSS' : 'OSS Application'}</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{homeContent.featuresTitle}</h2>
              <p className="mt-4 text-lg leading-8 text-zinc-300">
                {language === 'pl'
                  ? 'OSS łączy trenerów z zawodnikami i grupami treningowymi za pomocą zaproszeń e-mail, udostępniając jednocześnie prywatne materiały, plany treningowe i historię postępów.'
                  : 'OSS connects coaches with athletes and training groups through email invitations, while keeping private materials, plans, and progress history organized in one place.'}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {featureList[language].map((feature) => (
                <div key={feature} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#ff4d4d]/60 hover:bg-[#ff4d4d]/10">
                  <p className="text-lg font-medium text-white">{feature}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {spotlightPoints[language].map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-black/20 p-6">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-300">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="screenshots" className="rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:p-12" data-reveal>
            <div className="mb-8 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#ff8f8f]">{language === 'pl' ? 'Prezentacja aplikacji' : 'Product preview'}</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                {language === 'pl' ? 'Widok OSS, który wygląda premium i działa z przyjemnością' : 'A premium-looking OSS experience that feels effortless to use'}
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
                <Image src="/oss-dashboard-1.svg" alt="OSS coach dashboard preview" width={1200} height={760} className="w-full rounded-[1rem] border border-white/10" />
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {language === 'pl' ? 'Panel trenera' : 'Coach dashboard'}
                </h3>
                <p className="mt-3 leading-7 text-zinc-300">
                  {language === 'pl'
                    ? 'Zarządzaj grupami, planami treningowymi, frekwencją i historią bez rozpraszania uwagi.'
                    : 'Manage groups, plans, attendance, and history without adding friction to your daily routine.'}
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
                <Image src="/oss-dashboard-2.svg" alt="OSS athlete view preview" width={1200} height={760} className="w-full rounded-[1rem] border border-white/10" />
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {language === 'pl' ? 'Widok zawodnika' : 'Athlete experience'}
                </h3>
                <p className="mt-3 leading-7 text-zinc-300">
                  {language === 'pl'
                    ? 'Zawodnicy mają szybki dostęp do poprzedniego treningu, nadchodzących planów i prywatnych materiałów technicznych.'
                    : 'Athletes get immediate access to the previous session, upcoming plans, and private technique materials.'}
                </p>
              </div>
            </div>
          </section>

          <section id="why" className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-black/60 to-[#1a1a1a] p-8 lg:p-12" data-reveal>
            <div className="mb-8 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#ff8f8f]">{homeContent.whyTitle}</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{language === 'pl' ? 'Dobrze zaprojektowane systemy dla ambitnych klubów' : 'Thoughtful systems for ambitious clubs'}</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              {reasons[language].map((reason) => (
                <div key={reason.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-300">{reason.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="faq" className="rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:p-12" data-reveal>
            <div className="mb-8 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#ff8f8f]">FAQ</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                {language === 'pl' ? 'Najczęściej zadawane pytania' : 'Frequently asked questions'}
              </h2>
            </div>
            <div className="space-y-3">
              {faqItems[language].map((item, index) => {
                const isOpen = activeFaq === index;

                return (
                  <div key={item.question} className="rounded-2xl border border-white/10 bg-black/20">
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between px-5 py-4 text-left text-white"
                    >
                      <span className="text-lg font-medium">{item.question}</span>
                      <span className="text-2xl text-[#ff8f8f]">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen ? <p className="px-5 pb-5 leading-7 text-zinc-300">{item.answer}</p> : null}
                  </div>
                );
              })}
            </div>
          </section>

          <section id="contact" className="rounded-[2rem] border border-[#ff4d4d]/20 bg-[#ff4d4d]/10 p-8 lg:p-12" data-reveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.35em] text-[#ff8f8f]">{language === 'pl' ? 'Kontakt' : 'Contact'}</p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{homeContent.contactTitle}</h2>
                <p className="mt-4 text-lg leading-8 text-zinc-200">{homeContent.contactBody}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="mailto:northindustrie@gmail.com" className="rounded-full border border-white/15 bg-white/10 px-5 py-3 font-medium text-white transition hover:bg-white/20">
                    {language === 'pl' ? 'Napisz do nas' : 'Email us'}
                  </a>
                  <a href="tel:+48500138948" className="rounded-full border border-white/15 px-5 py-3 font-medium text-zinc-200 transition hover:border-[#ff8f8f] hover:text-white">
                    {language === 'pl' ? 'Zadzwoń' : 'Call us'}
                  </a>
                </div>
              </div>
              <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-black/20 p-6 text-zinc-100">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#ff8f8f]">Email</p>
                  <a href="mailto:northindustrie@gmail.com" className="mt-2 block text-lg transition hover:text-white">northindustrie@gmail.com</a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#ff8f8f]">Phone</p>
                  <a href="tel:+48500138948" className="mt-2 block text-lg transition hover:text-white">+48 500 138 948</a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#ff8f8f]">{language === 'pl' ? 'Dostępność' : 'Availability'}</p>
                  <p className="mt-2 text-zinc-300">{language === 'pl' ? 'Demos i wdrożenia na żądanie' : 'Demos and onboarding on request'}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="mx-auto max-w-4xl space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 sm:p-10">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-[#ff6b6b]">{page === 'privacy' ? (language === 'pl' ? 'Polityka prywatności' : 'Privacy Policy') : page === 'terms' ? (language === 'pl' ? 'Regulamin' : 'Terms of Service') : (language === 'pl' ? 'Usunięcie konta' : 'Delete account')}</p>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">{legalContent.title}</h1>
            <p className="text-lg leading-8 text-zinc-300">{legalContent.intro}</p>
          </div>

          <div className="space-y-8 text-zinc-300">
            {legalContent.sections.map((section) => (
              <section key={section.heading} className="space-y-3">
                <h2 className="text-xl font-semibold text-white">{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="leading-8">
                    {paragraph}
                  </p>
                ))}
                {section.list ? (
                  <ul className="list-disc space-y-2 pl-6 leading-8">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <h2 className="text-xl font-semibold text-white">{language === 'pl' ? 'Kontakt' : 'Contact'}</h2>
            <div className="mt-3 space-y-2 text-zinc-300">
              <p>{language === 'pl' ? 'Adres e-mail: northindustrie@gmail.com' : 'Email: northindustrie@gmail.com'}</p>
              <p>{language === 'pl' ? 'Telefon: +48 500 138 948' : 'Phone: +48 500 138 948'}</p>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
