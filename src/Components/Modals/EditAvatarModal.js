import React from 'react'
import { Form, Field } from 'react-final-form'
import FormField from '../Form/FormField'
import { CheckBox } from '../Form/UI'
import EditAvatarDiscription from './EditAvatarDiscription'
import FileUploader from './FileUploader'
const EditAvatarModal = ({ onSubmit }) => {
    return (
        <div className="boss-modal-window__form">
            <Form onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="boss-form">
                        <FormField>
                            <Field name="facialRecognition" type="checkbox">
                                {
                                    ({ input }) => (
                                        <div className="boss-form__label-group">
                                            <label className="boss-form__checkbox-label boss-form__checkbox-label_context_label-group">
                                                <CheckBox input={input} className="boss-form__checkbox-input" />
                                                <span className="boss-form__checkbox-label-text">
                                                    Setup for facial recognition
                                                </span>
                                            </label>
                                        </div>
                                    )
                                }
                            </Field>
                        </FormField>
                        <div className="boss-add-avatar">
                            <div className="boss-add-avatar__preview boss-add-avatar__preview_role_load">
                            </div>
                            <div className="boss-add-avatar__actions">
                                <Field
                                    name="avatar"
                                    type="file"
                                    component={FileUploader}
                                />
                                <p className="boss-add-avatar__note">
                                    Drag and drop files here or click choose file to upload photo
                                </p>
                            </div>
                            <EditAvatarDiscription />
                            <button type = "submit">
                                adsadasd
                            </button>
                        </div>
                    </form>
                )}
            />
        </div>
    )
}

export default EditAvatarModal
