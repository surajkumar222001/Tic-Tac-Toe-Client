import * as userAction from './user.actions'

export const userReducerFeatureKey = 'user'

let initialState = {
    loading : false,
    errorMessage : '',
    authentication : false,
    userInfo : {},
    token : '',
    invitedUser : {},
    games : {}
}

export const reducer = (state=initialState, action) => {
    let {type, payload} = action
    switch (type) {
        case userAction.USER_REGISTRATION_REQUEST :return {
            ...state,
            loading: true
        };
        case userAction.USER_REGISTRATION_SUCCESS:return {
            ...state,
            loading : false
        };
        case userAction.USER_REGISTRATION_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload
            };

            // user Login

        case userAction.USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true,

            };
        case userAction.USER_LOGIN_SUCCESS:
            localStorage.setItem('tic-tac-toe' , payload.token)
            return {
                ...state,
                loading: false,
                authentication: true,
                token: payload.token,
                userInfo: payload.user
            };

        case userAction.USER_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                authentication : false,
                userInfo : {},
                token : '',
                errorMessage: payload

            };
        case userAction.LOGOUT_USER :
            localStorage.removeItem('events-token')
            return {
                ...state,
                loading: false,
                authentication: false,
                token: '',
                userInfo: ''
            };
        case userAction.GET_USER_INFO_REQUEST :
            return {
                ...state,
                loading: true
            };
        case userAction.GET_USER_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: payload
            };
        case userAction.GET_USER_INFO_FAILURE :
            return {
                ...state,
                loading: false,
                userInfo: {} ,
                errorMessage: payload
            }


            case userAction.INVITE_USER_REQUEST :
                return {
                    ...state,
                    loading: true
                };
            case userAction.INVITE_USER_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    invitedUser: payload
                };
            case userAction.INVITE_USER_FAILURE :
                return {
                    ...state,
                    loading: false,
                    invitedUser: {},
                    errorMessage: payload
                }  
                
                
                case userAction.ADD_GAME_REQUEST :
                    return {
                        ...state,
                        loading: true
                    };
                case userAction.ADD_GAME_SUCCESS:
                    return {
                        ...state,
                        loading: false,
                        games: payload
                    };
                case userAction.ADD_GAME_FAILURE :
                    return {
                        ...state,
                        loading: false,
                        errorMessage: payload
                    } 
                    
                    
                    case userAction.GET_GAME_REQUEST :
                        return {
                            ...state,
                            loading: true
                        };
                    case userAction.GET_GAME_SUCCESS:
                        return {
                            ...state,
                            loading: false,
                            games: payload
                        };
                    case userAction.GET_GAME_FAILURE :
                        return {
                            ...state,
                            loading: false,
                            errorMessage: payload
                        } 

        default : return state;
    }
}