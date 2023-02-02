import { error } from 'console';
import { fetchItems } from './fetchItems';

describe('fetchItems', () => {
	const users = [
		{
			id: 1,
			email: 'test@test.com',
			first_name: 'test',
			last_name: 'test',
			avatar: 'avatar',
		},
	];
	const fetchSpy = jest.spyOn(window, 'fetch');
	it('it returns error of resource is empty', async () => {
		const response = await fetchItems('jakiś strink');
		expect(fetchSpy).toBeCalledTimes(0);
		expect(response).toEqual({ success: false });
	});
	it('it returns promise resolve', async () => {
		fetchSpy.mockImplementationOnce(() =>
			Promise.resolve({
				json: () => Promise.resolve({ data: users }),
			} as Response)
		);
		const response = await fetchItems('users');
		expect(fetchSpy).toBeCalledWith('https://reqres.in/api/users');
		expect(fetchSpy).toBeCalledTimes(1);
		expect(response).toEqual({ resource: users, success: true });
	});
    it('it returnes promise reject', async () => {
        fetchSpy.mockImplementationOnce(() => Promise.reject({
            json: () => Promise.reject({data: users}),
        } as Response))
        const response = await fetchItems("users");
        expect(response).toEqual({success:false})
        expect(fetchSpy).toBeCalledTimes(1);
    })
});
