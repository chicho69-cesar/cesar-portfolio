const DEFAULT_LANG = 'es' as const
const LANGUAGES = ['es', 'en'] as const

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  return LANGUAGES.includes(lang as any) ? lang : DEFAULT_LANG
}
