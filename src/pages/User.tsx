import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAuth } from "@/hooks/useAuth";
import { createUser, deleteUser, fetchUsers } from "@/lib/nezha-api";
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
import { MoreHorizontal, UserPlus } from "lucide-react";
import React from "react";
import { toast } from "sonner";

export default function User() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 lg:px-0">
      <div className="flex justify-between mb-4 mt-4 items-center">
        <section className="flex flex-col gap-2">
          <h2 className="mt-0 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors">
            用户
          </h2>
          <p className="text-sm font-medium">
            你可以在这里查看和管理全部的用户。
            <a
              href="#"
              className="font-medium text-primary underline underline-offset-4"
            >
              了解更多↗
            </a>
          </p>
        </section>
        <UserAddDialog />
      </div>
      <UserDataTable />
    </div>
  );
}

function UserAddDialog() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const createUserMutation = useMutation({
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => createUser(user?.token ?? "", username, password),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("创建成功");
      setOpen(false);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="px-2 py-1 rounded-[8px] h-fit flex items-center gap-1">
          <UserPlus className="size-4" />
          新增用户
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>新增用户</DialogTitle>
          <DialogDescription>请输入用户名和密码创建新用户。</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              用户名
            </Label>
            <Input
              id="username"
              className="col-span-3"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              密码
            </Label>
            <Input
              id="password"
              className="col-span-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => createUserMutation.mutate({ username, password })}
          >
            创建
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

type User = {
  id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  username: string;
  password: string;
};

function UserDataTable() {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetchUsers(user?.token ?? ""),
  });

  const deleteUserMutation = useMutation({
    mutationFn: (ids: number[]) => deleteUser(user?.token ?? "", ids),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("删除成功");
    },
  });

  const users = data?.data as User[];
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const columns: ColumnDef<User>[] = [
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
      accessorKey: "username",
      header: () => <div>用户名</div>,
      cell: ({ row }) => {
        return <div className=" font-medium">{row.original.username}</div>;
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
      accessorKey: "updated_at",
      header: () => <div>更新时间</div>,
      cell: ({ row }) => {
        return (
          <div>
            {row.original.updated_at.split("T")[0] +
              " " +
              row.original.updated_at.split("T")[1].split(".")[0]}
          </div>
        );
      },
    },
    {
      accessorKey: "deleted_at",
      header: () => <div className=" text-center ">是否删除</div>,
      cell: ({ row }) => {
        return (
          <div className="flex items-center justify-center font-medium gap-2">
            <div className="font-medium">
              {row.original.deleted_at ? "是" : "否"}
            </div>
            <span className="relative flex h-2 w-2">
              {row.original.deleted_at && (
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
              )}
              {!row.original.deleted_at && (
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              )}
            </span>
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
              <DropdownMenuItem
                onClick={() => {
                  if (userRow.username === user?.name) {
                    toast.error("不能删除当前用户");
                    return;
                  }
                  deleteUserMutation.mutate([userRow.id]);
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
    data: users ?? [],
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
          placeholder="筛选用户..."
          value={
            (table.getColumn("username")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("username")?.setFilterValue(event.target.value)
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
          用户已选中: {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length}
        </div>
        {table.getFilteredSelectedRowModel().rows.length > 0 && (
          <div className="flex items-center justify-end space-x-2 py-4">
            <Button
              onClick={() => {
                if (
                  table
                    .getFilteredSelectedRowModel()
                    .rows.some((row) => row.original.username === user?.name)
                ) {
                  toast.error("不能删除当前用户");
                  return;
                }
                if (confirm("确定要删除选中用户吗？")) {
                  deleteUserMutation.mutate(
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
