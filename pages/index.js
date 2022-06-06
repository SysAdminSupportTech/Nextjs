import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
            We come from hundreds of ethnic and language backgrounds, yet we are united by common goals. Above all, we want to honor Jehovah, the God of the Bible and the Creator of all things. We do our best to imitate Jesus Christ and are proud to be called Christians. Each of us regularly spends time helping people learn about the Bible and God’s Kingdom. Because we witness, or talk, about Jehovah God and his Kingdom, we are known as Jehovah’s Witnesses.
      </p>

      <p>
            We come from hundreds of ethnic and language backgrounds, yet we are united by common goals. Above all, we want to honor Jehovah, the God of the Bible and the Creator of all things. We do our best to imitate Jesus Christ and are proud to be called Christians. Each of us regularly spends time helping people learn about the Bible and God’s Kingdom. Because we witness, or talk, about Jehovah God and his Kingdom, we are known as Jehovah’s Witnesses.
            </p>
      <Link href="/crawler">
        <a>See Crawler File</a>
      </Link>
    </div>
  )
}