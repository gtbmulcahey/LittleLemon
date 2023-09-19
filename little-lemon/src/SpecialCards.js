import './css/Specials.css';
import { SpecialCard } from "./SpecialCard";
import GreekSalad from './images/greek salad.jpg';
import Bruschetta from './images/bruchetta.svg';
import LemonDessert from './images/lemon dessert.jpg';

export const  SpecialCards = () => {

    const dishes = [
        {
            id: 1,
            name: "Greek Salad",
            description: "Greek salad description. Greek salad description. Greek salad description. Greek salad description.",
            price: "$12.99",
            imageImported: GreekSalad,
            imageAlt: "greek salad"
        },
        {
            id: 2,
            name: "Bruchetta",
            description: "bruchetta description. bruchetta description. bruchetta description. bruchetta description.",
            price: "$10.99",
            imageImported: Bruschetta,
            imageAlt: "bruchetta"
        },
        {
            id: 3,
            name: "Lemon Cake",
            description: "Lemon Cake description. Lemon Cake description. Lemon Cake description. Lemon Cake description.",
            price: "$11.99",
            imageImported: LemonDessert,
            imageAlt: "lemon cake"
        }
]
    return (
        <>
            <h1>This Week's Specials</h1>
            <div className='specials'>
                <SpecialCard dish = {dishes[0]}/>
                <SpecialCard dish = {dishes[1]} />
                <SpecialCard dish = {dishes[2]} />
            </div>
        </>
    )
}