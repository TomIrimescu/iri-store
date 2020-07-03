import React from "react";

export const HeaderBanner = () => {
  return (
    <div className="relative flex-shrink-0 flex h-16 bg-white shadow mb-8">
      <div className="flex-1 px-4 flex justify-between bg-blue">
        <div className="flex-1 flex">
          <div className="w-full flex md:ml-0">
            <div className="relative w-full text-redDark focus-within:text-redDark">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <h1 className="text-sm md:text-xl lg:text-2xl font-semibold text-red whitespace-no-wrap">
                  IRI-STORE
              </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}