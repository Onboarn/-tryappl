const quizData = [
    {
        question: "1. В каком году Гомель впервые упоминается в письменных источниках (Ипатьевской летописи)?",
        answers: ["А) 988 г.", "Б) 1142 г.", "В) 1237 г.", "Г) 1335 г."],
        correct: 1
    },
    {
        question: "2. Какая река протекает через Гомель и является главной водной артерией города?",
        answers: [
            "А) Березина",
            "Б) Припять",
            "В) Сож",
            "Г) Днепр"
        ],
        correct: 2
    },
    {
        question: "3. Какое животное изображено на официальном гербе Гомеля?",
        answers: [" А) Бурый медведь", "Б) Рысь", "В) Волк", "Г) Зубр"],
        correct: 1
    },
    {
        question: "4. Кому российская императрица Екатерина II в 1775 году пожаловала «местечко Гомель» в качестве графства?",
        answers: [
            "А) Князю Потёмкину",
            "Б) Графу Петру Румянцеву-Задунайскому",
            "В) Князю Паскевичу",
            "Г) Генералу Суворову"
        ],
        correct: 1
    },
    {
        question: "5. Кто был основателем знаменитого дворцово-паркового ансамбля в Гомеле в конце XVIII века?",
        answers: [
            "А) Пётр Румянцев-Задунайский",
            "Б) Ирина Паскевич",
            "В) Николай Румянцев",
            "Г) Фёдор Голицын"
        ],
        correct: 0
    },
    {
        question: "6. В каком году Гомель окончательно вошел в состав БССР (Белорусской ССР)?",
        answers: [
            "А) 1919 г.",
            "Б) 1926 г.",
            "В) 1939 г.",
            "Г) 1944 г."
        ],
        correct: 1
    },
    {
        question: "7. Как назывался Гомель в древности в некоторых исторических документах и летописях (назовите один из вариантов)?",
        answers: [
            "А) Гомей / Гамий",
            "Б) Городец",
            "В) Кричев",
            "Г) Радошковичи"
        ],
        correct: 0
    },
    {
        question: "8. Какая женщина из рода владельцев Гомеля прославилась благотворительностью и тем, что впервые перевела на французский язык роман Л. Толстого «Война и мир»?",
        answers: [
            "А) Ирина Ивановна Паскевич",
            "Б) Мария Романовna Воронцова",
            "В) Екатерина Голицына",
            "Г) Варвара Долгорукова"
        ],
        correct: 0
    },
    {
        question: "9. Какое место по численности населения занимает Гомель среди городов Беларуси?",
        answers: [
            "А) Первое",
            "Б) Второе",
            "В) Третье",
            "Г) Четвертое"
        ],
        correct: 1
    },
    {
        question: "10. Какое культовое православное сооружение является главным кафедральным собором Гомеля?",
        answers: [
            "А) Свято-Троицкий собор",
            "Б) Петропавловский собор (Петропавловский собор)",
            "В) Никольский монастырь",
            "Г) Успенская церковь"
        ],
        correct: 1
    }
];

const questionEl = document.getElementById('question');
const answerListEl = document.getElementById('answer-list');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    answerListEl.innerHTML = '';

    currentQuizData.answers.forEach((ansText, idx) => {
        const li = document.createElement('li');

        li.innerHTML = `
            <input type="radio" name="answer" id="ans${idx}" value="${idx}">
            <label for="ans${idx}">${ansText}</label>
        `;

        answerListEl.appendChild(li);
    });
}

function getSelected() {
    const checked = document.querySelector('input[name="answer"]:checked');
    return checked ? Number(checked.value) : undefined;
}

function deselectAnswers() {
    document.querySelectorAll('input[name="answer"]').forEach(el => el.checked = false);
    document.querySelectorAll('#answer-list li').forEach(li => li.classList.remove('selected'));
}

answerListEl.addEventListener('change', function (e) {
    if (e.target.name === 'answer') {
        document.querySelectorAll('#answer-list li').forEach(li => {
            li.classList.remove('selected');
        });
        e.target.closest('li').classList.add('selected');
    }
});

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer === undefined) {
        alert("Пожалуйста, выберите вариант ответа!");
        return;
    }

    if (answer === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        document.getElementById('quiz').innerHTML = `
        <div class="quiz-complete">
            <h2>Вы ответили на ${score} из ${quizData.length} вопросов!</h2>
            <button class="restart-btn" onclick="location.reload()">Пройти заново</button>
        </div>
            
        
        `;
    }
});
const hotspots = [
    {
        id: "vokz",
        x: 12,
        y: 29.5,
        width: 4,
        height: 4,
        rotate: -7,
        left: {
            title: "Вокзал",
            summary1: "История",
            text: "Первое упоминание «…об открытии правильного движения на участке Ландварово-Роменской железной дороги от Бобруйска до Гомеля протяженностью 141, 81 версты товарных поездов с 16 ноября 1873 года, а пассажирских поездов с 17 ноября 1873 года» содержится в Уведомлении № 320 от 20 ноября 1873 года сенатора Селифонтова военному министру с рассылкой копий этого документа в адрес министра внутренних дел и министра финансов.С этой даты началось строительство первого каменного здания пассажирского вокзала станции Гомель.",
            summary2: "Фото",
            media: [
                { type: "image", src: "image/vokz.jpg" },

            ]
        },
        right: {
            title: "Вокзал",
            summary1: "Сейчиас",
            text: "Вокзал Гомель-Пассажирский является главным железнодорожным вокзалом города Гомеля и входящим в состав Гомельского отделения Белорусской железной дороги. Он включает в себя пассажирский парк и грузовой парк А, а также остановочные пункты Гомель-Нечётный и Гомель-Чётный. Вокзал был построен в 1890-е годы и реконструирован после Великой Отечественной войны в 1946 году. ",
            summary2: "Современные фото",
            media: [
                { type: "image", src: "image/vokznow.png" }
            ]
        }
    },
    {
        id: "lenina",
        x: 43,
        y: 52,
        width: 66.1,
        height: 2.5,
        rotate: 31.7,
        left: {
            title: "Улица Замковая",
            summary1: "История",
            text: "Замковая улица застраивалась медленно, что было обусловлено тем, что она никуда не вела и заканчивалась у Горелого болота. Была нанесена на план Гомеля в 1783 году. Первое название произошло от замка, находившегося на улице до 1785 года. В то время улица была длиннее и проходила за нынешнюю Привокзальную площадь. При прокладке Либаво-Роменской железной дороги в 1873 году эта часть улицы была отрезана, и она получила другое название. Строительство железной дороги способствовало быстрой застройке близлежащей территории.",
            summary2: "Фото",
            media: [
                { type: "image", src: "image/lenina.jpg" },

            ]
        },
        right: {
            title: "Проспект Ленина",
            summary1: "Сейчас",
            text: "Проспект Ленина в Гомеле является одной из старейших улиц города и протянулся от площади Ленина до Привокзальной площади. Улица имеет историческое значение и была переименована в несколько раз. В историческом контексте проспект Ленина стал важной транспортной магистралей и включал в себя различные здания, такие как цирк-театр и театр. В настоящее время проспект Ленина продолжает служить центральным маршрутом в Гомеле, обеспечивая связь между различными районами города.",
            summary2: "Фото",
            media: [
                { type: "image", src: "image/leninanow.jpg" },

            ]
        }
    },
    {
        id: "kirava",
        x: 48.7,
        y: 30,
        width: 54,
        height: 1.1,
        rotate: 66,
        left: {
            title: "Улица Могилёвская",
            summary1: "История",
            text: "Застройка улицы началась в XVIII веке.  В начале XX века улица была застроена 1—2-х этажными кирпичными и деревянными домами. В самом начале улицы в то время была возведена еврейская синагога.  С развитием города, въездом в Гомель с северного направления, постепенно стала улица Румянцевская (Советская), но улица Могилевская не утратила своего значения оставаясь ее грузовой артерией. В конце XIX начале XX веков на улице размещалось значительное производство по изготовлению красок – фабрика Горловского, а также маслобойня Яшханова. В 1898 году на Могилевской, по проекту арх. С.Д. Шабуневского было построено здание Александровской мужской гимназии (БелГУТ), названной так в честь императора Александра II. На Могилевской располагались и другие учебные заведения – Приходское ремесленное училище и Коммерческое училище Литвинова и Струмина. Улица имела булыжную мостовую, освещение, а проезжая часть была отгорожена дорожными столбиками. В 1934 году переименована в честь погибшего партийного деятеля СССР С. М. Кирова.",
            summary2: "Фото",
            media: [
                { type: "image", src: "image/kirava.jpg" },

            ]
        },
        right: {
            title: "Улица Кирова",
            summary1: "Сейчас",
            text: "По мнению некоторых историков, улица сформировалась вдоль старой дороги, ведущей на север, которая начиналась(или проходила) за городскими укреплениями у Могилевской брамы(времена Гомельского замка).Застройка улицы началась в XVIII веке.а",
            summary2: "Современные фото",
            media: [
                { type: "image", src: "image/kiravanow.png" }
            ]
        }
    },
    {
        id: "sovetc",
        x: 63,
        y: 31,
        width: 56,
        height: 1.1,
        rotate: 67,
        left: {
            title: "Улица Пробойная",
            summary1: "История",
            text: "В начале XIX столетия была принята новая планировочная система Гомеля. Согласно ей Гомель должен был развиваться вокруг трёх основных улиц, одной из которых была Пробойная (первоначальное название Советской улицы). Такое название улица получила в связи с тем, что образовываясь в центре Гомеля, она пересекала («пробивала») весь город, и плавно перетекала в дорогу на Могилев. В 1861 году улица была переименована в Румянцевскую, в честь бывших владельцев Гомеля. В 1880 году в начале улицы было сооружено здание Городской думы. В начале XX века в начале Советской улицы также находились Русско-Азиатский банк, Виленский коммерческий банк и некоторые прочие коммерческо-административные здания. После Октябрьской революции (6 мая 1919 года) улица была в очередной раз переименована (в Советскую).",
            summary2: "Фото",
            media: [
                { type: "image", src: "image/sovet.jpg" },

            ]
        },
        right: {
            title: "Улица Советская",
            summary1: "Сейчас",
            text: "Улица Советская в Гомеле — это одна из главных улиц города, пересекающая Центральный и Железнодорожный районы. Она начинается от площади Ленина и заканчивается у городской черты в районе посёлка Красный Октябрь. Улица была переименована в советские времена, что подчеркивает её важность как транспортной и архитектурной оси города.",
            summary2: "Современные фото",
            media: [
                { type: "image", src: "image/sovetnow.jpg" }
            ]
        }
    },
    {
        id: "prol",
        x: 65,
        y: 84,
        width: 31,
        height: 1.7,
        rotate: -58.5,
        left: {
            title: "Улица Фельдмаршальская",
            summary1: "История",
            text: "Улица была известна как Фельдмаршальская до 1920 года и является одной из старейших улиц города, указана на его карте начала XIX века. В низине Фельдмаршальской и Замковой, известном как Кагальный ров, обитали беднейшие еврейские поселенцы.",
            summary2: "Фото",
            media: [
                { type: "image", src: "image/pral.png" },

            ]
        },
        right: {
            title: "Улица Пролетарская",
            summary1: "Сейчас",
            text: "Улица Пролетарская в Гомеле является одной из старейших улиц города, начиная от центральной площади Ленина и заканчивая у улицы Фрунзе. Она протянулась 1150 метров и пересекает улицу Гагарина. Улица была известна как Фельдмаршальская до 1920 года.",
            summary2: "Современные фото",
            media: [
                { type: "image", src: "image/prolnow.jpg" }
            ]
        }
    },
    {
        id: "pushkina",
        x: 76,
        y: 38.5,
        width: 16,
        height: 1.1,
        rotate: 35,
        left: {
            title: "Улица Липовая",
            summary1: "История",
            text: "Улица Липовая (Пушкина) была третьим «лучом», помимо улиц Экономической (барона Нолькена, Ланге) и Боярской (Миллионной, Билецкого), направлявшимся от малой площади перед жилым домом Николая Петровича Румянцева в сторону строившегося вдоль главной городской магистрали — улицы Пробойной — города. Липовая улица была длиннее двух других «лучей» (Экономической и Боярской улиц) и выходила к Пробойной улице в районе городского сада, известного ныне как Пионерский парк. В 1937 году Липовой улице дали имя Александра Сергеевича Пушкина (1799-1837) в связи со 100-летием со дня трагической смерти великого русского поэта.",
            summary2: "Фото",
            media: [
                { type: "image", src: "image/pushkinalate.png" },

            ]
        },
        right: {
            title: "Улица Пушкина",
            summary1: "Сейчас",
            text: "Улица Пушкина в Гомеле является одной из наиболее благоустроенных улиц города. Она протянулась 460 метров и примыкает к нескольким другим улицам, такими как Первомайская, Волотовская, Крестьянская и Артёма. В центральной части улицы расположены памятники архитектуры, включая городской особняк в стиле ампир 1-й половины 19 века и 3-этажный жилой дом с чертами конструктивизма, построенный в 1927 году.",
            summary2: "Современные фото",
            media: [
                { type: "image", src: "image/ushkina.png" }
            ]
        }
    },

    {
        id: "prac",
        x: 72.5,
        y: 59,
        width: 10,
        height: 1.1,
        rotate: -23,
        left: {
            title: "Улица Первомайская",
            summary1: "История",
            text: "Базарная улица выполняла важную функцию связи синагоги и главной площади – тоже Базарной. Переименование улицы произошло однажды: в 1923 году, после революции, Базарная стала Трудовой. И чтобы обосновать и закрепить это название, на постаменте была установлена большая статуя рабочего, символизировавшая значение труда человека. Находилась она напротив синагоги, а та, в свою очередь, на месте нынешнего дорожно-строительного колледжа.",
            summary2: "Фото",
            media: [
                { type: "image", src: "image/truf.png" },

            ]
        },
        right: {
            title: "Улица Трудовая",
            summary1: "Сейчас",
            text: "Улица Трудовая в Гомеле — это одна из старейших улиц города, расположенная в Центральном районе и связывающая улицу Советскую с площадью Труда.",
            summary2: "Современные фото",
            media: [
                { type: "image", src: "image/trud.png" }
            ]
        }
    },
    {
        id: "plosha",
        x: 73,
        y: 67,
        width: 7,
        height: 3,
        rotate: -60,
        left: {
            title: "Площадь Базарная",
            summary1: "История",
            text: "Площадь создана в конце XVIII — начале XIX века. Прежде называлась Базарной, была известна также под названием Торг, так как здесь три раза в неделю проходил большой торг. Крестьяне привозили сюда живность, сельскохозяйственные продукты, разные кустарные изделия. От неё 3 лучами расходились улицы Румянцевская (ныне Советская), Замковая (ныне проспект Ленина) и Фельдмаршальская (ныне Пролетарская). Доминантой композиции был дворец князя Паскевича, который вместе с Петропавловским собором определял силуэт застройки центра города.",
            summary2: "Фото",
            media: [
                { type: "image", src: "image/plosha.png" },

            ]
        },
        right: {
            title: "Площадь Ленина",
            summary1: "Сейчас",
            text: "Площадь Ленина — это центральная площадь Гомеля, основной архитектурный ансамбль, формирующий пространственную композицию административно-общественного центра города. Она была создана в конце XVIII — начале XIX века и носит имя Великого Коминтерна. Площадь была известна как Базарная и Торг, так как здесь три раза в неделю проходил большой торг.",
            summary2: "Современные фото",
            media: [
                { type: "image", src: "image/ploshanow.jpg" }
            ]
        }
    },
    {
        id: "bil",
        x: 80.5,
        y: 52,
        width: 9,
        height: 1.1,
        rotate: -54,


        left: {
            title: "Улица Миллионная",
            summary1: "История",
            text: "Первые каменные дома на улице стали появляться в начале 19-го столетия. Первое её известное название – Боярская, по причине близости Боярского спуска. Но со временем стала значиться как Миллионная, и здесь объяснение куда интересней. Горожане полагали, что где-то на этой улице граф Румянцев хранил свои несметные сокровища. Убедить гомельчан в обратном было сложно, и улица превратилась в Миллионную. С приходом большевиков, 28 апреля 1919 года, она получила новое название: ул.Билецкого.",
        },
        right: {
            title: "Улица Билецкого",
            summary1: "Сейчас",
            text: "Улица Билецкого в Гомеле, ранее известная как Миллионная, была застроена в начале 19-го века и стала символом города. Она была названа в честь Николая Станиславовича Билецкого, белорусского советского журналиста и участника борьбы за утверждение Советской власти в Гомеле.",
            summary2: "Современные фото",
            media: [
                { type: "image", src: "image/Bil.png" }
            ]
        }
    },

];
const layer = document.querySelector(".hotspot-layer");
const overlay = document.querySelector(".popup-overlay");
const popup1 = document.querySelector(".map-popup1");
const popup2 = document.querySelector(".map-popup2");

let activeId = null;

function getEls(popup) {
    return {
        title: popup.querySelector(".popup-title"),
        text: popup.querySelector(".popup-text"),
        close: popup.querySelector(".popup-close"),
        details1: popup.querySelector(".popup-details1"),
        details2: popup.querySelector(".popup-details2"),
        summary1: popup.querySelector(".popup-summary1"),
        summary2: popup.querySelector(".popup-summary2"),
        media: popup.querySelector(".popup-media"),
    };
}

function clearMedia(container) {
    if (!container) return;
    container.querySelectorAll("video").forEach(v => {
        v.pause();
        v.removeAttribute("src");
        v.load();
    });
    container.innerHTML = "";
}

function stopAllMedia() {
    clearMedia(getEls(popup1).media);
    clearMedia(getEls(popup2).media);
}

function renderMarkers() {
    if (!layer) return;
    layer.innerHTML = "";

    hotspots.forEach((spot) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "marker street-zone";
        btn.dataset.id = spot.id;
        btn.setAttribute("aria-label", spot.title || "Метка");

        btn.style.left = spot.x + "%";
        btn.style.top = spot.y + "%";
        btn.style.width = spot.width + "%";
        btn.style.height = spot.height + "%";
        btn.style.transform = `translate(-50%, -50%) rotate(${spot.rotate || 0}deg)`;
        btn.style.background = "transparent";
        btn.style.border = "none";
        btn.style.padding = "0";
        btn.style.cursor = "pointer";

        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            openPopup(spot.id);
        });

        layer.appendChild(btn);
    });
}

function getSpot(id) {
    return hotspots.find((s) => s.id === id);
}

function fillPopup(popup, data, title) {
    const el = getEls(popup);

    if (el.title) {
        el.title.textContent = data.title || "Информация";
    }


    if (el.summary1) el.summary1.textContent = data.summary1 || "Подробнее";
    if (el.text) el.text.textContent = data.text || "";
    if (el.details1) {
        el.details1.open = false;
        el.details1.hidden = !data.text;
    }


    if (el.summary2) el.summary2.textContent = data.summary2 || "Медиа";
    clearMedia(el.media);

    const hasMedia = Array.isArray(data.media) && data.media.length > 0;

    if (hasMedia) {
        data.media.forEach(item => {
            if (item.type === "image") {
                const img = document.createElement("img");
                img.src = item.src;
                img.className = "popup-media-item";
                img.alt = "";
                el.media.appendChild(img);
            } else if (item.type === "video") {
                const video = document.createElement("video");
                video.src = item.src;
                video.className = "popup-media-item";
                video.controls = true;
                video.playsInline = true;
                el.media.appendChild(video);
            }
        });
        el.details2.hidden = false;
    } else {
        el.details2.hidden = true;
    }

    if (el.details2) el.details2.open = false;
}

function openPopup(id) {
    const spot = getSpot(id);
    if (!spot || !popup1 || !popup2) return;

    if (activeId === id) {
        closePopup();
        return;
    }

    activeId = id;
    stopAllMedia();

    fillPopup(popup1, spot.left || {}, spot.title);
    fillPopup(popup2, spot.right || {}, spot.title);

    popup1.hidden = false;
    popup2.hidden = false;
    if (overlay) overlay.hidden = false;

    setTimeout(() => placePopups(id), 0);
    highlightActiveMarker();
}

function isMobile() {
    return window.innerWidth < 900;
}

function placePopups(id) {
    if (isMobile()) {
        [popup1, popup2].forEach((p, i) => {
            p.style.left = "50%";
            p.style.right = "auto";
            p.style.top = "auto";
            p.style.bottom = (16 + i * 14) + "px";
            p.style.transform = "translateX(-50%)";
            p.style.width = "calc(100vw - 24px)";
        });
        return;
    }

    const marker = layer.querySelector(`.marker[data-id="${id}"]`);
    if (!marker) return;

    const r = marker.getBoundingClientRect();
    const gap = 18;
    const w = 360;

    let leftX = r.left - gap - w;
    if (leftX < 10) leftX = 10;

    let rightX = r.right + gap;
    if (rightX + w > window.innerWidth - 10) {
        rightX = window.innerWidth - w - 10;
    }

    let top = r.top + r.height / 2 - 180;
    if (top < 10) top = 10;
    if (top + 400 > window.innerHeight - 10) {
        top = window.innerHeight - 410;
    }

    [popup1, popup2].forEach((p) => {
        p.style.transform = "";
        p.style.right = "auto";
        p.style.bottom = "auto";
        p.style.width = w + "px";
    });

    popup1.style.left = leftX + "px";
    popup1.style.top = top + "px";

    popup2.style.left = rightX + "px";
    popup2.style.top = top + "px";
}

function closePopup() {
    activeId = null;
    popup1.hidden = true;
    popup2.hidden = true;
    if (overlay) overlay.hidden = true;
    stopAllMedia();
    highlightActiveMarker();
}

function highlightActiveMarker() {
    if (!layer) return;
    layer.querySelectorAll(".marker").forEach((btn) => {
        const active = btn.dataset.id === activeId;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-expanded", String(active));
    });
}

[popup1, popup2].forEach((popup) => {
    const el = getEls(popup);

    if (el.close) {
        el.close.addEventListener("click", (e) => {
            e.stopPropagation();
            closePopup();
        });
    }

    popup.addEventListener("click", (e) => e.stopPropagation());

    if (el.details1) {
        el.details1.addEventListener("toggle", () => {
            if (activeId) placePopups(activeId);
        });
    }
    if (el.details2) {
        el.details2.addEventListener("toggle", () => {
            if (activeId) placePopups(activeId);
        });
    }
});

if (overlay) {
    overlay.addEventListener("click", closePopup);
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePopup();
});

window.addEventListener("resize", () => {
    if (activeId) placePopups(activeId);
});

renderMarkers();