import { useState,useEffect } from "react";
import { useParams,useNavigate } from 'react-router-dom';
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

const MenuByCategoryPage_71 = () => {
  const [products,setProducts] = useState([]);
  const [category,setCategory] = useState('all');
  const params = useParams();
  console.log('params category',params.category);
  
  const navigate= useNavigate();

  const changeFilter = (category) => {
    console.log('category',category)
    setCategory(category)
  }

  const getMenuDatallyCategory_71 = async() => {
    if(params.category === 'all'){
      url = `${base_url}`;
    }else{
      url = `${base_url}&category=eq.${params.category};`
    }
      const respone = await fetch(url,options)
      const data = await respone.json();
      console.log('menu data', data);
      setProducts(data);
    }
      
  
  
  useEffect(() =>{
       getMenuDatallyCategory_71();
  },[category]);
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
            <button type="button" className="filter-btn" data-id="all" onClick={()=>{changeFilter('all'); return navigate(`/supa_menu/all`) }}>all</button>
            <button type="button" className="filter-btn" data-id="breakfast" onClick={()=>{changeFilter('breakfast'); return navigate(`/supa_menu/breakfast`)}}>breakfast</button>
            <button type="button" className="filter-btn" data-id="lunch" onClick={()=>{changeFilter('lunch'); return navigate(`/supa_menu/lunch`)}}>lunch</button>
            <button type="button" className="filter-btn" data-id="dessert" onClick={()=>{changeFilter('dessert'); return navigate(`/supa_menu/dessert`) }}>dessert</button>
            <button type="button" className="filter-btn" data-id="shakes" onClick={()=>{changeFilter('shakes'); return navigate(`/supa_menu/shakes`)}}>shakes</button>
          </div>
          <MenuProducts_71 products={products} />
        </section>
      </div>
    </section>
  );
}

export default MenuByCategoryPage_71;
