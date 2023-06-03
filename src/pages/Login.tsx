import {Head} from "../components/Head"
import {Login} from "../components/Login"

export function LoginPage(){
    return(
        <>
             <Head
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
            <Login/>
        </>
    )
}