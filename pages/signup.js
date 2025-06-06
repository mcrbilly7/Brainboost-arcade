import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import { useRouter } from "next/router";

const avatarOptions = Array.from({ length: 25 }, (_, i) => `/avatars/${i + 1}.png`);

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(avatarOptions[0]);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCredential.user.uid), {
        username,
        avatar,
        email
      });
      router.push("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSignup} className="p-4 max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold">Sign Up</h2>
      <input className="border p-2 w-full" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="border p-2 w-full" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input className="border p-2 w-full" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <div className="grid grid-cols-5 gap-2">
        {avatarOptions.map((src) => (
          <img
            key={src}
            src={src}
            alt="avatar"
            className={`w-16 h-16 cursor-pointer border-2 ${avatar === src ? "border-blue-500" : "border-transparent"}`}
            onClick={() => setAvatar(src)}
          />
        ))}
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
    </form>
  );
                                                                                                                }
