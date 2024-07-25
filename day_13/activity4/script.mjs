import pp from 'lodash';
import gg, {isCancel, AxiosError} from 'axios';

//task 6
let arr =[2,4,21,55,23,3,22,2];
console.log(pp.mean(arr));

//task 7
gg.get('https://api.github.com/users/krosmos')
.then((response)=>console.log(response))
.catch((error)=>console.log(error));