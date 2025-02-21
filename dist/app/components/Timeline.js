import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Timeline = ({ capsules }) => {
    // Trie les capsules par date croissante
    const sortedCapsules = [...capsules].sort((a, b) => new Date(b.scheduledDate).getTime() - new Date(a.scheduledDate).getTime());
    return (_jsx("div", { children: _jsx("ul", { style: { listStyle: "none", paddingLeft: 0 }, children: sortedCapsules.map((capsule) => (_jsx("li", { style: { marginBottom: "20px", position: "relative" }, children: _jsxs("div", { style: { borderLeft: "2px solid #333", paddingLeft: "15px" }, children: [_jsx("h4", { children: capsule.title }), _jsx("p", { children: new Date(capsule.scheduledDate).toLocaleString() })] }) }, capsule.id))) }) }));
};
export default Timeline;
