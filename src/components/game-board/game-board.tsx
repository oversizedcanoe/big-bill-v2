import { Card } from "components/card/card";
import { Card as CardEntity, CardValue, Suit, Deck, Joker } from '../../shared/index'

export function GameBoard() {
    let deck = new Deck({ jokersIncluded: false, shuffled: true });

    let cards = [];

    for (let index = 0; index < 12; index++) {
        const element = deck.drawCardFromTop();
        if (element != null){
            console.log("pushing " + element.shorthandName());
            cards.push(
                <Card value={element.shorthandName()} deckRef={deck} />
            )
        }
    }

    return (
        <div className="row justify-content-around mx-auto p-3" style={{width:'80%', backgroundColor: 'red', border: '10px solid brown', borderRadius: '1rem'}}>
            {cards}
        </div>
    )
}