import logo from './logo.svg';
import './App.css';

function App() {

let mobiles = [
  {
    image:"https://images.samsung.com/is/image/samsung/africa-en-galaxy-a30-a305-sm-a305fzwfxfe-backwhite-151841109?$720_576_JPG$",
    name: "a30",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 2000,
    brand: "samsung",
  },
  {
    image:"https://images.samsung.com/is/image/samsung/assets/pk/p6_gro2/p6_initial_mktpd/smartphones/galaxy-note10/specs/SMN975GalaxyNote10BackPenAuraBlackThumbnail.jpeg?$163_346_PNG$",
    name: "note10",
    ram: "6gb",
    rom: "128gb",
    camera: "50px",
    price: 4000,
    brand: "samsung",
  },
  {
    image:"https://www.droid-life.com/wp-content/uploads/2019/07/Galaxy-S10-Plus-Deal-1200x900-cropped.jpg",
    name: "s10",
    ram: "3gb",
    rom: "128gb",
    camera: "10px",
    price: 5000,
    brand: "samsung",
  },
  {
    image:"https://www.trustedreviews.com/wp-content/uploads/sites/54/2010/06/13482-img5889-1.jpg",
    name: "iphone4",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 10000,
    brand: "iphone",
  },
  {
    image:"https://www.cnet.com/a/img/resize/1397895129cce8f2cccf8a9591d0cb5c3b00c2db/hub/2011/10/27/259013c6-cbf2-11e2-9a4a-0291187b029a/orig-iphone-4s-main.jpg?auto=webp&fit=crop&height=900&width=1200",
    name: "iphone4s",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 20000,
    brand: "iphone",
  },
  {
    image:"https://c4.wallpaperflare.com/wallpaper/212/524/13/5bd43f0d0998b-wallpaper-preview.jpg",
    name: "iphone5",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 30000,
    brand: "iphone",
  },
  {
    image:"https://www.gizbot.com/images/2014-09/apple-iphone-6-image-1_141033197700.jpg",
    name: "iphone6",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 30000,
    brand: "iphone",
  },
  {
    image:"https://cdn.dxomark.com/wp-content/uploads/medias/post-79073/Xiaomi-Redmi-Note-10-Pro-_Yoast-image-packshot-review.jpg",
    name: "redminote10",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 10000,
    brand: "xiaomi",
  },
  {
    image:"https://images.priceoye.pk/xiaomi-redmi-note-11-pro-pakistan-priceoye-2l2b1.jpg",
    name: "redminote11",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 10000,
    brand: "xiaomi",
  },
  {
    image:"https://cdn.dxomark.com/wp-content/uploads/medias/post-79073/Xiaomi-Redmi-Note-10-Pro-_Yoast-image-packshot-review.jpg",
    name: "redmi10",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 10000,
    brand: "xiaomi",
  },
  {
    image:"https://images.priceoye.pk/xiaomi-redmi-note-11-pro-pakistan-priceoye-2l2b1.jpg",
    name: "redmi10pro",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 10000,
    brand: "xiaomi",
  },
  {
    image:"https://phonesdata.com/files/models/Xiaomi--Mi-A3-238.jpg",
    name: "a3s",
    ram: "4gb",
    rom: "64gb",
    camera: "50px",
    price: 10000,
    brand: "oppo",
  },
];

  return (
    <div className="App">
      <header className="App-header">
        
       {
          mobiles.map((x,i)=>{
        
            return<div key={i} className="card">
             
               <h1>
               "{x.brand}"
               </h1>
              <p>
                <img src={x.image} alt="" srcset="" /><br />
               Model : {x.name} <br /> Price: <b>{x.price}</b> <br />  Ram :{x.ram} <br /> Rom: {x.rom} 
              </p>
            </div>
          })
        }
      </header>
    </div>
  );
}

export default App;
