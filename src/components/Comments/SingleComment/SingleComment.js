import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    marginTop: 10,
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const SingleComment = (props) => {
  const classes = useStyles();

  const { name, email, body, id, postId } = props.comment;

  //   generate profile image from 50 image of randomuser.me api
  let imgId = id + postId;
  if (imgId > 50) {
    imgId -= 50;
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            <img
              src={`https://randomuser.me/api/portraits/med/women/${imgId}.jpg`}
              alt=''
            />
          </Avatar>
        }
        //   image='/static/images/cards/paella.jpg'
        title={name}
        subheader={email}
      />

      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SingleComment;
