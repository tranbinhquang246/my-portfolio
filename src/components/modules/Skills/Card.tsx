'use client';
import { motion } from 'framer-motion';

import ImageRound from '@components/common/Image';

type CardProps = {
  title: string;
  icon: any;
  color: string;
};

const arrow = {
  initial: { rotate: 0, scale: 1 },
  animate: { rotate: 0, scale: 1 },
};

const Card = ({ title, icon, color }: CardProps) => {
  return (
    <motion.div
      className={`group flex flex-col gap-4 items-center gap- p-6 bg-white shadow-common border-b-[1px]`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      whileHover="animate"
      style={{ borderColor: color }}>
      <motion.div
        className={`p-4 flex items-center justify-center text-white rounded-full`}
        variants={arrow}
        style={{ backgroundColor: color }}>
        <ImageRound alt={`${title} icon`} src={icon} className="w-8 h-8" />
      </motion.div>
      <h3 className="uppercase font-bold tracking-widest">{title}</h3>
      <p className="text-center text-sm font-light tracking-widest leading-8">
        Separated they live in Bookmarksgrove right at the coast of the
        Semantics. Separated they live in Bookmarksgrove right at the coast of
        the Semantics.
      </p>
    </motion.div>
  );
};

export default Card;
