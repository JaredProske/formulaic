import React, { useState } from 'react';
import { useUpdateTitle } from '../TitleContext';

export const TitleForm = () => {
  const [value, setValue] = useState("");
  const updateTitle = useUpdateTitle();

  const onSubmit = () => updateTitle(value);

  return (
    <form onSubmit={onSubmit}>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
        <input type='text'
          placeholder='enter title and press enter'
          onChange={e => setValue(e.target.value)}
          value={value}
        />
      </div>
    </form>
  )
};

// export default class TitleForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: '' };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleKeyUp = this.handleKeyUp.bind(this);
//   }

//   handleKeyUp(event) {
//     if (event.keyCode === 13) {
//       location.search = stringify({ title: this.state.title });
//     }
//   }

//   handleChange(event) {
//     this.setState({ title: event.target.value });
//   }

//   render() {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
//         <input type='text'
//           placeholder='enter title and press enter'
//           onChange={this.handleChange}
//           onKeyUp={this.handleKeyUp} />
//       </div>
//     );
//   }
// }
