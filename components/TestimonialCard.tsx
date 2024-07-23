// components/TestimonialCard.tsx
import Image from "next/image";

interface TestimonialCardProps {
  stars: number;
  comment: string;
  userImage: string;
  userName: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  stars,
  comment,
  userImage,
  userName,
}) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg flex flex-col items-center space-y-4 hover:bg-orange-600 hover:text-white text-gray-900">
      {/* Stars */}
      <div className="flex">
        {[...Array(stars)].map((_, index) => (
          <svg
            key={index}
            className="w-6 h-6 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.839-.197-1.54-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.245 9.4c-.784-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
          </svg>
        ))}
      </div>
      {/* Comment */}
      <p className=" text-center">{comment}</p>
      {/* User Image and Name */}
      <div className="flex items-center space-x-4">
        <Image
          src={userImage}
          alt={userName}
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="font-semibold">{userName}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
