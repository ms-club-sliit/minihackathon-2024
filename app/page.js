import Image from 'next/image';
import RulesPage from '@/app/RulesPage/page.jsx';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <RulesPage />
    </main>
  );
}
