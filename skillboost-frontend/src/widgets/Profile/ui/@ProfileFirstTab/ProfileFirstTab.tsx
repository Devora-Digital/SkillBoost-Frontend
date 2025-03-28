import React, { useState } from 'react'
import styles from './ProfileFirstTab.module.scss'
import { Box, TextField } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { InputField, TextareaField } from '@/shared/ui/Input/Input'

export default function ProfileFirstTab() {
  const [lang, setLang] = React.useState('')
  const [image, setImage] = useState<string | null>(null)
  const [imageName, setImageName] = useState<string>('')
  const [imageError, setImageError] = useState<string>('')

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string)
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    setImageError('')

    if (!file) {
      setImageError('Please select an image')
      return
    }
    const validTypes = ['image/jpeg', 'image/png', 'image/gif']
    if (!validTypes.includes(file.type)) {
      setImageError('Only JPG, PNG or GIF images are allowed')
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      setImage(reader.result as string)
    }
    reader.readAsDataURL(file)
    setImageName(file.name)
  }

  const handleSaveImage = () => {
    if (!image) {
      setImageError('Please select an image first')
      return
    }
    console.log('Image saved:', image)
    alert('Image saved successfully!')
  }

  return (
    <div className={styles.containerTab}>
      <div className={`${styles.tabMain} ${styles.tab}`}>
        <div className={styles.blockFlex}>
          <InputField
            label='Full Name'
            placeholder='First Name'
            required={true}
          />
          <InputField
            label='Last Name'
            placeholder='Last Name'
            required={true}
          />
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
        <div>
          <div className={styles.boxImage}>
            {image ? (
              <img
                src={image}
                alt='Uploaded preview'
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain'
                }}
              />
            ) : (
              <p className={styles.imageText}>No image selected</p>
            )}
          </div>

          <h3 className={styles.tabTitle}>Add/Change Image</h3>
          <div className={styles.tabUpload}>
            <TextField
              size='small'
              fullWidth
              variant='outlined'
              value={imageName}
              placeholder='Image'
              disabled
              error={!!imageError}
              helperText={imageError}
            />
            <button className={styles.uploadButton}>
              <label style={{ cursor: 'pointer' }}>
                Upload Image
                <input
                  type='file'
                  hidden
                  onChange={handleImageChange}
                  accept='image/jpeg, image/png, image/gif'
                />
              </label>
            </button>
          </div>

          <button
            onClick={handleSaveImage}
            disabled={!image || !!imageError}
            className={`${styles.imageButton} ${!image || imageError ? styles.disabledButton : ''}`}
          >
            Save Image
          </button>
        </div>
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
