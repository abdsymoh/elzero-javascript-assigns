// assign 1
let day = "   Monday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
day = `${day.trim()[0].toUpperCase()}${day.trim().slice(1)}`;

switch (day) {
  // Output => "No Appointments Available"
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log(`Day is: ${day}`);
    console.log("No Appointments Available");
    break;
  // Output => "From 10:00 AM To 5:00 PM"
  case "Monday":
  case "Thursday":
    console.log(`Day is: ${day}`);
    console.log("From 10:00 AM To 5:00 PM");
    break;
  // Output => "From 10:00 AM To 7:00 PM"
  case "Wednesday":
    console.log(`Day is: ${day}`);
    console.log("From 10:00 AM To 7:00 PM");
    break;
  // Output => "From 10:00 AM To 6:00 PM"
  case "Tuesday":
    console.log(`Day is: ${day}`);
    console.log("From 10:00 AM To 6:00 PM");
    break;
  // Output => "Its Not A Valid Day"
  default:
    console.log(`Day is: ${day}`);
    console.log("Its Not A Valid Day");
    break;
}

console.log("=================================");
