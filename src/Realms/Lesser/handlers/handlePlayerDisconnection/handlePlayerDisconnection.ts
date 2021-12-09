export const handlePlayerDisconnection = (
  setIsGameOngoing: (value: React.SetStateAction<boolean>) => void
): void  => {
  setIsGameOngoing(false);
};
