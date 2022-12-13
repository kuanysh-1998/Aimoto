import "./reason.scss";

import { MdTouchApp } from "react-icons/md";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { BiPlusMedical } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { GiMaterialsScience } from "react-icons/gi";
import { IoMdNotifications } from "react-icons/io";

const Reason = () => {
  return (
    <div className="reason">
      <div className="container">
        <div className="reason__content">
          <div className="reason__clients">
            <div className="reason__item">
              <MdTouchApp className="reason__icon" />
              <p>Мы всегда с Вами 24 часа в сутки 7 дней в неделю</p>
            </div>

            <div className="reason__item">
              <GiMaterialsScience className="reason__icon" />
              <p>Новейшие информационно-технические системы</p>
            </div>

            <div className="reason__item">
              <AiOutlineMedicineBox className="reason__icon" />
              <p>Персонал с медико-социальным образованием</p>
            </div>
          </div>

          <div className="reason__clients">
            <div className="reason__item">
              <BiPlusMedical className="reason__icon" />
              <p>Использование внутренних регламентов работы скорой помощи</p>
            </div>

            <div className="reason__item">
              <FiPhoneCall className="reason__icon" />
              <p>Прямая связь с региональными станциями Скорой помощи</p>
            </div>

            <div className="reason__item">
              <IoMdNotifications className="reason__icon" />
              <p>Мгновенный прием и обработка тревожных сигналов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
