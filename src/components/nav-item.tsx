import type { LinkProps } from 'next/link'
import Link from 'next/link'
import React from 'react'

import { FaChevronDown } from 'react-icons/fa'

interface NavItemProps extends LinkProps {
	linkContent: string
	children?: React.ReactNode
	className?: string
	arrow?: boolean
}

const NavItem = ({
	href,
	linkContent,
	children,
	arrow,
	...props
}: NavItemProps): JSX.Element => {
	return (
		<li>
			<Link href={href} {...props}>
				{linkContent}
				{arrow && <FaChevronDown />}
			</Link>
			{children}
		</li>
	)
}

export default NavItem
