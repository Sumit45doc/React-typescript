type MessageProps = {
    children: string
}
const Message = (props: MessageProps) => {
    return (
        <h1>
            {props.children}
        </h1>
    )
}

export default Message
