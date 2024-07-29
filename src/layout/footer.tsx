import { FooterIcon } from '@app/components'
import { FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa6'
import { IoLogoInstagram } from 'react-icons/io'

const Footer = (): JSX.Element => {
	return (
		<footer className='py-5'>
			<div className='container mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-0 gap-5'>
				<div className='flex flex-col lg:flex-row gap-5 lg:gap-3 lg:items-center text-shadow-of-gray order-2 lg:order-1'>
					<p className='text-sm mb-0 lg:order-1 order-2'>
						Copyright © 2019 Molla Store. All Rights Reserved.
					</p>
					<ul className='flex mb-0 flex-row gap-3 lg:justify-start justify-center  lg:order-2 order-1'>
						<li>
							<FooterIcon
								href='/'
								className='text-sm	inline-block hover:text-primary-500 underline'
							>
								Terms Of Use
							</FooterIcon>
						</li>
						<li className='w-[1px] h-3 my-auto bg-gray-250'></li>
						<li>
							<FooterIcon
								href='/'
								className='text-sm inline-block hover:text-primary-500 underline'
							>
								Privacy Policy
							</FooterIcon>
						</li>
					</ul>
				</div>
				<ul className='flex mb-0 flex-row gap-2 lg:order-2 order-1'>
					<li>
						<FooterIcon href={'/'}>
							<FaFacebookF size={20} className='fill-yellow-40' />
						</FooterIcon>
					</li>
					<li>
						<FooterIcon
							href={'/'}
							className='stroke-[#8f79ed] hover:fill-[#c9]'
						>
							<FaTwitter size={20} className='text-yellow-40' />
						</FooterIcon>
					</li>
					<li>
						<FooterIcon
							href={'/'}
							className='stroke-[#8f79ed] hover:fill-[#c9]'
						>
							<IoLogoInstagram
								size={20}
								fill='red'
								className='text-yellow-40'
							/>
						</FooterIcon>
					</li>
					<li>
						<FooterIcon
							href={'/'}
							className='stroke-[#8f79ed] hover:fill-[#c9]'
						>
							<FaYoutube size={20} className='text-yellow-40' />
						</FooterIcon>
					</li>
					<li>
						<FooterIcon
							href={'/'}
							className='stroke-[#8f79ed] hover:fill-[#c9]'
						>
							<FaPinterest size={20} className='text-yellow-40' />
						</FooterIcon>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
