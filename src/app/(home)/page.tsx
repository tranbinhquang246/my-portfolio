import MainLayout from '@components/layouts/MainLayout';
import Introduction from './introduction';
import AboutMe from './about-me';
import Skills from './skills';
import Education from './education';
import Experience from './experience';

const Homepage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col">
        <Introduction />
        <AboutMe />
        <Skills />
        <Education />
        <Experience />
      </div>
    </MainLayout>
  );
};

export default Homepage;
