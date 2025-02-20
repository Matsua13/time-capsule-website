// app/components/CalendarView.tsx
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

interface Capsule {
  id: number;
  scheduledDate: string;
}

interface CalendarViewProps {
  capsules: Capsule[];
}

export default function CalendarView({ capsules }: CalendarViewProps) {
  // Utilisation du temps UTC pour garantir un rendu stable
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = now.getUTCMonth(); // 0-indexé
  const currentDay = now.getUTCDate();
  const monthName = now.toLocaleString("default", { month: "long" });

  // Nombre de jours dans le mois courant
  const daysInMonth = new Date(year, month + 1, 0).getUTCDate();

  // Récupérer les jours où des capsules sont programmées en forçant l’UTC
  const capsuleDays = capsules
    .map((capsule) => {
      const date = new Date(capsule.scheduledDate);
      if (date.getUTCFullYear() === year && date.getUTCMonth() === month) {
        return date.getUTCDate();
      }
      return null;
    })
    .filter((day): day is number => day !== null);

  // Calculer le jour de la semaine du 1er du mois en UTC
  const firstDayOfWeek = new Date(Date.UTC(year, month, 1)).getUTCDay();

  // Préparer les cellules du calendrier
  const calendarCells: (number | null)[] = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarCells.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarCells.push(day);
  }

  return (
    <div className="p-4 bg-white rounded-3xl shadow-xl border-4 border-slate-300">
      <h3 className="text-xl font-semibold mb-2 text-center">
        {monthName} {year}
      </h3>
      <div className="grid grid-cols-7 gap-2 text-center">
        {/* En-tête des jours de la semaine */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayName) => (
          <div key={dayName} className="font-bold">
            {dayName}
          </div>
        ))}
        {calendarCells.map((cell, index) => (
          <div
            key={index}
            className="h-12 flex items-center justify-center border border-gray-200 rounded"
          >
            {cell ? (
              <div className={`${cell === currentDay ? "bg-green-200 font-bold rounded-full px-1" : ""}`}>
                <span>{cell}</span>
                {capsuleDays.includes(cell) && (
                  <span className="ml-1" title="Capsule scheduled">
                    💊
                  </span>
                )}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
