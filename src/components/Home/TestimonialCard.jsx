import React from "react";

const TestimonialCard = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      username: "@john_doe",
      text: "This product changed my life! I can't believe how much it has improved my daily workflow.",
      image: "https://pbs.twimg.com/profile_images/1579395483294138370/3hMmFSAH_normal.jpg"
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "@jane_smith",
      text: "Absolutely fantastic! The customer service was top-notch, and the product exceeded expectations.",
      image: "https://pbs.twimg.com/profile_images/1579395483294138370/3hMmFSAH_normal.jpg"
    },
    {
      id: 3,
      name: "Michael Lee",
      username: "@michael_lee",
      text: "Highly recommend this product! The user interface is intuitive, and the overall performance is exceptional.",
      image: "https://pbs.twimg.com/profile_images/1579395483294138370/3hMmFSAH_normal.jpg"
    }
  ];

  return (
    <div className="flex justify-between gap-8 mt-12">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="bg-white p-6 rounded-lg shadow-md w-1/3 flex flex-col"
        >
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <a
                href={`https://twitter.com/${testimonial.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-gray-800"
              >
                {testimonial.name}
              </a>
              <a
                href={`https://twitter.com/${testimonial.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500"
              >
                {testimonial.username}
              </a>
            </div>
          </div>
          <p className="text-gray-600">{testimonial.text}</p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;
