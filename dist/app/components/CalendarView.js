import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
export default function CalendarView({ capsules }) {
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
        .filter((day) => day !== null);
    // Calculer le jour de la semaine du 1er du mois en UTC
    const firstDayOfWeek = new Date(Date.UTC(year, month, 1)).getUTCDay();
    // Préparer les cellules du calendrier
    const calendarCells = [];
    for (let i = 0; i < firstDayOfWeek; i++) {
        calendarCells.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
        calendarCells.push(day);
    }
    return (_jsxs("div", { className: "p-4 bg-white rounded-3xl shadow-xl border-4 border-slate-300", children: [_jsxs("h3", { className: "text-xl font-semibold mb-2 text-center", children: [monthName, " ", year] }), _jsxs("div", { className: "grid grid-cols-7 gap-2 text-center", children: [["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayName) => (_jsx("div", { className: "font-bold", children: dayName }, dayName))), calendarCells.map((cell, index) => (_jsx("div", { className: "h-12 flex items-center justify-center border border-gray-200 rounded", children: cell ? (_jsxs("div", { className: `${cell === currentDay ? "bg-green-200 font-bold rounded-full px-1" : ""}`, children: [_jsx("span", { children: cell }), capsuleDays.includes(cell) && (_jsx("span", { className: "ml-1", title: "Capsule scheduled", children: "\uD83D\uDC8A" }))] })) : null }, index)))] })] }));
}
