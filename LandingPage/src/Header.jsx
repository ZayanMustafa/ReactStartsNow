function Header (){
    return <>
        {/* Hero Section */}
        <header className="bg-blue-600 text-white">
      <div className="container mx-auto flex flex-col items-center py-16 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to My Project
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Build amazing things with simplicity and style using Tailwind CSS.
        </p>
        <a
          href="#features"
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow hover:bg-blue-100"
        >
          Explore Features
        </a>
      </div>
    </header>
    </>
}

export  default Header 