import { Button } from '@progress/kendo-react-buttons';
import { Form, FormElement, Field } from '@progress/kendo-react-form';
import React, { useEffect, useState } from 'react';
import { areasOfFocus } from '../data/areas_of_focus';
import {
  Dialog,
  DialogActionsBar,
} from "@progress/kendo-react-dialogs";
import { 
    FormInputComponent, 
    FormMultiSelectComponent, 
    FormTextareaComponent, 
    charityNameValidator, 
    requiredValidator 
} from '../components'

function SuggestACharity(props) {
    const { getNavType } = props;
    
    const areasOfFocusNames = areasOfFocus.map(area => area.name);
    areasOfFocusNames.push("Other");

    const [ error, setError ] = useState(null)
    const [ submissionData, setSubmissionData ] = useState(null)

    useEffect(() => {
        getNavType("other");
    });

    const closeDialog = () => {
        setSubmissionData(null);
        props.history.push()
    }

    const handleSubmit = (dataItem) => {
        const url = "https://docs.google.com/forms/d/e/1FAIpQLSd9dp90Hcxo04AATicNxE_Jxzluko8n-TLw2LtXo4fafL5D6Q/formResponse";
        
        let formData = new FormData();

        for (const [key, value] of Object.entries(dataItem.entry)) {
            let fieldName = `entry.${key}`;
            let fieldValue = value

            if(Array.isArray(fieldValue)) {
                fieldValue.forEach((val)=> {
                    formData.append(fieldName, val)
                })
            }
            else {
                formData.append(fieldName, fieldValue)
            }
        }

        fetch(url, {
            method: "POST",
            mode: "no-cors",
            header:{
                'Content-Type': 'application/json'
                },
            body: formData
        })
        .then(data => {
            setSubmissionData(data)
        })
        .catch(err=>{
            setError(err.message)
        });
    }

    return (
        <React.Fragment>
            <section>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-8 mb-3">
                            <h1>Suggest a Charity</h1>
                            <hr />
                        </div>

                        <Form
                            onSubmit={handleSubmit}
                            render={(formRenderProps) => (
                                <FormElement className="col-sm-12 col-md-8">
                                    <Field
                                        id={"entry.1957651411"}
                                        name={"entry.1957651411"}
                                        label={"Charity Name"}
                                        component={FormInputComponent}
                                        validator={charityNameValidator}
                                    />

                                    <Field
                                        id={"entry.1379548883"}
                                        name={"entry.1379548883"}
                                        label={"Area of Focus"}
                                        hint={"Hint: Select other if not listed"}
                                        data={areasOfFocusNames}
                                        component={FormMultiSelectComponent}
                                        validator={requiredValidator}
                                    />

                                    <Field
                                        id={"entry.1393512928"}
                                        name={"entry.1393512928"}
                                        label={"For 'Other', Type in the closest category"}
                                        component={FormInputComponent}
                                    />

                                    <Field
                                        id={"entry.1377196911"}
                                        name={"entry.1377196911"}
                                        label={"Description"}
                                        component={FormTextareaComponent}
                                        validator={requiredValidator}
                                    />

                                    <Field
                                        id={"entry.511285569"}
                                        name={"entry.511285569"}
                                        label={"Additional Information"}
                                        component={FormTextareaComponent}
                                    />

                                    { error && <div class="alert alert-danger" role="alert">
                                        {error}
                                    </div> }
                                    
                                    <div className="k-form-buttons">
                                        <Button
                                            type={"submit"}
                                            className="p-btn-golden-yellow"
                                            disabled={!formRenderProps.allowSubmit}
                                        >
                                            Submit
                                        </Button>
                                        <Button onClick={formRenderProps.onFormReset}>Clear</Button>
                                    </div>  

                                    

                                    {submissionData && 
                                        <Dialog>
                                            <p className="text-center">
                                                Thank you for your suggestion! We have taken note of it and we will list it as soon as we can
                                            </p>
                                            <DialogActionsBar>
                                                <button className="k-button" onClick={() => { closeDialog(); formRenderProps.onFormReset()}}>
                                                    Make another suggestion
                                                </button>
                                                <button className="k-button" onClick={() => props.history.push('/charities')}>
                                                    Go back to Charities
                                                </button>
                                            </DialogActionsBar>
                                        </Dialog>
                                    }
                                </FormElement>
                            )}
                        />
                    </div>                  
                </div>
            </section>
        </React.Fragment>
    )
}

export default SuggestACharity;