import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons';

// css
import './Card.css';

function Card({
  icon = <FontAwesomeIcon icon={faMugSaucer} />,
  title = 'insert title',
  text = 'insert text',
  iconBgColor = '#3F75FE',
  ...rest
}) {
  return (
    <div className="card" {...rest}>
      <div className="icon-container" style={{ background: `${iconBgColor}` }}>
        {icon}
      </div>
      <div className="card-text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Card;
