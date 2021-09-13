import Person from "./Person"

type PersonListProps = {
    nameList: {
        firstName: string,
        LastName: string
    }[]
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
