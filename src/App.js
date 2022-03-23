import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import CardItem from './components/CardComponent/CardItem';
import './App.css'


function App() {
  return (
    <div>

        <NavBar />

        <div className='container Cards'>
          <CardItem 
          name='Gabriel Guardia' 
          age='22 years' 
          description='Estudiante de Ingeniería Informática, Desarrollador Full Stack Jr, IBM Student Advocate, Estudiante de Finanzas, Estudiante de Psicología' 
          img='img'
          />
          <CardItem 
          name='Gabrssiel Guardia' 
          age='22 years' 
          description='Estudiante de Ingeniería Informática, Desarrollador Full Stack Jr, IBM Student Advocate, Estudiante de Finanzas, Estudiante de Psicología' 
          img='img'
          />
          <CardItem 
          name='Gabriel Guardia' 
          age='22 years' 
          description='Estudiante de Ingeniería Informática, Desarrollador Full Stack Jr, IBM Student Advocate, Estudiante de Finanzas, Estudiante de Psicología' 
          img='img'
          />
        </div>

        <ItemListContainer nombre="Franco"/>
        <ItemCount/>

    </div>
  );
}

export default App;
