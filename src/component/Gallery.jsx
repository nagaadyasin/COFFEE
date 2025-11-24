import Navbar from "./Navbar";

function Gallery() {
  let all = [
    { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
    { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" },
    { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" },
    { src: "https://images.unsplash.com/photo-1511920170033-f8396924c348" },
    { src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814" },
    { src: "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e" },
    { src: "https://images.unsplash.com/photo-1511920170033-f8396924c348" },
    { src: "https://images.unsplash.com/photo-1495521821757-a1efb6729352" },
    { src: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03" },
    { src: "https://images.unsplash.com/photo-1504198458649-3128b932f49b" },
    { src: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c" },
    { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" },
  ];

  // Randomize sawirada oo ka soo qaado 12
  all = all.sort(() => 0.5 - Math.random()).slice(0, 12);

  return (
    <div>
      <Navbar />
      <div className="bg-amber-950 text-white p-4">
        <h1 className="text-4xl font-bold text-orange-400 mb-6">Gallery</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {all.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              className="rounded-lg object-cover h-40 w-full shadow hover:shadow-xl transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
