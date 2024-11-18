// a form which have text area for discription, input field for title , image box for img and input field for price
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { AppDispatch, RootState } from '../../Statemanagement/store';
import { useDispatch, useSelector } from 'react-redux';
import { addPostReducer } from '../../Statemanagement/Slices/postSlice';
import { baseAddress } from '../../baseAddress';
import { setToastValue } from '../../Statemanagement/Slices/globelVariables';
import { useNavigate } from 'react-router-dom';
interface FormValues {
  title: string;
  alt: string;
  description: string;
  category: string;
  image: File | null;
  price: string;
}

const AddNewPosterForm: React.FC = () => {
  const [isVisible, setIsvisible] = useState(false);//for fade in animation
  const userState = useSelector((state: RootState) => state.userSliceState);
  const categories = ["Click To Select", "classicArt", "popCultureIcons", "motivationalQuotes", "natureLandscapes", "abstractModernArt", "vintageRetro", "moviesTvShows", "musicLegends", "travelDestinations", "historicalMoments", "sportsHeroes", "animeManga", "gamingUniverse", "minimalistDesigns", "streetArtGraffiti", "fantasySciFi", "comicBookCharacters", "typographyCalligraphy", "spaceAstronomy", "famousPaintings"]
  const navigate = useNavigate();
  const [values, setValues] = useState<FormValues>({
    title: '',
    alt: '',
    description: '',
    category: '',
    image: null,
    price: '',
  });
  const dispatch = useDispatch<AppDispatch>()
  const handleInputChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement>) => {
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
    formData.append('category', values.category);
    formData.append('alt', values.alt);
    formData.append('price', values.price);
    formData.append('image', values.image || '');
    //     //   Handle form submission logic here, e.g., send data to server or update state
    try {
      await fetch(`${baseAddress}/post/addNewPost`,
        {
          method: 'POST',
          body: formData,
          headers: {
            authToken: userState.token
          },
          credentials: 'include'
        })
        .then(async response => {
          // console.log("this is response",response)
          //checking if response is not ok then throw error
          if (response.status !== 200) {
            const error = await response.json();
            // console.log("this is error", error)
            dispatch(setToastValue({ type: "error", message: error.message }))
            throw new Error(JSON.stringify(error));
          }
          const res = await response.json()
          return res;
        })
        .then(data => {
          // console.log("all set")
          const poster = data.poster;
          dispatch(addPostReducer(poster))
          // console.log("this is data", data.message  )
          // console.log('Post added successfully')
          dispatch(setToastValue({ type: "success", message: data.message }))
          // console.log(" post add successfully ");
          // Reset form fields after submission if needed
          setValues({

            title: '',
            alt: '',
            category: '',
            description: '',
            image: null,
            price: '',
          });
        }
        )
    } catch (error: any) {
      // console.log("this is error", error)
      const err = JSON.parse(error.message)
      if (err.name == "tokenExpired") {
        navigate('/signin')
      }
    }
  };
  //for fade in animation
  useEffect(() => {
    setIsvisible(true)
  })
  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className={`z-[53] fixed  transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} max-w-[40rem] border p-6 bg-white shadow-md rounded-md top-[1rem] h-auto w-auto right-[1rem] flex space-x-[1rem]`}>
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
          {/* just flexing two fields to align in one line */}
          <div className='flex space-x-5'>
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

            {/* Alt Field */}
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

          </div>
          {/* just aliging the fields */}
          <div className='flex space-x-7'>
            {/* category */}
            <div className="mb-4">
              <label htmlFor="alt" className="block text-sm font-medium text-gray-700">
                Category  :
              </label>
              <select
                id="category"
                name="category"
                onChange={handleInputChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              >
                {categories.map((category) => (<option key={category} value={category}>{category}</option>))}
              </select>
            </div>
            {/* Price Field */}
            <div className="mb-4 w-fit">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                value={values.price}
                onChange={handleInputChange}
                required
                className="mt-1 w-[5rem] block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
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
              <img src={URL.createObjectURL(values.image)} alt="Preview" className="w-fit h-fit rounded-md border border-gray-300 max-w-[10rem]" />
            </div>
          )}
        </span>
      </form>
    </>


  );
};
export default AddNewPosterForm;
