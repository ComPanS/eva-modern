export type Service = {
  slug: string
  title: string
  summary: string
  price?: string
}

export const site = {
  name: 'Счастливые люди',
  shortName: 'Счастливые люди',
  locale: 'ru',
  tagline: 'Место, где создают счастливые перемены',
  description: 'Салон красоты во Владимире: волосы, ногти и бьюти-ритуалы с вниманием к вашему образу.',
  contact: {
    phone: '+7 (960) 726-47-86',
    email: '',
    address: 'Владимир, улица Крайнова, 5',
    hours: 'Ежедневно, 10:00–20:00',
  },
  bookingUrl: 'https://dikidi.ru/400871',
  mapsUrl: 'https://yandex.ru/maps/org/schastlivyye_lyudi/85991187208/',
  vkUrl: '',
}

export const services: Service[] = [
  { slug: 'hair', title: 'Волосы', summary: 'Стрижки, окрашивание, укладки и уходовые процедуры.', price: 'от 1 200 ₽' },
  { slug: 'nails', title: 'Ногти', summary: 'Маникюр, педикюр, наращивание и мужской ногтевой сервис.', price: 'от 1 200 ₽' },
  { slug: 'curls', title: 'Кудри', summary: 'Химическая и биозавивка с подбором техники под структуру волос.', price: 'от 3 500 ₽' },
  { slug: 'brows', title: 'Брови', summary: 'Архитектура, окрашивание и коррекция бровей.', price: 'от 1 300 ₽' },
]

export const gallery = [
  { src: `${import.meta.env.BASE_URL}images/schastlivye-gallery-1.jpg`, alt: 'Интерьер и рабочая зона салона' },
  { src: `${import.meta.env.BASE_URL}images/schastlivye-gallery-2.jpg`, alt: 'Деталь оформления салона' },
  { src: `${import.meta.env.BASE_URL}images/schastlivye-gallery-3.jpg`, alt: 'Рабочее место мастера' },
]

export const reviews = [
  { quote: 'Всегда выхожу довольная, сияющая, с морем положительных эмоций.', author: 'Julia♡' },
  { quote: 'Каждый этап стрижки обсуждался — движения были отточенными и аккуратными.', author: 'PandaVio' },
  { quote: 'В салоне уютная атмосфера, приятная музыка, вежливый персонал.', author: 'Елена Валерьевна' },
]
