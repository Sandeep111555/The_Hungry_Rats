import { Link } from "react-router-dom";
import { Formik, useFormik } from "formik";
import loginimg from "../Assets/img/loginimg.jpg";
import * as Yup from "yup";
const Login = () => {
	const formik = useFormik({
		initialValues: {
			FirstName: "",
			LastName: "",
			Email: "",
			password: "",
		},
		onSubmit: (values) => {
			console.log({ values });
		},
		validationSchema: Yup.object({
			FirstName: Yup.string()
				.max(15, "Must be 15 character or less")
				.required("Required"),
			LastName: Yup.string()
				.max(15, "Must be 15 character or less")
				.required("Required"),
			Email: Yup.string().email("Invalid email format").required("required"),
			password: Yup.string()
				.matches(
					/^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{1,}$/,
					"Must include one uppercase and atleast one special character"
				)
				.required("Required"),
		}),
	});
	return (
		<div className="bg-blue-50">
			<div className="flex p-2 my-3 justify-center items-center">
				<img
					src={loginimg}
					alt="not rendered"
					className="w-[500px] h-[500px] shadow-lg"
				/>
				<form
					onSubmit={formik.handleSubmit}
					className=" h-[500px] w-[500px] shadow-lg bg-white ml-1 pl-10"
				>
					<h2 className="mt-20 font-serif text-2xl">
						Login to your Account
					</h2>
                    <p className="bg-pink-600 w-20 h-0.5 mb-10"></p>
					{/* <h4>First Name:</h4>
				<input
                    id="FirstName"
					type="text"
					placeholder="Enter Your First Name"
                    onChange={formik.handleChange}
					value={formik.values.FirstName}
                    onBlur={formik.handleBlur}
				/> */}
					{/* {(formik.errors.FirstName)? <p className="text-red-600">{formik.errors.FirstName}</p>:null}
				<h4>Last Name</h4>
				<input
                    id="LastName"
					type="text"
					placeholder="Enter your Last Name"
					value={formik.values.LastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
				/> */}
					{/* {(formik.touched.LastName && formik.errors.LastName)? <p className="text-red-600">{formik.errors.LastName}</p>:null} */}
					<h4 className="text-xl">Email</h4>
					<input
						className="border focus:bg-green-50 w-72 h-9 my-2"
						id="Email"
						type="email"
						placeholder="Enter Your email"
						value={formik.values.Email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.Email && formik.errors.Email ? (
						<p className="text-red-600">{formik.errors.Email}</p>
					) : null}
					<h4 className="text-xl">Password</h4>
					<input
						className="border focus:bg-green-50 w-72 h-9 my-2"
						id="password"
						type="password"
						placeholder="Password"
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.password && formik.errors.password ? (
						<p className="text-red-600">{formik.errors.password}</p>
					) : null}
					<Link to="/">
						<button
							className="bg-blue-500 w-72 rounded-2xl hover:scale-90 h-10 text-white my-4"
							id="submit"
							value="submit"
						>
							Login
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default Login;
