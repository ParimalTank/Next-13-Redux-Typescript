import Image from 'next/image'
import { store } from './store'
import { Counter } from '../components/Counter'
import styles from './page.module.css'
import { Providers } from './provider'


export default function Home() {
  return (
    <Counter />
  )
}
