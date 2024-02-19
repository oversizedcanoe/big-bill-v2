import { Deck } from "shared"
import cardPNGs from "../../storage/cards"
import { useState } from "react"

interface CardProps {
    value: string
    deckRef: Deck
}

export function Card({ value, deckRef }: CardProps) {
    const [cardValue, setCardValue] = useState(value);
    const [faceDown, setFaceDown] = useState(false);

    function onClick() {
        if (faceDown) {
            setFaceDown(false);
            setCardValue(value);
        } else {
            setFaceDown(true);
            setCardValue('R1');
        }
    }


    return (
        <div className="col-lg-2 my-2" onClick={onClick}>
            <img src={cardPNGs[cardValue]} alt="..." style={{ width: "100%" }} />
        </div>
    )
}