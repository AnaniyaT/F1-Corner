import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

function GenericSkeleton(){
    return (
        <div className="bg-white w-full p-4 rounded-md shadow-md ">
            <Skeleton className='w-[4rem]'/>
            <Skeleton/>
            <Skeleton/>
        </div>
    )
}

export default GenericSkeleton;