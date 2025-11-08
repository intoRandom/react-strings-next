import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'react-strings',
	description:
		'Keep your content organized, easy to update, and multilingual—built for React.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return children;
}
