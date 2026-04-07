import React, { use } from "react";

const Rating = ({ starsDatas }) => {
  const data = use(starsDatas);

  const allStats = data?.stats || [];

  return (
    <section className="px-10 py-16 w-full flex flex-col md:flex-row items-center justify-around gap-12 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
      {allStats.map((item, index) => (
        <React.Fragment key={item.id || index}>
          <div className="stat place-items-center flex-1">
            <div className="stat-value text-4xl font-bold">{item.value}</div>
            <div className="stat-desc text-purple-100 opacity-80">
              {item.label}
            </div>
          </div>

          {index !== allStats.length - 1 && (
            <div className="hidden md:block h-12 w-px bg-white/30"></div>
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default Rating;
