import {RoutePropsType} from "../Realms/Pure/types";
import CreateGameProvider from "../providers/CreateGameProvider";
import CreateOrJoinGame from "../containers/CreateGame";
import React from "react";


export default function CreateGamePage(routerProps: RoutePropsType){
    return (
        <CreateGameProvider routerProps={routerProps}>
            <CreateOrJoinGame />
        </CreateGameProvider>
    );
};