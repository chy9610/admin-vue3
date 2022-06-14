
enum AppActionTypes {
    ACTION_TOGGLE_SIDEBAR = 'ACTION_TOGGLE_SIDEBAR',
    ACTION_CLOSE_SIDEBAR = 'ACTION_CLOSE_SIDEBAR',
    ACTION_TOGGLE_DEVICE = 'ACTION_TOGGLE_DEVICE',
    ACTION_SET_LANGUAGE = 'ACTION_SET_LANGUAGE',
    ACTION_SET_SIZE = 'ACTION_SET_SIZE',
}

export interface Actions {
    [AppActionTypes.ACTION_TOGGLE_SIDEBAR](options: any): void
    [AppActionTypes.ACTION_CLOSE_SIDEBAR](options: any): void
    [AppActionTypes.ACTION_TOGGLE_DEVICE](options: any): void
    [AppActionTypes.ACTION_SET_LANGUAGE](options: any): void
    [AppActionTypes.ACTION_SET_SIZE](options: any): void
}

export const actions: ActionTree<AppState, RootState> & Actions = {
    [AppActionTypes.ACTION_TOGGLE_SIDEBAR](options: any) { },
    [AppActionTypes.ACTION_CLOSE_SIDEBAR](options: any) { },
    [AppActionTypes.ACTION_TOGGLE_DEVICE](options: any) { },
    [AppActionTypes.ACTION_SET_LANGUAGE](options: any) { },
    [AppActionTypes.ACTION_SET_SIZE](options: any) { }
}
