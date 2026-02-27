import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import Title from '../Components/Title'
import ProductItem from '../Components/ProductItem'

const Collection = () => {

  const {products, search, showSearch} = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [fliterProducts, setFliterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relavent')

  const toggleCategory = (e) =>{
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item=>item !== e.target.value))
    }else{
      setCategory(prev=>[...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) =>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item => item!==e.target.value))
    }else{
      setSubCategory(prev=>[...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if(subCategory.length > 0) {
      productsCopy = productsCopy.filter(item=>subCategory.includes(item.subCategory))
    }

    setFliterProducts(productsCopy)
  }

  const sortProduct = () => {
    let fpCopy = fliterProducts.slice();

    switch (sortType){
      case 'low-high':
        setFliterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low':
        setFliterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;
        
      default:
        applyFilter();
        break; 
    }
  }

  useEffect(() => {
   setFliterProducts(products)
  }, [])


  useEffect(()=>{
    applyFilter()
  }, [category,subCategory, search, showSearch,products])

  useEffect(()=>{
    sortProduct();
  }, [sortType])


  
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-300'>
      {/* filter options  */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
        <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : '' }`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* category filter  */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '':'hidden'} sm:block`}>
        <p className='mb-3'>CATEGORIES</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input className='w-6' type="checkbox" value={'Men'} onChange={toggleCategory}/>Men
          </p>
           <p className='flex gap-2'>
            <input className='w-6' type="checkbox" value={'Women'} onChange={toggleCategory}/>Women
          </p>
          <p className='flex gap-2'>
            <input className='w-6' type="checkbox" value={'Kids'} onChange={toggleCategory}/>Kids
          </p>
        </div>
        </div>

        {/* type(subcategory filter) filter  */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '':'hidden'} sm:block`}>
          <p className='mb-5'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm text-gray-700 font-light'>
             <p className='flex gap-2'>
              <input className='w-6' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} />Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-6' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} />Bottomwear
            </p>
              <p className='flex gap-2'>
              <input className='w-6' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} />Winterwear
            </p>
          </div>
        </div>
      </div>

{/* right side  */}
<div className='flex-1'>

  <div className='flex justify-between sm:text-2xl text-base mb-4'>
  <Title text1={'ALL'} text2={'COLLECTION'} />

  {/* product sort  */}
    <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-xl px-2'>
    <option value="relavent">Sort By: Relevant</option>
    <option value="low-high">Sort By: Low To High</option>
    <option value="high-low">Sort By: Hight To Low</option>
    </select>
  </div>

  {/* map products  */}
  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
    {fliterProducts.map((item, index)=>(
      <ProductItem key={index} image={item.image} id={item._id} name={item.name} price={item.price} />
      ))}
  </div>
</div>
    </div>
  )
}

export default Collection
