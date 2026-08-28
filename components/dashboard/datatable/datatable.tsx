import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type Column<T> = {
  header: string;
  accessor: (row: T) => React.ReactNode;
  className?: string;
};

type DataTableProps<T> = {
  data: T[];
  columns: Column<T>[];
  title : string;
  showActionButton? : boolean
};

const avatarColors = [
  {
    background: "bg-amber-400",
    text: "text-red-400",
  },
  {
    background: "bg-blue-400",
    text: "text-white",
  },
  {
    background: "bg-green-400",
    text: "text-green-900",
  },
  {
    background: "bg-purple-400",
    text: "text-purple-900",
  },
];

export function DataTable<T>({
  data,
  columns,
  title,
  showActionButton = true
}: DataTableProps<T>) {
  return (

    

    <Card className="gap-0 h-100">
        <CardHeader>
            <div className="flex justify-between">
                <div className="text-base font-medium">{title}</div>
                <div className="flex items-center  text-[13px]  text-[#5fb8a8]">View all</div>
            </div>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow className="text-xs">
                    {columns.map((column) => (
                        <TableHead
                        key={column.header}
                        className={column.className}
                        >
                        {column.header}
                        </TableHead>
                    ))}
                    {
                            showActionButton && (
                                <TableHead className="text-right">
                                    ACTION
                                </TableHead>
                            )

                        }
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {data.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {columns.map((column) => (
                        <TableCell
                            key={column.header}
                            className={column.className}
                        >
                            {column.accessor(row)}
                        </TableCell>
                        ))}
                        {
                            showActionButton && (
                                <TableCell className="text-right">
                                    View 
                                </TableCell>
                            )

                        }
                    </TableRow>
                    ))}
                    
                </TableBody>
            </Table>

        </CardContent>
    </Card>

    
  );
}