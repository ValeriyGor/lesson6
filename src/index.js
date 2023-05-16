import Comment from "./Comment";
import './styles/styles.css'
import './styles/less/styles.less'
import './styles/scss/styles.sass'
import userAvatar from './assets/user.jpg'

const comment = new Comment('Lesson 6 about Webpack!!!', userAvatar);

console.log(comment.toString());