import Image from "../../../model/Image";
import connectDB from "../../../db/connectDB";
import { NextResponse } from "next/server";

//Get all images from the database
export const GET = async () => {
  try {
    // Connect to the database
    await connectDB();
    // Fetch all images, sorted by creation date in descending order
    const images = await Image.find().sort({ createdAt: -1 });
    // Return the images as a JSON response
    return new NextResponse(JSON.stringify(images),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: 'Failed to fetch images'}),
      { status: 500 }
    );
   
  }
}