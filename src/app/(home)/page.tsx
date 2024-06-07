import MainLayout from '@components/layouts/MainLayout';
import Introduction from '@components/modules/Introduction';

const Homepage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col">
        <Introduction />
      </div>
    </MainLayout>
  );
};

export default Homepage;
