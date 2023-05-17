import { useState,useEffect } from "react";
import { useParams,useNavigate } from 'react-router-dom';

const MenuByCategoryPage_71 = () => {
  const [products,setProducts] = useState([]);
  const params = useParams();
  console.log('params category',params.category);
  
  const navigate= useNavigate();

  const getMenuDatallyCategory_71 = async() => {
      const respone = await fetch(`https://sjpcedtwrnasasskzklq.supabase.co/rest/v1/menu_71?select=*&category=eq.${params.category}`,
      {method: 'GET',
        headers:{
          apikey:`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqcGNlZHR3cm5hc2Fzc2t6a2xxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTk1MjIsImV4cCI6MTk5MjAzNTUyMn0.FfCy_nmtttEGkXbPNSnlnBwvxxJvtdPBap0gJRs3SbA`,
          Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqcGNlZHR3cm5hc2Fzc2t6a2xxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTk1MjIsImV4cCI6MTk5MjAzNTUyMn0.FfCy_nmtttEGkXbPNSnlnBwvxxJvtdPBap0gJRs3SbA`
        }
    });
      const data = await respone.json();
      console.log('menu data', data);
      setProducts(data);
  }
  
  useEffect(() =>{
       getMenuDatallyCategory_71();
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
            <button type="button" className="filter-btn" data-id="all">all</button>
            <button type="button" className="filter-btn" data-id="breakfast" onClick={()=>{
              navigate('/supa_menu_71/breakfast');
            }}>
              breakfast</button>
            <button type="button" className="filter-btn" data-id="lunch" onClick={()=>{
              navigate('/supa_menu_71/lunch');
            }} >
              lunch</button>
            <button type="button" className="filter-btn" data-id="dessert">dessert</button>
              <button type="button" className="filter-btn" data-id="shakes">
              shakes
            </button>
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
        </section>
      </div>
    </section>
  );
}

export default MenuByCategoryPage_71;
