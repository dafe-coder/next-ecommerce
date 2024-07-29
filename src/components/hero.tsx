'use client'
import slideImage from '@app/images/slide-1.jpg'
import { MdArrowBackIosNew } from 'react-icons/md'
import 'swiper/css'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss/pagination'
import HeroSlide from './hero-slide'

const Hero = () => {
	return (
		<section className='h-[35rem] bg-dark-200 max-md:h-[22.5rem]'>
			<Swiper
				modules={[Navigation, Pagination]}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}}
				pagination={true}
				loop={true}
				className='h-full'
				spaceBetween={50}
				slidesPerView={1}
				onSlideChange={() => console.log('slide change')}
				onSwiper={swiper => console.log(swiper)}
			>
				<SwiperSlide>
					<HeroSlide
						bgPath={slideImage}
						subtitle='all at 50% off'
						title={
							<p>
								The Most Beautiful <br />
								Novelties In Our Shop
							</p>
						}
						buttonHref='/products'
						buttonText='Shop now'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<HeroSlide
						bgPath={slideImage}
						subtitle='all at 50% off'
						title={
							<p>
								The Most Beautiful <br />
								Novelties In Our Shop
							</p>
						}
						buttonHref='/products'
						buttonText='Shop now'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<HeroSlide
						bgPath={slideImage}
						subtitle='all at 50% off'
						title={
							<p>
								The Most Beautiful <br />
								Novelties In Our Shop
							</p>
						}
						buttonHref='/products'
						buttonText='Shop now'
					/>
				</SwiperSlide>
				<div className='swiper-button-prev flex justify-center items-center size-10 absolute top-1/2 -translate-y-1/2 left-[5%] cursor-pointer z-1 text-shadow-of-gray transition-all hover:text-primary-500 max-[1400px]:hidden'>
					<MdArrowBackIosNew size={20} />
				</div>
				<div className='swiper-button-next flex justify-center items-center size-10 absolute top-1/2 -translate-y-1/2 right-[5%] cursor-pointer z-1 text-shadow-of-gray transition-all hover:text-primary-500 max-[1400px]:hidden'>
					<MdArrowBackIosNew className='rotate-180' size={20} />
				</div>
				<div className='swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal !hidden'>
					<span className='swiper-pagination-bullet swiper-pagination-bullet-active'></span>
					<span className='swiper-pagination-bullet'></span>
					<span className='swiper-pagination-bullet'></span>
				</div>
			</Swiper>
		</section>
	)
}

export default Hero
