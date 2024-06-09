'use client';
import ImageRound from '@components/common/Image';

const Introduction = () => {
  return (
    <section className="relative h-screen bg-[url('/images/aboutme.jpg')] bg-cover bg-fixed bg-center">
      <div className="z-0 absolute inset-0 bg-black/[.3]" />
      <div className="absolute top-1/2 z-[1] text-white transform -translate-y-1/2 flex flex-col gap-3 px-8 py-4 w-1/2 animate-[slideTop_1s_ease-in-out]">
        <h1 className="text-[45px] font-bold">
          I am <br />a Frontend Developer
        </h1>
        <span className="text-lg leading-8 tracking-wide">
          Hello, my name is Quang. I&apos;m a Frontend Developer specializing in
          Next.js with over 1 year of experience. I&apos;m so glad to have you
          here.
        </span>
        <div className="flex flex-col items-center w-fit mt-6 animate-bounce">
          <span>Scroll down to see more</span>
          <ImageRound
            alt="arrow down"
            src={'/icons/arrow-down.svg'}
            className="w-4 h-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
