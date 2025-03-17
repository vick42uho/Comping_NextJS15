import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type FormInputProps = {
    name: string
    label: string
    type: string
    defaultValue?: string
    placeholder: string
}

const FormInput = (props:FormInputProps) => {
    const {name, label, type, defaultValue, placeholder} = props
    return (
        <div>
            <Label htmlFor={name}>{label}</Label>
            <Input 
            type={type} 
            name={name}
            placeholder={placeholder} 
            defaultValue={defaultValue}/>
        </div>
    )
}
export default FormInput