"use client";

import { MdBuild, MdInventory } from "react-icons/md"
import { Product } from "./columns";

export const products: Product[] = [
    {
        id: "1",
        name: "Screwdriver",
        supplier: "ToolSupplier Inc",
        sku: "SD12345",
        category: "Others",
        status: "Draft",
        quantityInStock: 50,
        price: 12.99,
        icon: MdBuild
    },
    {
        id: "2",
        name: "Hammer",
        supplier: "ToolSupplier Inc",
        sku: "HM00912",
        category: "Others",
        status: "Published",
        quantityInStock: 30,
        price: 15.5,
        icon: MdInventory
    },
]