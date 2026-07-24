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
    'Połączenie trener–zawodnik',
    'Zarządzanie grupą',
    'Prywatna biblioteka technik',
    'Nauka oparta na filmach',
    'Planowanie treningów',
    'Frekwencja',
    'Biblioteka technik',
    'Płatności',
    'Postępy zawodników',
    'Powiadomienia',
    'Statystyki',
    'Zarządzanie programem technicznym',
  ],
  en: [
    'Coach-to-athlete connection',
    'Group management',
    'Private technique library',
    'Video-based learning',
    'Training planning',
    'Attendance',
    'Technique library',
    'Payments',
    'Athlete progress',
    'Notifications',
    'Statistics',
    'Technical curriculum management',
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

          <section id="connection" className="mt-24 rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#ff8f8f]">{language === 'pl' ? 'Połączenie trenera i zawodnika' : 'Coach & Athlete Connection'}</p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{language === 'pl' ? 'Bezpieczne połączenie z indywidualnymi zawodnikami lub całymi grupami' : 'Secure connection with individual athletes or full training groups'}</h2>
                <p className="mt-4 text-lg leading-8 text-zinc-300">
                  {language === 'pl'
                    ? 'OSS pozwala trenerom bezpiecznie łączyć się z zawodnikami po prostu poprzez dodanie ich adresu e-mail. Po połączeniu zawodnicy mają dostęp do podsumowania poprzedniego treningu, planu kolejnego treningu, technik udostępnionych przez trenera, zdjęć i filmów, notatek, ogłoszeń oraz przypisanej grupy treningowej.'
                    : 'OSS lets coaches securely connect with athletes simply by adding their email address. Once connected, athletes can access a summary of the previous training session, the plan for the upcoming one, techniques shared by the coach, photos and videos, coach notes, important announcements, and their assigned training group.'}
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-[#ff8f8f]">{language === 'pl' ? 'Jak działa' : 'How it works'}</p>
                <ul className="mt-4 space-y-3 text-zinc-300">
                  <li>• {language === 'pl' ? 'Trener tworzy grupy zawodników i zarządza nimi w prosty sposób.' : 'The coach organizes athletes into groups and manages them with clarity.'}</li>
                  <li>• {language === 'pl' ? 'Informacje są udostępniane tylko wybranym zawodnikom lub konkretnym grupom.' : 'Information is shared only with selected athletes or specific training groups.'}</li>
                  <li>• {language === 'pl' ? 'Komunikacja pozostaje uporządkowana, bezpieczna i łatwa do śledzenia.' : 'Communication stays organized, secure, and easy to follow.'}</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="techniques" className="mt-24 rounded-[2rem] border border-white/10 bg-gradient-to-br from-black/60 to-[#1a1a1a] p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#ff8f8f]">{language === 'pl' ? 'Biblioteka technik' : 'Technique Library'}</p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{language === 'pl' ? 'Prywatna baza technik dostępna zawsze, także poza salą' : 'A private technique database available whenever athletes need to review it'}</h2>
                <p className="mt-4 text-lg leading-8 text-zinc-300">
                  {language === 'pl'
                    ? 'Każdy trener może tworzyć kompletnie prywatną bazę technik. Każda technika może zawierać filmy, zdjęcia, szczegółowe opisy, kategorie, pozycje i tagi. Zawodnicy mogą przeglądać materiały w dowolnym czasie i kontynuować naukę poza salą.'
                    : 'Every coach can create a completely private technique database. Each technique can include videos, photos, detailed descriptions, categories, positions, and tags. Athletes can review techniques at any time and continue learning outside the gym.'}
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-[#ff8f8f]">{language === 'pl' ? 'Co zawiera' : 'What it includes'}</p>
                <ul className="mt-4 space-y-3 text-zinc-300">
                  <li>• {language === 'pl' ? 'Filmy i zdjęcia technik' : 'Videos and photos'}</li>
                  <li>• {language === 'pl' ? 'Szczegółowe opisy i instrukcje' : 'Detailed descriptions and notes'}</li>
                  <li>• {language === 'pl' ? 'Kategorie, pozycje i tagi' : 'Categories, positions, and tags'}</li>
                  <li>• {language === 'pl' ? 'Dostęp dla wybranych grup lub zawodników' : 'Access for selected groups or athletes'}</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="why" className="mt-24 rounded-[2rem] border border-white/10 bg-gradient-to-br from-black/60 to-[#1a1a1a] p-8 lg:p-12">
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
