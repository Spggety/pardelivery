import './tabs.css'
function Tabs() {
  const iconVape = (<img width={'10px'} src='./img/main/tabIcon/vape.png'></img>)
  const iconHookah = (<img src='./img/main/tabIcon/hookah.png'></img>)
  const iconSnus = (<img src='./img/main/tabIcon/snus.png'></img>)
  const iconTobacco = (<img width={'10px'} src='./img/main/tabIcon/vape.png'></img>)
  return (
    <div className='tabs'>

    </div>
  );
}

function Tab(props) {
  <div class="form_radio">
    <input id={props.id} type="radio" name="upTab" />
    <label for={props.id}>{props.nameTab}</label>
  </div>
}
export default Tabs;