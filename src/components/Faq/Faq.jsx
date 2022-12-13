import "./faq.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import reg1 from '../../assets/reg1.jpg'
import reg2 from '../../assets/reg2.png'
import reg3 from '../../assets/reg3.jpg'
import reg4 from '../../assets/reg4.jpg'
import {useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";



const Faq = () => {
    const [expanded, setExpanded] = useState(false);
    const handleChange = (isExpanded, panel) => {
        setExpanded(isExpanded ? panel : false)
    }
  return (
    <div className="faq">
      <div className="container">
        <div className="faq__content">
          <Accordion style={{borderRadius: '2rem', padding: '0.7rem', background:'#000000', border: '1px solid #fff'}} expanded={expanded === 'panel1'} onChange={(e, isExpanded) => handleChange(isExpanded, 'panel1')}>
            <AccordionSummary
              id="panel1-header"
              aria-controls="panel1-content"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography style={{fontSize: '1.3rem', fontWeight:'bold', color: '#fff'}}>Вопросы по WhatsApp и Telegram</Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography style={{color: '#fff'}}> 
                    <h3 style={{fontSize: '1.2rem', textAlign: 'center', marginBottom: '0.7rem'}}>Помощь с WhatsApp</h3>
                    <p style={{marginBottom: '0.7rem'}}>Для авторизации в WhatsApp необходимо установить приложение, например “Planet VPN”.</p>
                    <p style={{fontWeight: 'bold', color: '#a6ff00', marginBottom: '0.5rem'}}>Для этого:</p>
                    <ul style={{display: 'flex', flexDirection: 'column', rowGap: '0.7rem'}}>
                        <li>1. Зайдите в “Магазин приложений” на часах;</li>
                        <li>2. Установите “Planet VPN” и включите защиту;</li>
                        <li>3. Теперь можно запускать WhatsApp!</li>
                        <li style={{fontWeight: 'bold', color: '#a6ff00',}}>!Обратите внимание!</li>
                        <li>Необходимо отключить функцию “Блокировка незнакомых номеров” в мобильном приложении Aimoto Connect, чтобы прошел звонок с кодом для авторизации WhatsApp.</li>
                        <li>4. После успешной авторизации зайдите в приложение “Planet VPN” и нажмите “Отключиться”;</li>
                        <li>5. В случае неудачи смените регион в “Planet VPN” и повторите попытку.</li>
                    </ul>
                </Typography>
            </AccordionDetails>

            <AccordionDetails>
                <Typography style={{color: '#fff'}}> 
                    <h3 style={{fontSize: '1.2rem', textAlign: 'center', marginBottom: '0.7rem'}}>Помощь с Telegram</h3>
                    <p style={{marginBottom: '0.7rem'}}>Для корректной работы Telegram сначала надо пройти регистрацию через смартфон, а затем авторизоваться на часах спустя сутки.</p>
                    <p style={{fontWeight: 'bold'}}>При возникновении сложностей с получением уведомлений, необходимо:</p>
                    <ul style={{display: 'flex', flexDirection: 'column', rowGap: '0.7rem'}}>
                        <li>1. Открыть настройки;</li>
                        <li>2. Выбрать “Уведомления и звуки”;</li>
                        <li>3. Нажать на кнопку “Сбросить настройки уведомлений”.</li>
                    </ul>
                </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{borderRadius: '2rem', padding: '0.7rem', background:'#000000', border: '1px solid #fff'}} expanded={expanded === 'panel2'} onChange={(e, isExpanded) => handleChange(isExpanded, 'panel2')}>
            <AccordionSummary
              id="panel2-header"
              aria-controls="panel2-content"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography style={{fontSize: '1.3rem', fontWeight:'bold', color: '#fff'}}>Регистрация часов</Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography style={{color: '#fff'}}> 
                    <h3 style={{fontSize: '1.2rem', textAlign: 'center', marginBottom: '0.7rem'}}>Проблема с добавлением часов в приложении</h3>
                    <p style={{marginBottom: '0.5rem'}}>Для решения проблемы "такой ID уже зарегистрирован" необходимо отправить на адрес электронной почты <a style={{color: '#a6ff00', }} href="mailto:helpdesk@knopka24.ru" target='_blank' rel="noreferrer">helpdesk@knopka24.ru</a> сообщение с фотографией или текстом RegCode (квадратная наклейка с QR-кодом, находится на задней стенке часов).</p>
                    <p>Если Вы получили часы от предыдущего владельца - можете обратиться к нему с просьбой открепить часы от текущей учетной записи самостоятельно. Для этого ему необходимо зайти в приложение, далее: МЕНЮ <MdKeyboardArrowRight/> УСТРОЙСТВА <MdKeyboardArrowRight/>  УДАЛИТЬ УСТРОЙСТВО</p>
                </Typography>
            </AccordionDetails>

          </Accordion>

          <Accordion style={{borderRadius: '2rem', padding: '0.7rem', background:'#000000', border: '1px solid #fff'}} expanded={expanded === 'panel3'} onChange={(e, isExpanded) => handleChange(isExpanded, 'panel3')}>
            <AccordionSummary
              id="panel3-header"
              aria-controls="panel3-content"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography style={{fontSize: '1.3rem', fontWeight:'bold', color: '#fff'}}>Гарантия</Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography style={{color: '#fff'}}> 
                    <p style={{marginBottom: '0.5rem'}}>Все товары, представленные на сайте, продаются с гарантией от производителя, действующей на территории России. Срок гарантийного обслуживания и детальные условия гарантии каждого конкретного товара указаны в эксплуатационных документах.</p>
                    <p style={{marginBottom: '0.5rem'}}>Прежде чем начать эксплуатацию, рекомендуем Вам внимательно ознакомиться с гарантийными условиями и инструкцией по эксплуатации — это поможет не допустить возможных проблем в случае неправильного использования товара.</p>
                    <p style={{marginBottom: '0.5rem'}}>Чтобы избежать возможных недоразумений, необходимо сохранять на протяжении гарантийного срока все документы, которые прилагаются к товару при его продаже. Гарантийный талон находится в комплекте вместе с товаром.</p>
                    <p style={{marginBottom: '0.5rem'}}>Гарантийный ремонт осуществляется в течение предусмотренного гарантийного срока представителями производителя при соблюдении следующих условий:</p>
                    <ul>
                      <li> 1. наличие заполненного гарантийного талона с печатью/штампом продавца;</li>
                      <li> 2. наличие документа, который подтверждает оплату товара;</li>
                      <li> 3. сохранение всех предусмотренных пломб на товаре.</li>
                    </ul>
                    <p style={{marginBottom: '0.5rem'}}>Гарантийный срок составляет 12 месяцев со дня покупки устройства.</p>
                    <p style={{marginBottom: '0.5rem'}}> <span style={{color: '#a6ff00'}}>Обратите внимание</span>, что гарантийное обслуживание не распространяется на товар, неисправности в котором возникли после передачи товара покупателю в результате:</p>
                    <ul>
                      <li> 1. Нарушения потребителем правил эксплуатации, хранения или транспортировки товара, указанных в сопроводительных эксплуатационных документах (в инструкции).</li>
                      <li> 2. Несанкционированного ремонта.</li>
                      <li> 3. Отклонений норм питательных, телекоммуникационных и кабельных сетей.</li>
                      <li> 4. Неправильной установки и подключения изделия.</li>
                    </ul>
                </Typography>
            </AccordionDetails>

          </Accordion>

          <Accordion style={{borderRadius: '2rem', padding: '0.7rem', background:'#000000', border: '1px solid #fff'}} expanded={expanded === 'panel4'} onChange={(e, isExpanded) => handleChange(isExpanded, 'panel4')}>
            <AccordionSummary
              id="panel4-header"
              aria-controls="panel4-content"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography style={{fontSize: '1.3rem', fontWeight:'bold', color: "#fff"}}>Инструкция по настройке часов</Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography style={{color: '#fff'}}> 
                    <h3 style={{fontSize: '1.2rem', textAlign: 'center', marginBottom: '0.7rem'}}>Инструкция по настройке часов</h3>
                    <p style={{marginBottom: '0.5rem'}}>Установите себе на смартфон приложение Knopka911.</p>
                    <p style={{marginBottom: '0.5rem'}}>Нажмите кнопку «РЕГИСТРАЦИЯ» и следуйте инструкциям в приложении.</p>
                    <img src={reg1} style={{width: '100%', maxWidth: '19rem'}} alt='img' />
                    <p style={{marginTop: '0.5rem'}}>В окне регистрации введите адрес электронной почты, затем необходимо согласиться с условиями регистрации указанными под вводом почты. Места согласия расположены слева от букв (Я).</p>
                    <p style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>После выполнения вышеперечисленного нажмите на кнопку "Регистрация".</p>
                    <img src={reg2} style={{width: '100%', maxWidth: '19rem'}} alt='img' />
                    <p style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>После успешной регистрации вам будет предложено добавить устройство.</p>
                    <p style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>Нажмите кнопку «ДОБАВИТЬ УСТРОЙСТВО».</p>
                    <img src={reg3} style={{width: '100%', maxWidth: '19rem'}} alt='img' />
                    <p style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>Выберите свою модель часов из списка.</p>
                    <img src={reg4} style={{width: '100%', maxWidth: '19rem'}} alt='img' />
                    <p style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>Завершите процесс добавления устройства, заполнив три поля:</p>
                    <ul style={{marginBottom: '0.5rem'}}>
                      <li>1. В поле «Имя устройства» вы можете написать имя обладателя часов Aimoto, либо дать устройству любое другое имя.</li>
                      <li>2. В поле REG CODE устройства вам необходимо отсканировать либо ввести 15-значный код, который находится на задней крышке часов.</li>
                      <li>3. В поле Номер SIM вам необходимо указать номер SIM, который будет использоваться в часах. При необходимости номер может быть изменен в настройках приложения.</li>
                    </ul>
                    <p style={{fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.5rem', color: '#a6ff00'}}>Важно!</p>
                    <p style={{marginBottom: '0.5rem'}}>Перед первым использованием убедитесь, что:</p>
                    <ul>
                      <li>1. На сим-карте отсутствует PIN-код.</li>
                      <li>2. Выбранный тариф включает интернет. </li>
                      <li>3. Баланс на сим-карте положительный.</li>
                    </ul>
                </Typography>
            </AccordionDetails>

          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
