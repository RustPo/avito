import { useEffect, useState } from 'react';

export const AddItemMap = ({ inputValue, setInputValue }) => {
  // const changeHandler = (e) => {
  //   setInputValue(e.target.value);
  // };

  const searchInput = () => {
    ymaps.ready(init2);
  };

  useEffect(() => {
    ymaps.ready(init);
  }, []);

  function init2() {
    let myPlacemark,
      myMap = new ymaps.Map('map', {
        center: [55.753994, 37.622093],
        zoom: 15,
        controls: [],
      });

    // Поиск координат центра Нижнего Новгорода.
    const a = ymaps
      .geocode(inputValue, {
        results: 1,
      })
      .then(function (res) {
        // Выбираем первый результат геокодирования.
        const firstGeoObject = res.geoObjects.get(0),
          // Координаты геообъекта.
          coords = firstGeoObject.geometry.getCoordinates(),
          // Область видимости геообъекта.
          bounds = firstGeoObject.properties.get('boundedBy');

        firstGeoObject.options.set(
          'preset',
          'islands#darkBlueDotIconWithCaption',
        );
        // Получаем строку с адресом и выводим в иконке геообъекта.
        firstGeoObject.properties.set(
          'iconCaption',
          firstGeoObject.getAddressLine(),
        );

        // Добавляем первый найденный геообъект на карту.
        myMap.geoObjects.add(firstGeoObject);
        // Масштабируем карту на область видимости геообъекта.
        myMap.setBounds(bounds, {
          // Проверяем наличие тайлов на данном масштабе.
          checkZoomRange: true,
        });
      });

    ///////////////////////////////
    myMap.events.add('click', function (e) {
      const coords = e.get('coords');
      if (myPlacemark) {
        myPlacemark.geometry.setCoordinates(coords);
      }
      // Если нет – создаем.
      else {
        myMap.geoObjects.removeAll();
        myPlacemark = createPlacemark(coords);
        myMap.geoObjects.add(myPlacemark);
        // Слушаем событие окончания перетаскивания на метке.
        myPlacemark.events.add('dragend', function () {
          getAddress(myPlacemark.geometry.getCoordinates());
        });
      }
      getAddress(coords);

      // Если метка уже создана – просто передвигаем ее.
    });

    // Создание метки.
    function createPlacemark(coords) {
      return new ymaps.Placemark(
        coords,
        {
          iconCaption: 'поиск...',
        },
        {
          preset: 'islands#violetDotIconWithCaption',
          draggable: true,
        },
      );
    }

    document.getElementById('testId').onclick = function () {
      // Для уничтожения используется метод destroy.
      myMap.destroy();
    };

    // Определяем адрес по координатам (обратное геокодирование).
    function getAddress(coords) {
      myPlacemark.properties.set('iconCaption', 'поиск...');
      ymaps.geocode(coords).then(function (res) {
        const firstGeoObject = res.geoObjects.get(0);
        test(firstGeoObject.getAddressLine());

        myPlacemark.properties.set({
          // Формируем строку с данными об объекте.
          iconCaption: [
            // Название населенного пункта или вышестоящее административно-территориальное образование.
            firstGeoObject.getLocalities().length
              ? firstGeoObject.getLocalities()
              : firstGeoObject.getAdministrativeAreas(),
            // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
            firstGeoObject.getThoroughfare() || firstGeoObject.getPremise(),
          ]
            .filter(Boolean)
            .join(', '),
          // В качестве контента балуна задаем строку с адресом объекта.
          balloonContent: firstGeoObject.getAddressLine(),
        });
      });
    }
    function test(firstGeoObject) {
      setInputValue(firstGeoObject);
    }

    const suggestView1 = new ymaps.SuggestView('suggest');
  }

  ///////////////////////////////////////////////////

  function init() {
    // Создание карты.

    let myPlacemark,
      myMap = new ymaps.Map(
        'map',
        {
          center: [55.753994, 37.622093],
          zoom: 12,
          controls: ['geolocationControl'],
        },
        {
          searchControlProvider: 'yandex#search',
        },
      );

    // Слушаем клик на карте.

    ymaps.geolocation
      .get({
        provider: 'yandex',
        mapStateAutoApply: true,
      })
      .then(function (result) {
        // Красным цветом пометим положение, вычисленное через ip.
        result.geoObjects.options.set('preset', 'islands#redCircleIcon');
        result.geoObjects.get(0).properties.set({
          balloonContentBody: 'Мое местоположение',
        });
        myMap.geoObjects.add(result.geoObjects);
      });

    ymaps.geolocation
      .get({
        provider: 'browser',
        mapStateAutoApply: true,
      })
      .then(function (result) {
        // Синим цветом пометим положение, полученное через браузер.
        // Если браузер не поддерживает эту функциональность, метка не будет добавлена на карту.
        result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
        myMap.geoObjects.add(result.geoObjects);
      });

    myMap.events.add('click', function (e) {
      const coords = e.get('coords');

      if (myPlacemark) {
        myPlacemark.geometry.setCoordinates(coords);
      }
      // Если нет – создаем.
      else {
        myPlacemark = createPlacemark(coords);
        myMap.geoObjects.add(myPlacemark);
        // Слушаем событие окончания перетаскивания на метке.
        myPlacemark.events.add('dragend', function () {
          getAddress(myPlacemark.geometry.getCoordinates());
        });
      }
      getAddress(coords);

      // Если метка уже создана – просто передвигаем ее.
    });

    // Создание метки.
    function createPlacemark(coords) {
      return new ymaps.Placemark(
        coords,
        {
          iconCaption: 'поиск...',
        },
        {
          preset: 'islands#violetDotIconWithCaption',
          draggable: true,
        },
      );
    }

    document.getElementById('testId').onclick = function () {
      // Для уничтожения используется метод destroy.
      myMap.destroy();
    };

    // Определяем адрес по координатам (обратное геокодирование).
    function getAddress(coords) {
      myPlacemark.properties.set('iconCaption', 'поиск...');
      ymaps.geocode(coords).then(function (res) {
        const firstGeoObject = res.geoObjects.get(0);
        test(firstGeoObject.getAddressLine());

        myPlacemark.properties.set({
          // Формируем строку с данными об объекте.
          iconCaption: [
            // Название населенного пункта или вышестоящее административно-территориальное образование.
            firstGeoObject.getLocalities().length
              ? firstGeoObject.getLocalities()
              : firstGeoObject.getAdministrativeAreas(),
            // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
            firstGeoObject.getThoroughfare() || firstGeoObject.getPremise(),
          ]
            .filter(Boolean)
            .join(', '),
          // В качестве контента балуна задаем строку с адресом объекта.
          balloonContent: firstGeoObject.getAddressLine(),
        });
      });
    }
    function test(firstGeoObject) {
      setInputValue(firstGeoObject);
    }

    const suggestView1 = new ymaps.SuggestView('suggest');
  }

  return (
    <div className="flex flex-col mt-5">
      <div className="flex flex-col">
        <div className="flex justify-end mb-5">
        <div
          className="flex rounded-md cursor-pointer justify-center bg-[#285e89] w-52 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#3478af] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[indigo-600]"
          id="testId"
          onClick={searchInput}
        >
          Подтвердить адрес
        </div>
        </div>
        <div>
          <div className=" w-[600px] h-[380px]" id="map"></div>
        </div>
      </div>
    </div>
  );
};
