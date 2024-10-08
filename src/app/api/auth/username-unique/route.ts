import { dbConnect } from "@/db/dbConnect";
import UserModel from "@/model/user";
import { usernameValidation } from "@/schemas";
import { NextResponse } from "next/server";
import { z } from "zod";

export const usernameQuearySchema = z.object({
    username: usernameValidation
})

export async function GET(request: Request) {
    await dbConnect()

    try {
        const { searchParams } = new URL(request.url)
        const quearyParams = {
            username: searchParams.get('username')
        }

        //validate using zod
        const result = usernameQuearySchema.safeParse(quearyParams)

        //if username validation failed
        if (!result.success) {
            const usernameErrors = result.error.format().username?._errors || []
            return NextResponse.json({
                success: false,
                message: usernameErrors.length > 0 ? usernameErrors.join(', ') : "Invalid queary parameters"
            }, { status: 400 })
        } 
        
        const { username } = result.data;

        //find verified user by username
        const existingVerifiedUser = await UserModel.findOne({ username, isVerified: true })
        if (existingVerifiedUser) {
            return NextResponse.json({
                success: false,
                message: "Username already exists!"
            }, { status: 400 })
        }
        return NextResponse.json({
            success: true,
            message: "Username is available."
        }, { status: 200 })
    } catch (error) {
        console.log("Error while checking username", error);
        return NextResponse.json({ success: false, message: "Error while checking username" }, { status: 500 });
    }
}