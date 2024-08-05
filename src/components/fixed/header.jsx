import React from "react";
import Logo from "../../images/Group11.png";
import img from "../../images/user login.png";
import HeadderHook from "../../hookPages/headderHook";
const Header = () => {
  const [
    activate,
    ispress,
    ispressuser,
    notActive,
    activeuser,
    Logout,
    IsUserHere,
    ImageUser,
    userName,
    email,
    Ref,
    listRef,
    svgRef,
    path,
  ] = HeadderHook();

  return (
    <header className="bg-white shadow-md  ">
      <div className="container ">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a href="/">
              <img src={Logo} alt="Logo"></img>
            </a>
          </div>

          <div className={`md:block ${ispress ? "listNav" : "notAct"} `}>
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm ">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    Main
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    Contact US
                  </a>
                </li>

                <div
                  className="w-fit h-fit absolute right-0 p-2 block md:hidden"
                  onClick={notActive}
                >
                  <svg
                    className="w-[24px] h-[24px] text-gray-800 cursor-pointer"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
                </div>
              </ul>
            </nav>
          </div>

          <div className="flex gap-4 items-center ">
            {IsUserHere === null ? (
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-sec px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/login"
                >
                  Login
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-sec"
                    href="/register"
                  >
                    Register
                  </a>
                </div>
              </div>
            ) : (
              <div className="relative menu-container">
                <div
                  className="inline-flex items-center overflow-hidden rounded-md "
                  onClick={activeuser}
                >
                  <img
                    src={ImageUser !== null ? ImageUser : img}
                    alt="user"
                    className=" cursor-pointer mt-2 rounded-full w-[35px] h-[35px] object-cover"
                    property="lazy"
                    ref={Ref}
                  ></img>

                  {/* <button className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700">
                    <span className="sr-only">Menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button> */}
                </div>

                {ispressuser ? (
                  <div
                    className="absolute end-0 z-10 mt-2 w-60 rounded-md border border-gray-100 bg-white shadow-lg"
                    role="menu"
                  >
                    <div className=" rounded-lg px-4 py-2 text-sm text-gray-500 flex gap-1 items-center  ">
                      <img
                        src={ImageUser === null ? img : ImageUser}
                        alt="imageUser"
                        className=" w-[40px] h-[40px] rounded-full object-cover"
                        property="lazy"
                      ></img>
                      <div>
                        <p className=" text-zinc-800">{userName}</p>
                        <p>{email}</p>
                      </div>
                    </div>
                    <div className="p-2">
                      {IsUserHere.role === "Owner" ? (
                        <a
                          href="/owner/dashboard"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          Owner Dashboard
                        </a>
                      ) : null}
                      {IsUserHere.role === "Admin" ? (
                        <a
                          href="/admin/dashboard"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          Admin Dashboard
                        </a>
                      ) : null}
                      {IsUserHere.role === "User" ? (
                        <a
                          href="/user/information"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          User Information
                        </a>
                      ) : null}
                      {IsUserHere.role === "User" ? (
                        <a
                          href="/user/password"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          Change Password
                        </a>
                      ) : null}

                      <p
                        className="block rounded-lg px-4 py-2 text-sm text-red-800 hover:bg-gray-50 hover:text-gray-700 cursor-pointer"
                        onClick={Logout}
                      >
                        Logout
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
            )}

            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={activate}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
