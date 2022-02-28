import React, { createContext} from "react";
import {GameRoutePropsType, ScoringHistory} from "../../Realms/Pure/types";

export type GameContextType = {
    nickname: string;
    history: readonly ScoringHistory[];
};

export const GameContext = createContext<GameContextType>(null!);

interface Props {
    children: JSX.Element;
    routerProps: GameRoutePropsType;
}

export const GameProvider = (props: Props) => {
    let nickname: string | undefined = 'Player 1';
    const history:readonly ScoringHistory[] =[]

    return (
        <GameContext.Provider value={{ nickname,  history}}>
            {props.children}
        </GameContext.Provider>
    );
};