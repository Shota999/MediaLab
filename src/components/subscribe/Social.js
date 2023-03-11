import { Link } from "react-router-dom";

const Social = ({ social }) => {
  return (
    <ul>
      <li>
        <Link to={social.facebook}>
          <svg
            data-v-17f2549f=""
            version="1.1"
            viewBox="0 0 512 512"
            className="svg-icon svg-fill"
          >
            <style type="text/css"></style>
            <path
              id="f_1_"
              className="st10"
              d="M292.5,491.7v-215h72.2l10.8-83.8h-83v-53.5c0-24.3,6.7-40.8,41.5-40.8l44.4,0v-75
                c-7.7-1-34-3.3-64.6-3.3C249.8,20.3,206,59.3,206,131v61.8h-72.4v83.8H206v215H292.5z"
            ></path>
          </svg>
        </Link>
      </li>
      <li>
        <Link to={social.instagram}>
          <svg
            data-v-17f2549f=""
            version="1.1"
            viewBox="0 0 512 512"
            className="svg-icon svg-fill"
          >
            <style type="text/css"></style>
            <path
              className="st10"
              d="M352,0H160C71.6,0,0,71.6,0,160v192c0,88.4,71.6,160,160,160h192c88.4,0,160-71.6,160-160V160
                C512,71.6,440.4,0,352,0z M464,352c0,61.8-50.2,112-112,112H160c-61.8,0-112-50.2-112-112V160C48,98.2,98.2,48,160,48h192
                c61.8,0,112,50.2,112,112V352z"
            ></path>
            <path
              className="st10"
              d="M256,128c-70.7,0-128,57.3-128,128s57.3,128,128,128s128-57.3,128-128S326.7,128,256,128z M256,336
                c-44.1,0-80-35.9-80-80c0-44.1,35.9-80,80-80s80,35.9,80,80C336,300.1,300.1,336,256,336z"
            ></path>
            <circle className="st10" cx="393.6" cy="118.4" r="17.1"></circle>
          </svg>
        </Link>
      </li>
      <li>
        <Link to={social.twitter}>
          <svg
            data-v-17f2549f=""
            version="1.1"
            viewBox="0 0 512 512"
            className="svg-icon svg-fill"
          >
            <style type="text/css"></style>
            <path
              className="st10"
              d="M498,96.5c-17.1,7.5-35.3,12.5-54.4,14.9c19.6-11.7,34.5-30,41.5-52.1c-18.2,10.9-38.4,18.5-59.8,22.8
                c-17.3-18.4-42-29.8-68.9-29.8c-52.2,0-94.3,42.4-94.3,94.4c0,7.5,0.6,14.7,2.2,21.5c-78.4-3.8-147.8-41.4-194.4-98.7
                C61.8,83.5,57,99.7,57,117.1c0,32.7,16.8,61.6,41.9,78.4c-15.2-0.3-30-4.7-42.6-11.6c0,0.3,0,0.7,0,1c0,45.8,32.7,83.9,75.6,92.7
                c-7.7,2.1-16,3.1-24.7,3.1c-6,0-12.1-0.3-17.9-1.6c12.2,37.4,46.9,64.8,88.1,65.7c-32.1,25.1-72.8,40.2-117,40.2
                c-7.7,0-15.2-0.3-22.6-1.3c41.8,26.9,91.3,42.3,144.7,42.3c173.6,0,268.5-143.8,268.5-268.4c0-4.2-0.1-8.2-0.3-12.2
                C469.5,132.2,485.2,115.6,498,96.5z"
            ></path>
          </svg>
        </Link>
      </li>
    </ul>
  );
};

export default Social;