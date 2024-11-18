import React from "react";
import { FaCheck, FaInbox } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuGitPullRequestDraft } from "react-icons/lu";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandList,
    CommandGroup,
    CommandItem,
} from "@/components/ui/command";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

type Status = {
    value: string;
    label: string;
    icon: React.ReactNode;
};

const statuses: Status[] = [
    { value: "Published", label: "Published", icon: <FaCheck /> },
    { value: "Inactive", label: "Inactive", icon: <IoClose /> },
    { value: "Draft", label: "Draft", icon: <FaInbox /> },
];

type StatusDropDownProps = {
    selectedStatuses: string[];
    setSelectedStatuses: React.Dispatch<React.SetStateAction<string[]>>;
};

export function StatusDropDown({
    selectedStatuses,
    setSelectedStatuses,
}: StatusDropDownProps) {
    const [open, setOpen] = React.useState(false);

    function returnColor(status: string) {
        switch (status) {
            case "Published":
                return "text-green-600 bg-green-100";
            case "Inactive":
                return "text-red-600 bg-red-100";
            case "Draft":
                return "text-gray-600 bg-gray-100";
            default:
                return "";
        }
    }

    function handleCheckboxChange(value: string) {
        setSelectedStatuses((prev) => {
            const updatedStatuses = prev.includes(value)
                ? prev.filter((status) => status !== value)
                : [...prev, value];

            return updatedStatuses;
        });
    }

    function clearFilters() {
        setSelectedStatuses([]);
    }

    return (
        <div className="flex items-center space-x-4 poppins">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="secondary" className="h-10">
                        <LuGitPullRequestDraft />
                        Status
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className="p-0 w-48 poppins"
                    side="bottom"
                    align="center"
                >
                    <Command className="p-1">
                        <CommandList>
                            <CommandGroup>
                                {statuses.map((status) => (
                                    <CommandItem
                                        key={status.value}
                                        value={status.value}
                                        className="h-10 mb-2 flex items-center"
                                    >
                                        {/* Use a single handler for state management */}
                                        <Checkbox
                                            checked={selectedStatuses.includes(status.value)}
                                            onCheckedChange={() => handleCheckboxChange(status.value)}
                                            className="size-4 rounded-[4px] mr-2"
                                        />
                                        <div
                                            className={`flex items-center gap-1 ${returnColor(
                                                status.value
                                            )} p-1 rounded-lg px-4 text-[13px]`}
                                        >
                                            {status.icon}
                                            {status.label}
                                        </div>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                        <div className="flex flex-col gap-2 text-[23px]">
                            <Separator />
                            <Button
                                variant="ghost"
                                className="text-[12px] mb-1"
                                onClick={clearFilters}
                            >
                                Clear Filters
                            </Button>
                        </div>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
}
