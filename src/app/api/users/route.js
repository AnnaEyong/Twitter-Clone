import connectDB from "../../../db/connectDB";
import User from "../../../model/User";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();
    const users = await User.find({}, '-password -__v').sort({ createdAt: -1 });
    return new NextResponse(
      JSON.stringify(users),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: 'Failed to fetch users'}),
      { status: 500 }
    );
   
  }
}

export const POST = async (request) => {
  try {
    // Connect to the database
    await connectDB();
    //get the user data from the request body
    const userData = await request.json();
    const {Email, Phone} = userData;
    // Check if user with the same email or phone already exists
    const existingUser = await User.findOne({ $or: [{Email}, {Phone}] });
    
    if (existingUser) {
      return new NextResponse(
        JSON.stringify({
           error: existingUser.Email == Email?"Email Already in use": "Phone number Already in use" }),
        { status: 409 }
      );
    }

    //create a user new instance
    const newUser = new User(userData);
     await newUser.save();
     
    return new NextResponse(
      JSON.stringify(newUser),
      { status: 201 }
    );
  } catch (error) {
    console.log('error creating user:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Failed to create user' }, error),
      { status: 500 }
    );
  }
}




