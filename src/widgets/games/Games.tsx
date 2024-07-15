import React from 'react'
import Image from 'next/image'
import Image1 from './game-1.png'
import Image2 from './game-2.png'
import Image3 from './game-3.png'
import Image4 from './game-4.png'

const items = [
  {
    image: Image1.src,
    title: 'K 4 rally',
    descr:
      'The first Blockchain Rally Racing Game powered by real Rally Champions and Motosport Brands Release: Q2 2024',
  },
  {
    image: Image2.src,
    title: 'tuk tuk rush',
    descr:
      'The first game featuring Thailand and its iconic TUK TUK vehicle. Release Q4 2024.',
  },
  {
    image: Image3.src,
    title: 'Racing game',
    descr:
      'Another spectacular blockchain racing game is already in development. We will be announcing more on this shortly.',
  },
  {
    image: Image4.src,
    title: 'Martial arts game',
    descr:
      "You want a spectacular martial arts blockchain game? We're already working on it. It will be the ultimate fighting game. We will be announcing more on this shortly.",
  },
]

export const Games = () => {
  return (
    <section className='section s-games'>
      <div className='container s-games__container games'>
        <h2 className='h2 section__heading'>
          <span className='section__heading-icon'>our games</span>
        </h2>
        <div className='row items games__items'>
          {items.map((item, i) => {
            return (
              <div
                key={i}
                className='col-sm-6 col-12 items__item item-bg item-bg--grid games__items-item'
              >
                <div className='item-bg__bg games__items-bg'></div>
                <div className='items__img img games__items-img'>
                  <Image
                    src={Image1.src}
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{ width: '100%', height: 'auto' }}
                    alt=''
                  />
                </div>
                <div className='items__text games__items-text'>
                  <h3 className='items__title h3 text-title games__items-title'>
                    {item.title}
                  </h3>
                  <div className='items__descr text-descr games__items-descr'>
                    <p>{item.descr}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
