import {useState} from 'react';
import {AiOutlineFileText, AiOutlineDollar, AiOutlineTag} from "react-icons/ai";
import url from "../utils/url.tsx";

const AddProductPage = ({onClose}) => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [photo, setPhoto] = useState(null);
    const [message, setMessage] = useState('');

    const handleAddProduct = async () => {
        const productDto = {
            name: productName,
            description: description,
            price: price,
            ingredients: ingredients,
        };

        const formData = new FormData();
        formData.append('productDto', JSON.stringify(productDto)); // Append productDto as a JSON string
        if (photo) {
            formData.append('file', photo); // Ensure the name matches the backend expectation
        }

        try {
            const res = await fetch(`${url}/product/save`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                },
                body: formData,
            });

            if (res.ok) {
                setMessage('Product added successfully!');
                // Clear the form
                setProductName('');
                setPrice('');
                setDescription('');
                setCategory('');
                setIngredients('');
                setPhoto(null);
            } else {
                setMessage('Failed to add product. Please try again.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        }
    };

    const handleFileChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div
                className="flex flex-col border-gray-500/25 border items-center p-6 py-8 rounded-lg w-[550px] bg-white shadow-lg">
                <h2 className="text-2xl text-left w-full font-bold mb-10">Add New Product</h2>
                {message && <div className="mb-4 text-center text-red-600">{message}</div>}
                <div className="flex border-gray-500/50 border items-center p-2 py-1.5 rounded-lg w-full mb-4">
                    <AiOutlineFileText size="1.5em" className="text-gray-800 mr-2"/>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="outline-none bg-transparent flex-grow"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                <div className="flex border-gray-500/50 border items-center p-2 py-1.5 rounded-lg w-full mb-4">
                    <AiOutlineDollar size="1.5em" className="text-gray-800 mr-2"/>
                    <input
                        type="text"
                        placeholder="Price"
                        className="outline-none bg-transparent flex-grow"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="flex border-gray-500/50 border items-center p-2 py-1.5 rounded-lg w-full mb-4">
                    <AiOutlineTag size="1.5em" className="text-gray-800 mr-2"/>
                    <select
                        className="outline-none bg-transparent flex-grow"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Select Category</option>
                        <option value="Category1">Category1</option>
                        <option value="Category2">Category2</option>
                        <option value="Category3">Category3</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="flex border-gray-500/50 border items-center p-2 py-1.5 rounded-lg w-full mb-4">
                    <textarea
                        placeholder="Description"
                        className="outline-none bg-transparent flex-grow"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="flex border-gray-500/50 border items-center p-2 py-1.5 rounded-lg w-full mb-4">
                    <textarea
                        placeholder="Ingredients (comma separated)"
                        className="outline-none bg-transparent flex-grow"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                    />
                </div>
                <div className="flex border-gray-500/50 border items-center p-2 py-1.5 rounded-lg w-full mb-4">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="flex w-full justify-between">
                    <button
                        onClick={handleAddProduct}
                        className="text-sm w-1/2 flex items-center justify-center gap-3 font-semibold bg-amber-400 h-full rounded-lg py-2 mb-4 mr-2"
                    >
                        Add Product
                    </button>
                    <button
                        onClick={onClose}
                        className="text-sm w-1/2 flex items-center justify-center gap-3 font-semibold border-2 text-red-600 hover:bg-red-100 transition border-red-400 h-full rounded-lg py-2 mb-4"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddProductPage;
