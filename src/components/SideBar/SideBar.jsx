import Preparing from '../Preparing/Preparing'

const SideBar = ({price,handlePreparing,preparing}) => {
 
    return (
        <div className="w-full md:w-[40%]">
            
            <div className="card min-h-screen bg-base-100 shadow-xl">
              <h1 className="text-[24px] font-semibold text-center">Want to cook: {price.length}</h1>
              <hr className="w-3/4 mx-auto mt-3" />
              <div>
                <div className="flex justify-around">
                  <p>Name</p>
                  <p>Time</p>
                  <p>Calories</p>
                  <p></p>
                </div>
                <div className="mt-4">
                 
                  {
                    price.map((item,index)=><div key={item.recipe_id} className="flex justify-around mt-4">
                      <p>{index+1}</p>
                      <p>{item.recipe_name}</p>
                  <p>{item.preparing_time} minutes</p>
                  <p>{item.calories}Calories</p>
                  <button onClick={()=>{handlePreparing(item.recipe_id)}} className="btn  bg-[#0BE58A] rounded-full">Preparing</button>
                    </div>)
                  }
                </div>
                {/* <div className="text-center">  Currently cooking: 02</div> */}
               <Preparing preparing={preparing}></Preparing>
              </div>
              </div>
        
        
 


            
        </div>
    );
};

export default SideBar;
