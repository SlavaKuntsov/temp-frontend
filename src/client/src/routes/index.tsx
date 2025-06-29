import { columnsFactory } from '@/components/table/columns';
import { DataTable } from '@/components/table/data-table';
import type { Language, Translation } from '@/types/table-types';
import { getData, getLanguages } from '@/utils/api';
import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import '../index.css';

export const Route = createFileRoute('/')({
	component: Index,
});

function Index() {
	const [data, setData] = useState<Translation[] | null>(null);
	const [langs, setLangs] = useState<Language[] | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchAll = async () => {
			try {
				const [dl, ll] = await Promise.all([getData(), getLanguages()]);
				setData(dl);
				setLangs(ll);
			} finally {
				setIsLoading(false);
			}
		};
		fetchAll();
	}, []);

	// Пока грузятся языки или данные
	if (isLoading || !data || !langs) {
		return (
			<div className='p-2'>
				<h3 className='font-semibold text-3xl mb-4'>Translation Service!</h3>
				<div className='flex justify-center items-center py-12'>
					<div className='animate-spin rounded-full h-8 w-8 border-4 border-orange-400 border-t-transparent' />
				</div>
			</div>
		);
	}

	const handleDeleteRow = (id: string) => {
		setData(prev => {
			if (!prev) return prev;
			return prev.filter(row => row.id !== id);
		});
	};

	const columns = columnsFactory(langs, handleDeleteRow);

	return (
		<div className='p-2'>
			<h3 className='font-semibold text-3xl mb-4'>Translation Service!</h3>
			<DataTable columns={columns} data={data} />
		</div>
	);
}
