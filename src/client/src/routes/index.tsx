import { DataTable } from '@/components/table/data-table'
import { createFileRoute } from '@tanstack/react-router'
import "../index.css"
import { columns } from '@/components/table/columns'
import { useEffect, useState } from 'react'
import type { Translation } from '@/types/table-types'

export const Route = createFileRoute('/')({
  component: Index,
})

async function getData(): Promise<Translation[]> {
  return [
    {
      id: "728e3d52f",
      key: "greeting11111111111111111111",
      translations: {
        ru: "Привет111111111111111",
        en: "Hello1111111111111",
        tr: "Merhaba11111111111111"
      }
    },
    {
      id: "7284ed52f",
      key: "farewell",
      translations: {
        ru: "Пока",
        en: "Goodbye",
        tr: "Güle güle"
      }
    },
    {
      id: "677ed52f",
      key: "thanks",
      translations: {
        ru: "Спасибо",
        en: "Thank you",
        tr: "Teşekkürler"
      }
    },
    {
      id: "738ed52f",
      key: "yes",
      translations: {
        ru: "Да",
        en: "Yes",
        tr: "Evet"
      }
    },
    {
      id: "128ed52f",
      key: "no",
      translations: {
        ru: "Нет",
        en: "No",
        tr: "Hayır"
      }
    },
    {
      id: "828ed52f",
      key: "good",
      translations: {
        ru: "Хорошо",
        en: "Good",
        tr: "İyi"
      }
    },
    {
      id: "928ed52f",
      key: "bad",
      translations: {
        ru: "Плохо",
        en: "Bad",
        tr: "Kötü"
      }
    },
    {
      id: "a28ed52f",
      key: "see_you",
      translations: {
        ru: "Увидимся",
        en: "See you",
        tr: "Görüşürüz"
      }
    },
    {
      id: "528ed52f",
      key: "evening",
      translations: {
        ru: "Вечер",
        en: "Evening",
        tr: "Akşam"
      }
    },
    {
      id: "628ed52f",
      key: "night",
      translations: {
        ru: "Ночь",
        en: "Night",
        tr: "Gece"
      }
    },
    {
      id: "728ed52g",
      key: "how_are_you",
      translations: {
        ru: "Как дела?",
        en: "How are you?",
        tr: "Nasılsın?"
      }
    },
  ]
}

function Index() {
  const [data, setData] = useState<Translation[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData()
        setData(result)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="p-2">
      <h3 className="font-semibold text-3xl mb-4">Translation Service!</h3>

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-4 border-orange-400 border-t-transparent" />
        </div>
      ) : (
        <DataTable columns={columns} data={data!} />
      )}
    </div>
  )
}
