import React from 'react'
import Image from 'next/image'
import Image1 from './news-1.png'
import Image2 from './news-2.png'
import Image3 from './news-3.png'

const items = [
  {
    image: Image1.src,
    date: '31 December',
    title: 'Snow race-reward pool: 200 usdt',
    descr:
      'The first Blockchain Rally Racing Game powered by real Rally Champions and Motosport Brands Release: Q2 2024',
  },
  {
    image: Image2.src,
    date: '31 December',
    title: 'Snow race-reward pool: 200 usdt',
    descr:
      'The first Blockchain Rally Racing Game powered by real Rally Champions and Motosport Brands Release: Q2 2024',
  },
  {
    image: Image3.src,
    date: '31 December',
    title: 'Snow race-reward pool: 200 usdt',
    descr:
      'The first Blockchain Rally Racing Game powered by real Rally Champions and Motosport Brands Release: Q2 2024',
  },
]

export const News = () => {
  return (
    <section className='section s-news'>
      <div className='container s-news__container news'>
        <div className='section__heading-wrapper'>
          <h2 className='h2 section__heading'>
            <span className='section__heading-icon section__heading-icon--right'>
              latest News
            </span>
          </h2>
          <div className='section__heading-btn'>
            <a href='#' className='btn btn--primary'>
              Read all news
            </a>
          </div>
        </div>
        <div className='row items news__items'>
          {items.map((item, i) => {
            return (
              <div
                key={i}
                className='col-sm-4 col-12 items__item item-bg item-bg--grid news__items-item'
              >
                <div className='item-bg__bg news__items-bg'></div>
                <div className='items__img img news__items-img'>
                  <Image
                    src={Image1.src}
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{ width: '100%', height: 'auto' }}
                    alt=''
                  />
                </div>
                <div className='items__text news__items-text'>
                  <div className='news__items-date'>
                    <p>{item.date}</p>
                  </div>
                  <h3 className='items__title h3 text-title news__items-title'>
                    {item.title}
                  </h3>
                  <div className='items__descr news__items-descr'>
                    <p>{item.descr}</p>
                  </div>
                  <div className='items__descr news__items-link'>
                    <a
                      href='#'
                      className='text-link text-link--arrow text-secondary'
                    >
                      READ MORE
                    </a>
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
