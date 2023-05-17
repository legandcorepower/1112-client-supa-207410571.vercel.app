import {BrowserRouter ,Routes ,Route} from 'react-router-dom'

import HomePage_71 from './page/HomePage_71';
import MenuStaticPage_71 from './page/local/MenuStaticPage_71';
import SupaMenuPage_71 from './page/supabase/MenuPage_71';
import MenuByCategoryPage_71 from './page/supabase/MenuByCategoryPage_71';
const App_71 = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePage_71 />} />
      <Route path='/static_71' element={<MenuStaticPage_71 />} />
      <Route path='/supa_menu_71' element={<SupaMenuPage_71 />}/>
      <Route path='/supa_menu_71/:category' element={<MenuByCategoryPage_71 />}/>
     </Routes>
    </BrowserRouter>
  )
}
  
  
 

export default App_71;
