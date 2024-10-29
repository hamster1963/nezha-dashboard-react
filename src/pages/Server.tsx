import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAuth } from "@/hooks/useAuth";
import { deleteServer, fetchServers } from "@/lib/nezha-api";
import { ModelServer } from "@/lib/nezha-model";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { MoreHorizontal, PackagePlus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Servers() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 lg:px-0">
      <div className="flex justify-between mb-4 mt-4 items-center">
        <section className="flex flex-col gap-2">
          <h2 className="mt-0 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors">
            服务器
          </h2>
          <p className="text-sm font-medium">
            你可以在这里查看和管理全部的服务器。
            <a
              href="#"
              className="font-medium text-primary underline underline-offset-4"
            >
              了解更多↗
            </a>
          </p>
        </section>
        <Button className="px-2 py-1 rounded-[8px] h-fit flex items-center gap-1">
          <PackagePlus className="size-4" />
          新增服务器
        </Button>
      </div>
      <ServerDataTable />
    </div>
  );
}

function ServerDataTable() {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const { data } = useQuery({
    queryKey: ["servers"],
    queryFn: () => fetchServers(user?.token ?? ""),
  });

  const deleteServerMutation = useMutation({
    mutationFn: (ids: number[]) => deleteServer(user?.token ?? "", ids),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["servers"] });
      toast.success("删除成功");
    },
  });

  const servers = data?.data as ModelServer[];
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const columns: ColumnDef<ModelServer>[] = [
    {
      id: "select",
      // header: ({ table }) => (
      //     <Checkbox
      //         checked={
      //             table.getIsAllPageRowsSelected() ||
      //             (table.getIsSomePageRowsSelected() && "indeterminate")
      //         }
      //         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      //         aria-label="Select all"
      //     />
      // ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "id",
      header: () => <div>ID</div>,
      cell: ({ row }) => {
        return <div className=" font-medium">{row.original.id}</div>;
      },
    },
    {
      accessorKey: "name",
      header: () => <div>名称</div>,
      cell: ({ row }) => {
        return <div className=" font-medium">{row.original.name}</div>;
      },
    },
    {
      accessorKey: "created_at",
      header: "创建时间",
      cell: ({ row }) => (
        <div>
          {row.original.created_at.split("T")[0] +
            " " +
            row.original.created_at.split("T")[1].split(".")[0]}
        </div>
      ),
    },
    {
      accessorKey: "note",
      header: "备注",
      cell: ({ row }) => <div>{row.original.note}</div>,
    },
    {
      accessorKey: "public_note",
      header: "公开备注",
      cell: ({ row }) => <div>{row.original.public_note}</div>,
    },
    {
      accessorKey: "hide_for_guest",
      header: "隐藏",
      cell: ({ row }) => <div>{row.original.hide_for_guest ? "是" : "否"}</div>,
    },
    {
      accessorKey: "last_active",
      header: "最后活跃",
      cell: ({ row }) => {
        const lastActive = row.original.last_active
          ? new Date(row.original.last_active).getTime() / 1000
          : 0;
        const now = new Date().getTime() / 1000;
        const diff = now - lastActive;
        if (diff < 300) {
          return (
            <div className="flex items-center gap-2">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              刚刚
            </div>
          );
        }
        return (
          <div>
            {row.original.last_active?.split("T")[0] +
              " " +
              row.original.last_active?.split("T")[1].split(".")[0]}
          </div>
        );
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const userRow = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>操作</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>WebSSH</DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  if (confirm("确定要删除服务器吗？")) {
                    deleteServerMutation.mutate([userRow.id]);
                  }
                }}
              >
                删除
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const table = useReactTable({
    data: servers ?? [],
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full overflow-x-scroll">
      <div className="flex items-center py-4">
        <Input
          placeholder="筛选服务器..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm rounded-[8px]"
        />
      </div>
      <div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  无数据
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          服务器已选中: {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length}
        </div>
        {table.getFilteredSelectedRowModel().rows.length > 0 && (
          <div className="flex items-center justify-end space-x-2 py-4">
            <Button
              onClick={() => {
                if (confirm("确定要删除选中服务器吗？")) {
                  deleteServerMutation.mutate(
                    table
                      .getFilteredSelectedRowModel()
                      .rows.map((row) => row.original.id),
                  );
                }
              }}
            >
              删除选中
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
