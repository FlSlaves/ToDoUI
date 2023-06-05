import {Head} from "../components/Head"
import {Login} from "../components/Login"
import {useState} from "react";
import {Signup} from "../components/Signup";

export function LoginPage(){
    const [login,setLogin] = useState(true)
    return(
        <div className={"flex justify-center mt-2"}>
            {login ? (
                <div className={"w-full sm:w-[600px] bg-white rounded-2xl "}>
                    <Head isLogin={() => setLogin(false)}
                        heading="Login to your account"
                        paragraph="Don't have an account yet? "
                        linkName="SignUp"
                    />
                    <Login/>
                </div>
            ):(
                <div className={"w-full sm:w-[600px] bg-white rounded-2xl "}>
                    <Head isLogin={() => setLogin(true)}
                        heading="Signup to create an account"
                        paragraph="Already have an account? "
                        linkName="Login"
                    />
                    <Signup />
                </div>
            )}
        </div>
    )
}