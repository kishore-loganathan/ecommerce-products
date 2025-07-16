import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
<nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
  <Link to="/" className="text-lg font-bold">
    MyShop
  </Link>

</nav>
    )}
export default Navbar;
