import search_img from "../../assets/images/hero.png"
const Search = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${search_img})`}}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Search Weather Here</h1>
      <p className="mb-5">

      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Search;