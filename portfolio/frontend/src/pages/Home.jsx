import { useApi } from '../hooks/useApi';
import { fetchProfile, fetchExperiences } from '../api/client';
import Hero from '../components/home/Hero';
import Timeline from '../components/home/Timeline';
import TechStack from '../components/home/TechStack';
import Education from '../components/home/Education';

export default function Home() {
  const { data: profile } = useApi(fetchProfile);
  const { data: expData } = useApi(fetchExperiences);

  return (
    <div>
      <Hero profile={profile} />
      <Timeline experiences={expData?.experiences} />
      <TechStack techStack={profile?.tech_stack} />
      <Education education={profile?.education} languages={profile?.languages} />
    </div>
  );
}
