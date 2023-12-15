import { Button } from "@/components/ui/button"
import { Stethoscope } from "lucide-react"

export default function Filter({ doctors }: { doctors: Array<any> }) {
    return (
        <div className="flex gap-1">
            <Button variant="outline">
                Toon Alle{ " " }
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
        </div>
    );
}
