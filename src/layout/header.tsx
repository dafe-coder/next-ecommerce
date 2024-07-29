import { Logo, NavItem } from '@app/components'
import { navItemsConst } from '@app/constants'
import LogoImage from '@app/images/logo.png'
import clsx from 'clsx'
import Link from 'next/link'
import { FaRegHeart, FaRegUser } from 'react-icons/fa'
import { IoMdSearch } from 'react-icons/io'
import { LiaShoppingCartSolid } from 'react-icons/lia'
import IconButton from '../components/UI/icon-button'

const Header = (): JSX.Element => {
	return (
		<header className='bg-white w-full py-[17px]'>
			<div className='container'>
				<div className='border-none sticky-header'>
					<div className='flex justify-between'>
						<div className='flex items-center flex-grow-0 flex-shrink-0 gap-1'>
							<div
								className={clsx(
									'tham tham-e-squeeze tham-w-6 hidden max-lg:flex',
									[
										// openFilters && 'tham-active',
									]
								)}
							>
								<div className='tham-box'>
									<div className='tham-inner !h-[1.5px] !bg-dark-900 !w-4 after:!h-[1.5px] before:!h-[1.5px] after:!w-4 before:!w-4' />
								</div>
							</div>
							<Link href='/'>
								<Logo src={LogoImage} alt='Logo' />
							</Link>
						</div>
						<div className='flex'>
							<ul className='flex gap-2 mb-0 items-center max-lg:hidden'>
								{navItemsConst.map((item, index) => (
									<NavItem
										arrow={true}
										key={item.title}
										href={item.href}
										linkContent={item.title}
										className='flex items-center px-5 gap-1 relative uppercase text-sm text-nav-color group font-medium'
									></NavItem>
								))}
							</ul>
						</div>
						<div className='flex items-center'>
							<div className='flex items-center gap-5'>
								<IconButton className='max-md:hidden'>
									<FaRegUser size={22} />
								</IconButton>
								<IconButton className='max-md:hidden'>
									<IoMdSearch size={28} />
								</IconButton>
								<IconButton count={3} className='max-md:hidden'>
									<FaRegHeart size={22} />
								</IconButton>
								<div className='group flex items-center cursor-pointer gap-2.5'>
									<IconButton count={1}>
										<LiaShoppingCartSolid size={32} />
									</IconButton>
									<div className='text-s group-hover:text-primary-500'>
										$ 10,00
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
