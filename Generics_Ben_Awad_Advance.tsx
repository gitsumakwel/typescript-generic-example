import React, {useState} from 'react'

interface Props {
    name: string
}
interface State {
    fullname: string | null;
}

class HelloWorld extends React.Component {
    state:State = {
        fullname: '',
    }
    constructor(props:Props){
        super(props)
    }

    render() {
        return <div>hello {name}</div>
    }
}
const HeloWorld_FN: React.FC<Props> = ({name}) => {
    //function version of class HelloWorld
    const [state] = useState<State>({fullname:''});
    return <div>hello {state.fullname}</div>
}
/*end of HelloWorld sample*/


interface FormProps<T> {
    values: T;
    children: (values:T) =>  JSX.Element;
}

class Form<T> extends React.Component {
    state:FormProps<T>;
    constructor(props:FormProps<T>) {
        super(props);
        this.state = {            
            values:props.values,
            children:props.children,
        }
    }
    render(){
        return this.state.children(this.state.values)
    }
}

class App extends React.Component{
    render() {
        return (
            new Form<string>({values:'hello world',children:(value)=><div>{value}</div>}).render()
        )                            
    }
}


/* const Form:typeFormFunc = <T extends {}>({values,children}:FormProps<T>) => {
   return (children(values))
} 
   const App:React.FC = () => {
       return <Form values={'hellow world'} children:(value=><div>{value}</div>)></Form>
   };
*/

export default App;