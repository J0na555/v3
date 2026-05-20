export type NavItem = {
	href: string;
	label: string;
};

export const navItems: NavItem[] = [
	{ href: '/about/', label: 'About' },
	{ href: '/work/', label: 'Work' },
	{ href: '/writing/', label: 'Writing' },
];

function normalizePath(path: string): string {
	const withLeading = path.startsWith('/') ? path : `/${path}`;
	if (withLeading === '/') return '/';
	return withLeading.endsWith('/') ? withLeading : `${withLeading}/`;
}

export function isActive(pathname: string, href: string): boolean {
	const current = normalizePath(pathname);
	const target = normalizePath(href);
	if (current === target) return true;
	return current.startsWith(target) && target !== '/';
}
