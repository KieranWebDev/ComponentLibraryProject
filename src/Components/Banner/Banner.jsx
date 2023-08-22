import './Banner.css';
// icons
import NeutralIcon from '../../assets/Icon.svg';
import SuccessIcon from '../../assets/CheckCircle.svg';
import WarningIcon from '../../assets/Exclamation.svg';
import ErrorIcon from '../../assets/xCircle.svg';

function checkStatus(status) {
  let statusOptions = ['success', 'warning', 'error', 'neutral'];

  if (!statusOptions.includes(status)) {
    throw new Error(
      'you forgot to include the status prop, or may have misspelled it'
    );
  }
}

function getIcon(status) {
  if (status === 'neutral') {
    return NeutralIcon;
  } else if (status === 'success') {
    return SuccessIcon;
  } else if (status === 'warning') {
    return WarningIcon;
  } else if (status === 'error') {
    return ErrorIcon;
  }
}

function Banner({ status, title = 'add title prop', text, ...rest }) {
  checkStatus(status);

  let icon = getIcon(status);

  return (
    <>
      <div className={`banner ${status}`} {...rest}>
        <div>
          <img className="icon" src={icon} alt="icon" />
        </div>
        <div>
          <h4>{title}</h4>
          {text && <p>{text}</p>}
        </div>
      </div>
    </>
  );
}

export default Banner;
