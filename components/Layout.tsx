import { Navbar } from "flowbite-react"
import { ReactNode } from "react"
import NavigationBar from "./LayoutComponents/NavigationBar"

interface LayoutInterface {
    children:ReactNode
}

const Layout = ({children}:LayoutInterface) =>{
    return (
        <div>
            <NavigationBar/>
            {children}
        </div>
    )

}

export default Layout
