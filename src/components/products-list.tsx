import clsx from 'clsx'
import ProductsItem from './product-item'

interface IProductsListProps {
	className?: string
}

const ProductsList = ({ className }: IProductsListProps) => {
	return (
		<div
			className={clsx(
				'grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2',
				className
			)}
		>
			<ProductsItem title='Flow Slim Armchair' price='446.00' />
			<ProductsItem
				title='Flow Slim Armchair'
				price='446.00'
				variant='Out of stock'
			/>
			<ProductsItem title='Flow Slim Armchair' price='446.00' variant='Sale' />
			<ProductsItem
				title='Flow Slim Armchair'
				price='300.00'
				prevPrice='1.000'
			/>
			<ProductsItem
				title='Flow Slim Armchair'
				price='26.00'
				prevPrice='1.000'
			/>
			<ProductsItem
				title='Flow Slim Armchair'
				price='36.00'
				prevPrice='1.000'
			/>
		</div>
	)
}

export default ProductsList
