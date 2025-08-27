import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({ weight: '400', subsets: ['latin'] });

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
	return (
		<html lang='en'>
			<body className={`${nunito.className} antialiased`}>{children}</body>
		</html>
	);
}
