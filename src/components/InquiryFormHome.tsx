import React from 'react'
import { useForm, Resolver } from 'react-hook-form';

type FormValues = {
  name: string;
  phone: string;
  email: string;
  inquiry: string;
  type: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.name ? values : {},
    errors: !values.name
      ? {
          name: {
            type: 'required',
            message: 'Name is required.',
          },
        }
      : {},
  };
};

const InquiryFormHome:React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <form onSubmit={onSubmit} className="">
        <input className="border border-gray-400 appearance-none w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" {...register("name")} placeholder="Name" />
        {errors?.name && <p className="text-red-600 mb-1">{errors.name.message}</p>}
        <input className="border border-gray-400 appearance-none w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" {...register("email")} placeholder="Email Address" />
        {errors?.email && <p>{errors.email.message}</p>}
        <input className="border border-gray-400 appearance-none w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" {...register("phone")} placeholder="Phone" />
        {errors?.phone && <p>{errors.phone.message}</p>}
        <select {...register("type")} className="border border-gray-400 w-full py-2 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
          <option value="disabled selected">Inquiry Type</option>
          <option value="purchase">Purchase</option>
          <option value="sell">Sell</option>
          <option value="rent">Rent</option>
          <option value="evaluation">Evaluation</option>
        </select>
        <textarea className="border border-gray-400 appearance-none w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline min-h-[100px]" {...register("inquiry")} placeholder="Message"></textarea>
        <input type="submit" value="Send Message" className="cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 focus:outline-none focus:shadow-outline"/>
      </form>
    </>
  );
}

export default InquiryFormHome