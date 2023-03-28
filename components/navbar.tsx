const Navbar = () => {
    return (
      <div className="flex justify-between p-7">
        <div className="flex text-slate-700 gap-4 mx-10">
            <a href="/" className="hover:text-slate-900">Home</a>
            <a href="/over" className="hover:text-slate-900">Over</a>
            <a href="/contact" className="hover:text-slate-900">Contact</a>
            <a href="" className="hover:text-slate-900">Menu</a>
        </div>
        <div>
            <a href="" className="hover:text-green-500 mr-5 font-bold">Aanmelden</a>
        </div>
      </div>
    )
  }

export default Navbar;