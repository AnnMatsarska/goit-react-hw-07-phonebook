import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Oval
      height={50}
      width={50}
      color="rgb(237, 95, 48)"
      wrapperStyle={{
        marginTop: '30px',
        justifyContent: 'center',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="rgb(237, 95, 48)"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};
