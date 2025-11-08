'use client';

import { redirect } from 'next/navigation';

import { Button } from './ui/button';

import { Languages } from 'lucide-react';

import { useStrings } from '@/data/stringsConfig';

const Navigation = () => {
	const { Str, language, setLanguage } = useStrings();

	const SetLang = () => {
		if (language === 'es') {
			setLanguage('en');
			redirect('/en');
		} else {
			setLanguage('es');
			redirect('/es');
		}
	};

	return (
		<nav className='sticky top-0 mx-auto p-5 flex flex-row justify-between items-center w-full max-w-4xl backdrop-blur-sm bg-background/50'>
			<div className='text-red-500 text-3xl font-bold'>{Str.home.title()}</div>
			<div>
				<Button variant={'outline'} onClick={SetLang}>
					{language.toUpperCase()}
					<Languages />
				</Button>
			</div>
		</nav>
	);
};

export default Navigation;
