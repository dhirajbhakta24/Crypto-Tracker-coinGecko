import BannerImage from "../../assets/banner1.jpeg"

function Banner(){
    return(
        <>
            <div className="w-full h-[25rem] relative">
                <img
                    src={BannerImage}
                    className="h-full w-full"
                />
                <div className="absolute top-30 left-0 right-0 mx-auto w-[20rem]">
                    <div className="flex flex-col gap-4">

                        <div className="font-semibold text-6xl text-white">
                            CryptoTracker
                        </div>

                        <div className="font-semibold text-m text-white text-center">
                            Get all information of CryptoCurrencies
                        </div>

                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Banner;