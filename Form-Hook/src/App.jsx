import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) =>
      setTimeout(() => {
        console.log("Submitting the from", data);
        resolve();
      }, 2000)
    );
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="flex justify-between gap-2">
          <label>First name: </label>
          <input
            type="text"
            className={
              errors.firstname
                ? "border-2 border-red-600 outline-none text-black px-2 bg-white"
                : "border-2 border-gray-600 text-black px-2 bg-white"
            }
            {...register("firstname", {
              minLength: { value: 3, message: "Min length atleast 3" },
              maxLength: { value: 10, message: "Max length atmost 10" },
            })}
          />
        </div>
        {errors.firstname && (
          <p className="text-red-400">{errors.firstname.message}</p>
        )}

        <div className="flex justify-between gap-2">
          <label>Middle name: </label>
          <input
            type="text"
            className={
              errors.middlename
                ? "border-2 border-red-600 outline-none text-black px-2 bg-white"
                : "border-2 border-gray-600 text-black px-2 bg-white"
            }
            {...register("middlename")}
          />
        </div>

        <div className="flex justify-between gap-2">
          <label>Last name: </label>
          <input
            type="text"
            className={
              errors.lastname
                ? "border-2 border-red-600 outline-none text-black px-2 bg-white"
                : "border-2 border-gray-600 text-black px-2 bg-white"
            }
            {...register("lastname", {
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Last name is not as per rules",
              },
            })}
          />
        </div>
        {errors.lastname && (
          <p className="text-red-400">{errors.lastname.message}</p>
        )}

        <input
          type="submit"
          className="bg-blue-500 w-[120px] cursor-pointer hover:bg-blue-600 transition-all duration-200"
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting" : "Submit"}
        />
      </form>
    </div>
  );
};

export default App;
