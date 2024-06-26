import React from "react";

const Modal = ({ onClose }) => {
  //   console.log(order);
  //   const calculateTotalRent = () => {
  //     let totalRent = 0;
  //     order.products.forEach((product) => {
  //       totalRent += product.rent * product.quantity;
  //     });
  //     return totalRent;
  //   };

  return (
    <div>
      <section className=" sm:py-16 lg:py-20 ">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            {/* <h1 className="text-4xl font-bold text-gray-900">Order Details</h1> */}
          </div>
          <div
            className="mx-auto mt-8 max-w-md md:mt-12 relative"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="rounded-3xl bg-white shadow-lg">
              <div className="px-4 py-6 sm:px-8 sm:py-10 md:max-h-[600px] overflow-scroll max-h-[500px]">
                <div className="flow-root">
                  <ul className="-my-8">
                    {/* Map over each product in the order */}

                    {/* button to close the modal */}
                    <button
                      onClick={onClose}
                      className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                    >
                      {/* Close button icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    {/* {order.products.map((product, index) => (
                      <li
                        key={index}
                        className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                      >
                        <div className="shrink-0 relative">
                          <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
                            lorem ipsum
                          </span>
                          <img
                            className="h-24 w-24 max-w-full rounded-lg object-cover"
                            src="#"
                            alt="lorem ipsum"
                          />
                        </div>
                        <div className="relative flex flex-1 flex-col justify-between">
                          <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                            <div className="pr-8 sm:pr-5">
                              <p className="text-base font-semibold text-gray-900">
                              lorem ipsum
                              </p>
                              <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                              lorem ipsum
                              </p>
                            </div>
                            <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                              <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                ₹ lorem ipsum
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))} */}
                  </ul>
                </div>
                {/* Display total amount and other details here */}
                <div className="mt-6 space-y-3 border-t border-b py-8">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">Message</p>
                    <p className="text-lg font-semibold text-gray-900">
                      lorem ipsum
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">Rental Start Date</p>
                    <p className="text-lg font-semibold text-gray-900">
                      Send Message
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    {/* <p className="text-gray-400">Rental End Date</p>
                    <p className="text-lg font-semibold text-gray-900">
                      lorem ipsum
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modal;
