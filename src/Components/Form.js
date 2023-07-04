import React from "react";
import "../App.css";
import signInPic from "../assets/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.avif";
import { useForm } from "react-hook-form";

const Form = () => {
  //const {register,handleSubmit,watch,formState:{errors}}=useForm();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <section className="section-form">
        <div className="register">
          <div className="col-1">
            <h2>Sign In</h2>
            <span>Register and enjoy!</span>

            <form
              id="form"
              className="flex flex-col"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                {...register("username")}
                placeholder="username"
              ></input>
              <input
                type="text"
                {...register("password")}
                placeholder="password"
              ></input>
              <input
                type="text"
                {...register("confirm password")}
                placeholder="confirm password"
              ></input>
              <input
                type="text"
                //validacija
                {...register("mobile", { required: true, maxLength: 10 })}
                placeholder="mobile number"
              ></input>
              {errors.mobile?.type === "required" &&
                "Mobile number is required"}
              {errors.mobile?.type === "maxLength" && "Max length exceed"}
              <button className="btn">Sign In</button>
            </form>
          </div>
          <div className="col-2">
            <img src={signInPic} alt=""></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
