import Navigation from "../components/Navigation";
import Trainings from "../components/Trainings";
import NewTraining from "../components/NewTraining";

export default function Home() {
  return (
    <main>
      <h1>Bienvenidos a DOTTrainings</h1>
      <Navigation />
      <Trainings />
      <NewTraining />
    </main>
  );
}
