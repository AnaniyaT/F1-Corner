function reduceConstructorName(name) {
    const split = name.split(" ");
    console.log(split[0], split)

    return split[0];
}

function ConstructorChip({constructor}) {
    return (
        <div className="bg-white p-5 shadow-md rounded-md">
            <p className="font-black flex justify-between items-end text-lg text-blue-400">
                {constructor.position}
            </p>
            <div className="flex justify-between">
                <div className="flex gap-4">
                    <div>
                        <p className="font-bold textsm sm:text-base md:text-lg flex gap-2 items-center">
                            {constructor.Constructor.name}
                            <img className="w-4 h-4"
                                src={"https://eeleabeg.sirv.com/f1/teams/logos/" + reduceConstructorName(constructor.Constructor.name) +".png?w=50&h=50"} 
                                alt={constructor.Constructor.name + " logo"} 
                            />
                        </p>
                        <p className="text-xs sm:text-sm">
                            {constructor.Constructor.nationality}
                        </p>
                    </div>
                </div>
                    <p className="text-xl  sm:text-2xl">
                        {constructor.points} 
                        <span className="text-xs sm:text-sm font-normal"> points</span>
                    </p>
                
            </div>
        </div>
    )
}

export default ConstructorChip