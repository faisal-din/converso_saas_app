import CompanionCard from '@/components/CompanionCard';
import CompanionsList from '@/components/CompanionsList';
import CTA from '@/components/CTA';
import { recentSessions } from '@/constants';

const companions = [
  {
    id: 1,
    name: 'Alice',
    topic: 'Differential Equations',
    subject: 'Mathematics',
    duration: 30,
    color: '#4A90E2',
    bookmarked: false,
  },
  {
    id: 2,
    name: 'Bob',
    topic: 'Quantum Mechanics',
    subject: 'Physics',
    duration: 45,
    color: '#50E3C2',
    bookmarked: true,
  },
  {
    id: 3,
    name: 'Charlie',
    topic: 'Organic Chemistry',
    subject: 'Chemistry',
    duration: 60,
    color: '#9013FE',
    bookmarked: false,
  },
];

const Page = async () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className='home-section'>
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={companion.color}
          />
        ))}
      </section>

      <section className='home-section'>
        <CompanionsList
          title='Recently completed sessions'
          companions={recentSessions}
          classNames='w-2/3 max-lg:w-full'
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
