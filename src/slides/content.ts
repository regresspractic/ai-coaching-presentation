import type { Slide } from "./types";

const publicAsset = (fileName: string) => `${import.meta.env.BASE_URL}assets/${fileName}`;
const olgaImage = publicAsset("olga-profile-web.jpg");
const annaWebImage = publicAsset("anna-web.jpg");
const claudeBattleLogo = publicAsset("claude-logo.svg");
const geminiBattleLogo = publicAsset("gemini-logo.svg");
const chatGptBattleLogo = publicAsset("chatgpt-logo.svg");
const gptBattleLogo = publicAsset("gpt-logo.svg");
const codingLogo = publicAsset("coding-logo.svg");
const interiorCaseImage = publicAsset("interior-case-web.jpg");
const beforeCaseImage = publicAsset("gpt-2-before-web.jpg");

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
        image: gptBattleLogo,
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
    kind: "cosmicCta",
    title: "Эту презентацию сделал ИИ за пару минут. А что он может сделать для вас?",
    links: [
      {
        label: "Канал «Поле Супервизии»",
        url: "https://t.me/superVisionPole",
      },
    ],
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
    title: "ИИ — это наше новое настоящее.",
    subtitle: "Финальный тезис пока оставлен как рабочая версия.",
  },
];
