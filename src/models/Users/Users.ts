import { Http } from "../../globals";
import { controllers, codeAnswer } from "../../globals/constants/constants";
import {IHttp, IUsers} from '../../typesAndInterfaces/interfaces';

const getAll = async (): Promise<IHttp.Get<IUsers.Db>> => await Http.get(controllers.users);
const getByUsernameAndPassword = async (username: string, password: string): Promise<IHttp.Get<IUsers.Db>> => {
	const request = await Http.get<IUsers.Db>(controllers.users);
	if (request.code === codeAnswer.ok) {
		const user = request.data?.find(user => user.username === username && user.password === password)
		request.data = user ? [user] : undefined;
	}
	return request;
}

export {
	getAll,
	getByUsernameAndPassword
}