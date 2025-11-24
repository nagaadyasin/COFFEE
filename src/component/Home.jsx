import React, { useState } from "react";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="pt-24 px-6 bg-amber-950 text-white">
        <section className="hero-section flex flex-col md:flex-row items-center justify-between">
          <div className="hero-detail max-w-lg">
            <h2 className="text-4xl font-bold mb-4">Best Coffee</h2>
            <h3 className="text-xl mb-4">
              Make your day great with our special coffee
            </h3>
            <p className="mb-6">
              Welcome to our coffee paradise, where every bean tells a story and
              every cup sparks joy.
            </p>

            <div className="flex gap-4">
              <button className="bg-orange-400 px-4 py-2 rounded hover:bg-orange-500 transition">
                Order Now
              </button>
              <button className="border border-orange-400 px-4 py-2 rounded hover:bg-orange-400 hover:text-black transition">
                Contact Us
              </button>
            </div>
          </div>

          <div className="hero-image mt-8 md:mt-0">
            <img
              src="cofe.png"
              alt="Coffee"
              className="w-full max-w-md rounded"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
