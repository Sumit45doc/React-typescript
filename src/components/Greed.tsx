type GreedProps = {
    language: string    
    viewer?: number //optional use ?
    logIn: boolean
}
export const Greed = (props: GreedProps) => {
    const { viewer = 0 } = props;
    return (
        <div>
            <div>{props.language} TUT</div>
            {props.logIn ? <span>You  have {viewer} views in you video</span> : <span>Log in to your account</span>}
        </div>
    ) 
}