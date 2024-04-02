// https://legacy.reactjs.org/docs/conditional-rendering.html

import { USERS } from "../data"

function ConditionalRenderedUserList(props) {
    if (props.isActive === false) {
        // notActive -> false
        return <></>
    }

    if (props.isLoading) {
        return <div>Veriler Yukleniyor...</div>
    }

    return (
    <>
        <h2>Conditional Rendering User List</h2>
        <ul>
            {USERS.map((user, index) => <li key={index}>{user}</li>)}
        </ul>
    </>
    )
}

export default ConditionalRenderedUserList