'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

import ImageRound from '@components/common/Image';

const Education = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <section className="relative flex flex-col gap-3 py-16">
      <div className="flex flex-col">
        <span className="text-sm uppercase tracking-[8px] text-gray-400 mb-4 px-6">
          Education
        </span>
        <span className="text-lg uppercase font-bold tracking-widest px-6">
          My certifications
        </span>
      </div>
      <p className="text-base font-light tracking-widest leading-8 px-6 my-8">
        The Big Oxmox advised her not to do so, because there were thousands of
        bad Commas, wild Question Marks and devious Semikoli, but the Little
        Blind Text didn’t listen. She packed her seven versalia, put her initial
        into the belt and made herself on the way.
      </p>
      <div className="container mx-auto p-4">
        <motion.div
          transition={{ layout: { duration: 1, type: 'spring' } }}
          layout
          className="group relative flex flex-col gap-4 items-center p-6 pb-14 bg-white shadow-common rounded-md border-b-[1px] w-full">
          <motion.div
            layout="position"
            className="w-full flex items-center gap-6">
            <ImageRound
              alt={`Logo school`}
              src={'/images/vku.png'}
              className={`w-32 h-16`}
            />
            <div className="flex-grow flex flex-col gap-2 tracking-widest text-sm">
              <h3 className="font-bold text-lg">
                VIETNAM - KOREA UNIVERSITY OF INFORMATION AND COMMUNICATION
                TECHNOLOGY
              </h3>
              <span>
                Major: <strong>Computer science</strong>
              </span>
              <span>
                Term: <strong>2018 - 2023</strong>
              </span>
            </div>
          </motion.div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-sm font-light tracking-widest leading-8">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
            </motion.div>
          )}
          <div
            className={`absolute bottom-1 hover:cursor-pointer p-4 ${isOpen && 'rotate-180'}`}>
            <ImageRound
              alt={`Extend icon`}
              src={'/icons/extend.svg'}
              className={`w-4 h-4 animate-bounce`}
              onClick={() => setisOpen(!isOpen)}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
