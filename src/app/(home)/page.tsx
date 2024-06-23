import MainLayout from '@components/layouts/MainLayout';
import Introduction from './introduction';
import AboutMe from './about-me';
import Skills from './skills';
import Education from './education';

const Homepage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col">
        <Introduction />
        <AboutMe />
        <Skills />
        <Education />
      </div>
    </MainLayout>
  );
};

export default Homepage;
