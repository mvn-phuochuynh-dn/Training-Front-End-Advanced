import React, { Component } from 'react'
import FormRegister from '../Form/FormRegister'
import Table from '../Table'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formRegister: {
                name: 'Huynh Thi My Phuoc',
                birthday: '1999/11/01',
                email: 'huynhtmphuoc@gmail.com',
                password: 'htmp1101',
                passwordConf: 'htmp1101',
                gender: '0',
                biography: 'ĐHSPĐN',
                jobRole: 'Front-End',
                agree: 'true'
            },
            dataRegister: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.addData();
        e.target.reset();
        // console.log(this.state.dataRegister);
    }
    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState((prev) => ({
            ...prev,
            formRegister: {
                ...prev.formRegister,
                [name]: value
            }
        }));
        // console.dir(e.target); console ra obj
        // console.log(`${name} : ${value}`);

    }
    addData = () => {
        this.setState(prev => ({
            ...prev,
            dataRegister: [
                this.state.formRegister,
                ...prev.dataRegister
            ]
        }));
    }
    deleteItem = (item) => {
		return () => {
			this.setState(prev => ({
				dataRegister: prev.dataRegister.filter(e => e.email !== item)
			}));
		};
	}
    render() {
        const { formRegister } = this.state;
        return (
            <main>
                <div className="container">
                    <div className="container">
                        <div className="section-register mt-30">
                            <FormRegister formRegister={formRegister} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                        </div>
                    </div>
                    <div className="section-table mt-30">
                        <h1 className="table-title m-10">Data From Register Form</h1>
                        <Table dataRegister={this.state.dataRegister} deleteItem={this.deleteItem}/>
                    </div>
                </div>
            </main>
        )
    }
}
