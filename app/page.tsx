const benefits = [
  {
    number: "01",
    title: "Белая зарплата",
    text: "Официальное оформление по ТК РФ с первого дня: отпуск, больничный и стаж.",
  },
  {
    number: "02",
    title: "Без личных расходов",
    text: "Топливо, платные дороги, стоянки, мойки, ремонт и ТО — за счёт TransSky.",
  },
  {
    number: "03",
    title: "Диспетчер 24/7",
    text: "Поломка, ГИБДД или спор на выгрузке — подключаемся и решаем вместе.",
  },
];

const requirements = [
  "Права категории CE и действующая карта СКЗИ",
  "Опыт межгородских перевозок от одного года",
  "Бережное отношение к закреплённой машине",
  "Соблюдение режима труда и отдыха",
  "Готовность оставаться на связи в рейсе",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="TransSky — на главную">
          <span className="brand-mark">TS</span>
          <span className="brand-name">TransSky</span>
        </a>
        <nav className="desktop-nav" aria-label="Основная навигация">
          <a href="#conditions">Условия</a>
          <a href="#fleet">Техника</a>
          <a href="#routes">Маршруты</a>
          <a href="#requirements">Требования</a>
        </nav>
        <a className="header-cta" href="#apply">Откликнуться</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Вакансия открыта · Категория CE</p>
            <h1>Дорога платит <em>честно.</em></h1>
            <p className="hero-lead">
              Магистральные перевозки на автомобиле компании. Официальное
              оформление, понятный график и поддержка в каждом рейсе.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#apply">
                Стать водителем <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#conditions">Посмотреть условия <span>↓</span></a>
            </div>
            <div className="hero-facts" aria-label="Главные условия вакансии">
              <div>
                <strong>180–260</strong>
                <span>тыс. ₽ на руки</span>
              </div>
              <div>
                <strong>2 раза</strong>
                <span>выплаты в месяц</span>
              </div>
              <div>
                <strong>15/15</strong>
                <span>или 20/10</span>
              </div>
            </div>
          </div>

          <div className="route-board" aria-label="Межгородские маршруты TransSky">
            <div className="board-top">
              <span>ТРАНССКАЙ / МЕЖГОРОД</span>
              <span className="live"><i /> НА ЛИНИИ</span>
            </div>
            <div className="ce-mark">CE</div>
            <div className="route-line route-line-one" />
            <div className="route-line route-line-two" />
            <div className="city city-one"><b>МОСКВА</b><small>55.7558° N</small></div>
            <div className="city city-two"><b>САНКТ-ПЕТЕРБУРГ</b><small>59.9311° N</small></div>
            <div className="city city-three"><b>РЕГИОНЫ</b><small>ПО ВСЕЙ РОССИИ</small></div>
            <div className="truck-shape" aria-hidden="true">
              <span className="truck-trailer" />
              <span className="truck-cab" />
              <i className="wheel wheel-one" />
              <i className="wheel wheel-two" />
              <i className="wheel wheel-three" />
            </div>
            <div className="board-bottom">
              <span>ПЕРВЫЙ РЕЙС</span>
              <strong>В ТЕЧЕНИЕ НЕДЕЛИ</strong>
            </div>
          </div>
        </div>
        <div className="trust-line">
          <span>НЕ ТАКСИ</span><i />
          <span>НЕ АРЕНДА</span><i />
          <span>НЕ ДОСТАВКА</span><i />
          <strong>НАСТОЯЩИЙ МЕЖГОРОД</strong>
        </div>
      </section>

      <section className="conditions section" id="conditions">
        <div className="section-heading">
          <p className="section-kicker">01 / ДЕНЬГИ И УСЛОВИЯ</p>
          <h2>Вы знаете, за что<br />получаете каждый рубль</h2>
          <p>
            Никаких штрафов «по настроению». Условия закреплены в договоре,
            расчётный лист — по каждому рейсу.
          </p>
        </div>

        <div className="pay-card">
          <div className="pay-main">
            <span className="pay-label">Доход в месяц</span>
            <p><strong>180 000</strong><span>—</span><strong>260 000</strong><small>₽</small></p>
            <span className="pay-note">на руки · выплаты строго по датам</span>
          </div>
          <div className="pay-list">
            <div><span>01</span><p><b>Прозрачный расчёт</b><small>Оплата за километраж + суточные с первого дня рейса</small></p></div>
            <div><span>02</span><p><b>Дважды в месяц</b><small>Аванс и расчёт без переносов и задержек</small></p></div>
            <div><span>03</span><p><b>Всё по договору</b><small>Каждое начисление видно в расчётном листе</small></p></div>
          </div>
        </div>

        <div className="schedule-grid">
          <article className="schedule-card featured">
            <span className="card-tag">ПОПУЛЯРНЫЙ</span>
            <p className="schedule-number">15<span>/</span>15</p>
            <h3>Равный ритм</h3>
            <p>Пятнадцать дней в рейсе — пятнадцать дома.</p>
          </article>
          <article className="schedule-card">
            <p className="schedule-number">20<span>/</span>10</p>
            <h3>Больше в пути</h3>
            <p>Двадцать дней в рейсе — десять дома.</p>
          </article>
          <article className="schedule-card custom">
            <p className="schedule-number">Ваш</p>
            <h3>По договорённости</h3>
            <p>Обсудим удобный цикл заранее. Отпуск планируем по запросу.</p>
          </article>
        </div>
      </section>

      <section className="fleet section" id="fleet">
        <div className="fleet-intro">
          <p className="section-kicker light">02 / ТЕХНИКА</p>
          <h2>Машина закреплена<br />лично за вами</h2>
          <p>
            Тягачи 2019–2023 года выпуска. Комплект инструмента, зимняя резина
            и всё необходимое уже на борту.
          </p>
        </div>
        <div className="fleet-visual">
          <div className="fleet-year">2019<span>—</span>2023</div>
          <div className="fleet-track"><i /><i /><i /><i /><i /></div>
          <p>ГОДЫ ВЫПУСКА АВТОПАРКА</p>
        </div>
        <div className="fleet-details">
          <div><span>01</span><h3>ТО на своей базе</h3><p>Плановое обслуживание и ремонт организует компания.</p></div>
          <div><span>02</span><h3>Топливная карта</h3><p>Топливо и транспондер — без авансов из своего кармана.</p></div>
          <div><span>03</span><h3>Стоянки и мойки</h3><p>Все рабочие расходы берёт на себя TransSky.</p></div>
        </div>
      </section>

      <section className="routes section" id="routes">
        <div className="section-heading route-heading">
          <p className="section-kicker">03 / МАРШРУТЫ</p>
          <h2>Загрузки круглый год.<br />Техника не простаивает.</h2>
          <p>Магистральные направления между Москвой, Санкт-Петербургом и регионами России.</p>
        </div>
        <div className="route-map">
          <div className="map-city moscow"><i /><b>Москва</b><span>главный узел</span></div>
          <div className="map-city petersburg"><i /><b>Санкт-Петербург</b><span>северо-запад</span></div>
          <div className="map-city region-a"><i /><b>Регионы</b><span>регулярные рейсы</span></div>
          <div className="map-city region-b"><i /><b>Регионы</b><span>обратные загрузки</span></div>
          <div className="map-path path-a" /><div className="map-path path-b" /><div className="map-path path-c" />
          <div className="map-caption"><span>24/7</span><p><b>Диспетчер всегда на связи</b><small>Вы ведёте машину. Остальное решаем вместе.</small></p></div>
        </div>
      </section>

      <section className="support section">
        <div className="section-heading compact">
          <p className="section-kicker">04 / МЫ РЯДОМ</p>
          <h2>В дороге вас<br />не бросят</h2>
        </div>
        <div className="benefit-list">
          {benefits.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="extras">
          <span>ЕЩЁ ОТ TRANSSKY</span>
          <div><b>Медкомиссия</b><small>оплачиваем полностью</small></div>
          <div><b>Отдых на базе</b><small>комната и душ</small></div>
          <div><b>Помощь с жильём</b><small>на время оформления</small></div>
        </div>
      </section>

      <section className="requirements section" id="requirements">
        <div className="requirements-copy">
          <p className="section-kicker light">05 / КОГО МЫ ИЩЕМ</p>
          <h2>Профессионала,<br />которому доверяют</h2>
          <p>Без длинной анкеты и многоэтапных собеседований. Нам важны опыт, ответственность и нормальная связь в рейсе.</p>
        </div>
        <ol className="requirements-list">
          {requirements.map((item, index) => (
            <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p><i>✓</i></li>
          ))}
        </ol>
      </section>

      <section className="referral section">
        <div className="referral-badge">+20 000 ₽</div>
        <div>
          <p className="section-kicker">ПРИВЕДИ ДРУГА</p>
          <h2>Хорошие водители<br />знают хороших водителей</h2>
          <p>Получите премию после того, как ваш друг отработает в TransSky первый месяц.</p>
        </div>
      </section>

      <section className="apply" id="apply">
        <div className="apply-copy">
          <p className="section-kicker light">СТАРТ В TRANSSKY</p>
          <h2>Готовы выйти<br />в первый рейс?</h2>
          <p>Расскажем реальные цифры по маршруту. Собеседование за один день, первый выезд — в течение недели.</p>
        </div>
        <div className="apply-panel">
          <p>Свяжитесь с отделом подбора</p>
          <a className="apply-contact" href="mailto:hr@transsky.ru?subject=Вакансия водителя категории CE">
            hr@transsky.ru <span>↗</span>
          </a>
          <p className="contact-note">Звонки и сообщения · ежедневно с 09:00 до 20:00</p>
          <a className="button button-light" href="mailto:hr@transsky.ru?subject=Хочу стать водителем TransSky">
            Откликнуться сейчас <span>→</span>
          </a>
          <small>Категория CE · опыт межгорода от 1 года</small>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">TS</span><span className="brand-name">TransSky</span></a>
        <p>Магистральные перевозки по России</p>
        <a href="#top">Наверх ↑</a>
      </footer>
    </main>
  );
}
