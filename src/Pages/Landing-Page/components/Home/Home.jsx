import { useState } from 'react';
import "./Home.css"
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form'; // Assuming react-hook-form is installed
import cardsData from "../../../../assets/Cards.json"; // Renamed to avoid conflict with state variable
// import Help_Center from "./Help_Center"; // Keeping if it's used elsewhere, but not in this snippet

const Home = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    // send the data from here to db
    console.log("Feedback submitted:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex justify-center items-center min-h-screen p-8 bg-blue-50 font-inter">
        <div className="bg-white rounded-3xl shadow-md p-10 text-center">
          <h1 className="text-2xl font-bold text-blue-700">
            Thank you for your feedback!
          </h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen font-inter flex flex-col items-center after:left-1/2">

        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-12 mb-16 p-8 bg-white rounded-3xl shadow-md transition-transform duration-200 hover:translate-y-[-5px]">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="hover-effect text-blue-700 text-4xl font-bold mb-4">Your Health, Our Priority</h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At CityCare Hospital, we are dedicated to providing world-class healthcare services with a personal touch. Our experienced team of doctors and state-of-the-art facilities ensure you receive the best care possible.
            </p>
            <NavLink
              to="/sign-up"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Book an Appointment
            </NavLink>
          </div>
          <div className="text-center lg:text-right lg:w-1/2">
            <h1 className="text-blue-800 text-3xl font-bold mb-2">CityCare Hospital</h1>
            <p className="text-gray-600 text-lg">
              <span>Compassionate Care. Advanced Medicine.</span>
              Close to Home.
            </p>
          </div>
        </div>

        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-transform duration-200 hover:translate-y-[-5px]">
          {cardsData.map(card => (
            <div
              key={card.title} // Assuming title is unique for key
              className="bg-white rounded-3xl shadow-md p-6 flex flex-col gap-3 transition-transform duration-200 hover:translate-y-[-2px]"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-2">{card.title}</h2>
              <p className="text-gray-700 text-base">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="w-full max-w-md bg-white rounded-3xl shadow-md p-10 mb-16 transition-transform duration-200 hover:translate-y-[-5px]">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
            <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">We Value Your Feedback</h1>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                autoCapitalize="on"
                autoComplete="on"
                placeholder="Full Name"
                id="name"
                className="block w-full border border-gray-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <span className="text-red-500 text-sm mt-1 block">{errors.name.message}</span>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                autoComplete="on"
                placeholder="Email Address"
                id="email"
                type="email"
                className="block w-full border border-gray-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email.message}</span>}
            </div>

            <div>
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">Rate Your Experience</label>
              <select
                id="rating"
                className="block w-full border border-gray-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all bg-white"
                {...register("rating", { required: "Please select a rating" })}
              >
                <option value="">Select Rating</option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Average</option>
                <option>Poor</option>
              </select>
              {errors.rating && <span className="text-red-500 text-sm mt-1 block">{errors.rating.message}</span>}
            </div>

            <div>
              <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">Your Comments</label>
              <textarea
                placeholder="Your Comments"
                id="comments"
                rows="4" // Added rows for better textarea appearance
                className="block w-full border border-gray-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all"
                {...register("comments", { required: "Comments are required" })}
              />
              {errors.comments && <span className="text-red-500 text-sm mt-1 block">{errors.comments.message}</span>}
            </div>

            <button
              type="submit"
              className="btn-primary w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 mt-6"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
