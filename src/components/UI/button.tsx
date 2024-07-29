'use client'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export interface IButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	children: ReactNode | string
	variant?: 'primary-outline' | 'gray-outline' | 'link'
	icon?: ReactNode
	href?: string
	className?: string
}

const Button = ({
	children,
	variant = 'primary-outline',
	icon,
	href,
	className,
	...props
}: IButtonProps) => {
	const router = useRouter()
	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (href) {
			router.push(href, { scroll: false })
		} else if (props.onClick) {
			props.onClick(e)
		}
	}

	return (
		<button
			onClick={onClick}
			{...props}
			className={clsx(
				'btn min-w-[190px] w-auto',
				[
					variant == 'primary-outline' && 'btn-outline',
					variant == 'gray-outline' && 'btn-outline-gray',
					variant == 'link' &&
						'p-0 border-b border-b-[transparent] hover:border-primary-500 text-left text-primary-500 w-auto h-auto lowercase',
				],
				className
			)}
		>
			{children}
			{icon && icon}
		</button>
	)
}

export default Button
