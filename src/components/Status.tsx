import Message from "./message";

type StatusProps = {
    status: "loading" | "success" | "error" // props value can be only this values
}
const Status = (props: StatusProps) => {
    const { status } = props

    let message = "";
    if (status === "loading") {
        message = "Loading..."
    } else if (status === "success") {
        message = "Data fetch Successfully"
    } else if (status === "error") {
        message = "Error Fetching data"
    }

    return (
        <div>
            <Message>
                {message}
            </Message>
        </div>
    )
}

export default Status
