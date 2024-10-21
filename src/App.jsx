import "./App.css";

function NavBar() {
  return (
    <nav className="flex items-center justify-between py-2 px-9 bg-white border-b ">
      <img src="src/assets/logo.svg" alt="logo" className="w-18 h-auto mb-4" />
      <div className="hidden md:flex space-x-4">
        <button className="flex items-center justify-center px-9 py-2 rounded-full border">
          Log in
        </button>
        <button className="flex items-center justify-center px-8 py-2 rounded-full border bg-gray-900 text-white  hover:bg-gray-700 transition-colors">
          Sign up
        </button>
      </div>
      <button className="md:hidden">Menu</button>
    </nav>
  );
}
function HeroSection() {
  return (
    <main className="container px-4 py-8 lg:py-16 mx-auto">
      <div className="flex flex-col lg:flex-row items-center ">
        <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8 lg:text-right">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Stay <br className="hidden lg:block" />
            Informed, <br />
            Stay Inspired
          </h1>
          <p className="text-lg text-gray-500">
            Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
            Inspiration and Information.
          </p>
        </div>
        <img
          src="src/assets/person-and-cat.png"
          alt="Person with a cat"
          className="h-[530px] object-cover rounded-lg shadow-lg lg:w-1/3 mx-4 mb-8 lg:mb-0"
        />
        <div className="lg:w-1/3 lg:pl-8 text-left">
          <h2 className="text-xl font-semibold mb-2">-Author</h2>
          <h3 className="text-2xl font-bold mb-4">Thompson P.</h3>
          <p className="text-gray-500 mb-4">
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness.
          </p>
          <p className="text-gray-500">
            When I&apos;m not writing, I spend time volunteering at my local
            animal shelter, helping cats find loving homes.
          </p>
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
    </>
  );
}

export default App;


