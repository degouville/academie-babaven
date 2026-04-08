export default function Home() {
  return (
    <>
  {/* Progress Bar */}
  <div className="progress-bar" id="progressBar"></div>

  {/* Navigation */}
  <nav className="nav" id="nav">
    <div className="container nav-container">
      <a href="#" className="nav-logo">
        <div className="nav-logo-icon">B</div>
        <span>Babaven Académie</span>
      </a>

      <div className="nav-links">
        <a href="#benefices">Bénéfices</a>
        <a href="#cours">Cours</a>
        <a href="#tarifs">Tarifs</a>
        <a href="#faq">FAQ</a>
        <a href="https://babaven.com" target="_blank">babaven.com</a>
      </div>

      <div className="nav-cta">
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
    <button className="mobile-menu-close" id="mobileMenuClose"><i data-lucide="x" className="icon icon-lg"></i></button>
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
    <div className="sticky-cta-content">
      <span className="sticky-cta-text"><i data-lucide="flame" className="icon icon-md icon-red" style={{display:'inline-flex',verticalAlign:'middle'}}></i> <strong>Offre limitée</strong> — Rejoins 500+ entrepreneurs déjà formés</span>
      <div style={{display:'flex',alignItems:'center',gap:'16px'}}>
        <a href="https://communaute.babaven.com/checkout/pro" className="btn btn-primary" target="_blank">S'inscrire maintenant</a>
        <button className="sticky-cta-close" id="stickyCtaClose"><i data-lucide="x" className="icon icon-md"></i></button>
      </div>
    </div>
  </div>

  {/* Hero Section */}
  <section className="hero" id="hero">
    <div className="hero-blob" id="heroBlob"></div>
    <div className="container">
      <div className="hero-content">
        <div className="hero-badge">1ère académie IA · 100% francophone</div>
        <h1>
          Maîtrise l'<span className="highlight">IA</span> avant que ça soit trop tard
        </h1>
        <p className="hero-subtitle">
          La première formation en français pour entrepreneurs caribéens et africains.
          Apprends à automatiser ton business, créer du contenu 10× plus vite et dépasser
          ta concurrence avec la méthode <strong>CORT</strong>.
        </p>
        <div className="hero-cta">
          <a href="https://communaute.babaven.com/checkout/pro" className="btn btn-primary btn-large" target="_blank">
            Rejoindre l'académie →
          </a>
          <a href="#cours" className="btn btn-secondary btn-large">
            Voir les cours disponibles
          </a>
        </div>
        <div className="hero-proof">
          <div className="hero-avatars">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=lea&backgroundColor=ffdfbf" alt="Avatar 1" />
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=karim&backgroundColor=c0aede" alt="Avatar 2" />
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=sofia&backgroundColor=ffd5dc" alt="Avatar 3" />
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=marc&backgroundColor=b6e3f4" alt="Avatar 4" />
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number"><span className="counter" data-target="500">0</span>+</div>
              <div className="hero-stat-label">entrepreneurs formés</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number"><span className="counter" data-target="100">0</span>%</div>
              <div className="hero-stat-label">francophone</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number"><span className="counter" data-target="4.9" data-decimals="1">0</span><i data-lucide="star" className="icon icon-sm icon-gold" style={{display:'inline-flex',verticalAlign:'middle',marginLeft:'2px'}}></i></div>
              <div className="hero-stat-label">note moyenne</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Logos Marquee Section */}
  <section className="logos-section">
    <div className="container">
      <p className="logos-label rv">Des professionnels de ces entreprises nous font confiance</p>
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
  <section className="urgence-section" id="urgence">
    <div className="container">
      <div className="urgence-grid">
        <div className="urgence-title rv">
          L'IA transforme le monde.<br />
          <span className="serif">Et toi, tu attends quoi ?</span>
        </div>
        <div className="pain-points stagger-container">
          <div className="pain-card rv">
            <div className="pain-card-icon"><i data-lucide="alert-circle" className="icon icon-2xl icon-red"></i></div>
            <h3>Tu te sens dépassé·e</h3>
            <p>ChatGPT, Claude, Claude Code, Google AI, Gemini... Les outils sortent plus vite que tu ne peux les tester. Tu ne sais pas lequel choisir, ni par où commencer. Résultat : tu stagnes pendant que d'autres avancent.</p>
          </div>
          <div className="pain-card rv">
            <div className="pain-card-icon"><i data-lucide="clock" className="icon icon-2xl" style={{color:'#f59e0b'}}></i></div>
            <h3>Tu manques de temps</h3>
            <p>Tes journées disparaissent dans des tâches qui ne rapportent rien. Contenu, mails, admin... Tu travailles 10h pour des résultats de 3h. Et ton vrai business ? Il attend.</p>
          </div>
          <div className="pain-card rv">
            <div className="pain-card-icon"><i data-lucide="frown" className="icon icon-2xl" style={{color:'#6366f1'}}></i></div>
            <h3>Tu n'es pas assez visible</h3>
            <p>Ta concurrence publie 3 posts par jour sans effort. Toi ? Tu galères à en sortir 3 par semaine. Ils prennent ta place. Tes clients te trouvent de moins en moins.</p>
          </div>
          <div className="pain-card rv">
            <div className="pain-card-icon"><i data-lucide="wallet" className="icon icon-2xl" style={{color:'#10b981'}}></i></div>
            <h3>Tu laisses de l'argent sur la table</h3>
            <p>Chaque nouveau client = plus de travail, pas plus de revenus. Sans automatisation, tu as créé un job, pas un business. Tu es coincé·e dans des tâches que l'IA pourrait faire à ta place.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Bénéfices Section */}
  <section className="benefices-section" id="benefices">
    <div className="container">
      <div className="section-header rv">
        <span className="section-label">Ce qui t'attend</span>
        <h2 className="section-title">Ce que tu vas accomplir <span className="serif">dès les premières semaines</span></h2>
      </div>

      <div className="benefices-grid stagger-container">
        <div className="benefice-card rv">
          <span className="benefice-number">01</span>
          <div className="benefice-icon"><i data-lucide="zap" className="icon icon-2xl icon-white"></i></div>
          <h3>Créer 10× plus vite</h3>
          <p>Termine en 1 heure ce qui te prenait 1 journée entière. Emails, posts, scripts vidéo : l'IA devient ton assistant infatigable.</p>
          <div className="benefice-result">→ 15 heures récupérées chaque semaine</div>
        </div>
        <div className="benefice-card rv">
          <span className="benefice-number">02</span>
          <div className="benefice-icon"><i data-lucide="bot" className="icon icon-2xl icon-white"></i></div>
          <h3>Automatiser tes tâches</h3>
          <p>Emails, factures, relances : ton business tourne pendant que tu dors. Les outils no-code font le travail à ta place, sans coder une seule ligne.</p>
          <div className="benefice-result">→ Fini les tâches répétitives</div>
        </div>
        <div className="benefice-card rv">
          <span className="benefice-number">03</span>
          <div className="benefice-icon"><i data-lucide="palette" className="icon icon-2xl icon-white"></i></div>
          <h3>Créer des visuels pro</h3>
          <p>Logos, miniatures, posts Instagram : tu crées des visuels dignes d'un designer en quelques minutes, sans compétences techniques.</p>
          <div className="benefice-result">→ -80% sur tes coûts design</div>
        </div>
        <div className="benefice-card rv">
          <span className="benefice-number">04</span>
          <div className="benefice-icon"><i data-lucide="video" className="icon icon-2xl icon-white"></i></div>
          <h3>Produire des vidéos</h3>
          <p>Montage auto, voix-off générée, sous-titres en 1 clic. Tu publies du contenu vidéo quotidien sans passer la journée devant un logiciel.</p>
          <div className="benefice-result">→ 3× plus d'engagement</div>
        </div>
        <div className="benefice-card rv">
          <span className="benefice-number">05</span>
          <div className="benefice-icon"><i data-lucide="file-text" className="icon icon-2xl icon-white"></i></div>
          <h3>Maîtriser les prompts</h3>
          <p>La méthode CORT : tu apprends à "parler" à l'IA pour obtenir des résultats exceptionnels du premier coup, sans frustration.</p>
          <div className="benefice-result">→ 5× meilleurs résultats</div>
        </div>
        <div className="benefice-card rv">
          <span className="benefice-number">06</span>
          <div className="benefice-icon"><i data-lucide="rocket" className="icon icon-2xl icon-white"></i></div>
          <h3>Développer ton business</h3>
          <p>Analyse tes données, génère des leads qualifiés, scale sans recruter. Tu passes de solopreneur à entrepreneur avec des systèmes qui grandissent avec toi.</p>
          <div className="benefice-result">→ +40% de revenus en moyenne</div>
        </div>
      </div>

      {/* Outils IA Marquee */}
      <div className="outils-marquee rv">
        <p className="outils-label">Les outils que tu vas maîtriser</p>
        <div className="marquee">
          <div className="outils-track">
            <div className="outil-item"><img src="logos-ia/chatgpt-icon-svg-download-png-7576880.webp" alt="ChatGPT" /><span>ChatGPT</span></div>
            <div className="outil-item"><img src="logos-ia/claude.svg" alt="Claude" /><span>Claude</span></div>
            <div className="outil-item"><img src="logos-ia/Google_Gemini_icon_2025.svg.png" alt="Google AI" /><span>Google AI</span></div>
            <div className="outil-item"><i data-lucide="terminal" className="icon icon-lg" style={{color:'#d97706'}}></i><span>Claude Code</span></div>
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
            <div className="outil-item"><i data-lucide="terminal" className="icon icon-lg" style={{color:'#d97706'}}></i><span>Claude Code</span></div>
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
  <section className="cours-section" id="cours">
    <div className="container">
      <div className="section-header rv">
        <span className="section-label">Formation continue</span>
        <h2 className="section-title">Les formations <span className="serif">à ta disposition</span></h2>
      </div>

      <div className="cours-list stagger-container">
        <div className="cours-row rv">
          <img src="cours/Cr%C3%A9e%CC%81%20ta%20thumbnail.png" alt="Crée ta thumbnail" className="cours-thumb" />
          <div className="cours-info">
            <span className="cours-category">Création de contenu</span>
            <h3 className="cours-title">Crée tes miniatures avec l'IA</h3>
            <p className="cours-desc">Des miniatures YouTube et réseaux qui font cliquer, sans jamais ouvrir Photoshop. Même si tu n'as aucun talent graphique.</p>
          </div>
          <div className="cours-status">
            <span className="status-badge status-available">Disponible</span>
            <div className="cours-arrow">→</div>
          </div>
        </div>

        <div className="cours-row rv">
          <img src="cours/Prompte%20Engineering.png" alt="Prompt Engineering" className="cours-thumb" />
          <div className="cours-info">
            <span className="cours-category">Fondamentaux</span>
            <h3 className="cours-title">Prompt Engineering Mastery</h3>
            <p className="cours-desc">La méthode CORT : obtiens des résultats professionnels de ChatGPT et Claude dès ta première utilisation. Fini les réponses médiocres.</p>
          </div>
          <div className="cours-status">
            <span className="status-badge status-available">Disponible</span>
            <div className="cours-arrow">→</div>
          </div>
        </div>

        <div className="cours-row rv">
          <div className="cours-thumb" style={{background:'linear-gradient(180deg, var(--red), var(--blue))',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:'32px'}}><i data-lucide="video" className="icon icon-xl icon-white"></i></div>
          <div className="cours-info">
            <span className="cours-category">Vidéo</span>
            <h3 className="cours-title">Édition vidéo avec l'IA</h3>
            <p className="cours-desc">Monte tes vidéos 10× plus vite avec des outils comme CapCut IA et Opus Clip.</p>
          </div>
          <div className="cours-status">
            <span className="status-badge status-soon">Bientôt</span>
            <div className="cours-arrow">→</div>
          </div>
        </div>

        <div className="cours-row rv">
          <div className="cours-thumb" style={{background:'linear-gradient(180deg, #6366f1, #8b5cf6)',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:'32px'}}><i data-lucide="bot" className="icon icon-xl icon-white"></i></div>
          <div className="cours-info">
            <span className="cours-category">Automatisation</span>
            <h3 className="cours-title">Automatisation avec Claude Code</h3>
            <p className="cours-desc">Automatise tes workflows et génère du code avec l'IA. De débutant à avancé.</p>
          </div>
          <div className="cours-status">
            <span className="status-badge status-soon">Bientôt</span>
            <div className="cours-arrow">→</div>
          </div>
        </div>

        <div className="cours-row rv">
          <div className="cours-thumb" style={{background:'linear-gradient(180deg, #10b981, #059669)',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:'32px'}}><i data-lucide="palette" className="icon icon-xl icon-white"></i></div>
          <div className="cours-info">
            <span className="cours-category">Design</span>
            <h3 className="cours-title">Google AI & Gemini Masterclass</h3>
            <p className="cours-desc">Crée des images professionnelles pour ta marque, tes produits et tes réseaux sociaux.</p>
          </div>
          <div className="cours-status">
            <span className="status-badge status-soon">Bientôt</span>
            <div className="cours-arrow">→</div>
          </div>
        </div>

        <div className="cours-row rv">
          <div className="cours-thumb" style={{background:'linear-gradient(180deg, #f59e0b, #d97706)',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:'32px'}}><i data-lucide="mic" className="icon icon-xl icon-white"></i></div>
          <div className="cours-info">
            <span className="cours-category">Audio</span>
            <h3 className="cours-title">Voix & Musique IA</h3>
            <p className="cours-desc">Clone ta voix, crée des podcasts et génère des musiques libres de droits avec ElevenLabs et Suno.</p>
          </div>
          <div className="cours-status">
            <span className="status-badge status-soon">Bientôt</span>
            <div className="cours-arrow">→</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Programme + Pricing Section */}
  <section className="programme-section" id="programme">
    <div className="container">
      <div className="section-header rv">
        <span className="section-label">Parcours complet</span>
        <h2 className="section-title">Le programme <span className="serif">étape par étape</span></h2>
      </div>

      <div className="programme-grid">
        <div className="programme-list stagger-container rv">
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
  <section className="compare-section">
    <div className="container">
      <div className="section-header rv">
        <span className="section-label">La différence</span>
        <h2 className="section-title">Avec vs. <span className="serif">sans Babaven Académie</span></h2>
      </div>

      <div className="compare-grid rv">
        <div className="compare-col sans">
          <div className="compare-header">
            <h3><i data-lucide="x-circle" className="icon icon-lg" style={{color:'var(--red)',display:'inline-flex',verticalAlign:'middle',marginRight:'8px'}}></i> Sans Babaven</h3>
            <p>Tu apprends seul·e</p>
          </div>
          <div className="compare-list stagger-container">
            <div className="compare-item rv">
              <div className="compare-icon"><i data-lucide="x" className="icon icon-md" style={{color:'var(--red)'}}></i></div>
              <span>Des heures perdues sur YouTube</span>
            </div>
            <div className="compare-item">
              <div className="compare-icon"><i data-lucide="x" className="icon icon-md" style={{color:'var(--red)'}}></i></div>
              <span>Des outils payés mais mal utilisés</span>
            </div>
            <div className="compare-item">
              <div className="compare-icon"><i data-lucide="x" className="icon icon-md" style={{color:'var(--red)'}}></i></div>
              <span>Aucun retour sur ton travail</span>
            </div>
            <div className="compare-item">
              <div className="compare-icon"><i data-lucide="x" className="icon icon-md" style={{color:'var(--red)'}}></i></div>
              <span>Tu restes bloqué·e sur les bugs</span>
            </div>
            <div className="compare-item">
              <div className="compare-icon"><i data-lucide="x" className="icon icon-md" style={{color:'var(--red)'}}></i></div>
              <span>Contenu en anglais uniquement</span>
            </div>
            <div className="compare-item">
              <div className="compare-icon"><i data-lucide="x" className="icon icon-md" style={{color:'var(--red)'}}></i></div>
              <span>Pas de communauté francophone</span>
            </div>
          </div>
        </div>

        <div className="compare-col avec">
          <div className="compare-header">
            <h3><i data-lucide="check-circle" className="icon icon-lg" style={{color:'#10b981',display:'inline-flex',verticalAlign:'middle',marginRight:'8px'}}></i> Avec Babaven</h3>
            <p>Tu progresses 10× plus vite</p>
          </div>
          <div className="compare-list stagger-container">
            <div className="compare-item rv">
              <div className="compare-icon"><i data-lucide="check" className="icon icon-md" style={{color:'#10b981'}}></i></div>
              <span>Parcours structuré étape par étape</span>
            </div>
            <div className="compare-item">
              <div className="compare-icon"><i data-lucide="check" className="icon icon-md" style={{color:'#10b981'}}></i></div>
              <span>Tu maîtrises chaque outil</span>
            </div>
            <div className="compare-item">
              <div className="compare-icon"><i data-lucide="check" className="icon icon-md" style={{color:'#10b981'}}></i></div>
              <span>Feedback de la communauté</span>
            </div>
            <div className="compare-item">
              <div className="compare-icon"><i data-lucide="check" className="icon icon-md" style={{color:'#10b981'}}></i></div>
              <span>Support quand tu bloques</span>
            </div>
            <div className="compare-item">
              <div className="compare-icon"><i data-lucide="check" className="icon icon-md" style={{color:'#10b981'}}></i></div>
              <span>100% en français</span>
            </div>
            <div className="compare-item">
              <div className="compare-icon"><i data-lucide="check" className="icon icon-md" style={{color:'#10b981'}}></i></div>
              <span>Réseau d'entrepreneurs Outre-mer & Afrique</span>
            </div>
          </div>
        </div>
      </div>

      <div className="compare-cta rv">
        <a href="https://communaute.babaven.com/checkout/pro" className="btn btn-primary btn-large" target="_blank">
          Choisir le côté Babaven →
        </a>
      </div>
    </div>
  </section>

  {/* Pricing Public Section */}
  <section className="pricing-public-section" id="tarifs">
    <div className="container">
      <div className="section-header rv">
        <span className="section-label">Investissement</span>
        <h2 className="section-title">Un tarif <span className="serif">accessible à tous</span></h2>
      </div>

      <div className="pricing-toggle" style={{maxWidth:'280px',margin:'0 auto 40px'}}>
        <button className="pricing-toggle-btn" data-plan="monthly">Mensuel</button>
        <button className="pricing-toggle-btn active" data-plan="yearly">Annuel</button>
      </div>

      <div className="pricing-cards stagger-container">
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
  <section className="temoignages-section">
    <div className="container">
      <div className="section-header rv">
        <span className="section-label">Ils ont transformé leur business</span>
        <h2 className="section-title">Ce que disent <span className="serif">nos membres</span></h2>
      </div>

      <div className="temoignages-grid stagger-container">
        <div className="temoignage-card rv">
          <div className="stars"><i data-lucide="star" className="icon icon-sm icon-gold" style={{display:'inline-flex'}}></i><i data-lucide="star" className="icon icon-sm icon-gold" style={{display:'inline-flex'}}></i><i data-lucide="star" className="icon icon-sm icon-gold" style={{display:'inline-flex'}}></i><i data-lucide="star" className="icon icon-sm icon-gold" style={{display:'inline-flex'}}></i><i data-lucide="star" className="icon icon-sm icon-gold" style={{display:'inline-flex'}}></i></div>
          <p className="temoignage-quote">"J'ai doublé ma productivité en 2 semaines. Ce qui me prenait 1 journée, je le fais maintenant en 1 heure avec les prompts que j'ai appris."</p>
          <div className="temoignage-author">
            <div className="temoignage-avatar">ML</div>
            <div className="temoignage-info">
              <h4>Marie L.</h4>
              <p>Freelance Marketing, Martinique</p>
            </div>
          </div>
        </div>

        <div className="temoignage-card rv">
          <div className="stars"><i data-lucide="star" className="icon icon-sm icon-gold" style={{display:'inline-flex'}}></i><i data-lucide="star" className="icon icon-sm icon-gold" style={{display:'inline-flex'}}></i><i data-lucide="star" className="icon icon-sm icon-gold" style={{display:'inline-flex'}}></i><i data-lucide="star" className="icon icon-sm icon-gold" style={{display:'inline-flex'}}></i><i data-lucide="star" className="icon icon-sm icon-gold" style={{display:'inline-flex'}}></i></div>
          <p className="temoignage-quote">"Enfin une formation en français qui parle vraiment aux entrepreneurs. La méthode CORT a changé ma façon d'utiliser ChatGPT."</p>
          <div className="temoignage-author">
            <div className="temoignage-avatar">KD</div>
            <div className="temoignage-info">
              <h4>Karim D.</h4>
              <p>E-commerçant, Guadeloupe</p>
            </div>
          </div>
        </div>

        <div className="temoignage-card rv">
          <div className="stars"><i data-lucide="star" className="icon icon-sm icon-gold" style={{display:'inline-flex'}}></i><i data-lucide="star" className="icon icon-sm icon-gold" style={{display:'inline-flex'}}></i><i data-lucide="star" className="icon icon-sm icon-gold" style={{display:'inline-flex'}}></i><i data-lucide="star" className="icon icon-sm icon-gold" style={{display:'inline-flex'}}></i><i data-lucide="star" className="icon icon-sm icon-gold" style={{display:'inline-flex'}}></i></div>
          <p className="temoignage-quote">"La communauté vaut à elle seule l'abonnement. Pouvoir échanger avec d'autres entrepreneurs francophones, c'est précieux."</p>
          <div className="temoignage-author">
            <div className="temoignage-avatar">SB</div>
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
  <section className="formatrice-section" id="formatrice">
    <div className="container">
      <div className="formatrice-grid">
        <div className="formatrice-content rv">
          <h2>Ta formatrice : <span className="serif">Barbara De La Cruz</span></h2>
          <p className="formatrice-bio">
            Experte en IA générative et fondatrice de Babaven Media. J'accompagne depuis 3 ans
            les entrepreneurs francophones à maîtriser l'IA pour scaler leur business.
            Ma méthode ? Zéro théorie, 100% action. Tu repars avec des compétences utilisables
            dès aujourd'hui, pas dans 6 mois.
          </p>
          <div className="formatrice-tags">
            <span className="formatrice-tag"><i data-lucide="graduation-cap" className="icon icon-sm" style={{display:'inline-flex',verticalAlign:'middle',marginRight:'4px'}}></i> 500+ entrepreneurs formés</span>
            <span className="formatrice-tag"><i data-lucide="mic-2" className="icon icon-sm" style={{display:'inline-flex',verticalAlign:'middle',marginRight:'4px'}}></i> Speaker IA Outre-mer</span>
            <span className="formatrice-tag"><i data-lucide="smartphone" className="icon icon-sm" style={{display:'inline-flex',verticalAlign:'middle',marginRight:'4px'}}></i> Spécialiste contenu viral</span>
            <span className="formatrice-tag"><i data-lucide="zap" className="icon icon-sm" style={{display:'inline-flex',verticalAlign:'middle',marginRight:'4px'}}></i> Prompt Engineering Expert</span>
          </div>
        </div>

        <div className="formatrice-card rv">
          <div className="formatrice-avatar-large">B</div>
          <p className="formatrice-quote">"L'IA n'est pas le futur, c'est le présent. Mon mission : faire de toi un entrepreneur 10× plus productif."</p>
          <div className="formatrice-credentials">
            <div className="credential">
              <div className="credential-icon"><i data-lucide="check" className="icon icon-sm" style={{color:'#10b981'}}></i></div>
              <span>Certifiée Prompt Engineering</span>
            </div>
            <div className="credential">
              <div className="credential-icon"><i data-lucide="check" className="icon icon-sm" style={{color:'#10b981'}}></i></div>
              <span>Partenaire officiel OpenAI & Anthropic</span>
            </div>
            <div className="credential">
              <div className="credential-icon"><i data-lucide="check" className="icon icon-sm" style={{color:'#10b981'}}></i></div>
              <span>Intervenante Entrepreneurs d'Outre-Mer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* FAQ Section */}
  <section className="faq-section" id="faq">
    <div className="container">
      <div className="faq-grid">
        <div className="faq-title-sticky rv">
          <h2>Tu as des <span className="serif">questions ?</span></h2>
          <p>Tout ce que tu dois savoir avant de rejoindre l'académie.</p>
        </div>

        <div className="faq-list stagger-container rv">
          <div className="faq-item rv">
            <button className="faq-question">
              <span>Est-ce que j'ai besoin de compétences techniques ?</span>
              <div className="faq-icon"><i data-lucide="plus" className="icon icon-md"></i></div>
            </button>
            <div className="faq-answer">
              <p>Absolument pas ! L'académie est conçue pour les débutants complets. On part de zéro et on construit étape par étape. Tous les outils sont expliqués simplement, avec des tutoriels pas à pas.</p>
            </div>
          </div>

          <div className="faq-item rv">
            <button className="faq-question">
              <span>Combien de temps ai-je accès aux cours ?</span>
              <div className="faq-icon"><i data-lucide="plus" className="icon icon-md"></i></div>
            </button>
            <div className="faq-answer">
              <p>Tant que tu es membre, tu as accès à tous les cours existants ET aux nouveaux qui sortent chaque mois. Pas de limite de temps sur ton apprentissage.</p>
            </div>
          </div>

          <div className="faq-item rv">
            <button className="faq-question">
              <span>Puis-je annuler mon abonnement ?</span>
              <div className="faq-icon"><i data-lucide="plus" className="icon icon-md"></i></div>
            </button>
            <div className="faq-answer">
              <p>Oui, bien sûr. Tu peux annuler à tout moment en un clic depuis ton compte. Pas de frais cachés, pas de questions. Tu gardes l'accès jusqu'à la fin de ta période payée.</p>
            </div>
          </div>

          <div className="faq-item rv">
            <button className="faq-question">
              <span>Les cours sont-ils vraiment en français ?</span>
              <div className="faq-icon"><i data-lucide="plus" className="icon icon-md"></i></div>
            </button>
            <div className="faq-answer">
              <p>100% en français ! Pas besoin de traduire ou de décrypter de l'anglais technique. Et surtout, les exemples sont adaptés au contexte caribéen et africain.</p>
            </div>
          </div>

          <div className="faq-item rv">
            <button className="faq-question">
              <span>Quelle est la différence avec les tutoriels gratuits ?</span>
              <div className="faq-icon"><i data-lucide="plus" className="icon icon-md"></i></div>
            </button>
            <div className="faq-answer">
              <p>Finis la dispersion. Ici, tu as un parcours structuré, des prompts testés et optimisés, une communauté pour t'aider, et du contenu mis à jour constamment. Tu économises des heures de recherche.</p>
            </div>
          </div>

          <div className="faq-item rv">
            <button className="faq-question">
              <span>Comment puis-je poser mes questions ?</span>
              <div className="faq-icon"><i data-lucide="plus" className="icon icon-md"></i></div>
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
  <section className="cta-final-section">
    <div className="cta-blob"></div>
    <div className="container">
      <div className="cta-content">
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
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <a href="#" className="footer-logo">
          <div className="nav-logo-icon">B</div>
          <span>Babaven Académie</span>
        </a>
        <div className="footer-links">
          <a href="https://babaven.com" target="_blank">babaven.com</a>
          <a href="mailto:blogbabaven@gmail.com">Contact</a>
          <a href="https://instagram.com/babaven_media" target="_blank">Instagram</a>
          <a href="https://linkedin.com/company/babaven" target="_blank">LinkedIn</a>
        </div>
        <p className="footer-copy">© 2026 Babaven Académie. Tous droits réservés.</p>
      </div>
    </div>
  </footer>


    </>
  )
}
