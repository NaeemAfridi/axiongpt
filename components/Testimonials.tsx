// components/Testimonials.js
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    stars: 5,
    comment: "This product is amazing! Highly recommend to everyone.",
    userImage: "/jhon.jpeg",
    userName: "John Doe",
  },
  {
    stars: 4,
    comment: "Great value for the price. Will buy again.",
    userImage: "/jhane.jpg",
    userName: "Jane Smith",
  },
  {
    stars: 5,
    comment: "Exceeded my expectations. Fantastic quality!",
    userImage: "/alice.jpg",
    userName: "Alice Johnson",
  },
  {
    stars: 5,
    comment: "This product is amazing! Highly recommend to everyone.",
    userImage: "/jhon.jpeg",
    userName: "John Doe",
  },
  {
    stars: 2,
    comment: "Great value for the price. Will buy again.",
    userImage: "/jhane.jpg",
    userName: "Jane Smith",
  },
  {
    stars: 3,
    comment: "Exceeded my expectations. Fantastic quality!",
    userImage: "/alice.jpg",
    userName: "Alice Johnson",
  },
];

const Testimonials = () => {
  return (
    <div className="py-10 mt-4">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col justify-between items-center md:items-start gap-2 mb-4">
          <h2 className="text-4xl  font-bold text-center md:mb-8">
            Loved by many <br />
            <span className="text-orange-600">Worldwide</span>.
          </h2>
          <p className="text-xl md:font-bold">
            Discover What Our <br />
            Customers Love.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              stars={testimonial.stars}
              comment={testimonial.comment}
              userImage={testimonial.userImage}
              userName={testimonial.userName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
