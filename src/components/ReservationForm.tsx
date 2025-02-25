import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ReservationForm.module.css';
import Button from './base/button/Button';
import { useTranslations } from '../translations/TranslationContext';
import { ButtonVariant } from './base/button/Button.types';

type ReservationFormValues = {
    date: string;
    time: string;
    diners: string;
    name: string;
    email: string;
    phone: string;
};

const ReservationForm: React.FC = () => {
    const { translations } = useTranslations();
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const validationSchema = Yup.object().shape({
        date: Yup.string().required(translations.dateRequired),
        time: Yup.string().required(translations.timeRequired),
        diners: Yup.number()
            .typeError(translations.invalidNumberOfPeople)
            .min(1, translations.invalidNumberOfPeople)
            .required(translations.numberOfPeopleRequired),
        name: Yup.string().required(translations.nameRequired),
        email: Yup.string().email(translations.invalidEmail).required(translations.emailRequired),
        phone: Yup.string().required(translations.phoneRequired),
    });

    const handleSubmit = (values: ReservationFormValues, { resetForm }: { resetForm: () => void }) => {
        console.log('✅ Form Submitted:', values);

        setSuccessMessage('Reservation Done Successfully!');

        setTimeout(() => {
            console.log('❌ Hiding Success Message');
            setSuccessMessage(null);
            resetForm();
        }, 2000);
    };

    return (
        <>
            {/* Success Popup */}
            {successMessage && (
                <div className={styles.popupOverlay}>
                    <div className={styles.popupContent}>
                        <p>{successMessage}</p>
                        <button onClick={() => setSuccessMessage(null)}>OK</button>
                    </div>
                </div>
            )}

            <Formik<ReservationFormValues>
                initialValues={{
                    date: '',
                    time: '',
                    diners: '',
                    name: '',
                    email: '',
                    phone: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className={styles.form} style={{ marginTop: '30px' }}>
                        <div className={styles.formContainer}>
                            {/* Left Column */}
                            <div className={styles.column}>
                                <div className={styles.fieldGroup}>
                                    <label htmlFor="date">{translations.date}</label>
                                    <Field type="date" name="date" id="date" className={styles.inputField} />
                                    <ErrorMessage name="date" component="p" className={styles.error} />
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label htmlFor="time">{translations.time}</label>
                                    <Field as="select" name="time" id="time" className={styles.inputField}>
                                        <option value="">{translations.selectATime}</option>
                                        <option value="18:00">18:00</option>
                                        <option value="19:00">19:00</option>
                                        <option value="20:00">20:00</option>
                                    </Field>
                                    <ErrorMessage name="time" component="p" className={styles.error} />
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label htmlFor="diners">{translations.numberOfPeople}</label>
                                    <Field type="number" name="diners" id="diners" min="1" className={styles.inputField} />
                                    <ErrorMessage name="diners" component="p" className={styles.error} />
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className={styles.column}>
                                <div className={styles.fieldGroup}>
                                    <label htmlFor="name">{translations.name}</label>
                                    <Field type="text" name="name" id="name" className={styles.inputField} />
                                    <ErrorMessage name="name" component="p" className={styles.error} />
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label htmlFor="email">{translations.email}</label>
                                    <Field type="email" name="email" id="email" className={styles.inputField} />
                                    <ErrorMessage name="email" component="p" className={styles.error} />
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label htmlFor="phone">{translations.phone}</label>
                                    <Field type="tel" name="phone" id="phone" className={styles.inputField} />
                                    <ErrorMessage name="phone" component="p" className={styles.error} />
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className={styles.buttonContainer}>
                            <Button
                                type="submit"
                                variant={ButtonVariant.Secondary}
                                label={translations.reserveATable}
                                disabled={isSubmitting}
                                onClick={() => {}} // Add this to avoid the TypeScript error
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default ReservationForm;
