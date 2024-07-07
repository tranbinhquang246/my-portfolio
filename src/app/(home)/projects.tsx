import Link from 'next/link';

import ImageRound from '@components/common/Image';

import { projects } from '@constants/projects';
import { ProjectType, StatusProjectType } from '@enum/project';

const Projects = () => {
  return (
    <section className="relative flex flex-col gap-3 py-16">
      <div className="flex flex-col">
        <span className="text-sm uppercase tracking-[8px] text-gray-400 mb-4 px-6">
          Projects
        </span>
        <span className="text-lg uppercase font-bold tracking-widest px-6">
          Some Things I&apos;ve Built
        </span>
      </div>
      <p className="text-base font-light tracking-widest leading-8 px-6 my-8">
        The Big Oxmox advised her not to do so, because there were thousands of
        bad Commas, wild Question Marks and devious Semikoli, but the Little
        Blind Text didn’t listen. She packed her seven versalia, put her initial
        into the belt and made herself on the way.
      </p>
      <div className="w-full p-4 flex flex-col gap-14">
        {projects.map((element, index) => (
          <Link
            href={element.url}
            key={index}
            className="group relative z-0 flex gap-4 hover:bg-gray-100 p-4 rounded-2xl transition-all duration-300">
            <div className="relative w-[30%] h-48 min-w-[30%]">
              <ImageRound
                loading="lazy"
                src={element.background}
                alt={`Image of project ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div
                className={`w-full h-full absolute inset-0 rounded-2xl bg-green-900/50 ${element.status === StatusProjectType.WORKING ? 'flex' : 'hidden'} group-hover:hidden justify-center items-center transition-all duration-300`}>
                <span className="text-white font-bold text-3xl">
                  _{element.status}_
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center text-xl font-medium tracking-[3px]">
                <h3 className="group-hover:underline group-hover:underline-offset-2">
                  {element.name}
                </h3>
                -
                <p className="opacity-40 !text-base">
                  {element.type === ProjectType.COMPANY
                    ? 'Company project'
                    : 'Personal project'}
                </p>
              </div>
              <span className="-mt-2 text-md tracking-widest opacity-40">
                Time: {element.time || 'WIP'}
              </span>
              <p className="text-base font-light tracking-widest leading-8 whitespace-normal mt-2">
                {element.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {element.skill.map((skill, idx) => (
                  <div
                    key={`skill ${idx}`}
                    className="bg-green-900 text-white px-3 py-1 rounded-3xl">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
