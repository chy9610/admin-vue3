import { getSidebarStatus, getSize } from '@/utils/cookies'
import { getLocale, localeLanguage } from '@/locales/index'

export enum DeviceType {
    Mobile,
    Desktop,
}

export interface AppState {
    device: DeviceType
    sidebar: {
        opened: boolean
        withoutAnimation: boolean
    }
    localeLanguage: object,
    language: string
    size: string
}

export const state: AppState = {
    device: DeviceType.Desktop,
    sidebar: {
        opened: getSidebarStatus() !== 'closed',
        withoutAnimation: false
    },
    localeLanguage: localeLanguage(),
    language: getLocale(),
    size: getSize() || 'medium'
}
