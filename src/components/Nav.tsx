import { NavItem } from '@/components/NavItem'

import type { NavItemType } from '@/components/NavItem'

type NavDataType = Array<NavItemType>

const NavData: NavDataType = [
	// { title: 'About', href: '/about' },
	// { title: 'Essays', href: '/essays' },
	{ title: 'Tutorials', href: '/tutorials' },
]

type NavProps = {
	pathname: string
}

export const Nav = ({ pathname }: NavProps) => (
	<ul className="flex justify-end mt-24 mb-16 sm:mt-32 lg:mr-16">
		{NavData.map((item) => (
			<NavItem key={item.title} title={item.title} href={item.href} pathname={pathname} />
		))}
	</ul>
)
