import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Options } from "@/App.tsx";

export default function Search({ searchQuery, options, onSelectSearchItem }: {
    searchQuery: string,
    options: Array<Array<Options>>,
    onSelectSearchItem: any
}) {
    const [open, setOpen] = React.useState(false)

    function onSelect(searchQuery: string) {
        setOpen(false)
        onSelectSearchItem(searchQuery)
    }

    // Flatten the array of arrays and extract the "value" and "label" properties
    const allValuesWithLabels = options.flatMap(innerArray =>
        innerArray.map(obj => ({ value: obj.value, label: obj.label }))
    );

    // Use a Set to keep only unique values based on the "value" property
    const uniqueValuesWithLabelsSet = new Set(allValuesWithLabels.map(obj => obj.value));

    // Convert the Set back to an array and map it to the corresponding labels
    const uniqueValuesWithLabels = [...uniqueValuesWithLabelsSet].map(value => {
        const matchingObject = allValuesWithLabels.find(obj => obj.value === value);
        return { value, label: matchingObject!.label };
    });

    return (
        <Popover open={ open } onOpenChange={ setOpen }>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={ open }
                    className="w-[200px] justify-between"
                >
                    { searchQuery
                        ? uniqueValuesWithLabels.find((option: {
                            label: string,
                            value: string
                        }) => option.value === searchQuery)?.label
                        : "Selecteer je klacht..." }
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Selecteer je klacht..."/>
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                        { uniqueValuesWithLabels.map((option: { label: string, value: string }) => (
                            <CommandItem
                                key={ option.value }
                                value={ option.value }
                                onSelect={ onSelect }
                            >
                                <Check
                                    className={ cn(
                                        "mr-2 h-4 w-4",
                                        searchQuery === option.value ? "opacity-100" : "opacity-0"
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
