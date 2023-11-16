"use client";
import { Button, Table } from "@radix-ui/themes";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { IGetIsues } from "../api/issues/route";

function Issues() {
  const [data, setData] = React.useState<IGetIsues[]>([]);
  const getData = async () => {
    const res: IGetIsues[] = (await axios.get("/api/issues")).data;
    if (res) {
      setData(res);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);
 
  return (
    <div className="space-y-5">
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.length>0&& data.map((item) => (
            <Table.Row key={item.id}>
              <Table.RowHeaderCell>{item.title}</Table.RowHeaderCell>
              <Table.Cell>{item.description}</Table.Cell>
              <Table.Cell>{item.status}</Table.Cell>
              <Table.Cell onClick={()=>console.log(item.id)}>Delete</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
}

export default Issues;
