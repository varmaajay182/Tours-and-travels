import React, { useEffect, useState } from 'react';
import { useGetCitiesListingQuery } from '../../Api/Api';
import Airlinesname from '../Home/components/Airlinesname';
import TopSearchFlights from './TopSearchFlights';

const FlightsPageListing = () => {
    const { isError, error, data, isLoading, isSuccess } = useGetCitiesListingQuery();
    const [citiesListing, setCitiesListing] = useState()

    useEffect(() => {
        if (isSuccess) {
            setCitiesListing(data?.data)
        } else if (isError) {
            console.log("error", isError);
        }
    }, [error, data, isSuccess, isError]);

    console.log("citiesListingcitiesListing", citiesListing)


    return (
        <>
            <div className="w-full h-[500px] flex justify-center items-center bg-[url('https://www.ramco.com/hubfs/Iraqi%20Airways%20Go%20Live%20PR%20Banner%20Image.png')] bg-cover bg-center bg-[#f7f7f7]">
                <div className='w-[60%]'>
                    <div className="bg-[#1f2746] p-6 rounded-lg shadow-lg w-auto">
                        <h1 className="text-2xl text-white mb-4 font-semibold text-center">Search Flights</h1>

                        <div className="flex flex-row items-center gap-3 mb-4">
                            <label className="text-white flex items-center">
                                <input type="radio" name="tripType" value="roundTrip" className="mr-2" />
                                Round Trip
                            </label>

                            <label className="text-white flex items-center">
                                <input type="radio" name="tripType" value="oneWay" className="mr-2" />
                                One Way
                            </label>
                        </div>

                        <form className="p-4">
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                                <div className="mb-4">
                                    <label className="block text-white text-sm font-bold mb-2" htmlFor="from">
                                        From
                                    </label>
                                    <select
                                        id="from"
                                        name="from"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange=""
                                    >
                                        <option value="" disabled selected>Select Country</option>

                                        <option>
                                            Vishw
                                        </option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-white text-sm font-bold mb-2" htmlFor="to">
                                        To
                                    </label>
                                    <select
                                        id="to"
                                        name="to"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="" disabled selected>Select Country</option>

                                        <option>
                                            Prajapati
                                        </option>

                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-white text-sm font-bold mb-2">Class</label>
                                    <select
                                        id="class"
                                        name="class"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="" disabled selected>Select Class</option>
                                        <option value="economy">Economy</option>
                                        <option value="business">Business</option>
                                        <option value="firstClass">First Class</option>
                                    </select>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
                                <div className="mb-4">
                                    <label className="block text-white text-sm font-bold mb-2" htmlFor="departureDate">
                                        Departure Date
                                    </label>
                                    <input
                                        type="date"
                                        id="departureDate"
                                        name="departureDate"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-white text-sm font-bold mb-2" htmlFor="returnDate">
                                        Return Date
                                    </label>
                                    <input
                                        type="date"
                                        id="returnDate"
                                        name="returnDate"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-white text-sm font-bold mb-2" htmlFor="adult">
                                        Adult (16+)
                                    </label>
                                    <select
                                        id="adult"
                                        name="adult"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="" disabled selected>Select Number of Adults</option>
                                        <option value="1">1 Adult</option>
                                        <option value="2">2 Adults</option>
                                        <option value="3">3 Adults</option>
                                        <option value="4">4 Adults</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-white text-sm font-bold mb-2" htmlFor="children">
                                        Children (0-15)
                                    </label>
                                    <select
                                        id="children"
                                        name="children"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="" disabled selected>Select Number of Children</option>
                                        <option value="0">0 Children</option>
                                        <option value="1">1 Child</option>
                                        <option value="2">2 Children</option>
                                        <option value="3">3 Children</option>
                                        <option value="4">4 Children</option>
                                    </select>
                                </div>

                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-all duration-300"
                                    >
                                        Search Flights
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Airlinesname />
            <TopSearchFlights />
        </>
    );
};

export default FlightsPageListing;