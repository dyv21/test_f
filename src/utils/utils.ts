export const dateFormatter = (date: string) => {
  const parsedDate = new Date(date);

  const day = parsedDate.getDate();
  const month = parsedDate.getMonth()
  const year = parsedDate.getFullYear();


  return `${day.toString().padStart(2, "0")}.${month.toString().padStart(2, "0")}.${year}`;
};