import { Table } from "@radix-ui/themes";
import { ReactNode } from 'react';


interface Props {
    render:ReactNode;
    header:IMsTableHeader[]
    className: string | undefined
}
interface IMsTableHeader{label:string, value:string,
    // sort?:'desc'|'asc'
}
export function MsTable({render,header,className}:Readonly<Props>) {
    return (
        <Table.Root className={className}>
            <Table.Header >
                <Table.Row>
                    {header.map(item=>
                        <Table.ColumnHeaderCell key={item.value}>{item.label}</Table.ColumnHeaderCell>
                    ) }
                </Table.Row>
            </Table.Header>
            <Table.Body>{render}
            </Table.Body>
        </Table.Root>
    );
}

