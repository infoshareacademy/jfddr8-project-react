import {fetchItems} from './fetchItems'

describe('fetchItems', ()=> {
    const users = [
        {
          id: 1,
          email: "test@test.com",
          first_name: "test",
          last_name: "test",
          avatar: "avatar",
        },
      ];

      const fetchSpy = jest.spyOn(window, 'fetch')
      it('it returns error of resource is empty', async ()=> {
        const response = await fetchItems('jakis blad');
        expect(fetchSpy).toBeCalledTimes(0)
      })
    
})