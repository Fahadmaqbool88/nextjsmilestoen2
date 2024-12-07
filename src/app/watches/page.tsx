import React from 'react'

const Watches = () => {
    const WatchDeta=[
        {id:1,name:'Rolex',price:13000,description:'Luxury Watch',image:'anh-tuan-t-jdb2Z56lp5c-unsplash.jpg'},
        {id:2,name:'Omega',price:14000, description:'Luxury Watch', image:'pexels-mitchel-durfee-2310075-6230455.jpg'},
        {id:3,name:'Patek philippe',price:16000,description:'Luxury Watch',image:'hugo-delauney-8kbTP-IDX8A-unsplash.jpg'},
        {id:4,name:'Tag heuer',price:17000,description:'Luxury Watch',image:'hugo-delauney-8kbTP-IDX8A-unsplash.jpg'},
        {id:5,name:'Breitling',price:18000,description:'Luxury Watch',image:'john-torcasio-133Vq4tTpBQ-unsplash.jpg'},
        {id:6,name:'Seiko',price:19000,description:'Luxury Watch',image:'daniel-hay-O703kpzIsQI-unsplash.jpg'},
    ];
  return (
    <div>
      <div className='watches'>
        {
          WatchDeta.map((watch)=>(
            <div key={watch.id} className='watch-card'>
              <img src={watch.image} alt={watch.name}

               />
               <h3>{watch.name}</h3>
               <p>{watch.description}</p>
               <div className='price'>${watch.price}</div>
               <button>add to card</button>

            </div>

          )

          

          )
        }

      </div>
      
    </div>
  )
}

export default Watches
