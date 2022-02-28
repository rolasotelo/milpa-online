import React, { createContext} from "react";
import {GameRoutePropsType} from "../../Realms/Pure/types";

export type GameContextType = {
    nickname: string | undefined;
};

export const GameContext = createContext<GameContextType>(null!);

interface Props {
    children: JSX.Element;
    routerProps: GameRoutePropsType;
}

export const GameProvider = (props: Props) => {
    let nickname: string | undefined = undefined;

    return (
        <GameContext.Provider value={{ nickname }}>
            {props.children}
        </GameContext.Provider>
    );
};