export default function handleConnectionError(err: Error): void {
  // TODO handle connection error
  if (err.message === "invalid nickname") {
    throw new Error("Invalid Nickname");
  }
}
