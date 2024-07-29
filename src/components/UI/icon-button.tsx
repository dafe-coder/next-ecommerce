import { ReactNode } from 'react'

interface IconButtonProps {
	children: ReactNode
	className?: string
	count?: number
}

const IconButton = ({ children, className, count }: IconButtonProps) => {
	return (
		<button
			className={`size-8 flex items-center justify-center relative group-hover:text-primary-500 hover:text-primary-500 ${className}`}
		>
			{children}
			{count && (
				<span className='size-4 flex justify-center items-center rounded-full bg-primary-500 absolute -top-0 -right-0.5 text-xxs text-white'>
					{count}
				</span>
			)}
		</button>
	)
}

export default IconButton
