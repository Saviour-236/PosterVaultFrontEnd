import { useNavigate } from "react-router-dom"

function SignUpButton({ loggedIn }: { loggedIn: boolean }) {
    const Navigate = useNavigate();
    const handleClick = () => {
        Navigate("/signUp");
    }
    return (
        <>
            {!loggedIn && <button
                className=" p-2 flex transition-all duration-200 ease-linear border space-x-1 rounded-md bg-[#d9f3e2]
                hover:bg-[#bef5d2]
                dark:bg-[#abe0f050]    "
                onClick={handleClick}
            >
                <svg className='h-6 w-6'
                    version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
                        fill={"#000000"} stroke="none">
                        <path d="M90 206 c-28 -35 11 -93 48 -70 35 22 22 84 -18 84 -10 0 -23 -7 -30
-14z m47 -22 c8 -21 -13 -42 -28 -27 -13 13 -5 43 11 43 6 0 13 -7 17 -16z"/>
                        <path d="M56 89 c-14 -11 -26 -29 -26 -40 0 -16 7 -19 45 -19 25 0 45 5 45 10
0 6 -17 10 -37 10 l-38 1 24 19 c13 11 34 20 47 20 13 0 24 5 24 10 0 18 -57
11 -84 -11z"/>
                        <path d="M156 84 c-31 -30 -9 -84 34 -84 24 0 50 26 50 50 0 24 -26 50 -50 50
-10 0 -26 -7 -34 -16z m50 -19 c14 -13 14 -17 0 -31 -15 -14 -17 -14 -32 0
-12 13 -13 18 -2 30 16 19 16 19 34 1z"/>
                    </g>
                </svg>
                <p className='text-nowrap'>Sign Up</p>
            </button>
            }
        </>
    )
}

export default SignUpButton