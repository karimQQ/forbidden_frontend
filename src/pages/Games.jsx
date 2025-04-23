import React from 'react';
import Navbar from "../components/Navbar/Navbar";

const Games = () => {
    return (
        <div>
            <Navbar/>
            <main>
                <p><a href="http://forbiddengdz.ru:8777/games/web/index.html">Online game</a></p>
                <p><a href="/games/mahjong/">Mahjong</a></p>
                <p><a href="/games/2048/">2048</a></p>
                <p><a href="/games/dog/game.html">Fat dog</a></p>
            </main>
        </div>
    );
};

export default Games;