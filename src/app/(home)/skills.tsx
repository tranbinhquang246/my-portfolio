import Card from '@components/modules/Skills/Card';

import { skills } from '@constants/personal';

const Skills = () => {
  return (
    <section className="relative flex flex-col gap-3">
      <div className="flex flex-col">
        <span className="text-sm uppercase tracking-[8px] text-gray-400 mb-4 px-6">
          MY SPECIALTY?
        </span>
        <span className="text-lg uppercase font-bold tracking-widest px-6">
          My skill
        </span>
      </div>
      <p className="text-base font-light tracking-widest leading-8 px-6 my-8">
        The Big Oxmox advised her not to do so, because there were thousands of
        bad Commas, wild Question Marks and devious Semikoli, but the Little
        Blind Text didn’t listen. She packed her seven versalia, put her initial
        into the belt and made herself on the way.
      </p>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {skills.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              icon={item.icon}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
