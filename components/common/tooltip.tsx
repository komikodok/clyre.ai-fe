import { 
    Tooltip as T,
    TooltipTrigger,
    TooltipContent,
} from "../ui/tooltip";


function Tooltip({
    content,
    className,
    children,
} : {
    content: string
    className?: string
    children: React.ReactNode
}) {
    return (
        <T>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent className={className}>
                {content}
            </TooltipContent>
        </T>
    )
}

export default Tooltip
