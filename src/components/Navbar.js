const Navbar = () => {
    return (<header className="bg-black">
      <nav className="mx-auto flex flex-row max-w-7xl items-center  p-2 lg:px-4" aria-label="Global">
        <a href='/task' className="mx-2 p-1.5 text-mycolour2">Home</a>
        <a href='/task/create' className="mx-2 p-1.5 text-mycolour2">Create</a>
        <a href='/take/list' className="mx-2 p-1.5 text-mycolour2">List</a>
      </nav>
    </header>);
}
 
export default Navbar;