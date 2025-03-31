import React from "react";

const HowItWorksSection = () => {
  return (
    <section className="bg-lightMode-background-main dark:bg-darkMode-background-main py-16 md:py-24">
      <div className="container mx-auto  px-4 md:px-6 lg:px-8">
        <div className="mb-8 md:mb-12">
          <h2 className="text-lightMode-brand-primary dark:text-darkMode-brand-accent font-medium text-lg">
            USECASE
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lightMode-text-heading dark:text-darkMode-text-heading mb-4">
            How it works
          </h3>
          <p className=" text-lightMode-text-main dark:text-darkMode-text-main mb-12 max-w-3xl ">
            Our system integrates state-of-the-art IoT sensors within your
            physical assets—be it a fleet of vehicles or specialized machinery.
            These sensors relay real-time data such as passenger counts,
            distance traveled, routes taken, and current locations to your
            personalized dashboard. The data is then immutably recorded on our
            blockchain network, ensuring that every payment confirmation is
            securely verified before the asset is activated for use. This
            automated process not only provides transparency but also safeguards
            your investment, giving you the peace of mind you deserve. <br />
            Watch our explainer video featuring Manny to see Trykey Protocol in action.
          </p>
        </div>

        <div className="relative w-full pb-[56.25%]">
          <iframe
            src="https://www.youtube.com/embed/fdWlx5hECK4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
