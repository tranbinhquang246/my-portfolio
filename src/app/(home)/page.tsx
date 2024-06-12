import MainLayout from '@components/layouts/MainLayout';
import AboutMe from '@components/modules/AboutMe';
import Introduction from '@components/modules/Introduction';
import Skills from '@components/modules/Skills';

const Homepage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col">
        <Introduction />
        <AboutMe />
        <Skills />
      </div>
    </MainLayout>
  );
};

export default Homepage;
