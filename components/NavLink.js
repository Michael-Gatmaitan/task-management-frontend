import Link from 'next/link'

const NavLink = ({ active = false, children, ...props }) => (
    <Link
        {...props}
        className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${
            active
                ? 'border-indigo-200 text-gray-400 focus:border-indigo-400'
                : 'border-transparent text-gray-200 hover:text-gray-400 hover:border-gray-200 focus:text-gray-200 focus:border-gray-200'
        }`}>
        {children}
    </Link>
)

export default NavLink
