import NavBar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount';
import CardItem from './components/CardComponent/CardItem';
import './App.css'
import CardListComponent from './components/CardListComponent';


function App() {
  return (
    <div>

    <NavBar />

        <div className='container'>

          <CardItem 
          name='Gabriel Guardia' 
          age='22 years'
          description='Estudiante de Ingeniería Informática, Desarrollador Full Stack Jr, IBM Student Advocate, Estudiante de Finanzas, Estudiante de Psicología' 
          img='https://occ-0-2299-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABe4D-gQaPFiqOU-6Yhe72q62_gPg3S_IC3W9za43blucaL9mqAudWfFmqICoVckic-PVLMuel_miushufyj7-mssKvv-WsjbWFD6Ix0xFO8Ux5Dh.jpg?r=1ab'
          altName='Gabriel'
          />


        </div>

      <div className='container'><CardListComponent /></div>
        

    <ItemCount stock='4'/>

    </div>
  );
}

export default App;
