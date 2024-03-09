const Navbar = () => {
  return (
    <div>
      <div className="navbar fixed z-20 md:max-w-screen-2xl mx-auto shadow-xl flex justify-end items-center bg-purple-950 p-4 lg:h-[60px]">
        <button className="btn btn-primary rounded-[50px] bg-yellow-400 border-none text-purple-950 font-bold uppercase hover:bg-yellow-300">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
