export type Service = {
  slug: string
  title: string
  summary: string
  price?: string
}

export const site = {
  name: 'Eva',
  shortName: 'Eva',
  locale: 'ru',
  tagline: 'Красота, в которой легко быть собой',
  description: 'Салон красоты во Владимире: волосы, ногти и забота о себе в одном месте.',
  contact: {
    phone: '+7 (960) 726-47-86',
    email: '',
    address: 'Владимир, улица Крайнова, 5',
    hours: 'Ежедневно, 10:00–20:00',
  },
  bookingUrl: 'https://dikidi.ru/400871',
  mapsUrl: 'https://yandex.ru/maps/org/schastlivyye_lyudi/85991187208/',
  vkUrl: 'https://vk.ru/eva_studio33',
}

export const services: Service[] = [
  { slug: 'hair', title: 'Волосы', summary: 'Стрижки, окрашивание и укладки с вниманием к форме и состоянию волос.' },
  { slug: 'nails', title: 'Ногти', summary: 'Маникюр, педикюр, наращивание и мужской ногтевой сервис.' },
  { slug: 'curls', title: 'Химическая и биозавивка', summary: 'Индивидуально подбираем технику под структуру волос и желаемый эффект.', price: 'от 2 000 ₽' },
  { slug: 'home', title: 'Выезд на дом', summary: 'Запись на услугу с выездом доступна по предварительной договорённости.' },
]

export const gallery = [
  { src: `${import.meta.env.BASE_URL}images/eva-gallery-1.jpg`, alt: 'Интерьер и рабочая зона Eva' },
  { src: `${import.meta.env.BASE_URL}images/eva-gallery-2.jpg`, alt: 'Деталь оформления салона Eva' },
  { src: `${import.meta.env.BASE_URL}images/eva-gallery-3.jpg`, alt: 'Рабочее место в салоне Eva' },
]

export const reviews = [
  { quote: 'Внутри очень уютно, чисто, играет приятная музыка.', author: '_de_lusio_' },
  { quote: 'Пожелания услышаны на 100% — очень аккуратно и внимательно.', author: 'Женя' },
  { quote: 'Пока сидишь с краской, параллельно можно сделать маникюр.', author: 'Александра Кейли' },
]
