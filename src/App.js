import './App.css'

function App() {
  return (
      <main>
        <section className='glass'>
          <div className='dashboard'>
            <div className='name'>
              <h2>medic<span className='AR'>AR</span></h2>
            </div>
            <div className='links'>
              <div className='link'>
                <h3>Ingresar</h3>
              </div>
              <div className='link'>
                <h3>Registrarse</h3>
              </div>
              <div className='link'>
                <h3>Informacion</h3>
              </div>
            </div>
            <div className='logo'>
              <img height='60' src='https://upload.wikimedia.org/wikipedia/commons/e/ec/Ministerio_de_Salud.svg' alt=''></img>
            </div>
          </div>
          <div className='form'>
            <div className='card'>
              <form className='form-inputs'>
                <input placeholder='DNI' />
                <input placeholder='Contraseña'/>
                <select>
                  <option>---Obra Social---</option>
                </select>
              </form>
              <h2>Ingresar</h2>
            </div>
          </div>
        </section>
        <div className='circle-1'></div>
        <div className='circle-2'></div>
      </main>
  );
}

export default App;
