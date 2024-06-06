// client-exercises.tsx
import useSWR from 'swr';
import DashboardLayout from '@/components/DashboardLayout';
import { useUser } from '@clerk/nextjs';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ClientExercises = ({ email }: { email: string }) => {
  const { data: clientData, error } = useSWR(`/api/client-exercises?email=${email}`, fetcher);

  if (error) return <div>Failed to load exercises</div>;
  if (!clientData) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Assigned Exercises</h2>
      <ul>
        {clientData.exercises.length > 0 ? (
          clientData.exercises.map((exercise: any, index: number) => (
            <li key={index} className="mb-2">{exercise}</li>
          ))
        ) : (
          <li>No exercises assigned</li>
        )}
      </ul>
    </div>
  );
};

const ClientExercisesPage = () => {
  const { user } = useUser();
  const email = user?.primaryEmailAddress?.emailAddress;

  if (!email) return <div>Please log in to view your exercises.</div>;

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Client Dashboard</h1>
      <ClientExercises email={email} />
    </DashboardLayout>
  );
};

export default ClientExercisesPage;
