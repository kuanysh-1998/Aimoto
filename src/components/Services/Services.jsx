import { useEffect, useState } from "react";


const Services = () => {
  const [services, setServices] = useState([]);
  const [searchCity, setSearchCity] = useState("");

  useEffect(() => {
    fetch("https://aimoto-server-production.up.railway.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  let filteredCitiesAfterSearch = services.filter((service) =>
    service.city.toUpperCase().includes(searchCity.toUpperCase())
  ).length;

  return (
    <div className="services">
      <div className="container">
        <div className="services__search">
          <h2>СЕРВИСНЫЕ ЦЕНТРЫ</h2>
          <input
            placeholder="Напишите свой город..."
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            type="search"
          />
        </div>
        
        <table>
          <thead>
            <tr>
              <th>Город</th>
              <th>Название АСЦ (ССЦ)</th>
              <th>Фактический адрес</th>
              <th>Телефоны</th>
            </tr>
          </thead>
          <tbody>
            {services
              .filter((service) =>
                service.city.toUpperCase().includes(searchCity.toUpperCase())
              )
              .map((value, key) => {
                return (
                  <tr key={key}>
                    <td>{value.city}</td>
                    <td>{value.name}</td>
                    <td> <a href={value.link} target="_blank" rel="noreferrer">{value.adress}</a> </td>
                    <td>{value.number}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        {!filteredCitiesAfterSearch && (
            <h3 className="services__notfound">
              К сожалению, в вашем городе нет нашего сервисного центра. Вам необходимо сообщить на почту <a href="mailto:pi@knopka24.ru" target='_blank' rel="noreferrer">pi@knopka24.ru</a> следующие данные:
              ФИО, Ваш Тел. и адрес проживания, а также краткое описание дефекта
              часов и фото чека, электронной квитанции. После оформится заявка
              на ремонт/диагностику, далее Вам направят номер накладной по
              которой Вы сможете сдать часы в ближайший к Вам пункт ТК СДЭК.
            </h3>
          )}
      </div>
    </div>
  );
};

export default Services;
