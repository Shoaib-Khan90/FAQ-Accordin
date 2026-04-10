import Question from "./Question";
import "./Faq.css";

export default function FAQ() {
  return (
    <>
      <h1>Project 2: FAQ/Accordion</h1>
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="questions">
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
    </>
  );
}

const questions = [
  {
    id: 1,
    title: "Is this a good product?",
    info:
      "Yes this is a good product for hair and their quality is very good "
  },
  {
    id: 2,
    title: "How much does it cost?",
    info:
      "This are only 10$ cost"
  },
  {
    id: 3,
    title: "When can I get it?",
    info:
      "Order is my website and get it"
  }
];
