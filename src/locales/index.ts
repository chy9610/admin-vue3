// 国际化
import { createI18n } from 'vue-i18n'


// 获取语言
import { getLanguage } from '@/utils/cookies'

import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn'

// 国际化语言
import enLocale from './en'
import zhLocale from './zh-cn'

interface Message {
    [key: string]: object
}

// 语言集
const messages: Message = {
    'en': {
        ...enLocale,
        ...elementEnLocale
    },
    'zh-cn': {
        ...zhLocale,
        ...elementZhLocale
    }
}

// 缓存中的cookie
export const getLocale = (): string => {

    const cookieLanguage = getLanguage()

    if (cookieLanguage) {
        return cookieLanguage
    }

    const language = navigator.language.toLowerCase()

    const locales = Object.keys(messages)
    for (const locale of locales) {
        if (language.indexOf(locale) > -1) {
            return locale
        }
    }

    return 'zh-cn'
}

// 语言对象
export const localeLanguage = (): object => {
    const key = getLocale();
    return messages[key]
}

const i18n = createI18n({
    locale: getLocale(),
    resource: messages,
    legacy: false,
    globalInjection: true
})

export default i18n;