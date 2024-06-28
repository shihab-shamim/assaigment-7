import { useEffect, useState } from "react";


const Preparing = ({preparing}) => {
    console.log(preparing)
    const [time,setTime]=useState(0)
    const [calories,setCalories]=useState(0)
    useEffect(()=>{
        const updateTime= preparing.reduce((acc, item) => acc + parseInt(item.preparing_time), 0);
        const updateCalories= preparing.reduce((acc, item) => acc + parseInt(item.calories), 0);
        setTime(updateTime)
        setCalories(updateCalories)
    },[preparing])
    console.log(time)
    return (
        <div>
            <h1 className="text-[24px] font-semibold text-center">Currently cooking: {preparing.length} </h1>
            <hr className="w-3/4 mx-auto mt-3" />
            <div>
            <div className="flex justify-around">
                  <p>Name</p>
                  <p>Time</p>
                  <p>Calories</p>
                  
                </div>
                <div>
               
                    {
                        // eslint-disable-next-line react/prop-types
                        preparing.map((item,index)=><div key={item.recipe_id} className="flex justify-around mt-4">
                             <p>{index+1}</p>
                      <p>{item.recipe_name}</p>
                  <p>{item.preparing_time} minutes</p>
                  <p>{item.calories}Calories</p>

                        </div>)

                    }
                   <div className="flex justify-end gap-6 mt-8 p-4">
                    <p>Total Time=</p>
                    <p>Total Calories=</p>
                   </div>
                   <div className="flex justify-end gap-6  px-4">
                   <p>{time} minutes</p>
                    <p>{calories} Calories</p>
                   </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Preparing;



