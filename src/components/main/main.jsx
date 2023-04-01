import './main.css'
import Header from './header/header.jsx';
import Banner from './banner/banner';
import SearchTable from './search/search';
import TabsContain from './navigation/tabsContain';
import LoadingScreen from '../loadingScreen/loadingScreen'
function Main() {
  return (
    <div className="main">
      <Header />
      <Banner/>
      <SearchTable/>
      <TabsContain/>
    </div>
  );
}
export default Main;