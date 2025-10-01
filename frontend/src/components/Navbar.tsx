import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link
                            to="/"
                            className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
                        >
                            MERNstore
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link
                                to="/"
                                className={`${isActive('/')
                                        ? 'text-blue-600 bg-blue-50'
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                    } px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                            >
                                Home
                            </Link>
                            <Link
                                to="/create"
                                className={`${isActive('/create')
                                        ? 'text-blue-600 bg-blue-50'
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                    } px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                            >
                                Create Product
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;