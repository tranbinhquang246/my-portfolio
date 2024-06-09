import AnimatedCounter from '@components/common/AnimatedCounter';
import ImageRound from '@components/common/Image';

import { personalInfo } from '@constants/personal';

const AboutMe = () => {
  return (
    <section className="relative py-16 flex flex-col gap-3">
      <div className="flex flex-col mt-8 px-6">
        <span className="text-sm uppercase tracking-[8px] text-gray-400 mb-4">
          Who Am I?
        </span>
        <span className="text-lg uppercase font-bold tracking-widest">
          A brief introduction about myself
        </span>
        <div className="flex flex-col gap-2 my-8 text-base font-light tracking-widest leading-8">
          <p>
            <strong className="font-bold">Hi I&apos;m Tran Binh Quang </strong>
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            &apos;and&apos; and the Little Blind Text should turn around and
            return to its own, safe country.
          </p>
          <p>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
          </p>
        </div>
        <div className="flex w-full justify-around">
          {personalInfo.map((element, index) => {
            return (
              <div
                key={index}
                className={`w-1/5 h-full flex flex-col gap-3 p-5 shadow-bootstrap border-b`}
                style={{ borderColor: element.color }}>
                <ImageRound
                  alt={`Personal icon ${index}`}
                  src={'/images/favicon.svg'}
                  className="w-6 h-6 mb-4"
                />
                <span className="mb-4 font-medium tracking-wider">
                  {element.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col mt-16">
        <span className="text-sm uppercase tracking-[8px] text-gray-400 mb-4 px-6">
          What I do?
        </span>
        <span className="text-lg uppercase font-bold tracking-widest px-6">
          HERE ARE SOME OF MY EXPERTISE
        </span>
        <p className="text-base font-light tracking-widest leading-8 px-6 my-8">
          Having the opportunity to intern and work officially at three
          companies with seven real-world projects over the course of two years
          has been a long journey of accumulating knowledge and experience in
          <strong className="font-bold"> Frontend development - NextJS</strong>.
        </p>
        <div className="relative py-12 my-8 bg-[url('/images/introduce.jpg')] bg-cover bg-fixed bg-center">
          <div className="z-0 absolute inset-0 bg-black/[.4]" />
          <div className={`flex justify-around w-full text-white`}>
            <AnimatedCounter from={0} to={3} title="Companies" />
            <AnimatedCounter from={0} to={7} duration={1.5} title="Projects" />
            <AnimatedCounter
              from={0}
              to={725}
              duration={2}
              title="Working days"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-16">
        <span className="text-sm uppercase tracking-[8px] text-gray-400 mb-4 px-6">
          MY SPECIALTY?
        </span>
        <span className="text-lg uppercase font-bold tracking-widest px-6">
          My skill
        </span>
      </div>
    </section>
  );
};

export default AboutMe;
