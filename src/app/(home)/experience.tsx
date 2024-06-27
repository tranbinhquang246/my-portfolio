import Card from '@components/modules/Experiences/Card';
import { companies } from '@constants/company';

const Experience = () => {
  return (
    <section className="relative flex flex-col gap-3">
      <div className="flex flex-col">
        <span className="text-sm uppercase tracking-[8px] text-gray-400 mb-4 px-6">
          EXPERIENCE
        </span>
        <span className="text-lg uppercase font-bold tracking-widest px-6">
          WORK EXPERIENCE
        </span>
      </div>
      <p className="text-base font-light tracking-widest leading-8 px-6 my-8">
        The Big Oxmox advised her not to do so, because there were thousands of
        bad Commas, wild Question Marks and devious Semikoli, but the Little
        Blind Text didn’t listen. She packed her seven versalia, put her initial
        into the belt and made herself on the way.
      </p>
      <div className="container mx-auto relative w-full p-4">
        <div className="flex flex-col gap-4 before:content-[''] before:absolute before:block before:w-1 before:bg-[#f2f3f7] before:top-5 before:bottom-5 before:ml-[27px] before:z-0">
          {companies.map((element, index) => (
            <Card key={index} {...element} />
          ))}
          <div className="flex gap-6 z-[1]">
            <div className="h-fit flex justify-center w-[60px] min-w-[60px]">
              <div className="w-8 h-8 border-4 bg-white border-[#f2f3f7] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
