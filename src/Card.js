import {Component} from 'react'

class Cards extends Component{
   render(){

        const {details}=this.props
        const store=details.map((e)=>{
            return(
                <div className='card-col'>
                            <div className='card-card'>
                               <h2 className='head'>{e.name}</h2>
                               <p>{e.cuisine}</p>
                                <p><i class="fa fa-star" aria-hidden="true"></i>{e.rating}</p>
                                <p>Rs.{e.amount}</p>
                                <p>{e.units}</p>
                                {/* <p>{e.category}</p> */}
                                <p className='del'>Delivery-time:{e.deliverytime}Mins</p>
                            </div>

                 </div>

            )
        })
    return(
        <div>
            
                <div className='container'>
                    <div className='row'>
                         {store}
                        

                    </div>

                </div>

            
        </div>

    )
   }

}

export default Cards