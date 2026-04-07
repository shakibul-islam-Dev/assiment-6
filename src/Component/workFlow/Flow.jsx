import React from "react";

const Flow = () => {
  return (
    <section className=" my-20 bg-linear-to-r from-[#4F39F6] to-[#9514FA]  py-16 px-6 w-full text-center text-white shadow-2xl">
      <div className=" container mx-auto bg-linear-to-r from-[#4F39F6] to-[#9514FA]  py-16 px-6 w-full text-center text-white ">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-purple-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="bg-white text-[#4F39F6] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all active:scale-95 cursor-pointer">
            Explore Products
          </button>

          <button className="border-2 border-white/40 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all active:scale-95 cursor-pointer">
            View Pricing
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-purple-200 opacity-90">
          <span>• 14-day free trial</span>
          <span>• No credit card required</span>
          <span>• Cancel anytime</span>
        </div>
      </div>
    </section>
  );
};

export default Flow;
