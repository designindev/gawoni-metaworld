import React from 'react'
import Image from 'next/image'
import Logos from './logos.png'
import Image1 from './nfts-1.png'
import Image2 from './nfts-2.png'
import Image3 from './nfts-3.png'
import Image4 from './nfts-4.png'

const items = [
  {
    image: Image1.src,
    title: 'K 4 Race edition #1',
    price: '$20',
    rarity: 'Epic',
    logos: Logos.src,
  },
  {
    image: Image2.src,
    title: 'K 4 Race edition #1',
    price: '$20',
    rarity: 'Epic',
    logos: Logos.src,
  },
  {
    image: Image3.src,
    title: 'K 4 Race edition #1',
    price: '$20',
    rarity: 'Epic',
    logos: Logos.src,
  },
  {
    image: Image4.src,
    title: 'K 4 Race edition #1',
    price: '$20',
    rarity: 'Epic',
    logos: Logos.src,
  },
]

export const Nfts = () => {
  return (
    <section className='section s-nfts'>
      <div className='container s-nfts__container nfts'>
        <h2 className='h2 section__heading'>
          <span className='section__heading-icon'>NFTs</span>
        </h2>
        <div className='nfts__category'>
          <div className='nfts__category-head'>
            <h3 className='nfts__category-title h3 h3--fz-32'>
              New nft releases
            </h3>
            <div className='nfts__category-btn'>
              <a href='#' className='btn btn--primary'>
                Show all
              </a>
            </div>
          </div>
          <div className='row items nfts__items'>
            {items.map((item, i) => {
              return (
                <div
                  key={i}
                  className='col-sm-3 col-12 items__item item-bg item-bg--grid item-bg--p-0 nfts__items-item'
                >
                  <div className='item-bg__bg nfts__items-bg'></div>
                  <div className='items__img image image--cover nfts__items-img'>
                    <Image
                      src={Image1.src}
                      width={0}
                      height={0}
                      sizes='100vw'
                      style={{ width: '100%', height: 'auto' }}
                      alt=''
                    />
                  </div>
                  <div className='items__text nfts__items-text'>
                    <div className='nfts__items-top'>
                      <h4 className='items__title h4 text-title nfts__items-title'>
                        {item.title}
                      </h4>
                      <div className='nfts__items-price'>{item.price}</div>
                    </div>
                    <div className='nfts__items-rarity'>
                      <div className='nfts__items-rarity-label'>Rarity</div>
                      <div className='nfts__items-rarity-value'>Epic</div>
                    </div>
                    <div className='nfts__items-logos'>
                      <Image
                        src={Logos.src}
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{ width: '100%', height: 'auto' }}
                        alt=''
                      />
                    </div>
                    <div className='nfts__items-buttons'>
                      <div className='nfts__items-button'>K 4 Rally</div>
                      <div className='nfts__items-button'>Car</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
