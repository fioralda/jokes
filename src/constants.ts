export const emailRegex = () =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;

export const formatTimestampToFormDate = (value: number): string => {
  const date = new Date(value);

  if (isNaN(Date.parse(date.toDateString()))) {
    return "";
  }

  const parts = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  console.log(parts);

  const year = parts.find((p) => p.type === "year")?.value;
  const month = parts.find((p) => p.type === "month")?.value;
  const day = parts.find((p) => p.type === "day")?.value;

  return `${year}-${month}-${day}`;
};

export const formatDateForTable = (value: number): string => {
  const date = new Date(value);

  if (isNaN(Date.parse(date.toDateString()))) {
    return "Invalid date";
  }

  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
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
