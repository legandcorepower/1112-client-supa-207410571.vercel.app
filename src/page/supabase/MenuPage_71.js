import { useState,useEffect } from "react";
import MenuProducts_71 from "../../components/MenuProducts_71";
const base_url=`https://sjpcedtwrnasasskzklq.supabase.co/rest/v1/menu_71?select=*`;

let url=`${base_url}`;

const options = {
  method: 'GET',
  headers:{
    apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqcGNlZHR3cm5hc2Fzc2t6a2xxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTk1MjIsImV4cCI6MTk5MjAzNTUyMn0.FfCy_nmtttEGkXbPNSnlnBwvxxJvtdPBap0gJRs3SbA`,
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqcGNlZHR3cm5hc2Fzc2t6a2xxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTk1MjIsImV4cCI6MTk5MjAzNTUyMn0.FfCy_nmtttEGkXbPNSnlnBwvxxJvtdPBap0gJRs3SbA`
  }
};

const MenuPage_71 = () => {
  const [products,setProducts] = useState([]);

  const changeFilter = (filter) => {
    if(filter === 'all'){
      url = `${base_url}`;
    }else{
      url = `${base_url}&category=eq.${filter};`
    }
    getMenuData_71(filter);
  }

  const getMenuData_71 = async (filter = 'all') => {
    const response =await fetch(url,options);
    const data = await response.json();
    console.log(`${filter} data`,data);
    setProducts(data);
  }
  
  useEffect(() =>{
       getMenuData_71();
  },[]);
  return (
    <section>
      <div className="btn-container"></div>
      <div className="section-center">
        <section className="menu">
          <div className="title">
            <h2> Menu from Supabase Menu Table</h2>
            <h3>207410571 鄭凱鴻</h3>
            <div className="underline"></div>
          </div>
          <div className="btn-container">
            <button type="button" className="filter-btn" data-id="all" onClick={()=>{changeFilter('all')}}>all</button>
            <button type="button" className="filter-btn" data-id="breakfast" onClick={()=>{changeFilter('breakfast')}}>breakfast</button>
            <button type="button" className="filter-btn" data-id="lunch" onClick={()=>{changeFilter('lunch')}}>lunch</button>
            <button type="button" className="filter-btn" data-id="dessert" onClick={()=>{changeFilter('dessert')}}>dessert</button>
            <button type="button" className="filter-btn" data-id="shakes" onClick={()=>{changeFilter('shakes')}}>shakes</button>
          </div>
          <div className="section-center">
            { products.map((product) =>{
              const {id,img,price,title,descrip} = product; 
                return (
                  <article className="menu-item" key={id}>
                  <img src={img} alt="eggs" className="photo" />
                  <div className="item-info">
                   <header>
                    <h4>{title}</h4>
                    <h4 className="price">{price}</h4>
                   </header>
                  <p className="item-text">
                  {descrip}
                </p>
              </div>
            </article>
                )
            })}
          </div>
          <MenuProducts_71 products={products} />
        </section>
      </div>
    </section>
  );
}

export default MenuPage_71;
