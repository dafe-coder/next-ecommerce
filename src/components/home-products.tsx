import * as React from 'react'
import { SlRefresh } from 'react-icons/sl'
import HomeProductsNav from './home-products-nav'
import ProductsList from './products-list'
import Button from './UI/button'

interface IHomeProductsProps {}

const HomeProducts: React.FunctionComponent<IHomeProductsProps> = props => {
	return (
		<section className='py-10'>
			<div className='container'>
				<HomeProductsNav />
				<ProductsList className='mt-7.5 mb-12' />
				<div className='flex justify-center'>
					<Button
						href='/products'
						variant='gray-outline'
						icon={<SlRefresh className='rotate-90' />}
					>
						more products
					</Button>
				</div>
			</div>
		</section>
	)
}

export default HomeProducts
