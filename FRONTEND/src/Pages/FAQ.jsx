import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Search,
  Package,
  CreditCard,
  Truck,
  RotateCcw,
  ShoppingBag,
  UserRound,
  MessageCircle,
} from "lucide-react";
import "./FAQ.css";

const faqData = [
  {
    category: "Orders",
    icon: Package,
    questions: [
      {
        question: "How do I place an order?",
        answer:
          "Browse our collection, select your favourite bag, add it to your cart, and proceed to checkout. Follow the checkout instructions to complete your order.",
      },
      {
        question: "How can I track my order?",
        answer:
          "Once order tracking is available, you will be able to use your order confirmation and tracking details to follow your delivery.",
      },
      {
        question: "Can I change or cancel my order?",
        answer:
          "Please contact our customer care team as soon as possible with your order details. Changes or cancellations may depend on whether your order has been processed.",
      },
    ],
  },
  {
    category: "Payments",
    icon: CreditCard,
    questions: [
      {
        question: "Which payment methods do you accept?",
        answer:
          "Available payment methods will be shown at checkout. Please review the options there before completing your purchase.",
      },
      {
        question: "Is shopping on LUXORA secure?",
        answer:
          "We aim to provide a secure shopping experience. Always complete payments through the official checkout and never share your password or banking PIN.",
      },
    ],
  },
  {
    category: "Shipping & Delivery",
    icon: Truck,
    questions: [
      {
        question: "Do you deliver across South Africa?",
        answer:
          "Delivery coverage and available shipping options should be confirmed at checkout before you place your order.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Delivery times depend on your location and the shipping option available. Your estimated delivery information should be confirmed during checkout.",
      },
      {
        question: "How much does shipping cost?",
        answer:
          "Any applicable delivery fees should be displayed during checkout before you confirm your order.",
      },
    ],
  },
  {
    category: "Returns & Refunds",
    icon: RotateCcw,
    questions: [
      {
        question: "Can I return a bag?",
        answer:
          "Please contact customer care before returning an item. The return eligibility, time limits, and conditions will depend on the store's published returns policy.",
      },
      {
        question: "How do refunds work?",
        answer:
          "If a refund is approved under the applicable returns policy, the refund process and expected timing will be communicated to you.",
      },
    ],
  },
  {
    category: "Products",
    icon: ShoppingBag,
    questions: [
      {
        question: "How do I choose the right bag?",
        answer:
          "Explore our bag categories and product descriptions to compare styles, sizes, and features before choosing a bag that suits your needs.",
      },
      {
        question: "Will the product look exactly like the picture?",
        answer:
          "We aim to show products as accurately as possible. Actual colours may look slightly different depending on lighting and your screen settings.",
      },
    ],
  },
  {
    category: "Account",
    icon: UserRound,
    questions: [
      {
        question: "Do I need an account to shop?",
        answer:
          "Account requirements depend on the checkout features enabled on the website. Follow the instructions shown when you are ready to purchase.",
      },
      {
        question: "What if I forget my password?",
        answer:
          "Use the password recovery option if it is available on the login page. If you still need help, contact customer care.",
      },
    ],
  },
];

function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = faqData
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (item) =>
          item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          category.category.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  const toggleQuestion = (id) => {
    setActiveQuestion((current) => (current === id ? null : id));
  };

  return (
    <main className="luxora-faq">
      <section className="faq-hero">
        <span className="faq-eyebrow">THE LUXORA EXPERIENCE</span>
        <h1>Frequently Asked Questions</h1>
        <p>
          Everything you need to know about shopping with LUXORA.
        </p>

        <div className="faq-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>FAQ</span>
        </div>
      </section>

      <section className="faq-main">
        <div className="faq-heading">
          <span className="faq-eyebrow">HERE TO HELP</span>
          <h2>How can we help you?</h2>
          <p>
            Find answers about orders, payments, delivery, and more.
          </p>
        </div>

        <div className="faq-search">
          <Search size={19} />
          <input
            type="search"
            placeholder="Search for a question..."
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
              setActiveQuestion(null);
            }}
            aria-label="Search frequently asked questions"
          />
        </div>

        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <section
                className="faq-category"
                key={category.category}
              >
                <div className="faq-category-heading">
                  <span className="faq-category-icon">
                    <CategoryIcon size={20} />
                  </span>
                  <h3>{category.category}</h3>
                </div>

                <div className="faq-list">
                  {category.questions.map((item) => {
                    const questionId =
                      `${category.category}-${item.question}`;
                    const isOpen = activeQuestion === questionId;
                    const answerId =
                      `answer-${category.category}-${item.question}`
                        .replace(/[^a-zA-Z0-9_-]/g, "-");

                    return (
                      <div
                        className={`faq-item ${isOpen ? "open" : ""}`}
                        key={questionId}
                      >
                        <button
                          type="button"
                          className="faq-question"
                          onClick={() => toggleQuestion(questionId)}
                          aria-expanded={isOpen}
                          aria-controls={answerId}
                        >
                          <span>{item.question}</span>
                          <ChevronDown
                            size={19}
                            className="faq-chevron"
                          />
                        </button>

                        {isOpen && (
                          <div
                            className="faq-answer"
                            id={answerId}
                          >
                            <p>{item.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })
        ) : (
          <div className="faq-empty">
            <Search size={28} />
            <h3>No questions found</h3>
            <p>Try another search term.</p>
            <button
              type="button"
              onClick={() => setSearchTerm("")}
            >
              Clear Search
            </button>
          </div>
        )}

        <section className="faq-contact">
          <div className="faq-contact-icon">
            <MessageCircle size={26} />
          </div>
          <div>
            <h3>Still have questions?</h3>
            <p>Our customer care team is here to help.</p>
          </div>
          <Link to="/contact" className="faq-contact-button">
            Contact Us
          </Link>
        </section>
      </section>
    </main>
  );
}

export default FAQ;