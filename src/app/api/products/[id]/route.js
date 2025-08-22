// src/app/api/products/[id]/route.js

import { ObjectId } from "mongodb";
import clientPromise from "../../../../../lib/mongodb";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    if (!ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ error: "Invalid product ID" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("Grocery");

    const product = await db.collection("products").findOne({ _id: new ObjectId(id) });

    if (!product) {
      return new Response(JSON.stringify({ error: "Product not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(product), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    if (!ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ error: "Invalid product ID" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("Grocery");

    const data = await req.json();
    if (!data.name?.trim() || !data.price) {
      return new Response(JSON.stringify({ error: "Name and price are required" }), { status: 400 });
    }

    const result = await db.collection("products").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          name: data.name,
          description: data.description || "",
          price: Number(data.price),
          image: data.image || "",
          category: data.category || "",
          stock: data.stock || 0,
        },
      }
    );

    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ error: "Product not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Product updated successfully" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    if (!ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ error: "Invalid product ID" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("Grocery");

    const result = await db.collection("products").deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: "Product not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Product deleted successfully" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
