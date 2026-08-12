const phoneDisplay = "+7(495)023-84-04";
const phoneHref = "tel:+74950238404";

export default function Home() {
  return (
    <main className="reference-stage">
      <div className="reference-canvas">
        <img
          className="reference-art"
          src="/reference-layout.png"
          alt="5 ТОНН — бесплатная диагностика коммерческого транспорта до 5 тонн"
        />

        <a className="phone phone-top" href={phoneHref} aria-label={`Позвонить ${phoneDisplay}`}>
          {phoneDisplay}
        </a>

        <a className="hotspot hotspot-menu" href="#contacts" aria-label="Перейти к контактам" />
        <a className="hotspot hotspot-book" href="#signup" aria-label="Записаться на бесплатную диагностику" />
        <a className="hotspot hotspot-call" href={phoneHref} aria-label={`Позвонить ${phoneDisplay}`} />

        <form className="reference-form" id="signup" action={phoneHref}>
          <label className="field field-name">
            <span className="sr-only">Имя</span>
            <input name="name" autoComplete="name" placeholder="Имя" />
          </label>
          <label className="field field-phone">
            <span className="sr-only">Телефон</span>
            <input name="phone" type="tel" autoComplete="tel" placeholder="Телефон" />
          </label>
          <label className="field field-vehicle">
            <span className="sr-only">Марка и модель автомобиля</span>
            <input name="vehicle" placeholder="Марка и модель" />
          </label>
          <a className="hotspot form-submit" href={phoneHref} aria-label={`Получить бесплатную диагностику — позвонить ${phoneDisplay}`} />
        </form>

        <footer id="contacts">
          <a className="phone phone-bottom" href={phoneHref} aria-label={`Позвонить ${phoneDisplay}`}>
            {phoneDisplay}
          </a>
          <a className="hotspot hotspot-site" href="#top" aria-label="5 ТОНН — наверх" />
        </footer>

        <div className="sr-only" id="top">
          <h1>Бесплатная диагностика коммерческого транспорта до 5 тонн</h1>
          <p>Для новых клиентов автосервиса 5 ТОНН. Быстро проверим состояние автомобиля и подскажем, что требует внимания.</p>
          <h2>Что входит в бесплатную диагностику</h2>
          <p>Подвеска и ходовая часть, тормозная система, рулевое управление, двигатель и течи, ошибки и общий осмотр.</p>
          <h2>Как получить диагностику</h2>
          <p>Оставьте заявку, подтвердите удобное время и приезжайте в сервис.</p>
          <h2>Условия акции</h2>
          <p>Только для новых клиентов, по предварительной записи, для транспорта до 5 тонн, без разборки и сложных измерений.</p>
          <h2>Запишитесь сейчас</h2>
          <p>Адреса: Балашиха и Коломна. Телефон: {phoneDisplay}.</p>
        </div>
      </div>
    </main>
  );
}
