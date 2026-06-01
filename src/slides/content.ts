import type { Slide } from "./types";

const publicAsset = (fileName: string) => `${import.meta.env.BASE_URL}assets/${fileName}`;
const olgaImage = publicAsset("olga-profile-web.jpg");
const annaWebImage = publicAsset("anna-web.jpg");
const claudeBattleLogo = publicAsset("claude-logo.svg");
const geminiBattleLogo = publicAsset("gemini-logo.svg");
const chatGptBattleLogo = publicAsset("chatgpt-logo.svg");

const codingLogo = publicAsset("coding-logo.svg");
const interiorCaseImage = publicAsset("interior-case-web.jpg");
const beforeCaseImage = publicAsset("gpt-2-before-web.jpg");
const olgaCaseVideo = publicAsset("olga-case-video.mp4");
const annaCaseVideo = publicAsset("anna-case-video.mp4");
/** Редактируйте этот массив: один блок = один слайд, порядок блоков = порядок показа. */
export const presentationSlides: Slide[] = [
  {
    kind: "hero",
    kicker: "Ольга Комиссарова · Анна Чаковская",
    title: "Дивный новый инструментарий: ИИ на службе у коуча",
    subtitle: "Интерактивная презентация о том, как использовать ИИ без мистики, перегруза и страха перед кнопками.",
  },
  {
    kind: "speakers",
    speakers: [
      {
        name: "Ольга Комиссарова",
        role: "Independent Director · Executive Coach (ICF)",
        bio: "Более 21 года в управлении крупными командами и трансформации бизнеса. Интегрирует ИИ и глубокую психологию в работу с топ-менеджментом.",
        image: olgaImage,
        imageVariant: "wide",
        instagram: "https://www.instagram.com/komissarova_olga_s?igsh=M2E2ODQ3bzI0aDA1",
      },
      {
        name: "Анна Чаковская",
        image: annaWebImage,
        instagram: "https://www.instagram.com/anna_chakovskaya",
        intentionallySparse: true,
      },
    ],
  },
  {
    kind: "cards",
    title: "Битва титанов",
    cards: [
      {
        title: "Claude",
        body: "Логика и глубокий анализ смыслов.",
        image: claudeBattleLogo,
        accent: "#d97757",
      },
      {
        title: "Gemini",
        body: "Визуал, планирование и экосистема Google.",
        image: geminiBattleLogo,
        accent: "#4285f4",
      },
      {
        title: "ChatGPT",
        body: "Универсальность, база знаний и метапромптинг.",
        image: chatGptBattleLogo,
        accent: "#10a37f",
      },
    ],
  },
  {
    kind: "quote",
    title: "Философия «5-летнего ребёнка»",
    body: "ИИ — это гениальный ребенок, который прочитал весь интернет, но не знает, что с этим делать.",
    emphasis: "Ваша задача — объяснить задачу максимально просто.",
  },
  {
    kind: "quote",
    title: "Мета-промптинг",
    body: "Я не пишу сложные инструкции. Я прошу Claude или Gemini написать промпт за меня.",
    emphasis: "Вместо ручного написания промпта я задаю цель и получаю готовую инструкцию.",
  },
  {
    kind: "tools",
    title: "Прикладная магия: инструменты",
    tools: [
      {
        name: "Claude",
        body: "Глубокий анализ коуч-сессий",
        image: claudeBattleLogo,
        accent: "#d97757",
      },
      {
        name: "Gemini",
        body: "Стиль, эстетика и планирование",
        image: geminiBattleLogo,
        accent: "#4285f4",
      },
      {
        name: "ChatGPT",
        body: "Универсальность и метапромптинг",
        image: chatGptBattleLogo,
        accent: "#10a37f",
      },
      {
        name: "Кодинг",
        body: "Сложные тесты и квизы за один вечер",
        image: codingLogo,
        accent: "#f59e0b",
      },
      {
        name: "NotebookLM",
        body: "Анализирует данные и проводит исследования, используя надёжные источники.",
        image: publicAsset("notebooklm-logo.svg"),
        accent: "#1a73e8",
      },
    ],
  },
  {
    kind: "case",
    title: "Кейс: дизайнер интерьеров",
    before: "«Создать уютную, современную кухню...»",
    beforeImage: beforeCaseImage,
    beforeAlt: "Исходный материал из файла GPT-2",
    afterImage: interiorCaseImage,
    afterAlt: "Визуальный результат после уточненного промпта",
  },
  {
  kind: "cards",
  title: "ИИ уже работает в моей жизни",
  cards: [
    {
      title: "Путешествия",
      body: "Бронирование SPA на Бали, общение на английском языке и решение организационных вопросов без знания языка.",
      image: publicAsset("travel.jpg"),
    },
    {
      title: "Бизнес",
      body: "Создание антикризисных стратегий, визуализация сложных решений и структурирование мышления.",
      image: publicAsset("business.jpg"),
    },
    {
      title: "Стиль",
      body: "Подбор одежды, образов и персональных рекомендаций на основе фотографий и целей.",
      image: publicAsset("style.jpg"),
    },
    {
      title: "Повседневная жизнь",
      body: "Помощь в принятии решений, переводах, поиске информации и бытовых вопросах в режиме реального времени.",
      image: publicAsset("life.jpg"),
    },
    {
      title: "Видео-кейс",
      body: "Короткий пример того, как ИИ помогает быстро превращать живую идею в понятный визуальный материал.",
      video: olgaCaseVideo,
    },
    {
      title: "Видео-кейс",
      body: "Короткий пример того, как ИИ помогает быстро превращать живую идею в понятный визуальный материал.",
      video: annaCaseVideo,
    },
  ],
},
{
    kind: "seminar",
    title: "Семинар: ваши кейсы, наши инструменты",
    lead: "Не теория — практика. Мы с Аней поможем настроить ваши бизнес-процессы. Автоматизируйте то, что болит: от воронки до презентаций.",
    items: [
      {
        title: "Воронка продаж",
        body: "Автоответы и квалификация лидов",
        icon: "funnel",
        accent: "#8b5cf6",
      },
      {
        title: "Контент и визуал",
        body: "Тексты и дизайн без усилий",
        icon: "visual",
        accent: "#38bdf8",
      },
      {
        title: "Коуч-сессии",
        body: "Глубокий анализ и саммари",
        icon: "session",
        accent: "#f59e0b",
      },
    ],
  },
  {
    kind: "assistants",
    title: "Основные помощники коуча",
    items: [
      {
        title: "Копирайтер",
        body: "Пишет тексты как вы, только легко и без напряжения.",
        icon: "✍️",
        accent: "#d97757",
      },
      {
        title: "СММ-специалист",
        body: "Проведёт полную аналитику ваших соцсетей, расскажет какие посты залетают лучше, настроит рекламу, сделает контент-план.",
        icon: "📱",
        accent: "#4285f4",
      },
      {
        title: "Фотограф / Видеограф / Рилсмейкер",
        body: "Сделает любую фотосессию не выходя из дома. Придумает и смонтирует сценарий для Рилс.",
        icon: "🎬",
        accent: "#10a37f",
      },
      {
        title: "Маркетолог",
        body: "Следит за конкурентами, исследует новые темы, предлагает решения.",
        icon: "📊",
        accent: "#8b5cf6",
      },
    ],
  },
  {
    kind: "cosmicCta",
    title: "Эту презентацию сделал ИИ за пару минут. А что он может сделать для вас?",
    links: [],
  },
  {
    kind: "mythReality",
    myth: "«ИИ — как ребёнок, которого нужно учить».",
    reality: "ИИ — это не человек и не ребёнок. Это система, работающая на принципиально иной скорости и масштабе.",
    points: [
      "За часы он обрабатывает объём знаний, на который человеку нужны десятилетия.",
      "Не устаёт, не забывает и не ограничен биологией.",
      "Способен находить связи между областями знаний, недоступные человеку.",
    ],
  },
  {
    kind: "superintelligence",
    title: "Переход к сверхинтеллекту",
    lead: "Мы создаём не «цифрового помощника», а систему, превосходящую человека по скорости анализа и масштабу мышления.",
    forecast: "2027: многие эксперты прогнозируют появление AGI — ИИ уровня лучших специалистов мира.",
    question: "Главный вопрос уже не в том, сможем ли мы создать такой интеллект, а в том — сможем ли научиться эффективно с ним работать.",
  },
  {
  kind: "hero",
  title: "ИИ не заменит коуча.",
  subtitle:
    "Но коуч с ИИ заменит коуча без ИИ.\n\nВопрос уже не в том, использовать ли искусственный интеллект. Вопрос в том, насколько быстро вы научитесь работать вместе с ним.",
  links: [
    { label: "Канал «Поле Супервизии»", url: "https://t.me/superVisionPole" },
    { label: "Анна Чаковская", url: "https://t.me/annaesther" },
  ],
},
];
