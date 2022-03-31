import { configureStore } from '@reduxjs/toolkit';
import OpenSlicer from '../Slicers/OpenSlicer';
import passwordSlicer from '../Slicers/addNewPassword'
import modalSlicer from '../Slicers/modalSlicer';

export default configureStore({
  reducer: {
    open: OpenSlicer,
    password: passwordSlicer,
    modalOpen: modalSlicer
  },
})

