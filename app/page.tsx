import {
  ArrowRight, BarChart3, BriefcaseBusiness, CalendarDays, Check,
  ChevronDown, CircleDollarSign, Clock3, FileCheck2, Fuel, Headphones,
  HeartHandshake, Mail, MapPin, Phone, Route, ShieldCheck,
  Sparkles, Truck, UserRoundCheck, WalletCards, Wrench
} from "lucide-react";

const benefits = [
  { icon: FileCheck2, title: "Белая зарплата", text: "Официальное оформление по ТК РФ" },
  { icon: Fuel, title: "Без личных расходов", text: "Топливо, парковки, мойки и сервис" },
  { icon: Headphones, title: "Поддержка на линии", text: "Диспетчер помогает в течение всей смены" },
  { icon: ShieldCheck, title: "Страхование и безопасность", text: "Полное страхование водителя и груза" },
  { icon: BriefcaseBusiness, title: "Комфортная смена", text: "Понятный маршрут, перерывы и чистая машина" },
  { icon: HeartHandshake, title: "Уважение и честность", text: "Честные условия и отношение к водителю" },
];

const faqs = [
  ["Какие документы нужны для трудоустройства?", "Права нужной категории, паспорт и стандартный комплект документов для оформления по ТК РФ. Точный список зависит от типа автомобиля."],
  ["Как происходит оплата?", "Аванс и расчёт дважды в месяц, строго по датам. Каждое начисление отражено в расчётном листе."],
  ["Где проходят маршруты?", "Основная работа — по городу и ближайшей области. Район и маршрут сообщаем заранее; возможные более дальние выезды согласовываем отдельно."],
  ["Есть ли стажировка для новых водителей?", "Перед первой самостоятельной сменой знакомим с техникой, базой, маршрутами и стандартами работы TransSky."],
];

function Logo({ light = false }: { light?: boolean }) {
  return <a className={`logo ${light ? "logo-light" : ""}`} href="#top" aria-label="TransSky"><span className="logo-symbol">T</span><b>TransSky</b></a>;
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <div className="container topbar-inner">
          <Logo />
          <nav aria-label="Основная навигация">
            <a href="#about">О компании</a><a href="#terms">Условия</a><a href="#drivers">Водителям</a><a href="#vacancy">Вакансии</a><a href="#contacts">Контакты</a>
          </nav>
          <a className="btn btn-orange btn-small" href="#vacancy">Оставить заявку</a>
        </div>
      </header>

      <section className="hero" id="top">
        <img className="hero-photo" src="/hero-city.png" alt="Городской грузовик TransSky на маршруте" />
        <div className="hero-wash" />
        <div className="container hero-content">
          <div className="hero-copy">
            <h1>Город.<br />Смена.<br /><em>Домой.</em></h1>
            <p>В основном — город и ближайшая область:<br />понятные маршруты и возвращение домой после смены.</p>
            <div className="hero-buttons">
              <a className="btn btn-orange" href="#vacancy">Стать водителем <ArrowRight /></a>
              <a className="btn btn-outline" href="#terms">Рассчитать доход</a>
            </div>
          </div>
          <div className="hero-route" aria-hidden="true">
            <span className="route-city route-start"><MapPin /> База</span>
            <i className="route-arc" />
            <span className="route-city route-end"><MapPin /> Город и область</span>
          </div>
        </div>
        <div className="hero-facts-wrap">
          <div className="container hero-facts">
            <div><Truck /><p><b>180+</b><span>машин в парке</span></p></div>
            <div><MapPin /><p><b>Домой после смены</b><span>на большинстве маршрутов</span></p></div>
            <div><CalendarDays /><p><b>Город — основа</b><span>маршрут сообщаем заранее</span></p></div>
            <div><ShieldCheck /><p><b>Поддержка на линии</b><span>в течение всей смены</span></p></div>
          </div>
        </div>
      </section>

      <section className="section income" id="terms">
        <div className="container">
          <div className="section-head"><h2>Вы знаете, за что<br />получаете каждый рубль</h2><p>Ставка за смену, доплаты и все начисления —<br />заранее и без сюрпризов.</p></div>
          <div className="income-grid">
            <article className="salary-card"><span className="micro">Средний доход в месяц</span><strong>180 000–260 000 ₽</strong><p>В зависимости от графика, типа автомобиля и количества смен.</p></article>
            <article className="pay-details">
              <div><CircleDollarSign /><p><b>Прозрачная ставка за смену</b><span>Без скрытых доплат и удержаний</span></p></div>
              <div><Clock3 /><p><b>Выплаты без задержек</b><span>Каждые 14 дней</span></p></div>
              <div><WalletCards /><p><b>Оплата всех расходов</b><span>Топливо, парковки, мойки и сервис</span></p></div>
              <div><Sparkles /><p><b>Бонусы за результат</b><span>Доплаты за план и аккуратную работу</span></p></div>
            </article>
            <article className="mini-card mini-dark"><span className="micro">Маршрут на смену</span><strong>Заранее</strong><p>Понятный район и точки<br />до выхода на линию</p><Route /></article>
            <article className="mini-card"><span className="micro">Оплата в срок</span><strong>20 <i>/</i> 10</strong><p>Аванс 20 числа<br />Расчёт 10 числа</p><WalletCards /></article>
            <article className="mini-card mini-control"><strong>Город —<br />основной формат</strong><p>Большинство смен — по городу<br />и ближайшей области</p><BarChart3 /></article>
          </div>
        </div>
      </section>

      <section className="fleet" id="drivers">
        <img className="fleet-photo" src="/fleet-city.png" alt="Городской грузовик из парка TransSky" />
        <div className="fleet-shade" />
        <div className="container fleet-content">
          <div className="fleet-copy">
            <h2>Рабочая машина<br />закреплена за вами</h2>
            <p>Мы ценим ваш труд и создаём условия,<br />в которых удобно работать каждый день.</p>
            <div className="fleet-features">
              <div><Truck /><p><b>Городской автопарк</b><span>Техника для ежедневных маршрутов</span></p></div>
              <div><UserRoundCheck /><p><b>Привычная машина</b><span>Закреплена за вами персонально</span></p></div>
              <div><Wrench /><p><b>Плановое ТО и сервис</b><span>Без потери времени и личных забот</span></p></div>
              <div><Headphones /><p><b>Техподдержка 24/7</b><span>Всегда на связи</span></p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="routes section" id="about">
        <div className="container routes-grid">
          <div className="routes-copy">
            <h2>Большинство маршрутов —<br />город и область.</h2>
            <p>Маршрут известен заранее.<br />Возможные выезды дальше<br />согласовываем отдельно.</p>
            <ul><li><Route /> Закреплённые районы</li><li><Clock3 /> Постоянные точки и объёмы</li><li><MapPin /> Возврат на базу после смены</li></ul>
            <a className="btn btn-outline" href="#vacancy">Как проходит смена <ArrowRight /></a>
          </div>
          <div className="map-card">
            <img src="/city-routes.png" alt="Схема городских маршрутов TransSky" />
            <span className="map-label label-spb">Север</span>
            <span className="map-label label-msk">Центр · База</span>
            <span className="map-label label-ekb">Запад</span>
            <span className="map-label label-krs">Юг</span>
            <span className="map-label label-vlk">Область</span>
          </div>
        </div>
      </section>

      <section className="support section">
        <div className="container"><h2>На маршруте вы не одни</h2><div className="support-grid">{benefits.map(({ icon: BenefitIcon, title, text }) => <article key={title}><span className="icon-box"><BenefitIcon /></span><p><b>{title}</b><span>{text}</span></p></article>)}</div></div>
      </section>

      <section className="faq section">
        <div className="container">
          <div className="faq-head"><h2>Часто задаваемые вопросы</h2><p>Не нашли ответ? <a href="mailto:hr@transsky.ru">Напишите нам</a></p></div>
          <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown /></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="referral">
        <div className="container referral-grid"><div className="bonus">+20 000 ₽</div><h2>Приведите водителя —<br />получите бонус</h2><p>Приведи водителя в TransSky —<br />и получи вознаграждение после его<br />первого месяца работы.</p></div>
      </section>

      <section className="application" id="vacancy">
        <img src="/hero-city.png" alt="" aria-hidden="true" className="application-bg" />
        <div className="application-overlay" />
        <div className="container application-grid">
          <div className="application-copy"><span className="orange-kicker">СТАНЬ ЧАСТЬЮ TRANSSKY</span><h2>Готовы выйти<br />на городской маршрут?</h2><p>Оставьте заявку — наш менеджер<br />свяжется с вами в ближайшее время<br />и расскажет про районы, смены и машины.</p><div className="contact-list"><a href="tel:+78007004545"><Phone /><span><b>8 800 700-45-45</b><small>Звонок бесплатный</small></span></a><a href="mailto:hr@transsky.ru"><Mail /><span><b>hr@transsky.ru</b><small>Ответим в течение дня</small></span></a></div></div>
          <form className="form-card" action="mailto:hr@transsky.ru" method="post">
            <div className="form-pair"><label>Имя<input name="name" required /></label><label>Телефон<input name="phone" type="tel" required /></label></div>
            <label>Город<input name="city" /></label>
            <label>Опыт работы<select name="experience"><option>Более 3 лет</option><option>1–3 года</option><option>Менее года</option></select></label>
            <button className="btn btn-orange" type="submit">Оставить заявку <ArrowRight /></button>
            <small>Нажимая кнопку, вы соглашаетесь с нашей<br />политикой конфиденциальности</small>
          </form>
        </div>
      </section>

      <footer id="contacts"><div className="container footer-grid"><div><Logo light /><p>Городские перевозки<br />и доставка по области</p></div><nav><a href="#about">О компании</a><a href="#terms">Условия</a><a href="#drivers">Водителям</a><a href="#vacancy">Вакансии</a><a href="#contacts">Контакты</a></nav><p>© TransSky, 2019–2026<br />Все права защищены</p></div></footer>
    </main>
  );
}
