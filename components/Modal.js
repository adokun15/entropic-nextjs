export default function Modal({ children }) {
  return (
    <>
      <div className="fixed z-10 h-[100vh] bg-[rgba(0,0,0,0.5)]  top-0 w-full"></div>
      <div
        className={`bg-white absolute w-[90%] z-20 h-fit md:w-3/5 md:left-[20%]  left-[5%] py-5 top-[5%] my-[1rem] `}
      >
        {children}
      </div>
    </>
  );
}
