import React from "react";

const OneMore: React.FC = () => {
  // Features Array
  const features = [
    {
      title: "Free Delivery",
      description: "Enjoy free delivery on all orders over $50.",
      image: "free-delivery 1.png", 
    },
    {
      title: "24/7 Support",
      description: "Our support team is available 24/7 to assist you.",
      image: "24-hours-support 1.png", 
    },
    {
      title: "Premium Quality",
      description: "We ensure the highest quality in all our products.",
      image: "/premium-quality 1.png", 
    },
    {
      title: "Cashback Offers",
      description: "Get amazing cashback offers on selected items.",
      image: "/cashback 1.png", 
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Upper Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold text-purple-700 mb-10">
          What Shopex Offer!
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-md max-w-xs text-center"
            >
              <div className="mb-4">
                {/* Feature Image */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-16 h-16 mx-auto object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lower Section */}
      <section className="bg-[#F2F0FF] h-[579px]">
        <div className="p-[64px] flex flex-wrap md:flex-nowrap items-center gap-10 px-6">
          <div className="flex-1">
            {/* Product Image */}
            <img
              src="unique feature sofa (1).png" 
              alt="Product"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-purple-700 mb-4">
              Unique Features Of Latest & Trending Products
            </h3>
            <ul className="text-gray-700 space-y-2 list-disc pl-5">
              <li>
                All frames constructed with hardwood solids and laminates.
              </li>
              <li>
                Reinforced with double wood dowels, glue, screws, nails at
                corner blocks, and machine nails.
              </li>
              <li>Arms, backs, and seats are structurally reinforced.</li>
            </ul>
            <div className="mt-8">
              <button className="bg-purple-600 text-white py-2 px-6 rounded shadow-md hover:bg-purple-700">
                Add To Cart
              </button>
              <p className="mt-2 text-sm text-gray-500">
                B&B Italian Sofa - $32.00
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OneMore;
