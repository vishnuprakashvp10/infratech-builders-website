import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Img1 from './assets/Hero/lshape.jpg'; 
import Img2 from './assets/Hero/linear.jpg';
import Img3 from './assets/Hero/ushape.jpg';
import Img4 from './assets/Hero/para.jpg';
import Img5 from './assets/Hero/island.jpg';

const BlogData = [
  {
    id: 1,
    img: Img1,
    name: 'Top 10 Home Construction Companies in Chennai',
    text: "Choosing the right construction company is crucial for building your dream home. Here are the top 10 home construction companies in Chennai, known for their quality craftsmanship and exceptional service.",
  },
  {
    id: 2,
    name: 'Top 10 Interior Designing Companies in Chennai',
    text: 'Elevate your living spaces with stunning and functional designs by choosing the right interior designer. Here are the top 10 interior designing companies in Chennai renowned for their creative excellence and transformative designs.',
    img: Img4,
  },
  {
    id: 3,
    name: 'Top 10 Multi-Turf Construction Companies in Chennai',
    text: "Finding the best multi-turf construction company can make a significant difference in the quality of your sports or recreational area. Discover the top 10 multi-turf construction companies in Chennai.",
    img: Img2,
  },
  {
    id: 4,
    name: 'Top 10 Renovation Companies in Chennai',
    text: "Transforming your home can be an exciting journey with the right renovation partner. Explore the top 10 renovation companies in Chennai that specialize in turning your vision into reality with exceptional craftsmanship.",
    img: Img3,
  },
  {
    id: 5,
    name: 'Top 10 Painting Companies in Chennai',
    text: 'Revitalize your space with a fresh coat of paint from the best in the business. Discover the top 10 painting companies in Chennai, each offering exceptional quality and a wide range of color options to enhance your home’s aesthetic appeal. ',
    img: Img5,
  },
];

const Blogpost = ({ handleOrderPopup }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleReadMore = (id) => {
    switch (id) {
      case 1:
        navigate('/blog-post/top-10-construction-companies-in-chennai');
        break;
      case 2:
        navigate('/faq');
        break;
      case 3:
        navigate('/privacy-policy');
        break;
      case 4:
        navigate('/multi-turf-construction');
        break;
      case 5:
        navigate('/painting-services');
        break;
    }
  };

  return (
    <div className="ml-4">
      <h1 className="text-center font-bold py-7 mr-2 max-w-[1400px] md:py-5 text-2xl  md:text-5xl" style={{ color: 'orange' }}>
        BLOG POSTS
      </h1>
      <div className="py-14 mb-10">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {BlogData.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl mt-20 bg-white/100 hover:bg-primary relative shadow-xl duration-high group max-w-[300px] h-[450px]"
              >
                <div className="h-[150px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[250px] block mx-auto transform -translate-y-14 group-hover:scale-105  duration-300 shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="py-2 text-gray-500 group-hover:text-white duration-high text-sm">
                    {service.text}
                  </p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-3 px-8 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={() => handleReadMore(service.id)} // Pass id to handleReadMore
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogpost;
