// src/app/api/products/route.js
import clientPromise from "../../../../lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("Grocery");

    const products = await db.collection("products").find({}).toArray();

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("Grocery");

    const data = await req.json();

    // Validation
    if (!data.name?.trim() || !data.price || isNaN(data.price)) {
      return new Response(JSON.stringify({ error: "Valid name and price are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const product = {
      name: data.name,
      description: data.description || "",
      price: Number(data.price),
      image: data.image || "",
      category: data.category || "",
      stock: data.stock || 0,
    };

    const result = await db.collection("products").insertOne(product);

    return new Response(JSON.stringify({ message: "Product added successfully", result }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
