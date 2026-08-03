import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes. Every new account includes a 14-day free trial with full access to all Professional features. No credit card is required.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely. You can upgrade, downgrade or cancel your subscription at any time from your account dashboard.",
  },
  {
    question: "Does FlexStore support multiple team members?",
    answer:
      "Yes. Invite your team, assign different roles and collaborate securely with custom permissions.",
  },
  {
    question: "Which payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, along with popular payment providers such as Stripe and PayPal.",
  },
  {
    question: "Is my business data secure?",
    answer:
      "Yes. All data is encrypted in transit and at rest. We use industry-standard security practices to keep your information protected.",
  },
];

export default function FAQList() {
  return (
    <div className="space-y-5">
      {faqs.map((faq) => (
        <FAQItem
          key={faq.question}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
}