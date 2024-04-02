import { useState } from "react"

// useState => durum bilgisi ve durum bilgisini degistirecek fonksiyon

export default function Counter() {
    // let counter = 0

    const [counter, setCounter] = useState(0)

    function handleClick() {
        console.log("Handle Click Butonuna Tiklandi...")
        setCounter(counter + 1)
        console.log(counter)
    }

    return (
        <>
            <h2>Counter : {counter}</h2>
            <button onClick={() => console.log("Butona Tiklandi...")}>Counter Bilgisini Arttir...</button>
            <button onClick={handleClick}>Counter Bilgisini Arttir...</button>
            <button onClick={() => setCounter(counter + 1)}>Isimsiz Arrow Function ile Counter Bilgisini Arttir...</button>
        </>
    )
}