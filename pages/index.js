import { TrainingsList } from "../components/TrainingsList";
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <h1>Bienvenidos a DOTTrainings</h1>
      <TrainingsList />
    </Layout>
  );
}
