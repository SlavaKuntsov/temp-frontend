export type Language = 'ru' | 'en' | 'tr'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Translation = {
  id: string
  key: string
  translations: Record<Language, string>
}
