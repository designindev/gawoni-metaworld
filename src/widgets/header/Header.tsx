import Image from 'next/image'
import React from 'react'
import Logo from '@/shared/images/logo.png'
import Link from 'next/link'
import { Navigation } from '../navigation/Navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'News', href: '/news' },
  { label: 'Games', href: '/games' },
  { label: 'NFT Shop', href: '/shop' },
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'Connect Wallet', href: '/connect-wallet' },
]

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__top'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-12'></div>
            <div className='col-lg-4 col-12 text-center'>
              <Link href='/' className='logo header__logo'>
                <Image src={Logo} alt='Logo' width={213} height={64} priority />
              </Link>
            </div>
            <div className='col-lg-4 col-12'>
              <div className='header__right'>
                <a href='' className='btn btn--primary'>
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <Navigation navLinks={navLinks} />
      </div>
    </header>
  )
}
