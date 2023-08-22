import './Badge.css';

function Badge({ color = 'blue', badgeType = 'square', children }) {
  let borderRadius = badgeType === 'pill' ? 'pill' : 'square';

  let badgeColor = '';

  if (
    color !== 'gray' ||
    color !== 'red' ||
    color !== 'yellow' ||
    color !== 'green' ||
    color !== 'indigo' ||
    color !== 'purple' ||
    color !== 'pink'
  ) {
    badgeColor = 'blue';
  }

  let badgeClasses = ` badge ${borderRadius} ${badgeColor}  `;

  return (
    <div className={badgeClasses}>
      <h3>{children}</h3>
    </div>
  );
}

export default Badge;
