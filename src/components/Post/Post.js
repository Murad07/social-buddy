import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Comments from '../Comments/Comments';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    color: '#2E4053',
  },
});

const Post = (props) => {
  const { id, title, body } = props.post;

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
        {props.homePage && (
          <Button variant='contained' color='primary'>
            <Link
              style={{ color: 'inherit', textDecoration: 'inherit' }}
              to={`/postDetail/${id}`}
            >
              See More
            </Link>
          </Button>
        )}
        {!props.homePage && <Comments key={id} id={id}></Comments>}
      </CardActions>
    </Card>
  );
};

export default Post;
