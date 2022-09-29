import React from 'react'
import { useForm, Resolver } from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
  inquiry: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.firstName ? values : {},
    errors: !values.firstName
      ? {
          firstName: {
            type: 'required',
            message: 'This is required.',
          },
        }
      : {},
  };
};

const InquiryForm:React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <form onSubmit={onSubmit} className="mt-4">
        <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" {...register("firstName")} placeholder="First Name" />
        {errors?.firstName && <p>{errors.firstName.message}</p>}
        <input className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" {...register("lastName")} placeholder="Last Name" />
        {errors?.lastName && <p>{errors.lastName.message}</p>}
        <textarea className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline min-h-[100px]" {...register("inquiry")} placeholder="Message"></textarea>
        <input type="submit" value="Send Message" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"/>
      </form>
    </>
  );
}

export default InquiryForm