'use client'

// Remove or comment out this line
// import { signIn, signOut, useSession } from 'next-auth/react'

export default function Login() {
  // Remove or comment out this line
  // const { data: session } = useSession()

  // Implement your custom login logic here
  const handleSignIn = () => {
    // Your sign-in logic
  }

  const handleSignOut = () => {
    // Your sign-out logic
  }

  return (
    <div className="flex flex-col items-center gap-2">ss
      {/* <p>Not signed in</p>
      <button onClick={handleSignIn}>Sign in with Google</button> */}
    </div>
  )
}