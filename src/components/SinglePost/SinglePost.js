import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
  },
});

const SinglePost = (props) => {
  const { title, body } = props.post;

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {title}
        </Typography>

        <Typography variant='body2' component='p' color='textSecondary'>
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>See More</Button>
      </CardActions>
    </Card>
  );
};

export default SinglePost;
