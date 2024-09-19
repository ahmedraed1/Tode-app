export default function ProfileInfo() {
  return (
    <>
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button
          type="button"
          class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>

          <svg
            class="block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <svg
            class="hidden h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="relative ml-3 flex flex-row gap-3">
        <div className="flex flex-col items-center justify-center">
          <span class="block text-xl font-bold text-gray-900">John Doe</span>
          <span className="block text-sm font-medium text-gray-900 underline cursor-pointer hover:text-blue-600">
            logout
          </span>
        </div>
        <div>
          <button
            type="button"
            class="relative flex rounded-full bg-white h-fit w-fit p-0"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <span class="absolute"></span>
            <span class="sr-only">Open user menu</span>
            <img
              class=" h-9 w-9 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </button>
        </div>
      </div>
      {/* <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <a
              href="#"
              class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Team
            </a>
            <a
              href="#"
              class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#"
              class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </a>
          </div>
        </div>
      </div> */}
      {/* <div class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#"
              class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Team
            </a>
            <a
              href="#"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </a>
          </div>
        </div> */}
    </>
  );
}
