import { NavLink, Outlet } from 'react-router-dom'
import { site } from '../content/site'

const navigation = [
  { to: '#services', label: 'Услуги' },
  { to: '#reviews', label: 'Отзывы' },
  { to: '#contacts', label: 'Контакты' },
]

export function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Eva, в начало">
          <img src={`${import.meta.env.BASE_URL}images/eva-logo.png`} alt="Eva" />
        </a>
        <nav aria-label="Навигация по странице">
          {navigation.map(({ to, label }) => <a key={to} href={to}>{label}</a>)}
          <a className="nav-book" href={site.bookingUrl} target="_blank" rel="noreferrer">Записаться</a>
        </nav>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer">
        <p>{site.name} · Владимир, улица Крайнова, 5</p>
        <a href={`tel:${site.contact.phone.replace(/[^\d+]/g, '')}`}>{site.contact.phone}</a>
      </footer>
    </div>
  )
}
