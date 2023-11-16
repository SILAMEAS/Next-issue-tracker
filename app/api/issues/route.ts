import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { IcreateIssue } from "../../utils/common/ValidateSchema";
export interface IGetIsues{
    id:number;
    title:string;
    description:string;
    status:"OPEN"|"IN_PROGRESS"|"CLOSE";
    createAt:Date;
    updatedAt:Date;
}
export async function POST(requset: NextRequest) {
  const body = await requset.json();
  const validation = IcreateIssue.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.formErrors, { status: 400 });
  }
  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });
  return NextResponse.json(newIssue, { status: 201 });
}

export async function GET() {
  const allIssue: IGetIsues[] = await prisma.issue.findMany();
  if (allIssue){
    return NextResponse.json(allIssue, { status: 201 });
  } 
  else return NextResponse.json([], { status: 400 });
}
