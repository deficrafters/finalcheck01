export const countdownTimer = (date, setState, setTimeRemaining) => {
  const targetDate = new Date(date);
  const interval = setInterval(() => {
    const now = new Date();
    const timeDifference = targetDate.getTime() - now.getTime();

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
      setState(false);
      setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      setState(true);
      setTimeRemaining({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  }, 1000);

  return () => clearInterval(interval);
};

export const formatWalletAddress = (address) =>
  address?.substring(0, 5) + "...." + address?.substring(address.length - 5);
