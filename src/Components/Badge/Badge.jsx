import './Badge.css';

function getBorderRadius(badgeType) {
  return badgeType === 'pill' ? 'pill' : 'square';
}
function getBadgeColor(color) {
  const colors = [
    'gray',
    'red',
    'yellow',
    'green',
    'blue',
    'indigo',
    'purple',
    'pink',
  ];

  if (colors.includes(color)) {
    return color;
  } else {
    throw new Error(`Invalid color: ${color}`);
  }
}

function Badge({ color, badgeType = 'square', children, ...rest }) {
  let borderRadius = getBorderRadius(badgeType);
  let badgeColor = getBadgeColor(color);

  let badgeClasses = `badge ${borderRadius} ${badgeColor}`;

  return (
    <div className={badgeClasses} {...rest}>
      <span>{children}</span>
    </div>
  );
}

export default Badge;
