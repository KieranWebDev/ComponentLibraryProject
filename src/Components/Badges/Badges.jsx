import './Badges.css';
import Badge from '../Badge/Badge.jsx';

function Badges() {
  return (
    <>
      <h2>Badges</h2>
      <div className="badgeContainer">
        <Badge color="gray" badgeType="square">
          Badge
        </Badge>
        <Badge color="red" badgeType="square">
          Badge
        </Badge>
        <Badge color="yellow" badgeType="square">
          Badge
        </Badge>
        <Badge color="green" badgeType="square">
          Badge
        </Badge>
        <Badge color="blue" badgeType="square">
          Badge
        </Badge>
        <Badge color="indigo" badgeType="square">
          Badge
        </Badge>
        <Badge color="gray" badgeType="pill">
          Badge
        </Badge>
        <Badge color="red" badgeType="pill">
          Badge
        </Badge>
        <Badge color="yellow" badgeType="pill">
          Badge
        </Badge>
        <Badge color="green" badgeType="pill">
          Badge
        </Badge>
        <Badge color="blue" badgeType="pill">
          Badge
        </Badge>
        <Badge color="indigo" badgeType="pill">
          Badge
        </Badge>
      </div>
    </>
  );
}

export default Badges;
