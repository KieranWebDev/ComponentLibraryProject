import './Banners.css';

import Banner from '../Banner/Banner';

function Banners() {
  return (
    <div className="banners-container">
      <h2>Banner</h2>
      <Banner
        status="success"
        title="Congratulations"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      ></Banner>
      <Banner
        status="warning"
        title="Attention"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
      ></Banner>
      <Banner
        status="error"
        title="There is a problem with your application"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
      ></Banner>
      <Banner
        status="neutral"
        title="Update available"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
      ></Banner>
      <Banner status="success" title="Congratulations"></Banner>
      <Banner status="warning" title="Attention"></Banner>
      <Banner
        status="error"
        title="There is a problem with your application"
      ></Banner>
      <Banner status="neutral" title="Update available"></Banner>
    </div>
  );
}

export default Banners;
