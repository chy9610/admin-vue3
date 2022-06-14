// 国际化
import { createI18n } from 'vue-i18n'

// 获取语言
import { getLanguage } from '@/utils/cookies'

import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn'

// 国际化语言
import enLocale from './en'
import zhLocale from './zh-cn'

// 
const messages = {
    en: {
        ...enLocale,
        ...elementEnLocale
    },
    'zh-cn': {
        ...zhLocale,
        ...elementZhLocale
    }
}

export const getLocale = () => {

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

const i18n = createI18n({
    locale: getLocale(),
    messages: messages
})

export default i18n;