'use strict';

/** @type {import('sequelize').QueryInterface} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Items',
      [
        {
          title: 'Радиостанция речная',
          description:
            'Радиостанция речная Saracom. В рабочем состоянии. Диапазон частот  300.0125-300.5125 МГц и 336.0125-336.5125 МГц.\nНапряжение питания 12В. Без блока питания.',
          price: 5000,
          address: 'Москва, Ленинградское ш., 51',
          subcategoryId: 3,
          userId: 1,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/telefony/ratsiya',
          count: 7,
          favorites: 1,
        },
        {
          title: 'Плёночная кинокамера Canon Zoom 8',
          description:
            'Японская кинокамера Canon Zoom 8\nСама кинокамера рабочая, но не работает экспонометр.\nВ комплекте кофр',
          price: 3000,
          address: 'Москва, ул. Усиевича, 21',
          subcategoryId: 8,
          userId: 1,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/audio_i_video/videokamery',
          count: 2,
          favorites: 1,
        },
        {
          title: 'Пейджер',
          description:
            'пейджер - электроника раритет из 90 годов,связь держать не получится, но специалисты его перепрошивают, в данный момент он показывает время: год -месяц-число, можно использовать как часы.',
          price: 1000,
          address: 'Калининградская область, Калининград, ул. Багратиона',
          subcategoryId: 1,
          userId: 1,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/telefony/mobile',
          count: 3,
          favorites: 1,
        },
        {
          title: 'Тележка для мороженого',
          description:
            'Я не продаю мертвый прилавок. Я продаю живой печатающий деньги станок! Надежный и безотказный , как автомат Калашникова! Лучше, чем BENTLEY! Рассрочка при серьезном намерении без переплат на 12 месяцев или кредит на три года под минимальный процент.',
          price: 999999,
          address: 'Москва, Электрозаводская ул., 21',
          subcategoryId: 4,
          userId: 1,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/telefony/aksessuari',
          count: 1,
          favorites: 1,
        },
        {
          title: 'Телевизор рекорд',
          description: 'Работоспособность неизвестна',
          price: 2000,
          address: 'Московская область, г.о. Истра',
          subcategoryId: 5,
          userId: 1,
          features: '{"condition":"used"}',
          isActive: false,
          url: '/audio_i_video/televizory',
          count: 4,
          favorites: 1,
        },
        {
          title: 'Телефон судовой корабельный каютный так-47 редкий',
          description:
            'Телефонный аппарат судовой корабельный каютный ТАК-47 редкий телефон СССР Пермский телефонный завод \nСостояние хорошее',
          price: 3900,
          address: 'Москва, Русаковская ул., 1',
          subcategoryId: 2,
          userId: 1,
          features: '{"condition":"used"}',
          isActive: false,
          url: '/telefony/statsionarnye_telefoni',
          count: 0,
          favorites: 1,
        },
        {
          title: 'Граммофон',
          description:
            'Работающий патефон, украсит любой интерьер, 3 пластинки СССР в подарок Производство Индия, сделан в 90 ые года, торг рассматриваю',
          price: 20000,
          address: 'Москва, Павелецкая пл.',
          subcategoryId: 6,
          userId: 1,
          features: '{"condition":"used"}',
          isActive: false,
          url: '/audio_i_video/akustika_kolonki',
          count: 1,
          favorites: 1,
        },
        {
          title: 'Редкий ретро компьютер 286 процессор',
          description:
            'Отличный ретро винтажный компьютер на 80286 процессоре, EGA видеокартой, подойдет для музея или коллекции, конца 80-х годов, работает, включается, картинку дает, все детали родные! Могу отправить авито доставкой.',
          price: 6500,
          address: 'Кировская область, Киров, Театральная пл.',
          subcategoryId: 19,
          userId: 2,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/kompyutery/sistemnye_bloki',
          count: 3,
          favorites: 2,
        },
        {
          title: 'Перфокарты для эвм СССР',
          description:
            'Советские Перфокарты для ЭВМ - носитель информации на картоне. 10 шт / 100р.',
          price: 100,
          address: 'Москва, Замоскворецкая линия',
          subcategoryId: 13,
          userId: 2,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/tovary_dlya_kompyutera/zhestkie_diski',
          count: 9,
          favorites: 2,
        },
        {
          title: 'Катриджи для dendy',
          description: 'Все работает',
          price: 1600,
          address: 'Москва, ул. Жебрунова, 4А',
          subcategoryId: 16,
          userId: 2,
          features: '{"condition":"used"}',
          isActive: false,
          url: '/igry_pristavki_i_programmy/igry_dlya_pristavok',
          count: 0,
          favorites: 0,
        },
        {
          title: 'Джостики для денди',
          description: '2 джостика',
          price: 250,
          address: 'Москва, Новгородская ул., 4',
          subcategoryId: 15,
          userId: 2,
          features: '{"condition":"used"}',
          isActive: false,
          url: '/igry_pristavki_i_programmy/igrovye_pristavki',
          count: 2,
          favorites: 1,
        },
        {
          title: 'Zx spectrum 128',
          description:
            'В комплекте кассеты,хранился в квартире,много лет не включали.',
          price: 4500,
          address: 'Москва, Северный административный округ, Головинский район',
          subcategoryId: 19,
          userId: 2,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/kompyutery/sistemnye_bloki',
          count: 16,
          favorites: 1,
        },
        {
          title: 'Телефон nokia',
          description: 'Кнопочный телефон Нокиа',
          price: 600,
          address: 'Москва, ул. Твардовского, 4к2',
          subcategoryId: 1,
          userId: 3,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/telefony/mobile',
          count: 5,
          favorites: 0,
        },
        {
          title: 'Nokia 105 DS',
          description: 'В отличном состоянии. Практически не использовался.',
          price: 700,
          address: 'Москва, Южный административный округ, район Царицыно',
          subcategoryId: 1,
          userId: 4,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/telefony/mobile',
          count: 2,
          favorites: 0,
        },
        {
          title: 'Телефон Nokia 8850',
          description:
            'Продается телефон Nokia 8850.\n\nТелефон в отличном рабочем состоянии, любые ваши проверки сразу на месте.\n\nТех. Характеристики:\n\nГод выхода: 1999\n\nЧастоты: GSM900/1800\n\nЭкран: 84x48, 5 строк, монохромный\n\nИнтерфейсы: irDA, WAP\n\nПамять: раздельная, до 250 номеров\n\nМатериалы: алюминий, пластик\n\nАккумулятор: 650 мА*ч\n\nГабариты: 100x44x17 мм\n\nУровень SAR: 0.43 Вт/кг\n\n\n\n•Трейд Ин, обменяем Вашу технику на новую\n\n•Доставка по Москве\n\n•Отправка по РФ любым ТК\n\n•Выкупим вашу технику\n\nГарантия от магазина 7 дней на проверку качества\n\nСпешите купить\n\nМы находимся Метро Курская/Чкаловская\n\nПо адресу Верхняя Сыромятническая, 7 ст1\n\nЧасы работы магазина\n\nпн-вс с 9.00 до 21.00',
          price: 4500,
          address: 'Москва, Верхняя Сыромятническая ул., 7с1',
          subcategoryId: 1,
          userId: 5,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/telefony/mobile',
          count: 3,
          favorites: 0,
        },
        {
          title: 'Nokia 6500 slide',
          description:
            'Полный комплект: Зарядное устройство. Коробка. Наушники. В отличном состоянии. Ростест. Отвязан от всех аккаунтов. Все детали в рабочем состоянии. Любые проверки на месте. Не вскрывался. Без сколов и дефектов. Без возврата.Торг.',
          price: 6750,
          address: 'Москва, Сокольническая линия',
          subcategoryId: 1,
          userId: 6,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/telefony/mobile',
          count: 3,
          favorites: 0,
        },
        {
          title: 'Моноблок Acer Безрамочный 8озу SSD 256 10шт',
          description:
            'Моноблок Acer в идеальном состоянии, покупали\nгод назад. Безрамочнный - идеально впишется в ваш интерьер. Серебристый цвет.\n\nВ наличии 12штук.\n\nНа каждый системный блок установлена лицензионная и активированная навсегда Windows 10 Pro и Microsoft Office 2019\n.....................................................................................................\n\n🔑 Можем Доставить и Подключить моноблок(и) под ключ в день вашего звонка! Есть моноблоки под любые задачи, звоните - подберём!\n\nГарантия - 30 дней на проверку.\n\nЭкран - 22” 1920x1080 Full HD IPS\n\nПроцессор - intel J3060 (сигн 2.48GHz)\n\nОперативная память - 8GB\n\nТвердотелый накопитель - SSD 256GB\n\nWifi / колонки / микрофон / веб-камера\n\n🚚Доставка, отправка любой ТК или Доставкой Авито.\n\n🎁С Каждым Моноблоком мышка и клавиатура в комплекте.\n\n💳 Оплата Нал/Перевод/Безнал на РС Юр. Лица\n\n⚡️Оптом скидки, Звоните договоримся!',
          price: 25000,
          address: 'Москва, ул. Казакова, 8с3',
          subcategoryId: 20,
          userId: 3,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/kompyutery/monobloki',
          count: 1,
          favorites: 0,
        },
        {
          title: 'iMac 24, M1, 2021 (1 тб)',
          description:
            'iMac в отличном состоянии\n\nВ использовании 1 год\n\nЧип: Apple M1\nОперативная память: 16ГБ \nПамять: 1 ТБ\n\nВстроенный дисплей Retina 24 дюйма (4480 х 2520)\n\n8С СPU/ 8C GPU\n\nЗаказывал в официальном магазине Apple Store (имеется чек)',
          price: 199000,
          address: 'Москва, ул. Маршала Рыбалко, 12к1',
          subcategoryId: 1,
          userId: 3,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/kompyutery/monobloki',
          count: 30,
          favorites: 0,
        },
        {
          title: 'iMac 27 2020 Retina 5K Новый Ростест Связной',
          description:
            'БЕЗ ТОРГA ЦЕНA НИЖE РЫНКA!\nApple iMac 27 Retina 5K 2020 i5(6 ядер) 3.1GHz (Boost To 4.5GHz) 8ГБ ОЗУ 256ГБ SSD AMD Radeon Pro 5300 4GB\n!НOВЫЙ РОСТЕСТ НОВЫЙ!\nКуплeн был в Связнoм за наличкy,чека не осталocь.В НАЛИЧИИ 10 ШТУК\nПoлный запечатанный заводской комплект\nВся информация есть на фотo.Любые проверки уместны.Не вскрывался никогда,Ремонтов никаких не было!\nБез обменов на MacBook Mac Pro 24 21.5 2021 2022 2023 и тд Asus Acer Dell HP Lenovo M2 M1 Max игровой и тд!Толькo продажа\nЛюбые вопросы и доп фото сделаю и отвечу если надо)\nЛичнaя встречa в Москве.Самовывоз метрo Братиславская!\nПомогy загрyзить в Baш автомобиль\nAвитo дoставкoй не отпpaвляю',
          price: 121500,
          address: 'Москва, Пятницкий пер.',
          subcategoryId: 20,
          userId: 3,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/kompyutery/monobloki',
          count: 3,
          favorites: 0,
        },
        {
          title: 'Моноблок Доставка i3 i5 i7',
          description:
            'Моноблоки продаются комплектом.\nОт 3 штук скидка. Моноблоки всех видов. Все в отличном состоянии. Много одинаковых моноблоков. Можно укомплектовать любой офис, торговое помещение, предприятие, или для дома.\n\nМожем Доставить и Подключить моноблок(и) в день вашего звонка! Есть и другие моноблоки для разных задач, можно просто позвонить и выбрать.\n\nУстановим Windows и office и АВТОКАД\n\nГарантия - 30 дней на проверку.\n\nОтправка в другие города, без предоплаты.\n\nЗвоните, договоримся!\n\nВ наличии около 100 штук. Оптом и в розницу. Есть 22” 24” ips. На процессорах Core i7 Core i5, Core i3 , pentium. Есть игровые моноблоки. На любой моноблок можем установить SSD.\n\nЕсть моноблоки под любые задачи - 1С , Excel ,Word , Автокад , Дизайна , Фотографий , игр и других.\n\nОпт оптом в розницу',
          price: 11500,
          address: 'Москва, 2-й Кожуховский проезд, 29к2с2',
          subcategoryId: 20,
          userId: 3,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/kompyutery/monobloki',
          count: 12,
          favorites: 0,
        },
        {
          title: 'Моноблоки Lenovo M71z 20" 8Гб SDD 256 Гб 2 штуки',
          description:
            '2 штуки в одинаковой комплектации, оба довернуты, почищены и проверены, оперативка 8, SDD 256, стоит Windows 10 Pro, работают бодро (не игровые, но для офисных нужд - пуля), один после сборки не использовался, простоял в шкафу, вторым пользовались 2 года, есть битые пиксели (см. фото), так что второй в нагрузку на запчасти, в комплекте 2 клавы (одна игровая Werewolf Defender GK-120DL) , 2 шнура питания, 2 свистка для Wi-Fi. Продаю одним лотом, по отдельности не продаю, обмен не интересует, самовывоз.',
          price: 15000,
          address: 'Москва, Замоскворецкая линия',
          subcategoryId: 20,
          userId: 3,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/kompyutery/monobloki',
          count: 22,
          favorites: 0,
        },
        {
          title: 'Samsung 8K Smart TV',
          description:
            'Телевизор LED Samsung QE55Q700TAUXRU с диагональю 55" (140 см) устанавливается на устойчивую подставку, расположенную по центру корпуса. Основная функция − просмотр телеканалов − происходит без каких-либо серьезных настроек. Аппарат оборудован тюнерами DVB-T, DVB-T2, DVB-C, DVB-S, предоставляющими доступ к просмотру цифровых телеканалов после автопоиска. \nSamsung QE55Q700TAUXRU поддерживает разрешение 8K Ultra HD, соответствующее 7680x4320, что позволит прочувствовать каждую сцену благодаря высокой четкости, реалистичности и широкой гамме красок. Особенность технологии Quantum HDR 8x заключается в его способности улучшать изображение даже самого низкого качества, доводя его до качества 8x, чтобы улучшить условия просмотра. Адаптивная подсветка обеспечивает легкую регулировку в зависимости от условий внешней освещенности. В основе телевизора лежит ОС Tizen с набором инструментов, которые делают пользование комфортным и легким. Благодаря DLNA и Wi-Fi вы можете подключаться к сети для получения доступа к возможностям Smart TV.',
          price: 68499,
          address: ' Москва, ул. Коровий Вал, к1А',
          subcategoryId: 5,
          userId: 4,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/audio_i_video/televizory',
          count: 0,
          favorites: 0,
        },
        {
          title: 'Телевизор 65" Philips 65hfl6114u/12 новый',
          description:
            'Philips 65HFL6114U/12. Телевизор абсолютно новый, в полной комплектации в заводской упаковке, из коробки даже не вынимался.\nДиагональ 65 дюймов (164 см), 4K Ultra HD LED, 3840x2160p, silver, hdmi, Smart TV (Android), Wifi. \nСтрана производитель: Польша.\nДоставка по Москве и Московской области по отдельной договоренности. \nСрочно! Вынужденная продажа, на 30 тысяч дешевле чем покупал и чем сейчас он в продаже! Цена на 2-3 дня.\nДля поиска lg, samsung, xiaomi.',
          price: 65500,
          address: 'Москва, Калужско-Рижская линия',
          subcategoryId: 5,
          userId: 4,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/audio_i_video/televizory',
          count: 0,
          favorites: 0,
        },
        {
          title: 'Телевизор smart tv Hartens',
          description:
            'Продам ,новый телевизор,ну как новый ,пара недель как с магазина.\nПричина продажи спросите вы,а она банальна нужны деньги',
          price: 5500,
          address: 'Москва, Булатниковский пр., 10Бс2',
          subcategoryId: 5,
          userId: 4,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/audio_i_video/televizory',
          count: 0,
          favorites: 0,
        },
        {
          title: 'Телевизор Smart TV с голосовым управлением',
          description:
            'Телевизор Smart Q90\n\nНовинка, во многом превосходящая популярные бренды Xiaomi, TCL, Haier, и др.\n\nДиагонали: 32 / 43 / 45 / 55',
          price: 7490,
          address: 'Москва, ул. Ляпидевского, 20/12',
          subcategoryId: 5,
          userId: 4,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/audio_i_video/televizory',
          count: 0,
          favorites: 0,
        },
        {
          title: 'Новый Телевизор Haier 50 S1 Smart TV',
          description:
            'Новый ❗ Запечатаный❗❗\n\nДоставка по России✅\nАвито-доставка ✅\nСамовывоз по адресу в профиле✅\n\nДоступен 24/7📲\n\nОтличный телевизор от компании Haier\nГарантия 1 год\nКачество разрешения 4K 3840 x 2160\nПолноценный Smart TV Android\nГолосовой помощник Google assistance❗\n\nПодписывайтесь на профиль, чтобы не пропустить хорошую скидку😉\n\nЛюбви и счастья🙌🏻',
          price: 23900,
          address: 'Москва, ул. Академика Скрябина, 28к1',
          subcategoryId: 5,
          userId: 4,
          features: '{"condition":"new"}',
          isActive: true,
          url: '/audio_i_video/televizory',
          count: 0,
          favorites: 0,
        },
        {
          title: 'Игровой компьютер / игровой пк / гарантия',
          description:
            '🔷 Полностью протестированы, подготовлены к работе.\n🔷 Установлена операционная система.\n🔷 Оплата Нал/Безнал (+10% без НДС).\n\n🔷 Оплата через терминал + 10%\n🔷 Доставка по Москве и области, по РФ.\n🔷 Гарантия – 12 месяцев!',
          price: 25900,
          address: 'Москва, Арбатско-Покровская линия',
          subcategoryId: 19,
          userId: 5,
          features: '{"condition":"new"}',
          isActive: true,
          url: '/kompyutery/sistemnye_bloki',
          count: 0,
          favorites: 0,
        },
        {
          title: 'Игровой компьютер',
          description:
            'Продаю персональный компьютер в полностью исправном и рабочем состоянии. Цена без торга.\n\nХарактеристики: \n-- Процессор Intel Core i5 4670k 4 ядра по 3.4Ghz\n-- Видеокарта Palit GTX 1050 2Gb\n-- Оперативная память HyperX Fury DDR3 16Gb\n-- Материнская плата MSI Z87 MPOWER MAX\n-- SSD накопитель Kingston A400 на 240 Gb (Новый)\n-- HDD накопитель Seagate BarraCuda 500 Gb\n-- Корпус (стальной) Aercool XPredator (Full-Tower)\n-- Блок питания 800W\n-- Windows 10 Home\n\n!!!ЦЕНА БЕЗ ТОРГА!!!\n!!!ТОЛЬКО САМОВЫВОЗ (МЦК "Крымская")!!!\n\nОПУБЛИКОВАННОЕ ОБЪЯВЛЕНИЕ ЯВЛЯЕТСЯ АКТУАЛЬНЫМ',
          price: 20000,
          address: 'Москва, Московское центральное кольцо',
          subcategoryId: 19,
          userId: 5,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/kompyutery/sistemnye_bloki',
          count: 0,
          favorites: 0,
        },
        {
          title: 'Игровой Core i5-10400f 16Gb RTX 2060 6Gb ssd 1Tb',
          description:
            'Представляю вашему вниманию максимально сбалансированную игровую сборку с наилучшим соотношением цена/производительность\nХарактеристики железа:\n• Процессор- Intel Core i5 10400F, 6 ядер, 12 потоков, работает на частоте до 4Ghz, на современном сокете LGA1200\n• Башенный кулер с многократным запасом под этот процессор\n• Материнская плата - современная MSI H510M на актуальном сокете LGA 1200 с поддержкой процессоров 10 и 11 поколений\n• Оперативная память - 16 Gb DDR4 работает в двухканальном режиме. На данный момент полностью хватает для любых задач. В будущем можно увеличить до 32Гб\n• Видеокарта Nvidia GeForce RTX 2060 6Gb DDR6 без проблем потянет все современные игры. По производительности аналогична RTX 3050\nВозможна замена видеокарты на RTX 3060Ti 8Gb (+10тр), наличие уточняйте\n• SSD - 1000Gb M.2 NVMe высокоскоростной накопитель под игры и систему. Все загружается и устанавливается за секунды.\n• Блок питания 1st player 500w, полностью хватает для этой системы\n• Стильный прозрачный корпус со стенками из закаленного стекла и RGB подсветкой, четырьмя вентиляторами на вдув и выдув\n• Операционная система - Windows 11 ( Activated )\n• Пакет Microsoft Office ( Activated )',
          price: 45000,
          address: 'Москва, Юго-Западный административный округ, район Южное ',
          subcategoryId: 19,
          userId: 5,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/kompyutery/sistemnye_bloki',
          count: 0,
          favorites: 0,
        },
        {
          title: 'Компьютер i7 / GTX750TI / 12гб / ssd',
          description:
            'Процессор Intel Core i7 870 \n4х ядерный 8ми поточный \nОперативки 12 гб ddr3\nВидеокарта Geforce GTX750ti \nна ддр5 памяти (1гб)\nHDD диск на 330гб +SSD 120гб\n\nХороший компьютер начального уровня, не тормозит, не греется (шумноват из-за великих потоков ветра внутри системника=) подойдет для работы, в качестве медиа центра (фильмы, музыка, интернет и т.д.)\n\nТакие игры как кс, дота и танки тянет на высоких / максимальных настройках, потянет и многие другие, Винда 10pro стоит на ssd диске - работает шустро.\n\nДисковод не подключен, аудио и usb разъёмы только на задней стороне системника.\n\nсамовывоз из Балашихи, доставка обсуждается.\nцена указана только за системный блок; \nмонитор 19д, мышка и клавитарура +2000р.\n\nлюбые проверки на месте',
          price: 9000,
          address: 'Москва, Арбатско-Покровская линия',
          subcategoryId: 19,
          userId: 5,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/kompyutery/sistemnye_bloki',
          count: 0,
          favorites: 0,
        },
        {
          title: 'Ультрабук Asus Intel Core i7 / 512Gb + Гарантия',
          description:
            '🎉✨ Больше не жертвуйте производительностью или мобильностью! Приобретите наш ультрабук сегодня и испытайте идеальное сочетание мощности и мобильности. 🎉✨ С легкостью раскрывайте свой творческий потенциал и никогда не упускайте момент, когда дело доходит до решения сложных графических задач. 💪💻',
          price: 18900,
          address: 'Москва, Мясницкая ул., 22с1',
          subcategoryId: 21,
          userId: 6,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/kompyutery/noutbuki',
          count: 0,
          favorites: 0,
        },
        {
          title: 'Ноутбуки для любых задач i3 i5 i7 Ryzen GTX RTX',
          description:
            '📨 Напишите нам прямо сейчас для каких задач вам нужен ноутбук (Игры, работа, учеба, 3D моделирование, программирование и.т.д.) и мы вышлем вам все что у нас есть с подробным описанием и ценами.',
          price: 10900,
          address: 'Москва, Огородный пр., 8с1',
          subcategoryId: 21,
          userId: 6,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/kompyutery/noutbuki',
          count: 0,
          favorites: 0,
        },
        {
          title: 'Наушники Apple Airpods 3 / 2 / Pro / Pro 2 / Max',
          description:
            '🍏 В нашем магазине вы можете купить новые ОРИГИНАЛЬНЫЕ беспроводные Bluetooth наушники Apple AirPods 3 / 2 / Pro / Max с ОФИЦИАЛЬНОЙ гарантией от производителя.\n\nЗапакованные, не обменные и не восстановленные. А самое главное - настоящий оригинал, а не подделка.',
          price: 11790,
          address: 'Москва, ул. Барклая, 8',
          subcategoryId: 7,
          userId: 6,
          features: '{"condition":"new"}',
          isActive: true,
          url: '/audio_i_video/naushniki',
          count: 0,
          favorites: 0,
        },
        {
          title: 'Наушники Sony WH-1000XM5 Black / Blue',
          description:
            'Добрый День 🤗 Наш магазин имеет 5 звезд🏆 на Авито! И только реальные отзывы. Более 600 довольных клиентов написали отзывы с фото. Мы являемся магазином с хорошей историей и продажей только оригинальной техники 🤝',
          price: 33490,
          address: 'Москва, Спасопесковский пер., 3/1с2',
          subcategoryId: 7,
          userId: 6,
          features: '{"condition":"new"}',
          isActive: true,
          url: '/audio_i_video/naushniki',
          count: 0,
          favorites: 0,
        },
        {
          title: 'Harman Kardon Onyx Studio 7 новые/в наличии',
          description:
            '\nМагазин Origreen приветствует Вас!\nПортативная акустика Harman/Kardon Onyx Studio 7, 50 Вт. Товар представлен в черном, сером и синем цвете.\nНаш магазин работает:\nс 11-20 ч Пн-Вс, без обеда\nКак нас найти: ТЦ Горбушка" , ул.Барклая 8 (Метро Багратионовская - 420 метров Фили - 960 метров Парк Победы - 1 000 метров)',
          price: 14500,
          address: 'Москва, ул. Барклая, 8',
          subcategoryId: 6,
          userId: 6,
          features: '{"condition":"new"}',
          isActive: true,
          url: '/audio_i_video/akustika_kolonki',
          count: 0,
          favorites: 0,
        },
        {
          title: 'Amphion two 18 пара мониторов',
          description:
            'Продам Amphion two 18\n\nПроверка на студии в любое время, но усилитель и кабеля проданны и коробок от мониторов нет, так как хлама и так хватает, а дерево это хранить не где.\n\nЕсли у вас есть усилитель, привозите ко мне и послушаем с ним, а так мониторы в отличном состоянии , использовал меньше года их, сейчас стоят в продаже и не используются уже больше 3-4 месяцев примерно!\n\nПричина продажи перешел на другую модель',
          price: 299000,
          address: 'Москва, Южный административный округ, Даниловский район',
          subcategoryId: 6,
          userId: 6,
          features: '{"condition":"used"}',
          isActive: true,
          url: '/audio_i_video/akustika_kolonki',
          count: 0,
          favorites: 0,
        },
        {
          title: 'Планшет Apple iPad 9 2021 / iPad 10 2022',
          description:
            '🍏 В нашем магазине вы можете купить новый ОРИГИНАЛЬНЫЙ планшет Apple iPad 9 / Apple iPad 10.\n\nЗапакованные, не обменные и не восстановленные.\n\nМы успешно работаем с 2011 года! 5 звезд на Авито! И только реальные отзывы.\n\n• Предоставляем чек.\n\n• Мы даем 14 дней на обмен/возврат для проверки качества.\n\n• Доставка. Оплата при получении (при доставке по Москве и ближайшей области)\n\n• Доставка в регионы транспортной компанией СДЭК\n\n• Скидки постоянным клиентам.\n\n• Профессиональные менеджеры окажут полную консультацию\n\n• Свой интернет-магазин UPSTORE24',
          price: 30490,
          address: 'Москва, ул. Барклая, 8',
          subcategoryId: 25,
          userId: 6,
          features: '{"condition":"new"}',
          isActive: true,
          url: '/planshety_i_elektronnye_knigi/planshety',
          count: 0,
          favorites: 0,
        },
        {
          title: 'iPad Pro 11 256 M2 Wi-fi Space Gray',
          description:
            'ОПТОВАЯ ПРОДАЖА ОРИГИНАЛЬНОЙ ТЕХНИКИ Apple\n\n➤ Только актуальные новинки в мире техники\n\n➤ Гарантия до 6 месяцев\n\n➤ Прямые поставки из ЕВРОПЫ\n\n✔️ Напишите слово «APPLE», и мы отправим Вам ссылку на каталог товаров',
          price: 84800,
          address: 'Москва, улица Барклая, 8',
          subcategoryId: 25,
          userId: 6,
          features: '{"condition":"new"}',
          isActive: true,
          url: '/planshety_i_elektronnye_knigi/planshety',
          count: 0,
          favorites: 0,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {});
  },
};
