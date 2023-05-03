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
  const arrayStartTime = startTime.split(":");
  const startHour = Number(arrayStartTime[0]);
  const startMinutes = Number(arrayStartTime[1]);

  if (startHour < 10)
    return {
      status: true,
      message: "❌ No puede crear capacitaciones antes de las 10am",
    };

  const arrayEndTime = endTime.split(":");
  const endHour = Number(arrayEndTime[0]);
  const endMinutes = Number(arrayEndTime[1]);

  if (endHour > 22 || (endHour == 22 && endMinutes > 0))
    return {
      status: true,
      message: "❌ No puede crear capacitaciones despues de las 10pm",
    };

  if (
    endHour < startHour ||
    (endHour === startHour && startMinutes >= endMinutes)
  )
    return {
      status: true,
      message: "❌ La hora de fin no puede ser inferior que la hora de inicio",
    };

  if (startHour === endHour && endMinutes - startMinutes < 30)
    return {
      status: true,
      message: "❌ La duración mínima de las capacitaciones es de 30 minutos",
    };

  return { status: false, message: "✔️ Datos enviados correctamente" };
}
