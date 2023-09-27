// import { Button } from "@mui/material";

// import { Label } from "@mui/icons-material";
import { Button, Checkbox, FormControlLabel, useTheme } from "@mui/material";
import { RiGoogleFill } from 'react-icons/ri';
import { LiaFacebookF } from 'react-icons/lia';
import { TiSocialLinkedin } from 'react-icons/ti';
import { Link } from "react-router-dom";
const Login = () => {

    const theme = useTheme();
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center ">
                {/* Form  */}
                <form className="flex flex-col gap-3 shadow-lg p-6 rounded-lg">
                    <h4 className="mb-4 text-3xl font-bold">Login</h4>
                    <div className="w-72 flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" className="border rounded-md w-full h-8" />
                    </div>
                    <div className="w-72 flex flex-col gap-2">
                        <label htmlFor="email">Password</label>
                        <input type="password" name="password" className="border rounded-md w-full h-8" />
                    </div>

                    <div className="flex items-center">
                        <FormControlLabel control={<Checkbox defaultChecked sx={{
                            height: 'auto',
                            width: 'auto',
                            color: theme.palette.secondary.main,
                            '&.Mui-checked': {
                                color: theme.palette.secondary.main,
                            },
                        }} />} label="Remember me?" />
                    </div>
                    <Button variant="contained" sx={{ background: theme.palette.secondary.main, color: 'white' }} >Submit</Button>
                    <div className="flex justify-end text-gray-500">
                        <h4>Forget Password</h4>
                    </div>

                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-60 h-px my-5 bg-gray-200 border-0 dark:bg-gray-400" />
                        <span className="absolute px-3 font-medium text-black -translate-x-1/2 border-2 border-gray-400 bg-white left-1/2 dark:text-black rounded-md dark:bg-white">OR</span>
                    </div>

                    {/* Social Media Icons  */}
                    <div className="flex justify-center gap-11 ">
                        <RiGoogleFill className="h-8 w-8 border-2 border-pink-600 rounded-full p-1 text-pink-600 bg-white" />
                        <LiaFacebookF className="h-8 w-8 border-2 border-blue-600 rounded-full p-1 text-blue-600 bg-white" />
                        <TiSocialLinkedin className="h-8 w-8 border-2 border-blue-600 rounded-full p-1 text-blue-600 bg-white" />
                    </div>
                    <div className="flex justify-center items-center">
                        Need an account? &nbsp; <Link color="customColors1" className="underline" to='/signup'>SIGN UP</Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;