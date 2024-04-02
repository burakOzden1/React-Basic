// https://legacy.reactjs.org/docs/conditional-rendering.html
import { USERS } from "../data"

function ConditionalRenderedUserList(props) {
    if (!props.isActive) {
        // notActive -> false
        return null
    }
    return (
    <>
        <h2>Kullanıcı Listesi</h2>
        <ul>
            {USERS.map((user, index) => <li key={index}>{user}</li>)}
        </ul>
    </>
    )
}

export default ConditionalRenderedUserList