import React from 'react';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import { compose, defaultProps, withState } from 'recompose';

const allColors = [
  { value: 'red',    text: 'red'    },
  { value: 'green',  text: 'green'  },
  { value: 'blue',   text: 'blue'   },
  { value: 'yellow', text: 'yellow' },
  { value: 'purple', text: 'purple' },
  { value: 'pink',   text: 'pink'   },
  { value: 'brown',  text: 'brown'  },
  { value: 'black',  text: 'black'  }
];

// withPerson is an HOC containing all of the behavior we need.
const withPerson = compose(
  defaultProps({ firstName: 'Joe', lastName: '', favoriteColor: '' }),
  withState('firstName', 'setFirstName', ({ firstName }) => firstName),
  withState('lastName', 'setLastName', ({ lastName }) => lastName),
  withState('favoriteColor', 'setFavoriteColor', ({ favoriteColor }) => favoriteColor),
);

/* We define PersonForm as a render function that accepts an object containing
   the props and state that we expect. */
const PersonForm = ({
  firstName, setFirstName,
  lastName, setLastName,
  favoriteColor, setFavoriteColor,
}) => {
  const greeting = firstName || lastName ? `Hello ${firstName} ${lastName}` : '';
  const favMessage = favoriteColor ? `I see that your favorite color is ${favoriteColor}` : '';
  return (
    <div style={{ width: "70%" }}>
      <h3>{greeting}</h3>
      <h4>{favMessage}</h4>
      <TextInput
        name="firstName"
        label="First Name"
        value={firstName}
        onChange={ (event) => setFirstName(event.target.value) }
      />
      <TextInput
        name="lastName"
        label="Last Name"
        value={lastName}
        onChange={ (event) => setLastName(event.target.value) }
      />
      <SelectInput
        name="favoriteColor"
        label="Favorite Color"
        value={favoriteColor}
        defaultOption="Select Your Favorite Color"
        options={allColors}
        onChange={ (event) => setFavoriteColor(event.target.value) }
      />
    </div>
  );
};

export default withPerson(PersonForm);
