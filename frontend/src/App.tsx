import NotificationButton from './components/NotificationButton'
import Header from './components/Header'
import SalesCard from './components/SalerCard'

function App() {
  return(
    <>
    
      <Header />
      <main>
        <section id="sales">
            <div class="dsmeta-container">
              <SalesCard />
            </div>
        </section>
      </main>
      
    </>
  )
}

export default App
