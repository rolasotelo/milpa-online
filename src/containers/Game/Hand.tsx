import React from "react";
import Card from "./Card";

function CardPlaceholder() {
    return (
        <div className="tablet:w-leaderboard-card-small tablet:h-leaderboard-card-small">
            {" "}
            1/16
        </div>
    );
}

export default function Hand() {
    return (
        <div className="fixed tablet:static right-0 top-20 flex flex-col-reverse tablet:flex-row justify-between items-center w-20 tablet:w-full p-1 tablet:p-3 bg-milpaPink-light h-mountains tablet:h-44">
            <Card color="green" />
            <Card color="green" />
            <Card color="green" />
            <Card color="green" />
            <Card color="pink" />
            <Card color="pink" />
            <Card color="pink" />
            <CardPlaceholder />
        </div>
    );
}