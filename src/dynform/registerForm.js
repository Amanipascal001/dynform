import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextInput from '../custom_inputs/Textinput';
import PasswordInput from '../custom_inputs/passwordInput';
import RadioGroupInput from '../custom_inputs/radioGroupInput';
import CheckBox from '../custom_inputs/checkBox';
import MultiValueSelect from '../custom_inputs/selects/multiValueSelect';

import DatePk from '../custom_inputs/dates/DatePk';
import MobileDatePk from '../custom_inputs/dates/MobileDatePk';
import TimePk from '../custom_inputs/dates/TimePk';
import MobileTimePk from '../custom_inputs/dates/MobileTimePk';
import DateTimePk from '../custom_inputs/dates/DateTimePk';
import MobileDateTimePk from '../custom_inputs/dates/MobileDateTimePk';
import SingleObjectSelect from '../custom_inputs/selects/singleObjectSelect';
import MultiObjectSelect from '../custom_inputs/selects/multiObjectSelect';
import SingleValueSelect from '../custom_inputs/selects/singleValueSelect';



const options = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];


const RegisterForm = () => {
    
    const InitialValues = {
        user_email: '',
        user_password: '',
        genre: '',
        secteur: '',
        secteurs: [],
        accepte: '',
        names:[],
        name:''
    }
    // date: new Date(),
    // time: new Date(),
    
    const ValidationSchema = Yup.object({
        user_email: Yup.string()
        .email('Email invalid')
        .min(15, 'minimum 30 caracteres')
        .max(40, 'Maximum 40 caracteres')
        .required('Donnée requise'),
        user_password: Yup.string('Mot de passe requis')
        .min(8, 'Minimum 8 caracteres requis').required('valeur obligatoire'),
        genre: Yup.string().required('Genre requis'),
        accepte: Yup.boolean(),
    })
    // date: Yup.date('Entrer une date').nullable().required('Date required !!!'),
    
    return (
        <>
            <Formik
                initialValues={InitialValues}
                validationSchema={ValidationSchema}
                onSubmit= {(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
              {
                  (formik) => (
                <Form>
                    <TextInput  
                        label="Votre email"
                        name="user_email"
                        type="text"
                        placeholder="Email"
                        startAdornment={
                            <InputAdornment position="start">
                            <AccountCircleIcon />
                            </InputAdornment>
                        }
                    />
                    <PasswordInput 
                        label="Mot de passe"
                        name="user_password"
                        placeholder="Mot de passe"
                    />
                    <RadioGroupInput
                        label="Genre"
                        name='genre'
                        options={[
                            {value: 'female', label: 'Female'},
                            {value: 'male', label: 'Male'},
                            {value: 'other', label: 'Other'}
                        ]}
                    />
                    <div style={{height: '30px', paddingTop: '5px', paddingBottom: '15px', marginBottom: '15px'}}>
                        <SingleObjectSelect  label="Secteur d'activité(Single object select)"  name='secteur' id='secteur'
                            options={[
                                {value: 'AGRO', label: 'Agro-alimentaire'},
                                {value: 'IT', label: 'Informatique/Telecom'},
                                {value: 'FIN', label: 'Banque/Finance'}
                            ]}
                        />
                    </div>

                    <div style={{height: '30px', paddingTop: '5px', paddingBottom: '15px', marginBottom: '15px'}}>
                        <MultiObjectSelect  label="Secteurs (Multi object select)" selectedItems={ formik.values['secteurs'] }  name='secteurs' id='secteurs'
                            options={[
                                {value: 'AGRO', label: 'Agro-alimentaire'},
                                {value: 'IT', label: 'Informatique/Telecom'},
                                {value: 'FIN', label: 'Banque/Finance'}
                            ]}
                        />
                    </div>

                    <CheckBox  name="accepte"   label="accepte" />

                    {/* <DatePk name="date" label="Date picker" />

                    <DateTimePk name="date" label="Date Time picker" />
                    
                    <MobileDatePk name="date" label="Mobile date picker" />

                    <MobileDateTimePk name="date" label="Mobile Date Time picker" />

                    <TimePk name="time" label="Time picker" />

                    <MobileTimePk name="time" label="Mobile Time picker" /> */}
                   
                    <MultiValueSelect options={options} name="names" selectedItems={formik.values['names']}  label="Multi value select"/>
                    
                    <SingleValueSelect options={options} name="name"  label="(One name)Single value select"/>
                    {/* <SelectMultiple name="names" options={nameList} selectedlist={ [...formik.values['names']] }  /> */}
                    
                    <div style={{height: '20px', paddingTop: '5px', paddingBottom: '15px', marginBottom: '15px'}}>
                    </div>
                    <div style={{width:'100%', marginTop:'20px', paddingLeft:'10px'}}>
                        <Button type="submit" variant="contained" color="secondary" style={{textTransform: 'none'}}> Submit </Button>
                    </div>

                    
                </Form>

                  )
              }  
            </Formik>
        </>
    )
}

export default RegisterForm
