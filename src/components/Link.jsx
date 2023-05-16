import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Link = () => {
  const [blogName, setBlogName] = useState('');
  const [description, setDescription] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    
    setBlogName('');
    setDescription('');
    setAuthorName('');
  }
  return (
    <div style={{padding:'100px'}}>
        <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TextField
                    label="Blog Name"
                    value={blogName}
                    onChange={e => setBlogName(e.target.value)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField
                    label="Description"
                    multiline
                    rows={4}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField
                    label="Author Name"
                    value={authorName}
                    onChange={e => setAuthorName(e.target.value)}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Button type="submit" variant="contained" color="primary">Submit</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </form>
    </div>
  )
}

export default Link