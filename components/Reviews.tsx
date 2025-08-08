import { FaStar } from "react-icons/fa";

interface ReviewProps {
  rating: number;
  title: string;
  content: string;
  author: string;
  designation: string;
}

const Review: React.FC<ReviewProps> = ({
  rating = 5,
  title,
  content,
  author,
  designation,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-green-500" : "text-gray-300"}`}
          />
        ))}
      </div>
      <h3 className="text-xl mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 font-light">{content}</p>
      <div>
        <p className="text-gray-900 dark:text-white">{author}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-light">
          {designation}
        </p>
      </div>
    </div>
  );
};

export default function Reviews() {
  const reviews = [
    {
      rating: 5,
      title: "A much-needed decision-support tool",
      content:
        "This kind of modeling could help us evaluate resilience strategies before making major investments—something we’ve been missing for years.",
      author: "Ali Ghasemi",
      designation: "Program Manager, U.S. Department of Energy",
    },
    {
      rating: 5,
      title: "Bridging data and actionable policy",
      content:
        "The ability to integrate infrastructure, environmental, and social data into a single planning platform could save agencies months of coordination time.",
      author: "Brittany Kiessling",
      designation: "Social Scientist, U.S. Environmental Protection Agency",
    },
    {
      rating: 5,
      title: "Essential for hazard and disaster planning",
      content:
        "If we can simulate community responses to extreme events ahead of time, we can allocate resources far more effectively.",
      author: "Gary Monitz",
      designation: "Hazard Navigation Planner, FEMA",
    },
    {
      rating: 5,
      title: "Supports smarter urban growth",
      content:
        "A platform that lets us test multiple growth and infrastructure scenarios would be invaluable for sustainable city planning.",
      author: "Aimee Nassif",
      designation: "Deputy Director of Development, City of Lee's Summit",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center text-gray-900 dark:text-white mb-12">
          What Experts Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <Review key={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}