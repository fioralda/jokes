export const emailRegex = () =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;

export const formatTimestampToFormDate = (value: number) => {
  const d = new Date(value);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();
  return `${year}-${month < 10 ? `0${month}` : month}-${
    date < 10 ? `0${date}` : date
  }`;
};

export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDateForTable = (date: number): string => {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  return `${day} ${MONTHS[month]} ${year}`;
};

export const formatEmailForTable = (email: string): string => {
  const match = emailRegex().test(email);
  if (!match) {
    return "Invalid email";
  }
  const parts = email.split("@");
  const suffix = parts[1].split(".").slice(1).join(".");
  return `${parts[0]}@\*\*\*.${suffix}`;
};
