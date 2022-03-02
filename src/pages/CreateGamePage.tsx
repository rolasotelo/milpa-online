import React from "react";
import CreateGameProvider from "../providers/CreateGameProvider";
import CreateOrJoinGame from "../containers/CreateGame";

export default function CreateGamePage() {
  return (
    <CreateGameProvider>
      <CreateOrJoinGame />
    </CreateGameProvider>
  );
}
