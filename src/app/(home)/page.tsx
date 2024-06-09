import MainLayout from '@components/layouts/MainLayout';
import AboutMe from '@components/modules/AboutMe';
import Introduction from '@components/modules/Introduction';

const Homepage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col">
        <Introduction />
        <AboutMe />
      </div>
    </MainLayout>
  );
};

export default Homepage;
