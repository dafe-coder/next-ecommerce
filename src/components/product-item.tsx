import productImage from '@app/images/product-1.jpg'
import clsx from 'clsx'
import Image from 'next/image'
import { FaRegHeart } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import Button from './UI/button'
import IconButton from './UI/icon-button'

interface IProductsItemProps {
	variant?: 'Out of stock' | 'Sale' | ''
	prevPrice?: string
	title: string
	price: string
}

const ProductsItem = ({
	variant = '',
	prevPrice,
	price,
	title,
}: IProductsItemProps) => {
	return (
		<div className='group relative'>
			{variant !== '' && (
				<div className='absolute z-1 top-5 left-5 bg-white py-1 px-2.5 text-sm text-dark-900'>
					{variant}
				</div>
			)}
			<div className='absolute right-5 top-5 opacity-0 transition-all group-hover:opacity-100 z-2 cursor-pointer'>
				<IconButton className='bg-white rounded-full size-8 hover:bg-primary-500 hover:!text-white'>
					<FaRegHeart />
				</IconButton>
			</div>
			<div className='relative w-full max-h-[17.3rem] overflow-hidden cursor-pointer bg-gray-150'>
				<Image
					src={productImage}
					alt=''
					width={0}
					height={0}
					sizes='100vw'
					className='object-cover size-full'
				/>
				<div className='absolute bottom-0 left-0 text-dark-525 bg-white hover:bg-primary-500 flex justify-center items-center hover:text-white w-full text-center text-sm max-h-0 cursor-pointer overflow-hidden transition-all h-10 opacity-0 duration-300 group-hover:max-h-10 group-hover:opacity-100'>
					quick view
				</div>
			</div>
			<div className='pt-3 text-sm'>
				<p className='font-medium text-dark-525 cursor-pointer hover:text-primary-500'>
					{title}
				</p>
				<p
					className={clsx('flex items-center text-primary-500 gap-2', [
						variant === 'Sale' && 'text-red-400',
						variant === 'Out of stock' && 'text-gray-225',
					])}
				>
					${price}{' '}
					{prevPrice && <span className='text-gray-225'>Was ${prevPrice}</span>}
				</p>
				<Button
					className='opacity-0 group-hover:opacity-100'
					variant='link'
					icon={<FaArrowRightLong />}
				>
					add to cart
				</Button>
			</div>
		</div>
	)
}

export default ProductsItem
