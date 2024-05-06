import React from "react";
import { Link } from "react-router-dom";
function PaymentGatWay() {
  return (
    <div className="viewCoursePage relative px-[80px] max-2xl:px-[30px] max-sm:py-[30px] max-sm:px-[15px] py-5">
      <div className="border p-5 ">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Checkout
        </h1>
        <div class="mb-6">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="first_name"
                class="block text-gray-700 dark:text-white mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                class="w-full  border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                class="block text-gray-700 dark:text-white mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                class="w-full  border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              />
            </div>
          </div>

          <div class="mt-4">
            <label
              htmlFor="address"
              class="block text-gray-700 dark:text-white mb-1"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              class="w-full  border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
            />
          </div>

          <div class="mt-4">
            <label
              htmlFor="city"
              class="block text-gray-700 dark:text-white mb-1"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              class="w-full  border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
            />
          </div>

          <div class="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label
                htmlFor="state"
                class="block text-gray-700 dark:text-white mb-1"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                class="w-full  border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              />
            </div>
            <div>
              <label
                htmlFor="zip"
                class="block text-gray-700 dark:text-white mb-1"
              >
                ZIP Code
              </label>
              <input
                type="text"
                id="zip"
                class="w-full  border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-xl font-semibold text-gray-700 dark:text-white mb-2">
            Payment InhtmlFormation
          </h2>
          <div class="mt-4">
            <label
              htmlFor="card_number"
              class="block text-gray-700 dark:text-white mb-1"
            >
              Card Number
            </label>
            <input
              type="text"
              id="card_number"
              class="w-full  border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              maxLength={16}
              minLength={16}
            />
          </div>

          <div class="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label
                htmlFor="exp_date"
                class="block text-gray-700 dark:text-white mb-1"
              >
                Expiration Date
              </label>
              <input
                type="text"
                id="exp_date"
                class="w-full  border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              />
            </div>
            <div>
              <label
                htmlFor="cvv"
                class="block text-gray-700 dark:text-white mb-1"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                class="w-full  border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              />
            </div>
          </div>
        </div>

        <div class="mt-2 flex justify-end">
          <Link to={'/myPaiedCourse/1'} class="mt-5 w-full bg-blue-500 text-white px-4 py-2  hover:bg-blue-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900 text-center">
            Place Order
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PaymentGatWay;
