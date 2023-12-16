import { getAuth, signOut } from 'firebase/auth';

const Logout = () => {

  // Using an asynchronous IIFE (Immediately Invoked Function Expression)
  (async () => {
    try {
      const auth = getAuth();
      await signOut(auth);

      alert("User logged out successfully");
    } catch (error) {
      console.error('Error during logout:', error);
      // Handle error if needed
    }
  })();
};

export default Logout;
