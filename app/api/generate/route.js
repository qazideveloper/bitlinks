// import clientPromise from "@/lib/mongodb"
// import { NextResponse } from "next/server";
// export async function POST(request) {

//   const body = await request.json()
//   const client = await clientPromise;
//   const db = client.db('bitlinks')
//   const collection = db.collection('url')

//   const doc = await collection.findOne({ shorturl: body.shorturl })
//   if (doc) {
//     return Response.json({ success: false, error: true, message: 'Shorturl already existed' })
//   }
 
//   const result = await collection.insertOne(
//     {
//       url: body.url,
//       shorturl: body.shorturl
//     }
//   )


//   return Response.json({ success: true, error: false, message: 'successfully generated short URL' })
// }
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { url, shorturl } = body;

    if (!url || !shorturl) {
      return NextResponse.json(
        { success: false, error: true, message: "URL and shorturl are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    // check if shorturl already exists
    const existing = await collection.findOne({ shorturl });
    if (existing) {
      return NextResponse.json(
        { success: false, error: true, message: "Shorturl already exists" },
        { status: 409 }
      );
    }

    // insert new document
    await collection.insertOne({ url, shorturl });

    // respond with generated short link
    return NextResponse.json({
      success: true,
      error: false,
      message: "Successfully generated short URL",
      shortUrl: `${process.env.NEXT_PUBLIC_HOST}/${shorturl}`,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, error: true, message: "Server error" },
      { status: 500 }
    );
  }
}

