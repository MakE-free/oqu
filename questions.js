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

// TGO practice: six independent question sets.
window.OQU_QUESTIONS.push(
  {
    "id": "tgo-critical-1-q01",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-1",
    "passage": "Архив оцифровал старые письма, и теперь с ними можно работать из других городов. Однако распознавание рукописей иногда искажает слова, а пометки на полях требуют пояснений. Поэтому исследователям предлагают проверять важные фрагменты по изображению оригинала.",
    "prompt": "Какова главная мысль текста?",
    "options": [
      "Цифровые копии делают изучение оригиналов бессмысленным.",
      "Ошибки распознавания лишают цифровой архив научной ценности.",
      "Оцифровка расширяет доступ к документам, но не отменяет проверки их содержания.",
      "Изучать архивные письма могут только жители города, где хранится оригинал."
    ],
    "answer": 2,
    "explanation": "Текст одновременно показывает преимущество удалённого доступа и необходимость проверки сложных фрагментов. Он не отвергает оцифровку и не утверждает, что оригиналы или их изображения больше не нужны."
  },
  {
    "id": "tgo-critical-1-q02",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-1",
    "passage": "Столовая предлагает заменить одноразовые контейнеры многоразовыми. Число выдаваемых порций останется прежним, а один многоразовый контейнер стоит дороже одного одноразового. Руководитель ожидает, что закупки контейнеров за год станут дешевле, поскольку каждый многоразовый контейнер можно использовать многократно. Расходы на мытьё в этот расчёт не включены.",
    "prompt": "Какое предположение необходимо для вывода именно о снижении расходов на закупку?",
    "options": [
      "Достаточно много контейнеров будут возвращать и повторно использовать до их замены.",
      "Все посетители предпочитают внешний вид многоразовых контейнеров.",
      "Мытьё многоразовых контейнеров не требует ни воды, ни электричества.",
      "Количество посетителей каждый месяц будет одинаковым."
    ],
    "answer": 0,
    "explanation": "Экономия на закупке возникает только при достаточном числе повторных использований: при массовой потере контейнеров их придётся покупать снова. Нулевые расходы на мытьё не необходимы для указанного вывода, поскольку рассматриваются именно закупки, а не все расходы."
  },
  {
    "id": "tgo-critical-1-q03",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-1",
    "passage": "После открытия районного молодёжного центра число зарегистрированных случаев вандализма сократилось. Представитель центра заявил: «Снижение целиком обеспечили наши занятия». Сравнивались два соседних полугодия.",
    "prompt": "Какой факт сильнее всего ослабляет это объяснение?",
    "options": [
      "Для центра отремонтировали ранее пустовавшее здание.",
      "Часть занятий проводят в выходные дни.",
      "Некоторые участники посещают несколько кружков одновременно.",
      "Одновременно в районе начали круглосуточно патрулировать места, где раньше происходило большинство случаев."
    ],
    "answer": 3,
    "explanation": "Новая охрана могла сама снизить число случаев и является альтернативной причиной изменения. Остальные сведения описывают работу центра, но не предлагают сопоставимого объяснения общего снижения."
  },
  {
    "id": "tgo-critical-1-q04",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-1",
    "passage": "Поликлиника предполагает, что короткое напоминание о записи уменьшает число пропущенных приёмов. Администратор предлагает проверить это, сравнив пациентов, которым напоминание отправляли, с пациентами без напоминания.",
    "prompt": "Какой результат сильнее всего поддержит причинный вывод?",
    "options": [
      "Пациенты, сами попросившие напоминать о записи, реже пропускали приёмы.",
      "Среди случайно распределённых сопоставимых пациентов доля пропусков оказалась ниже в группе с напоминанием.",
      "Большинство опрошенных администраторов считает напоминания полезными.",
      "После изменения оформления сайта посещаемость поликлиники выросла."
    ],
    "answer": 1,
    "explanation": "Случайное распределение уменьшает исходные различия между группами, а доля пропусков прямо измеряет ожидаемый эффект. Самостоятельный выбор напоминания может быть связан с большей организованностью, мнение сотрудников и посещаемость сайта причинную связь не устанавливают."
  },
  {
    "id": "tgo-critical-1-q05",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-1",
    "passage": "Рецензент возражает против выводов статьи: «Автор никогда не занимал руководящую должность, поэтому его расчёт эффективности управления неверен». Ошибок в самом расчёте рецензент не называет.",
    "prompt": "В чём основной недостаток возражения?",
    "options": [
      "Рецензент доказал, что практический опыт всегда ухудшает качество исследования.",
      "Сведения о биографии автора подменяют проверку приведённых им расчётов.",
      "Рецензент использовал результаты слишком большого числа исследований.",
      "Отсутствие управленческого опыта само по себе подтверждает правильность расчёта."
    ],
    "answer": 1,
    "explanation": "Истинность расчёта нужно оценивать по данным, допущениям и вычислениям. Биография автора может быть контекстом, но без указания ошибки не опровергает результат; она также не доказывает его правильность."
  },
  {
    "id": "tgo-critical-1-q06",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-1",
    "passage": "Город объявил конкурс проектов: к рассмотрению допускают заявку только при наличии сметы. Известно, что проект «Север» допущен к рассмотрению. О других требованиях конкурса ничего не сказано.",
    "prompt": "Что обязательно следует из этих условий?",
    "options": [
      "Проект «Север» победит в конкурсе.",
      "Любая заявка со сметой допущена к рассмотрению.",
      "Смета проекта «Север» дешевле смет остальных проектов.",
      "У заявки проекта «Север» есть смета."
    ],
    "answer": 3,
    "explanation": "Смета названа необходимым условием допуска, поэтому допущенная заявка обязана её иметь. Наличие сметы не объявлено достаточным условием, а о победе и размере расходов сведений нет."
  },
  {
    "id": "tgo-critical-1-q07",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-1",
    "passage": "В опросе сотрудники с гибким графиком чаще сообщали об удовлетворённости работой. Автор делает вывод: перевод любого сотрудника на гибкий график обязательно повысит его удовлетворённость.",
    "prompt": "Какой вопрос важнее всего для оценки этого вывода?",
    "options": [
      "Различались ли группы по характеру работы и другим условиям, влияющим на удовлетворённость?",
      "Сколько удовлетворённых сотрудников рекомендуют компанию знакомым?",
      "Как гибкий график обозначен в кадровых документах?",
      "Планирует ли компания проводить следующий опрос через год?"
    ],
    "answer": 0,
    "explanation": "Гибкий график может быть связан с другими преимуществами работы, и именно они могут объяснять удовлетворённость. Даже установленная средняя связь не гарантирует эффект для каждого сотрудника. Рекомендации знакомым, формальное название графика и планы следующего опроса не позволяют отделить его влияние от других условий."
  },
  {
    "id": "tgo-critical-1-q08",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-1",
    "passage": "Муниципалитет хочет узнать, нужен ли жителям новый детский сад. Опрос разместили только в чате родителей дошкольников; большинство ответивших поддержало строительство. Результат объявили мнением всех взрослых жителей района.",
    "prompt": "Какое ограничение следует отметить прежде всего?",
    "options": [
      "Если большинство ответило «да», способ отбора участников уже не имеет значения.",
      "Результаты опроса обязательно противоположны мнению всего района.",
      "Участники родительского чата могут отличаться от остальных взрослых жителей по заинтересованности в детском саде.",
      "Для выяснения мнений взрослых нельзя использовать никакие опросы."
    ],
    "answer": 2,
    "explanation": "Выборка охватывает особенно заинтересованную группу, поэтому её ответ нельзя без проверки переносить на всех взрослых. Это не доказывает противоположного мнения района и не делает опросы в принципе непригодными."
  },
  {
    "id": "tgo-critical-1-q09",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-1",
    "passage": "Аудиолекции позволяют повторять материал в дороге и удобны тем, кому трудно читать с экрана. Но схемы и формулы в них часто приходится описывать длинными фразами. Поэтому для некоторых тем полезнее сочетать аудио с иллюстрациями.",
    "prompt": "Какую роль играет второе предложение?",
    "options": [
      "Оно опровергает утверждение, что аудиолекции можно слушать в дороге.",
      "Оно доказывает, что иллюстрации нужны для любой темы без исключения.",
      "Оно сообщает независимый факт, не связанный с заключением текста.",
      "Оно обозначает ограничение аудиоформата, объясняющее рекомендацию сочетать форматы."
    ],
    "answer": 3,
    "explanation": "Трудность передачи схем и формул объясняет, зачем в некоторых темах нужны изображения. Она не отрицает удобства аудио в дороге и не обосновывает универсального требования иллюстраций."
  },
  {
    "id": "tgo-critical-1-q10",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-1",
    "passage": "За месяц в службу поддержки поступило 60 жалоб на приложение А и 30 жалоб на приложение Б. Аналитик заключил, что пользователи А сталкиваются с проблемами вдвое чаще. Число пользователей приложений не указано.",
    "prompt": "Каких данных прежде всего не хватает для такого сравнения?",
    "options": [
      "Числа активных пользователей каждого приложения за тот же месяц.",
      "Средней оценки каждого приложения в магазине за все годы.",
      "Числа выпущенных обновлений каждого приложения за прошлый год.",
      "Доли жалоб, на которые служба поддержки ответила за один день."
    ],
    "answer": 0,
    "explanation": "Число жалоб нужно соотнести с числом пользователей: при разной аудитории большее абсолютное количество не означает большую частоту. Оценки в магазине, число обновлений и скорость ответа поддержки не заменяют данные о размере аудитории за сравниваемый месяц."
  },
  {
    "id": "tgo-critical-1-q11",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-1",
    "passage": "Журнал опубликовал обзор испытаний материалов. Производитель одного из материалов оплатил работу авторов, но описание методики и исходные данные доступны. Читатель считает, что финансирование автоматически доказывает ложность всех результатов.",
    "prompt": "Какая оценка наиболее обоснованна?",
    "options": [
      "Оплата исследования производителем гарантирует правильность всех выводов.",
      "После раскрытия источника денег методику можно больше не изучать.",
      "Финансирование создаёт возможный конфликт интересов, поэтому результаты следует проверить, а не заранее объявлять ложными.",
      "Открытые исходные данные делают любые ошибки логически невозможными."
    ],
    "answer": 2,
    "explanation": "Источник финансирования — основание для более внимательной проверки методики и независимого воспроизведения. Он не доказывает ни ложность, ни истинность результатов, а открытость данных облегчает проверку, не исключая ошибок."
  },
  {
    "id": "tgo-critical-1-q12",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-1",
    "passage": "Эксперт говорит: «Либо город полностью запретит личные автомобили, либо пробки никогда не уменьшатся». Возможные изменения общественного транспорта, организации перекрёстков и графиков поездок он не рассматривает.",
    "prompt": "Какой недостаток есть у рассуждения?",
    "options": [
      "Оно точно устанавливает, какой вид транспорта быстрее на каждом маршруте.",
      "Оно представляет два исхода как единственные, не обосновав исключение других решений.",
      "Оно использует доказанный факт, что любое ограничение автомобилей бесполезно.",
      "Оно ошибочно считает пробки измеримым явлением."
    ],
    "answer": 1,
    "explanation": "Автор задаёт ложную дилемму: из текста не следует, что промежуточные или иные меры не могут повлиять на пробки. При этом измеримость пробок и скорость отдельных маршрутов к ошибке не относятся."
  },
  {
    "id": "tgo-critical-1-q13",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-1",
    "passage": "Участник совета предложил ограничить яркость наружной рекламы ночью. Оппонент ответил: «Он хочет запретить любую рекламу и оставить магазины без покупателей».",
    "prompt": "Что произошло в ответе оппонента?",
    "options": [
      "Узкое предложение заменили гораздо более радикальным и возразили против этой подмены.",
      "Были приведены данные о фактической ночной яркости вывесок.",
      "Была доказана невозможность уменьшить яркость технически.",
      "Предложение было точно повторено и принято без возражений."
    ],
    "answer": 0,
    "explanation": "Ограничение яркости ночью не равнозначно запрету всей рекламы. Оппонент атакует усиленную версию, которую исходный участник не предлагал, вместо оценки реальной меры."
  },
  {
    "id": "tgo-critical-1-q14",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-1",
    "passage": "Группа исследователей не обнаружила изменения скорости чтения после двух занятий. В исследовании участвовали восемь человек, а длительная практика не изучалась. Автор заметки заключил, что любые занятия чтением при любой длительности бесполезны.",
    "prompt": "Какой вывод наиболее осторожно соответствует данным?",
    "options": [
      "Доказано отсутствие эффекта любых программ чтения у всех людей.",
      "Если бы участников было больше, эффект обязательно оказался бы положительным.",
      "В этой небольшой группе после двух занятий измеримого изменения скорости не обнаружили.",
      "Исследование установило, что занятия ухудшают понимание любого текста."
    ],
    "answer": 2,
    "explanation": "Данные относятся к конкретной группе, двум занятиям и выбранному показателю. Они не позволяют распространить отрицательный результат на любые программы; больший размер выборки сам по себе также не гарантирует положительный эффект."
  },
  {
    "id": "tgo-critical-1-q15",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-1",
    "passage": "Чтобы сократить пропуски занятий, колледж планирует бесплатный утренний автобус из отдалённого посёлка. План основан на предположении, что именно сложность утренней поездки — основная причина пропусков у этих студентов.",
    "prompt": "Какой факт сильнее всего поставит план под сомнение?",
    "options": [
      "Маршрут автобуса проходит рядом с колледжем.",
      "Большинство пропусков у этой группы происходит после обеда, хотя утром студенты обычно приезжают вовремя.",
      "В посёлке живут студенты нескольких учебных групп.",
      "Поездка на автобусе занимает меньше времени, чем пеший путь."
    ],
    "answer": 1,
    "explanation": "Если пропуски возникают в основном после успешного приезда на утренние занятия, бесплатная утренняя поездка не устраняет их главную причину. Остальные сведения не показывают такого несоответствия между мерой и проблемой."
  },
  {
    "id": "tgo-critical-2-q01",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-2",
    "passage": "Музей бесплатно открыл один зал по воскресеньям. Посещаемость этого зала выросла, но общие доходы музея снизились. Директор утверждает, что бесплатный вход обязательно ухудшает финансовое положение любого музея.",
    "prompt": "Какая информация наиболее важна для проверки причинного объяснения снижения доходов?",
    "options": [
      "Из каких городов приехали посетители бесплатного зала.",
      "Не сократились ли одновременно доходы от аренды и других источников, не связанных с этим залом.",
      "Какая доля посетителей бесплатного зала пришла в музей впервые.",
      "Нужно ли посетителям получать отдельный бесплатный билет в кассе."
    ],
    "answer": 1,
    "explanation": "Общие доходы складываются из нескольких источников. Их независимое сокращение может объяснить падение без вреда от бесплатного входа; одно наблюдение также не устанавливает универсального закона для всех музеев."
  },
  {
    "id": "tgo-critical-2-q02",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-2",
    "passage": "Платформа сообщает: «Среди тех, кто дошёл до последнего урока, 92% сдали итоговый тест». Доля начавших курс и дошедших до последнего урока не сообщается. Реклама представляет число 92% как вероятность успеха для каждого нового слушателя.",
    "prompt": "Какой вопрос сильнее всего помогает оценить рекламное обещание?",
    "options": [
      "Какая часть выпускников оценила оформление курса как удобное?",
      "Какую оценку содержанию курса дали преподаватели перед запуском?",
      "Сколько уроков включает следующий курс этой платформы?",
      "Какая доля всех начавших курс в итоге сдала итоговый тест, включая тех, кто прекратил обучение?"
    ],
    "answer": 3,
    "explanation": "Рекламная вероятность относится к новому слушателю, поэтому в основание нужно включать всех начавших, а не только сохранившуюся к финалу группу. Отбор завершивших может существенно завышать оценку успеха."
  },
  {
    "id": "tgo-critical-2-q03",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-2",
    "passage": "Правило редакции гласит: каждую статью с авторскими фотографиями перед публикацией проверяет фоторедактор. Статья Айданы не содержит авторских фотографий.",
    "prompt": "Какой вывод об обязательной проверке этой статьи верен?",
    "options": [
      "Из данного правила нельзя определить, проверит ли статью фоторедактор по другим основаниям.",
      "Фоторедактор не может проверять эту статью ни при каких условиях.",
      "Статья обязательно содержит фотографии из другого источника.",
      "Статья автоматически разрешена к публикации без каких-либо проверок."
    ],
    "answer": 0,
    "explanation": "Правило задаёт условие, при котором проверка обязательна, но не говорит, что проверяют только такие статьи. Отсутствие названного признака не даёт отрицательного вывода о проверке или положительного вывода о публикации."
  },
  {
    "id": "tgo-critical-2-q04",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-2",
    "passage": "Сотрудники предлагают убрать дублирующее согласование закупок. Они ожидают более короткий срок оформления без роста ошибок, поскольку второе согласование обычно повторяет первое.",
    "prompt": "Какие данные сильнее всего поддержат предложение?",
    "options": [
      "Часть сотрудников считает форму согласования некрасивой.",
      "В подразделении с меньшим числом закупок суммарно обнаружили меньше ошибок.",
      "Пилот в сопоставимых подразделениях сократил время оформления, а независимая проверка не выявила роста доли ошибочных закупок.",
      "Руководители хотят сократить время оформления независимо от качества."
    ],
    "answer": 2,
    "explanation": "Пилот непосредственно проверяет оба заявленных результата — скорость и качество — в сопоставимых условиях. Меньшее абсолютное число ошибок при меньшем объёме закупок не равно меньшей доле ошибок."
  },
  {
    "id": "tgo-critical-2-q05",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-2",
    "passage": "Районная газета спрашивает: «Поддерживаете ли вы наконец разумное решение установить безопасное освещение вместо нынешней опасной темноты?» Затем ответы используют как нейтральное измерение отношения к конкретному проекту фонарей.",
    "prompt": "Что прежде всего снижает нейтральность такого вопроса?",
    "options": [
      "Формулировка заранее оценивает один ответ как разумный и безопасный, подталкивая к нему.",
      "Вопрос сформулирован на языке жителей района.",
      "Вопрос касается существующей городской проблемы.",
      "У вопроса есть более одного возможного ответа."
    ],
    "answer": 0,
    "explanation": "Оценочные слова создают направляющую формулировку и смешивают отношение к безопасности с выбором конкретного проекта. Сам по себе понятный язык или наличие городской проблемы нейтральность не нарушает."
  },
  {
    "id": "tgo-critical-2-q06",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-2",
    "passage": "Экономист пишет: «Плата за доставку может уменьшить число маленьких заказов. Однако если объединение заказов сократит количество рейсов, расходы магазина могут снизиться даже при меньшем числе заказов».",
    "prompt": "Какое утверждение точнее передаёт позицию автора?",
    "options": [
      "Любая плата за доставку неизбежно увеличивает прибыль каждого магазина.",
      "Уменьшение числа заказов всегда означает равное уменьшение прибыли.",
      "Оценивать плату нужно с учётом изменений не только числа заказов, но и расходов на рейсы.",
      "Количество рейсов никак не связано с расходами магазина."
    ],
    "answer": 2,
    "explanation": "Автор различает число заказов и финансовый результат, указывая на возможную экономию рейсов. Он использует условное «если» и не обещает гарантированного роста прибыли."
  },
  {
    "id": "tgo-critical-2-q07",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-2",
    "passage": "В отчёте о ремонте дорог говорится: «Средний срок работ уменьшился». Известно, что в прошлом году преобладали крупные мостовые ремонты, а в этом — небольшие участки покрытия. Руководство объясняет изменение только ростом производительности бригад.",
    "prompt": "Что нужно сделать для более убедительного сравнения производительности?",
    "options": [
      "Сопоставить число объектов в годовых пресс-релизах, не учитывая объём работ.",
      "Сравнить сроки работ сопоставимого типа и объёма, учитывая условия их выполнения.",
      "Сравнить число совещаний бригад, не учитывая вид и объём работ.",
      "Использовать только общие средние, потому что различия видов работ несущественны."
    ],
    "answer": 1,
    "explanation": "Смена состава работ способна уменьшить средний срок без ускорения выполнения одинаковых задач. Сопоставление близких объектов уменьшает это смешение и лучше выделяет производительность."
  },
  {
    "id": "tgo-critical-2-q08",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-2",
    "passage": "Компания исследовала упаковку: покупатели случайным образом получали внешне одинаковые образцы А и Б и оценивали удобство открывания. Номера образцов расшифровали только после сбора оценок.",
    "prompt": "Зачем в такой проверке скрывали названия вариантов?",
    "options": [
      "Чтобы гарантировать одинаковый ответ каждого участника.",
      "Чтобы увеличить фактическую прочность упаковки.",
      "Чтобы сделать случайное распределение участников ненужным.",
      "Чтобы известность бренда и ожидания участников меньше влияли на оценку удобства."
    ],
    "answer": 3,
    "explanation": "Сокрытие названий уменьшает влияние ожиданий на субъективную оценку. Оно не меняет физических свойств образцов, не устраняет различия ответов и не заменяет случайного распределения."
  },
  {
    "id": "tgo-critical-2-q09",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-2",
    "passage": "На двух островах одинаковая численность населения. На первом открыли две новые аптеки и число обращений в больницу снизилось. На втором аптек не открывали, но обращений стало меньше на ту же долю.",
    "prompt": "Какое объяснение лучше согласуется с этими данными?",
    "options": [
      "Новые аптеки на первом острове обязательно вызвали снижение на втором.",
      "Одинаковая доля снижения доказывает, что аптеки вредны.",
      "На снижение могли повлиять общие для островов обстоятельства; данные не выделяют эффект новых аптек.",
      "Сам факт открытия аптек доказывает их исключительную причинную роль."
    ],
    "answer": 2,
    "explanation": "Сходное изменение без открытия аптек указывает на возможные общие причины и ослабляет приписывание всего эффекта аптекам. Но оно не доказывает ни вреда, ни полного отсутствия какого-либо эффекта аптек."
  },
  {
    "id": "tgo-critical-2-q10",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-2",
    "passage": "В споре о продлении пешеходной зоны инженер говорит, что необходимо проверить доступ пожарной техники. Другой участник отвечает: «Вы против удобства пешеходов, раз поднимаете этот вопрос».",
    "prompt": "Какая оценка ответа наиболее точна?",
    "options": [
      "Ответ содержит результаты испытаний пожарной техники.",
      "Вопрос о проверке конкретного ограничения необоснованно представлен как отрицание всей цели проекта.",
      "Ответ доказывает, что удобство и безопасность совместимы при любом проекте.",
      "Ответ устанавливает, что инженер предложил отменить все пешеходные зоны."
    ],
    "answer": 1,
    "explanation": "Проверка доступа экстренной техники может быть частью улучшения проекта и не означает противодействия пешеходам. Оппонент приписывает инженеру позицию, которая из его слов не следует."
  },
  {
    "id": "tgo-critical-2-q11",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-2",
    "passage": "Издательство утверждает, что редакционная программа уменьшает опечатки. До её внедрения ошибки считали только по жалобам читателей, после внедрения — по полной автоматической проверке всех страниц. Полученные количества сравнили напрямую.",
    "prompt": "Какой вывод о таком сравнении наиболее обоснован?",
    "options": [
      "Большее число найденных ошибок обязательно означает ухудшение текста.",
      "Если новая проверка автоматическая, сравниваемые показатели всегда одинаковы по смыслу.",
      "Жалобы читателей гарантированно обнаруживают каждую опечатку.",
      "Смена способа обнаружения ошибок мешает приписать изменение их количества самой программе."
    ],
    "answer": 3,
    "explanation": "Жалобы и сплошная проверка имеют разную полноту обнаружения. Изменение зарегистрированного числа может отражать метод измерения, поэтому нужно сопоставимое измерение до и после."
  },
  {
    "id": "tgo-critical-2-q12",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-2",
    "passage": "Организатор предлагает проводить встречи выпускников онлайн: «Все участники из разных городов смогут подключаться без поездок, значит присутствовать будут все приглашённые».",
    "prompt": "Какой переход в рассуждении не обоснован?",
    "options": [
      "Возможность подключиться приравнена к фактическому участию каждого приглашённого.",
      "Участники из разных городов могут пользоваться одной платформой.",
      "Онлайн-встреча может обходиться без совместного нахождения в одном зале.",
      "Поездка и подключение к видеосвязи являются разными действиями."
    ],
    "answer": 0,
    "explanation": "Устранение необходимости поездки не устраняет занятость, отсутствие интереса и технические препятствия. Из возможности участия не следует его обязательное осуществление всеми приглашёнными."
  },
  {
    "id": "tgo-critical-2-q13",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-2",
    "passage": "Программа стажировок принимает человека тогда и только тогда, когда выполнены оба условия: он закончил бакалавриат и прошёл собеседование. Данияр закончил бакалавриат, но собеседование ещё не проходил.",
    "prompt": "Что следует из правил на данный момент?",
    "options": [
      "Данияр уже принят, поскольку одного бакалавриата достаточно.",
      "Данияр пока не отвечает всем условиям приёма в программу.",
      "Данияр никогда не сможет быть принят, даже после собеседования.",
      "Любой прошедший собеседование принимается независимо от образования."
    ],
    "answer": 1,
    "explanation": "Правило требует выполнения обоих условий, а одно из них ещё не выполнено. Это описывает текущее состояние и не исключает будущего приёма после успешного прохождения собеседования."
  },
  {
    "id": "tgo-critical-2-q14",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-2",
    "passage": "Служба доставки обещает: «Не менее 95% заказов прибудут вовремя». В проверенной случайной выборке из 1000 завершённых заказов вовремя прибыли 960. Методика измерения срока была одинаковой для всех заказов.",
    "prompt": "Какой вывод соответствует данным без лишнего обобщения?",
    "options": [
      "В проверенной выборке вовремя доставили 96% заказов, что согласуется с обещанием для этой выборки.",
      "Каждый будущий заказ обязательно прибудет вовремя.",
      "Просроченных заказов в выборке не было.",
      "Из выборки следует, что во всех населённых пунктах доля точно равна 96%."
    ],
    "answer": 0,
    "explanation": "960 из 1000 составляют 96%, то есть в выборке порог 95% соблюдён. Наличие случайной выборки помогает оценивать работу службы, но не гарантирует срок отдельного заказа или точный показатель каждой территории."
  },
  {
    "id": "tgo-critical-2-q15",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-2",
    "passage": "Исследователь сравнил две стратегии подготовки. Группа А использовала стратегию X и сдала более лёгкий вариант экзамена, группа Б использовала Y и получила более трудный вариант. Средний балл А оказался выше.",
    "prompt": "Почему пока нельзя уверенно объявить X лучшей стратегией?",
    "options": [
      "Средние баллы по определению не могут описывать результаты групп.",
      "Любое сравнение стратегий обучения всегда невозможно.",
      "Разная трудность итоговых заданий могла повлиять на различие средних баллов.",
      "Более высокий балл автоматически доказывает более глубокие знания при любых заданиях."
    ],
    "answer": 2,
    "explanation": "В сравнении одновременно различаются стратегия и измерительный инструмент. Чтобы выделить эффект стратегии, нужен сопоставимый экзамен или корректный учёт различий трудности; средний балл сам по себе не решает эту проблему."
  },
  {
    "id": "tgo-critical-3-q01",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-3",
    "passage": "Совет обсуждает, нужно ли строить вторую спортивную площадку. Первый довод: существующая переполнена по вечерам. Второй: новая будет ближе к кварталам, откуда сейчас долго идти. Данных о стоимости нет.",
    "prompt": "Какое заключение непосредственно поддерживают оба довода?",
    "options": [
      "Новая площадка гарантированно окупится за один год.",
      "Любой альтернативный проект хуже спортивной площадки.",
      "Строительство следует оплатить независимо от его стоимости.",
      "У новой площадки есть потенциальная польза для доступности занятий спортом."
    ],
    "answer": 3,
    "explanation": "Оба довода относятся к доступности — числу мест и расстоянию. Они показывают возможную пользу, но не содержат расчёта окупаемости, сравнения со всеми альтернативами или основания игнорировать цену."
  },
  {
    "id": "tgo-critical-3-q02",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-3",
    "passage": "У компании есть правило: если заказ оплачен до 12:00 и товар есть на складе, его отправляют в тот же день. Заказ Нуры оплатили в 11:00, но наличие товара неизвестно.",
    "prompt": "Какой вывод логически корректен?",
    "options": [
      "Заказ Нуры обязательно отправят в тот же день.",
      "Заказ Нуры ни при каких обстоятельствах не отправят в тот же день.",
      "Одного факта оплаты до 12:00 недостаточно, чтобы применить указанную гарантию отправки.",
      "Товара на складе определённо нет."
    ],
    "answer": 2,
    "explanation": "В правиле условие составное: нужна и ранняя оплата, и наличие товара. О втором условии данных нет, поэтому гарантию нельзя применить; это не доказывает и невозможности отправки."
  },
  {
    "id": "tgo-critical-3-q03",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-3",
    "passage": "В городе повысили штраф за незаконную парковку, и количество выписанных штрафов уменьшилось. Чиновник считает это достаточным доказательством того, что самих нарушений стало меньше.",
    "prompt": "Какая информация сильнее всего заставит пересмотреть вывод?",
    "options": [
      "Размер штрафа стали указывать более крупным шрифтом.",
      "В тот же период число проверяющих инспекторов сократилось втрое.",
      "Нарушения парковки обсуждали на заседании совета.",
      "Некоторые жители оплачивают штрафы через приложение."
    ],
    "answer": 1,
    "explanation": "Меньше инспекторов может означать меньше обнаруженных нарушений даже при прежней частоте неправильной парковки. Зарегистрированные штрафы не тождественны всем нарушениям; остальные факты не объясняют такое расхождение."
  },
  {
    "id": "tgo-critical-3-q04",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-3",
    "passage": "Университет хочет выяснить, помогает ли доступ к тихой комнате повысить точность решения задач. Участники выполнят одинаковые по сложности задания; одна группа получит тихую комнату, другая — обычную аудиторию.",
    "prompt": "Какой дополнительный шаг лучше уменьшит влияние исходных различий участников?",
    "options": [
      "Случайным образом распределить участников по двум условиям.",
      "Позволить самым подготовленным участникам выбрать тихую комнату первыми.",
      "Назначить разные критерии правильности для каждой группы.",
      "Засчитывать в тихой комнате только удачные попытки."
    ],
    "answer": 0,
    "explanation": "Случайное распределение не гарантирует полного равенства, но уменьшает систематический отбор по подготовке. Остальные решения создают новые источники смещения и делают сравнение менее убедительным."
  },
  {
    "id": "tgo-critical-3-q05",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-3",
    "passage": "В статье сказано: «Ни одно из доступных нам качественных исследований не подтвердило, что браслет улучшает память». Продавец возражает: «Но вы не доказали, что он никогда и никому не поможет, значит эффективность доказана».",
    "prompt": "В чём ошибка продавца?",
    "options": [
      "Он точно воспроизвёл вывод об уже доказанной эффективности.",
      "Он предъявил положительный результат нового качественного исследования.",
      "Отсутствие доказательства полной неэффективности он выдаёт за доказательство эффективности.",
      "Он показал, что память нельзя измерять ни одним способом."
    ],
    "answer": 2,
    "explanation": "Доказательства утверждения должны поддерживать само утверждение. Невозможность исключить абсолютно любой эффект у любого человека не превращается в положительное свидетельство эффективности."
  },
  {
    "id": "tgo-critical-3-q06",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-3",
    "passage": "Из десяти филиалов фирмы только два резко сократили расходы. В публикации подробно описали именно эти два случая и объявили использованную ими систему надёжным способом сокращать расходы во всех филиалах. О результатах остальных восьми ничего не сообщается.",
    "prompt": "Какое действие прежде всего улучшит проверку этого обобщения?",
    "options": [
      "Установить, какие филиалы использовали систему, и сравнить результаты всех использовавших её, включая неудачные случаи.",
      "Подробно повторить описание только самого успешного филиала.",
      "Исключить филиалы, в которых расходы выросли, до начала анализа.",
      "Считать выбор успешных примеров доказательством отсутствия исключений."
    ],
    "answer": 0,
    "explanation": "Нужно знать весь набор случаев применения, иначе возможен отбор только успешных результатов. Дополнительные подробности одного успеха не устраняют этот отбор и не показывают надёжность метода."
  },
  {
    "id": "tgo-critical-3-q07",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-3",
    "passage": "При обсуждении нового автобусного маршрута житель говорит: «Маршрут полезен, потому что обслужит большой жилой квартал». Член совета отвечает: «Нам нельзя принимать решение, пока нет оценки необходимого числа автобусов и расходов».",
    "prompt": "Как соотносятся позиции?",
    "options": [
      "Обе позиции утверждают, что маршрут не нужен ни одному жителю.",
      "Вторая позиция логически доказывает отсутствие жилого квартала.",
      "Первая позиция уже содержит полный расчёт необходимых расходов.",
      "Вторая позиция требует дополнительных данных для решения, но не отрицает названной пользы маршрута."
    ],
    "answer": 3,
    "explanation": "Польза проекта и достаточность информации для его принятия — разные вопросы. Требование сметы не опровергает обслуживание квартала, а довод о квартале сам по себе не заменяет расчёт ресурсов."
  },
  {
    "id": "tgo-critical-3-q08",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-3",
    "passage": "В ходе опроса 70% жителей поддержали озеленение пустыря. Затем всем сообщили, что проект потребует закрыть единственную подъездную дорогу к нескольким домам. Повторного опроса не проводили. Автор уверяет, что поддержка именно этого проекта всё ещё составляет 70%.",
    "prompt": "Почему такой вывод преждевременен?",
    "options": [
      "Любое сообщение о дороге гарантированно уменьшает поддержку ровно вдвое.",
      "Первая оценка получена без существенной информации об условиях проекта, которая могла изменить ответы.",
      "Результаты первого опроса автоматически становятся ложными задним числом.",
      "Понятие озеленения не может обсуждаться жителями."
    ],
    "answer": 1,
    "explanation": "Первый опрос описывает ответы при прежнем объёме информации. Новое существенное условие может изменить отношение, но без повторного измерения неизвестны ни направление изменения у каждого жителя, ни новая доля поддержки."
  },
  {
    "id": "tgo-critical-3-q09",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-3",
    "passage": "Некоторые работники отдела участвовали в стажировке. Все участники этой стажировки получили доступ к новому программному обеспечению. Других сведений о распределении доступа нет.",
    "prompt": "Какой вывод обязательно следует?",
    "options": [
      "Некоторые работники отдела получили доступ к новому программному обеспечению.",
      "Все работники отдела участвовали в стажировке.",
      "Любой получивший доступ обязательно участвовал в стажировке.",
      "Ни один работник другого отдела не мог получить доступ."
    ],
    "answer": 0,
    "explanation": "Есть хотя бы часть работников отдела, участвовавших в стажировке, а каждый такой участник получил доступ. Обратное условие и ограничения для остальных людей не заданы."
  },
  {
    "id": "tgo-critical-3-q10",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-3",
    "passage": "Чтобы сократить очереди, центр обслуживания ввёл запись через приложение. После этого время ожидания у посетителей с записью снизилось. Данных о посетителях без приложения и о числе людей, отказавшихся от визита, нет.",
    "prompt": "Какой вопрос важен для оценки улучшения доступности центра в целом?",
    "options": [
      "Выросла ли средняя оценка приложения среди посетителей с записью?",
      "Сократилось ли число экранов в цифровой форме записи?",
      "Получают ли зарегистрированные посетители подтверждение записи?",
      "Что произошло с ожиданием и возможностью получить услугу у людей, не пользующихся приложением?"
    ],
    "answer": 3,
    "explanation": "Общая доступность относится ко всем потенциальным посетителям, а не только к удобной для измерения цифровой группе. Улучшение у записавшихся может сопровождаться ухудшением условий у остальных; свойства оформления этого не проясняют."
  },
  {
    "id": "tgo-critical-3-q11",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-3",
    "passage": "Рецензент хвалит исследование: данные опубликованы, критерии анализа зафиксированы до начала сбора данных, а выводы совпали с независимым повторением.",
    "prompt": "Какое свойство этой ситуации сильнее всего повышает доверие к устойчивости результата?",
    "options": [
      "Авторы получили результат, которого ожидали до начала работы.",
      "Вывод поддержало большинство сотрудников института без собственной проверки.",
      "Результат воспроизвели другие исследователи на независимо собранных данных.",
      "В названии исследования подчёркнута практическая польза результата."
    ],
    "answer": 2,
    "explanation": "Независимое воспроизведение показывает, что результат не ограничен одной выборкой или особенностями одной исследовательской группы. Открытость данных и предварительные критерии также полезны. Ожидания авторов, поддержка коллег без проверки и заявление о практической пользе не являются независимым подтверждением устойчивости."
  },
  {
    "id": "tgo-critical-3-q12",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-3",
    "passage": "Руководитель считает, что новый график не увеличил нагрузку: среднее число рабочих часов по отделу осталось прежним. Сотрудники утверждают, что у части из них появились регулярные переработки.",
    "prompt": "Какое утверждение совместимо с обеими сторонами?",
    "options": [
      "Неизменность среднего логически исключает любые индивидуальные переработки.",
      "У одних сотрудников часы выросли, а у других сократились так, что общее среднее не изменилось.",
      "Сообщения части сотрудников доказывают рост часов у каждого работника.",
      "Среднее число часов не может оставаться одинаковым в двух периодах."
    ],
    "answer": 1,
    "explanation": "Одинаковое среднее не означает одинакового распределения нагрузки: противоположные изменения у разных сотрудников могут компенсироваться. Поэтому обе наблюдаемые ситуации могут быть верны одновременно."
  },
  {
    "id": "tgo-critical-3-q13",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-3",
    "passage": "Депутат предлагает заменить старые окна в общежитии ради экономии отопления. Оппонент говорит: «Заменять окна не нужно: здание и без этого пригодно для проживания».",
    "prompt": "Какое предположение нужно дополнительно обосновать, чтобы приведённый ответ возражал против предложения?",
    "options": [
      "Окна — единственный источник потерь тепла в здании.",
      "Замена окон снизит не только расход тепла, но и шум с улицы.",
      "Если здание пригодно для проживания, уменьшение расходов на отопление не является достаточным основанием для замены окон.",
      "Для расчёта расходов на отопление достаточно знать площадь здания."
    ],
    "answer": 2,
    "explanation": "Предложение обосновано экономией, а ответ касается минимальной пригодности здания. Чтобы этот ответ опровергал предложение, нужно объяснить, почему при уже обеспеченной пригодности возможная экономия не оправдывает затраты на замену."
  },
  {
    "id": "tgo-critical-3-q14",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-3",
    "passage": "Аналитик утверждает: «Новый датчик полезен, только если его погрешность не превышает одного градуса». Измерения показали погрешность в половину градуса. Другие требования к полезности не обсуждаются.",
    "prompt": "Что можно заключить?",
    "options": [
      "Датчик полезен при любых условиях, поскольку одно требование выполнено.",
      "Указанное необходимое условие выполнено, но этого ещё недостаточно для вывода о полезности датчика.",
      "Датчик точно бесполезен, поскольку его погрешность не равна нулю.",
      "Датчик измеряет только температуру воздуха в помещении."
    ],
    "answer": 1,
    "explanation": "Формулировка «полезен, только если» задаёт необходимое условие, а не достаточное. Погрешность подходит под порог, однако могут существовать и другие требования, например к надёжности или диапазону измерений."
  },
  {
    "id": "tgo-critical-3-q15",
    "subject": "tgo",
    "topic": "critical",
    "testId": "tgo-critical-3",
    "passage": "Школа планирует выдавать сложные задания после короткого вводного объяснения. Пробный урок показал, что ученики часто застревают из-за незнакомых обозначений, хотя после их пояснения решают задачи самостоятельно.",
    "prompt": "Какое изменение наиболее прямо отвечает выявленной проблеме?",
    "options": [
      "Включить до самостоятельной работы краткое объяснение новых обозначений и пример их чтения.",
      "Удалить все сложные задания независимо от их темы.",
      "Увеличить время самостоятельной работы, не поясняя обозначений.",
      "Пояснять новые обозначения только после выставления итоговой оценки."
    ],
    "answer": 0,
    "explanation": "Наблюдение связывает затруднение с конкретным барьером — обозначениями, а не с невозможностью решать задачи. Предварительное пояснение устраняет этот барьер, сохраняя самостоятельную работу; остальные меры либо не направлены на причину, либо отказываются от цели."
  },
  {
    "id": "tgo-analytical-1-q01",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-1",
    "prompt": "Пять экспозиций R, S, T, U и V открываются по одной в пяти последовательных временных слотах. R открывается во втором слоте; U — раньше R; S — сразу после T; V — позже S. Какая экспозиция открывается в четвёртом слоте?",
    "options": [
      "R",
      "T",
      "S",
      "V"
    ],
    "answer": 2,
    "explanation": "Раньше второго слота есть только первый, поэтому U занимает его, а R — второй. Для соседних T и S остаются слоты 3 и 4: если занять 4 и 5, для V после S места не будет. Получается U, R, T, S, V; в четвёртом слоте — S."
  },
  {
    "id": "tgo-analytical-1-q02",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-1",
    "prompt": "Какая бригада выполнила больше всего заданий за все три дня вместе?",
    "options": [
      "Бригада C",
      "Бригада A",
      "Бригада B",
      "Бригады A и C поровну"
    ],
    "answer": 0,
    "explanation": "Складываем показатели по строкам: A — 12 + 18 + 15 = 45, B — 10 + 20 + 14 = 44, C — 16 + 12 + 19 = 47. Наибольшая сумма — 47 у бригады C. Лидерство в отдельный день не определяет результат за весь период.",
    "passage": "Выполненные задания:\nБригада A: понедельник — 12, вторник — 18, среда — 15.\nБригада B: понедельник — 10, вторник — 20, среда — 14.\nБригада C: понедельник — 16, вторник — 12, среда — 19."
  },
  {
    "id": "tgo-analytical-1-q03",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-1",
    "prompt": "Заявка проходит первый этап тогда и только тогда, когда стаж кандидата составляет не менее двух лет и его сертификат действителен. Какие кандидаты пройдут этап?",
    "options": [
      "Только Дамир",
      "Аида, Бек и Дамир",
      "Бек, Сая и Дамир",
      "Бек и Дамир"
    ],
    "answer": 3,
    "explanation": "Нужно одновременно выполнить оба условия. У Бека ровно два года стажа, что соответствует «не менее двух», и действительный сертификат. Дамир также выполняет оба условия. Аида не проходит из-за сертификата, Сая — из-за недостаточного стажа.",
    "passage": "Аида: стаж 3 года, сертификат просрочен.\nБек: стаж 2 года, сертификат действителен.\nСая: стаж 1 год, сертификат действителен.\nДамир: стаж 4 года, сертификат действителен."
  },
  {
    "id": "tgo-analytical-1-q04",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-1",
    "prompt": "Для группы из 60 человек заказали ровно четыре микроавтобуса без свободных мест. Большой микроавтобус вмещает 18 человек, малый — 12. Сколько больших микроавтобусов заказали?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "explanation": "Четыре малых микроавтобуса дали бы 4 × 12 = 48 мест. Каждая замена малого на большой добавляет 6 мест. Необходимо ещё 60 − 48 = 12 мест, значит, сделаны 12 / 6 = 2 замены: заказали два больших и два малых микроавтобуса."
  },
  {
    "id": "tgo-analytical-1-q05",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-1",
    "prompt": "Какова наименьшая суммарная стоимость пути из A в D, если разрешены только перечисленные односторонние переходы?",
    "options": [
      "8 условных единиц",
      "9 условных единиц",
      "11 условных единиц",
      "7 условных единиц"
    ],
    "answer": 0,
    "explanation": "Возможные пути: A–B–D стоят 4 + 7 = 11; A–C–D стоят 6 + 3 = 9; A–B–C–D стоят 4 + 1 + 3 = 8. Других переходов нет, поэтому минимальная стоимость — 8.",
    "passage": "Переходы и их стоимость:\nA → B: 4; A → C: 6; B → C: 1; B → D: 7; C → D: 3."
  },
  {
    "id": "tgo-analytical-1-q06",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-1",
    "prompt": "Из 36 документов 18 помечены как срочные, 20 уже проверены, причём 11 документов одновременно срочные и проверенные. Сколько срочных документов ещё не проверено?",
    "options": [
      "9",
      "11",
      "7",
      "16"
    ],
    "answer": 2,
    "explanation": "Множество из 18 срочных документов состоит из двух непересекающихся частей: уже проверенные и ещё не проверенные. В первой части 11 документов, значит, во второй 18 − 11 = 7. Общее число проверенных включает и несрочные документы."
  },
  {
    "id": "tgo-analytical-1-q07",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-1",
    "prompt": "В первый день поступило 8 заявок. Во все последующие дни число заявок вычисляется по одному правилу: удвоить число предыдущего дня и вычесть 3. Сколько заявок поступит в четвёртый день?",
    "options": [
      "23",
      "43",
      "46",
      "53"
    ],
    "answer": 1,
    "explanation": "Во второй день поступит 8 × 2 − 3 = 13 заявок, в третий — 13 × 2 − 3 = 23, в четвёртый — 23 × 2 − 3 = 43. Правило применяется к результату предыдущего дня на каждом шаге."
  },
  {
    "id": "tgo-analytical-1-q08",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-1",
    "prompt": "На складе было 7 коробок. В первый день получили 9 и отправили 4 коробки, во второй получили 5 и отправили 8. Других операций не было. Сколько коробок осталось после второго дня?",
    "options": [
      "5",
      "12",
      "17",
      "9"
    ],
    "answer": 3,
    "explanation": "После первого дня осталось 7 + 9 − 4 = 12 коробок. После второго — 12 + 5 − 8 = 9. При подсчёте остатка полученные коробки прибавляют, а отправленные вычитают."
  },
  {
    "id": "tgo-analytical-1-q09",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-1",
    "prompt": "Робот находится в точке (0; 0). Команда P увеличивает первую координату на 2, а вторую — на 1. Команда Q уменьшает первую координату на 1, а вторую увеличивает на 2. В какой точке окажется робот после команд P, Q, P именно в этом порядке?",
    "options": [
      "(4; 3)",
      "(2; 2)",
      "(3; 4)",
      "(5; 1)"
    ],
    "answer": 2,
    "explanation": "После первой P робот будет в (2; 1). После Q: (2 − 1; 1 + 2) = (1; 3). После второй P: (1 + 2; 3 + 1) = (3; 4). Можно также сложить изменения: два раза (2; 1) и один раз (−1; 2)."
  },
  {
    "id": "tgo-analytical-1-q10",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-1",
    "prompt": "Из четырёх модулей A, B, C и D необходимо выбрать ровно три. A и B запрещено выбирать вместе. C выбирают тогда и только тогда, когда выбирают D. Какие два модуля обязательно будут выбраны?",
    "options": [
      "A и B",
      "C и D",
      "A и C",
      "B и D"
    ],
    "answer": 1,
    "explanation": "Без C и D доступны только A и B, а трёх модулей из них получить нельзя. Выбрать лишь один из C и D тоже нельзя по условию «тогда и только тогда». Поэтому нужно выбрать оба C и D и дополнить их одним модулем — A либо B."
  },
  {
    "id": "tgo-analytical-1-q11",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-1",
    "prompt": "Для заказа 120 одинаковых папок сравнивают два предложения. Поставщик X берёт 600 ₸ за доставку и 10 ₸ за папку, поставщик Y — 200 ₸ за доставку и 14 ₸ за папку. Какое предложение дешевле и на сколько?",
    "options": [
      "X дешевле на 80 ₸",
      "Y дешевле на 80 ₸",
      "X дешевле на 400 ₸",
      "Стоимость одинакова"
    ],
    "answer": 0,
    "explanation": "Полная стоимость у X: 600 + 120 × 10 = 1 800 ₸. У Y: 200 + 120 × 14 = 1 880 ₸. Поэтому X дешевле на 1 880 − 1 800 = 80 ₸. Сравнивать нужно итог с доставкой, а не только цену одной папки."
  },
  {
    "id": "tgo-analytical-1-q12",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-1",
    "prompt": "Для собеседований свободны четыре разных временных слота. Трём разным кандидатам назначают по одному слоту; один слот нельзя дать двум кандидатам. Сколько разных расписаний можно составить?",
    "options": [
      "12",
      "16",
      "64",
      "24"
    ],
    "answer": 3,
    "explanation": "Для первого кандидата есть 4 выбора, для второго после этого — 3, для третьего — 2. По правилу произведения получается 4 × 3 × 2 = 24 расписания. Кандидаты различаются, поэтому перестановка их слотов создаёт новое расписание."
  },
  {
    "id": "tgo-analytical-1-q13",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-1",
    "prompt": "Первое техническое обслуживание состоялось во вторник. Затем обслуживание проводят через каждые три дня. В какой день недели состоится четвёртое обслуживание, если вторник считается первым?",
    "options": [
      "В понедельник",
      "В четверг",
      "В пятницу",
      "В воскресенье"
    ],
    "answer": 1,
    "explanation": "Последовательно прибавляем по три дня: первое обслуживание — вторник, второе — пятница, третье — понедельник, четвёртое — четверг. Между первым и четвёртым обслуживанием три интервала, то есть 9 дней, а не 12."
  },
  {
    "id": "tgo-analytical-1-q14",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-1",
    "prompt": "Перевозчик отдельно округляет массу каждого отправления вверх до ближайшего числа, кратного 5 кг; уже кратная 5 масса не меняется. Массы трёх отправлений — 6, 10 и 14 кг. Какую суммарную оплачиваемую массу выставят?",
    "options": [
      "30 кг",
      "40 кг",
      "35 кг",
      "45 кг"
    ],
    "answer": 2,
    "explanation": "Отправление массой 6 кг округляется до 10, 10 кг остаётся 10, а 14 кг округляется до 15. Оплачиваемая сумма равна 10 + 10 + 15 = 35 кг. Округлять общую фактическую массу 30 кг нельзя: правило действует отдельно для каждого отправления."
  },
  {
    "id": "tgo-analytical-1-q15",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-1",
    "prompt": "В трёх учебных группах 10, 15 и 25 человек. Итоговую работу выполнили успешно соответственно 8, 9 и 20 человек. Какой процент всех участников успешно выполнил работу?",
    "options": [
      "74%",
      "70%",
      "76%",
      "80%"
    ],
    "answer": 0,
    "explanation": "Всего участников 10 + 15 + 25 = 50, успешных работ 8 + 9 + 20 = 37. Общая доля равна 37 / 50 × 100% = 74%. Простое среднее процентов отдельных групп неверно, потому что группы имеют разный размер."
  },
  {
    "id": "tgo-analytical-2-q01",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-2",
    "prompt": "Пять презентаций K, L, M, N и O проходят по одной в пяти последовательных слотах. N занимает третий слот; L должна идти сразу перед M; O — раньше K; K не может быть первой. Какой порядок удовлетворяет всем условиям?",
    "options": [
      "O, L, N, M, K",
      "O, K, N, L, M",
      "K, O, N, L, M",
      "L, M, N, K, O"
    ],
    "answer": 1,
    "explanation": "В порядке O, K, N, L, M презентация N третья, L непосредственно перед M, O раньше K, а K вторая. В первом неверном варианте L и M разделены N; во втором K первая и раньше O; в третьем O позже K."
  },
  {
    "id": "tgo-analytical-2-q02",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-2",
    "prompt": "Сколько из 50 участников не посещают ни один из трёх семинаров?",
    "options": [
      "4",
      "12",
      "16",
      "8"
    ],
    "answer": 3,
    "explanation": "Используем включение-исключение. Хотя бы один семинар посещают 24 + 20 + 18 − 10 − 8 − 6 + 4 = 42 человека. Участников всех трёх нужно прибавить обратно, так как они вычтены из каждой пары. Не посещают ни один: 50 − 42 = 8.",
    "passage": "Семинар P посещают 24 человека, S — 20, D — 18.\nP и S посещают 10 человек, P и D — 8, S и D — 6. Числа для пар включают участников всех трёх семинаров. Все три семинара посещают 4 человека. Всего участников — 50."
  },
  {
    "id": "tgo-analytical-2-q03",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-2",
    "prompt": "Из проектов A, B, C, D, E и F выбирают ровно три. Если выбирают A, обязательно выбирают B. C и D несовместимы, как и E и F. Уже известно, что A и C выбраны. Какой проект должен стать третьим?",
    "options": [
      "B",
      "D",
      "E",
      "F"
    ],
    "answer": 0,
    "explanation": "Выбор A требует выбора B. Вместе с уже выбранным C это даёт ровно три проекта: A, B и C. D несовместим с C, а выбор E или F вместо B нарушил бы обязательное условие для A. Набор A, B, C всем условиям соответствует."
  },
  {
    "id": "tgo-analytical-2-q04",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-2",
    "prompt": "Для одного учебного набора нужны 2 синие, 3 белые и 1 чёрная карточка. В запасе 14 синих, 18 белых и 10 чёрных карточек. Какое наибольшее число полных наборов можно собрать?",
    "options": [
      "5",
      "7",
      "6",
      "10"
    ],
    "answer": 2,
    "explanation": "Синих карточек хватит на 14 / 2 = 7 наборов, белых — на 18 / 3 = 6, чёрных — на 10. Все компоненты нужны одновременно, поэтому предел задаёт белый цвет: можно собрать 6 наборов, а для седьмого не хватит белых карточек."
  },
  {
    "id": "tgo-analytical-2-q05",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-2",
    "prompt": "Два маршрута начали отправления от одной станции одновременно в 09:00. Первый отправляется каждые 12 минут, второй — каждые 18 минут, без отклонений. Когда произойдёт их следующее одновременное отправление?",
    "options": [
      "В 09:24",
      "В 09:30",
      "В 09:54",
      "В 09:36"
    ],
    "answer": 3,
    "explanation": "После 09:00 моменты первого маршрута кратны 12 минутам, второго — 18. Наименьшее положительное общее кратное равно 36: это 3 × 12 и 2 × 18. Поэтому следующее совпадение будет через 36 минут, в 09:36."
  },
  {
    "id": "tgo-analytical-2-q06",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-2",
    "prompt": "Отдел X закрыл 10 заявок, на каждую ушло по 2 дня. Отдел Y закрыл 5 заявок, на каждую ушло по 5 дней. Каково среднее время обработки одной заявки для всех 15 закрытых заявок?",
    "options": [
      "2,5 дня",
      "3 дня",
      "3,5 дня",
      "4 дня"
    ],
    "answer": 1,
    "explanation": "Суммарное время обработки всех заявок равно 10 × 2 + 5 × 5 = 45 дней. Делим его на число заявок: 45 / 15 = 3 дня. Усреднять показатели отделов как (2 + 5) / 2 нельзя: они закрыли разное число заявок."
  },
  {
    "id": "tgo-analytical-2-q07",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-2",
    "prompt": "У какого из четырёх сервисов число обращений выросло на наибольший процент относительно первого месяца?",
    "options": [
      "У сервиса B",
      "У сервиса C",
      "У сервиса A",
      "У сервиса D"
    ],
    "answer": 2,
    "explanation": "Относительный прирост A равен (50 − 40) / 40 = 25%; B — 12 / 60 = 20%; C — 16 / 80 = 20%; D — 15 / 100 = 15%. Наибольший процент — у A, хотя наибольший абсолютный прирост — у C.",
    "passage": "Число обращений в первом → втором месяце:\nA: 40 → 50; B: 60 → 72; C: 80 → 96; D: 100 → 115."
  },
  {
    "id": "tgo-analytical-2-q08",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-2",
    "prompt": "Трёхзначный код составляют из цифр 1, 2, 3 и 4 без повторений. Код читается как обычное трёхзначное число и должен быть больше 300. Сколько кодов удовлетворяет условиям?",
    "options": [
      "12",
      "6",
      "8",
      "24"
    ],
    "answer": 0,
    "explanation": "Первая цифра может быть только 3 или 4 — это 2 выбора. После неё для второй цифры остаётся 3 выбора, для третьей — 2. Итого 2 × 3 × 2 = 12 кодов. Повторы цифр запрещены, поэтому число вариантов на каждом шаге уменьшается."
  },
  {
    "id": "tgo-analytical-2-q09",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-2",
    "prompt": "В пятиэтажном здании каждый из пяти отделов занимает отдельный этаж. Информационный отдел на первом этаже, лаборатория на пятом. Архив расположен на два этажа выше приёмной. Оставшийся отдел — бухгалтерия. На каком этаже находится бухгалтерия?",
    "options": [
      "На втором",
      "На третьем",
      "На четвёртом",
      "Определить невозможно"
    ],
    "answer": 1,
    "explanation": "После размещения информационного отдела и лаборатории свободны этажи 2, 3 и 4. Единственная пара свободных этажей с разностью 2 — это 2 и 4. Поэтому приёмная занимает второй, архив — четвёртый, а бухгалтерии остаётся третий этаж."
  },
  {
    "id": "tgo-analytical-2-q10",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-2",
    "prompt": "Из проектов A, B и C должны профинансировать ровно два. Если финансируют A, то обязательно финансируют и B. Проект C уже получил финансирование. Что обязательно следует из правил?",
    "options": [
      "B профинансируют, A — нет",
      "A профинансируют, B — нет",
      "Профинансируют все три проекта",
      "Можно выбрать A или B без ограничений"
    ],
    "answer": 0,
    "explanation": "К C нужно добавить ровно один проект. Если добавить A, придётся добавить и B, и тогда проектов станет три. Поэтому A выбрать нельзя. Единственный допустимый набор из двух проектов — B и C."
  },
  {
    "id": "tgo-analytical-2-q11",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-2",
    "prompt": "Для встречи продолжительностью ровно один час нужно выбрать целый час начала: 09:00, 10:00 и так далее. Встреча должна целиком входить в свободное время каждого участника. Какое самое раннее время начала подходит?",
    "options": [
      "09:00",
      "10:00",
      "12:00",
      "11:00"
    ],
    "answer": 3,
    "explanation": "Общий свободный промежуток начинается не раньше самого позднего начала — 11:00 — и заканчивается не позже самого раннего окончания — 12:00. В нём помещается встреча 11:00–12:00. Начало в 10:00 не подходит Сае, в 12:00 — Айдару.",
    "passage": "Свободное время:\nАйдар — с 09:00 до 12:00.\nБек — с 10:00 до 13:00.\nСая — с 11:00 до 14:00. В момент окончания свободного промежутка участник уже должен быть свободен от встречи."
  },
  {
    "id": "tgo-analytical-2-q12",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-2",
    "prompt": "Какой процент всех изготовленных изделий оказался бракованным?",
    "options": [
      "3%",
      "4%",
      "3⅓%",
      "10%"
    ],
    "answer": 2,
    "explanation": "Всего изготовлено 100 + 150 + 50 = 300 изделий, из них бракованных 4 + 3 + 3 = 10. Общая доля брака равна 10 / 300 × 100% = 3⅓%. Складывать проценты партий или усреднять их без учёта размеров партий нельзя.",
    "passage": "Партия A: 100 изделий, из них 4 бракованных.\nПартия B: 150 изделий, из них 3 бракованных.\nПартия C: 50 изделий, из них 3 бракованных."
  },
  {
    "id": "tgo-analytical-2-q13",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-2",
    "prompt": "На координатной сетке восток увеличивает первую координату, а север — вторую. Курьер стартует в точке (2; 1), проходит 2 клетки на север, 3 на восток, 1 на юг и 4 на запад. Каковы координаты финиша?",
    "options": [
      "(1; 2)",
      "(3; 2)",
      "(1; 4)",
      "(2; 1)"
    ],
    "answer": 0,
    "explanation": "Первая координата меняется на +3 − 4 = −1 и становится 2 − 1 = 1. Вторая меняется на +2 − 1 = +1 и становится 1 + 1 = 2. Следовательно, финиш находится в точке (1; 2)."
  },
  {
    "id": "tgo-analytical-2-q14",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-2",
    "prompt": "В делегацию выбирают одного из трёх аналитиков и одного из четырёх переводчиков. Одна конкретная пара — аналитик Арман и переводчик Жанна — не может работать вместе. Других ограничений нет. Сколько допустимых делегаций из двух человек?",
    "options": [
      "7",
      "10",
      "12",
      "11"
    ],
    "answer": 3,
    "explanation": "Без ограничений было бы 3 × 4 = 12 пар: каждому аналитику соответствует четыре переводчика. Запрещена ровно одна из этих пар — Арман и Жанна. Остаётся 12 − 1 = 11 делегаций. Порядок двух людей значения не имеет, поскольку их роли заданы."
  },
  {
    "id": "tgo-analytical-2-q15",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-2",
    "prompt": "Нужно выбрать ровно два курса суммарной длительностью не более 9 часов. Какой набор даст наибольшую сумму баллов полезности?",
    "options": [
      "A и D",
      "A и B",
      "B и C",
      "B и D"
    ],
    "answer": 1,
    "explanation": "Пара A и B занимает 4 + 5 = 9 часов и даёт 7 + 9 = 16 баллов. A и D дают 15, B и C — тоже 15; A и C — 13, C и D — 14. Пара B и D дала бы 17 баллов, но занимает 10 часов и не допускается. Поэтому максимум среди допустимых пар — 16.",
    "passage": "Курс A: 4 часа, 7 баллов.\nКурс B: 5 часов, 9 баллов.\nКурс C: 3 часа, 6 баллов.\nКурс D: 5 часов, 8 баллов."
  },
  {
    "id": "tgo-analytical-3-q01",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-3",
    "prompt": "Четыре этапа A, B, C и D выполняют по одному, без повторений. A и B должны завершиться раньше C; D должен быть последним. Сколько допустимых порядков выполнения?",
    "options": [
      "4",
      "6",
      "8",
      "2"
    ],
    "answer": 3,
    "explanation": "Последний этап — D. Среди первых трёх C должен идти после обоих A и B, значит, C занимает третье место. На первых двух местах можно расположить A и B двумя способами: A, B или B, A. Получаем A–B–C–D и B–A–C–D."
  },
  {
    "id": "tgo-analytical-3-q02",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-3",
    "prompt": "Каждую встречу нужно провести целиком в одной комнате. Комната освобождается ровно в момент окончания встречи; следующая может начаться в тот же момент. Какое минимальное число комнат необходимо для указанного расписания?",
    "options": [
      "2",
      "4",
      "3",
      "5"
    ],
    "answer": 2,
    "explanation": "С 10:30 до 10:45 одновременно идут встречи B, C и D, поэтому комнат должно быть не меньше трёх. Трёх достаточно: A и затем C можно провести в первой комнате, B — во второй, D — в третьей. Следовательно, минимум равен трём.",
    "passage": "Встреча A: 09:00–10:00.\nВстреча B: 09:30–10:45.\nВстреча C: 10:00–11:00.\nВстреча D: 10:30–11:30."
  },
  {
    "id": "tgo-analytical-3-q03",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-3",
    "prompt": "Все 72 заявки распределены без пересечений на три категории. В категории X заявок вдвое больше, чем в Y, а в Z — на 8 больше, чем в Y. Сколько заявок в категории X?",
    "options": [
      "16",
      "32",
      "24",
      "36"
    ],
    "answer": 1,
    "explanation": "Пусть в Y находится y заявок. Тогда в X их 2y, в Z — y + 8. Сумма равна 2y + y + y + 8 = 72, откуда 4y = 64 и y = 16. Поэтому X содержит 2 × 16 = 32 заявки; проверка: 32 + 16 + 24 = 72."
  },
  {
    "id": "tgo-analytical-3-q04",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-3",
    "prompt": "Есть три независимых задания длительностью по 4 часа. Каждое задание должен целиком выполнить один сотрудник; делить его между сотрудниками нельзя. У каждого сотрудника есть ровно 6 рабочих часов. Какое минимальное число сотрудников позволит выполнить все задания?",
    "options": [
      "3",
      "2",
      "4",
      "6"
    ],
    "answer": 0,
    "explanation": "Один сотрудник не может выполнить два задания: для этого потребовалось бы 8 часов, а есть только 6. Поэтому на каждое из трёх заданий нужен отдельный сотрудник — всего трое. Двух недостаточно, хотя их суммарные 12 часов равны общей трудоёмкости: задания неделимы."
  },
  {
    "id": "tgo-analytical-3-q05",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-3",
    "prompt": "В группе 4 аналитика и 2 редактора. Случайно выбирают двух разных людей, причём все пары равновероятны. Какова вероятность того, что в выбранной паре будет ровно один аналитик и ровно один редактор?",
    "options": [
      "4/15",
      "2/3",
      "8/15",
      "1/2"
    ],
    "answer": 2,
    "explanation": "Всего неупорядоченных пар из шести людей: 6 × 5 / 2 = 15. Подходящие пары образуются выбором одного из четырёх аналитиков и одного из двух редакторов: 4 × 2 = 8. Вероятность равна 8/15. Выбор двух аналитиков или двух редакторов не подходит."
  },
  {
    "id": "tgo-analytical-3-q06",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-3",
    "prompt": "В двух архивах число папок относится как 5 : 3. Когда из первого архива передали 12 папок во второй, папок стало поровну. Сколько папок было в двух архивах вместе?",
    "options": [
      "48",
      "72",
      "120",
      "96"
    ],
    "answer": 3,
    "explanation": "Передача 12 папок уменьшает разность на 24: первый архив теряет 12, второй приобретает 12. Значит, исходная разность составляла 24. В отношении 5 : 3 это две доли, поэтому одна доля равна 12 папкам. Всего восемь долей: 8 × 12 = 96."
  },
  {
    "id": "tgo-analytical-3-q07",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-3",
    "prompt": "Алия, Бек и Дана проводят по одной демонстрации в понедельник, вторник и среду — в разные дни. Каждый использует одно из разных приложений X, Y и Z. Алия выступает во вторник, Бек не может выступать в понедельник. Приложение X демонстрируют в среду, а Дана использует Y. Какое приложение использует Алия?",
    "options": [
      "Z",
      "X",
      "Y",
      "Определить невозможно"
    ],
    "answer": 0,
    "explanation": "Вторник занят Алией. Бек не может в понедельник, поэтому выступает в среду и демонстрирует X. Дане остаётся понедельник и приложение Y, как и указано. Единственное оставшееся приложение для Алии — Z."
  },
  {
    "id": "tgo-analytical-3-q08",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-3",
    "prompt": "Автозаказ активируется, когда запас после операции становится меньше 8 единиц, и отменяется, когда запас после операции достигает 8 или больше. Изначально запас равен 10, автозаказ неактивен. Затем последовательно выдали 4 единицы, получили 3 и выдали 2. Каково итоговое состояние?",
    "options": [
      "7 единиц, автозаказ отменён",
      "7 единиц, автозаказ активен",
      "9 единиц, автозаказ активен",
      "9 единиц, автозаказ отменён"
    ],
    "answer": 1,
    "explanation": "После выдачи 4 остаётся 6 — автозаказ включается. После получения 3 запас становится 9 — автозаказ отменяется. После последней выдачи 2 остаётся 7, что меньше 8, поэтому заказ снова активируется. Нужно учитывать все операции в заданном порядке."
  },
  {
    "id": "tgo-analytical-3-q09",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-3",
    "prompt": "Трёхзначный номер делится на 5. Первая цифра вдвое больше второй, а сумма всех трёх цифр равна 11. Какой это номер?",
    "options": [
      "245",
      "420",
      "635",
      "425"
    ],
    "answer": 3,
    "explanation": "Последняя цифра равна 0 или 5. Обозначим вторую цифру b, тогда первая — 2b. Если последняя 0, то 3b = 11, целой цифры b нет. Если последняя 5, то 3b + 5 = 11, поэтому b = 2, первая цифра 4. Номер — 425; сумма цифр 4 + 2 + 5 = 11."
  },
  {
    "id": "tgo-analytical-3-q10",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-3",
    "prompt": "По проекту A выполнены 3/4 из 40 задач, по B — 2/3 из 30, по C — 4/5 из 25. Сколько задач осталось выполнить по всем трём проектам вместе?",
    "options": [
      "25",
      "20",
      "30",
      "70"
    ],
    "answer": 0,
    "explanation": "В A выполнено 30 задач и осталось 10; в B выполнено 20 и осталось 10; в C выполнено 20 и осталось 5. Итого остаётся 10 + 10 + 5 = 25 задач. Сумма 70 относится к выполненным задачам, а не к оставшимся."
  },
  {
    "id": "tgo-analytical-3-q11",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-3",
    "prompt": "Тариф X стоит 900 ₸ фиксированно плюс 50 ₸ за каждую операцию. Тариф Y не имеет фиксированной платы и стоит 80 ₸ за операцию. При каком наименьшем целом положительном числе операций X станет строго дешевле Y?",
    "options": [
      "29",
      "30",
      "31",
      "32"
    ],
    "answer": 2,
    "explanation": "Условие X дешевле Y записывается как 900 + 50n < 80n. Получаем 900 < 30n, то есть n > 30. При 30 операциях тарифы стоят одинаково — по 2 400 ₸. Первое целое число со строгим преимуществом X — 31."
  },
  {
    "id": "tgo-analytical-3-q12",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-3",
    "prompt": "Можно выбрать любое подмножество модулей P, Q, R и S. Выбор P требует Q, выбор Q требует R, а S нельзя выбирать вместе с R. Какое наибольшее число модулей можно выбрать одновременно?",
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "answer": 1,
    "explanation": "Набор P, Q, R содержит три модуля и удовлетворяет требованиям. Выбрать все четыре нельзя, поскольку тогда R окажется вместе с S. Следовательно, верхняя граница — три, и допустимый набор из трёх существует: максимум равен трём."
  },
  {
    "id": "tgo-analytical-3-q13",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-3",
    "prompt": "Какую долю всех поданных заявок составляют принятые заявки?",
    "options": [
      "3/5",
      "2/3",
      "7/11",
      "7/10"
    ],
    "answer": 2,
    "explanation": "У X принято 18 заявок из 30. У Y принято 25 − 8 = 17 из 25. Всего принято 18 + 17 = 35 из 30 + 25 = 55 заявок. Доля 35/55 сокращается до 7/11. Усреднять доли двух групп без учёта числа заявок нельзя.",
    "passage": "Группа X: принято 18, отклонено 12.\nГруппа Y: всего подано 25, отклонено 8. Каждая поданная заявка либо принята, либо отклонена; других исходов нет."
  },
  {
    "id": "tgo-analytical-3-q14",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-3",
    "prompt": "Первый элемент последовательности равен 5. Чтобы получить элемент с чётным номером, предыдущий умножают на 2; чтобы получить элемент с нечётным номером, начиная с третьего, из предыдущего вычитают 3. Чему равен шестой элемент?",
    "options": [
      "11",
      "22",
      "14",
      "25"
    ],
    "answer": 1,
    "explanation": "Второй элемент равен 5 × 2 = 10; третий — 10 − 3 = 7; четвёртый — 7 × 2 = 14; пятый — 14 − 3 = 11; шестой — 11 × 2 = 22. Правило выбирается по номеру нового элемента, а не по чётности его значения."
  },
  {
    "id": "tgo-analytical-3-q15",
    "subject": "tgo",
    "topic": "analytical",
    "testId": "tgo-analytical-3",
    "prompt": "На конверте стоит ровно одно число от 1 до 4. О нём сделаны три высказывания: «Число чётное», «Число больше 2», «Число равно 1». Известно, что ровно два высказывания истинны. Какое число стоит на конверте?",
    "options": [
      "4",
      "1",
      "2",
      "3"
    ],
    "answer": 0,
    "explanation": "Для 1 истинно только третье высказывание; для 2 — только первое; для 3 — только второе. Для 4 истинны первое и второе, а третье ложно. Поэтому ровно две истины получаются только при числе 4."
  }
);
