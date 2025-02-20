// app/components/Timeline.tsx
import React from "react";

type Capsule = {
  id: number;
  title: string;
  scheduledDate: string;
};

type TimelineProps = {
  capsules: Capsule[];
};

const Timeline: React.FC<TimelineProps> = ({ capsules }) => {
  // Trie les capsules par date croissante
  const sortedCapsules = [...capsules].sort(
    (a, b) => new Date(b.scheduledDate).getTime() - new Date(a.scheduledDate).getTime()
  );

  return (
    <div>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {sortedCapsules.map((capsule) => (
          <li key={capsule.id} style={{ marginBottom: "20px", position: "relative" }}>
            <div style={{ borderLeft: "2px solid #333", paddingLeft: "15px" }}>
              <h4>{capsule.title}</h4>
              <p>{new Date(capsule.scheduledDate).toLocaleString()}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
