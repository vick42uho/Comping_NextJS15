import { DarkMode } from "./Darkmode"
import DropdownListMenu from "./DropdownListMenu"
import Logo from "./Logo"
import Search from "./Search"


const Navbar = () => {
  return (
    <div className="container flex flex-col justify-between
    py-8 sm:flex-row sm:items-center sm:gap-4
    ">
        {/* Logo */}
        <Logo />
        {/* Search */}
        <Search />
        {/* DarkMode & Profile */}
        <div className="flex gap-4">
            <DarkMode />
            <DropdownListMenu />
        </div>
    </div>
  )
}
export default Navbar