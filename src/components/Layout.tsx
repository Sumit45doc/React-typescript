type LayoutProps = {
    children: React.ReactNode,
    styles: React.CSSProperties
}
const Layout = (props: LayoutProps) => {
    return (
        <>
            <header style={props.styles}><h1>React - TypeScript</h1></header>
            <main>{props.children}</main>
            <footer> <h2>Footer</h2> </footer>
        </>
    )
}

export default Layout
