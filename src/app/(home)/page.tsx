import MainLayout from '@components/layouts/MainLayout';
import Introduction from './introduction';
import AboutMe from './about-me';
import Skills from './skills';

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
