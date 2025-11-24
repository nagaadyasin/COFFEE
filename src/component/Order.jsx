import Navbar from "./Navbar";
function Order() {
  return (
    <div>
      <Navba />
      <div className="max-w-xl mx-auto p-6 rounded-xl shadow bg-amber-950 text-white">
        <h1 className="text-4xl font-bold text-orange-400 mb-6">
          Place Your Order
        </h1>
        <form className="space-y-4">
          <input
            className="w-full p-3 rounded bg-black/30"
            placeholder="Full Name"
          />
          <input
            className="w-full p-3 rounded bg-black/30"
            placeholder="Phone Number"
          />
          <input
            className="w-full p-3 rounded bg-black/30"
            placeholder="Address"
          />
          <select className="w-full p-3 rounded bg-black/30">
            <option>Choose Product</option>
            <option>Coffee</option>
            <option>Cake</option>
            <option>Ice-cream</option>
            <option>Snack</option>
            <option>Pizza</option>
            <option>Burger</option>
            <option>Juice</option>
          </select>
          <input
            className="w-full p-3 rounded bg-black/30"
            placeholder="Quantity"
          />
          <textarea
            className="w-full p-3 rounded bg-black/30"
            placeholder="Notes (optional)"
          ></textarea>
          <button className="bg-orange-500 hover:bg-orange-600 w-full py-3 rounded font-bold shadow hover:shadow-xl transition">
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
}
export default Order;
