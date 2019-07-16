import {FETCH_POSTS, NEW_POST} from './type';

export function fetchPosts = () => dispatch => {
	return function(dispatch){
		fetch()
		.then(res => res.json())
		.then(posts => dispatch({
			type: FETCH_POSTS,
			playload: posts
		}));
	}
}