import React from "react"
import './App.css'
import UserList, {SingleUser, ITEMS} from "./components/UserList"
import Button from "./components/Button"
import ImgThumbnail from "./components/ImgThumbnail"
import { IMAGES, INFO } from "./data"
import Card from "./components/Card"
import ConditionalRenderedUserList from "./components/ConditionalRenderedUserList"

function App() {
    // 1: return ederken HTML yapisi Return etmen gerekiyor.
    // 2: return ile sadece bir parent element gonderebilirsin..
    // 2.1: fragment kullanilabilir (<> ... </>)
    // return (
    // <React.Fragment>
    //     <div>Div icindeki Bilgi</div>
    //     <h1>Merhaba</h1>
    // </React.Fragment>
    // )
    // 3: {susluparantez ici javascript yapisi calistirmak icin kullanilir.}
    // 4: Bir etiketin muhakkak bitisi olmalidir (<etiket>...</etiket> -> <etiket />)
    // 5: class bilgisi className diye yazilmali...
    // 6: return icinde aciklama icin yine susluParantez kullanilmali {/* aciklama... */}
    // 7: style bilgisi {js icinde {obj olacak sekilde olmalidir}} -> {{backgroundColor: "yellow", listStyle: "none", margin: 0, padding: 0}}
    // 8: map kullanirken muhakkak key bilgisi gondermemiz gerekir
    // 9: React Componentlerinin Ilk Harfleri Her Zaman Buyuk Olmali... BirdenFazlaKelimeIseHerKelimeninIlkHarfiBuyukOlmali...

    const username = "Derya"
    const users = ["Lorem", "Ipsum", "Dolor"]

    const products = [
        {id: 1, name: "MacBook Pro 14", inStock: false},
        {id: 2, name: "MacBook Pro 13", inStock: true},
        {id: 3, name: "iPad", inStock: false},
        {id: 4, name: "Lenovo 14", inStock: true},
        {id: 5, name: "Dell XPS", inStock: true},
    ]

    const mapUsers = users.map((item, index) => <li key={index}>{item}</li>)

    const isActive = false

    const styles = {
        h2Style: {backgroundColor: "blue", fontSize: "24px"}
    }

    return (
    <>
        <div>Div icindeki bilgi</div>
        <h1 style={{backgroundColor: `${isActive ? "green" : "orange"}`}}>Merhaba (2 + 2 String Bilgi) {2 + 2} {username}</h1>
        <h2 style={styles.h2Style}>Kullanicilarin Sayisi: {users.length}</h2>
        <img src="https://picsum.photos/200/300" alt="" />
        <div className="bg-red">BG red eklendi</div>
        {/* Bu kullanim dogru degil */}
        <ul>
            <li>{users[0]}</li>
            <li>{users[1]}</li>
            <li>{users[2]}</li>
        </ul>
        {/* Dogru kullanim v1 */}
        <ul>
            {users.map((item, index) => <li key={index}>{item}</li>)}
        </ul>

        {/* Dogru kullanim v2 */}
        <ul style={{backgroundColor: "yellow", listStyle: "none", margin: 0, padding: 0}}>{mapUsers}</ul>

        <ul>
            {products
                .filter(item => item.inStock)
                .map(item => 
                    <li key={item.id}>{item.name.toUpperCase()}</li>
                )
            }
        </ul>
        {/* < ImgThumbnail /> */}
        <UserList />
        <SingleUser />
        {/* 10 Adet Single User Component Nasil Olusturulur? */}
        {[...Array(10)].map((item, index) => <SingleUser key={index} />)} {/* ONEMLİ !!!!!!!!!!!!!!!*/}
        {ITEMS.map((item, index) => <span key={index}>{item}</span> )}
        <hr />
            <span btn="info" data="1111">normal html conponent</span>
        <hr />
        <Button className="btn btn-primary" info="deneme" data-id="1" />
        <hr />
        <ImgThumbnail imgSrc="https://picsum.photos/600/250" />
        <hr />
            {
                IMAGES.map((item, index) => <ImgThumbnail imgSrc={item} key={index} imgAlt="" />)
            }
        <hr />
        
        <Card 
            title="Lorem Ipsum Dolor" 
            imgSrc="https://picsum.photos/id/11/400/250" 
            imgAlt="Card Alt Bilgisi - children yok"
        />

        <hr />
            {/* Not: Eger bir component icine bilgi etiket olarak gonderilirse aslinde props.children olarak kullaniliyor. Bu bilgiler react componenti icine children olarak gidiyor. */}
        <Card 
            title="Lorem Ipsum Dolor" 
            imgSrc="https://picsum.photos/400/250" 
            imgAlt="Card Alt Bilgisi"
            dataId="111"
        >
            <p>Lorem, ipsum dolor.</p>
            <p>Iste, iusto suscipit?</p>
            <p>Tempore, doloribus sapiente!</p>    
        </Card>
        <hr />
        <ConditionalRenderedUserList isActive={true} isLoading={true} />
        <h2>Optional Chaining</h2>
        {/* {
        INFO.productzzzzzzzzz.map(
            (product, index) => <li key={index}>{product}</li>
            )
        } */}
        {
        INFO.products?.map(
            (product, index) => <li key={index}>{product}</li>
            )
        }
        </>

    )
}

// // Yeni Component
// function ImgThumbnail() {
//     return <img src="https://picsum.photos/600/250" alt="" style={{padding: "4px", borderRadius: "8px", border: "1px solid #bdc3c7"}}/>
// }

export default App 