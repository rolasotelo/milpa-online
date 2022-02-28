import React from "react";

export default function Card(props: { color: string }) {
    const { color } = props;
    return (
        <div
            className={`w-16 h-16 bg-milpaPink-dark tablet:bg-transparent tablet:w-leaderboard-card-small tablet:h-leaderboard-card-small tablet:bg-card-${color}`}
        />
    );
}