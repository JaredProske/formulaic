import React, { useState } from 'react';
import { useUpdateTitle } from '../TitleContext';

export const TitleForm = () => {
  const [value, setValue] = useState("");
  const updateTitle = useUpdateTitle();

  const onSubmit = (e:any) => {e.preventDefault(); updateTitle(value);}

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