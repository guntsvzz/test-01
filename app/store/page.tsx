import React from 'react'
import Head from 'next/head'

export default function Home() {
    return (
        <div>

            <div className="container mx-auto">

                <div className="flex text-center">
                    <div className="w-full m-4">
                        <h1 className="text-4xl">Macro Compliance Tracker</h1>
                    </div>
                </div>

                <div className="flex text-center">
                    <div className="w-1/3 bg-gray-200 p-4">Previous Day</div>
                    <div className="w-1/3 p-4">1/23/2020</div>
                    <div className="w-1/3 bg-gray-200 p-4">Next Day</div>
                </div>

                <div className="flex mb-4 text-center">
                    <div className="w-1/4 p-4 bg-green-500 text-white">
                        <h2 className="text-3xl font-bold">1850
                            <div className="flex text-sm p-4">
                                <div className="w-1/3">1700</div>
                                <div className="w-1/3 font-bold">1850</div>
                                <div className="w-1/3">2000</div>
                            </div>
                        </h2>
                        <h3 className="text-xl">Calories</h3>
                    </div>
                    <div className="w-1/4 p-4 bg-red-500 text-white">
                        <h2 className="text-3xl font-bold">195
                            <div className="flex text-sm p-4">
                                <div className="w-1/3">150</div>
                                <div className="w-1/3 font-bold">160</div>
                                <div className="w-1/3">170</div>
                            </div>
                        </h2>
                        <h3 className="text-xl">Carbs</h3>
                    </div>
                    <div className="w-1/4 p-4 bg-green-500 text-white">
                        <h2 className="text-3xl font-bold">55
                            <div className="flex text-sm p-4">
                                <div className="w-1/3">50</div>
                                <div className="w-1/3 font-bold">60</div>
                                <div className="w-1/3">70</div>
                            </div>
                        </h2>
                        <h3 className="text-xl">Fat</h3>
                    </div>
                    <div className="w-1/4 p-4 bg-blue-500 text-white">
                        <h2 className="text-3xl font-bold">120
                            <div className="flex text-sm p-4">
                                <div className="w-1/3">145</div>
                                <div className="w-1/3 font-bold">160</div>
                                <div className="w-1/3">175</div>
                            </div>
                        </h2>
                        <h3 className="text-xl">Protein</h3>
                    </div>
                </div>

                <div className="flex">
                    <div className="w-1/3">
                        <h2 className="text-3xl p-4">Results</h2>
                        <div className="p-4">
                            <label className="block">Calories</label>
                            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></      input>
                        </div>
                        <div className="p-4">
                            <label className="block">Carbs</label>
                            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></      input>
                        </div>
                        <div className="p-4">
                            <label className="block">Fat</label>
                            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></      input>
                        </div>
                        <div className="p-4">
                            <label className="block">Protein</label>
                            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></      input>
                        </div>
                        <div className="p-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Save
                            </button>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <h2 className="text-3xl p-4">Target</h2>
                        <div className="p-4">
                            <label className="block">Calories</label>
                            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></      input>
                        </div>
                        <div className="p-4">
                            <label className="block">Carbs</label>
                            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></      input>
                        </div>
                        <div className="p-4">
                            <label className="block">Fat</label>
                            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></      input>
                        </div>
                        <div className="p-4">
                            <label className="block">Protein</label>
                            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></      input>
                        </div>
                        <div className="p-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Save
                            </button>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <h2 className="text-3xl p-4">Variance</h2>
                        <div className="p-4">
                            <label className="block">Calories</label>
                            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></      input>
                        </div>
                        <div className="p-4">
                            <label className="block">Carbs</label>
                            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></      input>
                        </div>
                        <div className="p-4">
                            <label className="block">Fat</label>
                            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></      input>
                        </div>
                        <div className="p-4">
                            <label className="block">Protein</label>
                            <input type="number" className="bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></      input>
                        </div>
                        <div className="p-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}