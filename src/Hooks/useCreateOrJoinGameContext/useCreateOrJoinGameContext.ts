import { useContext } from "react";
import { CreateOrJoinGameContext } from "../../Components/CreateOrJoinGameProvider/CreateOrJoinGameProvider";

export default function useCreateorJoinGameContext() {
  const context = useContext(CreateOrJoinGameContext);
  if (!context) {
    throw new Error(
      "useCreateOrJoinGameContext must be used within a CreateorJoinGameProvider"
    );
  }
  return context;
}
