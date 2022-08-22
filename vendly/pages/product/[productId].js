import { useRouter } from "next/router";
import React from "react";
import MainLayout, {
  getLayout,
} from "../../components/layoutscomponent/MainLayout";
const ProductDetail = () => {
  const router = useRouter();
  return (
    <div className="flex-col bg-white shadow-md rounded-lg">
      <div className="flex flex-row m-4 w-full h-full">
        <div className="sm:m-4 sm:w-4/6 sm:h-[84]">
          <img
            className="object-cover w-full sm:h-[22rem] rounded-lg"
            src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1442&q=80"
            alt="Flower and sky"
          />
        </div>
        <div className="flex-col sm:w-2/6 sm:h-[84] sm:pt-0 sm:pb-0 sm:m-4">
          <div className=" sm:w-[90%] sm:h-28 mb-2">
            {" "}
            <img
              className="rounded-tr-lg rounded-tl-lg object-cover w-full sm:h-28 rounded-lg"
              src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1442&q=80"
              alt="Flower and sky"
            />
          </div>
          <div className=" sm:w-[90%] sm:h-28 mb-2">
            {" "}
            <img
              className="rounded-tr-lg rounded-tl-lg object-cover w-full sm:h-28 rounded-lg"
              src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1442&q=80"
              alt="Flower and sky"
            />
          </div>
          <div className=" sm:w-[90%] sm:h-28 mb-2">
            {" "}
            <img
              className="rounded-tr-lg rounded-tl-lg object-cover w-full sm:h-28 rounded-lg"
              src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1442&q=80"
              alt="Flower and sky"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col m-4 w-full h-full">
        <div className="flex flex-row items-center justify-between m-4 w-[93%] h-full border-b-2 border-gray-400 pb-2">
          <span>Name</span>
          <span className="font-bold">HP Pavilion</span>
        </div>
        <div className="flex flex-row items-center justify-between m-4 w-[93%] h-full border-b-2 border-gray-400 pb-2">
          <span>Price</span>
          <span className="font-bold">$900</span>
        </div>
        <div className="flex flex-row items-center justify-between m-4 w-[93%] h-full border-b-2 border-gray-400 pb-2">
          <span>Location</span>
          <span className="font-bold">Port Harcourt</span>
        </div>
        <div className="flex flex-row items-center justify-between m-4 w-[93%] h-full border-b-2 border-gray-400 pb-2">
          <span>Product category</span>
          <span className="font-bold">Gadgets</span>
        </div>
        <div className="flex flex-row items-center justify-between m-4 w-[93%] h-full">
          <span>Description</span>
        </div>
        <div className="flex flex-row items-center justify-between ml-4 mr-4 w-[93%] h-full pb-2">
          <span className="font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
        <div className="flex flex-row items-center justify-between ml-4 mr-4 mt-4 w-[93%] h-full border-b-2 border-gray-400 pb-2">
          <span>Comments(23)</span>
          <a href="#" className="text-blue-700">
            see all
          </a>
        </div>
        <div className="flex flex-row items-center justify-between w-[93%] m-2 h-full ">
          <div class="flex justify-center">
            <div class="max-w-3xl">
              <div class="block p-6 rounded-lg shadow-lg bg-white m-4 sm:w-[29rem]">
                <div class="md:flex md:flex-row">
                  <div class="md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
                      class="rounded-full shadow-md"
                      alt="woman avatar"
                    />
                  </div>
                  <div class="md:ml-6">
                    <p class="text-gray-500 text-xs font-light mb-6">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Id quam sapiente molestiae numquam quas, voluptates omnis
                      nulla ea odio quia similique corrupti magnam.
                    </p>
                    <p class="font-semibold text-sm mb-2 text-gray-800">
                      Anna Smith
                    </p>
                    <p class="font-semibold text-xs text-gray-500 mb-0">
                      Product manager
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="max-w-3xl">
              <div class="block p-6 rounded-lg shadow-lg bg-white m-2 sm:w-[29rem]">
                <div class="md:flex md:flex-row">
                  <div class="md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
                      class="rounded-full shadow-md"
                      alt="woman avatar"
                    />
                  </div>
                  <div class="md:ml-6">
                    <p class="text-gray-500 text-xs font-light mb-6">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Id quam sapiente molestiae numquam quas, voluptates omnis
                      nulla ea odio quia similique corrupti magnam.
                    </p>
                    <p class="font-semibold text-sm mb-2 text-gray-800">
                      Anna Smith
                    </p>
                    <p class="font-semibold text-xs text-gray-500 mb-0">
                      Product manager
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-[93%] m-2 h-full ">
          <div class="flex justify-center">
            <div class="max-w-3xl">
              <div class="block p-6 rounded-lg shadow-lg bg-white m-4 sm:w-[29rem]">
                <div class="md:flex md:flex-row">
                  <div class="md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
                      class="rounded-full shadow-md"
                      alt="woman avatar"
                    />
                  </div>
                  <div class="md:ml-6">
                    <p class="text-gray-500 text-xs font-light mb-6">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Id quam sapiente molestiae numquam quas, voluptates omnis
                      nulla ea odio quia similique corrupti magnam.
                    </p>
                    <p class="font-semibold text-sm mb-2 text-gray-800">
                      Anna Smith
                    </p>
                    <p class="font-semibold text-xs text-gray-500 mb-0">
                      Product manager
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="max-w-3xl">
              <div class="block p-6 rounded-lg shadow-lg bg-white m-2 sm:w-[29rem]">
                <div class="md:flex md:flex-row">
                  <div class="md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg"
                      class="rounded-full shadow-md"
                      alt="woman avatar"
                    />
                  </div>
                  <div class="md:ml-6">
                    <p class="text-gray-500 text-xs font-light mb-6">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Id quam sapiente molestiae numquam quas, voluptates omnis
                      nulla ea odio quia similique corrupti magnam.
                    </p>
                    <p class="font-semibold text-sm mb-2 text-gray-800">
                      Anna Smith
                    </p>
                    <p class="font-semibold text-xs text-gray-500 mb-0">
                      Product manager
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center m-4 justify-between w-[93%]">
          <button className="border-2 p-2 sm:w-[49%] border-red-500 text-red-500">
            DELETE
          </button>
          <button className="border-2 p-2 sm:w-[49%] border-blue-700 bg-blue-700 text-white">
            SHARE LINK
          </button>
        </div>
      </div>
    </div>
  );
};

ProductDetail.getLayout = getLayout;

export default ProductDetail;
