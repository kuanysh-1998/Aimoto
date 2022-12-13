import { AiOutlineMail } from "react-icons/ai";
import { BsTelegram, BsWhatsapp } from "react-icons/bs";
import { useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import {  toast } from 'react-toastify';
import { useLocation } from "react-router";


const Contact = () => {
  const form = useRef();
  const scrollRef = useRef();
  const location = useLocation();
  
  const handleScroll = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth"  });
  };
  useEffect(() => {
    if (location.hash === "#support") {
      handleScroll();
    }
  }, [location]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_0mqxijf",
      "template_pzmtyll",
      form.current,
      "DM_QHtUUsdqggcQL2"
    );
    e.target.reset();
  };

  return (
    <section ref={scrollRef} id="support" className="contact">
      <div className="contact__title">
        <h2>Связаться с техподдержкой</h2>
        <h5>Служба поддержки работает в будние дни с 9:00 до 19:00</h5>
      </div>
      <div className="container contact__container">
        <div className="contact__options" >
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>helpdesk@knopka24.ru</h5>
            <a href="mailto:helpdesk@knopka24.ru" target="_blank" rel="noreferrer">
              Отправить сообщение
            </a>
          </article>
          <article className="contact__option">
            <BsTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>Aimotobot</h5>
            <a href="https://web.telegram.org/k/#@Aimotobot" target="_blank" rel="noreferrer">
              Отправить сообщение
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+79253592529</h5>
            <a
              href="https://api.whatsapp.com/send?phone=79253592529"
              target="_blank" rel="noreferrer"
            >
              Отправить сообщение
            </a>
          </article>
        </div>

        <form ref={form} className="contact__form" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Ваше имя" required />
          <input type="text" name="email" placeholder="Ваш e-mail" />
          <textarea
            name="message"
            rows="7"
            placeholder="Пожалуйста, максимально подробно опишите неисправность. Укажите по возможности: IMEI, RegCode, номер сим-карты (в часах), модель часов. Вся эта информация поможет нам решить проблему как можно быстрее. Спасибо"
            required
          />
          <button type="submit" className="btn btn-primary" onClick={()=> toast('Ваше сообщение успешно отправлено!')}>
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
