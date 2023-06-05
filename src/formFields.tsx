const loginFields=[
    {
        labelText:"Username",
        labelFor:"userName",
        id:"userName",
        name:"userName",
        type:"text",
        autoComplete:"userName",
        isRequired:true,
        placeholder:"User Name",
        maxLength: 64
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password",
        maxLength: 64
    }
]

const signupFields=[
    {
        labelText:"Email address",
        labelFor:"email",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address",
        maxLength: 64
    },
    {
        labelText:"userName",
        labelFor:"userName",
        id:"userName",
        name:"userName",
        type:"text",
        autoComplete:"userName",
        isRequired:true,
        placeholder:"userName",
        maxLength: 64
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password",
        maxLength: 64
    }
]

export {loginFields,signupFields}