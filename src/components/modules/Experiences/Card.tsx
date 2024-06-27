'use client';
import { motion } from 'framer-motion';

import ImageRound from '@components/common/Image';

type CardProps = {
  poisition: string;
  logo: string;
  year: string;
  content: string;
};

const Card = ({ poisition, content, logo, year }: CardProps) => {
  return (
    <motion.div
      className="flex gap-6 z-[1]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}>
      <motion.div
        className="h-fit w-[60px] min-w-[60px]"
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -100 },
        }}
        transition={{ duration: 0.5 }}>
        <ImageRound
          alt={`Experience`}
          src={logo}
          className="w-14 h-14 border-4 border-[#f2f3f7] rounded-full"
        />
      </motion.div>
      <motion.div
        className="flex-grow relative bg-[#f2f3f7] p-6 flex flex-col gap-8 after:contents-[''] after:block after:absolute after:w-0 after:h-0 after:border-[9px] after:border-l-0 after:border-transparent after:border-r-[#f2f3f7] after:border-slate-800 after:left-0 after:top-4 after:-ml-2"
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 100 },
        }}
        transition={{ duration: 0.5 }}>
        <div className="flex gap-2 items-center">
          <h2 className="text-xl font-medium tracking-[3px]">{poisition}</h2>
          <span className="text-md tracking-widest opacity-40">{year}</span>
        </div>
        <p className="text-base font-light tracking-widest leading-8 whitespace-normal">
          {content}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Card;
