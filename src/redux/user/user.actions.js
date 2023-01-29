import axios from "axios";
import * as alertAction from '../alert/alert.action'
import * as userUtil from '../../util/userUtil';
import * as tokenUtil from '../../util/tokenUtil';


export const USER_REGISTRATION_REQUEST = 'USER_REGISTRATION_REQUEST'
export const USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS'
export const USER_REGISTRATION_FAILURE = 'USER_REGISTRATION_FAILURE'


export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'

export const LOGOUT_USER = 'LOGOUT_USER'

export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST'
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS'
export const GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILURE'


export const INVITE_USER_REQUEST = 'INVITE_USER_REQUEST'
export const INVITE_USER_SUCCESS = 'INVITE_USER_SUCCESS'
export const INVITE_USER_FAILURE = 'INVITE_USER_FAILURE'

export const ADD_GAME_REQUEST = 'ADD_GAME_REQUEST'
export const ADD_GAME_SUCCESS = 'ADD_GAME_SUCCESS'
export const ADD_GAME_FAILURE = 'ADD_GAME_FAILURE'

export const GET_GAME_REQUEST = 'GET_GAME_REQUEST'
export const GET_GAME_SUCCESS = 'GET_GAME_SUCCESS'
export const GET_GAME_FAILURE = 'GET_GAME_FAILURE'

// registration action


export  const registerUser = (userInfo,navigate) => {
    return async (dispatch) => {
        try {
            dispatch({type : USER_REGISTRATION_REQUEST});
            let dataURL = 'https://tictactoe-server-production-9651.up.railway.app/api/user/register'
            let response = await axios.post(dataURL,userInfo);
            dispatch({type : USER_REGISTRATION_SUCCESS,payload :response.data})
            dispatch(alertAction.setAlert(response.data.message,'success'))
            navigate('/login')
        }
        catch (error) {
            dispatch({type : USER_REGISTRATION_FAILURE, payload : error.response.data})
            let alertMessage = error.response.data.error
            dispatch(alertAction.setAlert(alertMessage[0].message , 'danger'))
        }

    }
};


export  const userLogin = (userInfo,navigate) => {
       return async (dispatch) => {
           try{
               dispatch({type:USER_LOGIN_REQUEST});
               let dataURL = 'https://tictactoe-server-production-9651.up.railway.app/api/user/login';
               let response = await axios.post(dataURL,userInfo);
               dispatch({type:USER_LOGIN_SUCCESS, payload : response.data})
               dispatch(alertAction.setAlert(response.data.msg,'success'))
               navigate('/players')
           }
           catch (error) {
               dispatch({type : USER_LOGIN_FAILURE, payload : error.response.data})
               let alertMessage = error.response.data
               dispatch(alertAction.setAlert(alertMessage[0].message , 'danger'))

           }
       }
}

export const logoutUser = (navigate) => {
    return(dispatch) => {
        dispatch({type : LOGOUT_USER});
        navigate('/')
    }
};

export const getUserInfo = () => {
    return async (dispatch) => {
        if(userUtil.getToken())
        {
            tokenUtil.setAuthToken(userUtil.getToken())
        }
         try{
             dispatch({type : GET_USER_INFO_REQUEST});
             let dataURL = 'https://tictactoe-server-production-9651.up.railway.app/api/user/'
             let response = await axios.get(dataURL);
             dispatch({type : GET_USER_INFO_SUCCESS, payload : response.data.user});

         }
         catch (e) {
            console.error(e)
             dispatch({type : GET_USER_INFO_FAILURE, payload : e.response.data})

         }


    }
}

// invite user
export const inviteUser = (email,navigate) => {
    return async (dispatch) => {
         try{
             dispatch({type : INVITE_USER_REQUEST});
             let dataURL = 'https://tictactoe-server-production-9651.up.railway.app/api/user/invite'
             let response = await axios.post(dataURL, email );
             dispatch({type : INVITE_USER_SUCCESS, payload : response.data.user});
            navigate('/game')
         }
         catch (e) {
            console.error(e)
             dispatch({type : INVITE_USER_FAILURE, payload : e.response.data})

         }


    }
}

export const addGame = (email,navigate) => {
    return async (dispatch) => {
        if(userUtil.getToken())
        {
            tokenUtil.setAuthToken(userUtil.getToken())
        }
         try{
             dispatch({type : ADD_GAME_REQUEST});
             let dataURL = 'https://tictactoe-server-production-9651.up.railway.app/api/user/game/status'
             let response = await axios.post(dataURL, email );
             dispatch({type : ADD_GAME_SUCCESS, payload : response.data.user});
         }
         catch (e) {
            console.error(e)
             dispatch({type : ADD_GAME_FAILURE, payload : e.response.data})

         }


    }
}


export const games = () => {
    return async (dispatch) => {
        if(userUtil.getToken())
        {
            tokenUtil.setAuthToken(userUtil.getToken())
        }
         try{
             dispatch({type : GET_GAME_REQUEST});
             let dataURL = 'https://tictactoe-server-production-9651.up.railway.app/api/user/games'
             let response = await axios.get(dataURL);
             dispatch({type : GET_GAME_SUCCESS, payload : response.data.user});
         }
         catch (e) {
            console.error(e)
             dispatch({type : GET_GAME_FAILURE, payload : e.response.data})

         }


    }
}



