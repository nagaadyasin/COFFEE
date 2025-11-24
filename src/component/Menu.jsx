import Navbar from "./Navbar";
function Menu() {
  const items = [
    { name: "Coffee", price: "$3" },
    { name: "Cake", price: "$4" },
    { name: "Ice-cream", price: "$2" },
    { name: "Snack", price: "$1" },
    { name: "Pizza", price: "$6" },
    { name: "Burger", price: "$5" },
    { name: "Juice", price: "$2" },
  ];
  return (
    <div>
      <Navbar />
      <div className="bg-amber-950 text-white">
        <h1 className="text-4xl font-bold text-orange-400 mb-6 ">Menu</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.name} className="bg-white/10 p-4 rounded-xl">
              <h2 className="text-lg font-bold">{i.name}</h2>
              <p className="text-gray-300">{i.price}</p>
            </div>
          ))}
        </div>
      </div>{" "}
    </div>
  );
}
export default Menu;
