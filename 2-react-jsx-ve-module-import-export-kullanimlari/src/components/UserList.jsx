import Button from "./Button"
import {USERS} from "../data"

const ITEMS = [
    1, 2, 3
]

function UserList() {
    return (
    <>
        {/* <ul>
            <li>Lorem.</li>
            <li>Blanditiis.</li>
            <li>Magni!</li>
            <li>Ad.</li>
            <li>Odit?</li>
        </ul> */}
        <ul>
            {USERS.map((user, index) => <li key={index}>{user}</li>)}
        </ul>
        <hr />
        <Button farkli-bilgi="asdf..." />
        <hr />
    </>
    )
}

// Not: Bir Component Dosyasi Icinde Genellikle 1 Component Bekleriz. Ikincisini Baska dosyaya alirsak daha uygun olur.
function SingleUser() {
    return (
        <h3>SingleUser Component Icindeki Bilgi</h3>
    )
}

export {ITEMS, SingleUser} 
export default UserList