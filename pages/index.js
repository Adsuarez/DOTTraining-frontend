import Trainings from "../components/Trainings";
import NewTraining from "../components/NewTraining";
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <h1>Bienvenidos a DOTTrainings</h1>
      <Trainings />
      <NewTraining />
    </Layout>
  );
}
