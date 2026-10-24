// Авторские учебные вопросы. Не являются официальным банком КТ.
window.OQU_QUESTIONS = [
  {
    id: "tgo-01",
    subject: "tgo",
    topic: "critical",
    passage:
      "После введения онлайн-консультаций средний балл новой группы вырос. Руководитель сделал вывод, что рост вызван консультациями. При этом группы обучались в разные годы.",
    prompt: "Какое обстоятельство сильнее всего ослабляет вывод руководителя?",
    options: [
      "Консультации проходили вечером",
      "Новая группа изначально имела значительно более высокий уровень подготовки",
      "Для консультаций использовали видеосвязь",
      "Часть студентов предпочитала печатные учебники",
    ],
    answer: 1,
    explanation:
      "Если исходный уровень новой группы выше, рост результатов может объясняться этим различием, а не консультациями. Для причинного вывода нужно учитывать начальную подготовку.",
  },
  {
    id: "tgo-02",
    subject: "tgo",
    topic: "critical",
    passage:
      "Город открыл новые велодорожки в апреле. К июню число велосипедистов выросло. Автор статьи утверждает, что единственная причина роста — новые велодорожки.",
    prompt: "Какая альтернативная причина наиболее уместна для проверки?",
    options: [
      "Изменение цвета дорожных указателей",
      "Количество этажей в городской библиотеке",
      "Сезонное потепление с апреля по июнь",
      "Возраст самого старого велосипеда в городе",
    ],
    answer: 2,
    explanation:
      "Потепление само по себе может увеличить число поездок. Совпадение открытия велодорожек и роста числа велосипедистов ещё не доказывает, что других причин нет.",
  },
  {
    id: "tgo-03",
    subject: "tgo",
    topic: "critical",
    passage:
      "Исследователь опросил посетителей спортивного клуба об их отношении к ежедневным тренировкам. Большинство опрошенных поддержало такие тренировки. Исследователь распространил этот вывод на всех жителей города.",
    prompt: "В чём основная проблема такого обобщения?",
    options: [
      "Посетители клуба могут чаще поддерживать тренировки, чем жители в целом",
      "Любой опрос обязательно даёт ложный результат",
      "Ежедневные тренировки невозможно обсуждать в опросе",
      "Мнение большинства никогда нельзя учитывать",
    ],
    answer: 0,
    explanation:
      "Выборка сформирована в спортивном клубе и может быть смещена в пользу людей, интересующихся тренировками. Она не обязательно представляет всех жителей.",
  },
  {
    id: "tgo-04",
    subject: "tgo",
    topic: "critical",
    passage:
      "В школе предлагают заменить все печатные учебники электронными. Главный довод — каждый ученик уже имеет устройство, на котором удобно читать электронные учебники. Данных об устройствах учеников автор не приводит.",
    prompt: "Какое предположение лежит в основе предложения?",
    options: [
      "Печатные учебники не содержат иллюстраций",
      "Все электронные книги бесплатны",
      "Ученики никогда не читают дома",
      "У всех учеников есть подходящее и доступное для учёбы устройство",
    ],
    answer: 3,
    explanation:
      "Предложение заменить все учебники опирается на доступность подходящих устройств для каждого ученика. Без проверки этого условия часть учеников может остаться без учебных материалов.",
  },
  {
    id: "tgo-05",
    subject: "tgo",
    topic: "critical",
    passage:
      "В отчёте сказано: «В этом месяце 80% заявок были обработаны за один день». В прошлом месяце за один день обработали 70% заявок. Общее число заявок за каждый месяц не указано.",
    prompt: "Какой вывод подтверждается этими данными?",
    options: [
      "Общее число обработанных заявок выросло",
      "Доля заявок, обработанных за один день, увеличилась на 10 процентных пунктов",
      "Каждую заявку стали обрабатывать на 10% быстрее",
      "В этом месяце поступило меньше заявок",
    ],
    answer: 1,
    explanation:
      "80% − 70% = 10 процентных пунктов. Без общего числа заявок нельзя сравнить их абсолютное количество или среднее время обработки.",
  },
  {
    id: "tgo-06",
    subject: "tgo",
    topic: "critical",
    passage:
      "Компания заявляет, что новый фильтр снижает расход воды. Для проверки в одинаковых условиях сравнили 100 одинаковых кранов с фильтром и 100 без него. У кранов с фильтром средний расход оказался ниже.",
    prompt: "Что делает это сравнение убедительнее наблюдения за одним краном?",
    options: [
      "Сам факт участия компании исключает ошибки",
      "Большое число кранов доказывает отсутствие любых иных факторов",
      "Есть группа сравнения, а условия использования одинаковы",
      "Фильтр обязательно подойдёт для любого крана",
    ],
    answer: 2,
    explanation:
      "Группа без фильтра позволяет сравнить результаты, а одинаковые условия уменьшают влияние посторонних факторов. Это усиливает вывод, хотя не гарантирует применимость к любым условиям.",
  },
  {
    id: "tgo-07",
    subject: "tgo",
    topic: "critical",
    passage:
      "Некоторые студенты, посещающие дискуссионный клуб, лучше выступают публично. Автор заключает, что любой студент обязательно улучшит свои выступления после одного посещения клуба.",
    prompt: "Какая ошибка содержится в выводе?",
    options: [
      "Свойства части студентов без достаточных оснований перенесены на всех",
      "Автор использует слишком много числовых данных",
      "Автор сравнивает два одинаковых учебника",
      "Автор доказал причинную связь экспериментом",
    ],
    answer: 0,
    explanation:
      "Наблюдение о некоторых участниках не обосновывает утверждение о любом студенте и гарантированном эффекте после одного занятия.",
  },
  {
    id: "tgo-08",
    subject: "tgo",
    topic: "critical",
    passage:
      "Библиотека хочет продлить часы работы. Опрос показал, что многим студентам неудобно приходить до 18:00 из-за занятий. Руководство предлагает закрывать библиотеку в 21:00.",
    prompt: "Какой факт сильнее всего поддержит это предложение?",
    options: [
      "В библиотеке недавно покрасили стены",
      "На сайте библиотеки изменили логотип",
      "Часть книг издана десять лет назад",
      "Во время пробного вечернего открытия читальные места были почти полностью заняты",
    ],
    answer: 3,
    explanation:
      "Высокая фактическая посещаемость в вечернее время показывает спрос на дополнительные часы работы и непосредственно поддерживает предложение.",
  },
  {
    id: "tgo-09",
    subject: "tgo",
    topic: "critical",
    passage:
      "Объявление гласит: «Этот курс прошли три известных предпринимателя. Следовательно, курс гарантирует создание успешного бизнеса каждому слушателю». Других сведений о результатах курса нет.",
    prompt: "Почему приведённого основания недостаточно?",
    options: [
      "Предприниматели не могут посещать курсы",
      "Успех отдельных известных слушателей не доказывает гарантию успеха для всех",
      "Любой курс обязательно бесполезен",
      "Для обучения всегда нужен только один пример",
    ],
    answer: 1,
    explanation:
      "Три примера не показывают результаты всех слушателей и не устанавливают, что именно курс привёл к успеху. Тем более они не обосновывают гарантию для каждого.",
  },
  {
    id: "tgo-10",
    subject: "tgo",
    topic: "critical",
    passage:
      "В регионе одновременно выросли продажи мороженого и число обращений из-за перегрева. Из этих данных автор сделал вывод, что мороженое вызывает перегрев. Оба показателя выросли в жаркие недели.",
    prompt: "Какое объяснение лучше соответствует приведённым данным?",
    options: [
      "Продажа мороженого снижает температуру воздуха",
      "Обращения из-за перегрева приводят к производству мороженого",
      "Жара может одновременно увеличивать оба показателя",
      "Данные доказывают, что перегрев бывает только у покупателей мороженого",
    ],
    answer: 2,
    explanation:
      "Жара — возможный общий фактор роста продаж и обращений. Совместное изменение двух показателей не доказывает, что один вызывает другой.",
  },
  {
    id: "tgo-11",
    subject: "tgo",
    topic: "critical",
    passage:
      "В исследовании сравнили две программы изучения слов. Участники первой программы занимались 20 минут в день, второй — 60 минут. Вторая группа запомнила больше слов.",
    prompt:
      "Что нужно сделать, чтобы точнее сравнить эффективность самих программ?",
    options: [
      "Уравнять время занятий и учитывать исходный уровень участников",
      "Выбрать для групп разные языки",
      "Опросить только авторов второй программы",
      "Сравнить оформление рекламных плакатов",
    ],
    answer: 0,
    explanation:
      "При разном времени занятий результат может объясняться длительностью обучения. Сопоставимое время и исходный уровень позволяют лучше выделить эффект программы.",
  },
  {
    id: "tgo-12",
    subject: "tgo",
    topic: "critical",
    passage:
      "За год доля пассажиров, пользующихся электронными билетами, выросла с 40% до 60%. Перевозчик не сообщил общее число пассажиров за эти годы. Отчёт описывает только доли.",
    prompt: "Какое утверждение нельзя обосновать только этими данными?",
    options: [
      "Доля электронных билетов стала больше половины",
      "Доля электронных билетов выросла на 20 процентных пунктов",
      "Доля остальных способов оплаты уменьшилась",
      "Абсолютное число пользователей электронных билетов обязательно выросло",
    ],
    answer: 3,
    explanation:
      "Если общее число пассажиров сильно уменьшилось, 60% нового количества могут быть меньше 40% прежнего. Доли без общих чисел не определяют изменение абсолютного количества.",
  },
  {
    id: "tgo-13",
    subject: "tgo",
    topic: "critical",
    passage:
      "Статья советует оценивать надёжность сообщения по источнику и проверяемым данным. Она также рекомендует сравнивать сообщение с независимыми публикациями. Число лайков автор не считает проверкой достоверности.",
    prompt: "Какая главная мысль выражена в тексте?",
    options: [
      "Популярные сообщения всегда ошибочны",
      "Достоверность следует оценивать по доказательствам и независимой проверке",
      "Достаточно прочитать только заголовок",
      "Любой неизвестный источник обязательно прав",
    ],
    answer: 1,
    explanation:
      "Все рекомендации направлены на проверку источника и свидетельств. Текст не утверждает, что популярность сама по себе доказывает истинность или ложность.",
  },
  {
    id: "tgo-14",
    subject: "tgo",
    topic: "critical",
    passage:
      "Предлагается сократить расход бумаги, отправляя уведомления по электронной почте. Однако часть получателей не пользуется электронной почтой. Важно, чтобы уведомление получил каждый адресат.",
    prompt: "Какое решение лучше всего учитывает обе задачи?",
    options: [
      "Полностью отказаться от всех уведомлений",
      "Отправлять каждому по две бумажные копии",
      "Использовать электронные уведомления, сохранив бумажные для тех, кому они необходимы",
      "Отправлять уведомления только сотрудникам с электронной почтой",
    ],
    answer: 2,
    explanation:
      "Смешанный подход снижает расход бумаги и сохраняет доступ к уведомлениям для людей без электронной почты. Остальные варианты не выполняют одну или обе задачи.",
  },
  {
    id: "tgo-15",
    subject: "tgo",
    topic: "critical",
    passage:
      "В отчёте утверждается, что новая система сократила число ошибок на 50%. До внедрения было 20 ошибок на 1000 операций, после — 10 на 1000. Число операций учитывалось одинаковым способом.",
    prompt: "Какое утверждение точно соответствует данным?",
    options: [
      "Частота ошибок уменьшилась с 2% до 1%",
      "После внедрения ошибок больше не было",
      "Частота ошибок снизилась на 50 процентных пунктов",
      "Число операций обязательно удвоилось",
    ],
    answer: 0,
    explanation:
      "20 из 1000 — это 2%, а 10 из 1000 — 1%. Частота уменьшилась вдвое, то есть на 50% относительно прежней, или на 1 процентный пункт.",
  },
  {
    id: "tgo-16",
    subject: "tgo",
    topic: "math",
    prompt:
      "Товар стоил 20 000 ₸. Цену сначала увеличили на 20%, а затем снизили на 20% от новой цены. Сколько стоит товар теперь?",
    options: ["20 000 ₸", "19 200 ₸", "18 000 ₸", "20 800 ₸"],
    answer: 1,
    explanation:
      "После повышения: 20 000 × 1,2 = 24 000 ₸. После снижения: 24 000 × 0,8 = 19 200 ₸. Проценты на двух этапах считаются от разных сумм.",
  },
  {
    id: "tgo-17",
    subject: "tgo",
    topic: "math",
    prompt:
      "Одна труба наполняет пустой резервуар за 6 часов, другая — за 12 часов. За сколько часов они наполнят его вместе при постоянной скорости подачи воды?",
    options: ["3 часа", "6 часов", "4 часа", "9 часов"],
    answer: 2,
    explanation:
      "За час трубы вместе заполняют 1/6 + 1/12 = 1/4 резервуара. Значит, весь резервуар будет заполнен за 4 часа.",
  },
  {
    id: "tgo-18",
    subject: "tgo",
    topic: "math",
    prompt:
      "В мешке 3 красных и 2 синих шара. Случайно достают два шара без возвращения. Какова вероятность того, что оба шара красные?",
    options: ["3/10", "2/5", "9/25", "1/5"],
    answer: 0,
    explanation:
      "Вероятность первого красного шара равна 3/5, второго после первого красного — 2/4. Произведение: 3/5 × 2/4 = 3/10.",
  },
  {
    id: "tgo-19",
    subject: "tgo",
    topic: "math",
    prompt:
      "В группе 30 студентов. 60% из них изучают немецкий язык. Сколько студентов не изучают немецкий?",
    options: ["18", "10", "15", "12"],
    answer: 3,
    explanation:
      "Немецкий не изучают 100% − 60% = 40% группы. 30 × 0,4 = 12 студентов.",
  },
  {
    id: "tgo-20",
    subject: "tgo",
    topic: "math",
    prompt:
      "Среднее арифметическое пяти чисел равно 18. Одно из чисел, равное 10, исключили. Чему равно среднее арифметическое оставшихся четырёх чисел?",
    options: ["18", "20", "22", "16"],
    answer: 1,
    explanation:
      "Сумма пяти чисел равна 5 × 18 = 90. После исключения 10 остаётся сумма 80. Новое среднее: 80 / 4 = 20.",
  },
  {
    id: "tgo-21",
    subject: "tgo",
    topic: "math",
    prompt:
      "В последовательности 3, 8, 15, 24, 35 разности соседних чисел — последовательные нечётные числа 5, 7, 9, 11. Какое число следующее?",
    options: ["46", "47", "48", "50"],
    answer: 2,
    explanation:
      "Следующая разность равна 13. Поэтому следующее число: 35 + 13 = 48.",
  },
  {
    id: "tgo-22",
    subject: "tgo",
    topic: "math",
    prompt:
      "Автомобиль проехал из города A в город B со скоростью 60 км/ч, а обратно по тому же маршруту — со скоростью 40 км/ч. Остановок не было. Какова средняя скорость за весь путь?",
    options: ["48 км/ч", "50 км/ч", "45 км/ч", "52 км/ч"],
    answer: 0,
    explanation:
      "Для равных расстояний средняя скорость равна 2v₁v₂ / (v₁ + v₂). Получаем 2 × 60 × 40 / 100 = 48 км/ч.",
  },
  {
    id: "tgo-23",
    subject: "tgo",
    topic: "math",
    prompt:
      "Число красных и синих тетрадей относится как 3 : 5. Всего тетрадей 64. Сколько красных тетрадей?",
    options: ["40", "32", "16", "24"],
    answer: 3,
    explanation:
      "Всего 3 + 5 = 8 долей. Одна доля — 64 / 8 = 8 тетрадей. Красных тетрадей 3 × 8 = 24.",
  },
  {
    id: "tgo-24",
    subject: "tgo",
    topic: "math",
    prompt:
      "Какое наименьшее целое число x удовлетворяет неравенству 3x − 7 > 11?",
    options: ["6", "7", "5", "8"],
    answer: 1,
    explanation:
      "3x > 18, следовательно, x > 6. Наименьшее целое число, строго большее 6, — 7.",
  },
  {
    id: "tgo-25",
    subject: "tgo",
    topic: "math",
    prompt:
      "Периметр прямоугольника равен 34 см, а длина одной стороны — 10 см. Чему равна его площадь?",
    options: ["100 см²", "60 см²", "70 см²", "140 см²"],
    answer: 2,
    explanation:
      "Сумма соседних сторон равна 34 / 2 = 17 см. Вторая сторона равна 17 − 10 = 7 см. Площадь: 10 × 7 = 70 см².",
  },
  {
    id: "tgo-26",
    subject: "tgo",
    topic: "math",
    prompt:
      "На вклад 100 000 ₸ начисляют 10% годовых с ежегодной капитализацией. Какой будет сумма через два года, если деньги не снимать и не пополнять вклад?",
    options: ["121 000 ₸", "120 000 ₸", "110 000 ₸", "122 000 ₸"],
    answer: 0,
    explanation:
      "В конце первого года: 100 000 × 1,1 = 110 000 ₸. В конце второго: 110 000 × 1,1 = 121 000 ₸.",
  },
  {
    id: "tgo-27",
    subject: "tgo",
    topic: "math",
    prompt:
      "Из бюджета потратили 30% на жильё. Затем 20% от оставшейся суммы потратили на питание. Какой процент первоначального бюджета остался?",
    options: ["50%", "44%", "60%", "56%"],
    answer: 3,
    explanation:
      "После оплаты жилья осталось 70% бюджета. После расходов на питание осталось 80% этой суммы: 0,7 × 0,8 = 0,56, то есть 56% первоначального бюджета.",
  },
  {
    id: "tgo-28",
    subject: "tgo",
    topic: "math",
    prompt:
      "Купили 14 билетов: взрослые по 5 000 ₸ и детские по 3 000 ₸. Всего заплатили 58 000 ₸. Сколько взрослых билетов купили?",
    options: ["6", "8", "7", "9"],
    answer: 1,
    explanation:
      "Если бы все билеты были детскими, сумма составила бы 42 000 ₸. Разница 16 000 ₸ приходится на доплату 2 000 ₸ за каждый взрослый билет. 16 000 / 2 000 = 8.",
  },
  {
    id: "tgo-29",
    subject: "tgo",
    topic: "math",
    prompt:
      "Радиус основания цилиндра равен 3 см, высота — 5 см. Чему равен объём цилиндра? Используйте формулу V = πr²h.",
    options: ["15π см³", "30π см³", "45π см³", "75π см³"],
    answer: 2,
    explanation: "V = π × 3² × 5 = π × 9 × 5 = 45π см³.",
  },
  {
    id: "tgo-30",
    subject: "tgo",
    topic: "math",
    prompt:
      "После скидки 15% книга стоит 3 400 ₸. Сколько она стоила до скидки?",
    options: ["4 000 ₸", "3 910 ₸", "3 800 ₸", "4 200 ₸"],
    answer: 0,
    explanation:
      "Цена после скидки составляет 85% исходной. Исходная цена: 3 400 / 0,85 = 4 000 ₸.",
  },
  {
    id: "tgo-31",
    subject: "tgo",
    topic: "logic",
    prompt:
      "Все корректоры являются редакторами. Ни один редактор не является стажёром. Какой вывод обязательно верен?",
    options: [
      "Все стажёры — корректоры",
      "Некоторые корректоры — стажёры",
      "Все редакторы — корректоры",
      "Ни один корректор не является стажёром",
    ],
    answer: 3,
    explanation:
      "Корректоры входят в множество редакторов, а редакторы не пересекаются со стажёрами. Поэтому корректоры также не могут быть стажёрами.",
  },
  {
    id: "tgo-32",
    subject: "tgo",
    topic: "logic",
    prompt:
      "Если отчёт утверждён, на нём обязательно есть подпись руководителя. На данном отчёте подписи руководителя нет. Что следует из этих условий?",
    options: [
      "Отчёт утверждён",
      "Отчёт не утверждён",
      "Руководитель не читал отчёт",
      "Отчёт обязательно написан сегодня",
    ],
    answer: 1,
    explanation:
      "Утверждение отчёта требует подписи. Отсутствие необходимого условия означает, что отчёт не утверждён. О чтении или дате отчёта условий нет.",
  },
  {
    id: "tgo-33",
    subject: "tgo",
    topic: "logic",
    prompt:
      "В очереди стоят только Айша, Бек и Дана. Айша стоит раньше Бека, а Дана — позже Бека. Кто стоит вторым?",
    options: ["Айша", "Дана", "Бек", "Определить невозможно"],
    answer: 2,
    explanation:
      "Оба условия дают единственный порядок: Айша, Бек, Дана. Вторым стоит Бек.",
  },
  {
    id: "tgo-34",
    subject: "tgo",
    topic: "logic",
    prompt:
      "Ключ лежит в одной из трёх коробок A, B и C. На A написано «Ключ в A», на B — «Ключ не в B», на C — «Ключ не в A». Ровно одна надпись истинна. Где ключ?",
    options: ["В B", "В A", "В C", "Невозможно определить"],
    answer: 0,
    explanation:
      "Надписи на A и C противоположны, поэтому ровно одна из них всегда истинна. Чтобы всего была одна истина, надпись «Ключ не в B» должна быть ложной. Значит, ключ в B.",
  },
  {
    id: "tgo-35",
    subject: "tgo",
    topic: "logic",
    prompt:
      "Операция ★ определена правилом a ★ b = 2a + b. Чему равно (3 ★ 2) ★ 1?",
    options: ["9", "15", "11", "17"],
    answer: 3,
    explanation: "Сначала 3 ★ 2 = 2 × 3 + 2 = 8. Затем 8 ★ 1 = 2 × 8 + 1 = 17.",
  },
  {
    id: "tgo-36",
    subject: "tgo",
    topic: "logic",
    prompt: "Сегодня понедельник. Какой день недели будет через 100 дней?",
    options: ["Вторник", "Среда", "Четверг", "Воскресенье"],
    answer: 1,
    explanation:
      "100 = 14 × 7 + 2. Через 98 дней снова будет понедельник, ещё через 2 дня — среда.",
  },
  {
    id: "tgo-37",
    subject: "tgo",
    topic: "logic",
    prompt:
      "Четыре доклада A, B, C и D идут по одному. A должен быть раньше C, B — позже C, D — раньше A. Какой порядок удовлетворяет всем условиям?",
    options: ["A, D, C, B", "D, C, A, B", "D, A, C, B", "B, D, A, C"],
    answer: 2,
    explanation:
      "Из условий складывается цепочка D раньше A, A раньше C, C раньше B. Поэтому порядок: D, A, C, B.",
  },
  {
    id: "tgo-38",
    subject: "tgo",
    topic: "logic",
    prompt:
      "Три человека — Алия, Борис и Вера — выбрали по одному разному напитку: чай, кофе и сок. Алия не пьёт кофе и не выбирала сок. Борис выбрал не кофе. Что выбрала Вера?",
    options: ["Кофе", "Чай", "Сок", "Невозможно определить"],
    answer: 0,
    explanation:
      "Алия выбрала чай, поскольку исключены кофе и сок. Борису остаётся сок, так как он не выбрал кофе. Значит, Вера выбрала кофе.",
  },
  {
    id: "tgo-39",
    subject: "tgo",
    topic: "logic",
    prompt:
      "В ящике много носков трёх цветов. Какое минимальное число носков нужно достать вслепую, чтобы обязательно получить хотя бы два носка одного цвета?",
    options: ["2", "3", "6", "4"],
    answer: 3,
    explanation:
      "Первые три носка могут оказаться трёх разных цветов. Четвёртый обязательно совпадёт по цвету хотя бы с одним из них.",
  },
  {
    id: "tgo-40",
    subject: "tgo",
    topic: "logic",
    prompt:
      "Буквам A–Z соответствуют номера 1–26. В ряду A, C, F, J, O номера увеличиваются на 2, 3, 4, 5. Если правило продолжается, какая буква следующая?",
    options: ["T", "U", "V", "S"],
    answer: 1,
    explanation:
      "Номер O равен 15. Следующий шаг равен 6: 15 + 6 = 21. Двадцать первая буква английского алфавита — U.",
  },
  {
    id: "tgo-41",
    subject: "tgo",
    topic: "logic",
    prompt:
      "В лабораторию допускают только людей с действующим пропуском. Ерлан вошёл в лабораторию с соблюдением этого правила. Какой вывод обязателен?",
    options: [
      "Ерлан работает в лаборатории",
      "Ерлан руководит лабораторией",
      "У Ерлана есть действующий пропуск",
      "Все владельцы пропусков уже вошли в лабораторию",
    ],
    answer: 2,
    explanation:
      "Действующий пропуск — необходимое условие допуска. Вход по правилу означает наличие пропуска, но не определяет должность Ерлана.",
  },
  {
    id: "tgo-42",
    subject: "tgo",
    topic: "logic",
    prompt:
      "Из 40 студентов 25 посещают английский клуб, 20 — математический, а 10 — оба клуба. Сколько студентов не посещают ни один из двух клубов?",
    options: ["5", "10", "15", "0"],
    answer: 0,
    explanation:
      "Хотя бы один клуб посещают 25 + 20 − 10 = 35 студентов. Не посещают ни один: 40 − 35 = 5. Участников обоих клубов нужно учитывать один раз.",
  },
  {
    id: "tgo-43",
    subject: "tgo",
    topic: "logic",
    prompt:
      "На столе четыре карточки: A, K, 4, 7. С одной стороны каждой карточки буква, с другой — число. Проверяют правило: «Если с одной стороны гласная, то с другой — чётное число». Какие карточки обязательно перевернуть, чтобы проверить правило?",
    options: ["Только A и 4", "Только K и 7", "Все четыре", "A и 7"],
    answer: 3,
    explanation:
      "За A должно быть чётное число. За 7 не должно быть гласной, иначе правило нарушено. За 4 может быть любая буква, а правило не ограничивает обратную сторону K.",
  },
  {
    id: "tgo-44",
    subject: "tgo",
    topic: "logic",
    prompt:
      "Два человека, А и Б, делают заявления. А говорит: «Мы оба лжецы». Каждый из них либо всегда говорит правду, либо всегда лжёт. Кем являются А и Б?",
    options: [
      "Оба говорят правду",
      "А — лжец, Б говорит правду",
      "А говорит правду, Б — лжец",
      "Оба лжецы",
    ],
    answer: 1,
    explanation:
      "А не может говорить правду, иначе он правдиво назвал бы себя лжецом. Значит, А лжёт, и фраза «мы оба лжецы» ложна. Поскольку А уже лжец, Б должен говорить правду.",
  },
  {
    id: "tgo-45",
    subject: "tgo",
    topic: "logic",
    prompt:
      "Четыре разные книги A, B, C и D расставляют в ряд. Сколькими способами это можно сделать, если A должна стоять раньше B?",
    options: ["6", "24", "12", "8"],
    answer: 2,
    explanation:
      "Всего перестановок 4! = 24. В половине A стоит раньше B, а в другой половине — B раньше A. Поэтому подходящих способов 24 / 2 = 12.",
  },
  {
    id: "eng-01",
    subject: "english",
    topic: "grammar",
    prompt: "She _____ at this university since 2021.",
    options: ["works", "has worked", "worked", "is working"],
    answer: 1,
    explanation:
      "Since указывает на начало периода, который продолжается до настоящего момента. Здесь нужен Present Perfect: has worked.",
  },
  {
    id: "eng-02",
    subject: "english",
    topic: "grammar",
    prompt: "If I had more free time, I _____ a new language.",
    options: ["learn", "will learn", "would learn", "had learned"],
    answer: 2,
    explanation:
      "Это условное предложение второго типа: If + Past Simple, would + начальная форма глагола. Оно описывает воображаемую ситуацию в настоящем.",
  },
  {
    id: "eng-03",
    subject: "english",
    topic: "grammar",
    prompt: "The research report _____ by the team yesterday.",
    options: ["was completed", "has completed", "completed", "is completing"],
    answer: 0,
    explanation:
      "Отчёт не выполняет действие сам, поэтому нужен пассивный залог. Yesterday требует Past Simple Passive: was completed.",
  },
  {
    id: "eng-04",
    subject: "english",
    topic: "grammar",
    prompt:
      "You _____ bring your own laptop; computers are provided for everyone.",
    options: ["must not", "could not", "should not have", "do not have to"],
    answer: 3,
    explanation:
      "Do not have to означает отсутствие необходимости. Must not выражало бы запрет, которого в предложении нет.",
  },
  {
    id: "eng-05",
    subject: "english",
    topic: "grammar",
    prompt: "By the time we arrived, the lecture _____.",
    options: [
      "already begins",
      "had already begun",
      "has already begun",
      "is already beginning",
    ],
    answer: 1,
    explanation:
      "Лекция началась раньше другого события в прошлом. Для более раннего действия используется Past Perfect: had already begun.",
  },
  {
    id: "eng-06",
    subject: "english",
    topic: "grammar",
    prompt: "The student _____ thesis won the award is from Almaty.",
    options: ["who", "which", "whose", "whom"],
    answer: 2,
    explanation:
      "Whose выражает принадлежность: студент, чья диссертация получила награду. После whose следует существительное thesis.",
  },
  {
    id: "eng-07",
    subject: "english",
    topic: "grammar",
    prompt:
      "There is very _____ information about the new programme on the website.",
    options: ["few", "many", "a few", "little"],
    answer: 3,
    explanation:
      "Information — неисчисляемое существительное. Little употребляется с неисчисляемыми существительными и означает «мало».",
  },
  {
    id: "eng-08",
    subject: "english",
    topic: "grammar",
    prompt:
      "Use standard tense backshift to report the question: She asked, 'Where do you live?' → She asked me where I _____.",
    options: ["lived", "did I live", "am live", "do lives"],
    answer: 0,
    explanation:
      "При стандартном согласовании времён после asked форма Present Simple меняется на Past Simple. В косвенном вопросе сохраняется прямой порядок слов: where I lived.",
  },
  {
    id: "eng-09",
    subject: "english",
    topic: "grammar",
    prompt: "This exercise is _____ than the previous one.",
    options: [
      "difficult",
      "the most difficult",
      "more difficult",
      "most difficult",
    ],
    answer: 2,
    explanation:
      "Than указывает на сравнение двух объектов. С многосложным difficult сравнительная степень образуется с more.",
  },
  {
    id: "eng-10",
    subject: "english",
    topic: "grammar",
    prompt: "I look forward to _____ from you.",
    options: ["hear", "hearing", "heard", "have heard"],
    answer: 1,
    explanation:
      "В выражении look forward to слово to — предлог, поэтому после него используется герундий: hearing.",
  },
  {
    id: "eng-11",
    subject: "english",
    topic: "grammar",
    prompt: "Choose the correct indefinite article: He is _____ engineer.",
    options: ["a", "the", "no article", "an"],
    answer: 3,
    explanation:
      "Engineer начинается с гласного звука. Перед таким словом используется неопределённый артикль an.",
  },
  {
    id: "eng-12",
    subject: "english",
    topic: "grammar",
    prompt: "When I called, they _____ the experiment.",
    options: ["were conducting", "conduct", "have conducted", "will conduct"],
    answer: 0,
    explanation:
      "Past Continuous описывает действие, которое происходило в определённый момент прошлого: в момент звонка они проводили эксперимент.",
  },
  {
    id: "eng-13",
    subject: "english",
    topic: "grammar",
    prompt:
      "If you heat water to 100°C at standard atmospheric pressure, it _____.",
    options: ["would boil", "had boiled", "boils", "boiled"],
    answer: 2,
    explanation:
      "Общая закономерность выражается нулевым типом условного предложения: If + Present Simple, Present Simple.",
  },
  {
    id: "eng-14",
    subject: "english",
    topic: "grammar",
    prompt: "She has already submitted her application, _____?",
    options: ["has she", "hasn't she", "didn't she", "doesn't she"],
    answer: 1,
    explanation:
      "В разделительном вопросе после утвердительной части используется отрицательная форма того же вспомогательного глагола: has — hasn't she.",
  },
  {
    id: "eng-15",
    subject: "english",
    topic: "grammar",
    prompt: "Despite _____ tired, he finished the assignment.",
    options: ["he was", "be", "was", "being"],
    answer: 3,
    explanation:
      "После предлога despite используется существительное или герундий. Правильная форма — despite being tired.",
  },
  {
    id: "eng-16",
    subject: "english",
    topic: "vocabulary",
    prompt:
      "Choose the word that best completes the sentence: Please _____ the completed application form by Friday.",
    options: ["borrow", "submit", "repair", "invite"],
    answer: 1,
    explanation:
      "Submit a form означает «подать форму или заявление». Остальные глаголы не подходят по смыслу.",
  },
  {
    id: "eng-17",
    subject: "english",
    topic: "vocabulary",
    prompt: "A person who applies for a job is called an _____.",
    options: ["employer", "audience", "applicant", "author"],
    answer: 2,
    explanation:
      "Applicant — соискатель или кандидат, подающий заявление. Employer — работодатель, audience — аудитория, author — автор.",
  },
  {
    id: "eng-18",
    subject: "english",
    topic: "vocabulary",
    prompt: "Choose the opposite of 'temporary'.",
    options: ["permanent", "frequent", "recent", "limited"],
    answer: 0,
    explanation:
      "Temporary означает «временный», а permanent — «постоянный». Эти слова противоположны по значению.",
  },
  {
    id: "eng-19",
    subject: "english",
    topic: "vocabulary",
    prompt: "The word 'reliable' describes someone who _____.",
    options: [
      "travels very often",
      "speaks very loudly",
      "avoids all responsibility",
      "can be trusted",
    ],
    answer: 3,
    explanation:
      "Reliable означает «надёжный», то есть тот, кому можно доверять.",
  },
  {
    id: "eng-20",
    subject: "english",
    topic: "vocabulary",
    prompt: "The scientists carried _____ an experiment to test the theory.",
    options: ["away", "out", "off", "up"],
    answer: 1,
    explanation:
      "Carry out an experiment — устойчивое сочетание со значением «проводить эксперимент».",
  },
  {
    id: "eng-21",
    subject: "english",
    topic: "vocabulary",
    prompt:
      "The _____ for submitting the essay is 5 p.m. on Monday; late work will not be accepted.",
    options: ["headline", "lifetime", "deadline", "outline"],
    answer: 2,
    explanation:
      "Deadline — крайний срок выполнения или сдачи работы. Уточнение о непринятии поздних работ подтверждает это значение.",
  },
  {
    id: "eng-22",
    subject: "english",
    topic: "vocabulary",
    prompt: "Which word means 'to become larger in number or amount'?",
    options: ["reduce", "remove", "divide", "increase"],
    answer: 3,
    explanation:
      "Increase означает «увеличиваться». Reduce — уменьшать, remove — удалять, divide — делить.",
  },
  {
    id: "eng-23",
    subject: "english",
    topic: "vocabulary",
    prompt:
      "Students must _____ permission before using the laboratory after hours.",
    options: ["obtain", "spend", "attend", "invent"],
    answer: 0,
    explanation:
      "Obtain permission означает «получить разрешение». Остальные глаголы с permission здесь не сочетаются.",
  },
  {
    id: "eng-24",
    subject: "english",
    topic: "vocabulary",
    prompt: "In academic writing, 'evidence' means _____.",
    options: [
      "a personal wish",
      "a future appointment",
      "facts or information supporting a claim",
      "a list of classroom rules",
    ],
    answer: 2,
    explanation:
      "Evidence — факты, данные или сведения, которые подтверждают утверждение.",
  },
  {
    id: "eng-25",
    subject: "english",
    topic: "vocabulary",
    prompt:
      "Choose the word that completes the sentence: The new method is more _____ because it produces the same result using less time and energy.",
    options: ["expensive", "efficient", "ancient", "uncertain"],
    answer: 1,
    explanation:
      "Efficient описывает эффективное использование ресурсов: тот же результат достигается с меньшими затратами времени и энергии.",
  },
  {
    id: "eng-26",
    subject: "english",
    topic: "vocabulary",
    prompt:
      "I cannot _____ to buy a new computer this month because I do not have enough money.",
    options: ["agree", "avoid", "allow", "afford"],
    answer: 3,
    explanation:
      "Can afford to do something означает «иметь финансовую возможность что-либо сделать».",
  },
  {
    id: "eng-27",
    subject: "english",
    topic: "vocabulary",
    prompt:
      "Which noun refers to money awarded to a student to help pay for education?",
    options: ["scholarship", "salary", "receipt", "profit"],
    answer: 0,
    explanation:
      "Scholarship — стипендия или образовательный грант. Salary — зарплата, receipt — квитанция, profit — прибыль.",
  },
  {
    id: "eng-28",
    subject: "english",
    topic: "vocabulary",
    prompt: "The train was delayed _____ heavy snow.",
    options: ["instead of", "except for", "due to", "in spite of"],
    answer: 2,
    explanation:
      "Due to означает «из-за» и вводит причину задержки. In spite of выражало бы противоположное отношение — «несмотря на».",
  },
  {
    id: "eng-29",
    subject: "english",
    topic: "vocabulary",
    prompt: "Which phrase means 'to stop trying to do something'?",
    options: ["look up", "give up", "set up", "turn up"],
    answer: 1,
    explanation:
      "Give up означает «сдаться, прекратить попытки». Look up — искать информацию, set up — организовывать, turn up — появляться.",
  },
  {
    id: "eng-30",
    subject: "english",
    topic: "vocabulary",
    prompt:
      "The two studies reached the same _____. Both found that regular exercise improved sleep quality.",
    options: ["equipment", "permission", "journey", "conclusion"],
    answer: 3,
    explanation:
      "Reach a conclusion — «прийти к выводу». Следующее предложение раскрывает общий вывод двух исследований.",
  },
  {
    id: "eng-31",
    subject: "english",
    topic: "reading",
    passage:
      "The university library used to close at 6 p.m. In response to student requests, it now stays open until 9 p.m. on weekdays. Its weekend opening hours have not changed.",
    prompt: "What changed at the library?",
    options: [
      "It now opens earlier every day.",
      "It stays open later on weekdays.",
      "It is closed at weekends.",
      "It no longer accepts student requests.",
    ],
    answer: 1,
    explanation:
      "В тексте указано, что в будние дни библиотека теперь закрывается в 21:00 вместо 18:00. Часы работы по выходным не изменились.",
  },
  {
    id: "eng-32",
    subject: "english",
    topic: "reading",
    passage:
      "A research team studied two groups of students for six weeks. One group took a short walk before each study session; the other did not. The walking group reported feeling more alert, but both groups achieved similar test scores.",
    prompt: "Which statement is supported by the passage?",
    options: [
      "Walking guaranteed higher test scores.",
      "The study lasted six months.",
      "Walking students felt more alert without scoring higher.",
      "Neither group took any tests.",
    ],
    answer: 2,
    explanation:
      "Группа, которая гуляла перед занятиями, сообщала о большей бодрости, однако результаты тестов у обеих групп были примерно одинаковыми.",
  },
  {
    id: "eng-33",
    subject: "english",
    topic: "reading",
    passage:
      "A city introduced reusable cups at its public events. Visitors pay a small deposit when they receive a cup and get the deposit back when they return it. Organisers hope the scheme will reduce the amount of disposable waste.",
    prompt: "Why do visitors pay a deposit?",
    options: [
      "To encourage them to return the cups.",
      "To purchase tickets for future events.",
      "To support the production of disposable cups.",
      "To pay for extra drinks.",
    ],
    answer: 0,
    explanation:
      "Залог возвращается при сдаче стакана, поэтому такая система поощряет возврат многоразовой посуды и помогает сокращать отходы.",
  },
  {
    id: "eng-34",
    subject: "english",
    topic: "reading",
    passage:
      "Sara planned to study abroad immediately after graduation. However, she accepted a one-year research position in her home country. She still intends to apply to foreign universities when the position ends.",
    prompt: "What can be concluded about Sara's plans?",
    options: [
      "She has abandoned studying abroad permanently.",
      "She has already completed a foreign degree.",
      "She will leave before her research position begins.",
      "She has postponed studying abroad.",
    ],
    answer: 3,
    explanation:
      "Сара по-прежнему собирается поступать в зарубежные университеты, но сделает это после годовой исследовательской работы. Значит, она отложила первоначальный план.",
  },
  {
    id: "eng-35",
    subject: "english",
    topic: "reading",
    passage:
      "Online courses allow learners to choose when and where they study. This flexibility is useful for people with full-time jobs. However, successful learners still need to plan their time and meet assignment deadlines.",
    prompt: "What is the main idea of the passage?",
    options: [
      "Online courses have no deadlines.",
      "Online learning is flexible but requires time management.",
      "Only unemployed people can study online.",
      "Online learning always takes less time than classroom learning.",
    ],
    answer: 1,
    explanation:
      "Текст соединяет два положения: онлайн-обучение даёт гибкость, но для успеха необходимо планировать время и соблюдать сроки.",
  },
  {
    id: "eng-36",
    subject: "english",
    topic: "reading",
    passage:
      "The museum will close its main building in November for repairs. During this period, selected exhibits will be displayed at the city cultural centre. The museum's online collection will remain available as usual.",
    prompt: "How can people view some physical exhibits during the repairs?",
    options: [
      "By entering the museum through a side door.",
      "By visiting the museum in November before it opens.",
      "By going to the city cultural centre.",
      "By requesting that the repairs be cancelled.",
    ],
    answer: 2,
    explanation:
      "В тексте прямо сказано, что часть экспонатов на время ремонта будет представлена в городском культурном центре.",
  },
  {
    id: "eng-37",
    subject: "english",
    topic: "reading",
    passage:
      "A company offered its staff the option of working from home two days a week. After three months, employees reported spending less time commuting. The company did not collect data on changes in productivity.",
    prompt: "Which question cannot be answered from the passage?",
    options: [
      "How many days a week could employees work from home?",
      "How long did the initial period last?",
      "Did employees report less commuting time?",
      "Did working from home improve productivity?",
    ],
    answer: 3,
    explanation:
      "Компания не собирала данные об изменении производительности. Поэтому текст не позволяет определить, улучшилась ли она при работе из дома.",
  },
  {
    id: "eng-38",
    subject: "english",
    topic: "reading",
    passage:
      "At first, Timur tried to memorise every detail in his textbook. He later began testing himself with short questions after each chapter. This helped him identify the topics he needed to review.",
    prompt: "What benefit did Timur gain from testing himself?",
    options: [
      "He discovered which topics required more study.",
      "He no longer needed to read the textbook.",
      "He memorised every detail immediately.",
      "He was able to skip all difficult chapters.",
    ],
    answer: 0,
    explanation:
      "Последнее предложение прямо указывает на результат: самопроверка помогла Тимуру определить темы, которые нужно повторить.",
  },
  {
    id: "eng-39",
    subject: "english",
    topic: "reading",
    passage:
      "The local council planted more trees along busy streets last year. The trees provide shade and may help improve air quality over time. Council officials said that planting trees is only one part of a wider transport and environmental plan.",
    prompt: "How do council officials describe the tree-planting project?",
    options: [
      "As a replacement for every transport policy.",
      "As a completed solution to all pollution problems.",
      "As one element of a broader plan.",
      "As an activity unrelated to the environment.",
    ],
    answer: 2,
    explanation:
      "Чиновники назвали посадку деревьев лишь одной частью более широкого транспортного и экологического плана.",
  },
  {
    id: "eng-40",
    subject: "english",
    topic: "reading",
    passage:
      "Applicants for the summer school must submit a short essay and a recommendation letter. Knowledge of a second language is helpful but not required. Applications received after 30 April will not be considered.",
    prompt: "Which requirement is compulsory?",
    options: [
      "Speaking two foreign languages.",
      "Submitting a recommendation letter.",
      "Applying after 30 April.",
      "Having attended a previous summer school.",
    ],
    answer: 1,
    explanation:
      "В тексте используется must submit для эссе и рекомендательного письма. Знание второго языка полезно, но не обязательно.",
  },
  {
    id: "eng-41",
    subject: "english",
    topic: "reading",
    passage:
      "Researchers found that participants remembered more words when they reviewed them on several different days. Participants who spent the same total study time in a single session remembered fewer words one week later. Both groups studied the same list.",
    prompt: "What does the study suggest?",
    options: [
      "Longer word lists are always easier to remember.",
      "A single session guarantees permanent memory.",
      "The groups spent different amounts of total study time.",
      "Spreading review across several days may improve retention.",
    ],
    answer: 3,
    explanation:
      "При одинаковом общем времени занятий распределённое повторение дало лучший результат через неделю. Это поддерживает вывод о пользе повторения в разные дни.",
  },
  {
    id: "eng-42",
    subject: "english",
    topic: "reading",
    passage:
      "The new bus route connects the railway station directly to the university campus. Previously, passengers had to change buses in the city centre. The ticket price has remained the same.",
    prompt:
      "What is the main advantage of the new route mentioned in the passage?",
    options: [
      "Passengers no longer need to change buses.",
      "Tickets are now free for everyone.",
      "The university has moved closer to the station.",
      "All buses now travel through the city centre.",
    ],
    answer: 0,
    explanation:
      "Новый маршрут связывает вокзал и кампус напрямую, поэтому пересадка в центре города больше не нужна. Стоимость проезда не изменилась.",
  },
  {
    id: "eng-43",
    subject: "english",
    topic: "reading",
    passage:
      "Dana joined a student discussion group to practise speaking English. At first, she avoided speaking because she was afraid of making mistakes. After several meetings, she became more willing to share her ideas, although she still made occasional errors.",
    prompt: "What changed for Dana?",
    options: [
      "She stopped attending the group.",
      "She never made another language error.",
      "She became more confident about speaking.",
      "She decided to speak only in her first language.",
    ],
    answer: 2,
    explanation:
      "Дана стала охотнее высказывать свои мысли, хотя отдельные ошибки остались. Это свидетельствует о росте уверенности в устной речи.",
  },
  {
    id: "eng-44",
    subject: "english",
    topic: "reading",
    passage:
      "A university replaced printed event posters with digital noticeboards in three buildings. Printing costs fell, but the university had to pay for the screens and their maintenance. Officials plan to evaluate the total costs after one year.",
    prompt:
      "Why is it too early to conclude that the change saved money overall?",
    options: [
      "The university printed more posters than before.",
      "Screen and maintenance costs also need to be considered.",
      "The noticeboards are not used in any buildings.",
      "Officials have already completed the annual evaluation.",
    ],
    answer: 1,
    explanation:
      "Хотя затраты на печать снизились, появились расходы на экраны и обслуживание. Без их учёта нельзя сделать вывод об общей экономии.",
  },
  {
    id: "eng-45",
    subject: "english",
    topic: "reading",
    passage:
      "The hiking club cancelled Saturday's trip after a severe weather warning. Members were offered a full refund or a place on next month's trip. The club said that safety was its main reason for the decision.",
    prompt: "What can members choose after the cancellation?",
    options: [
      "A trip on Saturday despite the warning.",
      "A refund only if they pay an extra fee.",
      "A guaranteed trip every weekend.",
      "Their money back or a place on the next month's trip.",
    ],
    answer: 3,
    explanation:
      "Участникам предложили два варианта: полный возврат денег либо место в походе следующего месяца.",
  },
];
