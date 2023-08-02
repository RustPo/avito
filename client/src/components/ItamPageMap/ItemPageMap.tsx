import { useEffect } from 'react';

interface IMapProps {
  adress: string;
}

export const ItemPageMap = ({ adress }: IMapProps) => {
  useEffect(() => {
    ymaps.ready(init);
  }, [adress]);

  function init() {
    const myMap = new ymaps.Map('map', {
      center: [55.753994, 37.622093],
      zoom: 9,
      controls: [],
    });

    // const geolocation = ymaps.geolocation.get();
    // location.then(function (res) {
    //   // Получение адреса местоположения пользователя.
    //   const userTextLocation = res.geoObjects.get(0).properties.get('text');
    //   control.routePanel.state.set({
    //     // В качестве начальной точки маршрута будет установлено
    //     // местоположение пользователя.
    //     from: userTextLocation,
    //     // Адрес конечной точки.
    //     to: 'Москва, ул. Льва Толстого, 16',
    //   });
    // });

    ymaps
      .geocode(adress, {
        results: 1,
      })
      .then(function (res) {
        // Выбираем первый результат геокодирования.
        const firstGeoObject = res.geoObjects.get(0),
          // Координаты геообъекта.
          coords = firstGeoObject.geometry.getCoordinates(),
          // Область видимости геообъекта.
          bounds = firstGeoObject.properties.get('boundedBy');
        // console.log(coords);

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
  }
  return <div className=" w-full h-full" id="map"></div>;
};
