import React from "react";
import MonthCard from "../MonthCard/MonthCard";

interface Props {}

const months = [
  "1 - Atlcahualo",
  "2 - Tlacaxipe-hualiztli",
  "3 - Tozoztontli",
  "4 - Huey tozoztli",
  "5 - Tóxcatl",
  "6 - Etzalcualiztli",
  "7 - Tecuilhuitontli",
  "8 - Huey tecuílhuitl",
  "9 - Tlaxochimaco-miccailhuitontli",
  "10 - Xocotlhuetzi-huey miccaílhuitl",
  "11 - Ochpaniztli",
  "12 - Teotleco",
  "13 - Tepeilhuitl",
  "14 - Quecholli",
  "15 - Panque-tzaliztli",
  "16 - Atemoztli",
];

const Calendar = (props: Props) => {
  return (
    <div className="flex flex-wrap w-full h-20 bg-mexicanGreen-dark justify-between items-center px-1 rounded-xl mb-1">
      {months.map((month: string, index) => {
        return (
          <MonthCard
            key={index}
            isCurrentMonth={month === months[0]}
            text={month}
          />
        );
      })}
    </div>
  );
};

export default Calendar;
