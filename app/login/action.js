"use server"
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export const googleauth = async () => {
    const supabase = await createClient();
    let { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `https://${process.env.NEXT_PUBLIC_HOST}/auth/callback`, 
        },
    })

    if (error) {
        console.error("OAuth Login Error:", error.message);
        return { error: error.message }
    } 
    return NextResponse.redirect(data.url)
}