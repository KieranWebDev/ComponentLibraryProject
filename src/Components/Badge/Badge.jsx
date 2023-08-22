import './Badge.css';

function Badge({ color = 'blue', badgeType = 'square', children, ...rest }) {
  console.log(color);
  let borderRadius = badgeType === 'pill' ? 'pill' : 'square';

  let badgeColor = '';

  if (
    color === 'gray' ||
    color === 'red' ||
    color === 'yellow' ||
    color === 'green' ||
    color === 'blue' ||
    color === 'indigo' ||
    color === 'purple' ||
    color === 'pink'
  ) {
    badgeColor = color;
  } else {
    badgeColor = 'blue';
  }

  let badgeClasses = `badge ${borderRadius} ${badgeColor}`;
  console.log(badgeClasses);

  return (
    <div className={badgeClasses} {...rest}>
      <span>{children}</span>
    </div>
  );
}

export default Badge;
