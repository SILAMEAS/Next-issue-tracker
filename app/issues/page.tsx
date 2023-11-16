"use client";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

function Issues() {
  return <div>
    <Button><Link href="/issues/new">New Issue</Link></Button></div>;
}

export default Issues;
