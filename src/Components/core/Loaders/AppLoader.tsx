import AppLoaderImage from "../../../assets/loaders/logo.gif";
type Props = {};

const AppLoader = (props: Props) => {
  return (
    <div className="max-h-screen h-screen grid place-items-center w-full">
      <img className="w-2/12" src={AppLoaderImage} />
    </div>
  );
};

export default AppLoader;
