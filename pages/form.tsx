import React from 'react'
import {useForm, Controller} from 'react-hook-form'
import { Input } from "@material-ui/core";
import { Input as AntdInput } from "antd";

interface FormData {
  firstName: string,
  lastName?: string,
  number?: string,
  email: string,
  age: number,
  gender: string,
}

const FormPage = () => {
  const {register, handleSubmit, control} = useForm<FormData>();
  const onSubmit = (data:FormData) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register('firstName', {required: true, maxLength: 20})}/>
      {/* <input {...register('lastName', {pattern: /^[A-Za-z]+$/i})}/> */}
      <Controller
        render={({ field }) => <Input {...field} />}
        name="lastName"
        rules={{
          pattern: /^[A-Za-z]+$/i
         }}
        control={control}
        defaultValue=""
      />
      <input {...register('number', {pattern: /[^[1-9]\d*$]/i, maxLength: 9})}/>
      {/* <input {...register('email', {required: true, pattern: /^\S+@\S+\.\S+$/i})}/> */}
      <Controller
        render={({ field }) => <AntdInput {...field} />}
        name="email"
        rules={{
          required: true, 
          pattern: /^\S+@\S+\.\S+$/i
         }}
        control={control}
        defaultValue=""
      />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit"/>
    </form>
  )
}

export default FormPage;