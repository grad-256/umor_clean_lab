import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

const Layout = ({ title, type, children }) => {
  const router = useRouter()
  const [MenuToggleState, setMenuToggleState] = useState<boolean>(false)
  const [BgToggleState, setBgToggleState] = useState<boolean>(false)
  const handleMenu = () => {
    setMenuToggleState(true)
    setBgToggleState(true)
  }

  const handleClose = () => {
    setMenuToggleState(false)
    setBgToggleState(false)
  }

  useEffect(() => {
    const LinkComp = document.querySelectorAll('.LinkComp')
    for (let i = 0; i < LinkComp.length; i++) {
      if (LinkComp[i].getAttribute('href') === router.asPath) {
        LinkComp[i].classList.add('active')
      }
    }
  }, [router])

  return (
    <div className="c-wrapper">
      <Head>
        <meta property="og:type" content={type} />
        <meta property="og:title" content={`${title} - UCLab -`} />
        <title>{`${title} - UCLab -`}</title>
      </Head>
      <div
        className={`fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden ${
          BgToggleState ? 'block' : 'hidden'
        }`}
        onClick={() => handleClose()}
        aria-label="handleMenuClose"
        role="button"
      ></div>
      <div
        className={`fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 ${
          MenuToggleState
            ? '-translate-x-0 ease-in'
            : '-translate-x-full ease-out'
        }`}
      >
        <Link href="/">
          <a className="flex items-center justify-center mt-8">
            <div className="flex items-center">
              <div className="logo">
                <span className="logo01"></span>
                <span className="logo02"></span>
              </div>
              <p className="text-white text-xl font-bold ml-2">UCLab</p>
            </div>
          </a>
        </Link>

        <nav className="mt-10">
          <Link href="/">
            <a
              className={`LinkComp flex items-center mt-4 py-2 px-6 text-base hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 text-gray-500`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                ></path>
              </svg>
              <span className="mx-3">Coding</span>
            </a>
          </Link>
          <Link href="/hobby">
            <a
              className={`LinkComp flex items-center mt-4 py-2 px-6 text-base hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 text-gray-500`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
              <span className="mx-3">Hobby Blog</span>
            </a>
          </Link>
          <Link href="/skill">
            <a
              className={`LinkComp flex items-center mt-4 py-2 px-6 text-base hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 text-gray-500`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
              <span className="mx-3">Skill Blog</span>
            </a>
          </Link>
          <Link href="/profile">
            <a
              className={`LinkComp flex items-center mt-4 py-2 px-6 text-base hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 text-gray-500`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              <span className="mx-3">Profile</span>
            </a>
          </Link>
          <Link href="/pictures">
            <a
              className={`LinkComp flex items-center mt-4 py-2 px-6 text-base hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 text-gray-500`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              <span className="mx-3">Pictures</span>
            </a>
          </Link>
          <Link href="/about">
            <a
              className={`LinkComp flex items-center mt-4 py-2 px-6 text-base hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 text-gray-500`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                ></path>
              </svg>
              <span className="mx-3">About</span>
            </a>
          </Link>
          <Link href="/covid">
            <a
              className={`LinkComp flex items-center mt-4 py-2 px-6 text-base hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 text-gray-500`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                ></path>
              </svg>
              <span className="mx-3">Covid Data</span>
            </a>
          </Link>
          <Link href="/privacy">
            <a
              className={`LinkComp flex items-center mt-4 py-2 px-6 text-base hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 text-gray-500`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                ></path>
              </svg>
              <span className="mx-3">Privacy</span>
            </a>
          </Link>
        </nav>
        <p className="text-center px-6 text-xs mt-10 text-gray-100">
          &copy; UCLab inc.
        </p>
      </div>

      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
          <div className="flex items-center">
            <button
              className="text-gray-500 focus:outline-none lg:hidden"
              onClick={() => handleMenu()}
              aria-label="handleMenuOpen"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>

          <div className="flex items-center">
            <Link href="/profile">
              <a className="text-gray-500 focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
        </header>
        <div className="c-page">{children}</div>
        {/* <footer>
          <p className="text-center text-xs mt-3">
            Copyright &copy; UCLab. All rights reserved.
          </p>
        </footer> */}
      </main>
    </div>
  )
}
export default Layout
