import React from 'react';

const getViewBox = (name) => {
  switch (name) {
    case 'burger':
      return '0 0 357 293';
    case 'logo-header':
      return '0 0 1391 502';
    case 'logo-header-mobile':
      return '0 0 96 89';
    case 'magnet':
      return '0 0 130 130';
    case 'github':
      return '0 0 92 92';
    default:
      return '0 0 32 32';
  }
};

/* eslint-disable max-len */
const getPath = (name) => {
  switch (name) {
    case 'burger':
      return (
        <path
          d="M330.500,173.000 L26.500,173.000 C11.864,173.000 -0.000,161.136 -0.000,146.500 C-0.000,131.864 11.864,120.000 26.500,120.000 L330.500,120.000 C345.136,120.000 357.000,131.864 357.000,146.500 C357.000,161.136 345.136,173.000 330.500,173.000 ZM330.500,53.000 L26.500,53.000 C11.864,53.000 -0.000,41.136 -0.000,26.500 C-0.000,11.864 11.864,0.000 26.500,0.000 L330.500,0.000 C345.136,0.000 357.000,11.864 357.000,26.500 C357.000,41.136 345.136,53.000 330.500,53.000 ZM26.500,240.000 L330.500,240.000 C345.136,240.000 357.000,251.864 357.000,266.500 C357.000,281.136 345.136,293.000 330.500,293.000 L26.500,293.000 C11.864,293.000 -0.000,281.136 -0.000,266.500 C-0.000,251.864 11.864,240.000 26.500,240.000 Z"
        />
      );
    case 'logo-header':
      return (
        <path
          d="M0.000,0.500 L1390.500,0.500 L1390.500,501.500 L0.000,501.500 L0.000,0.500 ZM1.000,388.016 C1.000,397.034 11.558,398.994 27.983,398.994 C44.800,398.994 54.967,397.034 54.967,387.624 L54.967,271.956 L167.596,271.956 L167.596,388.016 C167.596,397.034 178.155,398.994 194.580,398.994 C211.396,398.994 221.564,397.034 221.564,387.624 L221.564,106.492 L167.596,106.492 L167.596,224.120 L54.967,224.120 L54.967,106.492 L1.000,106.492 M1381.000,106.884 L1327.032,106.884 L1277.366,130.409 L1277.366,179.030 L1327.032,155.896 L1327.032,388.016 C1327.032,397.034 1337.591,398.994 1354.016,398.994 C1370.833,398.994 1381.000,397.034 1381.000,387.624 M374.653,217.398 C340.040,160.625 278.676,128.263 265.500,136.414 C252.324,144.565 262.960,222.238 296.107,275.226 C296.920,276.526 297.800,277.684 298.654,278.899 C274.097,315.511 267.237,357.330 275.057,364.517 C284.077,372.808 339.703,347.232 371.883,309.903 C373.063,308.535 374.114,307.144 375.133,305.750 C375.381,305.624 375.673,305.519 375.911,305.387 C389.768,297.726 398.985,257.306 374.653,217.398 ZM515.097,135.598 C501.928,127.419 440.596,159.896 406.001,216.871 C383.893,253.278 389.518,290.023 401.124,302.197 C402.730,304.730 404.496,307.244 406.608,309.703 C438.772,347.165 494.367,372.832 503.384,364.512 C511.086,357.404 504.536,316.542 480.853,280.192 C482.102,278.495 483.340,276.775 484.507,274.904 C517.636,221.727 528.266,143.779 515.097,135.598 ZM677.297,106.492 L561.930,106.492 L561.930,388.016 C561.930,397.034 572.489,398.994 588.914,398.994 C605.730,398.994 615.898,397.034 615.898,387.624 L615.898,289.208 L678.861,289.208 C748.081,289.208 776.238,249.214 776.238,197.850 C776.238,145.309 748.081,106.492 677.297,106.492 ZM990.994,269.995 C1001.553,269.995 1003.117,261.369 1003.117,246.078 C1003.117,231.178 1001.553,222.160 990.994,222.160 L868.197,222.160 L868.197,154.327 L999.988,154.327 C1010.547,154.327 1012.112,145.701 1012.112,130.409 C1012.112,115.510 1010.547,106.492 999.988,106.492 L814.229,106.492 L814.229,346.846 C814.229,355.472 822.442,368.411 831.046,376.645 C840.040,385.272 854.118,395.466 864.286,395.466 L1002.726,395.466 C1013.285,395.466 1014.850,386.840 1014.850,371.548 C1014.850,356.648 1013.285,347.630 1002.726,347.630 L876.018,347.630 C871.326,347.630 868.197,346.061 868.197,340.572 L868.197,269.995 L990.994,269.995 ZM1163.904,303.716 C1188.541,275.485 1221.783,231.962 1221.783,193.145 C1221.783,130.409 1176.418,101.002 1125.188,101.002 C1100.550,101.002 1079.041,109.236 1063.007,115.118 L1063.007,163.345 C1086.472,155.503 1106.025,148.838 1125.188,148.838 C1150.607,148.838 1167.815,163.345 1167.815,192.752 C1167.815,226.865 1135.747,260.193 1112.673,285.679 L1052.057,353.119 L1052.057,395.466 L1216.308,395.466 C1226.866,395.466 1228.431,386.840 1228.431,371.548 C1228.431,356.648 1226.866,347.630 1216.308,347.630 L1124.797,347.630 L1163.904,303.716 ZM678.861,241.373 L615.898,241.373 L615.898,154.327 L677.688,154.327 C708.582,154.327 722.270,168.835 722.270,197.850 C722.270,226.865 708.973,241.373 678.861,241.373 Z"
        />
      );
    case 'logo-header-mobile':
      return (
        <path
          d="M44.099,35.928 C34.919,20.899 18.645,12.332 15.150,14.490 C11.656,16.648 14.477,37.209 23.268,51.236 C23.483,51.581 23.717,51.887 23.943,52.209 C17.430,61.901 15.611,72.971 17.685,74.874 C20.077,77.069 34.830,70.298 43.365,60.416 C43.678,60.054 43.956,59.686 44.227,59.317 C44.292,59.283 44.370,59.256 44.433,59.221 C48.108,57.193 50.553,46.493 44.099,35.928 ZM81.348,14.274 C77.855,12.109 61.589,20.706 52.413,35.789 C46.550,45.426 48.042,55.154 51.120,58.376 C51.546,59.047 52.014,59.712 52.574,60.363 C61.105,70.280 75.850,77.075 78.241,74.872 C80.284,72.991 78.547,62.174 72.265,52.551 C72.597,52.102 72.925,51.646 73.234,51.151 C82.021,37.074 84.840,16.440 81.348,14.274 ZM0.000,-0.000 L96.000,-0.000 L96.000,89.000 L0.000,89.000 L0.000,-0.000 Z"
        />
      );
    case 'magnet':
      return (
        <path
          d="m132.77 118.03l-27.945-27.945c6.735-9.722 10.1-20.559 10.1-32.508 0-7.767-1.508-15.195-4.523-22.283-3.01-7.089-7.088-13.199-12.221-18.332-5.133-5.133-11.242-9.207-18.33-12.221-7.09-3.01-14.518-4.522-22.285-4.522-7.767 0-15.195 1.507-22.283 4.522-7.089 3.01-13.199 7.088-18.332 12.221-5.133 5.133-9.207 11.244-12.221 18.332-3.01 7.089-4.522 14.516-4.522 22.283 0 7.767 1.507 15.193 4.522 22.283 3.01 7.088 7.088 13.197 12.221 18.33 5.133 5.134 11.244 9.207 18.332 12.222 7.089 3.02 14.516 4.522 22.283 4.522 11.951 0 22.787-3.369 32.509-10.1l27.945 27.863c1.955 2.064 4.397 3.096 7.332 3.096 2.824 0 5.27-1.032 7.332-3.096 2.064-2.063 3.096-4.508 3.096-7.332.0001-2.877-1-5.322-3.01-7.331m-49.41-34.668c-7.143 7.143-15.738 10.714-25.787 10.714-10.05 0-18.643-3.572-25.786-10.714-7.143-7.143-10.714-15.737-10.714-25.786 0-10.05 3.572-18.644 10.714-25.786 7.142-7.143 15.738-10.714 25.786-10.714 10.05 0 18.643 3.572 25.787 10.714 7.143 7.142 10.715 15.738 10.715 25.786 0 10.05-3.573 18.643-10.715 25.786"
        />
      );

    case 'github':
      return (
        <path
          d="M61.896,52.548c-3.59,0-6.502,4.026-6.502,8.996c0,4.971,2.912,8.999,6.502,8.999 c3.588,0,6.498-4.028,6.498-8.999C68.395,56.574,65.484,52.548,61.896,52.548z M84.527,29.132c0.74-1.826,0.777-12.201-3.17-22.132 c0,0-9.057,0.993-22.76,10.396c-2.872-0.793-7.736-1.19-12.597-1.19s-9.723,0.396-12.598,1.189C19.699,7.993,10.645,7,10.645,7 c-3.948,9.931-3.913,20.306-3.172,22.132C2.834,34.169,0,40.218,0,48.483c0,35.932,29.809,36.508,37.334,36.508 c1.703,0,5.088,0.004,8.666,0.009c3.578-0.005,6.965-0.009,8.666-0.009C62.191,84.991,92,84.415,92,48.483 C92,40.218,89.166,34.169,84.527,29.132z M46.141,80.574H45.86c-18.859,0-33.545-2.252-33.545-20.58 c0-4.389,1.549-8.465,5.229-11.847c6.141-5.636,16.527-2.651,28.316-2.651c0.045,0,0.093-0.001,0.141-0.003 c0.049,0.002,0.096,0.003,0.141,0.003c11.789,0,22.178-2.984,28.316,2.651c3.68,3.382,5.229,7.458,5.229,11.847 C79.686,78.322,65,80.574,46.141,80.574z M30.104,52.548c-3.588,0-6.498,4.026-6.498,8.996c0,4.971,2.91,8.999,6.498,8.999 c3.592,0,6.502-4.028,6.502-8.999C36.605,56.574,33.695,52.548,30.104,52.548z"
        />
      );
    default:
      return <path />;
  }
};
/* eslint-enable max-len */

const SVGIcon = ({
  name = '',
  className = '',
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox={getViewBox(name)}
  >
    {getPath(name)}
  </svg>
);

export default SVGIcon;
