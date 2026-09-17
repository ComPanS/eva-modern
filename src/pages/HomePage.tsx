import { gallery, reviews, services, site } from '../content/site'

export function HomePage() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Счастливые люди · Владимир</p>
          <h1>{site.tagline}</h1>
          <p className="lede">{site.description}</p>
          <div className="hero-actions">
            <a className="button button-dark" href={site.bookingUrl} target="_blank" rel="noreferrer">Записаться онлайн <span>↗</span></a>
            <a className="text-link" href="#services">Смотреть услуги <span>↓</span></a>
          </div>
        </div>
        <div className="hero-visual">
          <img src={`${import.meta.env.BASE_URL}images/schastlivye-hero.jpg`} alt="Интерьер салона Счастливые люди" />
          <div className="hero-note"><strong>4,8</strong><span>165 оценок<br />на Яндекс Картах</span></div>
        </div>
      </section>
      <section className="intro-band">
        <p className="eyebrow">Счастливые люди — это</p>
        <p className="intro-text">место, где можно обновить образ, совместить окрашивание и маникюр или просто подарить себе время на заботу.</p>
        <div className="intro-meta"><span>Ежедневно</span><strong>10:00–20:00</strong><span>ул. Крайнова, 5</span></div>
      </section>
      <section className="section services-section" id="services">
        <div className="section-heading"><p className="eyebrow">Возможности</p><h2>Всё для образа — в одном визите</h2></div>
        <div className="service-list">{services.map((service, index) => <article className="service-item" key={service.slug}><span className="service-index">0{index + 1}</span><div><h3>{service.title}</h3><p>{service.summary}</p></div>{service.price && <strong className="service-price">{service.price}</strong>}</article>)}</div>
      </section>
      <section className="feature-section">
        <div className="feature-image"><img src={gallery[0].src} alt={gallery[0].alt} /></div>
        <div className="feature-copy"><p className="eyebrow">Любим крутить</p><h2>Кудри, которые становятся частью вас</h2><p>Химическая и биозавивка с индивидуальным подбором техники — для мягких, естественных или упругих локонов.</p><div className="offer"><span>Химическая завивка</span><strong>от 3 500 ₽</strong><small>Стоимость зависит от выбранной услуги</small></div><a className="button button-yellow" href={site.bookingUrl} target="_blank" rel="noreferrer">Записаться онлайн <span>↗</span></a></div>
      </section>
      <section className="section reviews-section" id="reviews">
        <div className="review-summary"><p className="eyebrow">Говорят гости</p><div className="rating">4,8 <span>★★★★★</span></div><p>165 оценок · 95 отзывов<br />на Яндекс Картах</p><a className="text-link" href={site.mapsUrl} target="_blank" rel="noreferrer">Все отзывы <span>↗</span></a></div>
        <div className="reviews-list">{reviews.map((review) => <blockquote key={review.author}><p>“{review.quote}”</p><cite>{review.author}</cite></blockquote>)}</div>
      </section>
      <section className="gallery-section"><div className="gallery-intro"><p className="eyebrow">Пространство</p><h2>Уютно с первого шага</h2></div><div className="gallery-grid">{gallery.slice(1).map((image) => <img key={image.src} src={image.src} alt={image.alt} />)}</div></section>
      <section className="contact-section" id="contacts"><div><p className="eyebrow">Ждём вас</p><h2>До встречи в «Счастливых людях»</h2></div><div className="contact-details"><a className="contact-phone" href={`tel:${site.contact.phone.replace(/[^\d+]/g, '')}`}>{site.contact.phone}</a><p>{site.contact.address}<br />{site.contact.hours}</p><div className="contact-actions"><a className="button button-dark" href={site.bookingUrl} target="_blank" rel="noreferrer">Записаться онлайн <span>↗</span></a><a className="text-link" href={site.mapsUrl} target="_blank" rel="noreferrer">Построить маршрут <span>↗</span></a></div></div></section>
    </>
  )
}
