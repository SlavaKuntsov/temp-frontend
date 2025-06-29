'use client';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import type { Language, Translation } from '@/types/table-types';
import { IconDotsVertical } from '@tabler/icons-react';
import type { ColumnDef } from '@tanstack/react-table';
import { Button } from '../ui/button';
import { DataTableColumnHeader } from './data-table-column-header';

const languageTitles: Record<Language, string> = {
	ru: 'Russian',
	en: 'English',
	tr: 'Turkish',
};

export function columnsFactory(
	langs: Language[],
	onDeleteRow: (id: string) => void
): ColumnDef<Translation>[] {
	return [
		{
			accessorKey: 'key',
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title='Key' />
			),
		},
		...langs.map<ColumnDef<Translation>>(lang => ({
			id: lang,
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title={languageTitles[lang]} />
			),
			cell: ({ row }) => row.original.translations[lang],
		})),
		{
			id: "actions",
			cell: ({ row }) => (
			  <DropdownMenu>
				<DropdownMenuTrigger asChild>
				  <Button
					variant="ghost"
					className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
					size="icon"
				  >
					<IconDotsVertical />
					<span className="sr-only">Open menu</span>
				  </Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-32">
				  {/* <DropdownMenuSeparator /> */}
				  <DropdownMenuItem variant="destructive" onClick={() => onDeleteRow(row.original.id.toString())}>Delete</DropdownMenuItem>
				</DropdownMenuContent>
			  </DropdownMenu>
			),
		  },
	];
}
