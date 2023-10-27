import { useContext, useEffect, useRef } from "react";
import { Card } from "../../Components/Card/Card";
import { ProductDetail } from "../../Components/ProductDeatil/ProductDetail";
import { ShoppingContext } from "../../Context/Context";
import { useParams } from "react-router-dom";

function Home() {
  const context=useContext(ShoppingContext);
  const asideRef=useRef(null);
  /**
   * Ocultar detalles al dar click en el input
   */
  const handleDetail=()=>{
    context.setDetailOpen(false);
  }
  /**
   * Esta funcion oculta el menu mobile
   */
  const closeMobileMenu = () => {
    context.setMenuMobile(false);
  };

  let {category} = useParams();
  useEffect(()=>{
    if(category?.length>0){
      context.setSearchByCategory(category.toLocaleLowerCase());
      context.setSearchByTitle('');
    }
  },[category, context]);

  useEffect(() => {
    function clickOutside(event) {
      if (asideRef.current && asideRef.current.contains(event.target)) {
            closeMobileMenu();
      }
    }
    // Agregar un event listener para detectar clics en el home
    document.addEventListener('click', clickOutside);

    return () => {
      // Remover el event listener cuando el componente se desmonta
      document.removeEventListener('click', clickOutside);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /**
   * Renderiza los items filtrados por titulo o por categoria
   * @returns 
   */
  const renderView=()=>{
    if(context.filteredItems?.length > 0){
      return(
        context.filteredItems?.map((item)=>(
          <Card key={item.id} data={item}/>
        ))
      )
    }else if(context.filteredItems?.length === 0){
      return (
        <div className="w-full text-center pb-4 font-light text-sm">Product not found...</div>
      )
    } 
  }


  return (
    <div ref={asideRef}>
      <p className="w-full text-center pb-4 font-light text-lg">Home</p>
      <div className="w-full flex justify-center mb-6">
        <input 
          className="w-1/3 border border-black px-4 py-2 rounded-lg focus:outline-none font-light text-sm" 
          type="text" 
          value={context.searchByTitle}
          placeholder="Search a product"
          onClick={()=>handleDetail()}
          onChange={(event)=>context.setSearchByTitle(event.target.value)}/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {
          renderView()
        }
      </div>
      <ProductDetail/>
    </div>
  )
}

export {Home};