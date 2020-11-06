import React from 'react'
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <div className="home__container">
              <img 
              className=" home__Image" 
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/1917/EVREF_OCT20_GWBleedingHero_FT_XSite_1500X600_PV_en-GB._CB419087828_.jpg" 
              alt="Images"
              />

             <div className="home__row">

                <Product  
                id="847658y65"
                title='Apple iPhone 11 (64GB) - White (EarPods & Power Adapter in The Box)' 
                price={599} 
                image='https://images-na.ssl-images-amazon.com/images/I/5103Xi7yQgL._SL1024_.jpg'
                rating ={4} 
                />

                <Product 
                     id="7584685"
                     title='Samsung Galaxy S20 Ultra (Cosmic Gray, 12GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers' 
                     price={999} 
                     
                     image='https://images-na.ssl-images-amazon.com/images/I/613YZGZCdYL._AC_SY450_.jpg'
                     
                     rating ={4} 
                />

                <Product 
                id="4736584"
                   title='OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage)'
                   price={399}
                   image='https://images-na.ssl-images-amazon.com/images/I/61WEXquocyL._SL1500_.jpg'
                   rating={4}
                />
               
             </div>

             <div className="home__row">

             <Product
              id="57846767"
             title='SEAT CHACHA KS Trader Medium Back Home Office Chair in Black mesh and Chrom Finish Metal Base'
             price={169}
             image='https://images-na.ssl-images-amazon.com/images/I/41HUqXHekVL.jpg'
             rating ={3}             
                />  

              <Product 
                  id="4835847"
                 title='COLLABRAINS ENTERPRISE Multipurpose Foldable Laptop Table with Cup Holder, Study Table, Bed Table, Breakfast Table, Foldable and Portable/Ergonomic & Rounded Edges/Non-Slip Legs (Black)'
                 price={79}
                 image='https://images-na.ssl-images-amazon.com/images/I/61g34rYQTIL._SL1094_.jpg'
                 rating ={3}
              
              />
              <Product 
                id="65475674"
                 title='PaxMore Rechargeable LED Touch On/Off Switch Desk Lamp Children Eye Protection Student Study Reading Dimmer Rechargeable Led Table Lamps USB Charging (5 in One)'
                 price={59}
                 image='https://images-na.ssl-images-amazon.com/images/I/51iszYNmN-L._SL1000_.jpg'
                 rating={4}
              
              />    

            </div>

            <div className="home__row">
            <Product 
               id="26744932"
               title='Blue Star 1.5 Ton 3 Star Inverter Split AC (Copper, IC318QATU, White + Champagne Gold)'
               price={499}
               image='https://images-na.ssl-images-amazon.com/images/I/61fxWA-MAoL._SL1500_.jpg'
              rating={4}
            />      
             </div>

      </div>
</div>
    );
    }
    
    export default Home;
