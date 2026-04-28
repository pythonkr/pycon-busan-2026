import CommunityItem from "./CommunityItem";
import "./CommunityList.css";

function CommunityList({ communities }) {
  return (
    <div className="community-list">
      {communities.map((c) => (
        <CommunityItem key={c.id} community={c} />
      ))}
    </div>
  );
}

export default CommunityList;
