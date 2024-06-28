

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
              <div className="flex-1 ">
                <a className="btn btn-ghost text-xl md:text-2xl font-bold">Recipe Calories</a>
              </div>
              <div className="sm:flex gap-6 flex-1 hidden ">
                <a href="">Home</a>
                <a href="">Recipes</a>
                <a href="">About</a>
                <a href="">Search</a>
              </div>
              <div className="flex-none gap-2 ">
               <div> <a href=""><img src="https://i.ibb.co/QHSk1GF/Frame.png" alt="" className="w-6" /></a></div>
                <div className="flex form-control input input-bordered w-24 md:w-auto rounded-full">
                    
                  <input type="text" placeholder="Search" className="px-1 md:px-4 py-2 " />
                </div>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/s9wSdgf/Frame-5.png" />
                    </div>
                  </div>
                  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                  </ul>
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default Header;