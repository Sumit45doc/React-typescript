import { PersonProps } from "./Person.types";
const Person = (props: PersonProps) => {
    return (
        <div>
            {props.name.firstName} {props.name.LastName}
        </div>
    )
}

export default Person
