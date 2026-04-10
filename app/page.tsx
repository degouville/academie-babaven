export default function Home() {
  return (
    <>
      {/* Progress Bar */}
      <div className="progress-bar" id="progressBar"></div>

      {/* Navigation */}
      <nav className="nav" id="nav">
        <div className="max-w-300 mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 font-bold text-lg">
            <div className="nav-logo-icon">B</div>
            <span>Babaven Académie</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#benefices">Bénéfices</a>
            <a href="#cours">Cours</a>
            <a href="#tarifs">Tarifs</a>
            <a href="#faq">FAQ</a>
            <a href="https://babaven.com" target="_blank">Actualité IA &amp; Marketing</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://communaute.babaven.com" className="btn btn-secondary" target="_blank">Connexion</a>
            <a href="https://communaute.babaven.com/checkout/pro" className="btn btn-primary" target="_blank">S&apos;inscrire →</a>
          </div>

          <button className="menu-toggle" id="menuToggle" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="mobile-menu" id="mobileMenu">
        <button className="mobile-menu-close" id="mobileMenuClose"><i data-lucide="x" className="inline-flex items-center justify-center size-6 shrink-0"></i></button>
        <a href="#benefices">Bénéfices</a>
        <a href="#cours">Cours</a>
        <a href="#tarifs">Tarifs</a>
        <a href="#faq">FAQ</a>
        <a href="https://babaven.com" target="_blank">Actualité IA &amp; Marketing</a>
        <a href="https://communaute.babaven.com" className="btn btn-secondary" target="_blank">Connexion</a>
        <a href="https://communaute.babaven.com/checkout/pro" className="btn btn-primary" target="_blank">S&apos;inscrire →</a>
      </div>

      {/* Sticky CTA Bar */}
      <div className="sticky-cta" id="stickyCta">
        <div className="flex items-center justify-between max-w-300 mx-auto md:flex-row flex-col gap-4 text-center">
          <span className="text-white text-[15px] font-medium"><i data-lucide="flame" className="inline-flex items-center justify-center size-5 shrink-0 text-red" style={{ display: 'inline-flex', verticalAlign: 'middle' }}></i> <strong>Offre limitée</strong> — Rejoins 500+ entrepreneurs déjà formés</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="https://communaute.babaven.com/checkout/pro" className="btn btn-primary" target="_blank">S&apos;inscrire maintenant</a>
            <button className="bg-transparent border-none text-muted text-xl cursor-pointer p-1 ml-4" id="stickyCtaClose"><i data-lucide="x" className="inline-flex items-center justify-center size-5 shrink-0"></i></button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-25 pb-15 md:pt-30 md:pb-20 relative overflow-hidden" id="hero">
        <div className="hero-blob" id="heroBlob"></div>
        <div className="max-w-300 mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
            <div className="relative z-10 max-w-200">
              <div className="hero-badge">🌴 1ère académie IA · 100% francophone</div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-800 leading-tight mb-6 tracking-tight">
                Maîtrise l&apos;IA pour <span className="highlight">gagner plus</span>,<br /> en faisant <span className="highlight">moins</span>.
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-sub max-w-150 mb-10 leading-relaxed">
                Babaven Académie forme les entrepreneurs francophones à intégrer
                l&apos;IA concrètement dans leur business pour gagner du temps, générer
                plus de revenus, et prendre une longueur d&apos;avance sur la concurrence.
                100 % en français.
              </p>
              <div className="flex items-center gap-4 mb-12 flex-wrap md:flex-col md:items-stretch">
                <a href="https://communaute.babaven.com/checkout/pro" className="btn btn-primary btn-large" target="_blank">
                  Commencer maintenant →
                </a>
                <a href="#cours" className="btn btn-secondary btn-large">
                  Voir les cours ↓
                </a>
              </div>
              <div className="flex items-center gap-5 flex-wrap md:flex-col md:items-start">
                <div className="flex items-center">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=lea&backgroundColor=ffdfbf" alt="Avatar 1" />
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=karim&backgroundColor=c0aede" alt="Avatar 2" />
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=sofia&backgroundColor=ffd5dc" alt="Avatar 3" />
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=marc&backgroundColor=b6e3f4" alt="Avatar 4" />
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-left">
                    <div className="text-2xl font-extrabold text-ink flex items-center gap-0.5"><span className="counter" data-target="500">0</span>+</div>
                    <div className="text-[13px] text-muted font-medium">entrepreneurs formés</div>
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-extrabold text-ink flex items-center gap-0.5"><span className="counter" data-target="4.9" data-decimals="1">0</span><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex', verticalAlign: 'middle', marginLeft: '2px' }}></i></div>
                    <div className="text-[13px] text-muted font-medium">note moyenne</div>
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-extrabold text-ink flex items-center gap-0.5"><span className="counter" data-target="100">0</span>%</div>
                    <div className="text-[13px] text-muted font-medium">en français</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-10 hidden md:block">
              <img src="/images/etudiants-coworking.png" alt="Entrepreneurs en formation IA" className="hero-img-main" />
              <div className="hero-img-float hero-img-float-1">
                <img src="/images/claude-app.png" alt="Claude AI" />
              </div>
              <div className="hero-img-float hero-img-float-2">
                <img src="/images/claude-code-terminal.png" alt="Claude Code" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Marquee Section */}
      <section className="py-15 bg-bg overflow-hidden">
        <div className="max-w-300 mx-auto px-6">
          <p className="text-center text-sm font-medium text-muted mb-8 rv">+500 entrepreneurs déjà formés en Martinique, Guadeloupe, Sénégal, France, Guyane, Réunion</p>
        </div>
        <div className="marquee rv">
          <div className="marquee-track">
            {/* First set */}
            <div className="marquee-item"><img src="logo-partenaires/logo%20whaaat.png" alt="Whaaat" /></div>
            <div className="marquee-item"><img src="logo-partenaires/Logo%20entrepreneur%20d_outre-mer.jpg" alt="Entrepreneurs d'Outre-Mer" /></div>
            <div className="marquee-item"><img src="logo-partenaires/google%20icon.png" alt="Google" /></div>
            <div className="marquee-item"><img src="logo-partenaires/tiktok_PNG6.png" alt="TikTok" /></div>
            <div className="marquee-item"><img src="logo-partenaires/france%20antilles.jpg" alt="France Antilles" /></div>
            <div className="marquee-item"><img src="logo-partenaires/martinique%20la%20premi%C3%A8re.png" alt="Martinique la 1ère" /></div>
            <div className="marquee-item"><img src="logo-partenaires/proton%20vpn.png" alt="Proton" /></div>
            <div className="marquee-item"><img src="logo-partenaires/Opus_Clip_logo.png" alt="Opus Clip" /></div>
            {/* Duplicate set for seamless loop */}
            <div className="marquee-item"><img src="logo-partenaires/logo%20whaaat.png" alt="Whaaat" /></div>
            <div className="marquee-item"><img src="logo-partenaires/Logo%20entrepreneur%20d_outre-mer.jpg" alt="Entrepreneurs d'Outre-Mer" /></div>
            <div className="marquee-item"><img src="logo-partenaires/google%20icon.png" alt="Google" /></div>
            <div className="marquee-item"><img src="logo-partenaires/tiktok_PNG6.png" alt="TikTok" /></div>
            <div className="marquee-item"><img src="logo-partenaires/france%20antilles.jpg" alt="France Antilles" /></div>
            <div className="marquee-item"><img src="logo-partenaires/martinique%20la%20premi%C3%A8re.png" alt="Martinique la 1ère" /></div>
            <div className="marquee-item"><img src="logo-partenaires/proton%20vpn.png" alt="Proton" /></div>
            <div className="marquee-item"><img src="logo-partenaires/Opus_Clip_logo.png" alt="Opus Clip" /></div>
          </div>
        </div>
      </section>

      {/* Urgence Section */}
      <section className="py-25 bg-white" id="urgence">
        <div className="max-w-300 mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="rv">
              <span className="inline-block text-red text-xs font-bold uppercase tracking-wider mb-4">Le monde change. Maintenant.</span>
              <div className="urgence-title">
                Si tu n&apos;intègres pas l&apos;IA,<br />
                <span className="serif">quelqu&apos;un d&apos;autre le fera à ta place.</span>
              </div>
              <p className="text-[17px] text-sub leading-relaxed mt-6">
                L&apos;IA ne va pas remplacer les humains. Elle va remplacer ceux qui ne
                l&apos;utilisent pas. Et pendant que tu hésites, tes concurrents avancent.
              </p>
            </div>
            <div className="grid gap-6 stagger-container">
              <div className="pain-card rv">
                <div className="size-12 bg-white rounded-xl flex items-center justify-center text-2xl mb-4"><i data-lucide="clock" className="inline-flex items-center justify-center size-10 shrink-0 text-red"></i></div>
                <span className="text-xs font-bold uppercase tracking-wide text-muted">01</span>
                <h3>Chaque heure perdue a un coût réel</h3>
                <p>Les tâches répétitives que tu fais encore manuellement peuvent être automatisées. Chaque jour sans IA, c&apos;est du temps facturé au tarif le plus élevé : le tien.</p>
              </div>
              <div className="pain-card rv">
                <div className="size-12 bg-white rounded-xl flex items-center justify-center text-2xl mb-4"><i data-lucide="zap" className="inline-flex items-center justify-center size-10 shrink-0" style={{ color: '#f59e0b' }}></i></div>
                <span className="text-xs font-bold uppercase tracking-wide text-muted">02</span>
                <h3>Tes concurrents publient 5x plus vite</h3>
                <p>Avec l&apos;IA, un entrepreneur solo peut produire autant qu&apos;une équipe de 5. La compétition n&apos;attend pas que tu sois prêt·e.</p>
              </div>
              <div className="pain-card rv">
                <div className="size-12 bg-white rounded-xl flex items-center justify-center text-2xl mb-4"><i data-lucide="globe" className="inline-flex items-center justify-center size-10 shrink-0" style={{ color: '#6366f1' }}></i></div>
                <span className="text-xs font-bold uppercase tracking-wide text-muted">03</span>
                <h3>Les formations ne parlent pas pour toi</h3>
                <p>Tout est en anglais, avec des exemples hors contexte. Babaven Académie est la seule formation IA pensée pour la réalité caribéenne et africaine.</p>
              </div>
              <div className="pain-card rv">
                <div className="size-12 bg-white rounded-xl flex items-center justify-center text-2xl mb-4"><i data-lucide="trending-up" className="inline-flex items-center justify-center size-10 shrink-0" style={{ color: '#10b981' }}></i></div>
                <span className="text-xs font-bold uppercase tracking-wide text-muted">04</span>
                <h3>L&apos;avantage se construit maintenant</h3>
                <p>Les early adopters de l&apos;IA prendront 2 ans d&apos;avance sur les autres. Ne sois pas le dernier.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bénéfices Section */}
      <section className="py-25 bg-bg overflow-hidden" id="benefices">
        <div className="max-w-300 mx-auto px-6">
          <div className="text-center max-w-175 mx-auto mb-15 rv">
            <span className="inline-block text-red text-xs font-bold uppercase tracking-wider mb-4">Ce que tu gagnes concrètement</span>
            <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] font-extrabold leading-tight">La plus grande opportunité. <span className="serif">Des résultats.</span></h2>
            <p className="text-sub mt-4">Chaque module Babaven Académie est conçu pour que tu repartes avec quelque chose que tu peux appliquer le lendemain matin.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 stagger-container">
            <div className="benefice-card rv">
              <span className="absolute top-6 right-6 text-5xl font-extrabold text-line leading-none">01</span>
              <div className="size-11 bg-red/8 rounded-xl flex items-center justify-center text-[22px] mb-5 text-red"><i data-lucide="lightbulb" className="inline-flex items-center justify-center size-10 shrink-0 text-white"></i></div>
              <h3>Tu comprends l&apos;IA pour de vrai</h3>
              <p>Fini le jargon, les acronymes, les concepts flous. Tu sors de chaque module avec une idée claire que tu peux expliquer à un client, un associé, ou ton équipe.</p>
              <div className="text-sm font-bold text-red flex items-center gap-1.5">→ Des cours de 15min max à suivre à ton rythme</div>
            </div>
            <div className="benefice-card rv">
              <span className="absolute top-6 right-6 text-5xl font-extrabold text-line leading-none">02</span>
              <div className="size-11 bg-red/8 rounded-xl flex items-center justify-center text-[22px] mb-5 text-red"><i data-lucide="zap" className="inline-flex items-center justify-center size-10 shrink-0 text-white"></i></div>
              <h3>Tu récupères 8h par semaine</h3>
              <p>Les tâches qui te prennent des heures — emails, visuels, contenus, analyses — se font en minutes avec les bons outils IA.</p>
              <div className="text-sm font-bold text-red flex items-center gap-1.5">→ 8h/semaine récupérées en moyenne</div>
            </div>
            <div className="benefice-card rv">
              <span className="absolute top-6 right-6 text-5xl font-extrabold text-line leading-none">03</span>
              <div className="size-11 bg-red/8 rounded-xl flex items-center justify-center text-[22px] mb-5 text-red"><i data-lucide="trophy" className="inline-flex items-center justify-center size-10 shrink-0 text-white"></i></div>
              <h3>Tu prends de l&apos;avance dans ton métier</h3>
              <p>L&apos;IA est encore émergente. Aujourd&apos;hui c&apos;est le bon moment pour t&apos;imposer comme référence dans ton marché.</p>
              <div className="text-sm font-bold text-red flex items-center gap-1.5">→ Positionnement de pionnier IA</div>
            </div>
            <div className="benefice-card rv">
              <span className="absolute top-6 right-6 text-5xl font-extrabold text-line leading-none">04</span>
              <div className="size-11 bg-red/8 rounded-xl flex items-center justify-center text-[22px] mb-5 text-red"><i data-lucide="users" className="inline-flex items-center justify-center size-10 shrink-0 text-white"></i></div>
              <h3>Tu produis plus sans embaucher</h3>
              <p>Contenu, offres, emails de vente, visuels pro — tu fais le travail d&apos;une équipe de 3 en solo, sans payer de salaires supplémentaires.</p>
              <div className="text-sm font-bold text-red flex items-center gap-1.5">→ L&apos;équivalent de 3 employés pour 24€/mois</div>
            </div>
            <div className="benefice-card rv">
              <span className="absolute top-6 right-6 text-5xl font-extrabold text-line leading-none">05</span>
              <div className="size-11 bg-red/8 rounded-xl flex items-center justify-center text-[22px] mb-5 text-red"><i data-lucide="palette" className="inline-flex items-center justify-center size-10 shrink-0 text-white"></i></div>
              <h3>Tu crées du contenu qui convertit</h3>
              <p>Thumbnails, posts, vidéos, newsletters — tu maîtrises toute ta chaîne de contenu sans designer ni agence de communication.</p>
              <div className="text-sm font-bold text-red flex items-center gap-1.5">→ 0€ d&apos;agence, 100% autonomie</div>
            </div>
            <div className="benefice-card rv">
              <span className="absolute top-6 right-6 text-5xl font-extrabold text-line leading-none">06</span>
              <div className="size-11 bg-red/8 rounded-xl flex items-center justify-center text-[22px] mb-5 text-red"><i data-lucide="rocket" className="inline-flex items-center justify-center size-10 shrink-0 text-white"></i></div>
              <h3>Tu prends des décisions plus vite</h3>
              <p>Analyse de marché, comparaison d&apos;options, rédaction de propositions — l&apos;IA te donne une clarté et une vitesse d&apos;exécution inégalée.</p>
              <div className="text-sm font-bold text-red flex items-center gap-1.5">→ Des décisions 3x plus rapides</div>
            </div>
          </div>

          {/* Outils IA Marquee */}
          <div className="mt-15 rv">
            <p className="text-center text-sm font-semibold text-muted mb-6">Les outils que tu vas maîtriser</p>
            <div className="marquee">
              <div className="outils-track">
                <div className="outil-item"><img src="logos-ia/chatgpt-icon-svg-download-png-7576880.webp" alt="ChatGPT" /><span>ChatGPT</span></div>
                <div className="outil-item"><img src="logos-ia/claude.svg" alt="Claude" /><span>Claude</span></div>
                <div className="outil-item"><img src="logos-ia/Google_Gemini_icon_2025.svg.png" alt="Google AI" /><span>Google AI</span></div>
                <div className="outil-item"><i data-lucide="terminal" className="inline-flex items-center justify-center size-6 shrink-0" style={{ color: '#d97706' }}></i><span>Claude Code</span></div>
                <div className="outil-item"><img src="logos-ia/Elevenlabs-Ai-Logo-PNG-SVG-Vector.png" alt="ElevenLabs" /><span>ElevenLabs</span></div>
                <div className="outil-item"><img src="logos-ia/lovable-ai-icon.webp" alt="Lovable" /><span>Lovable</span></div>
                <div className="outil-item"><img src="logos-ia/perplexity-icon-logo-png_seeklogo-619417.png" alt="Perplexity" /><span>Perplexity</span></div>
                <div className="outil-item"><img src="logos-ia/heygen.jpg" alt="HeyGen" /><span>HeyGen</span></div>
                <div className="outil-item"><img src="logos-ia/zapier.svg" alt="Zapier" /><span>Zapier</span></div>
                <div className="outil-item"><img src="logos-ia/Google_Gemini_icon_2025.svg.png" alt="Gemini" /><span>Gemini</span></div>
                {/* Duplicate for seamless loop */}
                <div className="outil-item"><img src="logos-ia/chatgpt-icon-svg-download-png-7576880.webp" alt="ChatGPT" /><span>ChatGPT</span></div>
                <div className="outil-item"><img src="logos-ia/claude.svg" alt="Claude" /><span>Claude</span></div>
                <div className="outil-item"><img src="logos-ia/Google_Gemini_icon_2025.svg.png" alt="Google AI" /><span>Google AI</span></div>
                <div className="outil-item"><i data-lucide="terminal" className="inline-flex items-center justify-center size-6 shrink-0" style={{ color: '#d97706' }}></i><span>Claude Code</span></div>
                <div className="outil-item"><img src="logos-ia/Elevenlabs-Ai-Logo-PNG-SVG-Vector.png" alt="ElevenLabs" /><span>ElevenLabs</span></div>
                <div className="outil-item"><img src="logos-ia/lovable-ai-icon.webp" alt="Lovable" /><span>Lovable</span></div>
                <div className="outil-item"><img src="logos-ia/perplexity-icon-logo-png_seeklogo-619417.png" alt="Perplexity" /><span>Perplexity</span></div>
                <div className="outil-item"><img src="logos-ia/heygen.jpg" alt="HeyGen" /><span>HeyGen</span></div>
                <div className="outil-item"><img src="logos-ia/zapier.svg" alt="Zapier" /><span>Zapier</span></div>
                <div className="outil-item"><img src="logos-ia/Google_Gemini_icon_2025.svg.png" alt="Gemini" /><span>Gemini</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cours Section */}
      <section className="py-25 bg-white" id="cours">
        <div className="max-w-300 mx-auto px-6">
          <div className="text-center max-w-175 mx-auto mb-15 rv">
            <span className="inline-block text-red text-xs font-bold uppercase tracking-wider mb-4">Cours disponibles maintenant</span>
            <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] font-extrabold leading-tight">Tu attends quoi <span className="serif">pour commencer ?</span></h2>
            <p className="text-sub mt-4">Des modules courts, concrets, applicables dès le soir même. Sans jargon. Pensés pour ton contexte.</p>
          </div>

          <div className="flex flex-col gap-4 mt-12 stagger-container">
            <div className="cours-row rv">
              <img src="cours/Cr%C3%A9e%CC%81%20ta%20thumbnail.png" alt="Crée ta thumbnail" className="cours-thumb" />
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-muted">Création de contenu · 25 min</span>
                <h3 className="text-lg font-bold">Crée ta Thumbnail avec l&apos;IA</h3>
                <p className="text-sm text-sub">Génère des visuels accrocheurs pour YouTube et les réseaux en quelques minutes — sans designer, sans Photoshop. Résultat garanti dès le premier essai.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase bg-red/10 text-red">Disponible</span>
                <div className="cours-arrow">→</div>
              </div>
            </div>

            <div className="cours-row rv">
              <img src="cours/Prompte%20Engineering.png" alt="Prompt Engineering" className="cours-thumb" />
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-muted">Prompt Engineering · 25 min</span>
                <h3 className="text-lg font-bold">Parle à l&apos;IA comme si tu payais quelqu&apos;un</h3>
                <p className="text-sm text-sub">La méthode CORT : le framework exclusif Babaven pour rédiger des prompts qui donnent des résultats professionnels à chaque fois. Fini les réponses génériques.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase bg-red/10 text-red">Disponible</span>
                <div className="cours-arrow">→</div>
              </div>
            </div>

            <div className="cours-row rv">
              <div className="cours-thumb" style={{ background: 'linear-gradient(180deg, var(--red), var(--blue))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '32px' }}><i data-lucide="code-2" className="inline-flex items-center justify-center size-8 shrink-0 text-white"></i></div>
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-muted">Crée une application avec l&apos;IA · À venir</span>
                <h3 className="text-lg font-bold">Crée une application avec l&apos;IA</h3>
                <p className="text-sm text-sub">Bientôt disponible.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase bg-line text-muted">Bientôt</span>
                <div className="cours-arrow">→</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme + Pricing Section */}
      <section className="py-25 bg-bg" id="programme">
        <div className="max-w-300 mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-15 items-start">
            {/* Programme Steps */}
            <div className="flex flex-col gap-4 stagger-container rv">
              <div className="text-left mb-10">
                <span className="inline-block text-red text-xs font-bold uppercase tracking-wider mb-4">Parcours complet</span>
                <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] font-extrabold leading-tight">Le programme <span className="serif">étape par étape</span></h2>
              </div>
              <div className="programme-item">
                <div className="programme-num">1</div>
                <div className="programme-content">
                  <h3>Les fondamentaux de l&apos;IA</h3>
                  <p>Comprendre le paysage IA et choisir les bons outils pour ton business.</p>
                </div>
              </div>
              <div className="programme-item">
                <div className="programme-num">2</div>
                <div className="programme-content">
                  <h3>Prompt Engineering</h3>
                  <p>Maîtrise la méthode CORT pour des résultats exceptionnels à chaque prompt.</p>
                </div>
              </div>
              <div className="programme-item">
                <div className="programme-num">3</div>
                <div className="programme-content">
                  <h3>Création de contenu texte</h3>
                  <p>Blogs, newsletters, scripts vidéo, posts réseaux sociaux générés en minutes.</p>
                </div>
              </div>
              <div className="programme-item">
                <div className="programme-num">4</div>
                <div className="programme-content">
                  <h3>Design &amp; Visuels IA</h3>
                  <p>Logos, miniatures, mockups produits sans compétences graphiques.</p>
                </div>
              </div>
              <div className="programme-item upcoming">
                <div className="programme-num">5</div>
                <div className="programme-content">
                  <h3>Production vidéo accélérée</h3>
                  <p>Montage automatique, génération d&apos;avatars, sous-titrage IA.</p>
                </div>
              </div>
              <div className="programme-item upcoming">
                <div className="programme-num">6</div>
                <div className="programme-content">
                  <h3>Automatisation no-code</h3>
                  <p>Connecte tes outils avec Claude Code et Zapier pour un business qui tourne seul.</p>
                </div>
              </div>
              <div className="programme-item upcoming">
                <div className="programme-num">7</div>
                <div className="programme-content">
                  <h3>Voix &amp; Musique génératives</h3>
                  <p>Podcasts, voix off, musiques originales sans équipe de production.</p>
                </div>
              </div>
              <div className="programme-item upcoming">
                <div className="programme-num">8</div>
                <div className="programme-content">
                  <h3>Stratégie IA avancée</h3>
                  <p>Crée ton écosystème IA personnalisé pour scaler ton business.</p>
                </div>
              </div>
            </div>

            {/* Pricing Sticky Card */}
            <div className="pricing-sticky rv" style={{ background: 'var(--ink)', color: 'white' }}>
              <div className="pricing-amount">
                <span className="currency">€</span>
                <span className="amount">59</span>
                <span className="period">/mois</span>
              </div>

              <p className="text-sm text-center" style={{ color: 'rgba(255,255,255,0.6)' }}>ou 288€/an (soit 24€/mois) · 4 mois offerts</p>
              <p className="text-xs text-center mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Sans engagement · Résiliation en 1 clic</p>

              <div className="pricing-features" style={{ marginTop: '24px' }}>
                <div className="pricing-feature">Accès à tous les cours (actuels et futurs)</div>
                <div className="pricing-feature">Templates &amp; ressources téléchargeables</div>
                <div className="pricing-feature">Communauté privée d&apos;entrepreneurs</div>
                <div className="pricing-feature">Replays de tous les lives mensuels</div>
                <div className="pricing-feature">Nouveaux modules inclus sans surcoût</div>
                <div className="pricing-feature">Workshops et conférences en live avec des experts</div>
                <div className="pricing-feature">Cours enregistrés d&apos;IA, divisés par industrie</div>
                <div className="pricing-feature">Guides et Canvas pas à pas</div>
                <div className="pricing-feature">Espace pour solliciter des cours et événements</div>
                <div className="pricing-feature">Skills et automatisations créés par Babaven</div>
                <div className="pricing-feature">Support et accompagnement de l&apos;équipe Babaven</div>
                <div className="pricing-feature">Opportunités d&apos;embauche publiées par les membres</div>
                <div className="pricing-feature">Conseils sur le choix des outils et réductions</div>
              </div>

              <a href="https://communaute.babaven.com/checkout/pro" className="btn btn-primary btn-large" target="_blank" style={{ width: '100%', textAlign: 'center', marginTop: '24px' }}>
                Je rejoins l&apos;académie →
              </a>
              <p className="text-xs text-center mt-3" style={{ color: 'rgba(255,255,255,0.5)' }}>Plus de 500 entrepreneurs ont déjà sauté le pas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparaison Section */}
      <section className="py-25 bg-white">
        <div className="max-w-300 mx-auto px-6">
          <div className="text-center max-w-175 mx-auto mb-15 rv">
            <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] font-extrabold leading-tight">Avec ou sans <span className="serif">Babaven Académie.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg rv">
            <div className="p-8 md:p-12 bg-bg">
              <div className="mb-10">
                <h3><i data-lucide="x-circle" className="inline-flex items-center justify-center size-6 shrink-0" style={{ color: 'var(--red)', display: 'inline-flex', verticalAlign: 'middle', marginRight: '8px' }}></i> Sans Babaven</h3>
              </div>
              <div className="flex flex-col gap-5 stagger-container">
                <div className="flex items-center gap-4 text-base rv">
                  <div className="size-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-line text-muted"><i data-lucide="x" className="inline-flex items-center justify-center size-5 shrink-0" style={{ color: 'var(--red)' }}></i></div>
                  <span>Tu passes des heures à chercher des tutos éparpillés sur YouTube</span>
                </div>
                <div className="flex items-center gap-4 text-base">
                  <div className="size-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-line text-muted"><i data-lucide="x" className="inline-flex items-center justify-center size-5 shrink-0" style={{ color: 'var(--red)' }}></i></div>
                  <span>Tu paies des freelances pour des tâches que l&apos;IA fait en 5 minutes</span>
                </div>
                <div className="flex items-center gap-4 text-base">
                  <div className="size-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-line text-muted"><i data-lucide="x" className="inline-flex items-center justify-center size-5 shrink-0" style={{ color: 'var(--red)' }}></i></div>
                  <span>Tu regardes tes concurrents publier 3x plus vite sans comprendre comment</span>
                </div>
                <div className="flex items-center gap-4 text-base">
                  <div className="size-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-line text-muted"><i data-lucide="x" className="inline-flex items-center justify-center size-5 shrink-0" style={{ color: 'var(--red)' }}></i></div>
                  <span>Tu essaies des outils au hasard sans vraiment savoir les utiliser</span>
                </div>
                <div className="flex items-center gap-4 text-base">
                  <div className="size-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-line text-muted"><i data-lucide="x" className="inline-flex items-center justify-center size-5 shrink-0" style={{ color: 'var(--red)' }}></i></div>
                  <span>Tout est en anglais, avec des exemples qui ne correspondent pas à ton marché</span>
                </div>
                <div className="flex items-center gap-4 text-base">
                  <div className="size-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-line text-muted"><i data-lucide="x" className="inline-flex items-center justify-center size-5 shrink-0" style={{ color: 'var(--red)' }}></i></div>
                  <span>Tu cours après le temps, tu n&apos;as jamais assez d&apos;heures dans la journée</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 bg-ink text-white">
              <div className="mb-10">
                <h3><i data-lucide="check-circle" className="inline-flex items-center justify-center size-6 shrink-0" style={{ color: '#10b981', display: 'inline-flex', verticalAlign: 'middle', marginRight: '8px' }}></i> Avec Babaven</h3>
              </div>
              <div className="flex flex-col gap-5 stagger-container">
                <div className="flex items-center gap-4 text-base rv">
                  <div className="size-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-red text-white"><i data-lucide="check" className="inline-flex items-center justify-center size-5 shrink-0" style={{ color: '#10b981' }}></i></div>
                  <span>Tu appliques des méthodes concrètes dès le premier module, le soir même</span>
                </div>
                <div className="flex items-center gap-4 text-base">
                  <div className="size-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-red text-white"><i data-lucide="check" className="inline-flex items-center justify-center size-5 shrink-0" style={{ color: '#10b981' }}></i></div>
                  <span>Tu fais en solo le travail d&apos;une équipe de 3, pour 24€/mois</span>
                </div>
                <div className="flex items-center gap-4 text-base">
                  <div className="size-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-red text-white"><i data-lucide="check" className="inline-flex items-center justify-center size-5 shrink-0" style={{ color: '#10b981' }}></i></div>
                  <span>Tu prends 2 ans d&apos;avance dans les Caraïbes grâce à l&apos;IA</span>
                </div>
                <div className="flex items-center gap-4 text-base">
                  <div className="size-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-red text-white"><i data-lucide="check" className="inline-flex items-center justify-center size-5 shrink-0" style={{ color: '#10b981' }}></i></div>
                  <span>Tu maîtrises les outils IA avec des frameworks testés et exclusifs (CORT)</span>
                </div>
                <div className="flex items-center gap-4 text-base">
                  <div className="size-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-red text-white"><i data-lucide="check" className="inline-flex items-center justify-center size-5 shrink-0" style={{ color: '#10b981' }}></i></div>
                  <span>Tout est en français, avec des exemples pensés pour ton contexte caribéen</span>
                </div>
                <div className="flex items-center gap-4 text-base">
                  <div className="size-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-red text-white"><i data-lucide="check" className="inline-flex items-center justify-center size-5 shrink-0" style={{ color: '#10b981' }}></i></div>
                  <span>Tu récupères 8h par semaine pour te concentrer sur ce qui compte vraiment</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 rv">
            <a href="https://communaute.babaven.com/checkout/pro" className="btn btn-primary btn-large" target="_blank">
              Je choisis la deuxième option →
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Public Section */}
      <section className="py-25 bg-bg" id="tarifs">
        <div className="max-w-300 mx-auto px-6">
          <div className="text-center max-w-175 mx-auto mb-15 rv">
            <span className="inline-block text-red text-xs font-bold uppercase tracking-wider mb-4">Tarifs</span>
            <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] font-extrabold leading-tight">Moins cher qu&apos;un repas.<br /><span className="serif">Plus rentable qu&apos;un employé.</span></h2>
            <p className="text-sub mt-4">Résiliation à tout moment. Accès immédiat. Tous les modules futurs inclus.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-250 mx-auto mt-12 stagger-container">
            <div className="pricing-card rv">
              <h3>Mensuel</h3>
              <div className="price">
                <span className="currency">€</span>
                <span className="amount">59</span>
                <span className="period">/mois</span>
              </div>
              <p className="text-xs text-muted">sans engagement</p>
              <ul>
                <li>Accès à tous les cours</li>
                <li>Templates &amp; ressources PDF</li>
                <li>Communauté privée</li>
                <li>Replays des lives</li>
                <li>Nouveaux modules inclus</li>
              </ul>
              <a href="https://communaute.babaven.com/checkout/pro" className="btn btn-secondary" target="_blank">Commencer</a>
            </div>

            <div className="pricing-card featured rv">
              <span className="pricing-badge">Le plus populaire</span>
              <h3>Annuel</h3>
              <div className="price">
                <span className="currency">€</span>
                <span className="amount">288</span>
                <span className="period">/an</span>
              </div>
              <p className="text-xs text-muted">soit 24€/mois · 4 mois offerts</p>
              <ul>
                <li>Tout l&apos;accès Mensuel inclus</li>
                <li>4 mois offerts vs mensuel</li>
                <li>Sessions live prioritaires</li>
                <li>Badge membre fondateur</li>
                <li>Avant-premières des modules</li>
              </ul>
              <a href="https://communaute.babaven.com/checkout/pro" className="btn btn-primary" target="_blank">Rejoindre maintenant</a>
            </div>

            <div className="pricing-card rv">
              <h3>Équipe</h3>
              <div className="price">
                <span className="text-lg font-semibold">Sur devis</span>
              </div>
              <p className="text-xs text-muted">jusqu&apos;à 10 membres</p>
              <ul>
                <li>Jusqu&apos;à 10 accès individuels</li>
                <li>Dashboard équipe</li>
                <li>Sessions privées dédiées</li>
                <li>Facturation entreprise</li>
              </ul>
              <a href="mailto:blogbabaven@gmail.com" className="btn btn-secondary">Nous contacter</a>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="py-25 bg-white">
        <div className="max-w-300 mx-auto px-6">
          <div className="text-center max-w-175 mx-auto mb-15 rv">
            <span className="inline-block text-red text-xs font-bold uppercase tracking-wider mb-4">Ils ont sauté le pas</span>
            <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] font-extrabold leading-tight">Des résultats réels.<br /><span className="serif">Pas des promesses.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 stagger-container">
            <div className="temoignage-card rv">
              <div className="flex gap-1 mb-5 text-[#ffb800] text-lg"><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i></div>
              <p className="temoignage-quote">&laquo; J&apos;avais peur que ce soit trop technique. J&apos;ai appliqué les cours le jour même et créé ma première campagne email en 20 minutes. J&apos;ai signé 2 nouveaux clients la semaine suivante. &raquo;</p>
              <div className="flex items-center gap-3.5">
                <div className="temoignage-avatar"><img src="/images/portrait-temoignage-2.png" alt="Marie-Luce E." /></div>
                <div className="temoignage-info">
                  <h4>Marie-Luce E.</h4>
                  <p>Consultante RH · Martinique</p>
                </div>
              </div>
            </div>

            <div className="temoignage-card rv">
              <div className="flex gap-1 mb-5 text-[#ffb800] text-lg"><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i></div>
              <p className="temoignage-quote">&laquo; Barbara parle NOTRE réalité. C&apos;est la première formation IA où tout fait sens pour mon contexte. En 1 mois j&apos;ai économisé 15h de travail. Le ROI est immédiat. &raquo;</p>
              <div className="flex items-center gap-3.5">
                <div className="temoignage-avatar">KD</div>
                <div className="temoignage-info">
                  <h4>Kevin D.</h4>
                  <p>Entrepreneur · Guadeloupe</p>
                </div>
              </div>
            </div>

            <div className="temoignage-card rv">
              <div className="flex gap-1 mb-5 text-[#ffb800] text-lg"><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i></div>
              <p className="temoignage-quote">&laquo; Les templates seuls valent 10x le prix de l&apos;abonnement. En 2 semaines j&apos;ai automatisé ma création de contenu. Je recommande à TOUS mes clients sans hésiter. &raquo;</p>
              <div className="flex items-center gap-3.5">
                <div className="temoignage-avatar"><img src="/images/portrait-temoignage-1.png" alt="Sandrine C." /></div>
                <div className="temoignage-info">
                  <h4>Sandrine C.</h4>
                  <p>Coach Business · Réunion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formateurs Section */}
      <section className="py-[100px] bg-[#fafafa]" id="formateurs">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12 rv">
            <span className="inline-block text-red text-xs font-bold uppercase tracking-wider mb-4">Tes formateurs</span>
            <h2>Des experts qui parlent <span className="serif">ta réalité</span></h2>
            <p className="mt-4 text-[#666] max-w-[600px] mx-auto">Pas des théoriciens. Des entrepreneurs qui utilisent ces outils tous les jours dans leur business.</p>
          </div>

          {/* Tab Buttons */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button className="formateur-tab active" data-formateur="mathieu">
              <div className="formateur-tab-avatar">
                <img src="/images/mathieu-de-gouville.png" alt="Mathieu" />
              </div>
              <span className="formateur-tab-name">Mathieu</span>
            </button>
            <button className="formateur-tab" data-formateur="barbara">
              <div className="formateur-tab-avatar">
                <img src="/images/barbara-de-la-cruz.png" alt="Barbara" />
              </div>
              <span className="formateur-tab-name">Barbara</span>
            </button>
            <button className="formateur-tab formateur-tab-blurred" data-formateur="coming1">
              <div className="formateur-tab-avatar formateur-avatar-blurred">
                <img src="/images/portrait-temoignage-1.png" alt="Bientôt" />
              </div>
              <span className="formateur-tab-name">Bientôt</span>
            </button>
            <button className="formateur-tab formateur-tab-blurred" data-formateur="coming2">
              <div className="formateur-tab-avatar formateur-avatar-blurred">
                <img src="/images/portrait-temoignage-2.png" alt="Bientôt" />
              </div>
              <span className="formateur-tab-name">Bientôt</span>
            </button>
          </div>

          {/* Panel: Mathieu */}
          <div className="formateur-panel active" data-formateur="mathieu">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rv">
                <div className="relative w-full max-w-[400px] mx-auto">
                  <img src="/images/mathieu-de-gouville.png" alt="Mathieu de Gouville" className="w-full rounded-2xl" />
                </div>
              </div>
              <div className="rv">
                <h3 className="text-2xl font-bold mb-2">Mathieu de Gouville</h3>
                <p className="text-red font-semibold mb-6">Expert Agents AI &amp; Automatisation</p>
                <p className="text-[#555] mb-6 leading-relaxed">Développeur et entrepreneur, Mathieu construit des systèmes d&apos;automatisation avec les Agents AI depuis 2023. Il forme les entrepreneurs à déléguer leurs tâches répétitives et douloureuses aux agents intelligents.</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <i data-lucide="code" className="inline-flex items-center justify-center size-5 shrink-0 text-red mt-0.5"></i>
                    <div>
                      <p className="font-semibold">Claude Code &amp; Agents AI (OpenClaw, NanoClaw, Hermes Agent)</p>
                      <p className="text-sm text-[#666]">Apprends à utiliser Claude comme un assistant technique qui code, analyse et exécute pour toi.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i data-lucide="rocket" className="inline-flex items-center justify-center size-5 shrink-0 text-red mt-0.5"></i>
                    <div>
                      <p className="font-semibold">Productivité x10</p>
                      <p className="text-sm text-[#666]">Les stratégies concrètes pour faire en 1 heure ce qui prenait 1 journée.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Panel: Barbara */}
          <div className="formateur-panel" data-formateur="barbara">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rv">
                <div className="relative w-full max-w-[400px] mx-auto">
                  <img src="/images/barbara-de-la-cruz.png" alt="Barbara de la Cruz" className="w-full rounded-2xl" />
                </div>
              </div>
              <div className="rv">
                <h3 className="text-2xl font-bold mb-2">Barbara de la Cruz</h3>
                <p className="text-red font-semibold mb-6">Experte ChatGPT &amp; Prompting</p>
                <p className="text-[#555] mb-6 leading-relaxed">Formatrice et entrepreneuse caribéenne, Barbara aide les entrepreneurs francophones à maîtriser ChatGPT pour leur business. Elle a formé 200+ entrepreneurs et développé la méthode CORT, un framework de prompting pensé pour les non-techniques.</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <i data-lucide="message-square" className="inline-flex items-center justify-center size-5 shrink-0 text-red mt-0.5"></i>
                    <div>
                      <p className="font-semibold">Méthode CORT</p>
                      <p className="text-sm text-[#666]">Le framework Contexte-Objectif-Rôle-Ton pour des résultats pro à chaque prompt.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i data-lucide="pen-tool" className="inline-flex items-center justify-center size-5 shrink-0 text-red mt-0.5"></i>
                    <div>
                      <p className="font-semibold">Création de contenu</p>
                      <p className="text-sm text-[#666]">Posts réseaux sociaux, emails, articles — générés en minutes, pas en heures.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i data-lucide="briefcase" className="inline-flex items-center justify-center size-5 shrink-0 text-red mt-0.5"></i>
                    <div>
                      <p className="font-semibold">Business &amp; Stratégie</p>
                      <p className="text-sm text-[#666]">Utilise ChatGPT comme un consultant stratégique disponible 24/7.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Panel: Coming Soon 1 */}
          <div className="formateur-panel" data-formateur="coming1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rv">
                <div className="relative w-full max-w-[400px] mx-auto">
                  <div className="w-full aspect-square rounded-2xl bg-[#e5e5e5] flex items-center justify-center">
                    <div className="text-center text-[#999]">
                      <i data-lucide="user" className="inline-flex items-center justify-center size-16 shrink-0 mb-3"></i>
                      <p className="font-semibold text-lg">Bientôt révélé</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rv">
                <h3 className="text-2xl font-bold mb-2 text-[#999]">Nouveau formateur</h3>
                <p className="text-red font-semibold mb-6">Arrive prochainement</p>
                <p className="text-[#555] mb-6 leading-relaxed">Un nouvel expert rejoint bientôt l&apos;équipe pour t&apos;apprendre à utiliser les outils Gen AI dans ces domaines :</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <i data-lucide="target" className="inline-flex items-center justify-center size-5 shrink-0 text-red mt-0.5"></i>
                    <div>
                      <p className="font-semibold">Marketing IA</p>
                      <p className="text-sm text-[#666]">Stratégies d&apos;acquisition et de conversion boostées par l&apos;intelligence artificielle.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i data-lucide="mail" className="inline-flex items-center justify-center size-5 shrink-0 text-red mt-0.5"></i>
                    <div>
                      <p className="font-semibold">Email &amp; Copywriting</p>
                      <p className="text-sm text-[#666]">Séquences email et pages de vente qui convertissent, générées avec l&apos;IA.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i data-lucide="trending-up" className="inline-flex items-center justify-center size-5 shrink-0 text-red mt-0.5"></i>
                    <div>
                      <p className="font-semibold">Stratégie commerciale</p>
                      <p className="text-sm text-[#666]">Utilise l&apos;IA pour analyser ton marché, tes concurrents et tes opportunités.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Panel: Coming Soon 2 */}
          <div className="formateur-panel" data-formateur="coming2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rv">
                <div className="relative w-full max-w-[400px] mx-auto">
                  <div className="w-full aspect-square rounded-2xl bg-[#e5e5e5] flex items-center justify-center">
                    <div className="text-center text-[#999]">
                      <i data-lucide="user" className="inline-flex items-center justify-center size-16 shrink-0 mb-3"></i>
                      <p className="font-semibold text-lg">Bientôt révélé</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rv">
                <h3 className="text-2xl font-bold mb-2 text-[#999]">Nouveau formateur</h3>
                <p className="text-red font-semibold mb-6">Arrive prochainement</p>
                <p className="text-[#555] mb-6 leading-relaxed">Un expert créatif rejoint bientôt l&apos;académie pour couvrir les outils Gen AI dans ces domaines :</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <i data-lucide="video" className="inline-flex items-center justify-center size-5 shrink-0 text-red mt-0.5"></i>
                    <div>
                      <p className="font-semibold">Production vidéo</p>
                      <p className="text-sm text-[#666]">Crée des vidéos professionnelles avec les outils Gen AI — sans matériel ni compétences techniques.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i data-lucide="mic" className="inline-flex items-center justify-center size-5 shrink-0 text-red mt-0.5"></i>
                    <div>
                      <p className="font-semibold">Voix &amp; Audio IA</p>
                      <p className="text-sm text-[#666]">Voix off, podcasts, doublages — génère du contenu audio pro en quelques clics.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i data-lucide="palette" className="inline-flex items-center justify-center size-5 shrink-0 text-red mt-0.5"></i>
                    <div>
                      <p className="font-semibold">Design génératif</p>
                      <p className="text-sm text-[#666]">Logos, visuels, mockups — crée des assets design sans Photoshop ni designer.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-25 bg-white" id="faq">
        <div className="max-w-300 mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-20 items-start">
            <div className="faq-title-sticky rv">
              <span className="inline-block text-red text-xs font-bold uppercase tracking-wider mb-4">FAQ</span>
              <h2>Tu as des <span className="serif">questions ?</span></h2>
              <p>On a les réponses.</p>
            </div>

            <div className="flex flex-col gap-3 stagger-container rv">
              <div className="faq-item rv">
                <button className="faq-question">
                  <span>Est-ce que je dois avoir des bases en technologie ?</span>
                  <div className="faq-icon"><i data-lucide="plus" className="inline-flex items-center justify-center size-5 shrink-0"></i></div>
                </button>
                <div className="faq-answer">
                  <p>Non. Babaven Académie est conçue pour les entrepreneurs, pas les développeurs. Si tu sais utiliser WhatsApp, tu peux commencer aujourd&apos;hui. Nos modules partent de zéro.</p>
                </div>
              </div>

              <div className="faq-item rv">
                <button className="faq-question">
                  <span>Combien de temps ça prend par semaine ?</span>
                  <div className="faq-icon"><i data-lucide="plus" className="inline-flex items-center justify-center size-5 shrink-0"></i></div>
                </button>
                <div className="faq-answer">
                  <p>Les modules durent entre 15 et 30 minutes. Une heure par semaine suffit pour avancer et appliquer immédiatement ce que tu apprends dans ton business.</p>
                </div>
              </div>

              <div className="faq-item rv">
                <button className="faq-question">
                  <span>Est-ce vraiment en français ?</span>
                  <div className="faq-icon"><i data-lucide="plus" className="inline-flex items-center justify-center size-5 shrink-0"></i></div>
                </button>
                <div className="faq-answer">
                  <p>Oui, 100% en français. Tous les modules, templates, ressources et échanges en communauté — avec des exemples adaptés à la réalité caribéenne et africaine francophone.</p>
                </div>
              </div>

              <div className="faq-item rv">
                <button className="faq-question">
                  <span>Je peux résilier à tout moment ?</span>
                  <div className="faq-icon"><i data-lucide="plus" className="inline-flex items-center justify-center size-5 shrink-0"></i></div>
                </button>
                <div className="faq-answer">
                  <p>Oui, pour la formule mensuelle. Sans préavis, sans frais, en un clic. Tu conserves l&apos;accès jusqu&apos;à la fin de la période payée. Aucune mauvaise surprise.</p>
                </div>
              </div>

              <div className="faq-item rv">
                <button className="faq-question">
                  <span>De nouveaux cours sont-ils ajoutés régulièrement ?</span>
                  <div className="faq-icon"><i data-lucide="plus" className="inline-flex items-center justify-center size-5 shrink-0"></i></div>
                </button>
                <div className="faq-answer">
                  <p>Oui — nouveaux modules chaque mois, tous inclus dans ton abonnement sans surcoût. Tu seras notifié·e à chaque ajout. 15 cours sont prévus d&apos;ici fin 2026.</p>
                </div>
              </div>

              <div className="faq-item rv">
                <button className="faq-question">
                  <span>Quelle est la différence entre la méthode CORT et CRAFT ?</span>
                  <div className="faq-icon"><i data-lucide="plus" className="inline-flex items-center justify-center size-5 shrink-0"></i></div>
                </button>
                <div className="faq-answer">
                  <p>CORT (Contexte, Objectif, Rôle, Ton) est notre framework de prompting pour ChatGPT — tu l&apos;apprends dans le cours &quot;Parle à l&apos;IA comme si tu payais quelqu&apos;un&quot;. CRAFT est notre méthode avancée de prompting créatif, couverte dans les modules suivants.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-30 bg-ink relative overflow-hidden">
        <div className="cta-blob"></div>
        <div className="max-w-300 mx-auto px-6">
          <div className="relative z-10 text-center max-w-200 mx-auto">
            <span className="inline-block text-red text-xs font-bold uppercase tracking-wider mb-4">Dernière chance</span>
            <h2>Pendant que tu lis cette page,<br />tes concurrents<br />utilisent déjà l&apos;IA.</h2>
            <p>Dans 6 mois, la question ne sera plus &quot;est-ce que je devrais apprendre l&apos;IA ?&quot; mais &quot;pourquoi j&apos;ai attendu aussi longtemps ?&quot;. Le meilleur moment pour commencer était hier. Le deuxième meilleur moment, c&apos;est maintenant.</p>
            <a href="https://communaute.babaven.com/checkout/pro" className="btn btn-primary btn-large" target="_blank">
              Je rejoins Babaven Académie maintenant →
            </a>
            <div className="cta-meta">
              <span>Sans engagement</span>
              <span>Résiliation en 1 clic</span>
              <span>Accès immédiat</span>
              <span>100% en français</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-15 pb-25 bg-ink border-t border-white/10">
        <div className="max-w-300 mx-auto px-6">
          <div className="flex flex-col items-center gap-6">
            <a href="#" className="flex items-center gap-2.5 font-bold text-xl text-white">
              <div className="nav-logo-icon">B</div>
              <span>Babaven. Académie</span>
            </a>
            <div className="flex gap-8 flex-wrap justify-center">
              <a href="#benefices">Bénéfices</a>
              <a href="#cours">Cours</a>
              <a href="#tarifs">Tarifs</a>
              <a href="https://babaven.com" target="_blank">Babaven.com</a>
              <a href="https://instagram.com/babaven_media" target="_blank">Instagram</a>
              <a href="https://linkedin.com/company/babaven" target="_blank">LinkedIn</a>
              <a href="mailto:blogbabaven@gmail.com">Contact</a>
              <a href="#">Mentions légales</a>
            </div>
            <p className="text-[13px] text-muted">© 2025 Babaven Académie · Martinique 🌴</p>
          </div>
        </div>
      </footer>


    </>
  )
}
