const DEFAULT_LANG = 'es' as const
const LANGUAGES = ['es', 'en'] as const

export function getLangFromUrl(url: URL): 'es' | 'en' {
  const [, lang] = url.pathname.split('/')
  let langToUsage: 'en' | 'es' = lang === 'en' || lang === 'es' ? lang : DEFAULT_LANG
  
  if (!LANGUAGES.includes(langToUsage)) {
    langToUsage = DEFAULT_LANG
  }

  return langToUsage as 'es' | 'en'
}
