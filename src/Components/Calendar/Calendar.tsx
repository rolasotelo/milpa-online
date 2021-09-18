import React from "react";
import MonthCard from "../MonthCard/MonthCard";

interface Props {}

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const Calendar = (props: Props) => {
  return (
    <div className="flex w-full h-16 bg-mexicanGreen-dark">
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
