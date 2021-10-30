import { blogsSlice } from "../slice/categories";

const { actions: slice } = blogsSlice;

export const getBlogsAction = (categories) => (dispatch) => {
    dispatch(slice.setBlogs(categories))
}
export const filterCategoryAction = (f_name) => (dispatch) => {
    dispatch(slice.filterCategories(f_name))
}

export const removeCategoryAction = (_id) => (dispatch) => {
    dispatch(slice.removeCategories(_id))
}