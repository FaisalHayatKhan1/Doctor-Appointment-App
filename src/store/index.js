import { configureStore} from '@reduxjs/toolkit'
import doctorSlice from './doctor-Data';
const store = configureStore({
  reducer: {
    doc:doctorSlice.reducer
  },
});
export default store