import NavBar from "../../components/NavBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function SignUp() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    await axios
      .post("http://localhost:3000/api/auth/register", { ...data })
      .then((res) => {
        if (res.status === 201) {
          navigate("/dashboard");
          localStorage.setItem("token", res.data.token);
        }
      })
      .catch((err) => {
        setError(err);
      });
  };
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create a new account
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div class="space-y-6">
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div class="mt-2">
                <input
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  id="name"
                  name="name"
                  type="text"
                  autocomplete="name"
                  required
                  placeholder="Enter your name"
                  className="block bg-white text-gray-900 w-full pl-3 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div class="mt-2">
                <input
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  placeholder="Enter your email"
                  className="block bg-white text-gray-900 w-full pl-3 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div class="mt-2">
                <input
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  placeholder="Enter your password"
                  className="block bg-white text-gray-900 w-full pl-3 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {error && <div className="text-red-500">{error}</div>}

            <div>
              <button
                onClick={handleSubmit}
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </div>

          <p class="mt-10 text-center text-sm text-gray-500">
            Do you already have an account?
            <Link
              to="/login"
              class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
