import Heading from "../ui/Heading";
import SignUpFrom from "../features/authentication/SignupForm";

function NewUsers() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SignUpFrom />
    </>
  );
}

export default NewUsers;
