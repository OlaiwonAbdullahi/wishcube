import React from "react";

const Details = () => {
  return (
    <div className=" flex flex-col gap-4">
      <div className=" flex flex-row gap-6 items-center">
        <div className=" rounded-xl">
          <img
            src="https://placehold.co/400"
            alt=""
            className=" h-40 w-40 rounded-xl"
          />
        </div>
        <div className="">
          <h2 className=" text-3xl font-bold">EZ Testing</h2>
          <p className=" text-lg">
            Since 2004, EZ Texting has pioneered the SMS industry, empowering
            over 230,000 customers to launch and scale their text marketing
            efforts with powerful features, seamless integrations, and flexible
            plans.
          </p>
        </div>
      </div>
      <div className=" flex flex-col gap-2">
        <h2 className=" text-3xl font-bold">What Is This</h2>
        <p className=" text-lg">
          Boostability &apos; s SEO service with 10 hours makes it possible for
          businesses like yours to compete online by moving your website higher
          up on the search engines. Each day, search engines like Google are
          used by 5.6 billion people. And over 81% of people search online
          before ever making a purchase. There are 1.8 billion Google searches
          every single day!
        </p>
        <p className=" text-lg">
          With Boostability SEO, we will help your website rank higher, get
          noticed, and drive more sales. Boostability SEO helps you optimize
          your website for search engines based on your business category and
          your location. Please feel free to call Sales Support (855-382-9030)
          or use our Pricing Tool. You can purchase additional hours as an
          add-on if the account will require more than the base 10 hours.
        </p>
      </div>
      <div className=" flex flex-col gap-2">
        <h2 className=" text-3xl font-bold">Sales Support</h2>
        <p className=" text-lg">
          Boostability Sales Managers get access to:
          <ul className=" list-disc list-inside p-2">
            <li>
              SEO Sales Support - Our dedicated team of SEO Sales experts can
              help you develop sales strategies, provide SEO training and sales
              presentations, and answer any questions you may have about search
              engine optimization.
            </li>
            <li>
              Client Success Team - This group provides all of the details on
              SEO campaign activities and progress updates. They will also
              provide reporting and analysis to assist you in communicating our
              value to your clients.
            </li>
            <li>
              Partner Growth Manager: Nic Padilly - For all questions related to
              partnering with Boostability, Nic can be reached at +6131009704651
              and nic.padilly@boostability.com.
            </li>
            <li>
              Are you in Australia? - We have dedicated contacts for your
              Contact SEO Sales Support at +6131009704651 and Client Success
              Manager at +6131009704651 or email clientsuccess@boostability.com.
            </li>
          </ul>
        </p>
      </div>
      <div className="">
        <h2 className=" text-3xl font-bold">Why TZ Texting Is so IMportant</h2>
        <p className=" text-lg">
          Here&apos;s why your clients need to optimise their SEO
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/UAqIlTUoEQg?si=L0BMrEndwB_ZaOOn&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Details;
