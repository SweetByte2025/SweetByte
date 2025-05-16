import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function SweetByteHomePage() {
  return (
    <div className="min-h-screen bg-pink-50 px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-pink-900">SweetByte</h1>
        <p className="text-lg text-pink-600 mt-2">Luxury Digital Sweets Boutique</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: "Artisan Chocolate", price: "$15", image: "/images/chocolate.jpg" },
          { name: "Designer Cupcake", price: "$8", image: "/images/cupcake.jpg" },
          { name: "Gourmet Gum", price: "$5", image: "/images/gum.jpg" },
          { name: "Luxury Ice Cream", price: "$12", image: "/images/icecream.jpg" },
          { name: "Candy Collection Box", price: "$20", image: "/images/candybox.jpg" },
        ].map((item, index) => (
          <Card key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-pink-800">{item.name}</h2>
              <p className="text-pink-600 mb-2">{item.price}</p>
              <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
