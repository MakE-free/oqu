(() => {
  "use strict";
  const icons = {
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    "arrow-right": '<path d="M4 12h16m-6-6 6 6-6 6"/>',
    "arrow-left": '<path d="M20 12H4m6-6-6 6 6 6"/>',
    "arrow-up-right": '<path d="M6 18 18 6M6 6h12v12"/>',
    bookmark: '<path d="M6 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17l-6-4-6 4Z"/>',
    history: '<path d="M3 11a9 9 0 1 1 2.6 7.4M3 4v7h7m2-4v5l3 2"/>',
    graduation:
      '<path d="m2 9 10-5 10 5-10 5L2 9Zm4 3v5c4 3 8 3 12 0v-5m4-3v8"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 4.2 1.8c-1 .6-1.7 1.1-1.7 2.7m0 3h.01"/>',
    sparkles:
      '<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Zm7-1v4m-2-2h4"/>',
    user: '<circle cx="12" cy="8" r="3"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    "check-circle": '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
    brain:
      '<path d="M12 18V5a3 3 0 0 0-5.8-1A4 4 0 0 0 3 10a4 4 0 0 0 1 7.5A4 4 0 0 0 12 18Zm0 0V5a3 3 0 0 1 5.8-1A4 4 0 0 1 21 10a4 4 0 0 1-1 7.5A4 4 0 0 1 12 18ZM7 8c1 0 2 .7 2 2m-3 5c0-1.5 1-2.5 2.5-2.5M17 8c-1 0-2 .7-2 2m3 5c0-1.5-1-2.5-2.5-2.5"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    sliders:
      '<path d="M4 7h8m4 0h4M4 17h3m4 0h9"/><circle cx="14" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    file: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Zm0 0v6h6M8 13h8m-8 4h5"/>',
    bulb: '<path d="M9 18h6m-6 3h6m-7-8a6 6 0 1 1 8 0c-1.4 1.2-1 2-1 3H9c0-1 .4-1.8-1-3Z"/>',
    close: '<path d="m6 6 12 12M6 18 18 6"/>',
    flag: '<path d="M5 22V3m0 1c4-3 9 3 14 0v10c-5 3-10-3-14 0"/>',
    target:
      '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    book: '<path d="M12 5C9 3 5 3 2 4v15c3-1 7-1 10 1 3-2 7-2 10-1V4c-3-1-7-1-10 1Zm0 0v15"/>',
    chart: '<path d="M4 3v17h17M8 15l4-5 4 2 5-7"/>',
    logic:
      '<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/><path d="M17.5 3v7m-3.5-3.5h7M6.5 14v7M3 17.5h7"/>',
    math: '<path d="M4 6h7M7.5 2.5v7m7-3.5h7M4 15l7 7m0-7-7 7m11-6h6m-6 5h6"/>',
    refresh: '<path d="M20 8a9 9 0 1 0 1 7M20 2v6h-6"/>',
    trophy:
      '<path d="M7 3h10v7a5 5 0 0 1-10 0V3Zm0 2H3v3a4 4 0 0 0 4 4m10-7h4v3a4 4 0 0 1-4 4m-5 3v6m-5 0h10"/>',
  };
  const icon = (name, cls = "") =>
    `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.file}</svg>`;
  const hydrateIcons = () =>
    document.querySelectorAll("[data-icon]").forEach((el) => {
      el.innerHTML = icon(el.dataset.icon);
    });
  const $ = (selector, root = document) => root.querySelector(selector);
  const esc = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  const BANK = window.OQU_QUESTIONS || [];
  const TESTS = [
    {
      id: "english-mixed",
      subject: "english",
      topic: null,
      title: "English: комплексная практика",
      description: "Узнай свои сильные стороны в грамматике, лексике и чтении.",
      count: 45,
      minutes: 50,
      icon: "book",
      type: "Комплексный тест",
      level: "Все темы",
    },
    {
      id: "tgo-critical",
      subject: "tgo",
      topic: "critical",
      title: "Критическое мышление",
      description:
        "Анализируй аргументы, оценивай выводы и находи главное в тексте.",
      count: 15,
      minutes: 20,
      icon: "bulb",
      type: "Тематический тест",
      level: "Анализ текста",
    },
    {
      id: "english-grammar",
      subject: "english",
      topic: "grammar",
      title: "Grammar",
      description:
        "Времена, условные предложения и грамматика в понятном контексте.",
      count: 15,
      minutes: 15,
      icon: "file",
      type: "Тематический тест",
      level: "Грамматика",
    },
    {
      id: "english-vocabulary",
      subject: "english",
      topic: "vocabulary",
      title: "Vocabulary",
      description:
        "Расширяй словарный запас и выбирай подходящие слова по смыслу.",
      count: 15,
      minutes: 15,
      icon: "book",
      type: "Тематический тест",
      level: "Лексика",
    },
    {
      id: "english-reading",
      subject: "english",
      topic: "reading",
      title: "Reading",
      description:
        "Читай короткие тексты и тренируй понимание деталей и главной мысли.",
      count: 15,
      minutes: 20,
      icon: "book",
      type: "Тематический тест",
      level: "Чтение",
    },
  ];
  const storage = {
    read(key, fallback) {
      try {
        const v = JSON.parse(localStorage.getItem("oqu." + key));
        return v === null ? fallback : v;
      } catch {
        return fallback;
      }
    },
    write(key, value) {
      try {
        localStorage.setItem("oqu." + key, JSON.stringify(value));
        return true;
      } catch {
        toast(
          "Браузер не разрешил сохранить данные. Результат доступен до закрытия страницы.",
        );
        return false;
      }
    },
  };
  const savedData = storage.read("saved", []),
    historyData = storage.read("history", []);
  const state = {
    view: "all",
    filter: "all",
    search: "",
    saved: Array.isArray(savedData)
      ? savedData.filter((id) => TESTS.some((t) => t.id === id))
      : [],
    history: Array.isArray(historyData)
      ? historyData
          .filter(
            (r) =>
              r &&
              TESTS.some((t) => t.id === r.testId) &&
              Array.isArray(r.questions) &&
              r.questions.length > 0 &&
              r.questions.every((q) => q && BANK.some((b) => b.id === q.id)) &&
              Array.isArray(r.answers) &&
              r.answers.length === r.questions.length &&
              Number.isFinite(r.correct) &&
              r.total === r.questions.length &&
              r.correct >= 0 &&
              r.correct <= r.total &&
              Number.isFinite(r.date),
          )
          .slice(0, 50)
      : [],
    quiz: null,
    review: null,
    timer: null,
    toastTimer: null,
  };
  const dialog = $("#app-dialog");
  function toast(message) {
    clearTimeout(state.toastTimer);
    $("#toast").textContent = message;
    $("#toast").classList.add("show");
    state.toastTimer = setTimeout(
      () => $("#toast").classList.remove("show"),
      3800,
    );
  }
  function updateSavedCount() {
    $("#saved-count").textContent = state.saved.length;
    $("#saved-count").hidden = !state.saved.length;
  }
  function closeMenu() {
    $("#sidebar").classList.remove("open");
    $("#mobile-shade").classList.remove("visible");
    $("#menu-button").setAttribute("aria-expanded", "false");
  }
  function navigate(view, filter = "all", scroll = false) {
    state.view = view;
    state.filter = filter;
    state.search = "";
    $("#test-search").value = "";
    const special = view !== "all";
    $("#hero").hidden = special || filter !== "all";
    $("#subjects-section").hidden = special || filter !== "all";
    $("#practice-note").hidden = view === "history";
    $("#page-title").innerHTML =
      `${view === "saved" ? "Сохранённые" : view === "history" ? "История тестов" : filter === "tgo" ? "ТГО" : filter === "english" ? "Английский язык" : "Тесты"}<span class="heading-dot">.</span>`;
    $("#page-subtitle").textContent =
      view === "saved"
        ? "Тесты, к которым хочется вернуться. Всё нужное под рукой."
        : view === "history"
          ? "Каждая попытка — часть твоего пути. Следи за своим прогрессом."
          : filter === "tgo"
            ? "Анализируй аргументы, оценивай выводы и находи главное в тексте."
            : filter === "english"
              ? "Шаг за шагом к уверенному английскому: грамматика, лексика и чтение."
              : "Готовься в своём темпе. Становись увереннее с каждым тестом.";
    $("#breadcrumb-current").textContent =
      view === "saved"
        ? "Сохранённые"
        : view === "history"
          ? "История"
          : "Тесты";
    document.querySelectorAll("[data-nav]").forEach((el) => {
      const active = el.dataset.nav === (special ? view : filter);
      el.classList.toggle("active", active);
      active
        ? el.setAttribute("aria-current", "page")
        : el.removeAttribute("aria-current");
    });
    $("#catalog-title").textContent =
      view === "saved"
        ? "Твои сохранённые тесты"
        : view === "history"
          ? "Пройденные тесты"
          : filter === "tgo"
            ? "Тесты по ТГО"
            : filter === "english"
              ? "Тесты по английскому"
              : "Все тесты";
    $("#catalog-toolbar").hidden = view === "history";
    $(".catalog-caption").hidden = special;
    renderCatalog();
    closeMenu();
    if (scroll)
      $("#catalog").scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "instant" });
  }
  function renderCatalog() {
    updateSavedCount();
    document.querySelectorAll("[data-filter]").forEach((el) => {
      const active = el.dataset.filter === state.filter;
      el.classList.toggle("active", active);
      el.setAttribute("aria-pressed", String(active));
    });
    $("#test-grid").hidden = state.view === "history";
    $("#history-list").hidden = state.view !== "history";
    if (state.view === "history") {
      renderHistory();
      return;
    }
    const tests = TESTS.filter(
      (t) =>
        (state.filter === "all" || t.subject === state.filter) &&
        (state.view !== "saved" || state.saved.includes(t.id)) &&
        `${t.title} ${t.description} ${t.level} ${t.subject === "english" ? "английский язык" : "ТГО"}`
          .toLowerCase()
          .includes(state.search.toLowerCase().trim()),
    );
    $("#test-count").textContent = tests.length;
    $("#test-grid").innerHTML = tests
      .map((t) => {
        const saved = state.saved.includes(t.id),
          last = state.history.find((h) => h.testId === t.id);
        return `<article class="test-card ${t.subject}"><div class="test-card-top"><span class="test-type">${t.type}</span><button class="icon-button save-button ${saved ? "is-saved" : ""}" data-save="${t.id}" aria-label="${saved ? "Убрать из сохранённых" : "Сохранить тест"}: ${t.title}" aria-pressed="${saved}">${icon("bookmark")}</button></div><div class="test-subject-icon">${icon(t.icon)}</div><div class="test-subject-label">${t.subject === "tgo" ? "ТГО" : "АНГЛИЙСКИЙ ЯЗЫК"}</div><h3>${t.title}</h3><p class="test-description">${t.description}</p><div class="test-meta"><span>${icon("file")}${t.count} вопросов</span><span>${icon("clock")}${t.minutes} мин</span></div><div class="test-card-footer"><span class="test-level ${last ? "completed-label" : ""}">${last ? icon("check-circle") + `${last.correct} из ${last.total} · пройден` : t.level}</span><button class="test-start" data-start="${t.id}">${last ? "Ещё раз" : "Начать"}${icon("arrow-right")}</button></div></article>`;
      })
      .join("");
    $("#empty-state").hidden = tests.length > 0;
    if (!tests.length)
      $("#empty-state").innerHTML =
        `<span class="empty-icon">${icon(state.search ? "search" : "bookmark")}</span><h3>${state.search ? "Таких тестов пока нет" : state.view === "saved" ? "Сохрани то, что интересно" : "Здесь пока нет тестов"}</h3><p>${state.search ? "Попробуй другое название или выбери другой предмет." : "Нажми на закладку на карточке теста — он появится здесь."}</p><button class="button button-green" data-action="reset-catalog">${state.search ? "Сбросить поиск" : "Посмотреть все тесты"}${icon("arrow-right")}</button>`;
  }
  function renderHistory() {
    $("#test-count").textContent = state.history.length;
    $("#empty-state").hidden = state.history.length > 0;
    if (!state.history.length) {
      $("#history-list").innerHTML = "";
      $("#empty-state").innerHTML =
        `<span class="empty-icon">${icon("history")}</span><h3>Твоя история только начинается</h3><p>Пройди первый тест — здесь появятся результат и разбор ответов.</p><button class="button button-green" data-action="reset-catalog">Выбрать тест${icon("arrow-right")}</button>`;
      return;
    }
    const total = state.history.reduce((sum, h) => sum + h.total, 0),
      correct = state.history.reduce((sum, h) => sum + h.correct, 0);
    $("#history-list").innerHTML =
      `<div class="history-stats"><div><span>Пройдено тестов</span><strong>${state.history.length}</strong></div><div><span>Решено вопросов</span><strong>${total}</strong></div><div><span>Правильных ответов</span><strong>${Math.round((correct / total) * 100)}<small>%</small></strong></div></div>${state.history
        .map((h) => {
          const t = TESTS.find((t) => t.id === h.testId);
          return `<article class="history-row"><span class="history-subject-icon ${t.subject}">${icon(t.icon)}</span><div class="history-row-title"><h3>${t.title}</h3><span>${new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" }).format(new Date(h.date))} · ${formatDuration(h.elapsed)}</span></div><div class="history-result"><strong>${h.correct}<span> / ${h.total}</span></strong><span>${Math.round((h.correct / h.total) * 100)}% верно</span></div><button class="button button-white" data-review="${esc(h.id)}">Разбор${icon("arrow-right")}</button></article>`;
        })
        .join(
          "",
        )}<p class="storage-note">${icon("user")}История хранится только в этом браузере. Сохраняются последние 50 попыток.</p>`;
  }
  function toggleSave(id) {
    const i = state.saved.indexOf(id);
    if (i < 0) state.saved.push(id);
    else state.saved.splice(i, 1);
    storage.write("saved", state.saved);
    renderCatalog();
    toast(i < 0 ? "Тест добавлен в сохранённые" : "Тест убран из сохранённых");
  }
  let dialogOpener = null;
  function openDialog(content, wide = false) {
    if (!dialog.open) dialogOpener = document.activeElement;
    $("#dialog-content").innerHTML = content;
    dialog.classList.toggle("quiz-dialog", wide);
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add("dialog-open");
    const heading = $("#dialog-title");
    if (heading) {
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    }
  }
  function closeDialog() {
    clearInterval(state.timer);
    state.timer = null;
    state.quiz = null;
    state.review = null;
    dialog.close();
    document.body.classList.remove("dialog-open");
    renderCatalog();
    let target = dialogOpener;
    if (target && !target.isConnected) {
      const attr = ["data-start", "data-review"].find((name) =>
        target.hasAttribute(name),
      );
      target = attr
        ? $(`[${attr}="${CSS.escape(target.getAttribute(attr))}"]`)
        : null;
    }
    if (target) target.focus({ preventScroll: true });
  }
  const closeButton = () =>
    `<button class="icon-button dialog-close" data-action="close-dialog" aria-label="Закрыть">${icon("close")}</button>`;
  function showHelp() {
    openDialog(
      `<div class="standard-modal">${closeButton()}<span class="modal-icon">${icon("sparkles")}</span><div class="eyebrow">ТВОЁ МЕСТО ДЛЯ ПРАКТИКИ</div><h2 id="dialog-title">Начни. Остальное получится.</h2><p class="modal-intro">Всё просто: выбирай тест и занимайся в удобном темпе.</p><ol class="help-steps"><li><span>01</span><div><strong>Выбери направление</strong><p>ТГО или английский. Можно пройти комплексный тест или потренировать отдельную тему.</p></div></li><li><span>02</span><div><strong>Проверь себя</strong><p>Отвечай на вопросы, возвращайся к сложным и отмечай их флажком. Таймер можно отключить перед началом.</p></div></li><li><span>03</span><div><strong>Разберись в ошибках</strong><p>После завершения получи результат и объяснение к каждому вопросу. История сохранится в этом браузере.</p></div></li></ol><div class="modal-info">60 авторских учебных вопросов. Задания предназначены для практики и не являются официальной базой КТ.</div><button class="button button-green button-full" data-action="close-dialog">Всё понятно, к тестам${icon("arrow-right")}</button></div>`,
    );
  }
  function showSetup(id) {
    const t = TESTS.find((t) => t.id === id);
    if (!t) return;
    openDialog(
      `<div class="standard-modal setup-modal">${closeButton()}<span class="modal-icon ${t.subject}">${icon(t.icon)}</span><div class="eyebrow">${t.subject === "tgo" ? "ТГО" : "АНГЛИЙСКИЙ ЯЗЫК"} · ${t.type.toUpperCase()}</div><h2 id="dialog-title">${t.title}</h2><p class="modal-intro">${t.description}</p><div class="setup-stats"><div>${icon("file")}<strong>${t.count}</strong><span>вопросов</span></div><div>${icon("clock")}<strong>${t.minutes} мин</strong><span>на прохождение</span></div><div>${icon("bulb")}<strong>С разбором</strong><span>каждого ответа</span></div></div><label class="setting-row"><div><strong>Тест с таймером</strong><span>Поможет привыкнуть к ограничению по времени</span></div><input id="timer-setting" type="checkbox" role="switch" checked /><span class="switch-track"></span></label><label class="setting-row"><div><strong>Перемешать вопросы</strong><span>Новый порядок при каждой попытке</span></div><input id="shuffle-setting" type="checkbox" role="switch" checked /><span class="switch-track"></span></label><p class="setup-hint">${icon("check-circle")}Можно пропускать вопросы и возвращаться к ним. Правильные ответы появятся после завершения.</p><div class="modal-info">Это учебная практика. Количество вопросов и время могут отличаться от официального экзамена КТ.</div><button class="button button-green button-full" data-begin="${t.id}">Начать тест${icon("arrow-right")}</button></div>`,
    );
  }
  function shuffle(arr) {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
  function startQuiz(id) {
    const t = TESTS.find((t) => t.id === id);
    if (!t) return;
    const timed = $("#timer-setting").checked,
      random = $("#shuffle-setting").checked;
    let questions = BANK.filter(
      (q) => q.subject === t.subject && (!t.topic || q.topic === t.topic),
    );
    if (!t.topic && t.subject === "tgo")
      questions = ["critical", "math", "logic"].flatMap((topic) => {
        const subset = questions.filter((q) => q.topic === topic);
        return (random ? shuffle(subset) : subset).slice(0, 10);
      });
    if (random) questions = shuffle(questions);
    questions = questions.slice(0, t.count);
    if (questions.length !== t.count) {
      toast(
        "Не удалось загрузить вопросы. Обнови страницу и попробуй ещё раз.",
      );
      return;
    }
    state.quiz = {
      test: t,
      questions,
      answers: Array(questions.length).fill(null),
      flags: [],
      index: 0,
      started: Date.now(),
      ends: timed ? Date.now() + t.minutes * 60000 : null,
    };
    renderQuiz();
    state.timer = setInterval(() => {
      if (!state.quiz) return;
      if (state.quiz.ends && Date.now() >= state.quiz.ends) {
        finishQuiz(true);
        return;
      }
      const el = $("#quiz-timer");
      if (el) {
        el.textContent = timerText();
        el.classList.toggle(
          "urgent",
          !!state.quiz.ends && state.quiz.ends - Date.now() < 60000,
        );
      }
    }, 1000);
  }
  function timerText() {
    if (!state.quiz) return "";
    const seconds =
      (state.quiz.ends
        ? state.quiz.ends - Date.now()
        : Date.now() - state.quiz.started) / 1000;
    const s = Math.max(
      0,
      state.quiz.ends ? Math.ceil(seconds) : Math.floor(seconds),
    );
    return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  }
  function formatDuration(ms) {
    const secs = Math.max(0, Math.floor((ms || 0) / 1000));
    return secs < 60
      ? `${secs} сек`
      : `${Math.floor(secs / 60)} мин ${secs % 60} сек`;
  }
  function renderQuiz(focusQuestion = true) {
    const quiz = state.quiz;
    if (!quiz) return;
    const q = quiz.questions[quiz.index],
      answered = quiz.answers.filter((a) => a !== null).length;
    const previousScroll = dialog.scrollTop;
    openDialog(
      `<div class="quiz-layout"><header class="quiz-header"><div><span class="eyebrow">${quiz.test.subject === "tgo" ? "ТГО" : "АНГЛИЙСКИЙ ЯЗЫК"}</span><h2 id="dialog-title">${quiz.test.title}</h2></div><div class="quiz-header-right"><div class="quiz-clock">${icon("clock")}<span id="quiz-timer">${timerText()}</span>${!quiz.ends ? "<small>без лимита</small>" : ""}</div><button class="icon-button" data-action="exit-quiz" aria-label="Выйти из теста">${icon("close")}</button></div></header><div class="quiz-progress-track"><span style="width:${(answered / quiz.questions.length) * 100}%"></span></div><div class="quiz-body"><section class="question-area"><div class="question-toolbar"><span>ВОПРОС ${quiz.index + 1} ИЗ ${quiz.questions.length}</span><button class="flag-button ${quiz.flags.includes(quiz.index) ? "flagged" : ""}" data-action="flag" aria-pressed="${quiz.flags.includes(quiz.index)}">${icon("flag")}${quiz.flags.includes(quiz.index) ? "Отмечен" : "Отметить"}</button></div>${q.passage ? `<div class="question-passage" lang="${quiz.test.subject === "english" ? "en" : "ru"}">${esc(q.passage)}</div>` : ""}<h3 class="question-prompt" id="question-prompt" tabindex="-1" lang="${quiz.test.subject === "english" ? "en" : "ru"}">${esc(q.prompt)}</h3><div class="answer-options" role="group" aria-labelledby="question-prompt">${q.options.map((o, i) => `<button class="answer-option ${quiz.answers[quiz.index] === i ? "selected" : ""}" data-answer="${i}" aria-pressed="${quiz.answers[quiz.index] === i}"><span class="answer-letter">${"ABCD"[i]}</span><span lang="${quiz.test.subject === "english" ? "en" : "ru"}">${esc(o)}</span><span class="answer-radio">${quiz.answers[quiz.index] === i ? icon("check") : ""}</span></button>`).join("")}</div><div class="quiz-question-footer"><button class="button button-white" data-action="previous" ${quiz.index === 0 ? "disabled" : ""}>${icon("arrow-left")}Назад</button><span>${quiz.answers[quiz.index] === null ? "Выбери один ответ" : "Ответ выбран"}</span><button class="button button-green" data-action="${quiz.index === quiz.questions.length - 1 ? "finish" : "next"}">${quiz.index === quiz.questions.length - 1 ? "Завершить" : "Далее"}${icon(quiz.index === quiz.questions.length - 1 ? "check" : "arrow-right")}</button></div></section><aside class="quiz-navigation"><h3>Твой прогресс</h3><p>Отвечено <strong>${answered} из ${quiz.questions.length}</strong></p><div class="question-numbers">${quiz.questions.map((_, i) => `<button class="question-number ${i === quiz.index ? "current" : ""} ${quiz.answers[i] !== null ? "answered" : ""} ${quiz.flags.includes(i) ? "flagged" : ""}" data-question="${i}" aria-label="Вопрос ${i + 1}${quiz.answers[i] !== null ? ", ответ выбран" : ""}${quiz.flags.includes(i) ? ", отмечен" : ""}" ${i === quiz.index ? 'aria-current="step"' : ""}>${i + 1}</button>`).join("")}</div><div class="navigator-legend"><span><i class="legend-answered"></i>Есть ответ</span><span><i class="legend-flagged"></i>Отмечен</span></div><div class="quiz-tip">${icon("bulb")}<p>Сложный вопрос? Отметь его и вернись позже.</p></div><button class="button button-white button-full" data-action="finish">Завершить тест</button></aside></div><div id="quiz-confirmation" class="quiz-confirmation" hidden></div></div>`,
      true,
    );
    if (focusQuestion) $("#question-prompt").focus({ preventScroll: true });
    else dialog.scrollTop = previousScroll;
  }
  function showQuizConfirmation(exit = false) {
    const quiz = state.quiz;
    if (!quiz) return;
    const missing = quiz.answers.filter((a) => a === null).length;
    $("#quiz-confirmation").hidden = false;
    $("#quiz-confirmation").innerHTML =
      `<div class="confirm-card" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title"><span class="modal-icon">${icon(exit ? "history" : "check-circle")}</span><h3 id="confirm-title">${exit ? "Выйти из теста?" : "Завершить попытку?"}</h3><p>${exit ? "Текущая попытка не сохранится. Можно продолжить тест или завершить его и получить результат." : missing ? `Без ответа: ${missing} из ${quiz.questions.length}. При завершении они будут засчитаны как неверные.` : "Все ответы выбраны. Давай посмотрим на результат!"}</p><div class="confirmation-actions"><button class="button button-white" data-action="cancel-confirm">Продолжить</button><button class="button button-green" data-action="confirm-finish">Завершить и сохранить</button></div>${exit ? '<button class="discard-button" data-action="discard-quiz">Выйти без сохранения</button>' : ""}</div>`;
    $(".confirm-card button").focus();
  }
  function finishQuiz(expired = false) {
    const quiz = state.quiz;
    if (!quiz) return;
    clearInterval(state.timer);
    state.timer = null;
    const result = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      testId: quiz.test.id,
      date: Date.now(),
      elapsed: Math.min(
        Date.now() - quiz.started,
        quiz.ends ? quiz.test.minutes * 60000 : Infinity,
      ),
      questions: quiz.questions.map((q) => ({ id: q.id })),
      answers: [...quiz.answers],
      correct: quiz.questions.reduce(
        (n, q, i) => n + Number(quiz.answers[i] === q.answer),
        0,
      ),
      total: quiz.questions.length,
      expired,
    };
    state.history.unshift(result);
    state.history = state.history.slice(0, 50);
    storage.write("history", state.history);
    state.quiz = null;
    showResult(result);
    renderCatalog();
  }
  function showResult(result) {
    state.review = result;
    const t = TESTS.find((t) => t.id === result.testId),
      percent = Math.round((result.correct / result.total) * 100);
    openDialog(
      `<div class="result-modal standard-modal">${closeButton()}<div class="result-emblem">${icon("trophy")}<span>✳</span></div><div class="eyebrow">ЕЩЁ ОДИН ШАГ ВПЕРЁД</div><h2 id="dialog-title">${percent >= 80 ? "Отличная работа!" : percent >= 50 ? "Хорошее начало!" : "Практика — путь к результату"}</h2><p class="modal-intro">${t.title}${result.expired ? '<br /><span class="time-expired">Время вышло. Ответы сохранены автоматически.</span>' : ""}</p><div class="result-score"><strong>${result.correct}<span> / ${result.total}</span></strong><span>правильных ответов</span></div><div class="result-bar"><span style="width:${percent}%"></span></div><div class="result-details"><div><strong>${percent}%</strong><span>точность</span></div><div><strong>${formatDuration(result.elapsed)}</strong><span>время практики</span></div></div><div class="modal-info">${percent >= 80 ? "Так держать! Посмотри разбор, чтобы закрепить результат." : "Каждая ошибка подсказывает, что стоит повторить. В разборе есть объяснение к каждому вопросу."}</div><button class="button button-green button-full" data-action="open-review">Разобрать ответы${icon("arrow-right")}</button><button class="button button-plain button-full" data-retry="${t.id}">${icon("refresh")}Попробовать ещё раз</button><p class="result-saved">${icon("check-circle")}Результат добавлен в историю</p></div>`,
    );
  }
  function showReview(result, errorsOnly = false) {
    state.review = result;
    const t = TESTS.find((t) => t.id === result.testId);
    const questions = result.questions
      .map((q, i) => ({ question: BANK.find((b) => b.id === q.id), index: i }))
      .filter(
        (item) =>
          item.question &&
          (!errorsOnly || result.answers[item.index] !== item.question.answer),
      );
    openDialog(
      `<div class="review-layout"><header class="quiz-header"><div><span class="eyebrow">РАЗБОР · ${result.correct} ИЗ ${result.total} ВЕРНО</span><h2 id="dialog-title">${t.title}</h2></div><button class="icon-button" data-action="close-dialog" aria-label="Закрыть разбор">${icon("close")}</button></header><div class="review-toolbar"><p>Разберись сегодня — ответь увереннее завтра.</p><label><input type="checkbox" id="errors-only" ${errorsOnly ? "checked" : ""} />Только ошибки</label></div><div class="review-questions">${
        questions.length
          ? questions
              .map(({ question: q, index: i }) => {
                const correct = result.answers[i] === q.answer;
                return `<article class="review-question"><div class="review-question-top"><span>ВОПРОС ${i + 1}</span><span class="review-status ${correct ? "correct" : "incorrect"}">${icon(correct ? "check-circle" : "close")}${correct ? "Верно" : result.answers[i] === null ? "Без ответа" : "Ошибка"}</span></div>${q.passage ? `<div class="question-passage" lang="${t.subject === "english" ? "en" : "ru"}">${esc(q.passage)}</div>` : ""}<h3 lang="${t.subject === "english" ? "en" : "ru"}">${esc(q.prompt)}</h3><div class="review-options">${q.options.map((o, n) => `<div class="review-option ${n === q.answer ? "is-correct" : n === result.answers[i] ? "is-incorrect" : ""}"><span>${"ABCD"[n]}</span><span lang="${t.subject === "english" ? "en" : "ru"}">${esc(o)}</span>${n === q.answer ? `<small>Правильный ответ ${icon("check")}</small>` : n === result.answers[i] ? `<small>Твой ответ ${icon("close")}</small>` : ""}</div>`).join("")}</div><div class="answer-explanation">${icon("bulb")}<div><strong>Почему так?</strong><p>${esc(q.explanation)}</p></div></div></article>`;
              })
              .join("")
          : `<div class="review-perfect">${icon("trophy")}<h3>Ни одной ошибки!</h3><p>Все ответы верные. Попробуй следующий тест.</p></div>`
      }</div><footer class="review-footer"><button class="button button-white" data-action="close-dialog">К тестам</button><button class="button button-green" data-retry="${t.id}">${icon("refresh")}Повторить тест</button></footer></div>`,
      true,
    );
  }
  document.addEventListener("click", (event) => {
    const nav = event.target.closest("[data-nav]");
    if (nav) {
      const v = nav.dataset.nav;
      navigate(
        ["saved", "history"].includes(v) ? v : "all",
        ["tgo", "english"].includes(v) ? v : "all",
      );
      return;
    }
    const subject = event.target.closest("[data-subject]");
    if (subject) {
      navigate("all", subject.dataset.subject);
      return;
    }
    const filter = event.target.closest("[data-filter]");
    if (filter) {
      if (state.view === "all") navigate("all", filter.dataset.filter, true);
      else {
        state.filter = filter.dataset.filter;
        renderCatalog();
      }
      return;
    }
    const saved = event.target.closest("[data-save]");
    if (saved) {
      toggleSave(saved.dataset.save);
      return;
    }
    const start = event.target.closest("[data-start]");
    if (start) {
      showSetup(start.dataset.start);
      return;
    }
    const begin = event.target.closest("[data-begin]");
    if (begin) {
      startQuiz(begin.dataset.begin);
      return;
    }
    const retry = event.target.closest("[data-retry]");
    if (retry) {
      state.review = null;
      showSetup(retry.dataset.retry);
      return;
    }
    const review = event.target.closest("[data-review]");
    if (review) {
      const result = state.history.find((h) => h.id === review.dataset.review);
      if (result) showReview(result);
      return;
    }
    const answer = event.target.closest("[data-answer]");
    if (answer && state.quiz) {
      state.quiz.answers[state.quiz.index] = Number(answer.dataset.answer);
      renderQuiz(false);
      $(`[data-answer="${answer.dataset.answer}"]`).focus({
        preventScroll: true,
      });
      return;
    }
    const question = event.target.closest("[data-question]");
    if (question && state.quiz) {
      state.quiz.index = Number(question.dataset.question);
      renderQuiz();
      return;
    }
    const action = event.target.closest("[data-action]")?.dataset.action;
    switch (action) {
      case "help":
        showHelp();
        break;
      case "reset-catalog":
        if (state.search) {
          state.search = "";
          $("#test-search").value = "";
          renderCatalog();
        } else navigate("all");
        break;
      case "close-dialog":
        state.quiz ? showQuizConfirmation(true) : closeDialog();
        break;
      case "previous":
        if (state.quiz && state.quiz.index > 0) {
          state.quiz.index--;
          renderQuiz();
        }
        break;
      case "next":
        if (state.quiz && state.quiz.index < state.quiz.questions.length - 1) {
          state.quiz.index++;
          renderQuiz();
        }
        break;
      case "flag":
        if (state.quiz) {
          const i = state.quiz.index,
            pos = state.quiz.flags.indexOf(i);
          pos < 0 ? state.quiz.flags.push(i) : state.quiz.flags.splice(pos, 1);
          renderQuiz(false);
          $('[data-action="flag"]').focus({ preventScroll: true });
        }
        break;
      case "exit-quiz":
        showQuizConfirmation(true);
        break;
      case "finish":
        showQuizConfirmation();
        break;
      case "cancel-confirm":
        $("#quiz-confirmation").hidden = true;
        $("#question-prompt").focus({ preventScroll: true });
        break;
      case "confirm-finish":
        finishQuiz();
        break;
      case "discard-quiz":
        closeDialog();
        break;
      case "open-review":
        if (state.review) showReview(state.review);
        break;
    }
  });
  $("#test-search").addEventListener("input", (event) => {
    state.search = event.target.value;
    renderCatalog();
  });
  $("#choose-test").addEventListener("click", () =>
    $("#catalog").scrollIntoView({ behavior: "smooth", block: "start" }),
  );
  $(".brand").addEventListener("click", (event) => {
    event.preventDefault();
    navigate("all");
  });
  $("#menu-button").addEventListener("click", () => {
    const open = $("#sidebar").classList.toggle("open");
    $("#mobile-shade").classList.toggle("visible", open);
    $("#menu-button").setAttribute("aria-expanded", String(open));
  });
  $("#mobile-shade").addEventListener("click", closeMenu);
  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    if (state.quiz) {
      if ($("#quiz-confirmation") && !$("#quiz-confirmation").hidden) {
        $("#quiz-confirmation").hidden = true;
        $("#question-prompt").focus({ preventScroll: true });
      } else showQuizConfirmation(true);
    } else closeDialog();
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      )
        state.quiz ? showQuizConfirmation(true) : closeDialog();
    }
  });
  document.addEventListener("change", (event) => {
    if (event.target.id === "errors-only" && state.review) {
      showReview(state.review, event.target.checked);
      $("#errors-only").focus();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (
      state.quiz &&
      $("#quiz-confirmation") &&
      !$("#quiz-confirmation").hidden &&
      event.key === "Tab"
    ) {
      const buttons = [...$("#quiz-confirmation").querySelectorAll("button")],
        first = buttons[0],
        last = buttons.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
      return;
    }
    if (
      event.key === "/" &&
      !dialog.open &&
      state.view !== "history" &&
      !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)
    ) {
      event.preventDefault();
      $("#test-search").focus();
    }
  });
  window.addEventListener("beforeunload", (event) => {
    if (state.quiz) {
      event.preventDefault();
      event.returnValue = "";
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMenu();
  });
  $("#copyright-year").textContent = new Date().getFullYear();
  hydrateIcons();
  renderCatalog();
})();
