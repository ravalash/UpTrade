import React from "react";

function Help() {
    return (
        <div>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">What is UpTrade?</h5>
                            <hr />
                            <p className="faq-card"> UpTrade is a game-key trading website that lets you save game keys, make trades, and play the games you want to play.
                            Ever gotten a bundle of games on sale? It's exciting! But oh, wait, a few of these games you already have or some just aren't for you. Or, hey, maybe
                            a well-intentioned friend or family member got you a key for a game you already have or just are not gonna be too into!
                            Well, like a kid after Halloween wheeling-and-dealing the Milkways they don't want for the Twix bars they crave, you can trade some of those
                            extra game keys you either don't want or don't need with UpTrade.
                        </p>
                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">How does it work?</h5>
                            <hr />
                            <p className="faq-card"> There's a few simple steps to take your unwanted game and trade it for one you'll love. First, you add your game to your inventory
                            under the My Inventory page. Make sure you have your game key ready! Once your game is in your inventory, you have two options to trade.
                        </p>
                            <h4 className="faq-card">Option 1: Make a Listing</h4>
                            <p className="faq-card"> By making a listing, you put up what game you want to trade with a couple of other games you'd prefer to get in exchange.
                            Other users will see your item along with your preferences. Users can choose to offer any game in their inventory, but will be encouraged to trade
                            for one on your list. Once they do, you will be notified of new offers on your dashboard to review. You get the final say on which offer you take.
                        Once you accept an offer, the game will pop up in your inventory, along with the game key. Enjoy! </p>
                            <h4 className="faq-card">Option 2: Make an Offer</h4>
                            <p className="faq-card"> Let's say you've got a bunch of games in your inventory, but don't know what games you're really looking for. In this case,
                            you can browse through the Listings page to check out what people have put up for trade. If you see a game you'd like, its time to make an offer.
                            UpTrade will show what games they're looking for and tell you if any of your games match. No matches? Not a problem! Make an offer anyway, and try to
                            take into account what kind of games they're looking for. If they accept your offer, your new game will be ready to go in your inventory. Woohoo! </p>
                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">What platforms are supported?</h5>
                            <hr />
                            <p className="faq-card"> Currently, UpTrade supports games on PlayStation 4, Xbox One, Nintendo Switch, and PC games distributed on Epic Games, Origin and Steam
                        </p>
                        </div>
                    </div>
                    <br></br>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Can I trade a key for money?</h5>
                            <hr />
                            <p className="faq-card">No. Why, you ask? Well, there are plenty of websites available to sell and buy games. UpTrade supports the old-school principle of trading games.
                            This let's you trade game for game without making any financial transactions. No credit card required. Simply game for game.</p>
                        </div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
            <br></br>
        </div>
    );
}

export default Help