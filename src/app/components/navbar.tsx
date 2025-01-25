import Link from "next/link";

const NavBar = () => {
    return (
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <div className="flex-shink-0">
                    <Link href="/" className="text-black" >Logo</Link>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="ml-4 flex item-center space-x-4">
                    <Link href={'/'} className="text-black hover:bg-gray-900 hover:text-white rounded-lg">Home</Link>
                </div>
            </div>
        </div>
      </div>
    )
}

export default NavBar;