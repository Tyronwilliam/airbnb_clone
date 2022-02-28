import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import Header from "../components/Header";
import { useRouter } from "next/router";
import Image from "next/image";
function Payment() {
  const router = useRouter();
  return (
    <div>
      <Header />

      <div className=" mt-20 max-w-4xl mx-7 lg:flex  lg:mx-auto items-center">
        <section className="flex flex-col  mb-10 h-[600px] shrink-0 lg:basis-1/2">
          <div className="flex flex-col justify-between border-b h-64">
            <div className="flex items-center">
              <ChevronLeftIcon className="h-5 w-5 text-black" />
              <h1 className="pl-5 font-bold text-2xl">
                Demande de réservation
              </h1>
            </div>
            <p className="text-xl font-semibold">Votre voyage</p>
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">Dates</p>
                <p>{router.query.startDate}</p>
              </div>
              <p className="font-semibold border-b h-6 border-black">
                Modifier
              </p>
            </div>
            <div className="flex justify-between mb-5">
              <div>
                <p className="font-semibold">Dates</p>
                <p>{router.query.endDate}</p>
              </div>
              <p className="font-semibold border-b h-6 border-black">
                Modifier
              </p>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex border-b h-44">
              <div className="relative basis-1/2 h-40 ">
                <Image
                  src={router.query.img}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <div className="ml-5 ">
                <p>{router.query.title}</p>
              </div>
            </div>
            <div className="mt-5">
              <h2 className="font-bold text-lg mb-5">Détails du prix</h2>
              <div>
                <div className="flex justify-between items-center">
                  <p>Prix X Nuit</p>
                  <p>{router.query.price}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Total</p>
                  <p>{router.query.total}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-col p-5 pb-0 shrink-0 h-[600px] lg:basis-1/2">
          <form className="flex flex-col justify-between h-full">
            <div className="flex flex-col">
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                id="email"
                className="border p-2 rounded-lg outline-none appearance-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="cardInfos">Information de la carte</label>
              <input
                type="number"
                id="cardInfos"
                className="border p-2 rounded-t-lg  outline-none appearance-none"
              />
              <div className="flex flex-col lg:flex-row">
                <input
                  type="number"
                  placeholder="MM/AA"
                  className="border  p-2 rounded-bl-lg outline-none appearance-none"
                />
                <input
                  type="number"
                  placeholder="CVC"
                  className="border rounded-br-lg p-2 outline-none appearance-none"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="cardInfos">Nom du titulaire de la carte</label>
              <input
                type="number"
                id="cardInfos"
                className="border p-2  rounded-lg outline-none appearance-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="pays">Pays ou Region</label>
              <select name="" className="border p-2 rounded-t-lg outline-none">
                <option value="Usa">Etats-Unis</option>
                <option value="Usa">France</option>
              </select>
              <input
                type="number"
                placeholder="Code postal"
                className="border p-2  rounded-b-lg outline-none appearance-none"
              />
            </div>
            <button className="bg-blue-400 p-4 rounded-lg text-white font-semibold cursor-pointer">
              Payer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
