import { Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const SearchResults = ({ searchResults, locationQuery }: { searchResults: Array<any>, locationQuery: string }) => {

    const locationFilteredSlots = (slots: Array<any>): Array<any> => {
        if (locationQuery === '' || locationQuery === 'alle') {
            return slots
        }
        return slots.filter(s => s.location === locationQuery)
    }

    return (
        <div className="my-8 grid grid-cols-3 gap-2">
            { searchResults.map((doctor: any) => (
                <Card key={ doctor.name } className={ locationFilteredSlots(doctor.slots).length === 0 ? `opacity-40` : `` }>
                    <CardHeader>
                        <CardTitle className="text-lg">
                            <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage className="object-cover" src={ `img/${ doctor.image }` }/>
                                    <AvatarFallback>{ doctor.name[0] }</AvatarFallback>
                                </Avatar>
                                <div>
                                    { doctor.name }
                                    <div className="-mt-0.5 text-sm font-normal tracking-normal text-muted-foreground">
                                        { doctor.description }
                                    </div>
                                </div>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-2">
                            <MapPin size={ 16 } className="text-slate-400"/>
                            AZ Sint Lucas, Straat 24
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={ 16 } className="text-slate-400"/>
                            Woensdag 12 december 09:30
                        </div>
                        <div className="mt-4 flex gap-1">
                            { doctor.slots.length > 0 && locationFilteredSlots(doctor.slots).map((slot: any) => (
                                <Button size="xs" key={ slot.name }>{ slot.name }</Button>
                            )).splice(0, 2) }
                            { locationFilteredSlots(doctor.slots).length >= 2 &&
                                <Button size="xs" variant="outline">Bekijk alle</Button>
                            }
                        </div>
                    </CardContent>
                </Card>
            )) }
        </div>
    );
};

export default SearchResults;
