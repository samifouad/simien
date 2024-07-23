import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface Package {
    name: string;
    manager: string;
    description: string;
    version: string;
    downloads: string;
    dependencies: number;
}

export function PkgCard ({name, manager, description, version, downloads, dependencies}: Package) {

    return (
        <Card className="bg-slate-50 shadow-sm hover:shadow-md transition-shadow pt-2">
            <Link href="#" className="block" prefetch={false}>
            <CardContent>
                <div className="flex items-left mb-2">
                    <Badge variant="secondary" className="bg-slate-200 text-xs mr-3">
                        {manager}
                    </Badge>
                    <div className="text-lg font-semibold mr-3">{name}</div>
                    <div className="text-xs leading-7 text-slate-500">v<strong>{version}</strong></div>
                </div>
                <p className="text-black text-sm line-clamp-2">{description}</p>
                <div className="flex items-center justify-between mt-4">
                <div className="text-muted-foreground text-sm">{downloads} downloads</div>
                <div className="text-muted-foreground text-sm">{dependencies} dependencies</div>
                </div>
            </CardContent>
            </Link>
        </Card>
    )
}