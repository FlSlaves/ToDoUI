interface ErrorMessageProps {
    error: string
}
export function ErrorMessage({error}: ErrorMessageProps)
{
    return(
        <p className={"text-center text-red-600 text-lg"}>{error}</p>
    )
}