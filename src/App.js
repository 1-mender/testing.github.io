import Img from './img/Pizza Photo.png';
import Img2 from './img/Tortellini Photo.png';
import Img3 from './img/Strawberry cake Photo.png';
import Icons from './img/Icons.png';
import Icons2 from './img/Icons2.png';
import Icons3 from './img/Icons3.png';
import Info from './img/Info-Icon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='block'>
          <img src={Img} className='Img' />
          <img src={Info} className='Info' alt="button" />
          <h1 className='block-logo-text'>Pepperoni Pizza</h1>
          <img src={Icons} className='Icons' alt="Icons" />
          <p className='block-mine'>Premium pepperoni and cheese is made 
            with real mozzarella on original 
            hand-tossed crust.</p>
            <p className='block-cal_1'>265 Cal</p>
               <p className='block-cal_2'>P/F/C: 12/10/31</p>
                  <p className='block-cal_3'>53.8 °C</p>
          <h1 className='block-buy_text'>$23.90</h1>
          <p className='block-buy_red-text'><del>$29.90</del></p>
          <button className='block-buy'>ORDER</button>
      </div>
      <div className='block'>
          <img src={Img2} className='Img' />
          <img src={Info} className='Info' alt="button" />
          <h1 className='block-logo-text'>Tortellini</h1>
          <img src={Icons2} className='Icons' alt="Icons" />
          <p className='block-mine'>Pasta stuffed with beef and pork topped with your 
          choice of cream sauce with bacon, bolognese or marinara sauce.
            hand-tossed crust.</p>
            <p className='block-cal_1'>265 Cal</p>
               <p className='block-cal_2'>P/F/C: 18/4/41</p>
                  <p className='block-cal_3'>42.4 °C </p>
          <h1 className='block-buy_text'>$17.90</h1>
          <p className='block-buy_red-text'><del>$22.90</del></p>
          <button className='block-buy'>ORDER</button>
      </div>
      <div className='block'>
          <img src={Img3} className='Img' />
          <img src={Info} className='Info' alt="button" />
          <h1 className='block-logo-text'>Strawberry Cake</h1>
          <img src={Icons3} className='Icons' alt="Icons" />
          <p className='block-mine'>Three layer strawberry dessert is not only beautiful looking,
           but also delicious! Perfect dessert for spring and summer.
            hand-tossed crust.</p>
            <p className='block-cal_1'>265 Cal</p>
               <p className='block-cal_2'>P/F/C: 6/14/49</p>
                  <p className='block-cal_3'>13.9 °C</p>
          <h1 className='block-buy_text'>$13.90</h1>
          <p className='block-buy_red-text'><del>$18.90</del></p>
          <button className='block-buy'>ORDER</button>
      </div>
    </div>
  );
}

export default App;
