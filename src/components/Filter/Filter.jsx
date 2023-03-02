import PropTypes from 'prop-types'
import { FilterWrap } from './Filter.styled';

export const Filter = ({ value, onChange}) => {
    return (
        <FilterWrap>
            <h3>Find contact by name: </h3>
            <input
                type="text"
                name="filter"
                onChange={onChange}
                value={value}
            />
        </FilterWrap>
    )
} 

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };