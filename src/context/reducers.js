export const reducer = (state, action) => {
	if (action.type === "LOGIN") {
		return {
			...state,
			user: action.payload.access_token,
            user_id:action.payload.user_id,
            loggedIn:true
		}
	}
	if (action.type === "TOKEN") {
		const token = JSON.parse(localStorage.getItem("token"))
        
		if (token && token !== "" && token !== undefined && token !== null) {
			return {
				...state,
				user: token['access_token'],
                user_id:token['user_id'],
                loggedIn:true
			}
		}
	}
	if (action.type === "LOGOUT") {
		localStorage.removeItem("token")
		return {
			...state,
			user: null,
            user_id:null,
            loggedIn:false
		}
	}
	if (action.type === "DELETE_USER") {
		localStorage.removeItem("token")
		return {
			...state,
			user: null,
            user_id:null,
            loggedIn:false
		}
	}
}
