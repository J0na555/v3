export type NavItem = {
	href: string;
	label: string;
};

export const navItems: NavItem[] = [
	{ href: '/about/', label: 'About' },
	{ href: '/work/', label: 'Work' },
	{ href: '/writing/', label: 'Writing' },
];

export function isActive(pathname: string, href: string): boolean {
	const normalized = href.endsWith('/') ? href : `${href}/`;
	return pathname === normalized || pathname.startsWith(normalized);
}
