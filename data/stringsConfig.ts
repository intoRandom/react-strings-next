'use client';

import { createStrings } from 'react-strings';

import en from './messages/en.json';

const initString = createStrings({
	strings: { en: { data: en, direction: 'ltr' } },
	languages: { es: { loader: () => import('@/data/messages/es.json') } },
	browser: true,
	storage: true,
	bgColor: 'transparent',
	duration: 200,
});

export const { StringsProvider, useStrings, getLocale } = initString;
