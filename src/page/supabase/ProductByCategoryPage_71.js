import { useState,useEffect } from "react";
import MenuProducts_71 from "../../components/MenuProducts_71";
import Wrapper from "../../wrapper/Crown_71"
const base_url=`https://sjpcedtwrnasasskzklq.supabase.co/rest/v1/category2_71?select=*`;

let url=`${base_url}`;

const options = {
  method: 'GET',
  headers:{
    apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqcGNlZHR3cm5hc2Fzc2t6a2xxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYxMzc4MjYsImV4cCI6MjAwMTcxMzgyNn0.F2q7YLTp7Dlox314yxqVJLY-L8vUvLpt0ythWbwupiY`,
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqcGNlZHR3cm5hc2Fzc2t6a2xxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYxMzc4MjYsImV4cCI6MjAwMTcxMzgyNn0.F2q7YLTp7Dlox314yxqVJLY-L8vUvLpt0ythWbwupiY`
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
    <Wrapper>
    <div class='header'>
      <a href='/' class='logo-container'>
        <img src='./crown_theme/assets/crown.svg' />
      </a>
      <div class='options'>
        <a href='./overview.html' class='option'>
          Shop
        </a>
        <a href='/shop' class='option'>
          Contact
        </a>
        <a href='/signin' class='option'>
          Sign In
        </a>
        <div class='cart-icon' onclick='cartToggle()'>
          <img
            class='shopping-icon'
            src='./crown_theme/assets/shopping-bag.svg'
            alt=''
          />
        </div>

        <div class='cart-dropdown'>
          <div class='cart-items'>
            <div class='cart-item'>
              <img
                src='https://i.ibb.co/QdJwgmp/brown-cowboy.png'
                alt='item'
              />
              <div class='item-details'>
                <span class='name'>Brown Cowboy</span>
                <span class='price'>4 * $35</span>
              </div>
            </div>
            <div class='cart-item'>
              <img
                src='https://i.ibb.co/mJS6vz0/blue-jean-jacket.png'
                alt='item'
              />
              <div class='item-details'>
                <span class='name'>Blue Jean Jacket</span>
                <span class='price'>1 * $90</span>
              </div>
            </div>
          </div>
          <button class='custom-button'>GO TO CHECKOUT</button>
        </div>
      </div>
    </div>
    <h3>Crown2 -- SupaBase 207410571</h3>
    <div class='homepage'>
    <div class='directory-menu'>
      {products.map((product) => {
        const { id, local_url, title,name } = product;
        return (
            <div class='menu-item' key={id}>
              <img class='background-image' src={local_url} alt='' />
              <a href='./hats.html' class='content'>
                <h1 class='title'>{title}</h1>
                <span class='subtitle'>{name}</span>
              </a>
            </div>
        )
      })}
      </div>
      </div>
  </Wrapper>
  );
}

export default MenuPage_71;
