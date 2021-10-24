export const handlePlayerDisconnection = (
  setIsGameOngoing: (value: React.SetStateAction<boolean>) => void
) => {
  setIsGameOngoing(false);
};
