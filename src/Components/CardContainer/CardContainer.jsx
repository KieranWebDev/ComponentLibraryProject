import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGear } from '@fortawesome/free-solid-svg-icons';
// components
import Card from '../Card/Card';
// css
import './CardContainer.css';

// style={{color: '#fff'}} /
function CardContainer() {
  return (
    <>
      <h2>Cards</h2>
      <div className="card-container">
        <Card
          icon={<FontAwesomeIcon icon={faCode} />}
          title="Easy Deployment"
          text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
        />
        <Card
          icon={<FontAwesomeIcon icon={faGear} style={{ color: 'white' }} />}
          iconBgColor="red"
          title="cog in the wheel"
          text="you and me baby aint nothing but mammals"
        />
      </div>
    </>
  );
}

export default CardContainer;
