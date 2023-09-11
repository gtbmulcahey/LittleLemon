import './css/Specials.css';
import { SpecialCard } from "./SpecialCard";

export const  SpecialCards = () => {

    const dishes = [
        {
            id: 1,
            name: "Greek Salad",
            description: "Greek salad description. Greek salad description. Greek salad description. Greek salad description.",
            price: "$12.99",
            imageName: "greek salad.jpg",
            imageAlt: "greek salad"
        },
        {
            id: 2,
            name: "Bruchetta",
            description: "bruchetta description. bruchetta description. bruchetta description. bruchetta description.",
            price: "$10.99",
            imageName: "bruchetta.svg",
            imageAlt: "bruchetta"
        },
        {
            id: 3,
            name: "Lemon Cake",
            description: "Lemon Cake description. Lemon Cake description. Lemon Cake description. Lemon Cake description.",
            price: "$11.99",
            imageName: "lemon dessert.jpg",
            imageAlt: "lemon cake"
        }
]
    return (
        <>
        <h1>This Week's Specials</h1>
        <div className='specials'>
            <SpecialCard dish = {dishes[0]} />
            <SpecialCard dish = {dishes[1]} />
            <SpecialCard dish = {dishes[2]} />
        </div>
        </>
    )
}