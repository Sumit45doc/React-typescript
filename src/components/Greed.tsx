type GreedProps = {
    language: string
    viewer: number
    logIn: boolean
}
export const Greed = (props: GreedProps) => {
    return (
        <div>
            <div>{props.language} TUT</div>
            {props.logIn ? <span>You  have {props.viewer} views in you video</span> : <span>Log in to your account</span> }
        </div>
    )
}
