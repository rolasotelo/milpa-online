export const handleOkStartGame = (
  setIsGameOngoing: (value: React.SetStateAction<boolean>) => void
): void  => {
  setIsGameOngoing(true);
};
