import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { IcreateIssue } from "../../ValidateSchema";

export async function POST(requset:NextRequest){
    const body= await requset.json();
    const validation=IcreateIssue.safeParse(body);
   
    if(!validation.success){
        console.log("Jk")
        return NextResponse.json(validation.error.formErrors,{status:400})
    }
    console.log("BODY",body)
    const newIssue= await prisma.issue.create({
        data:{title:body.title,description:body.description}
    })
    return NextResponse.json(newIssue,{status:201})
}