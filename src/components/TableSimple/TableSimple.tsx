'use client'

import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
    getKeyValue,
} from "@nextui-org/table";

export const TableSimple = ({
    rows,
    columns,
}: {
    rows: Array<any>
    columns: Array<any>
}) => {     
    return (
        <Table aria-label="Example table with dynamic content">
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn key={ column.key }>
                        { column.label }
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody items={ rows } emptyContent={"No rows to display."}>
                {(item) => (
                    <TableRow key={item.key}>
                        {(columnKey) => (
                            <TableCell>
                                { getKeyValue(item, columnKey) }
                            </TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}