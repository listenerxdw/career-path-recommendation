import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Click to {' '}
          <Link href="/login">
            <a className="text-blue-600" href="https://nextjs.org">
              /login
            </a>
          </Link>
        </h1>
      </main>
    </div>
  )
}
