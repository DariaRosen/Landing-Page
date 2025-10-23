import { Layout } from "./components/Layout";
import { Hero } from "./components/sections/Hero";
import { Brands } from "./components/sections/Brands";

function App() {
  return (
    <Layout title="EdgeAI">
      <Hero />
      <Brands />
    </Layout>
  );
}

export default App;
