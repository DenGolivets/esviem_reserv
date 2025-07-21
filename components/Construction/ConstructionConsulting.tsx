import Link from "next/link";
import React from "react";

const ConstructionConsulting = () => {
  return (
    <section
      id="construction-section"
      className="min-h-screen w-full flex items-center justify-center"
    >
      <div className=" flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Будівельний консалтинг
          </h2>
          <p className="text-xl text-gray-300">Будівництво та проектування</p>
        </div>
        <Link
          href={"/construction-consulting"}
          className=""
        >
          <h1 className="text-4xl font-bold text-white">Страница</h1>
        </Link>
      </div>
    </section>
  );
};

export default ConstructionConsulting;
