import { useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "../lib/firebase";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/login");
      }
    });
    return () => unsubscribe();
  }, []);

  return <div>Welcome to your Dashboard!</div>;
}
