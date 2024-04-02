// 1. Yontem:
// export default function Button(props) {
//     // props = object
//     console.log(props)
//     return <button className={props.className} data-id={props.dataId}>{props.dataId}</button>
// }


// 2. Yontem:
// export default function Button(props) {
//     // props ? object
//     const {className, dataId, info} = props
//     console.log(props)
//     return <button className={props.className} data-id={props.dataId}>{props.dataId}</button>
// }

// 3. Yontem:
export default function Button( {className, dataId, info} ) {
    return <button className={className} data-id={dataId}>{dataId}</button>
}

// export default Button