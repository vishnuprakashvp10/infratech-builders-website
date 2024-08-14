import React, { useState } from 'react';
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import Banner from "./assets/Hero/top-cons-blog-img.jpg";
import Image1 from "./assets/Hero/casagrand.jpg";
import Image2 from "./assets/Hero/landt.jpg";
import Image3 from "./assets/Hero/homeonefin.jpg";
import Image4 from "./assets/Hero/arunexcello.jpg";
import Image5 from "./assets/Hero/akshaya.jpg";
import Image6 from "./assets/Hero/indiabuilders.jpg";
import Image7 from "./assets/Hero/appaswamy.jpg";
import Image8 from "./assets/Hero/kgbuilders.jpg";
import Image9 from "./assets/Hero/alliance.jpg";
import Image10 from "./assets/Hero/shriram.jpeg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: 'center',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

export const table = [
  {
    question: "TABLE OF CONTENTS",
    answers: ["DesignQube", "Infratech Builders", "Aamphaa Projects", "Deejos Interiors", "Vismaya Interiors", "The Studio", "Zenith Interior", "V5 Design Studio", "D’LIFE Home Interiors", "K2India"],
  },
];

export const questions = [
  {
    question: "How can I evaluate the credibility of these builders before making a decision?",
    answer: "To assess credibility, research their track record, read customer reviews, visit completed projects, and check their legal compliance and approvals."  
  },
  {
    question: "Do these builders work on both residential and commercial properties in Chennai?",
    answer: "Yes, many of these builders have experience in both residential and commercial projects. Their portfolios often include a range of luxury apartments, villas, townships, and commercial spaces. For detailed information, review their individual project listings on their websites."
  },
  {
    question: "How do these builders incorporate sustainable and eco-friendly practices in their projects?",
    answer: "Several of these builders emphasize sustainability by using green building practices, energy-efficient designs, and eco-friendly materials. Visit their websites for more details on their sustainable initiatives and certifications, such as LEED or IGBC ratings."
  },
  {
    question: "Are customization options available for villas and luxury apartments from these builders?",
    answer: "Yes, many top builders offer customization options to suit various preferences. They often provide choices in layout, finishes, and amenities to ensure your residence meets your specific vision and needs."
  },
  {
    question: "What should I consider when choosing between luxury apartments and villas from these builders?",
    answer: "Consider personal preferences, lifestyle, space requirements, and amenities. Villas offer more privacy and space, while apartments may provide convenience and shared facilities."
  },
];

const HomeConstructionsTop10 = () => {
  const [cards] = useState(questions);

  return (
    <div>
    <div className='text-xl' >
      <div className="mb-2 bg-gray-100  text-black" style={BannerImg}>
        <div className="container py-28 ">
          <div className="space-y-6 mx-auto">
          </div>
        </div>
      </div>
      <div className="ml-4">
      <h1 className="text-center font-bold py-7 mr-2 max-w-[1400px] md:py-5 text-2xl md:text-3xl" style={{color: 'orange'}}>
      Check Out The Top 10 Interior Designing Companies In Chennai
      </h1>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Chennai, a vibrant and dynamic city in India, is renowned for its rich cultural heritage and architectural beauty. As the city continues to grow and modernize, the demand for innovative and creative interior design solutions has surged. From luxurious residential spaces to functional commercial environments, the top interior design companies in Chennai are redefining the way we live and work. These firms are at the forefront of the industry, offering a blend of traditional elegance and contemporary style, tailored to meet the unique needs of their clients. This guide highlights the leading interior designers in Chennai, showcasing their expertise, creativity, and dedication to transforming spaces into stunning works of art. Whether you are looking to revamp your home or enhance your workspace, these companies provide comprehensive design services that cater to every aesthetic and functional requirement. Explore the profiles of the top 10 interior design companies in Chennai and discover how they can bring your vision to life.
      </p>
<section className="mb-8 py-6 px-4 grid grid-cols-1 gap-8">
  {table.map((item, index) => (
    <SingleQuestion2 {...item} key={index} />
  ))}
</section>
      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.designqube.in">1.DesignQube</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image1})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      DesignQube is a prominent interior design company in Chennai, specializing in sustainable and innovative architectural and interior design solutions. Known for their cutting-edge designs in residential, commercial, and hospitality projects, DesignQube focuses on creating functional and aesthetically pleasing environments that enhance the living experience. Their commitment to quality and customer satisfaction makes them a top choice for interior design services in Chennai.
      </p>
      <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span> Arun T</li>
        <li><span className='font-bold'>Year of Establishment:</span> 2010</li>
        <li><span className='font-bold'>Email:</span> chennai@designqube.in</li>
        <li><span className='font-bold'>Website:</span>  <span className='underline'><a href="https://www.designqube.in">https://www.designqube.in</a></span></li>
        <li><span className='font-bold'>Contact Number:</span>  +91 95000 00964</li>
        <li><span className='font-bold'>Address:</span> 8/12, Vaidyaraman Street, T Nagar, Chennai - 600017</li>
      </ul>
      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://infratechbuilders.in/">2. Infratech Builders</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image3})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Infratech Builders is a leading name in the interior design industry in Chennai, offering comprehensive home interior solutions through an innovative online platform. They provide end-to-end services, from design consultation to installation, ensuring a hassle-free experience for homeowners. Their team of experienced designers collaborates with trusted suppliers to deliver personalized and stylish interiors, making Livspace a preferred choice for home renovations and interior design in Chennai.
      </p>
      <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  Suresh, Laxmanan</li>
        <li><span className='font-bold'>Year of Establishment:</span>  2014</li>
        <li><span className='font-bold'>Headquarters:</span>  Chennai, Tamil Nadu</li>
        <li><span className='font-bold'>Website:</span> <span className='underline hover:text-primary'><a href="https://infratechbuilders.in/">https://infratechbuilders.in/</a></span></li>
        <li> <a href="tel:+917092805747"><span className='font-bold'>Contact Number:</span>  <span className='underline hover:text-primary'>+91 7092805747</span></a></li>
        <li> <a href="https://www.google.com/maps/place/13%C2%B004'23.7%22N+80%C2%B011'12.0%22E/@13.0732603,80.1841011,17z/data=!3m1!4b1!4m4!3m3!8m2!3d13.0732603!4d80.186676?hl=en&entry=ttu" target="_blank" rel="noopener noreferrer" ><span className='font-bold'>Address:</span>  <span className='underline hover:text-primary'>Door no: 74, Ettiappan street, Golden George Nagar, Nerkundram, Chennai-600107</span></a></li>
        <li><a href="mailto:enquiries@infratechbuilders.in"><span className='font-bold'>Email:</span>  <span className='underline hover:text-primary'>enquiries@infratechbuilders.in</span></a></li>
      </ul>


      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="http://www.aamphaa.com">3. Aamphaa Projects</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image2})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      L&T Infrastructure Ltd., India's largest construction company, boasts a robust global presence spanning over 50 countries. Established in 1938 and headquartered in Mumbai, L&T operates as a multinational corporation specializing in EPC projects and high-tech manufacturing. The company undertakes a diverse array of projects, including ports, marine projects, coastal and model studies, bridges, roads, airports, railways, metros, and transport planning.
      </p>
      <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  Karthikeyan K</li>
        <li><span className='font-bold'>Year of Establishment:</span>  2010</li>
        <li><span className='font-bold'>Email:</span> info@aamphaa.com</li>
        <li><span className='font-bold'>Website:</span>  <span className=' underline'><a href="http://www.aamphaa.com">http://www.aamphaa.com</a></span></li>
        <li><span className='font-bold'>Contact Number:</span>  +91 99410 15050</li>
        <li><span className='font-bold'>Address:</span> No 2/1, 5th Floor, Rathna Building, Triplicane High Road, Triplicane, Chennai - 600005</li>
      </ul>

 

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.deejos.com">4.Deejos Interiors</a></h1>
      
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image4})` }}
  >
  </div>
</div>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Deejos Interiors is a leading interior design company in Chennai known for its modern and contemporary design approach. They offer a wide range of interior design services for residential and commercial spaces, focusing on functionality, aesthetics, and client satisfaction. Their commitment to delivering high-quality and timely solutions has made them a trusted name in the Chennai interior design industry.
      </p>
      <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  Vijay Raj</li>
        <li><span className='font-bold'>Year of Establishment:</span>  2008</li>
        <li><span className='font-bold'>Email:</span>  info@deejos.com</li>
        <li> <span className='font-bold'>Website:</span> <span className='underline'><a href="https://www.deejos.com">https://www.deejos.com</a></span></li>
        <li><span className='font-bold'>Contact Number:</span>  +91 81100 71155</li>
        <li><span className='font-bold'>Address:</span>  New No: 63, 6th Avenue, Ashok Nagar, Chennai - 600083</li>
      </ul>

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.akshaya.com/">5.Akshaya Pvt. Ltd</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image5})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Akshaya Pvt. Ltd., founded in 1995, has successfully completed numerous projects since 2002. The company performs rigorous quality checks to ensure that their constructions meet client requirements. In Chennai, Akshaya Pvt. Ltd. thoroughly inspects each structure to ensure that every detail adheres to approved plans and specifications.      </p>
      <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  T Chitty Babu</li>
        <li><span className='font-bold'>Year of Establishment: </span> 1995</li>
        <li><span className='font-bold'>Headquarters:</span>  Chennai, Tamil Nadu</li>
        <li><span className='font-bold'>Website:</span>  <span className='underline'><a href="https://www.akshaya.com/">https://www.akshaya.com/</a></span></li>
        <li> <span className='font-bold'>Contact Number:</span> 044 4200 8811</li>
        <li><span className='font-bold'>Address: </span> Akshaya Pvt Ltd, 7th Floor, 117/1, LB Road, Adyar, Chennai - 600 020.</li>
      </ul>

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.indiabuilders.in/">6. India Builders Limited</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image6})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      India Builders Limited is a renowned and highly respected enterprise in Chennai, specializing in real estate development and construction. As a leading builder in the city, they are known for delivering practical and visually stunning apartments, featuring grand exteriors crafted with cutting-edge technology and equipped with essential amenities.
      </p>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Founded by Mr. J. Uttam Kumar and Mr. C. Thambikalaignan in 1987, India Builders has established itself as one of the top 10 real estate builders and developers in Chennai. Over the years, the company has expanded from managing a single project annually to becoming one of the city’s most prominent developers.
      </p>
        <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  Mr. J. Uttam Kumar and Mr. C. Thambikalaignan</li>
        <li><span className='font-bold'>Year of Establishment:</span>  1987</li>
        <li><span className='font-bold'>Headquarters: </span> Chennai, Tamil Nadu</li>
        <li><span className='font-bold'>Website:</span>  <span className='underline'><a href="https://www.indiabuilders.in/">https://www.indiabuilders.in/</a></span></li>
        <li><span className='font-bold'>Contact Number:</span>  090250 43553</li>
        <li><span className='font-bold'>Address:</span>  AA-36, 3rd Main Road, 3rd Street, Anna Nagar, Chennai, Tamil Nadu 600040</li>
      </ul>

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://appaswamy.com/">7.Appaswamy Real Estates Limited</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image7})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Appaswamy Real Estates Limited stands out as one of the best construction companies in Chennai, epitomising class in the realty industry. With an ambitious vision to inspire value creation, quality, modernity, and excellence, it prioritises a lasting bond with customers built on trust, ethics, and professionalism. This realty conglomerate builds residential as well as commercial properties at prominent locations.
      </p>
        <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  S Appaswamy</li>
        <li><span className='font-bold'>Year of Establishment: </span> 1987</li>
        <li><span className='font-bold'>Headquarters: </span> Chennai, Tamil Nadu</li>
        <li><span className='font-bold'>Website:</span>  <span className='underline'><a href="https://appaswamy.com/">https://appaswamy.com/</a></span></li>
        <li><span className='font-bold'>Contact Number:</span>  +91 80562 10606</li>
        <li><span className='font-bold'>Address:</span>  3, Mangesh Street, T.Nagar,Chennai - 600 017</li>
      </ul>

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.kgbuilders.com/">8.KG Foundations Pvt. Ltd.</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image8})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      KG is a highly esteemed construction company in Chennai, known for its extensive portfolio and established reputation. Having completed over 180 projects, KG has successfully served more than 8,000 homeowners and corporate clients. Renowned for its meticulous attention to detail and luxury standards, KG is a prominent name in the real estate industry.
      </p>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Currently managing over 8 million sq. ft. of development with plans to add another 10 million sq. ft. within the next 3-5 years, KG aims to create a cityscape filled with architectural marvels across residential, commercial, and hospitality sectors in Chennai.
      </p>
        <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  Kishorkumar Gokaldas</li>
        <li><span className='font-bold'>Year of Establishment:</span>  1980</li>
        <li><span className='font-bold'>Headquarters:</span>  Chennai, Tamil Nadu</li>
        <li><span className='font-bold'>Subsidiary:</span>  KG Technology Solutions Private Limited</li>
        <li><span className='font-bold'>Website:</span>  <span className='underline'><a href="https://www.kgbuilders.com/">https://www.kgbuilders.com/</a></span></li>
        <li><span className='font-bold'>Contact Number:</span>  +91 90251 00555</li>
        <li><span className='font-bold'>Address:</span>  Marble Arch, Ground Floor No. 5 Bishop Wallers Avenue East Mylapore, Chennai 600 004 Tamil Nadu, India</li>
      </ul>

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.alliancein.com">9. Alliance Group</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image9})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Alliance Infrastructure Projects Pvt. Ltd. is a dynamic and driven construction company based in Chennai. Known for its adherence to international standards, professionalism, and credibility, Alliance has achieved notable success with projects across major cities in South India.
      </p>
        <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  Manoj Namburu</li>
        <li><span className='font-bold'>Year of Establishment:</span>  2004</li>
        <li><span className='font-bold'>Headquarters:</span>  Banglore</li>
        <li><span className='font-bold'>Subsidiaries:</span>  Urbanrise, Alliance Asia, and more</li>
        <li><span className='font-bold'>Website:</span>  <span className='underline'><a href="https://www.alliancein.com">https://www.alliancein.com</a></span></li>
        <li><span className='font-bold'>Contact Number:</span>  +91 44 4354 6999</li>
        <li> <span className='font-bold'>Address:</span> Plot No: A, No. 36/1, Gandhi Mandapam Road, Kotturpuram, Chennai - 600 085.</li>
      </ul>

      <h1 className="font-bold hover:underline ml-2 md:ml-4 text-2xl mt-2" style={{color: 'orange'}}> <a href="https://www.shriramproperties.com">10. Shriram Properties</a></h1>
      <div className='md:max-w-[780px] md:h-[480px] max-w-[1300px] h-[265px] w-full m-auto py-6 px-4 relative group'>
  <div
    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
    style={{ backgroundImage: `url(${Image10})` }}
  >
  </div>
</div>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Shriram Properties is a prominent builder in Chennai, recognized for its dedication to transparency, trust, and providing enduring value. Their extensive range of projects meets diverse needs and preferences, ensuring that every homebuyer discovers a residence that matches their aspirations.
      </p>
      <p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
      Committed to creating homes that offer lasting value and stand the test of time, Shriram Properties is undoubtedly one of the top builders in Chennai. For those seeking a builder that emphasizes customer satisfaction, reliability, and long-term quality, Shriram Properties is the perfect choice.
      </p>
        <ul className='list-disc ml-6 md:ml-8 mr-4 max-w-[1400px]'>
        <li><span className='font-bold'>Founder:</span>  M. Murali</li>
        <li><span className='font-bold'>Year of Establishment:</span>  1995</li>
        <li><span className='font-bold'>Headquarters:</span>  Bengaluru, Karnataka</li>
        <li><span className='font-bold'>Subsidiaries:</span>  Shriram Upscale Spaces Private Limited, Global Entropolis Private Limited, and Shriprop Builders Private Limited, among others.</li>
        <li><span className='font-bold'>Website:</span>  <span className='underline'><a href="https://www.shriramproperties.com">https://www.shriramproperties.com</a></span></li>
        <li><span className='font-bold'>Contact Number:</span>   044-40014410</li>
        <li><span className='font-bold'>Address:</span>  Lakshmi Neela Rite Choice Chamber, 1st Floor, New No 9, Bazullah Road, T Nagar, Chennai - 600017</li>
      </ul>


      <p className="text-justify ml-2 md:ml-4  max-w-[1400px] text-2xl mt-2 font-bold" style={{color: 'orange'}}>Conclusion:</p>
<p className='text-justify ml-2 md:ml-4 mr-4 max-w-[1400px]'>
Choosing the right and highly qualified top 10 construction companies in Chennai can greatly benefit both you and your project. Partnering with a trustworthy and skilled builder or developer from this list ensures that your construction needs are handled efficiently and professionally, allowing you to remain worry-free throughout the process. It is important to provide a clear building plan outlining how you envision the final structure. Once the plan is submitted, it’s best to step back and allow the construction process to unfold. Ensure that the construction is executed flawlessly, as it’s more than just stone and brick—it represents your vision and investment. The building should not only meet your expectations in terms of quality but also add a touch of luxury and comfort to its surroundings. Ultimately, the goal is to safeguard your lifestyle and ensure that your plan is executed without unnecessary risk. Entrusting the construction company with your project will save you both time and money while achieving the desired results.
      </p>
      </div>
      </div>
      <p className="text-center py-2 mb-8 text-2xl md:ml-4 max-w-[1400px] text-2xl mt-2 font-bold" style={{color: 'orange'}}>
        Frequently Asked Questions:
      </p>
      <section className="max-w-xl mx-auto mb-8 px-4 grid grid-cols-1 gap-8">
        {cards.map((card, index) => (
          <SingleQuestion {...card} key={index} />
        ))}
      </section>
    </div>

  );
}

const SingleQuestion = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="border border-black rounded-lg bg-white">
      <article className="flex items-center justify-between p-4 lg:p-6">
        <h2
          className="cursor-pointer border-gray-400"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {question}
        </h2>
        <button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <BiMinus /> : <BsPlusLg />}
        </button>
      </article>

      {showAnswer && (
        <article className="border-t border-gray-400 p-4 lg:p-6">
          <p>{answer}</p>
        </article>
      )}
    </div>
  );
}


const SingleQuestion2 = ({ question, answers }) => {
  const [showAnswer, setShowAnswer] = useState(true); // Default state is true to keep answers always opened

  return (
    <div className="border border-black rounded-lg bg-primary md:width-320px width-500px">
      <article className="flex items-center justify-between p-4 lg:p-6">
        <h2
          className="cursor-pointer text-center font-bold text-white"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {question}
        </h2>
        <button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? <BiMinus className="text-white" /> : <BsPlusLg className="text-white" />}
        </button>
      </article>

      {showAnswer && (
        <article className="border-t border-black p-4 lg:p-6 font-bold text-white">
          <ul>
            {answers.map((answer, index) => (
              <li
                key={index}
                style={{ listStyleType: 'disc', listStylePosition: 'inside' }}
              >
                {answer}
              </li>
            ))}
          </ul>
        </article>
      )}
    </div>
  );
};

export default HomeConstructionsTop10;
