import clientPromise from "../../../../lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("Grocery");
    const products = await db.collection("products").find({}).toArray();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("Grocery");

    const data = await req.json();

    if (!data.name?.trim() || !data.price) {
      return new Response(JSON.stringify({ error: "Name and price are required" }), { status: 400 });
    }

    const result = await db.collection("products").insertOne(data);

    return new Response(JSON.stringify({ message: "Product added successfully", result }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
