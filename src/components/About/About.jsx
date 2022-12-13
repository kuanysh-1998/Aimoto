import './about.scss';
import location from "../../assets/location.png";
import expertiza from "../../assets/expertiza.png";
import abonents from "../../assets/abonents.png";
import diploma from "../../assets/diploma.png";
import medcenter from "../../assets/medcenter.png";
import withchild from "../../assets/withchild.png";
import Evolution from "./Evolution";
import Reason from './Reason';

const About = () => {
  return (
    <>
      <div className="about">
        <div className="container">
          <h2>Опыт работы</h2>
          <div className="about__experience">
            <div className="about__experience-left">
              <article className="about__details">
                <img src={location} alt="location" />
                <p>
                  Мы работаем <span>во всех регионах</span> России
                </p>
              </article>
              <article className="about__details">
                <img src={expertiza} alt="location" />
                <p>
                  Техническая <span>экспертиза</span> в области телемедицины
                </p>
              </article>
              <article className="about__details">
                <img src={diploma} alt="location" />
                <p>
                  Все наши сотрудники имеют высшую квалификацию и{" "}
                  <span>многолетний опыт</span> работы России
                </p>
              </article>
            </div>

            <div className="about__experience-right">
              <article className="about__details">
                <img src={abonents} alt="location" />
                <p>
                  На обслуживании <span>более 200000 абонентов</span>
                </p>
              </article>
              <article className="about__details">
                <img src={withchild} alt="location" />
                <p>
                  Сотрудники Центра помощи специализируются на работе{" "}
                  <span>с пожилыми и детьми</span>
                </p>
              </article>
              <article className="about__details">
                <img src={medcenter} alt="location" />
                <p>
                  AIMOTO сотрудничает с ведущими{" "}
                  <span>медицинскими центрами</span> России
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>

      <Evolution />
      <Reason />
    </>
  );
};

export default About;
