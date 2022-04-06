export default function handleRoomFilled(history: any, nickname: string): void {
  // TODO do proper workflow when room filled

  history.push("/play", { nickname });
}
