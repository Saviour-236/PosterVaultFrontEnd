// a form which have text area for discription, input field for title , image box for img and input field for price
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import toast, {Toaster} from 'react-hot-toast'
import { AppDispatch } from '../../../Statemanagement/store';
import { useDispatch } from 'react-redux';
import { addPostReducer } from '../../../Statemanagement/Slices/postSlice';
interface FormValues {
  title: string;
  description: string;
  alt: string;
  image: File | null;
  price: string;
}

const FormExample: React.FC = () => {
  const [isVisible, setIsvisible] = useState(false);//for fade in animation
  const [values, setValues] = useState<FormValues>({
    title: '',
    alt: '',
    description: '',
    image: null,
    price: '',
  });
  const dispatch = useDispatch<AppDispatch>()
  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const imageFile = event.target.files[0];
      setValues({
        ...values,
        image: imageFile,
      });
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('alt', values.alt);
    formData.append('price', values.price);
    formData.append('image', values.image || '');

    //   Handle form submission logic here, e.g., send data to server or update state
    await fetch('https://tile-back-end.onrender.com/post/addNewPost',
      {
        method: 'POST',
        body: formData,
        credentials: 'include',
        mode: 'cors'
      })
      .then(response => {
        console.log("this is response",response)
        console.log("this is response",response.json()) 
        return response.json()})
      .then(data => 
       {
        console.log("this is data",data)
         dispatch(addPostReducer(data.user))
        toast.success('Post added successfully')
        console.log('Post added successfully')
       }
    )
      .catch( err => {
        console.log("thid is error",err)
        toast.error(err.message)
      })

   // Reset form fields after submission if needed
    // setValues({
    //   title: '',
    //   alt: '',
    //   description: '',
    //   image: null,
    //   price: '',
    // });
  };
  //for fade in animation
  useEffect(() => {
    setIsvisible(true)
  })
  return (
    <>
    <Toaster />
      <form onSubmit={handleSubmit} encType="multipart/form-data" className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} max-w-md border p-6 bg-white shadow-md rounded-md fixed top-[1rem] h-auto w-auto right-[1rem] flex space-x-[1rem]`}>
        <span>
          {/* Image Upload Field */}
          <div className="mb-4 ">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Title Field */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={values.title}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 min-w-max"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="alt" className="block text-sm font-medium text-gray-700">Alt  :</label>
            <input
              type="text"
              id="alt"
              name="alt"
              value={values.alt}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Description Field */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              id="description"
              name="description"
              value={values.description}
              onChange={handleInputChange}
              rows={4}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Price Field */}
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={values.price}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
            Upload
          </button>
        </span>


        {/* Image Preview Box */}
        <span>
          {values.image && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Preview</label>
              <img src={URL.createObjectURL(values.image)} alt="Preview" className="w-fit h-fit rounded-md border border-gray-300" />
            </div>
          )}
        </span>
      </form>
    </>


  );
};

export default FormExample;
