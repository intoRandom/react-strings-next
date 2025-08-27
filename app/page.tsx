'use client';

import { redirect } from 'next/navigation';

import { getLocale } from '@/data/stringsConfig';

export default function RootRedirect() {
	const locale = getLocale();
	redirect(`/${locale}.html`);
}
