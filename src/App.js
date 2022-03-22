import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import CardItem from './components/CardComponent/CardItem';

function App() {
  return (
    <div>

        <NavBar />
        <div>
        <CardItem 
        name='Gabriel Guardia' 
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
