import {useForm} from 'react-hook-form'
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors ,isSubmitting},
  } = useForm();

  async function onSubmit(data){
    await new Promise((reslove)=>setTimeout(reslove,5000));
    console.log("Submitting the form",data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          First Name:
        </label>
        <input
        className={errors.firstName?'input-error':""}
        {...register('firstName',
          { 
            required:{value:true , 
            message:"First Name is required"}, 
            minLength:{value:3, message:"Min length atleast 3"}  
          }
        )}/>
        {errors.firstName&&<p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <br/>
      <div>
        <label>
          Middle Name:
        </label>
        <input
          className={errors.middleName?'input-error':""} 
          {...register('middleName',
            { 
              pattern:{
                value: /^[A-Za-z]+$/i,
                message:"Last name is not as per the rules"
            } }
          )}/>
          {errors.middleName&&<p className='error-msg'>{errors.middleName.message}</p>}
      </div>
      <br/>
      <div>
        <label>
          Last Name:
        </label>
        <input
        className={errors.lastName?'input-error':""}
         {...register('lastName')}/>
      </div>
      <br/>
      <input type='submit' disabled={isSubmitting}
        value={isSubmitting?"Submitting":"Submit"}
      />
    </form>
  )
}

export default App
