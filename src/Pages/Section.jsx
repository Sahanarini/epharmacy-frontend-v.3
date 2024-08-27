import React from 'react';

export default () => {

    const stats = [
        {
            data: "50K+",
            title: "Prescriptions Filled"
        },
        {
            data: "20K+",
            title: "Medications Offered"
        },
        {
            data: "100+",
            title: "Branches Nationwide"
        },
        {
            data: "98%",
            title: "Customer Satisfaction"
        },
    ]

    return (
        <section className="py-14 bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Trusted by Thousands of Customers
                    </h3>
                    <p className="mt-3 text-gray-600">
                        We take pride in providing exceptional pharmaceutical care and services. Explore our achievements and the impact we have made in the community.
                    </p>
                </div>
                <div className="mt-12">
                    <div className="flex flex-wrap justify-center gap-10 lg:gap-16">
                        {
                            stats.map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg w-full sm:w-auto lg:w-1/4">
                                                                           <br></br>

                                    <h4 className="text-4xl text-blue-600 font-semibold">
                                        {item.data}
                                        <br></br>
                                        </h4>
                                        <p className="mt-3 font-medium text-gray-700">
                                       

                                       

                                            {item.title}</p>
                                            <br></br>


                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
