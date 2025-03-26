import { useFormik } from 'formik';
import React from 'react'
// import { useFormik } from 'formik';
import * as Yup from 'yup';

function InvoiceForm() {

    const formik = useFormik({
        initialValues: {
            companyName: '',
            poNumber: '',
            invoiceNumber: '',
            vendorName: '',
            purchaseQuantity: '',
            invoiceAmount: '',
            invoiceFile: null,
            invoiceDate: '',
            remarks: '',
        },
        validationSchema: Yup.object({
            companyName: Yup.string().required('Company name is required'),
            poNumber: Yup.string().required('PO number is required'),
            invoiceNumber: Yup.string().required('Invoice number is required'),
            vendorName: Yup.string().required('Vendor name is required'),
            purchaseQuantity: Yup.number().positive().integer().required('Purchase quantity is required'),
            invoiceAmount: Yup.number().positive().required('Invoice amount is required'),
            invoiceFile: Yup.mixed().required('Invoice file is required'),
            invoiceDate: Yup.date().required('Invoice date is required'),
            remarks: Yup.string(),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
            <form onSubmit={formik.handleSubmit} className='bg-white p-6 rounded-lg shadow-md w-96'>
                <h2 className='text-2xl font-bold mb-4 text-center'>Invoice Form</h2>

                <div className='mb-4'>
                    <label className='block text-gray-700'>Company Name</label>
                    <input type='text' {...formik.getFieldProps('companyName')} className='w-full p-2 border rounded-md' />
                    {formik.touched.companyName && formik.errors.companyName && <p className='text-red-500'>{formik.errors.companyName}</p>}
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700'>PO Number</label>
                    <input type='text' {...formik.getFieldProps('poNumber')} className='w-full p-2 border rounded-md' />
                    {formik.touched.poNumber && formik.errors.poNumber && <p className='text-red-500'>{formik.errors.poNumber}</p>}
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700'>Invoice Number</label>
                    <input type='text' {...formik.getFieldProps('invoiceNumber')} className='w-full p-2 border rounded-md' />
                    {formik.touched.invoiceNumber && formik.errors.invoiceNumber && <p className='text-red-500'>{formik.errors.invoiceNumber}</p>}
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700'>Vendor Name</label>
                    <input type='text' {...formik.getFieldProps('vendorName')} className='w-full p-2 border rounded-md' />
                    {formik.touched.vendorName && formik.errors.vendorName && <p className='text-red-500'>{formik.errors.vendorName}</p>}
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700'>Purchase Quantity</label>
                    <input type='number' {...formik.getFieldProps('purchaseQuantity')} className='w-full p-2 border rounded-md' />
                    {formik.touched.purchaseQuantity && formik.errors.purchaseQuantity && <p className='text-red-500'>{formik.errors.purchaseQuantity}</p>}
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700'>Invoice Amount</label>
                    <input type='number' {...formik.getFieldProps('invoiceAmount')} className='w-full p-2 border rounded-md' />
                    {formik.touched.invoiceAmount && formik.errors.invoiceAmount && <p className='text-red-500'>{formik.errors.invoiceAmount}</p>}
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700'>Upload Invoice</label>
                    <input type='file' onChange={(event) => {
                        const file = event.currentTarget.files?.[0];
                        if (file) {
                            formik.setFieldValue('invoiceFile', file);
                        }
                    }} className='w-full p-2 border rounded-md' />
                    {formik.touched.invoiceFile && formik.errors.invoiceFile && <p className='text-red-500'>{formik.errors.invoiceFile}</p>}
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700'>Invoice Date</label>
                    <input type='date' {...formik.getFieldProps('invoiceDate')} className='w-full p-2 border rounded-md' />
                    {formik.touched.invoiceDate && formik.errors.invoiceDate && <p className='text-red-500'>{formik.errors.invoiceDate}</p>}
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700'>Remarks</label>
                    <textarea {...formik.getFieldProps('remarks')} className='w-full p-2 border rounded-md'></textarea>
                </div>

                <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600'>
                    Submit Invoice
                </button>
            </form>
        </div>
    )
}

export default InvoiceForm
