// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import ReactPlayer from "react-player";
function App() {
  // const [videos, setVideos] = useState([
  //   'https://cdn.pixabay.com/video/2023/02/25/152203-802335648_large.mp4',
  //   'https://cdn.pixabay.com/video/2023/09/01/178732-860527368_large.mp4',
  //   'https://example.com/video3.mp4',

  // ]);

  // const [shuffleOrder, setShuffleOrder] = useState([]);

  // const shuffleArray = (array) => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   return array;
  // };

  // React.useEffect(() => {
  //   setShuffleOrder(shuffleArray(videos));
  // }, [videos]);
  {
    /* {shuffleOrder.map((videoUrl, index) => (
            <video
              key={index}
              src={videoUrl}
              autoplay
              loop
              muted
              class="object-cover w-full h-full"
            />
          ))} */
  }

  {
    /* 
          <ReactPlayer
            url={shuffleOrder[0]}
            autoplay={true}
            loop={true}
            muted={true}
            class="object-cover w-full h-full"
                        width="100%"
            height="100%"
          /> */
  }
  return (
    <div className="App">
      <div class="bg-gray-100 flex justify-center items-center h-screen">
        {/* <div class="w-1/2 h-screen hidden lg:block ">
        
        
          <video
            src="https://cdn.pixabay.com/video/2023/07/15/171679-845805108_large.mp4"
            autoplay="{true}"
            loop
            muted
            class="object-cover w-full h-full"
            
          ></video>

        </div> */}

        <div className="w-1/2 h-screen hidden lg:block relative">
          <video
            src="https://cdn.pixabay.com/video/2023/07/15/171679-845805108_large.mp4"
            autoPlay
            loop
            muted
            className="object-cover w-full h-full blur-sm"
          ></video>

          {/* Text overlay on video */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-7xl font-semibold  text-white opacity-100 -mt-40"  style={{
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)"
    }}>
            Discover Your Next Adventure
            </h1>
          </div>
        </div>

        <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <form class="max-w-md md:ml-auto w-full mr-20 ml-24">
            <h3 class="text-cyan-900  text-3xl font-medium mb-8">Log in</h3>

            <div class="space-y-4">
              <div>
                <input
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="bg-gray-300 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="bg-gray-300 w-full text-sm text-gray-800 px-4 py-3.5 rounded-md outline-blue-600 focus:bg-transparent"
                  placeholder="Password"
                />
              </div>
              <div class="flex flex-wrap items-center justify-between gap-4">
                <div class="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    for="remember-me"
                    class="ml-3 block text-sm text-gray-800"
                  >
                    Remember me
                  </label>
                </div>
                <div class="text-sm">
                  <a
                    href="jajvascript:void(0);"
                    class="text-blue-600 hover:text-blue-500 font-semibold"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
            </div>

            <div class="!mt-8">
              <button
                type="button"
                class="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Log in
              </button>
            </div>

            <div class="space-x-6 flex justify-center mt-8">
              <button type="button" class="border-none outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32px"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#fbbd00"
                    d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                    data-original="#fbbd00"
                  />
                  <path
                    fill="#0f9d58"
                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                    data-original="#0f9d58"
                  />
                  <path
                    fill="#31aa52"
                    d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                    data-original="#31aa52"
                  />
                  <path
                    fill="#3c79e6"
                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                    data-original="#3c79e6"
                  />
                  <path
                    fill="#cf2d48"
                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                    data-original="#cf2d48"
                  />
                  <path
                    fill="#eb4132"
                    d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                    data-original="#eb4132"
                  />
                </svg>
              </button>
              <button type="button" class="border-none outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32px"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#1877f2"
                    d="M512 256c0 127.78-93.62 233.69-216 252.89V330h59.65L367 256h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98H370v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6V256h-65v74h65v178.89C93.62 489.69 0 383.78 0 256 0 114.62 114.62 0 256 0s256 114.62 256 256z"
                    data-original="#1877f2"
                  />
                  <path
                    fill="#fff"
                    d="M355.65 330 367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111V330z"
                    data-original="#ffffff"
                  />
                </svg>
              </button>
              <button type="button" class="border-none outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32px"
                  viewBox="0 0 22.773 22.773"
                >
                  <path
                    d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
            </div>
          </form>

          <div class="mt-6 text-green-500 text-center ml-20">
            <a href="#" class="hover:underline">
              Sign up Here
            </a>
          </div>

          <div class="text-xs mt-6 line-height: 20 ml-20">
            <p
              href="jajvascript:void(0);"
              class="text-bg-cyan-900 hover:text-bg-cyan font-light"
            >
              By signing in or creating an account, you agree with our<br></br>
              <a href="#" class="text-blue-400 hover:text-blue-500">
                Terms & conditions
              </a>{" "}
              and{" "}
              <a href="#" class="text-blue-400 hover:text-blue-500">
                Privacy statement
              </a>{" "}
              <br></br>All rights reserved. Copyright 2024 <br></br>
              <br></br>Axonall.com™
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
