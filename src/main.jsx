import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Catalog from './Catalog.jsx'

const products = [
  {
    id: 1,
    title: 'Беспроводные наушники Samsung Galaxy Buds FE (SM-R400N) Black',
    price: 6_999,
    discount: 10,
    imageUrl: '100062414524b0.webp'
  },
  {
    id: 2,
    title: 'Карта памяти Samsung Micro SDXC 256Гб Evo Plus MB-MC256KA/RU',
    price: 2_599,
    discount: null,
    imageUrl: '600005129101b0.webp'
  },
  {
    id: 3,
    title: 'Смартфон Samsung Galaxy S21 FE 8/128GB оливковый',
    price: 38_254,
    discount: 15,
    imageUrl: '600010139215b0.webp'
  },
  {
    id: 4,
    title: 'Телевизор Samsung QE48S90DAEXRU, 48"(122 см), UHD 4K',
    price: 121_999,
    discount: null,
    imageUrl: '100069490143b0.webp'
  },
  {
    id: 5,
    title: 'Стиральная машина Samsung WW70AG6S23AE/LP белый',
    price: 49_999,
    discount: null,
    imageUrl: '100057069475b0.webp'
  },
  {
    id: 6,
    title: 'Пылесос Samsung SC-18M3120VB синий',
    price: 11_350,
    discount: 5,
    imageUrl: '100000578151b0.webp'
  }
]

createRoot(document.getElementById('catalog')).render(
  <StrictMode>
    <Catalog products={products} />
  </StrictMode>,
)
