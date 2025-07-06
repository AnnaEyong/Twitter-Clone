
import connectDB from "../../../../db/connectDB";
import User from "../../../../model/User";
import { NextResponse } from "next/server";

//Get user by their id
export const GET = async (req, { params }) => {
    const {id} = params
    try {
       await connectDB()

       const user = await User.findById(id).select("-Password-__v");

       if (!user) {
        return new NextResponse(JSON.stringify({ error: "User not found"}), {
            status: 404
        });
       }

       return new NextResponse(JSON.stringify(user), {
        status: 200
       });

        } catch (error) {
            console.error("Error fetching user by ID:", error);
            return new NextResponse(JSON.stringify({ error: "Failed to fetch user"}), {
                status: 500
            });
    }
}

//Delete user by their id
export const DELETE = async (req, {params}) => {
    const {id} = params;
    console.log("Deleting user ID:", id);
    try {
        await connectDB();
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return new NextResponse(JSON.stringify({ message: "User not found"}), {
                status: 404
            });
        }
        return new NextResponse(JSON.stringify({ error: "User deleted successfully"}), {
            status: 200
        });
    } catch (error) {
        console.error("Error deleting user by ID:", error);
        return new NextResponse(JSON.stringify({ error: "Failed to delete user"}), {
            status: 500
        });
    }
}


//Update user by id
export const PUT = async (req, {params}) => {
    const {id} = params;
    console.log("Updating user ID:", id);
    try {
        await connectDB();
        const userData = await req.json();
        const updatedUser = await User.findByIdAndUpdate(id, userData, {
            new: true,
            runValidatators: true
        }).select("-Password-__v");

        if (!updatedUser) {
            return new NextResponse(JSON.stringify({ error: "User not found"}), {
            status: 404
        });
        }

        return new NextResponse(JSON.stringify(updatedUser), {
            status: 200
        });
    } catch (error) {
        console.error("Error updating user by ID:", error);
        return new NextResponse(JSON.stringify({ error: "User not found"}), {
            status: 500
        });
    }

}