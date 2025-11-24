import Navbar from "./Navbar";
function About() {
  return (
     <div>

    <Navbar  />
    <div className="min-h-screen bg-[#4b2e16] flex justify-center items-center px-6 py-20">
      <div className="max-w-2xl bg-[#3a230f] p-8 rounded-2xl shadow-xl space-y-4 border border-[#6f4724]">
        <h1 className="text-4xl font-bold text-orange-400">About Us</h1>

        <p className="text-white leading-relaxed">
          Welcome to our Coffee Shop! We serve the finest coffee, cakes,
          ice-cream, snacks and fresh foods like pizza, burgers and juices. Our
          goal is to make your day brighter with delicious flavors and great
          service. Every cup we prepare tells a story of quality, passion and
          freshness.
        </p>
      </div>
    </div>
      </div>
  );
}

export default About;
