"use client";

import { FormEvent, useState } from "react";
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
  Globe2,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Truck,
  User,
  UserRoundPlus,
  Warehouse,
  Wrench,
  X,
} from "lucide-react";

const phoneDisplay = "+7(495)023-84-04";
const phoneHref = "tel:+74950238404";

const diagnostics = [
  { Icon: Activity, label: <>Подвеска<br />и ходовая часть</> },
  { Icon: Disc3, label: <>Тормозная<br />система</> },
  { Icon: Gauge, label: <>Рулевое<br />управление</> },
  { Icon: Droplets, label: <>Двигатель<br />и течи</> },
  { Icon: CodeXml, label: <>Ошибки и<br />общий осмотр</> },
];

const steps = [
  { Icon: ClipboardPenLine, title: "1. Оставьте заявку", text: <>Заполните форму<br />ниже за 1 минуту</> },
  { Icon: CalendarClock, title: "2. Подтвердите удобное время", text: <>Мы свяжемся с вами<br />для подтверждения</> },
  { Icon: Warehouse, title: "3. Приезжайте в сервис", text: <>Проведём диагностику<br />быстро и бесплатно</> },
];

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="5 ТОНН — наверх">
      <span className="brand-number">5</span>
      <span className="brand-words"><b>ТОНН</b><small>СЕРВИС ДЛЯ ТЕХ, КТО В ДЕЛЕ</small></span>
    </a>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <div className="section-title"><i /><h2>{children}</h2><i /></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
    window.location.href = phoneHref;
  }

  return (
    <main id="top">
      <header className="site-header">
        <Logo />
        <div className="header-controls">
          <a className="top-phone" href={phoneHref}><Phone /><b>{phoneDisplay}</b></a>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="site-menu" aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <nav className={menuOpen ? "site-menu is-open" : "site-menu"} id="site-menu" aria-label="Навигация">
          <a href="#diagnostics" onClick={() => setMenuOpen(false)}>Что проверяем</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Как записаться</a>
          <a href="#terms" onClick={() => setMenuOpen(false)}>Условия акции</a>
          <a href="#signup" onClick={() => setMenuOpen(false)}>Записаться</a>
          <a href="#contacts" onClick={() => setMenuOpen(false)}>Контакты</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">БЕСПЛАТНАЯ<em>ДИАГНОСТИКА</em><span>КОММЕРЧЕСКОГО<br />ТРАНСПОРТА <b>ДО 5 ТОНН</b></span></h1>
          <p>Для новых клиентов автосервиса 5 ТОНН.<br />Быстро проверим состояние автомобиля<br />и подскажем, что требует внимания.</p>
          <div className="hero-actions">
            <a className="cta cta-primary" href="#signup"><CalendarDays />Записаться на диагностику</a>
            <a className="cta cta-secondary" href={phoneHref}><Phone />Позвонить</a>
          </div>
        </div>
        <div className="hero-graphics" aria-hidden="true"><span /><span /><span /></div>
        <img className="truck-photo" src="/diagnostic-truck.png" alt="Белый коммерческий фургон до 5 тонн" />
      </section>

      <section className="diagnostics" id="diagnostics">
        <SectionTitle>Что входит в <em>бесплатную</em> диагностику</SectionTitle>
        <div className="diagnostic-grid">
          {diagnostics.map(({ Icon, label }, index) => <article key={index}><Icon /><h3>{label}</h3></article>)}
        </div>
      </section>

      <section className="process" id="process">
        <SectionTitle>Как получить диагностику</SectionTitle>
        <div className="steps-grid">
          {steps.map(({ Icon, title, text }, index) => (
            <div className="step-slot" key={title}>
              <article className="step-card"><b className="step-number">{index + 1}</b><Icon /><h3>{title}</h3><p>{text}</p></article>
              {index < 2 && <ChevronRight className="step-chevron" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </section>

      <section className="terms" id="terms">
        <div className="terms-title"><ClipboardCheck /><h2>Условия акции</h2></div>
        <div className="terms-grid">
          <div><UserRoundPlus /><b>Только для<br />новых клиентов</b></div>
          <div><CalendarClock /><b>По предварительной<br />записи</b></div>
          <div><Truck /><b>Для транспорта<br />до 5 тонн</b></div>
          <div><Wrench /><b>Без разборки<br />и сложных измерений</b></div>
        </div>
      </section>

      <section className="signup" id="signup">
        <SectionTitle>Запишитесь сейчас</SectionTitle>
        <form className="signup-form" onSubmit={submitForm}>
          <label><User /><span className="sr-only">Имя</span><input name="name" placeholder="Имя" autoComplete="name" required /></label>
          <label><Phone /><span className="sr-only">Телефон</span><input name="phone" type="tel" placeholder="Телефон" autoComplete="tel" pattern="[0-9+()\- ]{10,}" required /></label>
          <label><Truck /><span className="sr-only">Марка и модель</span><input name="vehicle" placeholder="Марка и модель" required /></label>
          <button className="submit-cta" type="submit"><CheckCircle2 />Получить бесплатную диагностику</button>
        </form>
        <p className="privacy"><ShieldCheck />Ваши данные остаются на устройстве. Для записи откроется звонок в сервис.</p>
        {submitted && <p className="form-status" role="status">Позвоните нам — заявка займёт меньше минуты.</p>}
      </section>

      <footer id="contacts">
        <div className="footer-grid">
          <div><MapPin /><b>Балашиха</b></div>
          <div><MapPin /><b>Коломна</b></div>
          <a href={phoneHref}><Phone /><b>{phoneDisplay}</b></a>
          <a href="#top"><Globe2 /><b>5tones.ru</b></a>
          <div className="footer-wide"><Truck /><b>Работаем с коммерческим транспортом</b></div>
        </div>
        <div className="footer-bars" aria-hidden="true" />
      </footer>
    </main>
  );
}
