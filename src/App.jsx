import Nav from "./components/Nav";
import Hero from "./sections";
import { PopularProducts } from "./sections";

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
    </main>
  );
};

export default App;
