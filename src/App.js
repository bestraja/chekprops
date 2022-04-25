
import './App.css';
import Profile from './Profile/Profile';

function App() {
  const filio =[
    {image:'https://static01.nyt.com/images/2012/11/01/us/TEACHER-1/TEACHER-1-superJumbo.jpg',
      fullName:' My Name is Manar',
      bio:'absty kjhezjhf jzheiuh hdueigfb',
      profession:'Teacher'

    },

  
    {image:'https://media.istockphoto.com/photos/african-american-female-doctor-holding-clipboard-isolated-picture-id171245659?k=6&m=171245659&s=612x612&w=0&h=3CDPefBEneY4-n6N9ZOOq4suj3Q3RTIuFRk0NsysxJU=',
    fullName:' My Name is Asma',
    bio:'uytreio jghgfty kghuyf',
    profession:'Doctor'

  
  },

  {image:'https://th.bing.com/th/id/R.98405b28bc792a55112f5f9c685c72c3?rik=33jqGhyB2WOYfQ&pid=ImgRaw&r=0',
  fullName:' My Name is Aya',
  bio:'lkoppiu kjhezjhf jzheiuh hdueigfb',
  profession:'web developper'


},

  {image:'https://cdn.w600.comps.canstockphoto.fr/prof-femme-image_csp6910617.jpg',
      fullName:'My Name is Maryam',
      bio:'absty kjhezjhf jzheiuh hdueigfb',
      profession:'Professor'

    },
{
image:'https://th.bing.com/th/id/R.a0b94364c0eff0eaf63d2fbc5f2dc749?rik=ddPMOLcy0Q3qSA&riu=http%3a%2f%2fi.dailymail.co.uk%2fi%2fpix%2f2014%2f07%2f18%2farticle-2697472-1FA1A62900000578-647_634x844.jpg&ehk=Mzg9Et7UB33OugHmCAqkavtIQH9cBZ5W9MS9P8%2fb3c4%3d&risl=&pid=ImgRaw&r=0',
      fullName:'My Name is Hayet',
      bio:'absty kjhezjhf jzheiuh hdueigfb',
      profession:'Sports teacher'

    
},
{image:'https://th.bing.com/th/id/OIP.HDbgS1txqC0TPag5YL430QHaE5?pid=ImgDet&rs=1',
fullName:'My Name is Aicha',
bio:'poyu kjhezjhf jzheiuh hdueigfb',
profession:'Music teacher'

},
]
  return (
    <div className="App">
      <header className="App-header">
        <Profile cardport={filio} />
      </header>
    </div>
  );
}

export default App;
