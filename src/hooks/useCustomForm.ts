// import React, { useState } from 'react';
//
// type CustomForm<T> = {
//     handleChange: (e: React.ChangeEvent) => void;
//     hardSetValues: (val: any) => void;
//     values: T;
// };
//
// const useCustomForm = <T>(initialValues: T): CustomForm<T> => {
//     const [values, setValues] = useState(initialValues);
//
//     const handleChange = (e: React.ChangeEvent): void => {
//         e.persist();
//         const target = e.target as HTMLInputElement;
//         const { name, value, checked, type } = target;
//
//         setValues({
//             ...values,
//             [name]:
//                 type && (type === 'checkbox' || type === 'radio')
//                     ? checked
//                     : (value as string),
//         });
//     };
//
//     const hardSetValues = (val: T) => {
//         setValues({
//             ...values,
//             ...val,
//         });
//     };
//
//     return { values, handleChange, hardSetValues };
// };
//
// export default useCustomForm;
