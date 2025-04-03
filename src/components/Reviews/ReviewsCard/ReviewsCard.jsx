import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function ReviewsCard({reviews, isAuth, onDelete}) {
  return (
    <div className="container">
      {reviews.map((item) => (
        <Card key={item.id} sx={{ width: 380, mb: 2, m: 'auto 5'}}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.author}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.text}
            </Typography>
          </CardContent>

        {isAuth ? <Button
            variant="text"
            color="error"
          >
            Delete
          </Button> : ''}
        </Card>
      ))}
    </div>
  );
}
