"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "./data-table-column-header"
import type { Language, Translation } from "@/types/table-types"

const defaultLanguages: Language[] = ["ru", "en"]

const languageTitles: Record<Language, string> = {
  ru: "🇷🇺 Russian",
  en: "en English",
  tr: "🇹🇷 Turkish",
}

export const columns: ColumnDef<Translation>[] = [
  {
    accessorKey: "key",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Key" />
    ),
  },
  ...defaultLanguages.map<ColumnDef<Translation>>((lang) => ({
    id: lang,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={languageTitles[lang]} />
    ),
    cell: ({ row }) => row.original.translations[lang],
  })),
]
