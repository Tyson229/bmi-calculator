import LimitationDescription from './LimitationDescription';
import List from './List';

const LimitationsMobile = () => {
  return (
    <div className="mb-24 grid w-full max-w-screen-xl gap-14 p-6 md:px-11 md:py-0 lg:hidden">
      <LimitationDescription style='text-center'/>
      <List />
    </div>
  );
}

export default LimitationsMobile