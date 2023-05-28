function DriverChip({driver}) {
    return (
        <div className="bg-white p-5 shadow-md rounded-md">
            <p className="font-black text-lg text-blue-400">
                {driver.position}
            </p>
            <div className="flex justify-between">
                <div className="flex gap-4">
                    <div className="border-r-2 min-w-[2rem] py-2">
                        {driver.Driver.permanentNumber}
                    </div>
                    <div>
                        <p className="font-bold text-sm sm:text-base flex gap-3 items-center">
                            {driver.Driver.givenName + " " + driver.Driver.familyName}
                        </p>
                        <p className="text-xs sm:text-base">
                            {driver.Constructors[0].name}
                        </p>
                    </div>
                </div>

                <p className="text-xl sm:text-2xl">
                    {driver.points} 
                    <span className="text-xs sm:text-sm font-normal"> points</span>
                </p>
                
            </div>
        </div>
    )
}

export default DriverChip