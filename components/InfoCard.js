import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  startDate,
  endDate,
}) {
  const router = useRouter();
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t mb-10">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <button
              onClick={() => {
                router.push({
                  pathname: "/payment",
                  query: {
                    title: title,
                    img: img,
                    location: location,
                    description: description,
                    price: price,
                    total: total,
                    startDate: startDate,
                    endDate: endDate,
                  },
                });
              }}
              className="bg-red-400 p-2 rounded-lg text-white ml-12 button "
            >
              Réserver
            </button>

            <p className="text-lg font-semibold lg:text-2xl pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
