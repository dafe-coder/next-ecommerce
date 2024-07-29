import Image, { StaticImageData } from 'next/image'
import * as React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import Button from './UI/button'

interface IHeroSlideProps {
	title: React.ReactNode | string
	subtitle: string
	buttonText: string
	buttonHref: string
	bgPath: string | StaticImageData
}

const HeroSlide: React.FunctionComponent<IHeroSlideProps> = ({
	title,
	subtitle,
	buttonText,
	buttonHref,
	bgPath,
}) => {
	return (
		<div className='container size-full flex flex-col justify-center items-start'>
			<Image
				className='size-full absolute left-0 top-0 object-cover object-center'
				src={bgPath}
				sizes='100vw'
				height={0}
				width={0}
				alt=''
			/>
			<div className='relative z-1'>
				<p className='text-primary-500 mb-3'>{subtitle}</p>
				<h1 className='mb-4'>{title}</h1>
				<Button
					href={buttonHref}
					className='max-sm:h-8 max-sm:min-w-[auto]'
					icon={<FaArrowRightLong />}
				>
					{buttonText}
				</Button>
			</div>
		</div>
	)
}

export default HeroSlide
