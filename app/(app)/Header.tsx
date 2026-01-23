const Header = ({ title }: { title: string }) => {
    return (
        <header className="shadow">
            {/* <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"> */}
            <div className="max-w-7xl">
                <h2 className="font-semibold text-xl text-white leading-tight">
                    {title}
                </h2>
            </div>
        </header>
    )
}

export default Header