import png from "1.png";
interface Demo {
    name?: string,
    age?: number,
    setName:(name:string,age:number) => void
}

interface Demo2 extends Demo{
     area:string,
}

export const name = (params:Demo2):string => {
    return "xiaolan";
}