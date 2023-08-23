import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCode } from '@fortawesome/free-solid-svg-icons';
import Card from '../Card/Card';

// style={{color: '#fff'}} /
function CardContainer() {
  return (
    <div>
      <h1>yooo</h1>

      <Card
        icon={<FontAwesomeIcon icon={faCode} />}
        title="Easy Deployment"
        text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
      />
    </div>
  );
}

export default CardContainer;
