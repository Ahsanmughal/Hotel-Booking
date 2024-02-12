import {useForm} from "react-hook-form";
import { useMutation } from "react-query";
import * as Apiclient from '../api-client';
export type registerformdata = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
}

const Register = () => {
    const {register, watch, handleSubmit, formState:{errors}} = useForm<registerformdata>();
    const mutation = useMutation(Apiclient.register, {
        onSuccess: () => {
            console.log("registeration successfull")
        },
        onError: (error: Error) => {
            console.log(error.message)
        }
    });
    const onSubmit = handleSubmit((data) =>{
        mutation.mutate(data);
    })
    return (
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <h2 className="text-3xl font-bold">
                Create an account
            </h2>
            <div className="flex flex-col md:flex-row gap-5">
                <label className="text-gray-700 text-sm font-bold flex-1">
                    Fist Name
                    <input className="border rounded w-full py-1 font-normal p-3" {...register("firstName", {required: "this field is required"})}/>
                    {
                        errors.firstName && (
                            <span className="text-red-500">{errors.firstName.message}</span>
                        )
                    }
                </label>
                <label className="text-gray-700 text-sm font-bold flex-1">
                    Last Name
                    <input className="border rounded w-full py-1 font-normal p-3"
                        {...register("lastName", {required: "this field is required"})}
                    />
                    {
                        errors.lastName && (
                            <span className="text-red-500">{errors.lastName.message}</span>
                        )
                    }
                </label>
            </div>
            <label className="text-gray-700 text-sm font-bold flex-1">
                    Email
                    <input type="email" className="border rounded w-full py-1 font-normal p-3"
                        {...register("email", {required: "this field is required"})}
                    />
                    {
                        errors.email && (
                            <span className="text-red-500">{errors.email.message}</span>
                        )
                    }
                </label>
                <label className="text-gray-700 text-sm font-bold flex-1">
                    Password
                    <input type="password" className="border rounded w-full py-1 font-normal p-3"
                        {...register("password", {
                            required: "this field is required",
                            minLength: { value: 6, message: "password must be 6 charcters"}
                        }
                    )}/>
                    {
                        errors.password && (
                            <span className="text-red-500">{errors.password.message}</span>
                        )
                    }
                </label>
                <label className="text-gray-700 text-sm font-bold flex-1">
                    Confirm Password
                    <input type="password" className="border rounded w-full py-1 font-normal p-3"
                        {...register("confirmPassword", {
                            validate:(val) => {
                                if(!val) {
                                    return "This field is required"
                                } else if (watch("password") !== val){
                                    return "Your password do not match"
                                }
                            }
                        }
                    )}/>
                    {
                        errors.confirmPassword && (
                            <span className="text-red-500">{errors.confirmPassword.message}</span>
                        )
                    }
                </label>
                <span>
                    <button type="submit" className="bg-blue-600 text-white p-2 hover:bg-blue-500 text-xl">Create Account</button>
                </span>
        </form>
    )
}
export default Register;