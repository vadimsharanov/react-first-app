function Component(props) {
    return (
        <div>
        <h1>This is a big text. {props.name} and {props.lastName} ...... {props.per}</h1>
        <small>this is a small text.</small>
        <small>{5+9}</small>
        <div>
            <h2>Hello, my name is Noname and my lastname is NoLastName</h2>
        </div>
    </div>
)
}

export default Component