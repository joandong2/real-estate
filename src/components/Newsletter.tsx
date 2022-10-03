import React from 'react'
import { useForm, Resolver } from 'react-hook-form';

type FormValues = {
  email: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.email ? values : {},
    errors: !values.email
      ? {
        email: {
            type: 'required',
            message: 'This is required.',
          },
        }
      : {},
  };
};

const Newsletter: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <form onSubmit={onSubmit} className="mt-4">
        <div className="flex space-x-4">
          <input className="shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register("email")} placeholder="Email address" />
          {errors?.email && <p>{errors.email.message}</p>}
          <input type="submit" value="Submit" className="cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 focus:outline-none focus:shadow-outline"/>
        </div>
      </form>
    </>
  )
}

export default Newsletter