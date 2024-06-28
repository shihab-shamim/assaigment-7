
// grid grid-cols-2
const Blog = ({item,handleAdd}) => {
    return (
        <div className="">
            <div className="card  bg-base-100 shadow-xl">
  <figure className="px-6 pt-4">
    <img src={item.recipe_image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body  ">
    <h2 className="text-[20px] font-semibold">{item.recipe_name}</h2>
    <p>{item.short_description}</p>
    <hr />
    <div>
        <h4 className="text-[20px] font-medium">Ingredients:{item.ingredients.length} </h4>
        {
            item.ingredients.map(p=><li>{p}</li>)
        }
        <div className="flex justify-between mt-6">
            <div className="flex ">
                <img src="https://i.ibb.co/4R7FV8V/Frame-1.png" alt="" />
                <p className="ml-1">{item.preparing_time}  minutes</p>
            </div>
            <div className="flex">
                <img src="https://i.ibb.co/rdfvjtB/Frame-2.png" alt="" />
                <p>{item.calories}  calories</p>
            </div>
        </div>
    <div className="card-actions mt-6">
      <button onClick={()=>{handleAdd(item)}} className="btn  bg-[#0BE58A] rounded-full">Want to Cook</button>
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default Blog;