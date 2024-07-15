import React from 'react'
import Image1 from './slide1.jpg'

export const Main = () => {
  return (
    <section className='section s-main'>
      <div className='main'>
        <div className='main__image' style={{ backgroundImage: `url(${Image1.src})` }}></div>
        <div className='container s-main__container'>
          <h1 className='h1 main__title'>
            <span className='main__title-first text-primary'>GAWOONI MetaWorld -</span>
            <span className='main__title-second'>blockchain gaming portal</span>
          </h1>
          <div className='main__content'>
            <div className='main__content-left'>
              <p>
                Lorem ipsum dolor sit amet consectetur. Feugiat ullamcorper quis porta pharetra nullam semper.
                Pellentesque egestas sed morbi magna nunc ornare nulla vivamus. Aenean egestas
              </p>
            </div>
            <div className='main__content-right'>
              <a href='#' className='btn btn--white btn--border'>
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
