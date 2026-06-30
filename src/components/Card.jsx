function Card({info}) {
  return (
    <>
      <div className="w-81.75 bg-white p-8.5">
        <span>Basic</span>
        <span className="">${info.price}</span>
        <div>
          <div className="w-full h-px bg-[#6E728E] mb-3"></div>
          <span className=" text-[#6E728E] font-bold mb-3 inline-block">
            {info.storage} Storage
          </span>
          <div className="w-full h-px bg-[#6E728E] mb-3"></div>
          <span className=" text-[#6E728E] font-bold mb-3 inline-block">
            2 Users Allowed
          </span>

          <div className="w-full h-px bg-[#6E728E] mb-3 "></div>
          <span className=" text-[#6E728E] font-bold mb-3 inline-block">
            Send up to 3 GB
          </span>

          <div className="w-full h-px bg-[#6E728E] mb-3"></div>
        </div>
      </div>
    </>
  );
}

export default Card;
