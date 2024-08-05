import React, { useId } from 'react';
import { Editor } from '@tinymce/tinymce-react';

/**
 * 
 * @param {String} value
 * @param {bool} important
 * @param {React<useRef>} descriptionRef
 * @param {Object} errors
 * @param {String} label
 * @returns 
 */
export default function TextEditor({label, important, descriptionRef, errors = {}, value = ""}) {
  return (
    <>
        <label>
            {label} 
            {
                important && <span className='text-danger'>*</span>
            }
        </label>
        <Editor
            apiKey= {import.meta.env.VITE_TINY_KEY}
            onInit={(_evt, editor) => descriptionRef.current = editor}
            onEditorChange={(content, editor) => {
                if (descriptionRef.current) {
                    descriptionRef.current.setContent(content);
                }
            }}
            initialValue={value??''}
        />
        {errors.description && <span className="text-danger"><i className="icon-info-circled"></i>{errors.description.message}</span>}
    </>
  );
}