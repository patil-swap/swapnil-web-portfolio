import { motion } from "framer-motion";
import { MVP_CARDS } from "../constants";
import { useState } from "react";

const MvpCards = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const toggleCard = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.5
      }
    })
  };
return (
    <section className="px-6 py-10 min-h-screen" id="mvp-cards">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        MVP Ideas
      </h1>
      <div className="h-1 w-20 bg-white mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MVP_CARDS.map((card, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg p-6 h-full backdrop-blur-3xl bg-stone-500/10"
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={childVariants}
          >
            <h2 className="text-xl font-semibold mb-2 hover:underline underline-offset-4 decoration-indigo-400">
              {card.title}
            </h2>
            <div className="text-sm space-y-2">
              <p><span className="font-semibold">Problem:</span> {card.problem}</p>
              <p><span className="font-semibold">Idea:</span> {card.idea}</p>
              <p><span className="font-semibold">Target User:</span> {card.target_user}</p>
              <div>
                <p
                  onClick={() => toggleCard(index)}
                  className="cursor-pointer text-sm underline mt-2"
                >
                  {expandedCards[index] ? "Hide MVP" : "Show MVP"}
                </p>
                {expandedCards[index] && (
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    {card.mvp.map((point, i) => (
                      <motion.li
                        key={i}
                        className="text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {card.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white/10 text-sm px-2 py-1 rounded-md text-white font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MvpCards;
