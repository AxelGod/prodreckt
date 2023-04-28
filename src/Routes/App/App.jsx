import { useState } from "react";
import "./App.css";
function delay(n) {
  return new Promise(function (resolve) {
    setTimeout(resolve, n * 1000);
  });
}
function App() {
  const [loading, setLoading] = useState(false);
  const [Fetc, setfetc] = useState();
  const fet = async () => {
    setLoading(true); // Establece loading en true antes de realizar la petición fetch
    console.log()
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body:
      '{"name":"'+document.getElementById('uno').value+'","email":"'+document.getElementById('dos').value+'","passw":"'+document.getElementById('tres').value+'"}',
    };

    fetch("https://afasdasds24.onrender.com/register", options)
      .then((response) => response.json())
      .then((response) => {
        setfetc(response);
        setLoading(false);
        document.getElementById("input");
      })
      .catch(async (error) => {
        console.error(error);
        setLoading(false);
        setfetc("hay problemas en la conexion...");

        await delay(5);
        await fet();
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fet();
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 rounded-2xl mx-5 align-middle my-7">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Prodspro
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="bg-white border-gray-200 dark:bg-neutral-700 inline-block w-3/12 h-64">
        <form className="items-center snap-center text-center center" onSubmit={handleSubmit}>
          <label>
            <span className="">name</span>
            <br />
            <input type="name" className="text-lg px-3 py-1 rounded-md" id="uno" />
          </label>
          <br />
          <label>
            email
            <br />
            <input type="email" className="text-lg px-3 py-1 rounded-md" id="dos" />
          </label>
          <br />
          <label>
            pass
            <br />
            <input type="password" className="text-lg px-3 py-1 rounded-md" id="tres" />
          </label>
          <br />
          <button
            className="bg-zinc-900 p-1 pl-4 pr-4 rounded-lg text-md"
            disabled={loading}
            id="input"
          >
            loco
          </button>
          <br />
            <p className="inline-block p-1 max-w-5xl ">{loading ? "..." : Fetc ? Fetc : "output:"}</p>
          
        </form>
      </div>
    </>
  );
}

export default App;
