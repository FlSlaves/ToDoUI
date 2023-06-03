import {Head} from "../components/Head";
import {Signup} from "../components/Signup";

export function SignupPage(){
    return(
        <>
            <Head
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <Signup/>
        </>
    )
}