import { useState, useEffect } from "react";
import "./infowatch.scss";

const InfoWatch = () => {
    const [searchImei, setSearchImei] = useState(''); 
    const [imei, setImei] = useState([]);
    
    useEffect(() => {
      fetch("https://aimoto-server-production.up.railway.app/proshivka")
        .then((res) => res.json())
        .then((data) => setImei(data));
    }, []);

  return (
    <div className="info">
      <div className="container">
        <div className="info__search">
          <h2>Больше информации о часах</h2>
          <input
            placeholder="напишите свой IMEI..."
            value={searchImei}
            onChange={(e) => setSearchImei(e.target.value)}
            type="search"
          />
        </div>

        
        <table>
          <thead>
            <tr>
              <th>Модель</th>
              <th>IMEI</th>
              <th>Файл для прошивки</th>
              <th>Программа для прошивки</th>
              <th>Комментарий Инженера</th>
            </tr>
          </thead>
          <tbody>
            {imei
              .filter((imei) =>
                imei.imei.toUpperCase().includes(searchImei.toUpperCase())
              )
              .map(({id, model, file, program, Comment, imei}) => {
                return (
                  <tr key={id}>
                    <td>{model}</td>
                    <td>{imei}</td>
                    <td> <a href={file} download target="_blank" rel="noreferrer">Файл для прошивки</a></td>
                    <td> <a href={program} download target="_blank" rel="noreferrer">Программа для прошивки</a></td>
                    <td>{Comment}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InfoWatch;
