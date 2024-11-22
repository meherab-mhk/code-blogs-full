import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] flex justify-center py-[120px]">
      <ClipLoader></ClipLoader>
    </div>
  );
};

export default Loader;
