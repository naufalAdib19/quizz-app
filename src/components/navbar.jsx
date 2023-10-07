
const Navbar = () => {
    return(
        <div className="relative top-0 left-0">
            <div className="bg-blue-500 px-8 py-3 font-bold text-white flex justify-between">
                <h1>NavBar</h1>
                <p>Hi, {localStorage.getItem('USER')}!</p>
            </div>
        </div>
    )
}

export default Navbar;