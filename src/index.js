import React from "react"
import ReactDOM from "react-dom/client"
import { ToastContainer } from "react-toastify"
import "./index.css"
import App from "./App"
import Context from "./context/Context"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<Context>
			<ToastContainer />
			<App />
		</Context>
	</React.StrictMode>
)
