function ConstructorChip({constructor}) {
    return (
        <div className="bg-white p-5 shadow-md rounded-md">
            <p className="font-black text-lg text-blue-400">
                {constructor.position}
            </p>
            <div className="flex justify-between">
                <div className="flex gap-4">
                    <div>
                        <p className="font-bold textsm sm:text-base md:text-lg flex gap-3 items-center">
                            {constructor.Constructor.name}
                        </p>
                        <p className="text-xs sm:text-sm">
                            {constructor.Constructor.nationality}
                        </p>
                    </div>
                </div>

                <p className="text-xl sm:text-2xl">
                    {constructor.points} 
                    <span className="text-xs sm:text-sm font-normal"> points</span>
                </p>
                
            </div>
        </div>
    )
}

export default ConstructorChip