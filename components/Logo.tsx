import { Image } from "./Image";

export const LogoDefault = () => {
  return (
    <>
      <Image
        src="/static/images/logo.png"
        variant="image"
        dimensions={[200, 50]}
        alt="logo"
      />
    </>
  );
};

export const Logo = () => {
  return (
    <>
      <Image
        src="/static/images/logo_sticky@2x.png"
        variant="image"
        dimensions={[100, 100]}
        alt="logo"
      />
    </>
  );
};
