import { useRouter } from 'next/router';

export default function Result() {
  const router = useRouter();
  const { name, password } = router.query;

  return (
    <div>
      <h1 className="text-5xl font-bold">Name: {name}</h1>
      <h1 className="text-5xl font-bold">Password: {password}</h1>
    </div>
  );
}