ymaps.ready(init);

function init() {
    // The list of possible glyph icons.
    var glyphNames = ['asterisk', 'plus', 'euro', 'eur', 'minus', 'cloud', 'envelope',
        'pencil', 'glass', 'music', 'search', 'heart', 'star', 'star-empty', 'user', 'film',
        'th-large', 'th', 'th-list', 'ok', 'remove', 'zoom-in', 'zoom-out', 'off', 'signal',
        'cog', 'trash', 'home', 'file', 'time', 'road', 'download-alt', 'download', 'upload', 'inbox',
        'play-circle', 'repeat', 'refresh', 'list-alt', 'lock', 'flag', 'headphones', 'volume-off',
        'volume-down', 'volume-up', 'qrcode', 'barcode', 'tag', 'tags', 'book', 'bookmark', 'print',
        'camera', 'font', 'bold', 'italic', 'text-height', 'text-width', 'align-left', 'align-center',
        'align-right', 'align-justify', 'list', 'indent-left', 'indent-right', 'facetime-video',
        'picture', 'map-marker', 'adjust', 'tint', 'edit', 'share', 'check', 'move', 'step-backward',
        'fast-backward', 'backward', 'play', 'pause', 'stop', 'forward', 'fast-forward', 'step-forward',
        'eject', 'chevron-left', 'chevron-right', 'plus-sign', 'minus-sign', 'remove-sign', 'ok-sign',
        'question-sign', 'info-sign', 'screenshot', 'remove-circle', 'ok-circle', 'ban-circle', 'arrow-left',
        'arrow-right', 'arrow-up', 'arrow-down', 'share-alt', 'resize-full', 'resize-small', 'exclamation-sign',
        'gift', 'leaf', 'fire', 'eye-open', 'eye-close', 'warning-sign', 'plane', 'calendar', 'random', 'comment',
        'magnet', 'chevron-up', 'chevron-down', 'retweet', 'shopping-cart', 'folder-close', 'folder-open',
        'resize-vertical', 'resize-horizontal', 'hdd', 'bullhorn', 'bell', 'certificate', 'thumbs-up', 'thumbs-down',
        'hand-right', 'hand-left', 'hand-up', 'hand-down', 'circle-arrow-right', 'circle-arrow-left', 'circle-arrow-up',
        'circle-arrow-down', 'globe', 'wrench', 'tasks', 'filter', 'briefcase', 'fullscreen', 'dashboard', 'paperclip',
        'heart-empty', 'link', 'phone', 'pushpin', 'usd', 'gbp', 'sort', 'sort-by-alphabet', 'sort-by-alphabet-alt',
        'sort-by-order', 'sort-by-order-alt', 'sort-by-attributes', 'sort-by-attributes-alt', 'unchecked', 'expand',
        'collapse-down', 'collapse-up', 'log-in', 'flash', 'log-out', 'new-window', 'record', 'save', 'open', 'saved',
        'import', 'export', 'send', 'floppy-disk', 'floppy-saved', 'floppy-remove', 'floppy-save', 'floppy-open',
        'credit-card', 'transfer', 'cutlery', 'header', 'compressed', 'earphone', 'phone-alt', 'tower', 'stats', 'sd-video',
        'hd-video', 'subtitles', 'sound-stereo', 'sound-dolby', 'sound-5-1', 'sound-6-1', 'sound-7-1', 'copyright-mark',
        'registration-mark', 'cloud-download', 'cloud-upload', 'tree-conifer', 'tree-deciduous', 'cd', 'save-file', 'open-file',
        'level-up', 'copy', 'paste', 'alert', 'equalizer', 'king', 'queen', 'pawn', 'bishop', 'knight', 'baby-formula', 'tent',
        'blackboard', 'bed', 'apple', 'erase', 'hourglass', 'lamp', 'duplicate', 'piggy-bank', 'scissors', 'bitcoin', 'btc', 'xbt',
        'yen', 'jpy', 'ruble', 'rub', 'scale', 'ice-lolly', 'ice-lolly-tasted', 'education', 'option-horizontal', 'option-vertical',
        'menu-hamburger', 'modal-window', 'oil', 'grain', 'sunglasses', 'text-size', 'text-color', 'text-background', 'object-align-top',
        'object-align-bottom', 'object-align-horizontal', 'object-align-left', 'object-align-vertical', 'object-align-right',
        'triangle-right', 'triangle-left', 'triangle-bottom', 'triangle-top', 'console', 'superscript', 'subscript', 'menu-left',
        'menu-right', 'menu-down', 'menu-up'];

    var map = new ymaps.Map('map', {
        center: [65, 100],
        zoom: 2,
        type: null,
        controls: ['zoomControl']
    },{
        restrictMapArea: [[10, 10], [85,-160]]
    });
    
    map.geoObjects
        .add(new ymaps.Placemark([55.684758, 37.738521], {}, {
            preset: 'islands#glyphIcon',
            // Defining the glyph icon name.
            iconGlyph: glyphNames[Math.floor(Math.random() * glyphNames.length)],
            // Defining the glyph icon color.
            iconGlyphColor: 'blue',
            // Defining the placemark color.
            iconColor: 'blue'
        }))
    console.log(glyphNames[Math.floor(Math.random() * glyphNames.length)]);
    
    map.controls.get('zoomControl').options.set({size: 'small'});
    // Добавим заливку цветом.
    var pane = new ymaps.pane.StaticPane(map, {
        zIndex: 100, css: {
            width: '100%', height: '100%', backgroundColor: '#f7f7f7'
        }
    });

    map.panes.append('white', pane);
    
    // Зададим подсказки при наведении на федеральный округ.
    var districtsHints = {
        bel: 'Белогородская область',
        bry: 'Брянская область',
        vla: 'Владимирская область', 
        vor: 'Воронежская область', 
        iva: 'Ивановская область', 
        klu: 'Калужская область', 
        kos: 'Костромская область', 
        krs: 'Курская область',
        lip: 'Липецкая область',
        mos: 'Московская область',
        mow: 'город Москва',
        orl: 'Орловская область',
        rya: 'Рязанская область',
        smo: 'Смоленская область',
        tam: 'Тамбовская область',
        tve: 'Тверская область',
        tul: 'Тульская область',
        yar: 'Ярославская область',
        ark: 'Архангельская область',
        vlg: 'Вологодская область',
        kgd: 'Калининградская область',
        kr: 'Республика Карелия',
        ko: 'Республика Коми',
        len: 'Ленинградская область',
        mur: 'Мурманская область',
        nen: 'Ненецкий автономный округ',
        ngr: 'Новгородская область',
        psk: 'Псковская область',
        spe: 'город Санкт-Петербург',
        ad: 'Республика Адыгея',
        ast: 'Астраханская область',
        vgg: 'Волгоградская область',
        kl: 'Республика Калмыкия',
        kda: 'Краснодарский край',
        sev: 'город Севастополь',
        kry: 'Республика Крым',
        ros: 'Ростовская область',
        da: 'Республика Дагестан',
        in: 'Республика Ингушетия',
        kb: 'Кабардино-Балкарская республика',
        kc: 'Карачаево-Черкесская республика',
        se: 'Республика Северная Осетия - Алания',
        sta: 'Ставропольский край',
        ce: 'Республика Чечня',
        ba: 'Республика Башкортостан',
        kir: 'Кировская область',
        me: 'Республика Марий-Эл',
        mo: 'Республика Мордовия',
        niz: 'Нижегородская область',
        ore: 'Оренбургская область',
        pnz: 'Пензенская область',
        per: 'Пермский край',
        sam: 'Самарская область',
        sar: 'Саратовская область',
        ta: 'Республика Татарстан',
        ud: 'Удмуртская республика',
        uly: 'Ульяновская область',
        cu: 'Республика Чувашия',
        kgn: 'Курганская область',
        sve: 'Свердловская область',
        tyu: 'Тюменская область',
        khm: 'Ханты-Мансийский автономный округ',
        che: 'Челябинская область',
        yan: 'Ямало-Ненецкий автономный округ',
        alt: 'Алтайский край',
        al: 'Республика Алтай',
        irk: 'Иркутская область',
        kem: 'Кемеровская область',
        kya: 'Красноярский край',
        nvs: 'Новосибирская область',
        oms: 'Омская область',
        tom: 'Томксая область',
        ty: 'Республика Тыва',
        kk: 'Республика Хакасия',
        bu: 'Республика Бурятия',
        zab: 'Забайкальский край',
        amu: 'Амурская область',
        yev: 'Еврейская автономная область',
        kam: 'Камчатский край',
        mag: 'Магаданская область',
        pri: 'Приморский край',
        sa: 'Республика Саха (Якутия)',
        sak: 'Сахалинская область',
        kha: 'Хабаровский край',
        chu: 'Чукотский автономный округ'
    };
    
    // Создадим балун.
    var districtBalloon = new ymaps.Balloon(map);
    districtBalloon.options.setParent(map.options);
    // Загрузим регионы.
    ymaps.borders.load('RU', {
        lang: 'ru',
        quality: 2
    }).then(function (result) {
        // Создадим объект, в котором будут храниться коллекции с нашими регионами.
        var districtCollections = {};
        // Для каждого федерального округа создадим коллекцию.
        for (var district in districtColors) {
            districtCollections[district] = new ymaps.GeoObjectCollection(null, {
                fillColor: districtColors[district],
                strokeColor: districtColors[district],
                strokeOpacity: 0.3,
                fillOpacity: 0.3,
                hintCloseTimeout: 0,
                hintOpenTimeout: 0
            });
            // Создадим свойство в коллекции, которое позже наполним названиями субъектов РФ.
            districtCollections[district].properties.districts = [];
        }

        result.features.forEach(function (feature) {
            var iso = feature.properties.iso3166;
            var name = feature.properties.name;
            var district = districtByIso[iso];
            // Для каждого субъекта РФ зададим подсказку с названием федерального округа, которому он принадлежит.
            feature.properties.hintContent = districtsHints[district];
            // Добавим субъект РФ в соответствующую коллекцию.
            districtCollections[district].add(new ymaps.GeoObject(feature));
            // Добавим имя субъекта РФ в массив.
            districtCollections[district].properties.districts.push(name);

        });
        // Создадим переменную, в которую будем сохранять выделенный в данный момент федеральный округ.
        var highlightedDistrict;
        for (var districtName in districtCollections) {
            // Добавим коллекцию на карту.
            map.geoObjects.add(districtCollections[districtName]);
            // При наведении курсора мыши будем выделять федеральный округ.
            districtCollections[districtName].events.add('mouseenter', function (event) {
                var district = event.get('target').getParent();
                district.options.set({fillOpacity: 1});
            });
            // При выводе курсора за пределы объекта вернем опции по умолчанию.
            districtCollections[districtName].events.add('mouseleave', function (event) {
                var district = event.get('target').getParent();
                if (district !== highlightedDistrict) {
                    district.options.set({fillOpacity: 0.3});
                }
            });
            // Подпишемся на событие клика.
            districtCollections[districtName].events.add('click', function (event) {
                var target = event.get('target');
                var district = target.getParent();
                // Если на карте выделен федеральный округ, то мы снимаем с него выделение.
                if (highlightedDistrict) {
                    highlightedDistrict.options.set({fillOpacity: 0.3})
                }
                // Откроем балун в точке клика. В балуне будут перечислены регионы того федерального округа,
                // по которому кликнул пользователь.
                districtBalloon.open(event.get('coords'), district.properties.districts.join('<br>'));
                // Выделим федеральный округ.
                district.options.set({fillOpacity: 1});
                // Сохраним ссылку на выделенный федеральный округ.
                highlightedDistrict = district;
            });
        }
    })
    // events
    
}