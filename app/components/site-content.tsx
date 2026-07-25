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
    'Zaproszenia e-mail dla zawodników',
    'Zarządzanie grupami i indywidualnymi zawodnikami',
    'Prywatna biblioteka technik z filmami',
    'Przegląd poprzedniego treningu i kolejnych planów',
    'Planowanie treningów w jednym miejscu',
    'Śledzenie frekwencji',
    'Historia treningów i postępów',
    'Powiadomienia dla trenerów i zawodników',
    'Prywatne materiały techniczne',
    'Tworzenie własnych baz technik',
    'Komunikacja w ramach grupy',
    'Przyszłe analizy AI postępów',
    'Tworzenie własnych podkategorii i struktur materiałów',
  ],
  en: [
    'Email invitations for athletes',
    'Group and individual athlete management',
    'Private technique library with video support',
    'Review of previous sessions and upcoming plans',
    'Training planning in one place',
    'Attendance tracking',
    'Training and progress history',
    'Notifications for coaches and athletes',
    'Private technical materials',
    'Create your own technique databases',
    'Group-based communication',
    'Future AI progress analysis',
    'Create your own subcategories and material structures',
  ],
};

const phoneScreens = [
  '/Screeny/0e39e543-923f-4e69-97c3-32484dc4722d (1).jpg',
  '/Screeny/1263d6fd-6617-403b-a8ab-458bfe2a42ac.jpg',
  '/Screeny/1949f5ce-dc4a-4888-81e1-596981b084e9.jpg',
  '/Screeny/499e1c99-8505-4f4b-bae5-1113473af91e.jpg',
  '/Screeny/4cfe045f-13a1-4a45-a751-11b3c169a124.jpg',
  '/Screeny/8079ac5c-09fa-4744-98c8-ce5da9e8629b.jpg',
  '/Screeny/a0a8ce6c-88bd-429f-b5e1-fd57a73b6ab6.jpg',
  '/Screeny/bb917423-d87d-4175-937a-315e70bb282c.jpg',
];

const reasons = {
  pl: [
    {
      title: 'Spójna komunikacja z każdym zawodnikiem',
      body: 'Zachowuj kontakt z zawodnikami i grupami bez rozproszenia w wiadomościach, mailach i notatkach na różnych platformach.',
    },
    {
      title: 'Uczenie oparte na jasnych materiałach',
      body: 'Każdy zawodnik dostaje dostęp do planu, poprzedniego treningu i prywatnych technik w jednym miejscu.',
    },
    {
      title: 'Pełne wsparcie dla pracy trenera',
      body: 'OSS ułatwia zarządzanie grupami, frekwencją, historią treningów i materiałami edukacyjnymi bez zbędnego chaosu.',
    },
    {
      title: 'Dobrze dopasowane do jiu-jitsu',
      body: 'Platforma została zaprojektowana z myślą o realnym rytmie pracy trenerów i potrzebach zawodników w tej dyscyplinie.',
    },
  ],
  en: [
    {
      title: 'Clear communication with every athlete',
      body: 'Keep athletes and training groups connected without scattered messages, emails, and notes across different tools.',
    },
    {
      title: 'Learning built around clear materials',
      body: 'Every athlete can access plans, previous sessions, and private techniques from one structured experience.',
    },
    {
      title: 'Complete support for coaching work',
      body: 'OSS simplifies group management, attendance, training history, and educational materials without unnecessary friction.',
    },
    {
      title: 'Built for the realities of Jiu-Jitsu',
      body: 'The platform is shaped around the real workflow of coaches and the needs of athletes in this discipline.',
    },
  ],
};

const spotlightPoints = {
  pl: [
    {
      title: 'Zaproszenia e-mail w kilka sekund',
      body: 'Trenerzy dodają zawodników i grupy do OSS bez skomplikowanej rejestracji i bez rozpraszania uwagi od treningu.',
    },
    {
      title: 'Przegląd poprzedniego i kolejnego treningu',
      body: 'Zawodnicy mają szybki wgląd w ostatnią sesję, nadchodzący plan i najważniejsze informacje dla swojej grupy.',
    },
    {
      title: 'Zarządzanie grupami i zawodnikami',
      body: 'Trener może pracować z całymi grupami albo indywidualnymi zawodnikami, zachowując pełną kontrolę nad dostępem i komunikacją.',
    },
    {
      title: 'Przyszłość z AI',
      body: 'OSS jest już projektowane pod kątem przyszłych analiz postępów zawodników i jeszcze bardziej inteligentnego wsparcia dla trenerów.',
    },
  ],
  en: [
    {
      title: 'Email invitations in seconds',
      body: 'Coaches add athletes and groups to OSS without lengthy setup and without pulling focus away from training.',
    },
    {
      title: 'A clear view of past and upcoming training',
      body: 'Athletes can quickly review the latest session, the next plan, and the key updates relevant to their group.',
    },
    {
      title: 'Manage groups and individual athletes',
      body: 'A coach can work with full groups or individual athletes while maintaining full control over access and communication.',
    },
    {
      title: 'Built for the AI future',
      body: 'OSS is already being shaped around future athlete progress analysis and smarter support for coaches.',
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
      title: 'Nowoczesna platforma do zarządzania treningiem i rozwojem zawodników.',
      subtitle:
        'North Industrie rozwija OSS – system dla trenerów, klubów i uczniów brazylijskiego jiu-jitsu, który łączy komunikację, planowanie i edukację w jednym miejscu.',
      body: 'Projektujemy narzędzia, które pomagają klubom działać sprawniej, lepiej komunikować się z zawodnikami i budować uporządkowany proces rozwoju.',
      ctaPrimary: 'Umów demo',
      ctaSecondary: 'Poznaj OSS',
      aboutTitle: 'Minimalistycznie. Spójnie. Efektywnie.',
      aboutBody:
        'North Industrie buduje premiumowe doświadczenia cyfrowe dla sportu i biznesu. Łączymy przejrzysty design z praktycznymi workflowami, aby trenerzy mogli skupić się na pracy z ludźmi, a nie na zarządzaniu narzędziami. Wszystko jest w jednej aplikacji.',
      featuresTitle: 'Funkcje, które naprawdę wspierają codzienną pracę klubu',
      whyTitle: 'Dlaczego OSS',
      contactTitle: 'Chcesz wdrożyć OSS w swoim klubie?',
      contactBody:
        'Napisz do nas, jeśli chcesz zobaczyć, jak OSS może uporządkować komunikację, treningi i rozwój zawodników w Twoim klubie.',
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
      title: 'A modern platform for managing training and athlete development.',
      subtitle:
        'North Industrie develops OSS – a system for coaches, clubs and Brazilian Jiu-Jitsu students that brings communication, planning and education into one place.',
      body: 'We design tools that help clubs operate more smoothly, communicate better with athletes, and build a structured development process.',
      ctaPrimary: 'Book a demo',
      ctaSecondary: 'Explore OSS',
      aboutTitle: 'Minimal by design. Clear in practice.',
      aboutBody:
        'North Industrie builds premium digital experiences for sport and business. We combine calm design with practical workflows so coaches can focus on working with people instead of managing tools. Everything is in one app.',
      featuresTitle: 'Features that support the daily work of a club',
      whyTitle: 'Why OSS',
      contactTitle: 'Would you like to bring OSS into your club?',
      contactBody:
        'Get in touch if you want to see how OSS can organize communication, training, and athlete development in your club.',
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
  const [language, setLanguage] = useState<Locale>('pl');
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
          <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#070707] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.35)] sm:p-10 lg:p-16">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <Image
                src="/525e1872-284e-408f-9244-7fcbb480f7c2.jpg"
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="absolute bottom-[-2.5rem] right-[-1.5rem] h-[24rem] w-[24rem] object-cover object-center opacity-45 grayscale sm:h-[30rem] sm:w-[30rem] lg:h-[36rem] lg:w-[36rem]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04),rgba(255,77,77,0.08),rgba(2,2,2,0.95))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,77,77,0.18),transparent_38%)]" />
              <div className="absolute right-[-4rem] top-[-4rem] h-[20rem] w-[20rem] rounded-full border border-white/10 bg-white/5 blur-3xl sm:h-[24rem] sm:w-[24rem] lg:h-[30rem] lg:w-[30rem]" />
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
                    {language === 'pl' ? 'Jedno miejsce dla treningów, komunikacji i rozwoju' : 'One place for training, communication and growth'}
                  </h2>
                  <p className="text-zinc-300">
                    {language === 'pl'
                      ? 'Zastąp rozproszone narzędzia jednym spokojnym systemem, który wspiera treningi, kontakt z zawodnikami i rozwój klubu.'
                      : 'Replace scattered tools with one calm system that supports training, athlete communication, and club growth.'}
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

          <section className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-black/20 p-6 sm:p-8" data-reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.35em] text-[#ff8f8f]">{language === 'pl' ? 'Dostępne wkrótce' : 'Coming soon'}</p>
                <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  {language === 'pl' ? 'Pobierz wkrótce z Google Play i App Store' : 'Download soon from Google Play and the App Store'}
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="flex items-center gap-3 rounded-[1rem] border border-white/10 bg-black/20 px-4 py-3 transition hover:border-[#ff4d4d]/60 hover:bg-white/10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#ff8f8f]">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                      <path d="M3 2.75A.75.75 0 0 1 3.75 2h10.5a.75.75 0 0 1 .75.75v6.5H3.75A.75.75 0 0 1 3 8.5V2.75Zm10.5 8.25v10.5a.75.75 0 0 0 .75.75h4.5A.75.75 0 0 0 19.5 21V10.75H13.5Zm-10.5 0h10.5v10.5a.75.75 0 0 1-.75.75H3.75A.75.75 0 0 1 3 21V11Zm13.5-8.25h4.5A.75.75 0 0 1 21 3.5v4.5h-4.5V3.5a.75.75 0 0 0-.75-.75Z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">{language === 'pl' ? 'Dostępne wkrótce' : 'Coming soon'}</p>
                    <p className="text-sm font-semibold text-white">Google Play</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 rounded-[1rem] border border-white/10 bg-black/20 px-4 py-3 transition hover:border-[#ff4d4d]/60 hover:bg-white/10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#ff8f8f]">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                      <path d="M16.24 8.6c-.1-1.94 1.59-2.88 1.66-2.92-.91-1.33-2.32-1.52-2.83-1.54-1.2-.12-2.35.71-2.97.71-.62 0-1.58-.69-2.59-.67-1.33.02-2.56.77-3.24 1.96-1.38 2.39-.35 5.92 1 7.86.66.95 1.46 2.02 2.5 1.98 1-.04 1.38-.64 2.58-.64 1.2 0 1.54.64 2.59.62 1.07-.02 1.74-.97 2.39-1.93.76-1.11 1.07-2.18 1.08-2.24-.02-.01-2.07-.8-2.07-3.18ZM14.46 2.4c.51-.62.85-1.48.75-2.34-.72.03-1.59.48-2.1 1.1-.46.53-.87 1.38-.76 2.2.81.06 1.63-.42 2.11-0.96Z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">{language === 'pl' ? 'Dostępne wkrótce' : 'Coming soon'}</p>
                    <p className="text-sm font-semibold text-white">App Store</p>
                  </div>
                </a>
              </div>
            </div>
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

          <section className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-black/20 p-8 lg:p-12" data-reveal>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.35em] text-[#ff8f8f]">{language === 'pl' ? 'Wideo produktu' : 'Product video'}</p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                  {language === 'pl' ? 'Zobacz OSS w ruchu' : 'See OSS in motion'}
                </h2>
                <p className="mt-4 text-lg leading-8 text-zinc-300">
                  {language === 'pl'
                    ? 'Wciągnij się w ułatwiający system pracy klubu i współpracy ze swoimi podopiecznymi — a cała historia zaczyna się tak…'
                    : 'Step into a system that makes club work and collaboration with your athletes easier — and the whole story begins like this…'}
                </p>
              </div>
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/25 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
                <video
                  src="/a1a0fcdd-8323-4207-bd22-556dd129e62e.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="aspect-video w-full rounded-[1.25rem] object-cover"
                />
              </div>
            </div>
          </section>

          <section id="screenshots" className="rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:p-12" data-reveal>
            <div className="mb-8 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#ff8f8f]">{language === 'pl' ? 'Screeny' : 'Screens'}</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                {language === 'pl' ? 'Produkt premium, który wspiera codzienną pracę trenera, mnóstwo narzędzi w jednej aplikacji.' : 'A premium product that supports the everyday work of a coach, with a wide range of tools in one app.'}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {phoneScreens.map((screen) => (
                <div key={screen} className="rounded-[1.75rem] border border-white/10 bg-black/25 p-4">
                  <div className="mx-auto flex max-w-[240px] justify-center rounded-[2rem] border border-white/10 bg-zinc-950 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                    <div className="w-full rounded-[1.6rem] border border-white/10 bg-black p-2">
                      <div className="mb-3 flex justify-center">
                        <div className="h-5 w-24 rounded-full bg-black/80" />
                      </div>
                      <Image src={screen} alt="OSS app screen preview" width={720} height={1280} className="h-[420px] w-full rounded-[1.15rem] object-cover" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="why" className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-black/60 to-[#1a1a1a] p-8 lg:p-12" data-reveal>
            <div className="mb-8 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#ff8f8f]">{homeContent.whyTitle}</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{language === 'pl' ? 'Systemy, które pomagają klubom działać z większą klarownością' : 'Systems that help clubs operate with greater clarity'}</h2>
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
