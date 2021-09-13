type PersonProps = {
    name: {
        firstName: string,
        LastName: string
    }
}
const Person = (props: PersonProps) => {
    return (
        <div>
            {props.name.firstName} {props.name.LastName}
        </div>
    )
}

export default Person
