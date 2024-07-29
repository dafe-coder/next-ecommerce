'use client'

import clsx from 'clsx'
import { useState } from 'react'

const HomeProductsNav = () => {
	const [openFilters, setOpenFilters] = useState<boolean>(false)
	return (
		<div className='flex justify-between items-center max-sm:flex-wrap'>
			<div
				className='flex items-center text-dark-900 cursor-pointer max-sm:w-full max-sm:justify-center max-sm:mb-4'
				onClick={() => setOpenFilters(!openFilters)}
			>
				<div
					className={clsx('tham tham-e-squeeze tham-w-6', [
						openFilters && 'tham-active',
					])}
				>
					<div className='tham-box'>
						<div className='tham-inner !h-[1.5px] !bg-dark-900 !w-4 after:!h-[1.5px] before:!h-[1.5px] after:!w-4 before:!w-4' />
					</div>
				</div>
				Filters
			</div>
			<ul className='flex max-sm:w-full max-sm:justify-center'>
				<li className='px-2.5 py-1 cursor-pointer border-b border-primary-500 text-primary-500'>
					All
				</li>
				<li className='px-2.5 py-1 cursor-pointer'>Furniture</li>
				<li className='px-2.5 py-1 cursor-pointer'>Lighting</li>
				<li className='px-2.5 py-1 cursor-pointer'>Accessories</li>
				<li className='px-2.5 py-1 cursor-pointer'>Sale</li>
			</ul>
		</div>
	)
}

export default HomeProductsNav
