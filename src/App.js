import logo from './logo.svg';
import './App.css';
import Cards from './Card';


function App() {

  const food=[
    {
      id:1,
      name:"Annapoorna Garden Restaurant",
      cuisine:"North Indian,South Indian",
      rating:"4.2",
      amount:150,
      units:"pure veg",
      category:"pureveg",
      deliverytime:30,
  },

  {
      id:2,
      name:"Hotel Anandhabhavan",
      cuisine:"North Indian,South Indian",
      
      rating:"3.9",
      amount:90,
      units:"pure veg",
      category:"pureveg",
      deliverytime:45,
  },
  {
      id:3,
      name:"Salem Sri Saravanabhavan",
      cuisine:"North Indian,South Indian",
     
      rating:"4.1",
      amount:200,
      units:"pure veg",
      category:"pureveg",
      deliverytime:20,
  },

  {
      id:4,
      name:"Sri Vishaka bhavan",
      cuisine:"North Indian,South Indian",
    
      rating:"4.3",
      amount:70,
      units:"pure veg",
      category:"pureveg",
      deliverytime:15,
  },
{
      id:5,
      name:"vairamaligai-Takeaway",
      cuisine:"North Indian,South Indian,chinese",
     
      rating:"4.2",
      amount:350,
      units:" veg&non-veg",
      category:"Both",
      deliverytime:45,
  },
  {
      id:6,
      name:"The-Choclate Room",
      cuisine:"North Indian,South Indian,chinese",
      
      rating:"4.6",
      amount:250,
      units:" veg&non-veg",
      category:"Both",
      deliverytime:25,
  },
  {
      id:7,
      name:"Shravan Specials By Lunchbox",
      cuisine:"North Indian,South Indian",
     
      rating:"3.8",
      amount:180,
      units:" veg&non-veg",
      category:"Both",
      deliverytime:30,
  },
  {
      id:8,
      name:"Faasos' Signature Wraps&...",
      cuisine:"North Indian,South Indian,chinese",
   
      rating:"4.0",
      amount:350,
      units:" veg&non-veg",
      category:"Both",
      deliverytime:35,
  },
  {
      id:9,
      name:"KFC",
      cuisine:"North Indian,South Indian,chinese",
     
      rating:"4.0",
      amount:499,
      units:"non-veg",
      category:"nonveg",
      deliverytime:40,
  },
  {
      id:10,
      name:"Kasali Hotel",
      cuisine:"North Indian,South Indian",
    
      rating:"3.6",
      amount:300,
      units:" non-veg",
      category:"nonveg",
      deliverytime:30,
  },
  {
      id:11,
      name:"The-Briyani lite",
      cuisine:"North Indian,South Indian",
      
      rating:"4.0",
      amount:350,
      units:" non-veg",
      category:"nonveg",
      deliverytime:45,
  },
  {
      id:12,
      name:"Behrouz-briyani",
      cuisine:"North Indian,South Indian",
      
      rating:"3.5",
      amount:650,
      units:" non-veg",
      category:"nonveg",
      deliverytime:45,
  },
  {
      id:13,
      name:"Aasife-Briyani",
      cuisine:"North Indian,South Indian,chinese",
     
      rating:"4.1",
      amount:180,
      units:" non-veg",
      category:"nonveg",
      deliverytime:30,
  },
  {
      id:14,
      name:"Arabian-HotGrill",
      cuisine:"North Indian,South Indian,chinese",
      
      rating:"3.0",
      amount:270,
      units:"veg&non-veg",
      category:"Both",
      deliverytime:20,
  },
  {
      id:15,
      name:"The Good Bowl",
      cuisine:"North Indian,South Indian",
    
      rating:"4.1",
      amount:350,
      units:"non-veg",
      category:"nonveg",
      deliverytime:30,
  },
  {
      id:16,
      name:"Anjappar",
      cuisine:"North Indian,South Indian,chinese",
     
      rating:"3.7",
      amount:320,
      units:"veg&non-veg",
      category:"Both",
      deliverytime:35,
  },
  {
      id:17,
      name:"Dindigul Thalapakattu",
      cuisine:"North Indian,South Indian",
      
      rating:"4.0",
      amount:400,
      units:"non-veg",
      category:"nonveg",
      deliverytime:25,
  },

  {
      id:18,
      name:"Sri Madhuram Hotspot...",
      cuisine:"North Indian,South Indian",
      
      rating:"4.0",
      amount:90,
      units:"pure-veg",
      category:"pureveg",
      deliverytime:15,
  },
 
  ]
  return (
    <div className="App">
      <Cards details={food}/>
      
      
    </div>
  );
}

export default App;
