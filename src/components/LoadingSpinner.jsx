function LoadingSpinner(){
    return (
        <div className="flex gap-2">
            <div className="w-5 h-5  rounded-full bg-blue-300 animate-bounceLoading1"></div>
            <div className="w-5 h-5 rounded-full bg-blue-300 animate-bounceLoading2"></div>
            <div className="w-5 h-5 rounded-full bg-blue-300 animate-bounceLoading3"></div>
            <div className="w-5 h-5 rounded-full bg-blue-300 animate-bounceLoading4"></div>
        </div>
    )
}

export default LoadingSpinner;