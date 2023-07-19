function reduceConstructorName(name) {
    const split = name.split(" ");
    console.log(split[0], split)

    return split[0];
}

function DriverChip({driver}) {
    return (
        <div className="bg-white p-5 shadow-md rounded-md">
            <p className="font-black text-sm sm:text-lg text-blue-400">
                {driver.position}
            </p>
            <div className="flex justify-between">
                <div className="flex gap-2 sm:gap-3">
                    <div className="border-r-2 text-sm sm:text-base grid place-items-center pr-2 min-w-[1.7rem] ">
                        {/* Api still hasn't updated Verstappens number from 33 to 1*/}
                        {driver.Driver.permanentNumber == '33' ? '1' : driver.Driver.permanentNumber}
                        <img className="w-4 h-4"
                            src={"https://eeleabeg.sirv.com/f1/teams/logos/" + reduceConstructorName(driver.Constructors[0].name) +".png?w=50&h=50"} 
                            alt={driver.Constructors[0].name + " logo"} 
                        />
                    </div>
                    
                    <div>
                        <p className="font-bold pb-1 sm:pb-0 text-sm sm:text-base flex gap-3 items-center">
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