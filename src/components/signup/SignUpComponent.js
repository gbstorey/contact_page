import SignUpInput from "./SignUpInput"
import TermsOfService from "./TermsOfService"

export default function SignUpComponent() {
    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded text-black w-full shadow-lg">
                <h1 className="mb-8 text-3xl text-center">Sign up</h1>

                <SignUpInput type={"text"} name={"fullname"} placeholder={"Full Name"}/>
                <SignUpInput type={"text"} name={"email"} placeholder={"Email"}/>
                <SignUpInput type={"password"} name={"password"} placeholder={"Password"}/>
                <SignUpInput type={"password"} name={"confirm_password"} placeholder={"Confirm Password"}/>

                <button
                    type="submit"
                    className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-700 focus:outline-none my-1"
                >Create Account</button>

                <TermsOfService />
                
            </div>

            <div className="text-grey-dark mt-6">
                Already have an account? 
                <a className="no-underline border-b border-blue text-blue-700" href="../login/">
                    <span> Log in.</span>
                </a>
            </div>
        </div>
    </div>
    )
}