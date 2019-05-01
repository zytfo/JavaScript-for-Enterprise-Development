import axios from 'axios';
import moxios from 'moxios';
import { loadItemsActionCreator } from "../redux/actionCreators/load-items"


const dispatch = jest.fn();


describe('action loadItemsActionCreator', () => {

    beforeEach(() => {
        moxios.install()
    });

    it('tests moxios', (done) => {

        let onFulfilled = jest.fn();

        moxios.stubRequest('/any/text', {
            status: 200,
            responseText: 'text'
        });

        axios.get('/any/text').then(onFulfilled);

        moxios.wait(function () {
            expect(onFulfilled).toBeCalled();
            done()
        })
    });

    it('works fine', (done) => {
        moxios.stubRequest('https://cors-anywhere.herokuapp.com/http://steamcommunity.com/profiles/76561198205886600/inventory/json/440/2/', {
            status: 200,
            responseText: {
                results: [{ test: 'data' }]
            }
        });

        const dispatcher = loadItemsActionCreator();
        expect(typeof dispatcher).toBe('function');

        dispatcher(dispatch);

        moxios.wait(function () {
            const req = moxios.requests.mostRecent();
            expect(dispatch).toBeCalledTimes(0);
            done()
        })
    });

    afterEach(() => {
        moxios.uninstall()
    })
});
