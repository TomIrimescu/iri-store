import React, { Component } from "react";
import { ValidationError } from "./ValidationError";
import { GetMessages } from "./ValidationMessages";

export class ValidatedForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validationErrors: {}
        }
        this.formElements = {};
    }

    handleSubmit = () => {
        this.setState(state => {
            const newState = { ...state, validationErrors: {} } 
            Object.values(this.formElements).forEach(elem => {
                if (!elem.checkValidity()) {               
                    newState.validationErrors[elem.name] = GetMessages(elem);
                }
            })           
            return newState;
        }, () => {
            if (Object.keys(this.state.validationErrors).length === 0) {
                const data =  Object.assign(...Object.entries(this.formElements)
                    .map(e => ({[e[0]]: e[1].value})) )
                this.props.submitCallback(data);
            }
        });
    }

    registerRef = (element) => {
        if (element !== null) {
            this.formElements[element.name] = element;
        }
    }

    renderElement = (modelItem) => {
        const name = modelItem.name || modelItem.label.toLowerCase();
        return <div className="pt-4" key={ modelItem.label }>
            <label className="flex justify-left font-medium">{ modelItem.label }</label>
            <ValidationError errors={ this.state.validationErrors[name] } />
            <input className="inputBox" name={ name } ref={ this.registerRef }
                { ...this.props.defaultAttrs } { ...modelItem.attrs } />            
        </div>
    }

    render() {
        return <React.Fragment>
            { this.props.formModel.map(m => this.renderElement(m))}
            <div className="text-center">
                <button className="sideBarButton w-full mb-8" 
                        onClick={ this.handleSubmit }>
                    { this.props.submitText || "Submit"}
                </button>
                <button className="sideBarButton w-full mb-10" 
                        onClick={ this.props.cancelCallback }>
                    { this.props.cancelText || "Cancel" }
                </button>
            </div>
        </React.Fragment>
    }
}
