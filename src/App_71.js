import {BrowserRouter ,Routes ,Route} from 'react-router-dom'

import HomePage_71 from './page/HomePage_71';
import MenuStaticPage_71 from './page/local/MenuStaticPage_71';
import MenuLocalPage_71 from './page/local/MenuLocalPage_71';
import SupaMenuPage_71 from './page/supabase/MenuPage_71';
import MenuByCategoryPage_71 from './page/supabase/MenuByCategoryPage_71';
import MenuNodePage_71 from './page/node/MenuNodePage_71';
import CrownStaticPage_71 from './page/local/CrownStaticPage_71';
import ProuductByCategoryPage_71 from './page/supabase/ProductByCategoryPage_71';
import ShopPage_71 from './page/supabase/ShopPage';
const App_71 = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePage_71 />} />
      <Route path='/static_crown_71' element={<CrownStaticPage_71 />} />
      <Route path='/supa_crown_71' element={<ProuductByCategoryPage_71 />} />
      <Route path='/supa_shop2_71' element={<ShopPage_71 />} />
      <Route path='/static_71' element={<MenuStaticPage_71 />} />
      <Route path='/local_menu_71' element={<MenuLocalPage_71 />} />
      <Route path='/supa_menu_71' element={<SupaMenuPage_71 />}/>
      <Route path='/supa_menu_71/:category' element={<MenuByCategoryPage_71 />}/>
      <Route path='/node_menu_71' element={<MenuNodePage_71 />}/>
     </Routes>
    </BrowserRouter>
  )
}
  
  
 

export default App_71;
