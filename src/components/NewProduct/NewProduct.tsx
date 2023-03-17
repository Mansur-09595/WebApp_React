import React from "react";
import { useForm } from "react-hook-form";
import { foodApi } from "../../store/reducers/servise/foodService";
import { IFood } from "../../types/IFood";
import "./NewProduct.scss";

const NewProduct = () => {
  const { data: foodCategories } = foodApi.useGetCategoriesQuery("");
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<IFood>();

  const onSubmit = async (data: IFood) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === "categoryId") {
        const id = foodCategories?.find((item) => item.name === value)?._id;
        formData.append(key, id as string);
      } else if (key === "image" && value) {
        formData.append(key, value[0]);
      } else {
        formData.append(key, value.toString());
      }
    });

    // // await editUserProfile(formData);
    // reset();
  };

  return (
    <div id="NewProduct" className="NewProduct">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="NewProduct__header">Добавление блюда</div>
        <label>
          1.Название блюда
          <input {...register("name", { required: true })} />
        </label>
        <label>
          2.Выберите изображение
          <input type="file" {...register("image", { required: true })} />
        </label>
        <label>
          3.Состав
          <textarea id="textarea" {...register("info", { required: true })} />
        </label>
        <label>
          4.Цена
          <input {...register("price", { required: true })} type="number" />
        </label>
        <label>
          5.Категория
          <select {...register("categoryId", { required: true })}>
            {foodCategories?.map((item) => (
              <option key={item._id}>{item.name}</option>
            ))}
          </select>
        </label>
        <button type="submit" className="save greenBack">
          Добавить блюдо
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
