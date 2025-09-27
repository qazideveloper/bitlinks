import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"


export default async function Page({ params }) {
  const { shorturl } = await params
  const client = await clientPromise;
  const db = client.db('bitlinks')
  const collection = db.collection('url')

  const doc = await collection.findOne({ shorturl:shorturl })
  if (doc) {
    redirect(doc.url)
  }
  else {
    redirect(`${process.env.NEXT_PUBLIC_HOST}`)
  }

  return <div>My Post: {shorturl}</div>
}
// if there is no endpoint link /contact, /about etc, then it will search for  shorturl stored in backend for that endpoint..and if is also not found, then it will redirect to "/" i-e homepage end point because we have made redirect function to redirect to "/", it short url not found