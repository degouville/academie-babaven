export default function Home() {
  return (
    <>
      {/* Progress Bar */}
      <div className="progress-bar" id="progressBar"></div>

      {/* Navigation */}
      <nav className="nav" id="nav">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 font-bold text-lg">
            <div className="nav-logo-icon">B</div>
            <span>Babaven Académie</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#benefices">Bénéfices</a>
            <a href="#cours">Cours</a>
            <a href="#tarifs">Tarifs</a>
            <a href="#faq">FAQ</a>
            <a href="https://babaven.com" target="_blank">babaven.com</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://communaute.babaven.com" className="btn btn-secondary" target="_blank">Connexion</a>
            <a href="https://communaute.babaven.com/checkout/pro" className="btn btn-primary" target="_blank">S'inscrire →</a>
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
        <a href="https://babaven.com" target="_blank">babaven.com</a>
        <a href="https://communaute.babaven.com" className="btn btn-secondary" target="_blank">Connexion</a>
        <a href="https://communaute.babaven.com/checkout/pro" className="btn btn-primary" target="_blank">S'inscrire →</a>
      </div>

      {/* Sticky CTA Bar */}
      <div className="sticky-cta" id="stickyCta">
        <div className="flex items-center justify-between max-w-[1200px] mx-auto md:flex-row flex-col gap-4 text-center">
          <span className="text-white text-[15px] font-medium"><i data-lucide="flame" className="inline-flex items-center justify-center size-5 shrink-0 text-red" style={{ display: 'inline-flex', verticalAlign: 'middle' }}></i> <strong>Offre limitée</strong> — Rejoins 500+ entrepreneurs déjà formés</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="https://communaute.babaven.com/checkout/pro" className="btn btn-primary" target="_blank">S'inscrire maintenant</a>
            <button className="bg-transparent border-none text-muted text-xl cursor-pointer p-1 ml-4" id="stickyCtaClose"><i data-lucide="x" className="inline-flex items-center justify-center size-5 shrink-0"></i></button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-[100px] pb-[60px] md:pt-[120px] md:pb-20 relative overflow-hidden" id="hero">
        <div className="hero-blob" id="heroBlob"></div>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
            <div className="relative z-10 max-w-[800px]">
              <div className="hero-badge">1ère académie IA · 100% francophone</div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-800 leading-tight mb-6 tracking-tight">
                Fais en <span className="highlight">1 heure</span><br /> ce qui te prenait <span className="highlight"><br /> 1 journée</span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-sub max-w-[600px] mb-10 leading-relaxed">
                La première formation en français pour entrepreneurs caribéens.
                Apprends à automatiser ton business et créer du contenu 10× plus vite.
              </p>
              <div className="flex items-center gap-4 mb-12 flex-wrap md:flex-col md:items-stretch">
                <a href="https://communaute.babaven.com/checkout/pro" className="btn btn-primary btn-large" target="_blank">
                  Rejoindre l'académie →
                </a>
                <a href="#cours" className="btn btn-secondary btn-large">
                  Voir les cours disponibles
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
                    <div className="text-2xl font-extrabold text-ink flex items-center gap-0.5"><span className="counter" data-target="100">0</span>%</div>
                    <div className="text-[13px] text-muted font-medium">francophone</div>
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-extrabold text-ink flex items-center gap-0.5"><span className="counter" data-target="4.9" data-decimals="1">0</span><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex', verticalAlign: 'middle', marginLeft: '2px' }}></i></div>
                    <div className="text-[13px] text-muted font-medium">note moyenne</div>
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
      <section className="py-[60px] bg-bg overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-center text-sm font-medium text-muted mb-8 rv">Des professionnels de ces entreprises nous font confiance</p>
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
      <section className="py-[100px] bg-white" id="urgence">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[80px] items-start">
            <div className="urgence-title rv">
              L'IA transforme le monde.<br />
              <span className="serif">Et toi, tu attends quoi ?</span>
            </div>
            <div className="grid gap-6 stagger-container">
              <div className="pain-card rv">
                <div className="size-12 bg-white rounded-xl flex items-center justify-center text-2xl mb-4"><i data-lucide="alert-circle" className="inline-flex items-center justify-center size-10 shrink-0 text-red"></i></div>
                <h3>Tu te sens dépassé·e</h3>
                <p>ChatGPT, Claude, Claude Code, Google AI, Gemini... Les outils sortent plus vite que tu ne peux les tester. Tu ne sais pas lequel choisir, ni par où commencer. Résultat : tu stagnes pendant que d'autres avancent.</p>
              </div>
              <div className="pain-card rv">
                <div className="size-12 bg-white rounded-xl flex items-center justify-center text-2xl mb-4"><i data-lucide="clock" className="inline-flex items-center justify-center size-10 shrink-0" style={{ color: '#f59e0b' }}></i></div>
                <h3>Tu manques de temps</h3>
                <p>Tes journées disparaissent dans des tâches qui ne rapportent rien. Contenu, mails, admin... Tu travailles 10h pour des résultats de 3h. Et ton vrai business ? Il attend.</p>
              </div>
              <div className="pain-card rv">
                <div className="size-12 bg-white rounded-xl flex items-center justify-center text-2xl mb-4"><i data-lucide="frown" className="inline-flex items-center justify-center size-10 shrink-0" style={{ color: '#6366f1' }}></i></div>
                <h3>Tu n'es pas assez visible</h3>
                <p>Ta concurrence publie 3 posts par jour sans effort. Toi ? Tu galères à en sortir 3 par semaine. Ils prennent ta place. Tes clients te trouvent de moins en moins.</p>
              </div>
              <div className="pain-card rv">
                <div className="size-12 bg-white rounded-xl flex items-center justify-center text-2xl mb-4"><i data-lucide="wallet" className="inline-flex items-center justify-center size-10 shrink-0" style={{ color: '#10b981' }}></i></div>
                <h3>Tu laisses de l'argent sur la table</h3>
                <p>Chaque nouveau client = plus de travail, pas plus de revenus. Sans automatisation, tu as créé un job, pas un business. Tu es coincé·e dans des tâches que l'IA pourrait faire à ta place.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bénéfices Section */}
      <section className="py-[100px] bg-bg overflow-hidden" id="benefices">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[700px] mx-auto mb-[60px] rv">
            <span className="inline-block text-red text-xs font-bold uppercase tracking-wider mb-4">Ce qui t'attend</span>
            <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] font-extrabold leading-tight">Ce que tu vas accomplir <span className="serif">dès les premières semaines</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 stagger-container">
            <div className="benefice-card rv">
              <span className="absolute top-6 right-6 text-5xl font-extrabold text-line leading-none">01</span>
              <div className="size-11 bg-red/8 rounded-xl flex items-center justify-center text-[22px] mb-5 text-red"><i data-lucide="zap" className="inline-flex items-center justify-center size-10 shrink-0 text-white"></i></div>
              <h3>Créer 10× plus vite</h3>
              <p>Termine en 1 heure ce qui te prenait 1 journée entière. Emails, posts, scripts vidéo : l'IA devient ton assistant infatigable.</p>
              <div className="text-sm font-bold text-red flex items-center gap-1.5">→ 15 heures récupérées chaque semaine</div>
            </div>
            <div className="benefice-card rv">
              <span className="absolute top-6 right-6 text-5xl font-extrabold text-line leading-none">02</span>
              <div className="size-11 bg-red/8 rounded-xl flex items-center justify-center text-[22px] mb-5 text-red"><i data-lucide="bot" className="inline-flex items-center justify-center size-10 shrink-0 text-white"></i></div>
              <h3>Automatiser tes tâches</h3>
              <p>Emails, factures, relances : ton business tourne pendant que tu dors. Les outils no-code font le travail à ta place, sans coder une seule ligne.</p>
              <div className="text-sm font-bold text-red flex items-center gap-1.5">→ Fini les tâches répétitives</div>
            </div>
            <div className="benefice-card rv">
              <span className="absolute top-6 right-6 text-5xl font-extrabold text-line leading-none">03</span>
              <div className="size-11 bg-red/8 rounded-xl flex items-center justify-center text-[22px] mb-5 text-red"><i data-lucide="palette" className="inline-flex items-center justify-center size-10 shrink-0 text-white"></i></div>
              <h3>Créer des visuels pro</h3>
              <p>Logos, miniatures, posts Instagram : tu crées des visuels dignes d'un designer en quelques minutes, sans compétences techniques.</p>
              <div className="text-sm font-bold text-red flex items-center gap-1.5">→ -80% sur tes coûts design</div>
            </div>
            <div className="benefice-card rv">
              <span className="absolute top-6 right-6 text-5xl font-extrabold text-line leading-none">04</span>
              <div className="size-11 bg-red/8 rounded-xl flex items-center justify-center text-[22px] mb-5 text-red"><i data-lucide="video" className="inline-flex items-center justify-center size-10 shrink-0 text-white"></i></div>
              <h3>Produire des vidéos</h3>
              <p>Montage auto, voix-off générée, sous-titres en 1 clic. Tu publies du contenu vidéo quotidien sans passer la journée devant un logiciel.</p>
              <div className="text-sm font-bold text-red flex items-center gap-1.5">→ 3× plus d'engagement</div>
            </div>
            <div className="benefice-card rv">
              <span className="absolute top-6 right-6 text-5xl font-extrabold text-line leading-none">05</span>
              <div className="size-11 bg-red/8 rounded-xl flex items-center justify-center text-[22px] mb-5 text-red"><i data-lucide="file-text" className="inline-flex items-center justify-center size-10 shrink-0 text-white"></i></div>
              <h3>Maîtriser les prompts</h3>
              <p>La méthode CORT : tu apprends à "parler" à l'IA pour obtenir des résultats exceptionnels du premier coup, sans frustration.</p>
              <div className="text-sm font-bold text-red flex items-center gap-1.5">→ 5× meilleurs résultats</div>
            </div>
            <div className="benefice-card rv">
              <span className="absolute top-6 right-6 text-5xl font-extrabold text-line leading-none">06</span>
              <div className="size-11 bg-red/8 rounded-xl flex items-center justify-center text-[22px] mb-5 text-red"><i data-lucide="rocket" className="inline-flex items-center justify-center size-10 shrink-0 text-white"></i></div>
              <h3>Développer ton business</h3>
              <p>Analyse tes données, génère des leads qualifiés, scale sans recruter. Tu passes de solopreneur à entrepreneur avec des systèmes qui grandissent avec toi.</p>
              <div className="text-sm font-bold text-red flex items-center gap-1.5">→ +40% de revenus en moyenne</div>
            </div>
          </div>

          {/* Outils IA Marquee */}
          <div className="mt-[60px] rv">
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
      <section className="py-[100px] bg-white" id="cours">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[700px] mx-auto mb-[60px] rv">
            <span className="inline-block text-red text-xs font-bold uppercase tracking-wider mb-4">Formation continue</span>
            <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] font-extrabold leading-tight">Les formations <span className="serif">à ta disposition</span></h2>
          </div>

          <div className="flex flex-col gap-4 mt-12 stagger-container">
            <div className="cours-row rv">
              <img src="cours/Cr%C3%A9e%CC%81%20ta%20thumbnail.png" alt="Crée ta thumbnail" className="cours-thumb" />
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-muted">Création de contenu</span>
                <h3 className="text-lg font-bold">Crée tes miniatures avec l'IA</h3>
                <p className="text-sm text-sub">Des miniatures YouTube et réseaux qui font cliquer, sans jamais ouvrir Photoshop. Même si tu n'as aucun talent graphique.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase bg-red/10 text-red">Disponible</span>
                <div className="cours-arrow">→</div>
              </div>
            </div>

            <div className="cours-row rv">
              <img src="cours/Prompte%20Engineering.png" alt="Prompt Engineering" className="cours-thumb" />
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-muted">Fondamentaux</span>
                <h3 className="text-lg font-bold">Prompt Engineering Mastery</h3>
                <p className="text-sm text-sub">La méthode CORT : obtiens des résultats professionnels de ChatGPT et Claude dès ta première utilisation. Fini les réponses médiocres.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase bg-red/10 text-red">Disponible</span>
                <div className="cours-arrow">→</div>
              </div>
            </div>

            <div className="cours-row rv">
              <div className="cours-thumb" style={{ background: 'linear-gradient(180deg, var(--red), var(--blue))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '32px' }}><i data-lucide="video" className="inline-flex items-center justify-center size-8 shrink-0 text-white"></i></div>
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-muted">Vidéo</span>
                <h3 className="text-lg font-bold">Édition vidéo avec l'IA</h3>
                <p className="text-sm text-sub">Monte tes vidéos 10× plus vite avec des outils comme CapCut IA et Opus Clip.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase bg-line text-muted">Bientôt</span>
                <div className="cours-arrow">→</div>
              </div>
            </div>

            <div className="cours-row rv">
              <div className="cours-thumb" style={{ background: 'linear-gradient(180deg, #6366f1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '32px' }}><i data-lucide="bot" className="inline-flex items-center justify-center size-8 shrink-0 text-white"></i></div>
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-muted">Automatisation</span>
                <h3 className="text-lg font-bold">Automatisation avec Claude Code</h3>
                <p className="text-sm text-sub">Automatise tes workflows et génère du code avec l'IA. De débutant à avancé.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase bg-line text-muted">Bientôt</span>
                <div className="cours-arrow">→</div>
              </div>
            </div>

            <div className="cours-row rv">
              <div className="cours-thumb" style={{ background: 'linear-gradient(180deg, #10b981, #059669)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '32px' }}><i data-lucide="palette" className="inline-flex items-center justify-center size-8 shrink-0 text-white"></i></div>
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-muted">Design</span>
                <h3 className="text-lg font-bold">Google AI & Gemini Masterclass</h3>
                <p className="text-sm text-sub">Crée des images professionnelles pour ta marque, tes produits et tes réseaux sociaux.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase bg-line text-muted">Bientôt</span>
                <div className="cours-arrow">→</div>
              </div>
            </div>

            <div className="cours-row rv">
              <div className="cours-thumb" style={{ background: 'linear-gradient(180deg, #f59e0b, #d97706)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '32px' }}><i data-lucide="mic" className="inline-flex items-center justify-center size-8 shrink-0 text-white"></i></div>
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold uppercase tracking-wide text-muted">Audio</span>
                <h3 className="text-lg font-bold">Voix & Musique IA</h3>
                <p className="text-sm text-sub">Clone ta voix, crée des podcasts et génère des musiques libres de droits avec ElevenLabs et Suno.</p>
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
      <section className="py-[100px] bg-bg" id="programme">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[700px] mx-auto mb-[60px] rv">
            <span className="inline-block text-red text-xs font-bold uppercase tracking-wider mb-4">Parcours complet</span>
            <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] font-extrabold leading-tight">Le programme <span className="serif">étape par étape</span></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-[60px] items-start">
            <div className="flex flex-col gap-4 stagger-container rv">
              <div className="programme-item">
                <div className="programme-num">1</div>
                <div className="programme-content">
                  <h3>Les fondamentaux de l'IA</h3>
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
                  <h3>Design & Visuels IA</h3>
                  <p>Logos, miniatures, mockups produits sans compétences graphiques.</p>
                </div>
              </div>
              <div className="programme-item upcoming">
                <div className="programme-num">5</div>
                <div className="programme-content">
                  <h3>Production vidéo accélérée</h3>
                  <p>Montage automatique, génération d'avatars, sous-titrage IA.</p>
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
                  <h3>Voix & Musique génératives</h3>
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

            <div className="pricing-sticky rv">
              <p className="pricing-sticky-label">Tarifs</p>

              <div className="pricing-toggle">
                <button className="pricing-toggle-btn" data-plan="monthly">Mensuel</button>
                <button className="pricing-toggle-btn active" data-plan="yearly">Annuel</button>
              </div>

              <div className="pricing-amount" id="stickyPrice">
                <span className="currency">€</span>
                <span className="amount" data-monthly="59" data-yearly="24">24</span>
                <span className="period">/mois</span>
              </div>

              <span className="pricing-save" id="stickySave">Économise 420€/an</span>

              <div className="pricing-features">
                <div className="pricing-feature">Accès à tous les cours</div>
                <div className="pricing-feature">Nouveaux cours chaque mois</div>
                <div className="pricing-feature">Communauté privée Discord</div>
                <div className="pricing-feature">Templates & prompts exclusifs</div>
                <div className="pricing-feature">Sessions live mensuelles</div>
              </div>

              <a href="https://communaute.babaven.com/checkout/pro" className="btn btn-primary btn-large" target="_blank">
                Commencer maintenant →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparaison Section */}
      <section className="py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[700px] mx-auto mb-[60px] rv">
            <span className="inline-block text-red text-xs font-bold uppercase tracking-wider mb-4">La différence</span>
            <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] font-extrabold leading-tight">Avec vs. <span className="serif">sans Babaven Académie</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg rv">
            <div className="p-8 md:p-12 bg-bg">
              <div className="mb-10">
                <h3><i data-lucide="x-circle" className="inline-flex items-center justify-center size-6 shrink-0" style={{ color: 'var(--red)', display: 'inline-flex', verticalAlign: 'middle', marginRight: '8px' }}></i> Sans Babaven</h3>
                <p>Tu apprends seul·e</p>
              </div>
              <div className="flex flex-col gap-5 stagger-container">
                <div className="flex items-center gap-4 text-base rv">
                  <div className="size-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-line text-muted"><i data-lucide="x" className="inline-flex items-center justify-center size-5 shrink-0" style={{ color: 'var(--red)' }}></i></div>
                  <span>Des heures perdues sur YouTube</span>
                </div>
                <div className="flex items-center gap-4 text-base">
                  <div className="size-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-line text-muted"><i data-lucide="x" className="inline-flex items-center justify-center size-5 shrink-0" style={{ color: 'var(--red)' }}></i></div>
                  <span>Des outils payés mais mal utilisés</span>
                </div>
                <div className="flex items-center gap-4 text-base">
                  <div className="size-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-line text-muted"><i data-lucide="x" className="inline-flex items-center justify-center size-5 shrink-0" style={{ color: 'var(--red)' }}></i></div>
                  <span>Aucun retour sur ton travail</span>
                </div>
                <div className="flex items-center gap-4 text-base">
                  <div className="size-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-line text-muted"><i data-lucide="x" className="inline-flex items-center justify-center size-5 shrink-0" style={{ color: 'var(--red)' }}></i></div>
                  <span>Tu restes bloqué·e sur les bugs</span>
                </div>
                <div className="flex items-center gap-4 text-base">
                  <div className="size-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-line text-muted"><i data-lucide="x" className="inline-flex items-center justify-center size-5 shrink-0" style={{ color: 'var(--red)' }}></i></div>
                  <span>Contenu en anglais uniquement</span>
                </div>
                <div className="flex items-center gap-4 text-base">
                  <div className="size-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-line text-muted"><i data-lucide="x" className="inline-flex items-center justify-center size-5 shrink-0" style={{ color: 'var(--red)' }}></i></div>
                  <span>Pas de communauté francophone</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 bg-ink text-white">
              <div className="mb-10">
                <h3><i data-lucide="check-circle" className="inline-flex items-center justify-center size-6 shrink-0" style={{ color: '#10b981', display: 'inline-flex', verticalAlign: 'middle', marginRight: '8px' }}></i> Avec Babaven</h3>
                <p>Tu progresses 10× plus vite</p>
              </div>
              <div className="flex flex-col gap-5 stagger-container">
                <div className="flex items-center gap-4 text-base rv">
                  <div className="size-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-red text-white"><i data-lucide="check" className="inline-flex items-center justify-center size-5 shrink-0" style={{ color: '#10b981' }}></i></div>
                  <span>Parcours structuré étape par étape</span>
                </div>
                <div className="flex items-center gap-4 text-base">
                  <div className="size-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-red text-white"><i data-lucide="check" className="inline-flex items-center justify-center size-5 shrink-0" style={{ color: '#10b981' }}></i></div>
                  <span>Tu maîtrises chaque outil</span>
                </div>
                <div className="flex items-center gap-4 text-base">
                  <div className="size-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-red text-white"><i data-lucide="check" className="inline-flex items-center justify-center size-5 shrink-0" style={{ color: '#10b981' }}></i></div>
                  <span>Feedback de la communauté</span>
                </div>
                <div className="flex items-center gap-4 text-base">
                  <div className="size-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-red text-white"><i data-lucide="check" className="inline-flex items-center justify-center size-5 shrink-0" style={{ color: '#10b981' }}></i></div>
                  <span>Support quand tu bloques</span>
                </div>
                <div className="flex items-center gap-4 text-base">
                  <div className="size-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-red text-white"><i data-lucide="check" className="inline-flex items-center justify-center size-5 shrink-0" style={{ color: '#10b981' }}></i></div>
                  <span>100% en français</span>
                </div>
                <div className="flex items-center gap-4 text-base">
                  <div className="size-7 rounded-full flex items-center justify-center text-sm shrink-0 bg-red text-white"><i data-lucide="check" className="inline-flex items-center justify-center size-5 shrink-0" style={{ color: '#10b981' }}></i></div>
                  <span>Réseau d'entrepreneurs Outre-mer & Afrique</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 rv">
            <a href="https://communaute.babaven.com/checkout/pro" className="btn btn-primary btn-large" target="_blank">
              Choisir le côté Babaven →
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Public Section */}
      <section className="py-[100px] bg-bg" id="tarifs">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[700px] mx-auto mb-[60px] rv">
            <span className="inline-block text-red text-xs font-bold uppercase tracking-wider mb-4">Investissement</span>
            <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] font-extrabold leading-tight">Un tarif <span className="serif">accessible à tous</span></h2>
          </div>

          <div className="pricing-toggle" style={{ maxWidth: '280px', margin: '0 auto 40px' }}>
            <button className="pricing-toggle-btn" data-plan="monthly">Mensuel</button>
            <button className="pricing-toggle-btn active" data-plan="yearly">Annuel</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto mt-12 stagger-container">
            <div className="pricing-card rv">
              <h3>Mensuel</h3>
              <div className="price">
                <span className="currency">€</span>
                <span className="amount" data-monthly="59" data-yearly="59">59</span>
                <span className="period">/mois</span>
              </div>
              <ul>
                <li>Accès à tous les cours</li>
                <li>Nouveaux cours mensuels</li>
                <li>Communauté Discord</li>
                <li>Templates & prompts</li>
              </ul>
              <a href="https://communaute.babaven.com/checkout/pro" className="btn btn-secondary" target="_blank">Choisir Mensuel</a>
            </div>

            <div className="pricing-card featured rv">
              <span className="pricing-badge">Le plus populaire</span>
              <h3>Annuel</h3>
              <div className="price">
                <span className="currency">€</span>
                <span className="amount" data-monthly="59" data-yearly="24">24</span>
                <span className="period">/mois</span>
              </div>
              <ul>
                <li>Tout du plan Mensuel</li>
                <li>Économise 420€/an</li>
                <li>Sessions live mensuelles</li>
                <li>Accès prioritaire aux nouveautés</li>
                <li>Bonus : Pack Business IA</li>
              </ul>
              <a href="https://communaute.babaven.com/checkout/pro" className="btn btn-primary" target="_blank">Choisir Annuel</a>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[700px] mx-auto mb-[60px] rv">
            <span className="inline-block text-red text-xs font-bold uppercase tracking-wider mb-4">Ils ont transformé leur business</span>
            <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] font-extrabold leading-tight">Ce que disent <span className="serif">nos membres</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 stagger-container">
            <div className="temoignage-card rv">
              <div className="flex gap-1 mb-5 text-[#ffb800] text-lg"><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i></div>
              <p className="temoignage-quote">"J'ai doublé ma productivité en 2 semaines. Ce qui me prenait 1 journée, je le fais maintenant en 1 heure avec les prompts que j'ai appris."</p>
              <div className="flex items-center gap-3.5">
                <div className="temoignage-avatar"><img src="/images/portrait-temoignage-2.png" alt="Marie L." /></div>
                <div className="temoignage-info">
                  <h4>Marie L.</h4>
                  <p>Freelance Marketing, Martinique</p>
                </div>
              </div>
            </div>

            <div className="temoignage-card rv">
              <div className="flex gap-1 mb-5 text-[#ffb800] text-lg"><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i></div>
              <p className="temoignage-quote">"Enfin une formation en français qui parle vraiment aux entrepreneurs. La méthode CORT a changé ma façon d'utiliser ChatGPT."</p>
              <div className="flex items-center gap-3.5">
                <div className="temoignage-avatar">KD</div>
                <div className="temoignage-info">
                  <h4>Karim D.</h4>
                  <p>E-commerçant, Guadeloupe</p>
                </div>
              </div>
            </div>

            <div className="temoignage-card rv">
              <div className="flex gap-1 mb-5 text-[#ffb800] text-lg"><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i><i data-lucide="star" className="inline-flex items-center justify-center size-4 shrink-0 text-[#ffb800]" style={{ display: 'inline-flex' }}></i></div>
              <p className="temoignage-quote">"La communauté vaut à elle seule l'abonnement. Pouvoir échanger avec d'autres entrepreneurs francophones, c'est précieux."</p>
              <div className="flex items-center gap-3.5">
                <div className="temoignage-avatar"><img src="/images/portrait-temoignage-1.png" alt="Sophie B." /></div>
                <div className="temoignage-info">
                  <h4>Sophie B.</h4>
                  <p>Créatrice de contenu, Côte d'Ivoire</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formatrice Section */}
      <section className="py-[100px] bg-cream" id="formatrice">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[80px] items-center">
            <div className="formatrice-content rv">
              <h2>Ta formatrice : <span className="serif">Barbara De La Cruz</span></h2>
              <p className="text-[17px] text-sub leading-relaxed mb-8">
                Experte en IA générative et fondatrice de Babaven Media. J'accompagne depuis 3 ans
                les entrepreneurs francophones à maîtriser l'IA pour scaler leur business.
                Ma méthode ? Zéro théorie, 100% action. Tu repars avec des compétences utilisables
                dès aujourd'hui, pas dans 6 mois.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-ink shadow-sm"><i data-lucide="graduation-cap" className="inline-flex items-center justify-center size-4 shrink-0" style={{ display: 'inline-flex', verticalAlign: 'middle', marginRight: '4px' }}></i> 500+ entrepreneurs formés</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-ink shadow-sm"><i data-lucide="mic-2" className="inline-flex items-center justify-center size-4 shrink-0" style={{ display: 'inline-flex', verticalAlign: 'middle', marginRight: '4px' }}></i> Speaker IA Outre-mer</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-ink shadow-sm"><i data-lucide="smartphone" className="inline-flex items-center justify-center size-4 shrink-0" style={{ display: 'inline-flex', verticalAlign: 'middle', marginRight: '4px' }}></i> Spécialiste contenu viral</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-ink shadow-sm"><i data-lucide="zap" className="inline-flex items-center justify-center size-4 shrink-0" style={{ display: 'inline-flex', verticalAlign: 'middle', marginRight: '4px' }}></i> Prompt Engineering Expert</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-md rv">
              <div className="size-[120px] rounded-full bg-ink flex items-center justify-center text-white text-5xl font-bold mx-auto mb-6 overflow-hidden"><img src="/images/barbara-de-la-cruz.png" alt="Barbara De La Cruz" /></div>
              <p className="font-['Alegreya',serif] italic text-[22px] text-center leading-snug mb-6 text-ink">"L'IA n'est pas le futur, c'est le présent. Mon mission : faire de toi un entrepreneur 10× plus productif."</p>
              <div className="flex flex-col gap-3 pt-6 border-t border-line">
                <div className="flex items-center gap-3 text-sm text-sub">
                  <div className="size-8 bg-bg rounded-lg flex items-center justify-center text-base"><i data-lucide="check" className="inline-flex items-center justify-center size-4 shrink-0" style={{ color: '#10b981' }}></i></div>
                  <span>Certifiée Prompt Engineering</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-sub">
                  <div className="size-8 bg-bg rounded-lg flex items-center justify-center text-base"><i data-lucide="check" className="inline-flex items-center justify-center size-4 shrink-0" style={{ color: '#10b981' }}></i></div>
                  <span>Partenaire officiel OpenAI & Anthropic</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-sub">
                  <div className="size-8 bg-bg rounded-lg flex items-center justify-center text-base"><i data-lucide="check" className="inline-flex items-center justify-center size-4 shrink-0" style={{ color: '#10b981' }}></i></div>
                  <span>Intervenante Entrepreneurs d'Outre-Mer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Formateur Section - Mathieu */}
      <section className="py-[100px] bg-bg" id="formateur">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[80px] items-center">
            <div className="bg-white rounded-2xl p-10 shadow-md rv">
              <div className="size-[120px] rounded-full bg-ink flex items-center justify-center text-white text-5xl font-bold mx-auto mb-6 overflow-hidden"><img src="/images/mathieu-de-gouville.png" alt="Mathieu de Gouville" /></div>
              <p className="font-['Alegreya',serif] italic text-[22px] text-center leading-snug mb-6 text-ink">&quot;Les Agents AI changent les règles du jeu. Avec les bons outils Gen AI et la bonne méthode, n&apos;importe quel entrepreneur peut devenir 10× plus efficace.&quot;</p>
              <div className="flex flex-col gap-3 pt-6 border-t border-line">
                <div className="flex items-center gap-3 text-sm text-sub">
                  <div className="size-8 bg-bg rounded-lg flex items-center justify-center text-base"><i data-lucide="check" className="inline-flex items-center justify-center size-4 shrink-0" style={{ color: '#10b981' }}></i></div>
                  <span>Fondateur de TideTech AI</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-sub">
                  <div className="size-8 bg-bg rounded-lg flex items-center justify-center text-base"><i data-lucide="check" className="inline-flex items-center justify-center size-4 shrink-0" style={{ color: '#10b981' }}></i></div>
                  <span>Créateur d&apos;OpenClaw &amp; Employés Virtuels Open Source</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-sub">
                  <div className="size-8 bg-bg rounded-lg flex items-center justify-center text-base"><i data-lucide="check" className="inline-flex items-center justify-center size-4 shrink-0" style={{ color: '#10b981' }}></i></div>
                  <span>Spécialiste Claude Code &amp; Google AI</span>
                </div>
              </div>
            </div>
            <div className="formatrice-content rv">
              <h2>Ton formateur : <span className="serif">Mathieu de Gouville</span></h2>
              <p className="text-[17px] text-sub leading-relaxed mb-8">
                Fondateur de TideTech AI, Mathieu présente la révolution OpenClaw — les Employés Virtuels Open Source
                qui font tourner ton business 24h/24 avec des Agents AI. Il t&apos;enseigne comment déployer ces outils
                Gen AI sans coder, sans expertise technique.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-ink shadow-sm"><i data-lucide="cpu" className="inline-flex items-center justify-center size-4 shrink-0" style={{ display: 'inline-flex', verticalAlign: 'middle', marginRight: '4px' }}></i> Automatisation no-code</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-ink shadow-sm"><i data-lucide="layers" className="inline-flex items-center justify-center size-4 shrink-0" style={{ display: 'inline-flex', verticalAlign: 'middle', marginRight: '4px' }}></i> Workflows IA avancés</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-ink shadow-sm"><i data-lucide="trending-up" className="inline-flex items-center justify-center size-4 shrink-0" style={{ display: 'inline-flex', verticalAlign: 'middle', marginRight: '4px' }}></i> Growth &amp; Scaling</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-ink shadow-sm"><i data-lucide="code-2" className="inline-flex items-center justify-center size-4 shrink-0" style={{ display: 'inline-flex', verticalAlign: 'middle', marginRight: '4px' }}></i> Claude Code Expert</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[100px] bg-white" id="faq">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-[80px] items-start">
            <div className="faq-title-sticky rv">
              <h2>Tu as des <span className="serif">questions ?</span></h2>
              <p>Tout ce que tu dois savoir avant de rejoindre l'académie.</p>
            </div>

            <div className="flex flex-col gap-3 stagger-container rv">
              <div className="faq-item rv">
                <button className="faq-question">
                  <span>Est-ce que j'ai besoin de compétences techniques ?</span>
                  <div className="faq-icon"><i data-lucide="plus" className="inline-flex items-center justify-center size-5 shrink-0"></i></div>
                </button>
                <div className="faq-answer">
                  <p>Absolument pas ! L'académie est conçue pour les débutants complets. On part de zéro et on construit étape par étape. Tous les outils sont expliqués simplement, avec des tutoriels pas à pas.</p>
                </div>
              </div>

              <div className="faq-item rv">
                <button className="faq-question">
                  <span>Combien de temps ai-je accès aux cours ?</span>
                  <div className="faq-icon"><i data-lucide="plus" className="inline-flex items-center justify-center size-5 shrink-0"></i></div>
                </button>
                <div className="faq-answer">
                  <p>Tant que tu es membre, tu as accès à tous les cours existants ET aux nouveaux qui sortent chaque mois. Pas de limite de temps sur ton apprentissage.</p>
                </div>
              </div>

              <div className="faq-item rv">
                <button className="faq-question">
                  <span>Puis-je annuler mon abonnement ?</span>
                  <div className="faq-icon"><i data-lucide="plus" className="inline-flex items-center justify-center size-5 shrink-0"></i></div>
                </button>
                <div className="faq-answer">
                  <p>Oui, bien sûr. Tu peux annuler à tout moment en un clic depuis ton compte. Pas de frais cachés, pas de questions. Tu gardes l'accès jusqu'à la fin de ta période payée.</p>
                </div>
              </div>

              <div className="faq-item rv">
                <button className="faq-question">
                  <span>Les cours sont-ils vraiment en français ?</span>
                  <div className="faq-icon"><i data-lucide="plus" className="inline-flex items-center justify-center size-5 shrink-0"></i></div>
                </button>
                <div className="faq-answer">
                  <p>100% en français ! Pas besoin de traduire ou de décrypter de l'anglais technique. Et surtout, les exemples sont adaptés au contexte caribéen et africain.</p>
                </div>
              </div>

              <div className="faq-item rv">
                <button className="faq-question">
                  <span>Quelle est la différence avec les tutoriels gratuits ?</span>
                  <div className="faq-icon"><i data-lucide="plus" className="inline-flex items-center justify-center size-5 shrink-0"></i></div>
                </button>
                <div className="faq-answer">
                  <p>Finis la dispersion. Ici, tu as un parcours structuré, des prompts testés et optimisés, une communauté pour t'aider, et du contenu mis à jour constamment. Tu économises des heures de recherche.</p>
                </div>
              </div>

              <div className="faq-item rv">
                <button className="faq-question">
                  <span>Comment puis-je poser mes questions ?</span>
                  <div className="faq-icon"><i data-lucide="plus" className="inline-flex items-center justify-center size-5 shrink-0"></i></div>
                </button>
                <div className="faq-answer">
                  <p>Via notre communauté Discord privée. Tu peux poser tes questions 24/7, partager tes créations pour feedback, et échanger avec d'autres entrepreneurs motivés.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-[120px] bg-ink relative overflow-hidden">
        <div className="cta-blob"></div>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="relative z-10 text-center max-w-[800px] mx-auto">
            <h2>Ne laisse pas l'IA<br />te dépasser.</h2>
            <p>Rejoins 500+ entrepreneurs qui maîtrisent déjà les outils du futur.</p>
            <a href="https://communaute.babaven.com/checkout/pro" className="btn btn-primary btn-large" target="_blank">
              Rejoindre l'académie maintenant →
            </a>
            <div className="cta-meta">
              <span>Sans engagement</span>
              <span>Résiliation 1 clic</span>
              <span>Accès immédiat</span>
              <span>100% français</span>
              <span>Apprends à ton rythme</span>
              <span>Communauté active</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-[60px] pb-[100px] bg-ink border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center gap-6">
            <a href="#" className="flex items-center gap-2.5 font-bold text-xl text-white">
              <div className="nav-logo-icon">B</div>
              <span>Babaven Académie</span>
            </a>
            <div className="flex gap-8">
              <a href="https://babaven.com" target="_blank">babaven.com</a>
              <a href="mailto:blogbabaven@gmail.com">Contact</a>
              <a href="https://instagram.com/babaven_media" target="_blank">Instagram</a>
              <a href="https://linkedin.com/company/babaven" target="_blank">LinkedIn</a>
            </div>
            <p className="text-[13px] text-muted">© 2026 Babaven Académie. Tous droits réservés.</p>
          </div>
        </div>
      </footer>


    </>
  )
}
