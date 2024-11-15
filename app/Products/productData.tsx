"use client";

import { MdBuild, MdInventory, MdAccessAlarm, MdHomeRepairService, MdHardware, MdAddShoppingCart, MdAccountBalance, MdAirlineSeatReclineNormal, MdAnchor, MdBatteryAlert, MdBeachAccess, MdCameraEnhance, MdCardTravel, MdCheckCircle, MdChevronLeft, MdChevronRight, MdConstruction, MdContactMail, MdDashboard, MdDelete, MdEdit, MdEvent, MdExplore, MdFace, MdFavorite, MdFilterList, MdFolder, MdGrade, MdHelp, MdHighlightOff, MdHome, MdLocationCity } from "react-icons/md";
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
    {
        id: "3",
        name: "Wrench",
        supplier: "ToolSupplier Inc",
        sku: "WR45678",
        category: "Others",
        status: "Draft",
        quantityInStock: 100,
        price: 8.99,
        icon: MdBuild
    },
    {
        id: "4",
        name: "Pliers",
        supplier: "ToolSupplier Inc",
        sku: "PL11223",
        category: "Others",
        status: "Published",
        quantityInStock: 60,
        price: 10.5,
        icon: MdInventory
    },
    {
        id: "5",
        name: "Drill",
        supplier: "ToolSupplier Inc",
        sku: "DR12345",
        category: "Others",
        status: "Draft",
        quantityInStock: 20,
        price: 150.0,
        icon: MdHomeRepairService
    },
    {
        id: "6",
        name: "Saw",
        supplier: "ToolSupplier Inc",
        sku: "SW98765",
        category: "Others",
        status: "Published",
        quantityInStock: 40,
        price: 45.99,
        icon: MdHardware
    },
    {
        id: "7",
        name: "Tape Measure",
        supplier: "ToolSupplier Inc",
        sku: "TM54321",
        category: "Others",
        status: "Published",
        quantityInStock: 70,
        price: 5.49,
        icon: MdAddShoppingCart
    },
    {
        id: "8",
        name: "Paintbrush",
        supplier: "ToolSupplier Inc",
        sku: "PB78654",
        category: "Others",
        status: "Draft",
        quantityInStock: 50,
        price: 12.99,
        icon: MdAirlineSeatReclineNormal
    },
    {
        id: "9",
        name: "Ladder",
        supplier: "ToolSupplier Inc",
        sku: "LD19283",
        category: "Others",
        status: "Published",
        quantityInStock: 15,
        price: 60.0,
        icon: MdAnchor
    },
    {
        id: "10",
        name: "Socket Set",
        supplier: "ToolSupplier Inc",
        sku: "SS11234",
        category: "Others",
        status: "Draft",
        quantityInStock: 90,
        price: 35.5,
        icon: MdBatteryAlert
    },
    {
        id: "11",
        name: "Clamp",
        supplier: "ToolSupplier Inc",
        sku: "CP00123",
        category: "Others",
        status: "Published",
        quantityInStock: 45,
        price: 12.75,
        icon: MdBeachAccess
    },
    {
        id: "12",
        name: "Utility Knife",
        supplier: "ToolSupplier Inc",
        sku: "UK90234",
        category: "Others",
        status: "Draft",
        quantityInStock: 80,
        price: 7.25,
        icon: MdCameraEnhance
    },
    {
        id: "13",
        name: "Safety Glasses",
        supplier: "ToolSupplier Inc",
        sku: "SG67890",
        category: "Others",
        status: "Published",
        quantityInStock: 120,
        price: 10.0,
        icon: MdCardTravel
    },
    {
        id: "14",
        name: "Work Gloves",
        supplier: "ToolSupplier Inc",
        sku: "WG11256",
        category: "Others",
        status: "Draft",
        quantityInStock: 150,
        price: 8.99,
        icon: MdCheckCircle
    },
    {
        id: "15",
        name: "Ear Protection",
        supplier: "ToolSupplier Inc",
        sku: "EP54689",
        category: "Others",
        status: "Published",
        quantityInStock: 110,
        price: 15.99,
        icon: MdChevronLeft
    },
    {
        id: "16",
        name: "Level",
        supplier: "ToolSupplier Inc",
        sku: "LV00122",
        category: "Others",
        status: "Draft",
        quantityInStock: 65,
        price: 18.75,
        icon: MdChevronRight
    },
    {
        id: "17",
        name: "Screwdriver Set",
        supplier: "ToolSupplier Inc",
        sku: "SS00543",
        category: "Others",
        status: "Published",
        quantityInStock: 100,
        price: 25.0,
        icon: MdConstruction
    },
    {
        id: "18",
        name: "Carpenter's Square",
        supplier: "ToolSupplier Inc",
        sku: "CS09876",
        category: "Others",
        status: "Draft",
        quantityInStock: 55,
        price: 13.99,
        icon: MdContactMail
    },
    {
        id: "19",
        name: "Toolbox",
        supplier: "ToolSupplier Inc",
        sku: "TB54321",
        category: "Others",
        status: "Published",
        quantityInStock: 30,
        price: 35.0,
        icon: MdDashboard
    },
    {
        id: "20",
        name: "Workbench",
        supplier: "ToolSupplier Inc",
        sku: "WB76890",
        category: "Others",
        status: "Draft",
        quantityInStock: 20,
        price: 120.0,
        icon: MdDelete
    },
    {
        id: "21",
        name: "Paint Roller",
        supplier: "ToolSupplier Inc",
        sku: "PR34567",
        category: "Others",
        status: "Published",
        quantityInStock: 40,
        price: 15.5,
        icon: MdEdit
    },
    {
        id: "22",
        name: "Spray Paint",
        supplier: "ToolSupplier Inc",
        sku: "SP56789",
        category: "Others",
        status: "Draft",
        quantityInStock: 80,
        price: 9.99,
        icon: MdEvent
    },
    {
        id: "23",
        name: "Lawn Mower",
        supplier: "ToolSupplier Inc",
        sku: "LM12345",
        category: "Others",
        status: "Published",
        quantityInStock: 12,
        price: 150.0,
        icon: MdExplore
    },
    {
        id: "24",
        name: "Chainsaw",
        supplier: "ToolSupplier Inc",
        sku: "CS98765",
        category: "Others",
        status: "Draft",
        quantityInStock: 8,
        price: 250.0,
        icon: MdFace
    },
    {
        id: "25",
        name: "Shovel",
        supplier: "ToolSupplier Inc",
        sku: "SH43210",
        category: "Others",
        status: "Published",
        quantityInStock: 100,
        price: 15.0,
        icon: MdFavorite
    },
    {
        id: "26",
        name: "Garden Rake",
        supplier: "ToolSupplier Inc",
        sku: "GR98765",
        category: "Others",
        status: "Draft",
        quantityInStock: 60,
        price: 18.0,
        icon: MdFilterList
    },
    {
        id: "27",
        name: "Watering Can",
        supplier: "ToolSupplier Inc",
        sku: "WC12345",
        category: "Others",
        status: "Published",
        quantityInStock: 80,
        price: 12.99,
        icon: MdFolder
    },
    {
        id: "28",
        name: "Garden Hose",
        supplier: "ToolSupplier Inc",
        sku: "GH67890",
        category: "Others",
        status: "Draft",
        quantityInStock: 50,
        price: 25.5,
        icon: MdGrade
    },
    {
        id: "29",
        name: "Wheelbarrow",
        supplier: "ToolSupplier Inc",
        sku: "WB19283",
        category: "Others",
        status: "Published",
        quantityInStock: 15,
        price: 80.0,
        icon: MdHelp
    },
    {
        id: "30",
        name: "Power Washer",
        supplier: "ToolSupplier Inc",
        sku: "WB19283",
        category: "Others",
        status: "Published",
        quantityInStock: 15,
        price: 80.0,
        icon: MdHelp
    }
]