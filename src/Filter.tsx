import { Button } from "@/components/ui/button"
import { Check, ChevronsUpDown, MapPin, Stethoscope } from "lucide-react"


import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover.tsx";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command.tsx";
import { cn } from "@/lib/utils.ts";
import { Doctor } from "@/App.tsx";

function SelectPopover({ options }: { options: Array<{ label: string, value: string }> }) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={ open } onOpenChange={ setOpen }>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={ open }
                    className="w-[200px] justify-between"
                >
                    <MapPin className="mr-2 h-4 w-4"/>
                    { value
                        ? options.find((option: { label: string, value: string }) => option.value === value)?.label
                        : "Selecteer Locatie" }
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Selecteer Locatie"/>
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                        { options.map((option: { label: string, value: string }) => (
                            <CommandItem
                                key={ option.value }
                                value={ option.value }
                                onSelect={ (currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                } }
                            >
                                <Check
                                    className={ cn(
                                        "mr-2 h-4 w-4",
                                        value === option.value ? "opacity-100" : "opacity-0"
                                    ) }
                                />
                                { option.label }
                            </CommandItem>
                        )) }
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default function Filter({ doctors, locations }: {
    doctors: Array<Doctor>,
    locations: Array<{ label: string, value: string }>
}) {
    return (
        <div className="flex gap-1">
            <Button variant="outline">
                <Stethoscope className="mr-2 h-4 w-4"/>
                Toon Alle
                <span style={ { fontWeight: "bold" } }> &nbsp;Knie&nbsp;</span>
                Specialisten
            </Button>
            { doctors.length > 0
                && doctors.map((doctor) => (
                    <Button variant="outline" key={ doctor.name }>
                        <Stethoscope className="mr-2 h-4 w-4"/>
                        { doctor.name }
                    </Button>
                )) }
            <SelectPopover options={ locations }/>
        </div>
    );
}
