import TabNav from './tabNav/tabNav';
import Tabs from './tabs/tabs';
import './tabsContain.css'
function TabsContain() {
  return (
    <div className = 'tabsContain'> 
      <Tabs/>
      <TabNav/>
    </div>
  );
}
export default TabsContain;