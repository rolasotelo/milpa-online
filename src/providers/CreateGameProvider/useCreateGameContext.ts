import { useContext } from "react";
import { CreateGameContext } from "./index";

export default function useCreateGameContext() {
  const context = useContext(CreateGameContext);
  if (!context) {
    throw new Error(
      "useCreateOrJoinGameContext must be used within a CreateorJoinGameProvider"
    );
  }
  return context;
}
