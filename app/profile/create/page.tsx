import { SubmitButton } from "@/components/form/Buttons"
import FormInput from "@/components/form/FormInput"



const createProfileAction = async(formData:FormData) => {
    'use server'
    const firstName = formData.get('firstName') as string
    // Validate
    // Insert DB
    // Return
    console.log('create profile!!!', firstName)
}


const CreatePorfile = () => {
  return (
    <section>
        <h1 className="text-2xl font-semibold mb-8 capitalize">New User</h1>
        <div className="border p-8 rounded-md">
            <form action={createProfileAction}>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                <FormInput name="firstName" label="firstName" type="text" placeholder="First Name" />
                <FormInput name="lastName" label="lastName" type="text" placeholder="Last Name" />
                <FormInput name="UserName" label="UserName" type="text" placeholder="username" />
                </div>
                <SubmitButton text="Create Profile" size='lg'/>
            </form>
        </div>
    </section>
  )
}
export default CreatePorfile