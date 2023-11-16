"use client";

import { IGetIsues } from "@/app/api/issues/route";
import { MsTable } from "@/app/src/components/ms-table/MSTable";
import { ConstantRoute } from "@/app/src/constants/ConstantRoute";
import { Button, Table } from "@radix-ui/themes";
import axios from "axios";
import Link from "next/link";
import React from "react";


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
      {data.length > 0 && (
        <MsTable
        className="h-[70vh]"
          render={data.map((item) => (
            <Table.Row key={item.id} onClick={()=>console.log(item.id)}>
              <Table.RowHeaderCell>{item.title}</Table.RowHeaderCell>
              <Table.Cell>{item.description}</Table.Cell>
              <Table.Cell>{item.status}</Table.Cell>
              {/* <Table.Cell onClick={() => console.log(item.id)}>
                Delete
              </Table.Cell> */}
            </Table.Row>
          ))}
          header={[
            { label: "Title", value: "A" },
            { label: "Description", value: "B" },
            { label: "Status", value: "C" },
          ]}
        />
      )}
      <Button>
        <Link href={ConstantRoute.ISSUE.create}>New Issue</Link>
      </Button>
    </div>
  );
}

export default Issues;
