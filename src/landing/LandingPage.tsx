import "./landing.css";
import type { ReactNode } from "react";
import { useEffect } from "react";

const telegramUrl = "https://t.me/aipartner_olga_bot?start=JULY16";
const asset = (fileName: string) => `${import.meta.env.BASE_URL}assets/${fileName}`;
const robotImage = asset("ai-partner-white-hero.jpeg");
const qrImage = asset("aipartner-qr-july16.png");

const modules = [
  "Авторский стиль",
  "Telegram-канал",
  "Посты",
  "Stories",
  "Reels",
  "YouTube",
  "Брендбук",
  "Изображения",
  "Мои тексты",
];

const roadmap = [
  {
    status: "В разработке",
    title: "Воронки",
    body: "Связывание отдельных публикаций в единые логические маркетинговые цепочки для автоматизации прогревов.",
  },
  {
    status: "План",
    title: "Аналитика",
    body: "Отслеживание эффективности ваших мыслей: вовлечение, глубина дочитываний и конверсионные действия.",
  },
  {
    status: "План",
    title: "Персонализация",
    body: "Тончайшая калибровка авторского голоса под любые узкие бизнес-ниши и специфику аудитории.",
  },
  {
    status: "План",
    title: "Новые AI-модули",
    body: "Приоритетное подключение передовых генеративных языковых моделей нового поколения.",
  },
];

function SlideShell({
  number,
  label,
  children,
  className = "",
}: {
  number: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`ap-slide ${className}`} id={`slide-${number}`}>
      <header className="ap-slide-top">
        <a href="#top">AI-PARTNER • ПЛАТФОРМА ЛИЧНОГО БРЕНДА</a>
        <span>СЛАЙД {number}/13</span>
      </header>
      <div className="ap-slide-body">{children}</div>
      <footer className="ap-slide-bottom">
        <span>{label}</span>
        <span>© 2026 AI-Partner</span>
      </footer>
    </section>
  );
}

function RobotImage({ className = "", eager = false }: { className?: string; eager?: boolean }) {
  return (
    <img
      className={`ap-robot ${className}`}
      src={robotImage}
      alt="AI-Partner"
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

export default function LandingPage() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    };

    window.setTimeout(scrollToHash, 0);
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <main className="ap-page" id="top">
      <SlideShell number="01" label="Платформа личного бренда" className="ap-hero">
        <div className="ap-copy">
          <h1>Всё для развития личного бренда — в одном AI-Partner.</h1>
          <p>
            Создавайте посты, Stories, Reels, YouTube-сценарии, изображения и брендбук
            в собственном авторском стиле.
          </p>
        </div>
        <RobotImage className="ap-hero-robot" eager />
      </SlideShell>

      <SlideShell number="02" label="Главный барьер">
        <div className="ap-wide-copy">
          <p className="ap-eyebrow">Почему хорошие мысли не становятся контентом</p>
          <h2>Хорошие мысли остаются...</h2>
        </div>
        <div className="ap-barrier-grid">
          <div className="ap-barrier-card">в голосовых сообщениях</div>
          <div className="ap-barrier-card">в заметках</div>
          <div className="ap-barrier-card">в мыслях «напишу потом»</div>
        </div>
        <p className="ap-muted ap-narrow">
          Ежедневные идеи и наблюдения исчезают, когда их нужно превращать в публикации
          вручную.
        </p>
      </SlideShell>

      <SlideShell number="03" label="Как это работает" className="ap-flow-slide">
        <div className="ap-wide-copy">
          <h2>AI-Partner помогает придать мыслям форму</h2>
        </div>
        <div className="ap-flow">
          {["Голос", "Мысль", "Пост", "Stories", "Reels"].map((item, index) => (
            <div className="ap-flow-step" key={item}>
              <span>{item}</span>
              {index < 4 ? <b aria-hidden>›</b> : null}
            </div>
          ))}
        </div>
      </SlideShell>

      <SlideShell number="04" label="Быстрый старт" className="ap-steps-slide">
        <h2>Запуск в 5 шагов</h2>
        <div className="ap-steps-layout">
          <RobotImage />
          <ol className="ap-steps">
            <li><strong>Знакомство</strong><span>Быстрый старт в Telegram-боте без сложных регистраций.</span></li>
            <li><strong>Согласие</strong><span>Подтверждение доступа к транскрибации голосовых сообщений.</span></li>
            <li><strong>Подключение Telegram-канала или лучших авторских текстов</strong><span>Интеграция канала или загрузка примеров для обучения авторскому стилю.</span></li>
            <li><strong>Первая мысль</strong><span>Запись голосового сообщения с любой идеей в свободном формате.</span></li>
            <li><strong>Первый пост</strong><span>Получение структурированного материала в вашем стиле.</span></li>
          </ol>
        </div>
      </SlideShell>

      <SlideShell number="05" label="Структура платформы" className="ap-ecosystem">
        <h2>Экосистема создания контента</h2>
        <div className="ap-ecosystem-map">
          <div className="ap-module ap-module-left">Telegram</div>
          <div className="ap-module ap-module-left">Память стиля</div>
          <div className="ap-core">
            <RobotImage />
            <strong>ЯДРО ИНТЕЛЛЕКТА</strong>
          </div>
          <div className="ap-module">Пост</div>
          <div className="ap-module">Stories</div>
          <div className="ap-module">Reels</div>
          <div className="ap-module">Мои тексты</div>
        </div>
      </SlideShell>

      <SlideShell number="06" label="Модульная платформа" className="ap-modular">
        <h2>Всё для развития личного бренда — в одном AI-Partner</h2>
        <div className="ap-modular-grid">
          <div className="ap-modular-copy">
            <p>Начните с одного поста. Постепенно соберите собственную AI-систему для развития личного бренда.</p>
            <strong>Модульная система, которая растёт вместе с автором и его задачами.</strong>
          </div>
          <RobotImage />
          <div className="ap-module-grid">
            {modules.map((item) => (
              <div className="ap-module" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </SlideShell>

      <SlideShell number="07" label="Кейс" className="ap-case-slide">
        <h2>Я не люблю вести соцсети. Мне жалко на это время.</h2>
        <p className="ap-eyebrow">Как одна голосовая мысль превращается в пост, который хочется опубликовать</p>
        <div className="ap-case-grid">
          <article>
            <h3>Входная мысль</h3>
            <blockquote>
              «Я не люблю вести соцсети. Мне жалко на это время. Но мысли у меня есть
              постоянно — в работе, в дороге, после разговоров с клиентами. Хочу просто
              наговорить их голосом и получить текст, который звучит как я.»
            </blockquote>
            <div className="ap-voice">Голосовое сообщение: 0:42</div>
          </article>
          <article>
            <h3>Готовый пост в вашем стиле</h3>
            <h4>Я не люблю вести соцсети. И больше не заставляю себя.</h4>
            <p>
              Мне правда жалко тратить часы на посты. Не потому, что мне нечего сказать —
              наоборот, мысли приходят постоянно. Просто раньше между идеей и публикацией
              стояли чистый лист, редактура и вечное «сделаю потом».
            </p>
            <p>
              Теперь я наговариваю мысль голосом, а AI-Partner собирает её в готовый пост —
              в моём стиле, без канцелярита и чужого голоса. Я перечитываю, добавляю пару
              штрихов и публикую. Соцсети наконец перестали быть второй работой.
            </p>
          </article>
        </div>
      </SlideShell>

      <SlideShell number="08" label="Тест-драйв" className="ap-testdrive">
        <div className="ap-wide-copy">
          <h2>Протестируйте без обязательств</h2>
          <p>Комфортные условия для знакомства с возможностями AI-системы</p>
        </div>
        <div className="ap-metrics">
          <div><strong>7</strong><span>дней бесплатно</span></div>
          <div><strong>30</strong><span>генераций за весь пробный период</span></div>
          <div><strong>10</strong><span>не более 10 генераций в день</span></div>
        </div>
        <div className="ap-gift">
          <h3>Дополнительно в подарок</h3>
          <ul>
            <li>3 готовых изображения за весь пробный период</li>
            <li>1 сценарий Reels</li>
            <li>1 структура или сценарий YouTube</li>
            <li>краткое превью персонального брендбука</li>
          </ul>
        </div>
      </SlideShell>

      <SlideShell number="09" label="Стоимость подписки" className="ap-pricing">
        <div className="ap-wide-copy">
          <h2>Простая и честная подписка</h2>
          <p>Выберите подходящий тариф для развития вашего бренда</p>
        </div>
        <div className="ap-price-grid">
          <article>
            <h3>AI-Partner Start</h3>
            <p>Для регулярного создания контента в своём авторском стиле.</p>
            <div className="ap-price">990 ₽ <span>/ месяц</span></div>
            <ul>
              <li>Авторский стиль</li>
              <li>Telegram-канал</li>
              <li>Посты</li>
              <li>Stories</li>
              <li>Визуальные идеи для постов и Stories</li>
              <li>До 10 генераций в день</li>
            </ul>
          </article>
          <article className="ap-recommended">
            <em>Рекомендуем</em>
            <h3>AI-Partner Pro</h3>
            <p>Полная AI-система для развития личного бренда.</p>
            <div className="ap-price">2 990 ₽ <span>/ месяц</span></div>
            <ul>
              <li>Всё из Start</li>
              <li>Reels</li>
              <li>YouTube</li>
              <li>Полный персональный брендбук</li>
              <li>Генерация изображений</li>
              <li>Расширенные лимиты</li>
              <li>Приоритетный доступ к новым AI-модулям</li>
            </ul>
          </article>
        </div>
      </SlideShell>

      <SlideShell number="10" label="Миссия платформы" className="ap-mission">
        <blockquote>
          Если вам есть что сказать, но сложно делать это регулярно — AI-Partner создан
          специально для вас.
        </blockquote>
        <p>Инструмент, убирающий барьер между мыслями и публикациями</p>
      </SlideShell>

      <SlideShell number="11" label="Дорожная карта" className="ap-roadmap">
        <div className="ap-wide-copy">
          <h2>План развития продукта</h2>
          <p>Какие возможности появятся в будущих обновлениях</p>
        </div>
        <div className="ap-roadmap-grid">
          {roadmap.map((item) => (
            <article key={item.title}>
              <span>{item.status}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </SlideShell>

      <SlideShell number="12" label="Финал" className="ap-final-soft">
        <div className="ap-copy">
          <h2>Не позволяйте вашим хорошим мыслям бесследно исчезать</h2>
          <p>Начните с первой мысли прямо сейчас.</p>
        </div>
        <RobotImage />
      </SlideShell>

      <SlideShell number="13" label="Платформа личного бренда" className="ap-final-qr">
        <div className="ap-final-copy">
          <h2>Не позволяйте вашим хорошим мыслям бесследно исчезать</h2>
          <p>Попробуйте AI-Partner бесплатно уже сегодня.</p>
          <ul>
            <li><strong>Быстрый старт</strong><span>Запустите AI-партнёра за 5 минут</span></li>
            <li><strong>Ваш авторский стиль</strong><span>Контент, который звучит именно как вы</span></li>
            <li><strong>Весь контент в одном месте</strong><span>Посты, Stories, Reels, YouTube и больше</span></li>
            <li><strong>Безопасно и конфиденциально</strong><span>Ваши данные под надёжной защитой</span></li>
          </ul>
        </div>
        <div className="ap-qr-card">
          <a href={telegramUrl} target="_blank" rel="noopener noreferrer" aria-label="Открыть AI-Partner в Telegram">
            <img src={qrImage} alt="QR-код Telegram AI-Partner" loading="lazy" decoding="async" />
          </a>
          <h3>7 дней бесплатно</h3>
          <p>Наведите камеру телефона и начните прямо сейчас.</p>
          <a className="ap-telegram-button" href={telegramUrl} target="_blank" rel="noopener noreferrer">
            @aipartner_olga_bot
          </a>
        </div>
        <RobotImage className="ap-final-robot" />
        <a className="ap-share-link" href={telegramUrl} target="_blank" rel="noopener noreferrer">
          https://t.me/aipartner_olga_bot?start=JULY16
        </a>
      </SlideShell>

      <footer className="ap-privacy" id="privacy">
        <a href={telegramUrl} target="_blank" rel="noopener noreferrer">Telegram</a>
        <a href="#privacy">Политика конфиденциальности</a>
        <span>AI-Partner обрабатывает переданные вами материалы только для работы сервиса и подготовки персонального контента.</span>
      </footer>
    </main>
  );
}
