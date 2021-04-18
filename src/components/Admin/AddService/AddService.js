import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css';
import Sidebar from '../../Customer/Sidebar/Sidebar';

const AddService = () => {
    const [imageURL, setImageURL] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
      const productData = {
            title: data.title,
            price: data.price,
            description: data.description,
            imageURL: imageURL,
        }
        console.log(productData.imageURL);

        if (productData.imageURL !== null) {
            const url = 'https://ancient-headland-31699.herokuapp.com/addService';
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            })
                .then(res => {
                    console.log('server site response', res);
                    alert("Product is submitted successfully")
                })

        }
        else{
            alert("Your file is not ready yet..please wait!")
        }

    };


    const handleImageUpload = (e) => {
        const imageData = new FormData();
        imageData.set('key', 'a3f0eceaf4b1ed502d3117c4cf879271');
        imageData.append('image', e.target.files[0]);
        

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response?.data?.data?.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='service-section'>
            <Sidebar></Sidebar>
            <div className='add-service-section'>
                <h5 className='font'>Add Service</h5>
                <form className='service-form' onSubmit={handleSubmit(onSubmit)}>
                    <label className='font' htmlFor="exampleInputTitle">Photography</label>
                    <br />
                    <input className='input-text' name="title" placeholder='Enter Title' required  ref={register} />
                    <br />
                    <br />
                    <label className='font' htmlFor="exampleInputDescription">Description</label>
                    <br />
                    <input className='input-text' name="description" placeholder='Enter Description' required  ref={register} />
                    <br />
                    <br />
                    <label className='font' htmlFor="exampleInputDescription">Price</label>
                    <br />
                    <input className='input-text' name="price" placeholder='Enter Price' required  ref={register} />
                    <br />
                    <br />
                    <label className='font' htmlFor="exampleInputFile">Upload Image</label>
                    <br />
                    <input className='input-file font' name="exampleRequired" type='file' required onChange={handleImageUpload} />
                    <input className='font add-service-btn' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;