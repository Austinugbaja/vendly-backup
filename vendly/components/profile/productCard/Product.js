
const Product = () => {
    return ( 
        <div className="relative max-w-[12rem] sm:max-w-[15rem] overflow-hidden rounded-lg shadow-lg font-Poppins sm:mx-2">
            {/* start product options icon */}
            <div style={{background: 'rgba(0, 0, 0, 0.100)'}} className="absolute px-2 py-1 sm:right-5 sm:top-2 right-2 top-2 rounded-md">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
            </div>
            {/* end product options icon */}

            {/* start product image */}
            <img className="rounded-tr-lg rounded-tl-lg object-cover w-full h-48" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Flower and sky"/>
            {/* end product image */}

            {/* start product name and price */}
            <div className="sm:px-6 sm:py-4 px-3 py-3 bg-white">
                <div className="text-[15px] font-[500] tracking-tight text-secondry flex justify-between">
                    <span>Hp pavillion</span>
                    <span>$100</span>
                </div>
            </div>
            {/* end product name and price */}
        </div>
    );
}
 
export default Product;