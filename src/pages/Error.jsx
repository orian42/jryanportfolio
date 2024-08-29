import { useRouteError } from "react-router-dom";

export default function errorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>OH NO!!!!</h1>
            <p>An error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}