import { IconType } from "react-icons";

const ChallengeFeatureItem = (props) => {
    
    const { Icon, amountText, title } = props;

    return (
        <div className="flex-1 mb-3 md:min-w-[250px] md:min-h-[150px] min-w-[100px] min-h-[100px] sm:min-h-[140px] rounded-lg flex flex-col items-center justify-center p-4 mx-2 text-white cursor-pointer">
            {/* <Icon className="h-10 lg:visible md:invisible sm:invisible md:text-5xl text-2xl transition-none" /> */}
            {/* <Icon className="h-10 lg:visible hidden sm:block md:text-5xl text-2xl transition-none" /> */}
            <div className=" relative  h-16 w-16 flex justify-center items-center rounded-full">
                <div className="w-16 -rotate-45 border-t-2 border-t-white h-16 absolute border rounded-full border-transparent"></div>
                <p className="w-full text-center md:text-xl text-xl font-poppins md:font-semibold font-semibold">
                    {amountText}
                </p>
                <div className="w-16 -rotate-45 border-b-2 border-b-white h-16 absolute border rounded-full border-transparent"></div>
            </div>

            <p className="w-full text-center lg:text-xl text-[13px] font-poppins font-bold md:font-semibold mt-1 tracking-tight">
                {title}
            </p>
        </div>
    );
};

export default ChallengeFeatureItem;
