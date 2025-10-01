import React from "react";
import creative from "./../assets/images/creative.png";
const CardWithAvatar = () => {
  return (
    <div className="flex flex-col items-center justify-center text-pink-900">
      <div className="avatar -mb-8 z-10">
        <img
          className="w-30 h-30 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-lg"
          src={creative}
          alt="Graduation Picture"
        />
      </div>

      <div class="block max-w-sm p-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg  text-center">
        <h5 class="font-derian mb-2 text-4xl font-bold tracking-tight text mt-4">
          SHiN iTONG LiM
        </h5>
        <p class="font-quadria text-sm mb-4 ">
          <span>Computer Engineer</span>
          <br />
          <span>Antipolo City, Rizal</span>
          <br />
          <span>shinaylim@gmail.com</span>
        </p>
        <div className="soc-meds">
          <a
            href="https://github.com/ShinayLim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              class="bg-pink-400 text-white font-medium rounded-full text-sm p-2 inline-flex items-center transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            >
              <svg
                class="w-6 h-6 text-pink-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="dark-gray"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/shinaylim000/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              class="bg-pink-400 ml-1 text-white font-medium rounded-full text-sm p-2 inline-flex items-center transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0288D1"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                ></path>
                <path
                  fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                ></path>
              </svg>
            </button>
          </a>

          <a
            href="mailto:shinaylim@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              class="bg-pink-400 ml-1 text-white font-medium rounded-full text-sm p-2 inline-flex items-center transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#4caf50"
                  d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                ></path>
                <path
                  fill="#1e88e5"
                  d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                ></path>
                <polygon
                  fill="#e53935"
                  points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                ></polygon>
                <path
                  fill="#c62828"
                  d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                ></path>
                <path
                  fill="#fbc02d"
                  d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                ></path>
              </svg>
            </button>
          </a>
          <a
            href="https://t.me/sheenayleem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              class="bg-pink-400 ml-1 text-white font-medium rounded-full text-sm p-2 inline-flex items-center transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#29b6f6"
                  d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                ></path>
                <path
                  fill="#fff"
                  d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
                ></path>
                <path
                  fill="#b0bec5"
                  d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
                ></path>
                <path
                  fill="#cfd8dc"
                  d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
                ></path>
              </svg>
            </button>
          </a>
          <a
            href=" https://m.me/shinay.limmm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              class="bg-pink-400 ml-1 text-white font-medium rounded-full text-sm p-2 inline-flex items-center transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#448AFF"
                  d="M24,4C13.5,4,5,12.1,5,22c0,5.2,2.3,9.8,6,13.1V44l7.8-4.7c1.6,0.4,3.4,0.7,5.2,0.7c10.5,0,19-8.1,19-18C43,12.1,34.5,4,24,4z"
                ></path>
                <path
                  fill="#FFF"
                  d="M12 28L22 17 27 22 36 17 26 28 21 23z"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardWithAvatar;
