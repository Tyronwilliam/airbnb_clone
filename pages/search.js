import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Maps from "../components/Map";
function Search({ searchResult }) {
  const router = useRouter();
  // Destructuring
  const { location, startDate, endDate, numberOfGuest } = router.query;
  const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formatedStartDate} - ${formatedEndDate} `;
  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${numberOfGuest}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            {range} Stay for {numberOfGuest} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stay in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button"> Type of place</p>
            <p className="button"> Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters </p>
          </div>
          <div className="flex flex-col ">
            {searchResult?.map((item, index) => {
              return (
                <InfoCard
                  key={index}
                  img={item.img}
                  location={item.location}
                  title={item.title}
                  description={item.description}
                  star={item.star}
                  price={item.price}
                  total={item.total}
                  startDate={formatedStartDate}
                  endDate={formatedEndDate}
                />
              );
            })}
          </div>
        </section>

        <section className="  hidden xl:inline-flex xl:min-w-[600px] mb-10">
          <Maps searchResult={searchResult} />
        </section>
      </main>{" "}
      <Footer />
    </div>
  );
}
export async function getServerSideProps() {
  const searchResult = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResult,
    },
  };
}
export default Search;
