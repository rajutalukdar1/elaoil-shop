import './Navbar.css'
import logo from '../../assest/E__2_-removebg-preview.png'
const Navbar = () => {


    const menuitems = (

        <>

            <li className="bg-[#279b37] text-base font-semibold text-white rounded-md">
                <a href="/#order">Order Now</a>
            </li>
        </>
    );


    return (
        <div>
            <div>
                <div className='navbar-bg mx-auto max-w-screen-xl'>
                    <div className="drawer ">
                        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col">
                            {/* Navbar */}
                            <div className="w-full navbar ">


                                <img className='lg:h-16 lg:w-20 h-16 w-12' src={logo} alt='' />
                                <div className="flex-1 text-4xl font-semibold text-white">ela<span className="text-[#279b37]">oil</span></div>

                                <div className="flex-none hidden lg:block">
                                    <ul className="menu menu-horizontal">
                                        {menuitems}
                                    </ul>
                                </div>
                                <div className="flex-none lg:hidden">
                                    <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="drawer-side z-10">
                            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-[#279b37]">
                                {menuitems}
                            </ul>

                        </div>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default Navbar;