
import React, { Component, createRef } from 'react'
import { InputField, ButtonField } from './InputField';


export default class demoClass extends Component {


    constructor(props) {
        super(props)

        this.state = {

        }

        this.nameRef = createRef(null);
        this.ageRef = createRef(null);
        this.roleRef = createRef(null);
        this.projectRef = createRef(null);
        this.timeRef = createRef(null);
    }

    logInputValues = () => {
        console.log('Name:', this.nameRef.current.value);
        console.log('Age:', this.ageRef.current.value);
        console.log('Role:', this.roleRef.current.value);
        console.log('project:', this.projectRef.current.value);
        console.log('time:', this.timeRef.current.value);
    };

    logInputValuesOtp = () => {
        console.log('Name:', this.nameRef.current.value);
        console.log('Age:', this.ageRef.current.value);
    };

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px' }}>

                <InputField data="name" inputRef={this.nameRef} />
                <InputField data="age" inputRef={this.ageRef} />
                <InputField data="role" inputRef={this.roleRef} />
                <InputField data="project" inputRef={this.projectRef} />
                <InputField data="time" inputRef={this.timeRef} />

                <ButtonField name="submit form" func={this.logInputValues} />

                <ButtonField name="submit form" func={this.logInputValuesOtp} />

            </div>
        )
    }
}




