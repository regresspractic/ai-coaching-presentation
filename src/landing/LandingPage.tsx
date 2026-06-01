import "./landing.css";

export default function LandingPage() {
  return (
    <div className="lp-page">
      <header className="lp-nav">
        <a className="lp-brand" href="#top">
          <span className="lp-brand-mark" aria-hidden />
          <span>AI на службе у коуча</span>
        </a>

      </header>

      <main id="top">
        <section className="lp-hero" aria-labelledby="hero-title">
          <div className="lp-hero-grid">
            <div>
              <p className="lp-kicker">Интерактивная презентация</p>
              <h1 id="hero-title">
                <span className="lp-gradient-text">
                  Дивный новый инструментарий: ИИ на службе у коуча
                </span>
              </h1>
              <p className="lp-lead">
                Мини-лендинг и слайды Ольги Комиссаровой и Анны Чаковской:
                открывается на телефоне и компьютере, листается свайпами,
                стрелками и по ссылке на конкретный слайд.
              </p>
              <div className="lp-cta-row">
                <a className="lp-btn lp-btn--primary" href="#deck">
                  Открыть презентацию
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
