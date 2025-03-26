import React, { useState } from 'react'
import styles from './ProfileFirstTab.module.scss'
import { Box, Button, TextField } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { InputField, TextareaField } from '@/shared/ui/Input/Input'
export default function ProfileFirstTab() {
  const [lang, setLang] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string)
  }
  const [image, setImage] = useState<string | null>(null)
  const [imageName, setImageName] = useState<string>('')

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
      setImageName(file.name)
    }
  }
  return (
    <div className={styles.containerTab}>
      <div className={`${styles.tabMain} ${styles.tab}`}>
        <div className={styles.blockFlex}>
          <InputField label='Full Name' placeholder='First Name' />
          <InputField label='Last Name' placeholder='Last Name' />
        </div>
        <InputField
          label='Headline'
          placeholder='Headline'
          className={styles.headlineInput}
        />
        <TextareaField label='Description' placeholder='Description' />
        <div className={styles.selectBlock}>
          <h5 className={styles.selectTitle}>Language</h5>
          <Box sx={{ maxWidth: 647 }}>
            <FormControl fullWidth variant='outlined'>
              <Select
                id='demo-simple-select'
                value={lang}
                onChange={handleChange}
                displayEmpty
                sx={{
                  '& .MuiSelect-select': {
                    color: lang ? 'inherit' : '#94a3b8'
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: '1px solid #e2e8f0'
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#c8d2dc'
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#64788c'
                  }
                }}
              >
                <MenuItem value='' disabled sx={{ color: '#94a3b8' }}>
                  Select Language
                </MenuItem>
                <MenuItem value={10}>English</MenuItem>
                <MenuItem value={20}>Spanish</MenuItem>
                <MenuItem value={30}>German</MenuItem>
                <MenuItem value={40}>French</MenuItem>
                <MenuItem value={50}>Italian</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div className={`${styles.tabImage} ${styles.tab}`}>
        <h3 className={styles.tabTitle}>Image Preview</h3>
        <Box>
          <Box
            sx={{
              width: 425,
              maxHeight: 255,
              height: '100%',
              borderRadius: 3,
              border: '1px solid #ddd',
              p: '16px'
            }}
          >
            {image ? (
              <img
                src={image}
                alt='Uploaded'
                style={{ maxHeight: '100%', maxWidth: '100%' }}
              />
            ) : (
              <p className={styles.imageText}>No image selected</p>
            )}
          </Box>

          <h3 className={styles.tabTitle}>Add/Change Image</h3>
          <Box sx={{ display: 'flex', gap: 1, mt: 1, alignItems: 'center' }}>
            <TextField
              size='small'
              fullWidth
              variant='outlined'
              value={imageName}
              placeholder='Image'
              disabled
            />
            <button className={styles.uploadButton}>
              <label>
                Upload Image
                <input
                  type='file'
                  hidden
                  onChange={handleImageChange}
                  accept='image/*'
                />
              </label>
            </button>
          </Box>

          <button disabled={!image} className={styles.imageButton}>
            Save Image
          </button>
        </Box>
      </div>
      <div className={`${styles.tabLinks} ${styles.tab}`}>
        <h3 className={styles.tabTitle}>Links</h3>
        <InputField label='Website' placeholder='Website' />
        <InputField
          label='X(Formerly Twitter)'
          placeholder='X(Formerly Twitter)'
        />
        <InputField label='Linkedin' placeholder='Linkedin' />
        <InputField label='YouTube' placeholder='YouTube' />
        <InputField label='FaceBook' placeholder='FaceBook' />
      </div>
    </div>
  )
}
