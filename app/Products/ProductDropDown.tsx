import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Product } from "./columns";
import { MdContentCopy, MdOutlineDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Row } from "@tanstack/react-table";



export function ProductDropDown({ row }: { row: Row<Product> }) {
    const menuItems = [
        { icon: <MdContentCopy />, label: "Copy", className: "" },
        { icon: <FaRegEdit />, label: "Edit", className: "" },
        { separator: true },
        { icon: <MdOutlineDelete className="text-lg" />, label: "Delete", className: "text-red-600" },
    ]
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"ghost"} className="h-8 w-8 p-0">
                    <span className="sr-only">Open Menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="poppins">
                {menuItems.map((item, index) => item.separator ? (
                    <DropdownMenuSeparator key={index} />
                ) : (
                    <DropdownMenuItem key={index} className={`flex items-center gap-1 p-[10px] ${item.className}`}>
                        {item.icon}
                        <span>{item.label}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}