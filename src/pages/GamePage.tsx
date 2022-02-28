import {GameRoutePropsType} from "../Realms/Pure/types";
import {GameProvider} from "../providers/GameProvider";
import Game from "../containers/Game";
import React from "react";


export default function GamePage(routerProps: GameRoutePropsType) {
    return (
        <GameProvider routerProps={routerProps}>
            <Game />
        </GameProvider>
    );
};