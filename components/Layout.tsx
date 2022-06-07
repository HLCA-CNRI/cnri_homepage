import { Navbar } from "flowbite-react"
import { ReactNode } from "react"
import NavigationBar from "./LayoutComponents/NavigationBar"
import Footer from "./LayoutComponents/Footer"

interface LayoutInterface {
    children:ReactNode
}

const Layout = ({children}:LayoutInterface) =>{
    return (
        <div>
            <NavigationBar/>
            {children}
            <Footer/>
        </div>
    )

}

export default Layout
