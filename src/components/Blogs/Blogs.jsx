import Blog from "../Blog/Blog";


const Blogs = ({cart,handleAdd}) => {
    // console.log(cart)
    return (
        <div className="w-full md:w-[60%]  grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* <h1>Blogs:{cart.length}</h1> */}
            {
                cart.map(item=><Blog key={item.recipe_id} item={item} handleAdd={handleAdd}></Blog>)
            }
        </div>
    );
};

export default Blogs;