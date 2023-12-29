import { CgSpinner } from "react-icons/cg";
const Fallback = () => {
  return (
    <div className="flex w-full justify-center">
      <CgSpinner className="animate-spin text-8xl text-primary-main" />
    </div>
  );
};
export default Fallback;
