import React from "react";
const Faq = () => {
  return (
    <main>
      {/* Section 1 */}
      <section className="flex overflow-hidden flex-col items-center px-20 pt-32 pb-80 w-full text-center text-white bg-amber-500 rounded-bl-3xl rounded-br-3xl max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col mb-0 max-w-full w-[731px] max-md:mb-2.5">
          <h2 className="self-center text-4xl leading-none max-md:max-w-full">
            How can we help You?
          </h2>
          <p className="mt-9 text-xl leading-tight max-md:max-w-full">
            Search for our advice and answer with my team real quick or get in
            touch
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="flex flex-wrap gap-10 justify-center items-center text-4xl leading-none text-center text-black whitespace-nowrap mt-10">
        <article className="flex overflow-hidden flex-col justify-center self-stretch px-9 py-12 my-auto text-4xl leading-none bg-white rounded-3xl border-solid border-[3px] border-gray-300 hover:bg-yellow-300 hover:border-yellow-300 transition duration-300 min-w-[240px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[300px] max-md:px-5 cursor-pointer">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e05b3e4adf92216b6f86bc4109b046cd01d22b0561b5ddd4090551932fc24107?placeholderIfAbsent=true&apiKey=59e3e73395134231acd3cc9fc0db94c8"
            className="object-contain self-center max-w-full aspect-square w-[120px]"
            alt="FAQ icon"
          />
          <a
            href="#faq"
            className="mt-5 mx-auto text-4xl leading-none bg-transparent border-none text-left focus:outline-none"
          >
            FAQ
          </a>
        </article>

        <article className="flex overflow-hidden flex-col justify-center self-stretch px-9 py-12 my-auto text-4xl leading-none bg-white rounded-3xl border-solid border-[3px] border-gray-300 hover:bg-yellow-300 hover:border-yellow-300 transition duration-300 min-w-[240px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[300px] max-md:px-5 cursor-pointer">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e05b3e4adf92216b6f86bc4109b046cd01d22b0561b5ddd4090551932fc24107?placeholderIfAbsent=true&apiKey=59e3e73395134231acd3cc9fc0db94c8"
            className="object-contain self-center max-w-full aspect-square w-[120px]"
            alt="Card icon"
          />
          <a
            href="#faq"
            className="mt-5 mx-auto text-4xl leading-none bg-transparent border-none text-left focus:outline-none"
          >
            Card
          </a>
        </article>

        <article className="flex overflow-hidden flex-col justify-center self-stretch px-9 py-12 my-auto text-4xl leading-none bg-white rounded-3xl border-solid border-[3px] border-gray-300 hover:bg-yellow-300 hover:border-yellow-300 transition duration-300 min-w-[240px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[300px] max-md:px-5 cursor-pointer">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e05b3e4adf92216b6f86bc4109b046cd01d22b0561b5ddd4090551932fc24107?placeholderIfAbsent=true&apiKey=59e3e73395134231acd3cc9fc0db94c8"
            className="object-contain self-center max-w-full aspect-square w-[120px]"
            alt="Individual icon"
          />
          <a
            href="#faq"
            className="mt-5 mx-auto text-4xl leading-none bg-transparent border-none text-left focus:outline-none"
          >
            Individual
          </a>
        </article>
      </section>

      {/* FAQ Section */}
      <div className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
        <div className="mx-auto px-5">
          <div className="flex flex-col items-center">
            <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
              FAQ
            </h2>
            <p className="mt-3 text-lg text-neutral-500 md:text-xl">
              Frequenty asked questions
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>How does the billing work?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Springerdata offers a variety of billing options, including
                  monthly and annual subscription plans, as well as
                  pay-as-you-go pricing for certain services. Payment is
                  typically made through a credit card or other secure online
                  payment method.
                </p>
              </details>
            </div>

            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>Can I get a refund for my subscription?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  We offer a 30-day money-back guarantee for most of its
                  subscription plans. If you are not satisfied with your
                  subscription within the first 30 days, you can request a full
                  refund. Refunds for subscriptions that have been active for
                  longer than 30 days may be considered on a case-by-case basis.
                </p>
              </details>
            </div>

            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>How do I cancel my subscription?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  To cancel your subscription, you can log in to your account
                  and navigate to the subscription management page. From there,
                  you should be able to cancel your subscription and stop future
                  billing.
                </p>
              </details>
            </div>

            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>Is there a free trial?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  We offer a free trial of our software for a limited time.
                  During the trial period, you will have access to a limited set
                  of features and functionality, but you will not be charged.
                </p>
              </details>
            </div>

            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>How do I contact support?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  If you need help with our platform or have any other
                  questions, you can contact the company's support team by
                  submitting a support request through the website or by
                  emailing support@ourwebsite.com.
                </p>
              </details>
            </div>

            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>Do you offer any discounts or promotions?</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  We may offer discounts or promotions from time to time. To
                  stay up-to-date on the latest deals and special offers, you
                  can sign up for the company's newsletter or follow it on
                  social media.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <section className="flex overflow-hidden flex-col justify-center items-center px-64 py-20 max-md:px-5">
        <h2 className="flex-1 text-3xl leading-7 text-center text-slate-500 max-md:max-w-full">
          Didn't find the answer to your question?
        </h2>
        <p className="mt-8 text-xl leading-tight text-center text-black max-md:max-w-full">
          Get in touch with us for additional services and customer pricing.
        </p>
        <a
          href="#contact"
          className="inline-block px-5 py-2 mt-8 text-base font-semibold text-white uppercase bg-amber-500 rounded-[40px] max-md:px-5 max-w-xs text-center"
          role="button"
          tabIndex={0}
        >
          Contact Us
        </a>
      </section>
    </main>
  );
};

export default Faq;
