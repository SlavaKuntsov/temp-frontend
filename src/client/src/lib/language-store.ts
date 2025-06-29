import type { Language } from '@/types/table-types'

// dynamic list of languages from API
let loadedLanguages: Language[] | null = null

export function setLanguages(langs: Language[]) {
	loadedLanguages = langs
}

export function getLanguagesSync(): Language[] {
	if (!loadedLanguages) throw new Error('Languages not loaded yet')
	return loadedLanguages
}

export function isLanguagesLoaded(): boolean {
	return Array.isArray(loadedLanguages)
}

export function clearLanguages() {
	loadedLanguages = null
}
