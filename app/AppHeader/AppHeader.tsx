import React from 'react'
import { AiFillProduct } from 'react-icons/ai'
import ModeToggle from './ModeToggle'

function AppHeader() {
    return (
        <div className="p-2 flex justify-between items-center">
            <AppLogo />
            <ModeToggle />
        </div>
    )
}

function AppLogo() {
    return (
        <div className="flex items-center gap-2 transition-all">
            <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <AiFillProduct className="text-xl" />
            </div>
            <div className="flex items-center gap-1 text-left text-sm leading-right">
                <span className="truncate font-semibold text-[24px]">Inventory</span>
            </div>
        </div>
    )
}

export default AppHeader