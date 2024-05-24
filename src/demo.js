import React, { useRef } from 'react';
import { InputField } from './InputField';

const Demo = () => {
    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const roleRef = useRef(null);
    const projectRef = useRef(null);
    const timeRef = useRef(null);

    const logInputValues = () => {
        console.log('Name:', nameRef.current.value);
        console.log('Age:', ageRef.current.value);
        console.log('Role:', roleRef.current.value);
        console.log('project:', projectRef.current.value);
        console.log('time:', timeRef.current.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px' }}>

            <InputField data="name" inputRef={nameRef} />
            <InputField data="age" inputRef={ageRef} />
            <InputField data="role" inputRef={roleRef} />
            <InputField data="project" inputRef={projectRef} />
            <InputField data="time" inputRef={timeRef} />

            <button style={{ width: 'fit-content' }} onClick={logInputValues}>Log Input Values</button>
        </div>
    );
};

export default Demo;
