import './Banners.css';

import Banner from '../Banner/Banner';

function Banners() {
  return (
    <div className="banners-container">
      <h2>Banner</h2>
      <Banner
        status="success"
        title="testin yo"
        text="lorem ipsum to the maxxxxxxxxxxxxxx"
      ></Banner>
      <Banner
        status="warning"
        title="testin yo"
        text="lorem ipsum to the maxxxxxxxxxxxxxx"
      ></Banner>
      <Banner
        status="error"
        title="testin yo"
        text="lorem ipsum to the maxxxxxxxxxxxxxx"
      ></Banner>
      <Banner
        status="neutral"
        title="testin yo"
        text="lorem ipsum to the maxxxxxxxxxxxxxx"
      ></Banner>
      <Banner status="neutral" title="testin yo"></Banner>
    </div>
  );
}

export default Banners;
