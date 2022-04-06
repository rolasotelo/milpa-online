import { useContext } from "react";
import { CreateGameContext } from "./index";

export default function useCreateGameContext() {
  const context = useContext(CreateGameContext);
  if (!context) {
    throw new Error(
      "useCreateGameContext must be used within a CreateGameProvider"
    );
  }
  return context;
}
