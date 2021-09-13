import Person from "./Person"
import {Name} from "./Person.types"
type PersonListProps = {
    nameList: Name[]
}
const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {
                props.nameList.map((name,i) => <Person name={name} key={i}/>)
            }
        </div>
    )
}

export default PersonList
