const Icon = ({ children }: { children: React.ReactNode }) => <span className="icon">{children}</span>;

const support = [
  ["▣", "Белая зарплата", "Официальное оформление по ТК РФ"],
  ["⌘", "Без личных расходов", "Топливо, платные дороги и стоянки"],
  ["◉", "Поддержка 24/7", "Диспетчер на связи в любое время"],
  ["♙", "Страхование и безопасность", "Полное страхование водителя и груза"],
  ["▤", "Комфорт в дороге", "Парковки, душ, места отдыха — по маршруту"],
  ["◇", "Уважение и честность", "Честные условия и отношение к водителю"],
];

const faqs = [
  ["Какие документы нужны для трудоустройства?", "Права категории CE, паспорт, карта СКЗИ и документы, необходимые для оформления по ТК РФ."],
  ["Как происходит оплата?", "Аванс и расчёт дважды в месяц, строго по датам. Каждое начисление отражено в расчётном листе."],
  ["Какие маршруты и регионы?", "Основные направления проходят между Москвой, Санкт-Петербургом, Екатеринбургом, Красноярском, Ростовом-на-Дону и Владивостоком."],
  ["Есть ли стажировка для новых водителей?", "Да. Перед первым самостоятельным рейсом предусмотрено знакомство с техникой, базой и стандартами работы TransSky."],
];

export default function Home() {
  return (
    <main>
      <header className="header shell">
        <a className="logo" href="#top"><span className="logo-mark">T</span><b>TransSky</b></a>
        <nav aria-label="Навигация">
          <a href="#company">О компании</a><a href="#conditions">Условия</a><a href="#drivers">Водителям</a><a href="#vacancy">Вакансии</a><a href="#contacts">Контакты</a>
        </nav>
        <a className="orange-button small" href="#vacancy">Оставить заявку</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-backdrop" />
        <div className="shell hero-inner">
          <div className="hero-copy">
            <h1>Дорога<br />платит<br /><em>честно.</em></h1>
            <p>Магистральные перевозки по всей России<br />с честными ставками и заботой о водителях.</p>
            <div className="hero-actions"><a className="orange-button" href="#vacancy">Стать водителем <span>→</span></a><a className="outline-button" href="#conditions">Рассчитать доход</a></div>
          </div>
          <div className="route-overlay" aria-hidden="true"><span className="pin pin-a">●</span><b>Москва</b><i /><span className="pin pin-b">◎</span><small>Владивосток</small></div>
        </div>
        <div className="hero-stats shell">
          <div><Icon>▣</Icon><p><strong>180+</strong><span>машин в парке</span></p></div>
          <div><Icon>⌖</Icon><p><strong>2 недели</strong><span>средняя выплата</span></p></div>
          <div><Icon>□</Icon><p><strong>15 из 15</strong><span>рейсов в месяц</span></p></div>
          <div><Icon>♢</Icon><p><strong>Полная поддержка</strong><span>на всех этапах</span></p></div>
        </div>
      </section>

      <section className="income section shell" id="conditions">
        <div className="split-title"><h2>Вы знаете, за что<br />получаете каждый рубль</h2><p>Прозрачная система расчётов<br />и справедливые условия работы.</p></div>
        <div className="income-grid">
          <article className="salary-card"><small>Средний доход в месяц</small><strong>180 000–260 000 ₽</strong><p>В зависимости от маршрутов и опыта.</p></article>
          <article className="terms-card">
            <div><Icon>◉</Icon><p><b>Прозрачные ставки</b><span>Без скрытых доплат и удержаний</span></p></div>
            <div><Icon>◔</Icon><p><b>Выплаты без задержек</b><span>Каждые 14 дней</span></p></div>
            <div><Icon>♙</Icon><p><b>Оплата всех расходов</b><span>Топливо, платные дороги, стоянки</span></p></div>
            <div><Icon>♡</Icon><p><b>Бонусы за результат</b><span>Доплаты за перевыполнение плана</span></p></div>
          </article>
          <article className="metric-card dark"><small>Рейсов в месяц</small><strong>15 из 15</strong><p>Стабильная загрузка<br />без простоев</p><span className="card-art">▦</span></article>
          <article className="metric-card"><small>Оплата в срок</small><strong>20 <i>/</i> 10</strong><p>Аванс 20 числа<br />Расчёт 10 числа</p><span className="card-art">▱</span></article>
          <article className="metric-card text"><strong>Ваш доход —<br />ваш контроль</strong><p>Личный кабинет с полной<br />статистикой и документами</p><span className="card-art">▥</span></article>
        </div>
      </section>

      <section className="fleet" id="drivers">
        <div className="shell fleet-inner">
          <div className="fleet-copy"><h2>Машина закреплена<br />лично за вами</h2><p>Мы ценим ваш труд и создаём условия,<br />в которых удобно работать каждый день.</p>
            <div className="fleet-grid">
              <div><Icon>▣</Icon><p><b>Новый и обслуженный парк</b><span>Техника не старше 3 лет</span></p></div>
              <div><Icon>▰</Icon><p><b>Своё — значит ваше</b><span>Машина закреплена за вами персонально</span></p></div>
              <div><Icon>♺</Icon><p><b>Плановое ТО и сервис</b><span>Без потери времени и личных забот</span></p></div>
              <div><Icon>◔</Icon><p><b>Круглосуточная техподдержка</b><span>24/7 на связи</span></p></div>
            </div>
          </div>
          <div className="fleet-truck"><img src="/og.png" alt="Тягач TransSky" /></div>
        </div>
      </section>

      <section className="routes section shell" id="company">
        <div className="routes-copy"><h2>Загрузки круглый год.<br />Техника не простаивает.</h2><p>Работаем по всей России —<br />от крупных городов до<br />удалённых регионов.</p><ul><li>Магистральные направления</li><li>Постоянные объёмы</li><li>Гибкие маршруты</li></ul><a className="outline-button" href="#vacancy">Смотреть маршруты <span>→</span></a></div>
        <div className="map" aria-label="Карта маршрутов России">
          <div className="russia-shape" />
          <div className="route-path rp1" /><div className="route-path rp2" /><div className="route-path rp3" /><div className="route-path rp4" />
          <span className="map-dot md1">Санкт-Петербург</span><span className="map-dot md2">Москва</span><span className="map-dot md3">Ростов-на-Дону</span><span className="map-dot md4">Красноярск</span><span className="map-dot md5">Екатеринбург</span><span className="map-dot md6">Владивосток</span>
          <b>РОССИЯ</b>
        </div>
      </section>

      <section className="support section shell"><h2>В дороге вас не бросят</h2><div className="support-grid">{support.map(([icon,title,text])=><article key={title}><Icon>{icon}</Icon><p><b>{title}</b><span>{text}</span></p></article>)}</div></section>

      <section className="faq section shell"><div className="faq-head"><h2>Часто задаваемые вопросы</h2><p>Не нашли ответ? <a href="mailto:hr@transsky.ru">Напишите нам</a></p></div><div>{faqs.map(([q,a])=><details key={q}><summary>{q}<span>⌄</span></summary><p>{a}</p></details>)}</div></section>

      <section className="referral"><div className="shell referral-inner"><div className="bonus-round">+20 000 ₽</div><h2>Приведите водителя —<br />получите бонус</h2><p>Приведи водителя в TransSky —<br />и получи вознаграждение после его<br />первого месяца работы.</p></div></section>

      <section className="apply" id="vacancy"><div className="apply-backdrop" /><div className="shell apply-inner">
        <div className="apply-copy"><span>СТАНЬ ЧАСТЬЮ TRANSSKY</span><h2>Готовы выйти<br />в первый рейс?</h2><p>Оставьте заявку — наш менеджер<br />свяжется с вами в ближайшее время<br />и ответит на все вопросы.</p><div className="contacts"><a href="tel:+78007004545"><Icon>◔</Icon><span><b>8 800 700-45-45</b><small>Звонок бесплатный</small></span></a><a href="mailto:hr@transsky.ru"><Icon>▱</Icon><span><b>hr@transsky.ru</b><small>Ответим в течение дня</small></span></a></div></div>
        <form className="application-form" action="mailto:hr@transsky.ru" method="post"><div className="form-row"><label><span>Имя</span><input name="name" aria-label="Имя" required /></label><label><span>Телефон</span><input name="phone" type="tel" aria-label="Телефон" required /></label></div><label><span>Город</span><input name="city" aria-label="Город" /></label><label><span>Опыт работы</span><select name="experience" aria-label="Опыт работы"><option>Более 3 лет</option><option>1–3 года</option><option>Менее года</option></select></label><button className="orange-button" type="submit">Оставить заявку <span>→</span></button><small>Нажимая кнопку, вы соглашаетесь с нашей<br />политикой конфиденциальности</small></form>
      </div></section>

      <footer id="contacts"><div className="shell footer-inner"><div><a className="logo inverse" href="#top"><span className="logo-mark">T</span><b>TransSky</b></a><p>Магистральные перевозки<br />по всей России</p></div><nav><a href="#company">О компании</a><a href="#conditions">Условия</a><a href="#drivers">Водителям</a><a href="#vacancy">Вакансии</a><a href="#contacts">Контакты</a></nav><p>© TransSky, 2019–2024<br />Все права защищены</p></div></footer>
    </main>
  );
}
