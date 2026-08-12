import {
  ArrowRight, BarChart3, BriefcaseBusiness, CalendarDays, Check,
  ChevronDown, CircleDollarSign, Clock3, FileCheck2, Fuel, Headphones,
  HeartHandshake, Mail, MapPin, Phone, Route, ShieldCheck, ShowerHead,
  Sparkles, Truck, UserRoundCheck, WalletCards, Wrench
} from "lucide-react";

const benefits = [
  { icon: FileCheck2, title: "Белая зарплата", text: "Официальное оформление по ТК РФ" },
  { icon: Fuel, title: "Без личных расходов", text: "Топливо, платные дороги и стоянки" },
  { icon: Headphones, title: "Поддержка 24/7", text: "Диспетчер на связи в любое время" },
  { icon: ShieldCheck, title: "Страхование и безопасность", text: "Полное страхование водителя и груза" },
  { icon: ShowerHead, title: "Комфорт в дороге", text: "Парковки, душ и места отдыха по маршруту" },
  { icon: HeartHandshake, title: "Уважение и честность", text: "Честные условия и отношение к водителю" },
];

const faqs = [
  ["Какие документы нужны для трудоустройства?", "Права категории CE, паспорт, карта СКЗИ и стандартный комплект документов для оформления по ТК РФ."],
  ["Как происходит оплата?", "Аванс и расчёт дважды в месяц, строго по датам. Каждое начисление отражено в расчётном листе."],
  ["Какие маршруты и регионы?", "Основные направления проходят между Москвой, Санкт-Петербургом, Екатеринбургом, Красноярском, Ростовом-на-Дону и Владивостоком."],
  ["Есть ли стажировка для новых водителей?", "Перед первым самостоятельным рейсом знакомим с техникой, базой и стандартами работы TransSky."],
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
        <img className="hero-photo" src="/hero-truck.png" alt="Тягач TransSky на магистрали" />
        <div className="hero-wash" />
        <div className="container hero-content">
          <div className="hero-copy">
            <h1>Дорога<br />платит<br /><em>честно.</em></h1>
            <p>Магистральные перевозки по всей России<br />с честными ставками и заботой о водителях.</p>
            <div className="hero-buttons">
              <a className="btn btn-orange" href="#vacancy">Стать водителем <ArrowRight /></a>
              <a className="btn btn-outline" href="#terms">Рассчитать доход</a>
            </div>
          </div>
          <div className="hero-route" aria-hidden="true">
            <span className="route-city route-start"><MapPin /> Москва</span>
            <i className="route-arc" />
            <span className="route-city route-end"><MapPin /> Владивосток</span>
          </div>
        </div>
        <div className="hero-facts-wrap">
          <div className="container hero-facts">
            <div><Truck /><p><b>180+</b><span>машин в парке</span></p></div>
            <div><MapPin /><p><b>2 недели</b><span>средняя вахта</span></p></div>
            <div><CalendarDays /><p><b>15 из 15</b><span>рейсов в месяц</span></p></div>
            <div><ShieldCheck /><p><b>Полная поддержка</b><span>на всех этапах</span></p></div>
          </div>
        </div>
      </section>

      <section className="section income" id="terms">
        <div className="container">
          <div className="section-head"><h2>Вы знаете, за что<br />получаете каждый рубль</h2><p>Прозрачная система расчётов<br />и справедливые условия работы.</p></div>
          <div className="income-grid">
            <article className="salary-card"><span className="micro">Средний доход в месяц</span><strong>180 000–260 000 ₽</strong><p>В зависимости от маршрутов и опыта.</p></article>
            <article className="pay-details">
              <div><CircleDollarSign /><p><b>Прозрачные ставки</b><span>Без скрытых доплат и удержаний</span></p></div>
              <div><Clock3 /><p><b>Выплаты без задержек</b><span>Каждые 14 дней</span></p></div>
              <div><WalletCards /><p><b>Оплата всех расходов</b><span>Топливо, платные дороги, стоянки</span></p></div>
              <div><Sparkles /><p><b>Бонусы за результат</b><span>Доплаты за перевыполнение плана</span></p></div>
            </article>
            <article className="mini-card mini-dark"><span className="micro">Рейсов в месяц</span><strong>15 из 15</strong><p>Стабильная загрузка<br />без простоев</p><CalendarDays /></article>
            <article className="mini-card"><span className="micro">Оплата в срок</span><strong>20 <i>/</i> 10</strong><p>Аванс 20 числа<br />Расчёт 10 числа</p><WalletCards /></article>
            <article className="mini-card mini-control"><strong>Ваш доход —<br />ваш контроль</strong><p>Личный кабинет с полной<br />статистикой и документами</p><BarChart3 /></article>
          </div>
        </div>
      </section>

      <section className="fleet" id="drivers">
        <img className="fleet-photo" src="/fleet-truck.png" alt="Новый тягач из парка TransSky" />
        <div className="fleet-shade" />
        <div className="container fleet-content">
          <div className="fleet-copy">
            <h2>Машина закреплена<br />лично за вами</h2>
            <p>Мы ценим ваш труд и создаём условия,<br />в которых удобно работать каждый день.</p>
            <div className="fleet-features">
              <div><Truck /><p><b>Новый и обслуженный парк</b><span>Техника не старше 3 лет</span></p></div>
              <div><UserRoundCheck /><p><b>Своё — значит ваше</b><span>Машина закреплена персонально</span></p></div>
              <div><Wrench /><p><b>Плановое ТО и сервис</b><span>Без потери времени и личных забот</span></p></div>
              <div><Headphones /><p><b>Техподдержка 24/7</b><span>Всегда на связи</span></p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="routes section" id="about">
        <div className="container routes-grid">
          <div className="routes-copy">
            <h2>Загрузки круглый год.<br />Техника не простаивает.</h2>
            <p>Работаем по всей России —<br />от крупных городов до<br />удалённых регионов.</p>
            <ul><li><Route /> Магистральные направления</li><li><Clock3 /> Постоянные объёмы</li><li><MapPin /> Гибкие маршруты</li></ul>
            <a className="btn btn-outline" href="#vacancy">Смотреть маршруты <ArrowRight /></a>
          </div>
          <div className="map-card">
            <img src="/russia-routes.png" alt="Карта маршрутов TransSky по России" />
            <span className="map-label label-spb">Санкт-Петербург</span>
            <span className="map-label label-msk">Москва</span>
            <span className="map-label label-ekb">Екатеринбург</span>
            <span className="map-label label-krs">Красноярск</span>
            <span className="map-label label-vlk">Владивосток</span>
          </div>
        </div>
      </section>

      <section className="support section">
        <div className="container"><h2>В дороге вас не бросят</h2><div className="support-grid">{benefits.map(({ icon: BenefitIcon, title, text }) => <article key={title}><span className="icon-box"><BenefitIcon /></span><p><b>{title}</b><span>{text}</span></p></article>)}</div></div>
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
        <img src="/hero-truck.png" alt="" aria-hidden="true" className="application-bg" />
        <div className="application-overlay" />
        <div className="container application-grid">
          <div className="application-copy"><span className="orange-kicker">СТАНЬ ЧАСТЬЮ TRANSSKY</span><h2>Готовы выйти<br />в первый рейс?</h2><p>Оставьте заявку — наш менеджер<br />свяжется с вами в ближайшее время<br />и ответит на все вопросы.</p><div className="contact-list"><a href="tel:+78007004545"><Phone /><span><b>8 800 700-45-45</b><small>Звонок бесплатный</small></span></a><a href="mailto:hr@transsky.ru"><Mail /><span><b>hr@transsky.ru</b><small>Ответим в течение дня</small></span></a></div></div>
          <form className="form-card" action="mailto:hr@transsky.ru" method="post">
            <div className="form-pair"><label>Имя<input name="name" required /></label><label>Телефон<input name="phone" type="tel" required /></label></div>
            <label>Город<input name="city" /></label>
            <label>Опыт работы<select name="experience"><option>Более 3 лет</option><option>1–3 года</option><option>Менее года</option></select></label>
            <button className="btn btn-orange" type="submit">Оставить заявку <ArrowRight /></button>
            <small>Нажимая кнопку, вы соглашаетесь с нашей<br />политикой конфиденциальности</small>
          </form>
        </div>
      </section>

      <footer id="contacts"><div className="container footer-grid"><div><Logo light /><p>Магистральные перевозки<br />по всей России</p></div><nav><a href="#about">О компании</a><a href="#terms">Условия</a><a href="#drivers">Водителям</a><a href="#vacancy">Вакансии</a><a href="#contacts">Контакты</a></nav><p>© TransSky, 2019–2026<br />Все права защищены</p></div></footer>
    </main>
  );
}
