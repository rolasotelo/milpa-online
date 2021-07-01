import { useContext } from "react";
import { JoinOrCreateGameContext } from "../../Components/CreateOrJoinGameProvider/CreateOrJoinGameProvider";

export default function useJoinOrCreateGameContext() {
  const context = useContext(JoinOrCreateGameContext);
  if (!context) {
    throw new Error(
      "useJoinOrCreateGameContext must be used within a JoinOrCreateGameProvider"
    );
  }
  return context;
}
