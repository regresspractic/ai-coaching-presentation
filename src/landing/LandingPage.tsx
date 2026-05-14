import { type ReactNode, useEffect, useRef, useState } from "react";
import "./landing.css";

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setOn(true);
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`lp-reveal ${on ? "is-on" : ""} ${className}`}>
      {children}
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="lp-page">
      <header className="lp-nav">
        <a className="lp-brand" href="#top">
          <span className="lp-brand-mark" aria-hidden />
          <span>AI на службе у коуча</span>
        </a>
        <nav className="lp-nav-links" aria-label="Разделы">
          <a href="#about">О чем</a>
          <a href="#format">Формат</a>
          <a href="#speakers">Авторы</a>
          <a href="#deck">Слайды</a>
        </nav>
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
                <a className="lp-btn lp-btn--ghost" href="#format">
                  Посмотреть формат
                </a>
              </div>
            </div>
            <aside className="lp-hero-card" aria-label="Текущий статус">
              <h3>Рабочая версия</h3>
              <p>
                Контент вынесен в один редактируемый файл. Можно спокойно
                дописывать финальные слайды, менять формулировки и сразу
                смотреть результат в браузере.
              </p>
            </aside>
          </div>
        </section>

        <section className="lp-section" id="about" aria-labelledby="about-title">
          <Reveal>
            <div className="lp-section-head">
              <h2 id="about-title">О чем эта презентация</h2>
              <p>
                Не про хайп вокруг нейросетей, а про практичный способ думать
                вместе с ИИ: формулировать запрос, проверять смысл и быстрее
                собирать рабочие материалы для коучинга.
              </p>
            </div>
          </Reveal>
          <div className="lp-grid lp-grid--3">
            <Reveal>
              <article className="lp-card">
                <div className="lp-icon" aria-hidden>
                  1
                </div>
                <h3>Инструменты</h3>
                <p>Claude, Gemini, ChatGPT и сценарии, где каждый удобнее.</p>
              </article>
            </Reveal>
            <Reveal>
              <article className="lp-card">
                <div className="lp-icon" aria-hidden>
                  2
                </div>
                <h3>Промпты</h3>
                <p>Как объяснять задачу просто и получать сильный первый черновик.</p>
              </article>
            </Reveal>
            <Reveal>
              <article className="lp-card">
                <div className="lp-icon" aria-hidden>
                  3
                </div>
                <h3>Кейсы</h3>
                <p>Как превращать идею в визуал, тест, квиз или структуру сессии.</p>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="lp-section" id="format" aria-labelledby="format-title">
          <Reveal>
            <div className="lp-section-head">
              <h2 id="format-title">Формат для совместной правки</h2>
              <p>
                Сайт можно открыть локально сейчас, а позже выложить на GitHub
                Pages или любой статический хостинг. Адрес с `#7` сразу откроет
                седьмой слайд, поэтому правки удобно обсуждать точечно.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="lp-card" style={{ padding: "1.25rem 1.35rem" }}>
              <ul className="lp-list">
                <li>Телефон: свайп влево и вправо, кнопки снизу, адаптивная высота.</li>
                <li>Компьютер: стрелки, пробел, PageUp/PageDown, Home/End.</li>
                <li>Полный экран: клавиша F в режиме презентации.</li>
                <li>Правки: основной сценарий лежит в `src/slides/content.ts`.</li>
              </ul>
            </div>
          </Reveal>
        </section>

        <section className="lp-section" id="speakers" aria-labelledby="speakers-title">
          <Reveal>
            <div className="lp-section-head">
              <h2 id="speakers-title">Авторы</h2>
              <p>
                Ольга Комиссарова и Анна Чаковская. Карточка Анны намеренно
                оставлена лаконичной, чтобы не сбивать текущую задумку.
              </p>
            </div>
          </Reveal>
          <div className="lp-grid lp-grid--2">
            <Reveal>
              <article className="lp-card">
                <span className="lp-pill">Executive Coach</span>
                <h3>Ольга Комиссарова</h3>
                <p>21+ год в управлении командами и интеграции новых подходов в работу руководителей.</p>
              </article>
            </Reveal>
            <Reveal>
              <article className="lp-card">
                <span className="lp-pill">Co-author</span>
                <h3>Анна Чаковская</h3>
                <p>Соавтор презентации и рабочей структуры для выступления.</p>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="lp-final" id="cta" aria-labelledby="cta-title">
          <Reveal>
            <h2 id="cta-title">Готовы смотреть слайды?</h2>
            <p>
              Откройте презентацию, пройдитесь по текущей версии и отмечайте,
              где нужно дописать финальные блоки.
            </p>
            <div className="lp-cta-row" style={{ justifyContent: "center" }}>
              <a className="lp-btn lp-btn--primary" href="#deck">
                Открыть презентацию
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="lp-footer">
        Ольга Комиссарова · Анна Чаковская · интерактивная веб-презентация
      </footer>
    </div>
  );
}
