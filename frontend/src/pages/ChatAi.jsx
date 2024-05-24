import React from "react";
import Chatbot from "../components/ChatBot";
const ChatAi = ({ setIsLoggedIn }) => {
  return (
    <section className="bg-cover bg-center py-4 md:py-40 bg-red-50">
      <div className="w-11/12 m-auto flex flex-wrap justify-center items-center gap-12  ">
        {/* Right-side */}
        <div className="w-[400px] flex flex-col  mx-8 gap-4">
          <h2 className="font-bold text-[20px] text-balance leading-[1.2] text-black flex flex-col">
            Get Assistance through our Ai assisted service
          </h2>
          {/* <p className="text-xl text-black text-lg my-4">
            Meet Dr Ai, Our virtual health chatbot who is eager and ready to
            help with your needs some of the Benefits you get include:
          </p> */}
          {/* <div>
            <ul class="flex flex-col gap-x-4 text-black gap-y-4">
              <li class="flex flex-row  items-center space-x-2 text-black">
                <i data-feather="check" class="text-green-500">
                  ✅
                </i>
                <span>
                  24/7 Availability:{" "}
                  <p>
                    We invest in the latest health technology to provide
                    round-the-clock support
                  </p>
                </span>
              </li>
              <li class="flex  items-center space-x-2 text-black">
                <i data-feather="check" class="text-green-500">
                  ✅
                </i>
                <span>
                  Immediate Responses:
                  <p>
                    Medi Ai offers quick responses to your queries, helping you
                    get instant information about symptoms, conditions, or
                    general health concerns
                  </p>
                </span>
              </li>
              <li class="flex  items-center space-x-2  text-black">
                <i data-feather="check" class="text-green-500">
                  ✅
                </i>
                <span>
                  Health Monitoring and Reminders:
                  <p>
                    Medi can assist in monitoring your health metrics and
                    providing timely reminders for medication, appointments, or
                    lifestyle changes
                  </p>
                </span>
              </li>
            </ul>
          </div> */}

          {/* <form class="max-w-md ">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-green-500 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-white dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-green-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-green-700 dark:border-green-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Chat with Medi..."
                required
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-gree-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-white-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form> */}
          <Chatbot setIsLoggedIn={setIsLoggedIn} />
        </div>
        {/* left-side */}
        <div className="img w-[500px]">
          <img src="/src/assets/Doctor3.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ChatAi;
