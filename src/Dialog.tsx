import type { ReactElement } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function Dialog({ slot, button }: { slot: any, button: ReactElement }) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                { button }
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{ slot.name }</AlertDialogTitle>
                    <AlertDialogDescription>
                        Dit is een demo versie. Op de volledige website, ga je hier een integratie van ons, of een ander kalender systeem zien, en wordt de afspraak onmiddellijk ingeboekt bij bevestiging hieronder
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Annuleren</AlertDialogCancel>
                    <AlertDialogAction>Bevestig boeking in kalender</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
