"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { IoClose } from "react-icons/io5";
import StatusDropDown from "../dropdowns/StatusDropDown";
import CategoryDropDown from "../dropdowns/CategoryDropDown";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { BiFirstPage, BiLastPage } from "react-icons/bi"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import { useState } from "react";
import PaginationSelection from "./PaginationSelection";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

export interface PaginationType {
    pageIndex: number;
    pageSize: number;
}

export function ProductTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [pagination, setPagination] = useState<PaginationType>({
        pageIndex: 0,
        pageSize: 10,
    });

    const table = useReactTable({
        data,
        columns,
        state: {
            pagination,
        },
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div>
            <div className="flex flex-col gap-3 mb-8 mt-6">
                <div className="flex items-center justify-between">
                    <Input placeholder="Search by name..." className="max-w-sm h-10" />
                    <div className="flex items-center gap-4">
                        <StatusDropDown />
                        <CategoryDropDown />
                    </div>
                </div>

                <FilterArea />
            </div>

            <div className="rounded-md border">
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
                                                    header.getContext()
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
                                                cell.getContext()
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
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="flex items-center justify-between mt-5">
                <PaginationSelection
                    pagination={pagination}
                    setPagination={setPagination}
                />

                <div className="flex gap-6 items-center">
                    <span className="text-sm text-gray-500">
                        Page {pagination.pageIndex + 1} of {table.getPageCount()}
                    </span>
                    <div className="flex items-center justify-end space-x-2 py-4">
                        {/* First Page Button */}
                        <Button
                            variant={"outline"}
                            className="size-9 w-12"
                            size="sm"
                            onClick={() => table.setPageIndex(0)}
                            disabled={!table.getCanPreviousPage()}
                        >
                            <BiFirstPage />
                        </Button>

                        {/* Previous Page  Button*/}
                        <Button
                            variant={"outline"}
                            className="size-9 w-12"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            <GrFormPrevious />
                        </Button>

                        {/* Next Page Button */}
                        <Button
                            variant={"outline"}
                            className="size-9 w-12"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            <GrFormNext />
                        </Button>

                        {/* Last Page Button */}
                        <Button
                            variant={"outline"}
                            className="size-9 w-12"
                            size="sm"
                            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                            disabled={!table.getCanNextPage()}
                        >
                            <BiLastPage />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FilterArea() {
    return (
        <div className="flex gap-3">
            {/* status */}
            <div className="border-dashed border rounded-sm p-1 flex gap-2 items-center px-2 text-sm">
                <span className="text-gray-600">Status</span>
                <Separator orientation="vertical" />
                <div className="flex gap-2 items-center">
                    <Badge variant="secondary">Item 1</Badge>
                    <Badge variant="secondary">Item 1</Badge>
                </div>
            </div>

            {/* category */}
            <div className="border-dashed border rounded-sm p-1 flex gap-2 items-center px-2 text-sm">
                <span className="text-gray-600">Category</span>
                <Separator orientation="vertical" />
                <div className="flex gap-2 items-center">
                    <Badge variant="secondary">Item 1</Badge>
                    <Badge variant="secondary">Item 1</Badge>
                </div>
            </div>

            <Button variant={"ghost"} className="p-1 px-2">
                <span>Reset</span>
                <IoClose />
            </Button>
        </div>
    );
}
