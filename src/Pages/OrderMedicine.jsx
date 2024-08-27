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
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Trusted by Thousands of Customers
                    </h3>
                    <p className="mt-3 text-gray-600">
                        We take pride in providing exceptional pharmaceutical care and services. Explore our achievements and the impact we have made in the community.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x lg:divide-gray-200">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="text-center px-12 md:px-16">
                                    <h4 className="text-4xl text-blue-600 font-semibold">{item.data}</h4>
                                    <p className="mt-3 font-medium text-gray-700">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            
        </section>
    )
}
