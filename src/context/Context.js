import React, { createContext, useContext, useEffect, useReducer } from "react"
import axios from "axios"
import { reducer } from "./reducers"
import { toast } from "react-toastify"

const AuthContext = createContext()
export const initialState = {
	user: null,
	user_id: null,
	loggedIn: false,
}
const Context = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		dispatch({ type: "TOKEN" })
	}, [])

	const notify = (type, msg) => {
		toast(msg)
	}

	const login = async (data) => {
		try {
			const res = await axios.post(
				"http://localhost:5000/api/v1/auth/login",
				data
			)
			dispatch({ type: "LOGIN", payload: res.data })
			localStorage.setItem("token", JSON.stringify(res.data))
			notify("success", "Logged in successfully")
		} catch (error) {
			notify("error", "Failed to log in")
		}
	}
	const logout = async () => {
		try {
			await axios.post("http://localhost:5000/api/v1/auth/logout")
			dispatch({ type: "LOGOUT" })
			notify("success", "Logged out!")
		} catch (error) {
			notify("error", "Failed to log out!")
		}
	}
	const postUser = async (data, user) => {
		try {
			axios.post("http://localhost:5000/api/v1/update-user", data, {
				headers: {
					"Content-Type": "multipart/form-data",
					Authorization: "Bearer " + user,
				},
			})
			notify("success", "User details update")
		} catch (error) {
			notify("error", "User update failed!")
		}
	}

	const deleteUser = async (id, user) => {
		try {
			await axios.post(
				`http://localhost:5000/api/v1/delete-account/${id}`,
				{},
				{
					headers: {
						"Content-Type": "multipart/form-data",
						Authorization: "Bearer " + user,
					},
				}
			)
			dispatch({ type: "DELETE_USER" })
			notify("success", "User deleted!")
		} catch (error) {
			notify("error", "User not deleted!")
		}
	}

	return (
		<AuthContext.Provider
			value={{ ...state, login, logout, postUser, deleteUser }}
		>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuthContext = () => {
	return useContext(AuthContext)
}

export default Context
