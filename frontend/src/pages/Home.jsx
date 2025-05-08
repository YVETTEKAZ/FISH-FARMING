import { useNavigate } from "react-router-dom";
import { Link} from "react-router-dom";
function Home() {
    const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/layout/register");
  };
    return (
        <div >
        <div className="w-full min-h-screen  flex flex-col   items-center justify-center  min-h-screen bg-cover bg-center bg-no-repeat " style={{ backgroundImage: "url('/src/pages/bc.jpeg')" }}>
          <h1 className="text-3xl font-bold text-white  items-center">SMART FISH FARMING IN RWANDA</h1>
          <p className="text-lg text-black-700 items-center">Welcome to our platform Join a network of fish farmers and experts using</p>
          <p className="text-lg text-black-700">technology to improve aquaculture in Rwanda. Whether you're farming in ponds, </p>
          <p className="text-lg text-black-700">lakes, or just exploring, our platform provides the tools and information you need.
  </p>
  <p className="text-lg text-black-700    font-bold ml-0">Monitor Your Ponds in Real-Time |</p>
  <p className="text-lg text-black-700 font-bold">Detect Fish Health Issues</p>
  <p className="text-lg text-black-700 font-bold">Powered Insights for Better Harvests</p>
  </div>
  {/* fish species part */}
  
  <div>
    <h2 className="" style={{ fontWeight: 'bold', fontSize: '2rem' }}>Some fish species available in Rwanda</h2>
   
    {/* catfish */}
    
    <div> 
    <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '30px' }}>
  {/* Left Side - Image */}
  <div
    className="w-200 h-60 ml-5"
    style={{
      backgroundImage: "url('/src/img/catfish.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "8px"
    }}
  ></div>

  {/* Right Side - Text */}
  <div>
    <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem' ,color:'brown'}}>African Catfish</h2>
    <p>
      Catfish are commonly farmed in Rwanda. They are known for their fast growth,
      high protein, and ability to adapt to different water conditions.
      they are cultivated Fish farms, ponds, and natural water bodies
      they are Good for aquaculture for their strong resistance to harsh conditions.
      
    </p>
  </div>

      </div>

      {/* Tilapia */}

      <div> 
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '30px' }}>
 
 


  <div>
    <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem' ,color:'brown'}}> Nile Tilapia (Oreochromis niloticus)</h2>
    <p>
      Known as <b>Tilapia</b>The Nile tilapia is a species of tilapia, a cichlid fish native to parts of Africa and the Levant, particularly Israel and Lebanon.
      Nile tilapia is the most cultivated fish species among Rwandan fish farmers in  Ponds, lakes, and rivers and it is freshwater fish
      and it known for it Major commercial species due to fast growth and mild taste.
    </p>
  </div>
  <div
    className="w-250 h-60 mr-5"
    style={{
      backgroundImage: "url('/src/img/tilapia.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "8px"
    }}
  ></div>

      </div>
</div>

{/*sambaza */}

<div> 
<div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '30px' }}>
  {/* Left Side - Image */}
  <div
    className="w-200 h-60 ml-5"
    style={{
      backgroundImage: "url('/src/img/sambaza.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "8px"
    }}
  ></div>

  {/* Right Side - Text */}
  <div>
    <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', color:'brown' }}>Sambaza (Limnothrissa miodon)
    </h2>
    <p>
    Small, silver, sardine-like fish. Rich in protein, usually sun-dried and used in local dishes. Eaten whole.
    Mainly found in <b>Lake Kivu</b>  and other freshwater lakes in the East African
    A key income source for small-scale fishermen, especially around Lake Kivu.
    </p>
  </div>
</div>

{/* Nile perch */}

<div> 
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '30px' }}>

  <div>
    <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem' ,color:'brown'}}> Haplochromis species (small cichlids)</h2>
    <p>
    Small cichlids, various colors. Often prey for larger fish. Some are colorful and used in aquariums.
    found in Lake Kivu and Lake Mugesera
    </p>
  </div>
  <div
    className="w-250 h-60 mr-5"
    style={{
      backgroundImage: "url('/src/img/small c.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "8px"
    }}
  ></div>

      </div>
      
</div>
 
      </div>
    </div>
  </div>
  
        <div  className=" w-full   h-50 bg-blue-300  mt-70 "><h1 className="text-black ml-100 font-bold">Are you a fish farmer  need to boost you business  production ?</h1>
        <p  className="text-black ml-120">start today!</p>
 <Link to="Login.jsx" className="px-4 py-2 bg-red-900 text-white rounded-lg ml-150">Register here</Link>
        
        </div>
  </div>
    );
  }
  
  export default Home;