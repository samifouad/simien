import { Input } from "@/components/ui/input"

export function Header () {

    return (
        <header className="bg-card py-4">
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">simien</h1>
            <div className="relative flex-1 max-w-md">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <SearchIcon className="w-5 h-5 text-muted-foreground" />
                </div>
                <Input
                type="search"
                placeholder="search"
                className="pl-10 w-full rounded-md bg-muted focus:ring-primary focus:border-primary"
                />
            </div>
            </div>
        </header>
    )
}

function SearchIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }