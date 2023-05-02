export function validateForm(event) {
  event.preventDefault();
  const { name, quotas, date, startTime, endTime } = Object.fromEntries(
    new FormData(event.target)
  );
  // Empty validation
  if (!name || !quotas || !date || !startTime || !endTime)
    return { status: true, message: "❌ No pueden quedar campos vacíos" };

  // quotas validation
  if (quotas <= 0)
    return { status: true, message: "❌ Los cupos deben ser superior a cero" };

  // weekdays validation
  // comparison of past dates
  const today = Date.now();
  const selectedDate = Date.parse(date);
  if (selectedDate < today)
    return {
      status: true,
      message: "❌ Solo puede seleccionar dias a partir de mañana",
    };

  //verification of buisiness days
  const dateStringToArray = date.split("-");
  const parsedDate = new Date(dateStringToArray);
  const weekDay = parsedDate.toUTCString().slice(0, 3);
  if (weekDay.includes("Sat") || weekDay.includes("Sun"))
    return {
      status: true,
      message: "❌ Solo se permiten días entre lunes y viernes",
    };

  // Time validation
  const [startHour, startMinutes] = startTime.split(":");

  if (startHour < 10)
    return {
      status: true,
      message: "❌ No puede crear capacitaciones antes de las 10am",
    };

  const [endHour, endMinutes] = endTime.split(":");

  if (endHour > 22 || (endHour == 22 && Number(endMinutes) > 0))
    return {
      status: true,
      message: "❌ No puede crear capacitaciones despues de las 10pm",
    };

  return { status: false, message: "✔️ Datos enviados correctamente" };
}
