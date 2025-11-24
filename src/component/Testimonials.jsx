import Navbar from "./Navbar";
function Testimonials() {
  const reviews = [
    {
      name: "Ayaan",
      text: "The coffee here is absolutely amazing. Rich flavor and perfect aroma!",
    },
    {
      name: "Mahad",
      text: "I loved the cakes! Fresh, soft, and full of taste. Highly recommend.",
    },
    {
      name: "Zahra",
      text: "Best place for ice-cream and snacks. Service is fast and friendly!",
    },
  ];
  return (
    <div className="bg-amber-950 text-white">
      <Navbar />
      <div>
        <h1 className="text-4xl font-bold text-orange-400 mb-6">
          Testimonials
        </h1>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-white/10 p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <h2 className="text-xl font-bold">{r.name}</h2>
              <p className="text-gray-300 mt-2">"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Testimonials;
