import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { contactsFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = evt => {
    return dispatch(contactsFilter(evt.target.value));
  };

  return (
    <>
      <Label htmlFor="search">Find contacts by name:</Label>
      <Input
        id="search"
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Search"
      ></Input>
    </>
  );
};
