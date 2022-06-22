import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const chooseSkills = [
  "JavaScript", "React", "CSS", "Java"
];

export default function App() {
  const [postData, setPostData] = useState({skills: []});

  console.log(postData.skills);

  return (
    <div >
      <Autocomplete sx={{span: {marginTop:"13%"}}}
        multiple
        value={postData.skills}
        options={chooseSkills}
        getOptionLabel={(option) => option}
        onChange={(event, value) => setPostData({skills: value})}
        renderInput={(params) => (
          <TextField {...params} label="Set your skills up to 5" variant="outlined" fullWidth />
        )}
      />
    </div>
  );
}

