import {
  clickCloseModal,
  clickOpenModal,
  ERROR,
  GET_DATA,
  OFF_MUTED,
  ON_MUTED,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SET_LOADING,
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
} from './action';

export const initialState = {
  loading: true,
  isOpen: false,
  clothes: [],
  grid_view: true,
  isModalOpen: false,
  monthData: [],
  muted: true,
  error:false
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, loading: true};

    case SET_LISTVIEW:
      return {...state, grid_view: false};

    case SET_GRIDVIEW:
      return {...state, grid_view: true};

    case SIDEBAR_OPEN:
      return {...state, isOpen: true};

    case SIDEBAR_CLOSE:
      return {...state, isOpen: false};

    case GET_DATA:
      return {...state, error:false,loading: false, clothes: action.payload};

    case clickOpenModal:
      const {month} = action.payload;
      const {img} = state.clothes.find((items) => {
        return items.month === month;
      });
      return {
        ...state,
        isModalOpen: true,
        monthData: img,
      };

    case clickCloseModal:
      return {
        ...state,
        isModalOpen: false,
        monthData: [],
      };

    case OFF_MUTED:
      return {...state, muted: false};

    case ON_MUTED:
      return {...state, muted: true};
    case ERROR:
      return{
        ...state,loading:false,error:true
      }
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default reducer;
