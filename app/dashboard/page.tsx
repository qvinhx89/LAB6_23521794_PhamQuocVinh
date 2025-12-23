import ThemeToggle from '../ui/ThemeToggle';

async function fetchProfile() {
  await new Promise((resolve) => setTimeout(resolve, 1200));
  return { name: 'Pham Quoc Vinh', studentId: '23521794', role: 'Student', plan: 'Module 6' };
}

export default async function DashboardPage() {
  const profile = await fetchProfile();

  return (
    <div>
      <h1>Welcome, {profile.name}</h1>
      <p>ID: {profile.studentId} — Role: {profile.role} — Track: {profile.plan}</p>
      <ThemeToggle />
    </div>
  );
}
