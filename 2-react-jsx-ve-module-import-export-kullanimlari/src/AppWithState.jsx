import Counter from "./components/Counter";
import ImgThumbnail from "./components/ImgThumbnail";
import MultipleImages from "./components/MultipleImages";
import CardWithState from "./components/CardWithState";

export default function AppWithState() {

    return (
        <>
            <h1>State Konusunu Burada Isliyoruz</h1>
            <Counter />
            <hr />
            <MultipleImages />
            <hr />
            <CardWithState />
            <CardWithState />
            <CardWithState />
            <CardWithState />
            <CardWithState />
        </>
    )
}