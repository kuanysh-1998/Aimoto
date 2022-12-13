import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  toast } from 'react-toastify';

const Description = () => {
  const [watches, setWatches] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://aimoto-server-production.up.railway.app/watches/" + id)
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);

  return (
    <section className="description">
      <div className="container description__container">
        <div className="description__title">
          <h2>{watches.title}</h2>
          <h4>Харатеристики</h4>
          <a href={watches.instruction} download className="btn" onClick={() => {
            toast('Вы успешно скачали инструкцию!');
          }}>Скачать инструкцию в формате PDF</a>
        </div>

        <div className="description__model">
          <ul className="description__main">
            <h3>Основные характеристики</h3>
            <li className="description__item">Тип - смарт-часы</li>
            <li className="description__item">
              Операционная система - {watches.operativesystem}
            </li>
            <li className="description__item">
              Поддержка платформ - Android, iOS
            </li>
            <li className="description__item">
              Производитель процессора - {watches.processor}
            </li>
            <li className="description__item">
              Модель процессора - {watches.modelprocessor}
            </li>
            <li className="description__item">
              Частота процессора - {watches.rateprocessor}
            </li>
            <li className="description__item">
              Количество ядер процессора - {watches.numberyader}
            </li>
            <li className="description__item">
              Встроенная память - {watches.memory}
            </li>
            <li className="description__item">
              Оперативная память - {watches.operativememory}
            </li>
          </ul>

          <ul className="description__main">
            <h3>Дисплей</h3>
            <li className="description__item">
              Тип дисплея - {watches.display}
            </li>
            <li className="description__item">
              Диагональ дисплея - {watches.diagonaldisplay}
            </li>
            <li className="description__item">
              Разрешение дисплея - {watches.permissionscreen}
            </li>
            <li className="description__item">
              Способ отображения времени - цифровой (электронный)
            </li>
            <li className="description__item">Сенсорный экран - да</li>
          </ul>

          <ul className="description__main">
            <h3>Управление</h3>
            <li className="description__item">
              Тип управления - сенсорное, электронное
            </li>
            <li className="description__item">
              Количество кнопок управления - {watches.numberbutton}
            </li>
          </ul>

          <ul className="description__main">
            <h3>Беспроводная связь</h3>
            <li className="description__item">
              Поддержка Bluetooth - {watches.bluetooth}
            </li>
            <li className="description__item">
              Версия Bluetooth - {watches.versionbluetooth}
            </li>
            <li className="description__item">
              Поддержка Wi-Fi - {watches.wifi}
            </li>
            <li className="description__item">
              Спутниковая навигация - {watches.navigation}
            </li>
          </ul>

          <ul className="description__main">
            <h3>Корпус</h3>
            <li className="description__item">Цвет - {watches.color}</li>
            <li className="description__item">Длина - {watches.length}</li>
            <li className="description__item">Высота - {watches.height}</li>
            <li className="description__item">
              Защита от влаги - {watches.protectwater}
            </li>
            <li className="description__item">
              Стандарт защиты - {watches.standartprotect}
            </li>
          </ul>

          <ul className="description__main">
            <h3>Камера</h3>
            <li className="description__item">
              Встроенная камера - {watches.camera}
            </li>
            <li className="description__item">
              Количество пикселей - {watches.amountpics}
            </li>
          </ul>

          <ul className="description__main">
            <h3>Питание и зарядка</h3>
            <li className="description__item">
              Тип аккумулятор - {watches.typebattery}
            </li>
            <li className="description__item">
              Емкость аккумулятора - {watches.capacitybattery}
            </li>
            <li className="description__item">
              Время работы в режиме ожидания - {watches.workinexpect}
            </li>
            <li className="description__item">
              Время зарядки - {watches.timebattery}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Description;
