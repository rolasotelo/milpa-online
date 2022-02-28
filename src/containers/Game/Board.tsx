import React from "react";
import Slot from "./Slot";
function EdgeTopOrBottom() {
    return (
        <div className="col-start-2 col-span-4 flex flex-row justify-between">
            <Slot />
            <Slot />
            <Slot />
            <Slot />
        </div>
    );
}

function EdgeMilpaEdge() {
    return (
        <>
            <div className="col-start-1 col-end-2">
                <Slot />
            </div>
            <div className="col-start-2 col-end-6 flex flex-row justify-between">
                <Slot />
                <Slot />
                <Slot />
                <Slot />
            </div>
            <div className="col-end-7 col-span-1 ...">
                <Slot />
            </div>
        </>
    );
}
export default function Board() {
    return (
        <div className="h-milpa-board-mobile w-milpa-board-mobile tablet:h-milpa tablet:w-milpa bg-yellow-800 m-3 p-1 tablet:p-2">
            <div className="grid grid-cols-6 gap-2 tablet:gap-4 place-content-center h-full">
                <EdgeTopOrBottom />
                <EdgeMilpaEdge />
                <EdgeMilpaEdge />
                <EdgeMilpaEdge />
                <EdgeMilpaEdge />
                <EdgeTopOrBottom />
            </div>
        </div>
    );
}