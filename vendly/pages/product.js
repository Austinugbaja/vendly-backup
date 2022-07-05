import { useContext, useEffect, useState } from 'react';
import MainLayout, { getLayout } from '../components/layoutscomponent/MainLayout';
import Product from '../components/profile/productCard/Product';
import DisplaySearchContextProvider, { DisplaySearchContext } from '../context/DisplaySearchContext';
import NotificationBarContextProvider from '../context/NotificationBarContext';
import TabLinkContextProvider from '../context/TabLinksContext';
import { UserContext } from '../context/UserContext';

const ProductPage = () => {
    const [gridWidth, setGridWidth] = useState('10rem')
    const {displaySearch, setDisplaySearchInput} = useContext(DisplaySearchContext)
    const { userProfile } = useContext(UserContext)
    let prod

    const displaySearchInput = () => {
        if (window.scrollY >= 20) {
            console.log('displaye')
            setDisplaySearchInput(true)
        } else {
            console.log('remove')
            setDisplaySearchInput(false)
        }
        // console.log(window.scrollY)
    }

    // window.addEventListener('scroll', displaySearchInput)
    
    
    
    useEffect(() => {
        if(window.screen.width >= 500) {
            setGridWidth('14rem')
            console.log('grid width')
        }
    }, [])
    
    return ( 
        <div className='relative' id='prod'>
            {/* start products tab view */}
            <div className='sm:pl-3 sm:mt-6 mt-[21.9rem] px-3'>
                <div 
                style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${gridWidth}, 1fr))`}}
                className='grid sm:gap-y-4 sm:gap-x-1 gap-y-2 gap-x-2'>
                    {
                        Object.keys(userProfile.products).map(product => (
                            <Product  key={product} product={userProfile.products[product]}/>
                        ))
                    }
                </div>
            </div>
            {/* end products tab view */}

            {/* start create product button */}
            <div className='fixed bottom-2 z-20 sm:hidden block w-full px-3'>
                <button className="w-full h-12 px-6 bg-primary font-Poppins tracking-wide text-white font-[500]">CREATE PRODUCT</button>
            </div>
            {/* end create product button */}
        </div>
     );
}

ProductPage.getLayout = getLayout
 
export default ProductPage;