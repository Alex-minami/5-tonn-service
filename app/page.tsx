import {
  Activity,
  CalendarClock,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  ClipboardPenLine,
  CodeXml,
  Disc3,
  Droplets,
  Gauge,
  MapPin,
  Menu,
  Phone,
  ScanSearch,
  ShieldCheck,
  Truck,
  User,
  UserRoundPlus,
  Warehouse,
  Wrench,
} from "lucide-react";

const phoneDisplay = "+7(495)023-84-04";
const phoneHref = "tel:+74950238404";

const diagnostics = [
  { icon: Activity, title: <>Подвеска<br />и ходовая часть</> },
  { icon: Disc3, title: <>Тормозная<br />система</> },
  { icon: Gauge, title: <>Рулевое<br />управление</> },
  { icon: Droplets, title: <>Двигатель<br />и течи</> },
  { icon: CodeXml, title: <>Ошибки и<br />общий осмотр</> },
];

const steps = [
  {
    icon: ClipboardPenLine,
    title: <>1. Оставьте заявку</>,
    text: <>Заполните форму<br />ниже за 1 минуту</>,
  },
  {
    icon: CalendarClock,
    title: <>2. Подтвердите<br />удобное время</>,
    text: <>Мы свяжемся с вами<br />для подтверждения</>,
  },
  {
    icon: Warehouse,
    title: <>3. Приезжайте<br />в сервис</>,
    text: <>Проведём диагностику<br />быстро и бесплатно</>,
  },
];

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="5 Тонн — на главную">
      <span className="brand-five">5</span>
      <span className="brand-copy">
        <strong>ТОНН</strong>
        <small>СЕРВИС ДЛЯ ТЕХ, КТО В ДЕЛЕ</small>
      </span>
    </a>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-title">
      <span className="speed-lines" aria-hidden="true" />
      <h2>{children}</h2>
      <span className="speed-lines" aria-hidden="true" />
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <div className="shell header-inner">
          <Brand />
          <div className="header-actions">
            <a className="header-phone" href={phoneHref} aria-label={`Позвонить ${phoneDisplay}`}>
              <Phone />
              <span>{phoneDisplay}</span>
            </a>
            <a className="menu-button" href="#contacts" aria-label="Перейти к контактам">
              <Menu />
            </a>
          </div>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-slashes hero-slashes-top" aria-hidden="true" />
        <div className="hero-slashes hero-slashes-bottom" aria-hidden="true" />
        <div className="shell hero-inner">
          <div className="hero-copy">
            <h1 id="hero-title">
              БЕСПЛАТНАЯ
              <em>ДИАГНОСТИКА</em>
              <span>КОММЕРЧЕСКОГО<br />ТРАНСПОРТА <b>ДО 5 ТОНН</b></span>
            </h1>
            <p>Для новых клиентов автосервиса 5 ТОНН.<br />Быстро проверим состояние автомобиля<br />и подскажем, что требует внимания.</p>
            <div className="hero-buttons">
              <a className="button button-primary" href="#signup"><CalendarDays />Записаться на диагностику</a>
              <a className="button button-secondary" href={phoneHref}><Phone />Позвонить</a>
            </div>
          </div>
          <img className="hero-truck" src="/diagnostic-truck.png" alt="Белый коммерческий фургон до 5 тонн" />
        </div>
      </section>

      <section className="content-section diagnostics" aria-labelledby="diagnostics-title">
        <div className="shell">
          <SectionTitle>Что входит в <em id="diagnostics-title">бесплатную</em> диагностику</SectionTitle>
          <div className="diagnostics-grid">
            {diagnostics.map(({ icon: Icon, title }, index) => (
              <article className="diagnostic-card" key={index}>
                <span className="diagnostic-icon"><Icon /></span>
                <h3>{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section process" aria-labelledby="process-title">
        <div className="shell">
          <SectionTitle><span id="process-title">Как получить диагностику</span></SectionTitle>
          <div className="steps-grid">
            {steps.map(({ icon: Icon, title, text }, index) => (
              <div className="step-wrap" key={index}>
                <article className="step-card">
                  <span className="step-number">{index + 1}</span>
                  <Icon className="step-icon" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
                {index < steps.length - 1 && <ChevronRight className="step-arrow" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="promo shell" aria-labelledby="promo-title">
        <div className="promo-heading"><ClipboardCheck /><h2 id="promo-title">Условия акции</h2></div>
        <div className="promo-grid">
          <div><UserRoundPlus /><p>Только для<br />новых клиентов</p></div>
          <div><CalendarClock /><p>По предварительной<br />записи</p></div>
          <div><Truck /><p>Для транспорта<br />до 5 тонн</p></div>
          <div><Wrench /><p>Без разборки<br />и сложных измерений</p></div>
        </div>
      </section>

      <section className="signup content-section" id="signup" aria-labelledby="signup-title">
        <div className="shell">
          <SectionTitle><span id="signup-title">Запишитесь сейчас</span></SectionTitle>
          <form className="signup-form" action={phoneHref}>
            <label><User /><span className="sr-only">Имя</span><input name="name" placeholder="Имя" autoComplete="name" /></label>
            <label><Phone /><span className="sr-only">Телефон</span><input name="phone" type="tel" placeholder="Телефон" autoComplete="tel" /></label>
            <label><Truck /><span className="sr-only">Марка и модель</span><input name="vehicle" placeholder="Марка и модель" /></label>
            <a className="button submit-button" href={phoneHref} aria-label={`Позвонить и записаться на диагностику по номеру ${phoneDisplay}`}>
              <CheckCircle2 />Получить бесплатную диагностику
            </a>
          </form>
          <p className="privacy"><ShieldCheck />Ваши данные защищены и не передаются третьим лицам</p>
        </div>
      </section>

      <footer id="contacts">
        <div className="shell footer-grid">
          <div className="footer-item"><MapPin /><b>Балашиха</b></div>
          <div className="footer-item"><MapPin /><b>Коломна</b></div>
          <a className="footer-item footer-phone" href={phoneHref}><Phone /><b>{phoneDisplay}</b></a>
          <a className="footer-item" href="#top"><ScanSearch /><b>5tones.ru</b></a>
          <div className="footer-item footer-wide"><Truck /><b>Работаем с коммерческим транспортом</b></div>
        </div>
        <div className="footer-stripes" aria-hidden="true" />
      </footer>
    </main>
  );
}
