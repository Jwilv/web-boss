import { ChangeEvent, useState } from "react"


interface Returns {
    values : Record<string,string> ;
    changeForm : ({ target }: ChangeEvent<HTMLInputElement>)=> void ;
    reset : ()=> void ;
}


export const useForm = (initialState: Record<string, string> = {}) : Returns => {

    const [values, setValues] = useState(initialState)

    const changeForm = ({ target }: ChangeEvent<HTMLInputElement>) => {

        setValues( oldValues => ({
            ...oldValues,
            [target.name] : target.value
        }))
    }

    const reset = ()=>{
        setValues(initialState)
    }

    return { values, changeForm, reset} 
}