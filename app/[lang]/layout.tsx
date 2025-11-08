import { StringsProvider } from '@/data/stringsConfig';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Nunito } from 'next/font/google';

import Navigation from '@/components/navigation';

const nunito = Nunito({ weight: '400', subsets: ['latin'] });

const locales = ['en', 'es'] as const;

export async function generateStaticParams() {
	return locales.map((lang) => ({ lang }));
}
export const metadata: Metadata = {
	title: 'react-strings',
};

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}) {
	const { lang } = await params;

	const isValidLang = (l: string): l is (typeof locales)[number] => {
		return (locales as readonly string[]).includes(l);
	};

	if (!isValidLang(lang)) {
		notFound();
	}

	return (
		<html lang={lang}>
			<body className={`${nunito.className} antialiased`}>
				<StringsProvider locale={lang}>
					<Navigation />
					{children}
				</StringsProvider>
			</body>
		</html>
	);
}
