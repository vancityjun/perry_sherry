// import {FETCH_POSTS, NEW_POST} from './type';

export function postActions(type, userData){
	let BaseUrl = 'http://localhost/admin.php';

	return new Promise((resolve, reject) => {
		fetch(BaseUrl+type,{
			method : 'POST',
			body: JSON.stringify(userData)
		})
		.then((response) => response.json())
		.then((responseJson) => {
			resolve(responseJson);
		})
		.catch((error) => {
			reject(error);
		});
	})
}