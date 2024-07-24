import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";

export const questions = [
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated \"help\" channel! If you haven't joined yet, you can get an invite to our Discord server here.",
  },
  {
    question: "How do I submit my solution?",
    answer:
      "We'd recommend reading our complete guide to submitting solutions. If you get stuck and need help, please feel free to ask questions in our Discord server, and we'll help you submit your project.",
  },
  {
    question: "Is there an official solution I can take a look at?",
    answer:
      "We don't provide \"official\" solutions for the challenges. This is because there is no single perfect way to complete a challenge. Instead, you're encouraged to review other people's code in the community. You can learn so much by seeing how other people have approached the same challenges and giving them feedback.",
  },
  {
    question: "Do I get a code review when I post my solution?",
    answer:
      "Frontend Mentor is a collaborative learning community where everyone can give feedback to each other. If you'd like to receive feedback from the community, please be sure to post a question when you submit your solution. The more specific you can be, the better. Being clear with your questions means you're much more likely to receive valuable feedback from others.",
  },
  {
    question: "Can I use libraries/frameworks on these projects?",
    answer:
      "Yes! Our challenges provide professional designs but there are no rules on what tools to use. So feel free to use anything you like to build your projects.",
  },
  {
    question: "Can I use these projects in my portfolio?",
    answer:
      "Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!",
  },
  {
    question: "How often are new challenges added?",
    answer:
      "We launch a new challenge every two weeks. We alternate between free and premium challenge launches, so we launch one free and one premium challenge each month.",
  },
  {
    question:
      "What is the difference between the desktop-design, mobile-design, and desktop-preview images in my starter code?",
    answer:
      "The desktop-design and mobile-design images show you how the layout should look at large and small screen sizes. The desktop design is 1440px wide, and the mobile design is 375px. However, try building projects to look good on all screen sizes. The desktop-preview image is a preview image used in the README file. You don't need to reference this while building the project.",
  },
  {
    question:
      "Can I use these challenges within my own free or commercial content/tutorials/projects?",
    answer:
      "Please visit our License page to learn more about how our challenges can be used within your own content. If you're unsure about anything, please feel free to contact us at hi@frontendmentor.io and we'll be more than happy to answer your questions.",
  },
];

export default function Faq() {
  const [cards] = useState(questions);

  return (
    <>
      <section className="max-w-xl mx-auto py-20 px-4">
        <h1 className="text-center uppercase tracking-widest font-bold mb-8">
          Challenge Faqs
        </h1>

        <section className="grid grid-cols-1 gap-8">
          {cards.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </section>
      </section>
    </>
  );
}

function SingleQuestion({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div className="border border-gray-400 rounded-lg bg-white">
        <article className="flex items-center justify-between p-4 lg:p-6">
          <h2
            className="cursor-pointer"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {question}
          </h2>
          <ul>
            {!showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(true)}>
                  <BsPlusLg />
                </button>
              </li>
            )}
            {showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(false)}>
                  <BiMinus />
                </button>
              </li>
            )}
          </ul>
        </article>

        <article
          className={showAnswer ? "border-t border-gray-400 p-4 lg:p-6" : ""}
        >
          {showAnswer && <p>{answer}</p>}
        </article>
      </div>
    </>
  );
}
