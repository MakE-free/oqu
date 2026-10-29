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
    volume:
      '<path d="M4 10v4h4l5 4V6L8 10H4Zm12-1a4 4 0 0 1 0 6m2.5-8.5a8 8 0 0 1 0 11"/>',
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
  const I18N = window.OQU_I18N || { ru: {} };
  let currentLanguage = (() => {
    try {
      const saved = localStorage.getItem("oqu.language");
      return saved === "kk" ? "kk" : "ru";
    } catch {
      return "ru";
    }
  })();
  const tr = (key, params = {}) => {
    const template = I18N[currentLanguage]?.[key] ?? I18N.ru?.[key] ?? key;
    return String(template).replace(/\{([a-zA-Z0-9_]+)\}/g, (match, name) =>
      Object.hasOwn(params, name) ? String(params[name]) : match,
    );
  };
  function updateLanguageControl() {
    document.querySelectorAll("[data-language]").forEach((option) => {
      option.setAttribute("aria-pressed", String(option.dataset.language === currentLanguage));
    });
  }
  function applyStaticTranslations() {
    document.documentElement.lang = currentLanguage;
    document.title = tr("document-title");
    document.querySelector('meta[name="description"]')?.setAttribute("content", tr("meta-description"));
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = tr(element.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      element.innerHTML = tr(element.dataset.i18nHtml);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      element.setAttribute("aria-label", tr(element.dataset.i18nAriaLabel));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.setAttribute("placeholder", tr(element.dataset.i18nPlaceholder));
    });
    updateLanguageControl();
  }
  const CRITICAL_TOPIC_GROUPS = [
    { id: "numbers", icon: "grid", titleKey: "critical-topic-numbers", itemsKey: "critical-topic-numbers-items", lesson: "numbers" },
    { id: "add-subtract", icon: "math", titleKey: "critical-topic-add-subtract", itemsKey: "critical-topic-add-subtract-items" },
    { id: "multiply-divide", icon: "math", titleKey: "critical-topic-multiply-divide", itemsKey: "critical-topic-multiply-divide-items" },
    { id: "operation-order", icon: "logic", titleKey: "critical-topic-operation-order", itemsKey: "critical-topic-operation-order-items" },
    { id: "signed-numbers", icon: "math", titleKey: "critical-topic-signed-numbers", itemsKey: "critical-topic-signed-numbers-items" },
    { id: "divisibility", icon: "grid", titleKey: "critical-topic-divisibility", itemsKey: "critical-topic-divisibility-items" },
    { id: "prime-factors", icon: "grid", titleKey: "critical-topic-prime-factors", itemsKey: "critical-topic-prime-factors-items" },
    { id: "gcd-lcm", icon: "logic", titleKey: "critical-topic-gcd-lcm", itemsKey: "critical-topic-gcd-lcm-items" },
    { id: "powers", icon: "sparkles", titleKey: "critical-topic-powers", itemsKey: "critical-topic-powers-items" },
    { id: "common-fractions", icon: "math", titleKey: "critical-topic-common-fractions", itemsKey: "critical-topic-common-fractions-items" },
    { id: "decimals-rounding", icon: "math", titleKey: "critical-topic-decimals-rounding", itemsKey: "critical-topic-decimals-rounding-items" },
    { id: "roots", icon: "sparkles", titleKey: "critical-topic-roots", itemsKey: "critical-topic-roots-items" },
    { id: "ratios-percentages", icon: "sliders", titleKey: "critical-topic-ratios-percentages", itemsKey: "critical-topic-ratios-percentages-items" },
    { id: "factorisation", icon: "logic", titleKey: "critical-topic-factorisation", itemsKey: "critical-topic-factorisation-items" },
    { id: "linear-equations", icon: "logic", titleKey: "critical-topic-linear-equations", itemsKey: "critical-topic-linear-equations-items" },
    { id: "quadratic-equations", icon: "logic", titleKey: "critical-topic-quadratic-equations", itemsKey: "critical-topic-quadratic-equations-items" },
    { id: "rational-equations", icon: "logic", titleKey: "critical-topic-rational-equations", itemsKey: "critical-topic-rational-equations-items" },
    { id: "equation-systems", icon: "grid", titleKey: "critical-topic-equation-systems", itemsKey: "critical-topic-equation-systems-items" },
    { id: "linear-inequalities", icon: "chart", titleKey: "critical-topic-linear-inequalities", itemsKey: "critical-topic-linear-inequalities-items" },
    { id: "quadratic-inequalities", icon: "chart", titleKey: "critical-topic-quadratic-inequalities", itemsKey: "critical-topic-quadratic-inequalities-items" },
    { id: "angles-triangles", icon: "target", titleKey: "critical-topic-angles-triangles", itemsKey: "critical-topic-angles-triangles-items" },
    { id: "quadrilaterals", icon: "grid", titleKey: "critical-topic-quadrilaterals", itemsKey: "critical-topic-quadrilaterals-items" },
    { id: "polygons", icon: "grid", titleKey: "critical-topic-polygons", itemsKey: "critical-topic-polygons-items" },
    { id: "circle", icon: "target", titleKey: "critical-topic-circle", itemsKey: "critical-topic-circle-items" },
    { id: "areas", icon: "target", titleKey: "critical-topic-areas", itemsKey: "critical-topic-areas-items" },
    { id: "motion", icon: "clock", titleKey: "critical-topic-motion", itemsKey: "critical-topic-motion-items" },
    { id: "work", icon: "clock", titleKey: "critical-topic-work", itemsKey: "critical-topic-work-items" },
    { id: "progressions", icon: "chart", titleKey: "critical-topic-progressions", itemsKey: "critical-topic-progressions-items" },
    { id: "combinatorics", icon: "brain", titleKey: "critical-topic-combinatorics", itemsKey: "critical-topic-combinatorics-items" },
    { id: "data", icon: "chart", titleKey: "critical-topic-data", itemsKey: "critical-topic-data-items" },
  ];
  const ANALYTICAL_TOPIC_GROUPS = [
    { id: "main-idea", icon: "target", titleKey: "analytical-topic-main-idea", itemsKey: "analytical-topic-main-idea-items" },
    { id: "style-type", icon: "file", titleKey: "analytical-topic-style-type", itemsKey: "analytical-topic-style-type-items" },
    { id: "information", icon: "search", titleKey: "analytical-topic-information", itemsKey: "analytical-topic-information-items" },
    { id: "title", icon: "book", titleKey: "analytical-topic-title", itemsKey: "analytical-topic-title-items" },
    { id: "sentence-completion", icon: "logic", titleKey: "analytical-topic-sentence-completion", itemsKey: "analytical-topic-sentence-completion-items" },
    { id: "statements", icon: "check-circle", titleKey: "analytical-topic-statements", itemsKey: "analytical-topic-statements-items" },
    { id: "synonyms", icon: "refresh", titleKey: "analytical-topic-synonyms", itemsKey: "analytical-topic-synonyms-items" },
  ];
  const LEARNING_TOPIC_PROGRAMS = {
    critical: {
      topics: CRITICAL_TOPIC_GROUPS,
      titleKey: "critical-topics-title",
      copyKey: "critical-topics-copy",
    },
    analytical: {
      topics: ANALYTICAL_TOPIC_GROUPS,
      titleKey: "analytical-topics-title",
      copyKey: "analytical-topics-copy",
    },
  };
  function renderTopicProgram(program) {
    $("#topic-program-title").textContent = tr(program.titleKey);
    $("#topic-program-copy").textContent = tr(program.copyKey);
    $("#topic-grid").innerHTML = program.topics.map((topic, index) =>
      `<article class="topic-card ${topic.lesson ? "has-lesson" : ""}" data-topic="${topic.id}"><div class="topic-card-mark"><span class="topic-card-icon">${icon(topic.icon)}</span><span class="topic-card-number">${String(index + 1).padStart(2, "0")}</span></div><div class="topic-card-content"><h4>${esc(tr(topic.titleKey))}</h4><p>${esc(tr(topic.itemsKey))}</p>${topic.lesson ? `<button class="topic-lesson-button" type="button" data-open-lesson="${topic.lesson}"><span>${esc(tr("open-lesson"))}</span>${icon("arrow-right")}</button>` : ""}</div></article>`,
    ).join("");
  }
  function renderNumbersLesson() {
    const sets = [
      ["ℕ", "lesson-set-natural-title", "lesson-set-natural-copy", "lesson-set-natural-example"],
      ["ℤ", "lesson-set-integer-title", "lesson-set-integer-copy", "lesson-set-integer-example"],
      ["ℚ", "lesson-set-rational-title", "lesson-set-rational-copy", "lesson-set-rational-example"],
      ["ℝ∖ℚ", "lesson-set-irrational-title", "lesson-set-irrational-copy", "lesson-set-irrational-example"],
      ["ℝ", "lesson-set-real-title", "lesson-set-real-copy", "lesson-set-real-example"],
    ];
    const comparisonSteps = [
      ["01", "lesson-compare-step-sign-title", "lesson-compare-step-sign-copy"],
      ["02", "lesson-compare-step-line-title", "lesson-compare-step-line-copy"],
      ["03", "lesson-compare-step-format-title", "lesson-compare-step-format-copy"],
    ];
    const comparisonExamples = [
      ["−4 > −11", "lesson-negative-title", "lesson-negative-copy"],
      ["0,80 > 0,76", "lesson-decimal-title", "lesson-decimal-copy"],
    ];
    const concepts = [
      ["0", "lesson-zero-title", "lesson-zero-copy", ""],
      ["±", "lesson-opposite-title", "lesson-opposite-copy", "−8 + 8 = 0"],
      ["|x|", "lesson-modulus-title", "lesson-modulus-copy", "|−8| = 8"],
    ];
    const parityDefinitions = [
      ["2k", "lesson-even-title", "lesson-even-copy"],
      ["2k + 1", "lesson-odd-title", "lesson-odd-copy"],
    ];
    const parityRules = [
      ["2k + 2m", "lesson-parity-even-even"],
      ["(2k+1) + (2m+1)", "lesson-parity-odd-odd"],
      ["2k + (2m+1)", "lesson-parity-even-odd"],
      ["2k · n", "lesson-parity-product"],
    ];
    const additionRules = [
      ["a + b = b + a", "lesson-add-commutative-title", "lesson-add-commutative-copy"],
      ["(a + b) + c = a + (b + c)", "lesson-add-associative-title", "lesson-add-associative-copy"],
      ["a + 0 = a", "lesson-add-zero-title", "lesson-add-zero-copy"],
      ["a + (−a) = 0", "lesson-add-opposite-title", "lesson-add-opposite-copy"],
    ];
    const questions = Array.from({ length: 7 }, (_, index) => tr(`lesson-check-q${index + 1}`));
    const answers = Array.from({ length: 7 }, (_, index) => tr(`lesson-check-a${index + 1}`));
    return `<div class="lesson-shell">
      <button class="lesson-back" type="button" data-action="back-to-topics">${icon("arrow-left")}<span>${esc(tr("lesson-back-topics"))}</span></button>
      <header class="lesson-hero">
        <span class="lesson-badge">${esc(tr("lesson-conspect-label"))} · ${esc(tr("lesson-label"))} 01</span><h1 id="lesson-view-title" tabindex="-1">${esc(tr("critical-topic-numbers"))}</h1>
      </header>
      <section class="lesson-introduction"><h2>${esc(tr("lesson-topic-heading"))}</h2><p>${esc(tr("lesson-number-intro"))}</p><p>${esc(tr("lesson-number-method"))}</p><div class="lesson-meta"><span>${icon("clock")} ${esc(tr("lesson-duration"))}</span><span>${icon("book")} ${esc(tr("lesson-parts"))}</span></div></section>
      <article class="lesson-block">
        <div class="lesson-block-heading"><span>01</span><div><h3>${esc(tr("lesson-map-title"))}</h3><p>${esc(tr("lesson-map-copy"))}</p></div></div>
        <div class="set-hierarchy" aria-label="${esc(tr("lesson-hierarchy-label"))}"><strong>ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</strong><span>ℝ = ℚ ∪ (ℝ∖ℚ)</span></div>
        <div class="lesson-table-frame"><table class="lesson-table lesson-table-sets"><thead><tr><th scope="col">${esc(tr("lesson-table-symbol"))}</th><th scope="col">${esc(tr("lesson-table-set"))}</th><th scope="col">${esc(tr("lesson-table-definition-example"))}</th></tr></thead><tbody>${sets.map(([symbol, titleKey, copyKey, exampleKey]) => `<tr><td class="lesson-table-symbol"><code>${symbol}</code></td><th scope="row">${esc(tr(titleKey))}</th><td><p>${esc(tr(copyKey))}</p><span class="lesson-table-example"><b>${esc(tr("lesson-example-label"))}:</b> ${esc(tr(exampleKey))}</span></td></tr>`).join("")}</tbody></table></div>
        <aside class="lesson-callout">${icon("bulb")}<div><strong>${esc(tr("lesson-narrow-title"))}</strong><p>${esc(tr("lesson-narrow-copy"))}</p></div></aside>
      </article>
      <article class="lesson-block">
        <div class="lesson-block-heading"><span>02</span><div><h3>${esc(tr("lesson-signs-title"))}</h3><p>${esc(tr("lesson-signs-copy"))}</p></div></div>
        <div class="lesson-table-frame"><table class="lesson-table lesson-table-concepts"><thead><tr><th scope="col">${esc(tr("lesson-table-symbol"))}</th><th scope="col">${esc(tr("lesson-table-concept"))}</th><th scope="col">${esc(tr("lesson-table-rule-example"))}</th></tr></thead><tbody>${concepts.map(([symbol, titleKey, copyKey, example]) => `<tr><td class="lesson-table-symbol"><code>${symbol}</code></td><th scope="row">${esc(tr(titleKey))}</th><td><p>${esc(tr(copyKey))}</p>${example ? `<span class="lesson-table-example">${example}</span>` : ""}</td></tr>`).join("")}</tbody></table></div>
      </article>
      <article class="lesson-block">
        <div class="lesson-block-heading"><span>03</span><div><h3>${esc(tr("lesson-compare-title"))}</h3><p>${esc(tr("lesson-compare-copy"))}</p></div></div>
        <div class="lesson-table-frame"><table class="lesson-table lesson-table-steps"><thead><tr><th scope="col">${esc(tr("lesson-table-step"))}</th><th scope="col">${esc(tr("lesson-table-action"))}</th><th scope="col">${esc(tr("lesson-table-how"))}</th></tr></thead><tbody>${comparisonSteps.map(([number, titleKey, copyKey]) => `<tr><td class="lesson-table-symbol">${number}</td><th scope="row">${esc(tr(titleKey))}</th><td>${esc(tr(copyKey))}</td></tr>`).join("")}</tbody></table></div>
        <h4 class="lesson-subheading">${esc(tr("lesson-worked-examples"))}</h4><div class="lesson-table-frame"><table class="lesson-table lesson-table-examples"><thead><tr><th scope="col">${esc(tr("lesson-table-topic"))}</th><th scope="col">${esc(tr("lesson-table-comparison"))}</th><th scope="col">${esc(tr("lesson-table-explanation"))}</th></tr></thead><tbody>${comparisonExamples.map(([formula, titleKey, copyKey]) => `<tr><th scope="row">${esc(tr(titleKey))}</th><td class="lesson-table-formula"><code>${formula}</code></td><td>${esc(tr(copyKey))}</td></tr>`).join("")}</tbody></table></div>
        <div class="math-strip"><span>−7</span><b>&lt;</b><span>−2</span><b>&lt;</b><span>0</span><b>&lt;</b><span>5</span></div>
      </article>
      <article class="lesson-block">
        <div class="lesson-block-heading"><span>04</span><div><h3>${esc(tr("lesson-parity-title"))}</h3><p>${esc(tr("lesson-parity-copy"))}</p></div></div>
        <div class="lesson-table-frame"><table class="lesson-table lesson-table-parity-definition"><thead><tr><th scope="col">${esc(tr("lesson-table-form"))}</th><th scope="col">${esc(tr("lesson-table-number-type"))}</th><th scope="col">${esc(tr("lesson-table-definition"))}</th></tr></thead><tbody>${parityDefinitions.map(([formula, titleKey, copyKey]) => `<tr><td class="lesson-table-formula"><code>${formula}</code></td><th scope="row">${esc(tr(titleKey))}</th><td>${esc(tr(copyKey))}</td></tr>`).join("")}</tbody></table></div>
        <p class="lesson-notation">k, m, n ∈ ℤ</p>
        <h4 class="lesson-subheading">${esc(tr("lesson-parity-rules-title"))}</h4><div class="lesson-table-frame"><table class="lesson-table lesson-table-parity"><thead><tr><th scope="col">${esc(tr("lesson-table-formula"))}</th><th scope="col">${esc(tr("lesson-table-conclusion"))}</th></tr></thead><tbody>${parityRules.map(([formula, copyKey]) => `<tr><td class="lesson-table-formula"><code>${formula}</code></td><td>${esc(tr(copyKey))}</td></tr>`).join("")}</tbody></table></div>
        <aside class="lesson-callout">${icon("check-circle")}<div><strong>${esc(tr("lesson-parity-example-title"))}</strong><p>${esc(tr("lesson-parity-example-copy"))}</p></div></aside>
      </article>
      <article class="lesson-block">
        <div class="lesson-block-heading"><span>05</span><div><h3>${esc(tr("lesson-add-title"))}</h3><p>${esc(tr("lesson-add-copy"))}</p></div></div>
        <div class="addition-intro"><code>a + b = c</code><p>${esc(tr("lesson-add-terms"))}</p></div>
        <div class="lesson-table-frame"><table class="lesson-table lesson-table-addition"><thead><tr><th scope="col">${esc(tr("lesson-table-formula"))}</th><th scope="col">${esc(tr("lesson-table-property"))}</th><th scope="col">${esc(tr("lesson-table-meaning"))}</th></tr></thead><tbody>${additionRules.map(([formula, titleKey, copyKey]) => `<tr><td class="lesson-table-formula"><code>${formula}</code></td><th scope="row">${esc(tr(titleKey))}</th><td>${esc(tr(copyKey))}</td></tr>`).join("")}</tbody></table></div>
        <aside class="lesson-callout">${icon("sparkles")}<div><strong>${esc(tr("lesson-add-example-title"))}</strong><p>${esc(tr("lesson-add-example-copy"))}</p></div></aside>
      </article>
      <article class="lesson-block lesson-check">
        <div class="lesson-block-heading"><span>✓</span><div><h3>${esc(tr("lesson-check-title"))}</h3><p>${esc(tr("lesson-check-copy"))}</p></div></div>
        <ol>${questions.map((question) => `<li>${esc(question)}</li>`).join("")}</ol>
        <details class="lesson-answers"><summary>${esc(tr("lesson-show-answers"))}<span>${icon("arrow-right")}</span></summary><ol>${answers.map((answer) => `<li>${esc(answer)}</li>`).join("")}</ol></details>
      </article>
      <footer class="lesson-finish"><div>${icon("check-circle")}<div><strong>${esc(tr("lesson-finish-title"))}</strong><p>${esc(tr("lesson-finish-copy"))}</p></div></div><button class="button button-green" type="button" data-action="back-to-topics">${esc(tr("lesson-back-topics"))}${icon("arrow-right")}</button></footer>
    </div>`;
  }
  const BANK = window.OQU_QUESTIONS || [];
  const LEARNING_TESTS = [
    {
      "id": "tgo-critical-1",
      "subject": "tgo",
      "topic": "analytical",
      "variant": 1,
      "questionSet": "tgo-critical-1",
      "title": "Аналитическое мышление: тест 1",
      "description": "Работа с текстом, аргументами и обоснованными выводами.",
      "count": 15,
      "minutes": 20,
      "icon": "bulb",
      "type": "Практический тест",
      "level": "Аналитическое мышление"
    },
    {
      "id": "tgo-critical-2",
      "subject": "tgo",
      "topic": "analytical",
      "variant": 2,
      "questionSet": "tgo-critical-2",
      "title": "Аналитическое мышление: тест 2",
      "description": "Работа с текстом, аргументами и обоснованными выводами.",
      "count": 15,
      "minutes": 20,
      "icon": "bulb",
      "type": "Практический тест",
      "level": "Аналитическое мышление"
    },
    {
      "id": "tgo-critical-3",
      "subject": "tgo",
      "topic": "analytical",
      "variant": 3,
      "questionSet": "tgo-critical-3",
      "title": "Аналитическое мышление: тест 3",
      "description": "Работа с текстом, аргументами и обоснованными выводами.",
      "count": 15,
      "minutes": 20,
      "icon": "bulb",
      "type": "Практический тест",
      "level": "Аналитическое мышление"
    },
    {
      "id": "tgo-analytical-1",
      "subject": "tgo",
      "topic": "critical",
      "variant": 1,
      "questionSet": "tgo-analytical-1",
      "title": "Критическое мышление: тест 1",
      "description": "Расчёты, закономерности и решение задач по условию.",
      "count": 15,
      "minutes": 25,
      "icon": "logic",
      "type": "Практический тест",
      "level": "Критическое мышление"
    },
    {
      "id": "tgo-analytical-2",
      "subject": "tgo",
      "topic": "critical",
      "variant": 2,
      "questionSet": "tgo-analytical-2",
      "title": "Критическое мышление: тест 2",
      "description": "Расчёты, закономерности и решение задач по условию.",
      "count": 15,
      "minutes": 25,
      "icon": "logic",
      "type": "Практический тест",
      "level": "Критическое мышление"
    },
    {
      "id": "tgo-analytical-3",
      "subject": "tgo",
      "topic": "critical",
      "variant": 3,
      "questionSet": "tgo-analytical-3",
      "title": "Критическое мышление: тест 3",
      "description": "Расчёты, закономерности и решение задач по условию.",
      "count": 15,
      "minutes": 25,
      "icon": "logic",
      "type": "Практический тест",
      "level": "Критическое мышление"
    },
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
      archived: true,
      subject: "tgo",
      topic: "analytical",
      title: "Аналитическое мышление",
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
  const BANK_BY_ID = new Map(BANK.map((question) => [question.id, question]));
  function createMockTests() {
    const legacyEnglishIds = BANK.filter((q) => /^mock-en-\d{2}$/.test(q.id)).map((q) => q.id);
    const legacyEnglishSection = { key: "english", label: "Английский язык", questionIds: legacyEnglishIds };
    const listeningIds = BANK.filter((q) => q.testId === "mock-english-v2" && q.topic === "listening").map((q) => q.id);
    const grammarIds = BANK.filter((q) => q.testId === "mock-english-v2" && q.topic === "grammar").map((q) => q.id);
    const readingIds = [
      ...BANK.filter((q) => q.testId === "mock-english-v2" && q.topic === "reading").map((q) => q.id),
      ...BANK.filter((q) => /^mock-en-(?:3[6-9]|4\d|50)$/.test(q.id)).map((q) => q.id),
    ];
    const englishSections = [
      { key: "listening", label: "Слушание", questionIds: listeningIds },
      { key: "grammar", label: "Грамматика", questionIds: grammarIds },
      { key: "reading", label: "Чтение", questionIds: readingIds },
    ];
    const tests = [];
    for (let variant = 1; variant <= 3; variant++) {
      const tgoSections = [
        { key: "critical", label: "Критическое мышление", testId: `tgo-analytical-${variant}` },
        { key: "analytical", label: "Аналитическое мышление", testId: `tgo-critical-${variant}` },
      ].map(({ key, label, testId }) => ({
        key,
        label,
        questionIds: BANK.filter((q) => q.testId === testId).map((q) => q.id),
      }));
      const standaloneTgoSections = variant === 1
        ? [
          { key: "critical", label: "Критическое мышление", questionIds: BANK.filter((q) => q.testId === "mock-tgo-analytical-1").map((q) => q.id) },
          { key: "analytical", label: "Аналитическое мышление", questionIds: BANK.filter((q) => q.testId === "mock-tgo-analytical-text-1").map((q) => q.id) },
        ]
        : variant === 2
          ? [
            { key: "critical", label: "Критическое мышление", questionIds: BANK.filter((q) => q.testId === "mock-tgo-critical-2").map((q) => q.id) },
            { key: "analytical", label: "Аналитическое мышление", questionIds: BANK.filter((q) => q.testId === "tgo-critical-2").map((q) => q.id) },
          ]
          : tgoSections;
      tests.push({ id: `mock-combined-${variant}`, archived: true, direction: "mock", subject: "combined", variant,
        title: `Пробник ${variant}: ТГО + английский`, description: "15 вопросов на критическое мышление, 15 на аналитическое и 50 по английскому.",
        count: 80, minutes: 105, icon: "target", type: "Полный пробник", level: "ТГО + английский",
        sections: [...tgoSections, legacyEnglishSection], questionIds: [...tgoSections.flatMap((section) => section.questionIds), ...legacyEnglishIds] });
      tests.push({ id: `mock-tgo-${variant}`, direction: "mock", subject: "tgo", variant,
        title: `ТГО: пробник ${variant}`, description: "Критическое и аналитическое мышление — по 15 вопросов в каждом блоке.",
        count: 30, minutes: 45, icon: "brain", type: "Пробник ТГО", level: "Два блока мышления",
        sections: standaloneTgoSections, questionIds: standaloneTgoSections.flatMap((section) => section.questionIds) });
    }
    tests.push({ id: "mock-english", direction: "mock", subject: "english",
      title: "Английский язык: пробник", description: "50 вопросов: 16 на слушание, 18 на грамматику и 16 на чтение.",
      count: 50, minutes: 60, icon: "book", type: "Пробник по английскому", level: "Listening · Grammar · Reading",
      sections: englishSections, questionIds: englishSections.flatMap((section) => section.questionIds) });
    return tests;
  }
  const TESTS = [...LEARNING_TESTS.map((test) => ({ ...test, direction: "learning", archived: true })), ...createMockTests()];
  const ACTIVE_TESTS = TESTS.filter((test) => !test.archived);
  function localizedTestField(test, field) {
    if (currentLanguage === "ru") return test[field];
    const analytical = test.id.match(/^tgo-critical-(\d)$/);
    const critical = test.id.match(/^tgo-analytical-(\d)$/);
    const combined = test.id.match(/^mock-combined-(\d)$/);
    const tgoMock = test.id.match(/^mock-tgo-(\d)$/);
    if (field === "title") {
      if (analytical) return tr("analytical-test-title", { n: analytical[1] });
      if (critical) return tr("critical-test-title", { n: critical[1] });
      if (combined) return tr("mock-combined-title", { n: combined[1] });
      if (tgoMock) return tr("tgo-mock-title", { n: tgoMock[1] });
      if (test.id === "mock-english") return tr("english-mock-title");
      if (test.id === "english-mixed") return tr("english-complex-title");
      if (test.id === "tgo-critical") return tr("archived-analytical-title");
    }
    if (field === "description") {
      if (analytical) return tr("analytical-test-description");
      if (critical) return tr("critical-test-description");
      if (combined) return tr("combined-description");
      if (tgoMock) return tr("tgo-mock-description");
      if (test.id === "mock-english") return tr("english-mock-description");
      if (test.id === "english-mixed") return tr("english-complex-description");
      if (test.id === "tgo-critical") return tr("archived-analytical-description");
      if (test.id === "english-grammar") return tr("english-grammar-description");
      if (test.id === "english-vocabulary") return tr("english-vocabulary-description");
      if (test.id === "english-reading") return tr("english-reading-description");
    }
    if (field === "type") {
      if (combined) return tr("full-mock");
      if (tgoMock) return tr("tgo-mock-type");
      if (test.id === "mock-english") return tr("english-mock-type");
      if (test.type === "Практический тест") return tr("practical-test");
      if (test.type === "Тематический тест") return tr("thematic-test");
      if (test.type === "Комплексный тест") return tr("comprehensive-test");
    }
    if (field === "level") {
      if (combined) return tr("subject-combined");
      if (tgoMock) return tr("two-thinking-blocks");
      if (test.id === "mock-english") return tr("english-mock-level");
      const levelKeys = {
        "Аналитическое мышление": "analytical-thinking",
        "Критическое мышление": "critical-thinking",
        "Все темы": "all-topics",
        "Анализ текста": "text-analysis",
        "Грамматика": "grammar",
        "Лексика": "vocabulary",
        "Чтение": "reading",
      };
      if (levelKeys[test.level]) return tr(levelKeys[test.level]);
    }
    return test[field];
  }
  const testTitle = (test) => localizedTestField(test, "title");
  const testDescription = (test) => localizedTestField(test, "description");
  const testType = (test) => localizedTestField(test, "type");
  const testLevel = (test) => localizedTestField(test, "level");
  const subjectLabel = (test) => test.subject === "combined" ? tr("subject-combined") : test.subject === "tgo" ? tr("tgo") : tr("english-language");
  const learningFilterTitle = (filter) => ({
    critical: tr("critical-thinking"),
    analytical: tr("analytical-thinking"),
    english: tr("english-language"),
  })[filter] || tr("learning");
  const learningFilterDescription = (filter) => ({
    critical: tr("critical-description"),
    analytical: tr("analytical-description"),
    english: tr("english-description"),
  })[filter] || tr("learning-description");
  const thinkingKey = (question) => {
    const testId = question?.testId || "";
    if (testId === "mock-tgo-analytical-1" || testId === "mock-tgo-critical-2" || testId.startsWith("tgo-analytical-")) return "critical";
    if (testId === "mock-tgo-analytical-text-1" || testId.startsWith("tgo-critical-") || /^tgo-(?:0[1-9]|1[0-5])$/.test(question?.id || "")) return "analytical";
    return question?.topic;
  };
  const englishSectionLabel = (topic) => ({ listening: tr("listening"), grammar: tr("grammar"), vocabulary: tr("vocabulary"), reading: tr("reading") })[topic] || tr("english-language");
  const sectionLabel = (question) => question.subject === "english" ? englishSectionLabel(question.topic) : thinkingKey(question) === "analytical" ? tr("analytical-thinking") : tr("critical-thinking");
  function mockBreakdown(test, result = null) {
    if (!test.sections) return "";
    const actual = result ? result.questions.map((q, i) => ({ question: BANK_BY_ID.get(q.id), answer: result.answers[i] })) : null;
    return `<div class="mock-breakdown">${test.sections.map((section) => {
      const rows = actual ? actual.filter(({ question }) => question && (section.key === "english" ? question.subject === "english" : question.subject === "english" ? question.topic === section.key : question.subject === "tgo" && thinkingKey(question) === section.key)) : null;
      const value = rows ? `${rows.filter(({ question, answer }) => answer === question.answer).length} / ${rows.length}` : section.questionIds.length;
      const label = section.key === "critical" ? tr("critical-thinking") : section.key === "analytical" ? tr("analytical-thinking") : section.key === "english" ? tr("english-language") : englishSectionLabel(section.key);
      return `<span>${label}<strong>${value}</strong></span>`;
    }).join("")}</div>`;
  }
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
          tr("browser-save-error"),
        );
        return false;
      }
    },
  };
  const savedData = storage.read("saved", []),
    historyData = storage.read("history", []);
  const state = {
    view: "home",
    direction: "learning",
    filter: "all",
    lesson: null,
    search: "",
    saved: Array.isArray(savedData)
      ? savedData.filter((id) => ACTIVE_TESTS.some((t) => t.id === id))
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
  function setLanguage(language, { announce = true } = {}) {
    if (!["ru", "kk"].includes(language)) return;
    if (language === currentLanguage) return;
    const search = state.search;
    const activeLesson = state.lesson;
    currentLanguage = language;
    try {
      localStorage.setItem("oqu.language", currentLanguage);
    } catch {
      // The interface can still switch for the current page view.
    }
    applyStaticTranslations();
    navigate(state.view, state.filter, false, state.direction);
    if (activeLesson) openLesson(activeLesson, false);
    if (search) {
      state.search = search;
      $("#test-search").value = search;
      renderCatalog();
    }
    if (announce) toast(tr("language-changed"));
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
  function navigate(view, filter = "all", scroll = false, direction = state.direction) {
    state.lesson = null;
    state.view = view;
    state.direction = direction;
    state.filter = filter;
    state.search = "";
    $("#test-search").value = "";
    const home = view === "home", special = view === "saved" || view === "history";
    const mock = direction === "mock", directionTitle = mock ? tr("mock-exams") : tr("learning");
    const learningTitle = learningFilterTitle(filter);
    const mockTitle = filter === "tgo" ? tr("mock-tgo-title") : filter === "english" ? tr("mock-english-title") : tr("mock-exams");
    $("#hero").hidden = !home;
    $("#subjects-section").hidden = !home;
    $("#catalog").hidden = home;
    $(".page-heading").hidden = false;
    $("#lesson-view").hidden = true;
    $(".catalog-heading").hidden = false;
    $("#practice-note").hidden = home || view === "history" || (!mock && view === "all");
    const title = home ? tr("workspace-title") : view === "saved" ? tr("saved") : view === "history" ? tr("test-history") : mock ? mockTitle : learningTitle;
    $("#page-title").textContent = title;
    $("#page-subtitle").textContent = home ? tr("home-slogan") : view === "saved" ? tr("saved-subtitle") : view === "history" ? tr("history-subtitle") : mock ? tr("mock-subtitle") : learningFilterDescription(filter);
    $("#breadcrumb-current").textContent = home ? tr("home") : special ? view === "saved" ? tr("saved") : tr("test-history") : !mock && filter !== "all" ? learningTitle : directionTitle;
    document.querySelectorAll("[data-nav]").forEach((el) => {
      const group = el.classList.contains("direction-nav");
      const active = !home && (special ? el.dataset.nav === view && !el.dataset.direction : el.dataset.direction === direction && (group || el.dataset.nav === filter));
      el.classList.toggle("active", active);
      active && (!group || filter === "all") ? el.setAttribute("aria-current", "page") : el.removeAttribute("aria-current");
    });
    $("#catalog-title").textContent = view === "saved" ? tr("saved-tests") : view === "history" ? tr("completed-tests") : mock ? mockTitle : filter === "all" ? tr("learning-directions") : learningTitle;
    $("#catalog-toolbar").hidden = view === "history";
    $(".catalog-caption").hidden = special;
    $("#direction-intro").hidden = home || special;
    $("#direction-intro-label").textContent = directionTitle.toUpperCase();
    $("#direction-intro-icon").innerHTML = icon(mock ? "target" : "book");
    $("#direction-intro-copy").textContent = mock ? filter === "tgo" ? tr("mock-tgo-intro") : filter === "english" ? tr("mock-english-intro") : tr("mock-default-intro") : learningFilterDescription(filter);
    renderCatalog();
    closeMenu();
    if (scroll && !home) $("#catalog").scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "instant" });
  }
  function renderCatalog() {
    updateSavedCount();
    const special = state.view === "saved" || state.view === "history";
    $("#topic-program").hidden = true;
    $("#lesson-view").hidden = true;
    document.querySelectorAll("[data-filter]").forEach((el) => {
      const active = el.dataset.filter === state.filter;
      el.classList.toggle("active", active);
      el.setAttribute("aria-pressed", String(active));
      const key = el.dataset.filter;
      el.hidden = special
        ? ["critical", "analytical"].includes(key)
        : state.direction === "mock"
          ? ["all", "critical", "analytical"].includes(key)
          : key === "tgo";
    });
    $(".search-field").hidden = state.view === "all" && state.direction === "learning";
    $("#test-grid").hidden = state.view === "history";
    $("#history-list").hidden = state.view !== "history";
    if (state.view === "home") { $("#test-grid").innerHTML = ""; return; }
    if (state.view === "history") { renderHistory(); return; }
    const topicProgram = state.view === "all" && state.direction === "learning"
      ? LEARNING_TOPIC_PROGRAMS[state.filter]
      : null;
    if (topicProgram) {
      $("#test-grid").hidden = true;
      $("#test-grid").innerHTML = "";
      $("#test-count").textContent = topicProgram.topics.length;
      $("#empty-state").hidden = true;
      $("#topic-program").hidden = false;
      renderTopicProgram(topicProgram);
      return;
    }
    const tests = ACTIVE_TESTS.filter((test) =>
      (state.view === "saved" ? state.saved.includes(test.id) : test.direction === state.direction) &&
      (state.filter === "all" || test.subject === state.filter || (test.subject === "tgo" && test.topic === state.filter)) &&
      `${test.title} ${testTitle(test)} ${test.description} ${testDescription(test)} ${test.level} ${testLevel(test)} ${subjectLabel(test)} ${test.direction === "mock" ? tr("mock-exams") : tr("learning")}`.toLowerCase().includes(state.search.toLowerCase().trim()));
    $("#test-count").textContent = tests.length;
    $("#test-grid").innerHTML = tests.map((test) => {
      const saved = state.saved.includes(test.id), last = state.history.find((attempt) => attempt.testId === test.id);
      const title = testTitle(test);
      return `<article class="test-card ${test.subject} ${test.direction === "mock" ? "mock" : ""}"><div class="test-card-top"><span class="test-type">${testType(test)}</span><button class="icon-button save-button ${saved ? "is-saved" : ""}" data-save="${test.id}" aria-label="${saved ? tr("remove-saved") : tr("save-test")}: ${title}" aria-pressed="${saved}">${icon("bookmark")}</button></div><div class="test-subject-icon">${icon(test.icon)}</div><div class="test-subject-label">${subjectLabel(test).toUpperCase()}</div><h3>${title}</h3><p class="test-description">${testDescription(test)}</p><div class="test-meta"><span>${icon("file")}${test.count} ${tr("questions")}</span><span>${icon("clock")}${test.minutes} ${tr("minutes-short")}</span></div><div class="test-card-footer"><span class="test-level ${last ? "completed-label" : ""}">${last ? icon("check-circle") + `${last.correct} / ${last.total} · ${tr("completed")}` : testLevel(test)}</span><button class="test-start" data-start="${test.id}">${last ? tr("again") : tr("start")}${icon("arrow-right")}</button></div></article>`;
    }).join("");
    $("#empty-state").hidden = tests.length > 0;
    if (!tests.length && state.view === "all" && state.direction === "learning") {
      $("#empty-state").innerHTML = state.filter === "all"
        ? `<span class="empty-icon">${icon("book")}</span><h3>${tr("directions-separated")}</h3><p>${tr("directions-separated-copy")}</p>`
        : `<span class="empty-icon">${icon(state.filter === "critical" ? "logic" : state.filter === "analytical" ? "bulb" : "book")}</span><h3>${tr("no-tests-direction")}</h3><p>${tr("materials-coming", { section: learningFilterTitle(state.filter) })}</p>`;
    } else if (!tests.length) {
      $("#empty-state").innerHTML = `<span class="empty-icon">${icon(state.search ? "search" : "bookmark")}</span><h3>${state.search ? tr("no-tests-search") : tr("save-interesting")}</h3><p>${state.search ? tr("try-other-search") : tr("bookmark-mocks")}</p><button class="button button-green" data-action="reset-catalog">${state.search ? tr("reset-search") : tr("view-mocks")}${icon("arrow-right")}</button>`;
    }
  }
  function openLesson(lesson, scroll = true) {
    if (lesson !== "numbers") return;
    state.lesson = lesson;
    state.view = "all";
    state.direction = "learning";
    state.filter = "critical";
    $("#hero").hidden = true;
    $("#subjects-section").hidden = true;
    $("#catalog").hidden = false;
    $(".page-heading").hidden = true;
    $("#topic-program").hidden = true;
    $("#test-grid").hidden = true;
    $("#empty-state").hidden = true;
    $("#history-list").hidden = true;
    $("#catalog-toolbar").hidden = true;
    $("#direction-intro").hidden = true;
    $(".catalog-heading").hidden = true;
    $("#practice-note").hidden = true;
    $("#page-title").textContent = tr("critical-topic-numbers");
    $("#page-subtitle").textContent = tr("lesson-number-subtitle");
    $("#breadcrumb-current").textContent = tr("lesson-label") + " 01";
    $("#lesson-view").innerHTML = renderNumbersLesson();
    $("#lesson-view").hidden = false;
    document.querySelectorAll("[data-nav]").forEach((element) => {
      const active = element.dataset.direction === "learning" && (element.classList.contains("direction-nav") || element.dataset.nav === "critical");
      element.classList.toggle("active", active);
      active && !element.classList.contains("direction-nav") ? element.setAttribute("aria-current", "page") : element.removeAttribute("aria-current");
    });
    closeMenu();
    if (scroll) $("#catalog").scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "instant" });
    requestAnimationFrame(() => $("#lesson-view-title")?.focus({ preventScroll: true }));
  }
  function renderHistory() {
    $("#test-count").textContent = state.history.length;
    $("#empty-state").hidden = state.history.length > 0;
    if (!state.history.length) {
      $("#history-list").innerHTML = "";
      $("#empty-state").innerHTML =
        `<span class="empty-icon">${icon("history")}</span><h3>${tr("history-start")}</h3><p>${tr("history-start-copy")}</p><button class="button button-green" data-action="reset-catalog">${tr("choose-test")}${icon("arrow-right")}</button>`;
      return;
    }
    const total = state.history.reduce((sum, h) => sum + h.total, 0),
      correct = state.history.reduce((sum, h) => sum + h.correct, 0);
    $("#history-list").innerHTML =
      `<div class="history-stats"><div><span>${tr("tests-completed")}</span><strong>${state.history.length}</strong></div><div><span>${tr("questions-solved")}</span><strong>${total}</strong></div><div><span>${tr("correct-answers")}</span><strong>${Math.round((correct / total) * 100)}<small>%</small></strong></div></div>${state.history
        .map((h) => {
          const t = TESTS.find((t) => t.id === h.testId);
          return `<article class="history-row"><span class="history-subject-icon ${t.direction === "mock" ? "mock" : t.subject}">${icon(t.icon)}</span><div class="history-row-title"><h3>${testTitle(t)}</h3><span>${new Intl.DateTimeFormat(currentLanguage === "kk" ? "kk-KZ" : "ru-RU", { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" }).format(new Date(h.date))} · ${formatDuration(h.elapsed)}</span></div><div class="history-result"><strong>${h.correct}<span> / ${h.total}</span></strong><span>${Math.round((h.correct / h.total) * 100)}${tr("percent-correct")}</span></div><button class="button button-white" data-review="${esc(h.id)}">${tr("review")}${icon("arrow-right")}</button></article>`;
        })
        .join(
          "",
        )}<p class="storage-note">${icon("user")}${tr("history-storage")}</p>`;
  }
  function toggleSave(id) {
    const i = state.saved.indexOf(id);
    if (i < 0) state.saved.push(id);
    else state.saved.splice(i, 1);
    storage.write("saved", state.saved);
    renderCatalog();
    toast(i < 0 ? tr("saved-added") : tr("saved-removed"));
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
    stopListening();
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
    `<button class="icon-button dialog-close" data-action="close-dialog" aria-label="${tr("close")}">${icon("close")}</button>`;
  function showHelp() {
    openDialog(
      `<div class="standard-modal">${closeButton()}<span class="modal-icon">${icon("sparkles")}</span><div class="eyebrow">${tr("help-eyebrow")}</div><h2 id="dialog-title">${tr("help-title")}</h2><p class="modal-intro">${tr("help-intro")}</p><ol class="help-steps"><li><span>01</span><div><strong>${tr("help-step-direction")}</strong><p>${tr("help-step-direction-copy")}</p></div></li><li><span>02</span><div><strong>${tr("help-step-check")}</strong><p>${tr("help-step-check-copy")}</p></div></li><li><span>03</span><div><strong>${tr("help-step-review")}</strong><p>${tr("help-step-review-copy")}</p></div></li></ol><div class="modal-info">${tr("help-info")}</div><button class="button button-green button-full" data-action="close-dialog">${tr("help-done")}${icon("arrow-right")}</button></div>`,
    );
  }
  function showSetup(id) {
    const t = ACTIVE_TESTS.find((t) => t.id === id);
    if (!t) return;
    openDialog(
      `<div class="standard-modal setup-modal">${closeButton()}<span class="modal-icon ${t.direction === "mock" ? "mock" : t.subject}">${icon(t.icon)}</span><div class="eyebrow">${subjectLabel(t).toUpperCase()} · ${testType(t).toUpperCase()}</div><h2 id="dialog-title">${testTitle(t)}</h2><p class="modal-intro">${testDescription(t)}</p>${mockBreakdown(t)}<div class="setup-stats"><div>${icon("file")}<strong>${t.count}</strong><span>${tr("questions")}</span></div><div>${icon("clock")}<strong>${t.minutes} ${tr("minutes-short")}</strong><span>${tr("to-complete")}</span></div><div>${icon("bulb")}<strong>${tr("with-review")}</strong><span>${tr("each-answer")}</span></div></div><label class="setting-row"><div><strong>${tr("timed-test")}</strong><span>${tr("timed-test-copy")}</span></div><input id="timer-setting" type="checkbox" role="switch" checked /><span class="switch-track"></span></label><label class="setting-row"><div><strong>${tr("shuffle-questions")}</strong><span>${tr("shuffle-copy")}</span></div><input id="shuffle-setting" type="checkbox" role="switch" checked /><span class="switch-track"></span></label><p class="setup-hint">${icon("check-circle")}${tr("setup-hint")}</p><div class="modal-info">${tr("setup-info")}</div><button class="button button-green button-full" data-begin="${t.id}">${tr("start-test")}${icon("arrow-right")}</button></div>`,
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
    const t = ACTIVE_TESTS.find((t) => t.id === id);
    if (!t) return;
    const timed = $("#timer-setting").checked,
      random = $("#shuffle-setting").checked;
    let questions;
    if (t.questionIds) {
      const ids = t.sections.flatMap((section) => section.questionIds);
      if (ids.length !== t.count || new Set(ids).size !== t.count || ids.some((id) => !BANK_BY_ID.has(id))) {
        toast(tr("load-all-error"));
        return;
      }
      questions = t.sections.flatMap((section) => {
        const group = section.questionIds.map((id) => BANK_BY_ID.get(id));
        return random ? shuffle(group) : group;
      });
    } else {
      questions = BANK.filter((q) => !q.mockOnly && q.subject === t.subject && (t.questionSet ? q.testId === t.questionSet : !t.topic || thinkingKey(q) === t.topic));
      if (random) questions = shuffle(questions);
      questions = questions.slice(0, t.count);
    }
    if (questions.length !== t.count) {
      toast(tr("load-error"));
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
      ? tr("duration-seconds", { seconds: secs })
      : tr("duration-minutes", { minutes: Math.floor(secs / 60), seconds: secs % 60 });
  }
  const hasSpeechPlayback = () => typeof window.speechSynthesis?.speak === "function" && typeof window.SpeechSynthesisUtterance === "function";
  function stopListening() {
    if (typeof window.speechSynthesis?.cancel === "function") window.speechSynthesis.cancel();
  }
  function playListening() {
    const question = state.quiz?.questions[state.quiz.index];
    if (!question?.audioText) return;
    if (!hasSpeechPlayback()) {
      toast(tr("audio-unavailable-toast"));
      return;
    }
    const button = $('[data-action="play-listening"]');
    const copy = button?.querySelector(".listening-play-copy");
    const reset = () => {
      if (!button?.isConnected) return;
      button.classList.remove("is-playing");
      button.setAttribute("aria-pressed", "false");
      if (copy) copy.textContent = tr("listen-recording");
    };
    stopListening();
    const utterance = new SpeechSynthesisUtterance(question.audioText);
    const voices = window.speechSynthesis.getVoices?.() || [];
    utterance.voice = voices.find((voice) => /^en-GB$/i.test(voice.lang)) || voices.find((voice) => /^en/i.test(voice.lang)) || null;
    utterance.lang = utterance.voice?.lang || "en-GB";
    utterance.rate = 0.88;
    utterance.pitch = 1;
    utterance.onstart = () => {
      if (!button?.isConnected) return;
      button.classList.add("is-playing");
      button.setAttribute("aria-pressed", "true");
      if (copy) copy.textContent = tr("playing");
    };
    utterance.onend = reset;
    utterance.onerror = (event) => {
      reset();
      if (!["canceled", "interrupted"].includes(event.error)) toast(tr("audio-play-error"));
    };
    window.speechSynthesis.speak(utterance);
  }
  function questionMaterial(question, review = false) {
    if (question.audioText) {
      if (review) return `<div class="question-passage listening-transcript" lang="en"><strong lang="${currentLanguage}">${tr("audio-text")}</strong>\n${esc(question.audioText)}</div>`;
      const supported = hasSpeechPlayback();
      return `<div class="listening-player"><div class="listening-player-main"><span class="listening-player-icon">${icon("volume")}</span><div><strong>Listening</strong><span>${supported ? tr("listen-instruction") : tr("audio-unavailable")}</span></div></div><button class="button button-white listening-play" data-action="play-listening" aria-pressed="false" ${supported ? "" : "disabled"}>${icon("volume")}<span class="listening-play-copy">${tr("listen-recording")}</span></button>${supported ? "" : `<div class="listening-fallback" lang="en">${esc(question.audioText)}</div>`}</div>`;
    }
    return question.passage ? `<div class="question-passage" lang="${question.subject === "english" ? "en" : "ru"}">${esc(question.passage)}</div>` : "";
  }
  function renderQuiz(focusQuestion = true) {
    const quiz = state.quiz;
    if (!quiz) return;
    stopListening();
    const q = quiz.questions[quiz.index],
      answered = quiz.answers.filter((a) => a !== null).length;
    const previousScroll = dialog.scrollTop;
    const contentLanguage = q.subject === "english" ? "en" : "ru";
    const flagged = quiz.flags.includes(quiz.index);
    const answerOptions = q.options.map((option, index) =>
      `<button class="answer-option ${quiz.answers[quiz.index] === index ? "selected" : ""}" data-answer="${index}" aria-pressed="${quiz.answers[quiz.index] === index}"><span class="answer-letter">${String.fromCharCode(65 + index)}</span><span lang="${contentLanguage}">${esc(option)}</span><span class="answer-radio">${quiz.answers[quiz.index] === index ? icon("check") : ""}</span></button>`,
    ).join("");
    const questionNumbers = quiz.questions.map((_, index) => {
      const selected = quiz.answers[index] !== null;
      const marked = quiz.flags.includes(index);
      const aria = `${tr("question-number", { n: index + 1 })}${selected ? tr("answer-selected-suffix") : ""}${marked ? tr("marked-suffix") : ""}`;
      return `<button class="question-number ${index === quiz.index ? "current" : ""} ${selected ? "answered" : ""} ${marked ? "flagged" : ""}" data-question="${index}" aria-label="${aria}" ${index === quiz.index ? 'aria-current="step"' : ""}>${index + 1}</button>`;
    }).join("");
    openDialog(
      `<div class="quiz-layout"><header class="quiz-header"><div><span class="eyebrow">${quiz.test.direction === "mock" ? `${tr("mock-label")} · ` : ""}${subjectLabel(quiz.test).toUpperCase()}</span><h2 id="dialog-title">${testTitle(quiz.test)}</h2></div><div class="quiz-header-right"><div class="quiz-clock">${icon("clock")}<span id="quiz-timer">${timerText()}</span>${!quiz.ends ? `<small>${tr("no-limit")}</small>` : ""}</div><button class="icon-button" data-action="exit-quiz" aria-label="${tr("exit-test")}">${icon("close")}</button></div></header><div class="quiz-progress-track"><span style="width:${(answered / quiz.questions.length) * 100}%"></span></div><div class="quiz-body"><section class="question-area"><div class="question-toolbar"><span>${tr("question-progress", { current: quiz.index + 1, total: quiz.questions.length })}${quiz.test.direction === "mock" ? `<span class="quiz-section-label">${sectionLabel(q)}</span>` : ""}</span><button class="flag-button ${flagged ? "flagged" : ""}" data-action="flag" aria-pressed="${flagged}">${icon("flag")}${flagged ? tr("marked") : tr("mark")}</button></div>${questionMaterial(q)}<h3 class="question-prompt" id="question-prompt" tabindex="-1" lang="${contentLanguage}">${esc(q.prompt)}</h3><div class="answer-options" role="group" aria-labelledby="question-prompt">${answerOptions}</div><div class="quiz-question-footer"><button class="button button-white" data-action="previous" ${quiz.index === 0 ? "disabled" : ""}>${icon("arrow-left")}${tr("back")}</button><span>${quiz.answers[quiz.index] === null ? tr("choose-one-answer") : tr("answer-selected")}</span><button class="button button-green" data-action="${quiz.index === quiz.questions.length - 1 ? "finish" : "next"}">${quiz.index === quiz.questions.length - 1 ? tr("finish") : tr("next")}${icon(quiz.index === quiz.questions.length - 1 ? "check" : "arrow-right")}</button></div></section><aside class="quiz-navigation"><h3>${tr("your-progress")}</h3><p>${tr("answered-count", { answered: `<strong>${answered}</strong>`, total: quiz.questions.length })}</p><div class="question-numbers">${questionNumbers}</div><div class="navigator-legend"><span><i class="legend-answered"></i>${tr("has-answer")}</span><span><i class="legend-flagged"></i>${tr("marked-legend")}</span></div><div class="quiz-tip">${icon("bulb")}<p>${tr("hard-question-tip")}</p></div><button class="button button-white button-full" data-action="finish">${tr("finish-test")}</button></aside></div><div id="quiz-confirmation" class="quiz-confirmation" hidden></div></div>`,
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
      `<div class="confirm-card" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title"><span class="modal-icon">${icon(exit ? "history" : "check-circle")}</span><h3 id="confirm-title">${exit ? tr("exit-question") : tr("finish-question")}</h3><p>${exit ? tr("exit-copy") : missing ? tr("missing-copy", { missing, total: quiz.questions.length }) : tr("all-answered-copy")}</p><div class="confirmation-actions"><button class="button button-white" data-action="cancel-confirm">${tr("continue")}</button><button class="button button-green" data-action="confirm-finish">${tr("finish-save")}</button></div>${exit ? `<button class="discard-button" data-action="discard-quiz">${tr("exit-without-save")}</button>` : ""}</div>`;
    $(".confirm-card button").focus();
  }
  function finishQuiz(expired = false) {
    const quiz = state.quiz;
    if (!quiz) return;
    stopListening();
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
      `<div class="result-modal standard-modal">${closeButton()}<div class="result-emblem">${icon("trophy")}</div><div class="eyebrow">${tr("result-eyebrow")}</div><h2 id="dialog-title">${percent >= 80 ? tr("excellent") : percent >= 50 ? tr("good-start") : tr("practice-result")}</h2><p class="modal-intro">${testTitle(t)}${result.expired ? `<br /><span class="time-expired">${tr("time-expired")}</span>` : ""}</p><div class="result-score"><strong>${result.correct}<span> / ${result.total}</span></strong><span>${tr("correct-answer-count")}</span></div>${mockBreakdown(t, result)}<div class="result-bar"><span style="width:${percent}%"></span></div><div class="result-details"><div><strong>${percent}%</strong><span>${tr("accuracy")}</span></div><div><strong>${formatDuration(result.elapsed)}</strong><span>${tr("practice-time")}</span></div></div><div class="modal-info">${percent >= 80 ? tr("high-score-info") : tr("low-score-info")}</div><button class="button button-green button-full" data-action="open-review">${tr("review-answers")}${icon("arrow-right")}</button><button class="button button-plain button-full" data-retry="${t.id}">${icon("refresh")}${tr("try-again")}</button><p class="result-saved">${icon("check-circle")}${tr("result-saved")}</p></div>`,
    );
  }
  function showReview(result, errorsOnly = false) {
    stopListening();
    state.review = result;
    const t = TESTS.find((t) => t.id === result.testId);
    const questions = result.questions
      .map((q, i) => ({ question: BANK.find((b) => b.id === q.id), index: i }))
      .filter(
        (item) =>
          item.question &&
          (!errorsOnly || result.answers[item.index] !== item.question.answer),
      );
    const reviewQuestions = questions.length
      ? questions.map(({ question: q, index }) => {
          const correct = result.answers[index] === q.answer;
          const contentLanguage = q.subject === "english" ? "en" : "ru";
          const explanationLanguage = q.explanationLang || "ru";
          const options = q.options.map((option, optionIndex) =>
            `<div class="review-option ${optionIndex === q.answer ? "is-correct" : optionIndex === result.answers[index] ? "is-incorrect" : ""}"><span>${String.fromCharCode(65 + optionIndex)}</span><span lang="${contentLanguage}">${esc(option)}</span>${optionIndex === q.answer ? `<small>${tr("correct-answer")} ${icon("check")}</small>` : optionIndex === result.answers[index] ? `<small>${tr("your-answer")} ${icon("close")}</small>` : ""}</div>`,
          ).join("");
          return `<article class="review-question"><div class="review-question-top"><span>${tr("review-question", { n: index + 1 })}${t.direction === "mock" ? `<span class="quiz-section-label">${sectionLabel(q)}</span>` : ""}</span><span class="review-status ${correct ? "correct" : "incorrect"}">${icon(correct ? "check-circle" : "close")}${correct ? tr("correct") : result.answers[index] === null ? tr("without-answer") : tr("error")}</span></div>${questionMaterial(q, true)}<h3 lang="${contentLanguage}">${esc(q.prompt)}</h3><div class="review-options">${options}</div><div class="answer-explanation">${icon("bulb")}<div><strong>${tr("why")}</strong><p lang="${explanationLanguage}">${esc(q.explanation)}</p></div></div></article>`;
        }).join("")
      : `<div class="review-perfect">${icon("trophy")}<h3>${tr("perfect-title")}</h3><p>${tr("perfect-copy")}</p></div>`;
    openDialog(
      `<div class="review-layout"><header class="quiz-header"><div><span class="eyebrow">${tr("review-heading", { correct: result.correct, total: result.total })}</span><h2 id="dialog-title">${testTitle(t)}</h2></div><button class="icon-button" data-action="close-dialog" aria-label="${tr("close-review")}">${icon("close")}</button></header><div class="review-toolbar"><p>${tr("review-copy")}</p><label><input type="checkbox" id="errors-only" ${errorsOnly ? "checked" : ""} />${tr("errors-only")}</label></div><div class="review-questions">${reviewQuestions}</div><footer class="review-footer"><button class="button button-white" data-action="close-dialog">${tr("to-tests")}</button>${t.archived ? "" : `<button class="button button-green" data-retry="${t.id}">${icon("refresh")}${tr("repeat-test")}</button>`}</footer></div>`,
      true,
    );
  }
  document.addEventListener("click", (event) => {
    const languageOption = event.target.closest("[data-language]");
    if (languageOption) {
      setLanguage(languageOption.dataset.language);
      return;
    }
    const openDirection = event.target.closest("[data-open-direction]");
    if (openDirection) {
      const direction = openDirection.dataset.openDirection;
      navigate("all", direction === "mock" ? "tgo" : "all", false, direction);
      return;
    }
    const nav = event.target.closest("[data-nav]");
    if (nav) {
      const value = nav.dataset.nav;
      navigate(["saved", "history"].includes(value) ? value : "all", ["tgo", "critical", "analytical", "english"].includes(value) ? value : "all", false, nav.dataset.direction || state.direction);
      return;
    }
    const filter = event.target.closest("[data-filter]");
    if (filter) {
      if (state.view === "all") navigate("all", filter.dataset.filter, true);
      else { state.filter = filter.dataset.filter; renderCatalog(); }
      return;
    }
    const lesson = event.target.closest("[data-open-lesson]");
    if (lesson) {
      openLesson(lesson.dataset.openLesson);
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
      case "back-to-topics":
        navigate("all", "critical", false, "learning");
        break;
      case "reset-catalog":
        if (state.search) {
          state.search = "";
          $("#test-search").value = "";
          renderCatalog();
        } else navigate("all", state.direction === "mock" ? "tgo" : "all");
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
      case "play-listening":
        playListening();
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
  $("#choose-test").addEventListener("click", () => {
    $("#subjects-section").scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      block: "start",
    });
    $("#subjects-title").focus({ preventScroll: true });
  });
  $(".brand").addEventListener("click", (event) => {
    event.preventDefault();
    navigate("home");
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
    const languageChoice = event.target.closest?.(".language-choice[data-language]");
    if (languageChoice && ["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      const choices = [...document.querySelectorAll(".language-choice[data-language]")];
      const current = Math.max(0, choices.indexOf(languageChoice));
      const next = event.key === "Home"
        ? 0
        : event.key === "End"
          ? choices.length - 1
          : event.key === "ArrowRight"
            ? (current + 1) % choices.length
            : (current - 1 + choices.length) % choices.length;
      choices[next].focus({ preventScroll: true });
      setLanguage(choices[next].dataset.language);
      return;
    }
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
      state.view !== "history" && state.view !== "home" && !$(".search-field").hidden &&
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
  applyStaticTranslations();
  hydrateIcons();
  navigate("home");
})();
