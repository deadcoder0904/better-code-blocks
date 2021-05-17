import Link from 'next/link'
import clsx from 'clsx'

export type NavItemType = {
	title: string
	href: string
}

type NavItemProps = NavItemType & {
	pathname: string
}

export const NavItem = ({ title, href, pathname }: NavItemProps) => {
	return (
		<li className={clsx('mr-4 sm:mr-16', pathname === href ? 'prose' : '')}>
			<Link href={href}>
				<a
					className={clsx(
						'px-2 text-lg sm:text-lg',
						pathname === href
							? 'font-extrabold text-blueGray-700 underline hover:text-blueGray-500'
							: 'font-semibold text-blueGray-500 hover:text-blueGray-700 hover:font-extrabold'
					)}
				>
					{title}
				</a>
			</Link>
		</li>
	)
}
